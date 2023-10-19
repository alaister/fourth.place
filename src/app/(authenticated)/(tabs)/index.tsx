import { useApolloClient, useQuery } from '@apollo/client'
import { Button, StyleSheet } from 'react-native'

import EditScreenInfo from '~/components/EditScreenInfo'
import { Text, View } from '~/components/Themed'
import ThingItem from '~/components/ThingItem'
import { graphql } from '~/gql'
import supabase from '~/lib/supabase'

const allThingsQueryDocument = graphql(/* GraphQL */ `
  query AllThings($cursor: Cursor) {
    thingsCollection(first: 1, after: $cursor) {
      edges {
        node {
          nodeId
          ...ThingItem @nonreactive
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)

export default function TabOneScreen() {
  const { data, loading, error, fetchMore } = useQuery(allThingsQueryDocument)
  const client = useApolloClient()

  if (loading) return null
  if (error) return null
  if (!data) return null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {data.thingsCollection?.edges.map(({ node }) => (
        <ThingItem key={node.nodeId} thingId={node.nodeId} />
      ))}
      {data.thingsCollection?.pageInfo.hasNextPage && (
        <Button
          title="Load More"
          onPress={() => {
            fetchMore({
              variables: {
                cursor: data.thingsCollection?.pageInfo.endCursor,
              },
            })
          }}
        />
      )}

      <Button
        title="Sign Out"
        onPress={() => {
          supabase.auth.signOut()
          client.resetStore()
        }}
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
