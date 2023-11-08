import { useMutation } from '@apollo/client'
import { produce } from 'immer'

import { FriendsQuery } from '../queries/friends-query'

import { graphql } from '~/gql'

export const DeleteFriendMutation = graphql(/* GraphQL */ `
  mutation DeleteFriend($nodeId: ID!) {
    deleteFromFriendCollection(filter: { nodeId: { eq: $nodeId } }) {
      records {
        ...FriendItem
      }
    }
  }
`)

export function useDeleteFriendMutation() {
  return useMutation(DeleteFriendMutation, {
    update(cache, { data }) {
      const record = data?.deleteFromFriendCollection?.records?.[0]
      if (record) {
        cache.updateQuery(
          {
            query: FriendsQuery,
          },
          (data) =>
            produce(data, (draft) => {
              if (draft?.viewer?.friendCollection?.edges) {
                const index = draft.viewer.friendCollection.edges.findIndex(
                  (edge) => edge.node.nodeId === record.nodeId,
                )

                draft.viewer.friendCollection.edges.splice(index, 1)
              }
            }),
        )
      }
    },
  })
}
