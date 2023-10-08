import { Redirect, Stack } from 'expo-router'

import { useIsSignedIn } from '~/lib/auth'

const AuthenticatedLayout = () => {
  const isSignedIn = useIsSignedIn()

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}

export default AuthenticatedLayout
