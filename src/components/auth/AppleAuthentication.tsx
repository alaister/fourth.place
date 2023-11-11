import {
  AppleAuthenticationButton,
  AppleAuthenticationButtonType,
  AppleAuthenticationButtonStyle,
  signInAsync,
  AppleAuthenticationScope,
} from 'expo-apple-authentication'
import * as Crypto from 'expo-crypto'
import { useState } from 'react'
import { ActivityIndicator, Platform, View } from 'react-native'

import supabase from '~/lib/supabase'

export interface AppleAuthenticationProps {
  onSignIn?: () => void
}

const AppleAuthentication = ({ onSignIn }: AppleAuthenticationProps) => {
  const [isLoading, setIsLoading] = useState(false)

  if (Platform.OS !== 'ios') {
    return null
  }

  return (
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

      <AppleAuthenticationButton
        buttonType={AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthenticationButtonStyle.WHITE_OUTLINE}
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

            const credential = await signInAsync({
              requestedScopes: [
                AppleAuthenticationScope.FULL_NAME,
                AppleAuthenticationScope.EMAIL,
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

            onSignIn?.()
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
  )
}

export default AppleAuthentication
