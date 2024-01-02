import { Link, Stack } from 'expo-router'
import { PlusIcon } from 'lucide-react-native'
import { Pressable } from 'react-native'

export default function Layout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: 'Events',
          headerRight() {
            return (
              <Link href="/(authenticated)/(tabs)/(events)/new" asChild>
                <Pressable>
                  <PlusIcon />
                </Pressable>
              </Link>
            )
          },
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          title: 'New Event',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Event',
        }}
      />
    </Stack>
  )
}
