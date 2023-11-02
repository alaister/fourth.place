import { Stack } from 'expo-router'

export default function FriendsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Friend Requests' }} />
      <Stack.Screen
        name="list"
        options={{ title: 'Friends', headerBackTitleVisible: false }}
      />
    </Stack>
  )
}
