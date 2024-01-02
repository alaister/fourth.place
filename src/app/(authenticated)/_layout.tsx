import { Redirect, Stack } from 'expo-router'
import { useEffect } from 'react'
import * as Location from 'expo-location'

import { useIsSignedIn } from '~/lib/auth'

const AuthenticatedLayout = () => {
  const isSignedIn = useIsSignedIn()

  useEffect(() => {
    ;(async () => {
      const stuff = await Location.requestForegroundPermissionsAsync()
      console.log('stuff:', stuff)

      // if (status !== 'granted') {
      //   return;
      // }
    })()
  }, [])

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />
  }

  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="add-friend/[id]"
        options={{ title: 'Add Friend', presentation: 'modal' }}
      />
    </Stack>
  )
}

export default AuthenticatedLayout
