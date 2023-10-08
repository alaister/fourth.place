import * as AppleAuthentication from 'expo-apple-authentication'
import * as Crypto from 'expo-crypto'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

import { useIsSignedIn } from '~/lib/auth'
import supabase from '~/lib/supabase'

const LoginScreen = () => {
  const router = useRouter()

  const isSignedIn = useIsSignedIn()
  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(authenticated)/(tabs)')
    }
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={
          AppleAuthentication.AppleAuthenticationButtonStyle.WHITE_OUTLINE
        }
        cornerRadius={5}
        style={{
          width: '100%',
          height: 44,
        }}
        onPress={async () => {
          try {
            const nonce = Crypto.randomUUID()
            const hashedNonce = await Crypto.digestStringAsync(
              Crypto.CryptoDigestAlgorithm.SHA256,
              nonce,
            )

            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
              nonce: hashedNonce,
            })

            if (!credential.identityToken) {
              throw new Error('No identity token')
            }

            const { error } = await supabase.auth.signInWithIdToken({
              provider: 'apple',
              token: credential.identityToken,
              nonce,
            })
            if (error) throw error

            router.replace('/')
          } catch (e: any) {
            console.log('error:', e)
            if (e.code === 'ERR_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
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
