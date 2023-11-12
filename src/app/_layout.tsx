import { ApolloProvider } from '@apollo/client'
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import * as Font from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider as ReduxProvider } from 'react-redux'

import { getApolloClient, setupApolloClient } from '~/lib/apollo'
import { useAuthListener } from '~/lib/auth'
import { useStartBackgroundLocationUpdates } from '~/lib/tasks'
import { loadInitialAuthState, store } from '~/store'
export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const [isAppReady, setIsAppReady] = useState(false)

  useAuthListener(store.dispatch)
  useStartBackgroundLocationUpdates()

  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([
          Font.loadAsync({
            Inter_400Regular,
            Inter_500Medium,
            Inter_600SemiBold,
            Inter_700Bold,
          }),
          loadInitialAuthState(),
          setupApolloClient(),
        ])
      } catch (err) {
        throw err
      } finally {
        setIsAppReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(() => {
    if (isAppReady) {
      SplashScreen.hideAsync()
    }
  }, [isAppReady])

  if (!isAppReady) {
    return null
  }

  return (
    <GestureHandlerRootView style={styles.root} onLayout={onLayoutRootView}>
      <ApolloProvider client={getApolloClient()}>
        <ReduxProvider store={store}>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            <Slot />
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
