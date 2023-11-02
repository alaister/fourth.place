import { useMutation } from '@apollo/client'
import { produce } from 'immer'

import { FriendRequestsQuery } from '../queries/friend-requests-query'

import { graphql } from '~/gql'

export const InsertFriendRequestMutation = graphql(/* GraphQL */ `
  mutation InsertFriendRequest($toUserId: UUID!) {
    insertIntoFriendRequestCollection(objects: [{ toUserId: $toUserId }]) {
      records {
        ...FriendRequestItem
      }
    }
  }
`)

export function useInsertFriendRequestMutation() {
  return useMutation(InsertFriendRequestMutation, {
    onCompleted(data) {
      console.log('data:', data.insertIntoFriendRequestCollection?.records)
    },
    onError(error) {
      console.log('error:', error)
    },
    update(cache, { data }) {
      const record = data?.insertIntoFriendRequestCollection?.records?.[0]
      if (record) {
        cache.updateQuery(
          {
            query: FriendRequestsQuery,
          },
          (data) =>
            produce(data, (draft) => {
              draft?.viewer?.sentFriendRequestCollection?.edges.unshift({
                __typename: 'FriendRequestEdge' as const,
                node: record,
              })
            }),
        )
      }
    },
  })
}
