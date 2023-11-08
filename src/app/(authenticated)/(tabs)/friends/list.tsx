import { X } from 'lucide-react-native'
import { FlatList, Pressable, View } from 'react-native'

import Friend from '~/components/Friend'
import { useDeleteFriendMutation } from '~/lib/mutations/delete-friend-mutation'
import { useFriendsQuery } from '~/lib/queries/friends-query'

export default function FriendsListScreen() {
  const { data } = useFriendsQuery()
  const friends = data?.viewer?.friendCollection?.edges.map(({ node }) => node)

  const [deleteFriend] = useDeleteFriendMutation()

  return (
    <View>
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
      />
    </View>
  )
}
