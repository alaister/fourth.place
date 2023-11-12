import { useQuery } from '@apollo/client'

import { graphql } from '~/gql'

export const ViewerQuery = graphql(/* GraphQL */ `
  query Viewer {
    viewer {
      nodeId
      ...ProfileItem
    }
  }
`)

export function useViewerQuery() {
  return useQuery(ViewerQuery)
}
