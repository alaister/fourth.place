import * as AppleAuthentication from 'expo-apple-authentication'
import * as Crypto from 'expo-crypto'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import supabase from '~/lib/supabase'

const LoginScreen = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        {isLoading && (
          <View
            style={{
              zIndex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderRadius: 5,
            }}
          >
            <ActivityIndicator color="#fff" />
          </View>
        )}

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
            setIsLoading(true)

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

              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'apple',
                token: credential.identityToken,
                nonce,
              })
              if (error) throw error

              if (credential.fullName !== null) {
                await supabase
                  .from('profiles')
                  .update({
                    name: `${credential.fullName.givenName} ${credential.fullName.familyName}`,
                  })
                  .eq('id', data.user.id)
              }

              router.replace('/')
            } catch (e: any) {
              setIsLoading(false)
              console.log('error:', e)
              if (e.code === 'ERR_CANCELED') {
                // handle that the user canceled the sign-in flow
              } else {
                // handle other errors
              }
            }
          }}
        />
      </View>

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
