import { useMutation } from '@apollo/client'
import { produce } from 'immer'

import { FriendRequestsQuery } from '../queries/friend-requests-query'

import { graphql } from '~/gql'
import { FriendRequestState } from '~/gql/graphql'

export const UpdateFriendRequestMutation = graphql(/* GraphQL */ `
  mutation UpdateFriendRequest($nodeId: ID!, $state: FriendRequestState!) {
    updateFriendRequestCollection(
      set: { state: $state }
      filter: { nodeId: { eq: $nodeId } }
    ) {
      records {
        ...FriendRequestItem
      }
    }
  }
`)

export function useUpdateFriendRequestMutation() {
  return useMutation(UpdateFriendRequestMutation, {
    onCompleted(data) {
      console.log('data:', data)
    },
    onError(error) {
      console.log('error:', error)
    },
    update(cache, { data }) {
      const record = data?.updateFriendRequestCollection.records?.[0]
      if (record?.state === FriendRequestState.Cancelled) {
        cache.updateQuery(
          {
            query: FriendRequestsQuery,
          },
          (data) =>
            produce(data, (draft) => {
              if (draft?.viewer?.sentFriendRequestCollection?.edges) {
                const index =
                  draft.viewer.sentFriendRequestCollection.edges.findIndex(
                    (edge) => edge.node.nodeId === record.nodeId,
                  )

                draft.viewer.sentFriendRequestCollection.edges.splice(index, 1)
              }
            }),
        )
      }
    },
  })
}
