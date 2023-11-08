import { useQuery } from '@apollo/client'

import { graphql } from '~/gql'

export const FriendsQuery = graphql(/* GraphQL */ `
  query Friends {
    viewer {
      nodeId
      friendCollection {
        edges {
          node {
            nodeId
            ...FriendItem @nonreactive
          }
        }
      }
    }
  }
`)

export function useFriendsQuery() {
  return useQuery(FriendsQuery)
}
