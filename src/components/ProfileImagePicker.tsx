import { useApolloClient, useFragment } from '@apollo/client'
import { decode } from 'base64-arraybuffer'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { ActivityIndicator, Alert, Button, Image, View } from 'react-native'

import { graphql } from '~/gql'
import { useUser } from '~/lib/auth'
import { getAvatarUrl } from '~/lib/avatars'
import { lookupMime } from '~/lib/mime'
import { ViewerQuery } from '~/lib/queries/viewer-query'
import supabase from '~/lib/supabase'

const ProfileItemFragment = graphql(/* GraphQL */ `
  fragment ProfileItem on Profile {
    nodeId
    name
    avatarPath
  }
`)

export interface ProfileImagePickerProps {
  profileNodeId: string
}

export default function ProfileImagePicker({
  profileNodeId,
}: ProfileImagePickerProps) {
  const client = useApolloClient()

  const user = useUser()
  const { data: profile } = useFragment({
    fragment: ProfileItemFragment,
    fragmentName: 'ProfileItem',
    from: {
      nodeId: profileNodeId,
    },
  })

  const [isUploading, setIsUploading] = useState(false)

  const pickImage = async () => {
    setIsUploading(true)

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    })

    if (!result.canceled && user !== null) {
      const { uri, base64 } = result.assets[0]
      const extension = uri.split('.').pop()

      if (!base64 || !extension) {
        setIsUploading(false)
        return
      }

      const nowStr = new Date().getTime().toString()
      const path = `${user.id}/avatar-${nowStr}.${extension}`

      const { error } = await supabase.storage
        .from('avatars')
        .upload(path, decode(base64), {
          cacheControl: `${60 * 60 * 24 * 365}`,
          contentType: lookupMime(extension),
        })

      if (error) {
        setIsUploading(false)
        return Alert.alert('Error uploading image', error.message)
      }

      await client.refetchQueries({
        include: [ViewerQuery],
      })
    }

    setIsUploading(false)
  }

  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {isUploading && <ActivityIndicator />}
      {profile?.avatarPath && (
        <Image
          source={{ uri: getAvatarUrl(profile.avatarPath) }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  )
}
