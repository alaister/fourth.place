import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'

import FriendRequest from '~/components/FriendRequest'
import { Text } from '~/components/ui'
import { useFriendRequestsQuery } from '~/lib/queries/friend-requests-query'
import { useRefresh } from '~/lib/utils'

export default function FriendsScreen() {
  const { data, refetch } = useFriendRequestsQuery()
  const [isRefetching, onRefresh] = useRefresh(refetch)

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

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
