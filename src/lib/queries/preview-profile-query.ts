import { useQuery } from '@apollo/client'

import { graphql } from '~/gql'

export const PreviewProfileQuery = graphql(/* GraphQL */ `
  query PreviewProfile($id: UUID!) {
    profile: previewProfile(id: $id) {
      nodeId
      id
      name
      avatarPath
    }
  }
`)

export function usePreviewProfileQuery(id: string) {
  return useQuery(PreviewProfileQuery, {
    variables: {
      id,
    },
  })
}
