import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

import AppleAuthentication from '~/components/auth/AppleAuthentication'
import GoogleAuthentication from '~/components/auth/GoogleAuthentication'

const LoginScreen = () => {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <AppleAuthentication
        onSignIn={() => {
          router.replace('/')
        }}
      />

      <GoogleAuthentication
        onSignIn={() => {
          router.replace('/')
        }}
      />

      {/* <Button
        disabled={!request}
        onPress={() => {
          promptAsync()
        }}
      >
        Login with Google
      </Button> */}
    </View>
  )
}

export default LoginScreen
