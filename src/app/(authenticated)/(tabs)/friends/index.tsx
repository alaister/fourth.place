import { Link } from 'expo-router'
import { useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'

import FriendRequest from '~/components/FriendRequest'
import { useFriendRequestsQuery } from '~/lib/queries/friend-requests-query'

export default function FriendsScreen() {
  const { data, refetch, loading } = useFriendRequestsQuery()

  const [isRefetching, setIsRefetching] = useState(false)
  const onRefresh = () => {
    setIsRefetching(true)

    refetch().finally(() => {
      setIsRefetching(false)
    })
  }

  const receivedFriendRequests =
    data?.viewer?.receivedFriendRequestCollection?.edges.map(({ node }) => ({
      ...node,
      type: 'received' as const,
    })) ?? []
  const sentFriendRequests =
    data?.viewer?.sentFriendRequestCollection?.edges.map(({ node }) => ({
      ...node,
      type: 'sent' as const,
    })) ?? []

  const lastReceivedFriendRequestId: string | undefined =
    receivedFriendRequests[receivedFriendRequests.length - 1]?.id
  const allFriendRequests = [...receivedFriendRequests, ...sentFriendRequests]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>

      <Link href="/(authenticated)/(tabs)/friends/list">All Friends</Link>

      <FlatList
        data={allFriendRequests}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={({ leadingItem }) => {
          if (
            lastReceivedFriendRequestId !== undefined &&
            leadingItem?.id === lastReceivedFriendRequestId
          ) {
            return (
              <View>
                <Text>Sent Friend Requests</Text>
              </View>
            )
          }

          return null
        }}
        renderItem={({ item }) => (
          <FriendRequest friendRequestNodeId={item.nodeId} type={item.type} />
        )}
      />
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
