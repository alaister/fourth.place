import { useApolloClient } from '@apollo/client'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { Button, Dimensions, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import ProfileImagePicker from '~/components/ProfileImagePicker'
import { Text } from '~/components/ui'
import { useUser } from '~/lib/auth'
import { useViewerQuery } from '~/lib/queries/viewer-query'
import supabase from '~/lib/supabase'

const logo = require('../../../../../assets/images/icon.png')

const ProfileScreen = () => {
  const client = useApolloClient()
  const user = useUser()
  const { data: profile } = useViewerQuery()

  const friendAddUrl = useMemo(
    () => Linking.createURL(`/add-friend/${user?.id}`),
    [user?.id],
  )

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

      {profile?.viewer && (
        <ProfileImagePicker profileNodeId={profile.viewer.nodeId} />
      )}

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
