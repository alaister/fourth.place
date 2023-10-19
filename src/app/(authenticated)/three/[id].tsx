import { useQuery } from '@apollo/client'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

import { graphql } from '~/gql'

const ThingQueryDocument = graphql(/* GraphQL */ `
  query Thing($id: ID!) {
    thing: node(nodeId: $id) {
      ...ThingItem
      ... on Things {
        createdAt
      }
    }
  }
`)

const Something = () => {
  const { id } = useLocalSearchParams()
  const { data, loading } = useQuery(ThingQueryDocument, {
    variables: { id: id as string },
    returnPartialData: true,
  })

  if (data?.thing?.__typename === 'Things') {
    return (
      <View>
        <Text>{data.thing.title}</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Not found</Text>
    </View>
  )
}

export default Something
