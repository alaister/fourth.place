import { router, useLocalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Button, Platform, StyleSheet, View } from 'react-native'

import { Text } from '~/components/ui'
import { useInsertFriendRequestMutation } from '~/lib/mutations/insert-friend-request-mutation'
import { usePreviewProfileQuery } from '~/lib/queries/preview-profile-query'
import { first } from '~/lib/utils'

export default function AddFriendModalScreen() {
  const { id: _id } = useLocalSearchParams()
  const id = first(_id)

  const { data } = usePreviewProfileQuery(id)

  const [insertFriendRequest] = useInsertFriendRequestMutation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Friend</Text>
      <View style={styles.separator} />

      <Button
        title="Send Friend Request"
        onPress={() => {
          if (data?.profile) {
            insertFriendRequest({
              variables: {
                toUserId: data.profile.id,
              },
              onCompleted() {
                router.replace('/(authenticated)/(tabs)/friends')
              },
            })
          }
        }}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
