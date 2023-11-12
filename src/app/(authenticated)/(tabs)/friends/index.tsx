import * as Location from 'expo-location'
import { Link } from 'expo-router'
import { X } from 'lucide-react-native'
import { useCallback } from 'react'
import { FlatList, Pressable, RefreshControl, View } from 'react-native'

import Friend from '~/components/Friend'
import { useDeleteFriendMutation } from '~/lib/mutations/delete-friend-mutation'
import { useFriendsQuery } from '~/lib/queries/friends-query'
import { updateUserLocation } from '~/lib/tasks'
import { useRefresh } from '~/lib/utils'

export default function FriendsListScreen() {
  const { data, refetch } = useFriendsQuery()
  const [isRefetching, onRefresh] = useRefresh(
    useCallback(async () => {
      try {
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Low,
        })

        await updateUserLocation(location.coords)

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        // ignore error
      }

      await refetch()
    }, [refetch]),
  )

  const friends = data?.viewer?.friendCollection?.edges.map(({ node }) => node)

  const [deleteFriend] = useDeleteFriendMutation()

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <Friend
            friendNodeId={item.nodeId}
            action={
              <Pressable
                onPress={() => {
                  deleteFriend({
                    variables: {
                      nodeId: item.nodeId,
                    },
                  })
                }}
              >
                {({ pressed }) => <X />}
              </Pressable>
            }
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <View>
            <Link href="/(authenticated)/(tabs)/friends/requests">
              Requests
            </Link>
          </View>
        }
      />
    </View>
  )
}
