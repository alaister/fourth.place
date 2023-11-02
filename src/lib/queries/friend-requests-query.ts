import { useQuery } from '@apollo/client'

import { graphql } from '~/gql'

export const FriendRequestsQuery = graphql(/* GraphQL */ `
  query FriendRequests {
    viewer {
      receivedFriendRequestCollection(
        filter: { state: { eq: PENDING } }
        orderBy: { createdAt: DescNullsLast }
      ) {
        edges {
          node {
            ...FriendRequestItem @nonreactive
          }
        }
      }
      sentFriendRequestCollection(
        filter: { state: { eq: PENDING } }
        orderBy: { createdAt: DescNullsLast }
      ) {
        edges {
          node {
            ...FriendRequestItem @nonreactive
          }
        }
      }
    }
  }
`)

export function useFriendRequestsQuery() {
  return useQuery(FriendRequestsQuery)
}
