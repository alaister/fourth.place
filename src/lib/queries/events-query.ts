import { useQuery } from '@apollo/client'

import { graphql } from '~/gql'

export const EventsQuery = graphql(/* GraphQL */ `
  query Events {
    eventCollection {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          nodeId
          ...EventItem @nonreactive
        }
      }
    }
  }
`)

export function useEventsQuery() {
  return useQuery(EventsQuery)
}
