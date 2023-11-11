import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import { Platform, View } from 'react-native'

import supabase from '~/lib/supabase'

export interface GoogleAuthenticationProps {
  onSignIn?: () => void
}

const GoogleAuthentication = ({ onSignIn }: GoogleAuthenticationProps) => {
  if (Platform.OS !== 'android') {
    return null
  }

  GoogleSignin.configure({
    scopes: ['email', 'profile'],
    webClientId:
      '825660114030-4fbdo4kep3smjbuuipvci2de2j940lpd.apps.googleusercontent.com',
  })

  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn()
            if (userInfo.idToken) {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
              })
              if (error) throw error

              onSignIn?.()
            } else {
              throw new Error('no ID token present!')
            }
          } catch (error: any) {
            console.log('error:', error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
        }}
      />
    </View>
  )
}

export default GoogleAuthentication
