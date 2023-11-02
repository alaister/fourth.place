import { useApolloClient } from '@apollo/client'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { Button, Dimensions, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import { useUser } from '~/lib/auth'
import supabase from '~/lib/supabase'

const logo = require('../../../../assets/images/icon.png')

const ProfileScreen = () => {
  const client = useApolloClient()
  const user = useUser()

  const friendAddUrl = useMemo(
    () => Linking.createURL(`/add-friend/${user?.id}`),
    [user?.id],
  )
  console.log('friendAddUrl:', friendAddUrl)

  return (
    <View>
      <Text>Profile</Text>

      <View>
        <QRCode
          value={friendAddUrl}
          logo={logo}
          size={Dimensions.get('window').width / 2}
        />
      </View>

      <Button
        title="Sign Out!"
        onPress={() => {
          supabase.auth.signOut()
          client.resetStore()
        }}
      />
    </View>
  )
}

export default ProfileScreen
