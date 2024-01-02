import { useFragment } from '@apollo/client'
import { formatDistanceToNow } from 'date-fns'
import { ArrowUpRight } from 'lucide-react-native'
import { ReactNode } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { Text } from '~/components/ui'
import { graphql } from '~/gql'
import { getAvatarUrl } from '~/lib/avatars'
import { formatDistance } from '~/lib/formatters'

const FriendItemFragment = graphql(/* GraphQL */ `
  fragment FriendItem on Friend {
    id
    nodeId
    profile: profileB {
      nodeId
      id
      name
      avatarPath
      friendDistance {
        nodeId
        distance
        updatedAt
      }
    }
  }
`)

export interface FriendProps {
  friendNodeId: string
  action?: ReactNode
}

const Friend = ({ friendNodeId, action }: FriendProps) => {
  const { data, complete } = useFragment({
    fragment: FriendItemFragment,
    fragmentName: 'FriendItem',
    from: {
      nodeId: friendNodeId,
    },
  })

  if (!complete) return null

  const distance = data.profile.friendDistance?.distance
  const distanceUpdatedAt = data.profile.friendDistance?.updatedAt

  return (
    <View style={styles.wrapper}>
      <Image
        source={{ uri: getAvatarUrl(data.profile.avatarPath ?? null) }}
        style={{ width: 40, height: 40, borderRadius: 99999 }}
      />

      <Text>{data.profile.name}</Text>
      <View style={styles.distanceWrapper}>
        <ArrowUpRight size={16} />
        {distance !== undefined && distance !== null ? (
          <View>
            <Text>{formatDistance(distance)} away</Text>
            {distanceUpdatedAt && (
              <Text>
                {formatDistanceToNow(new Date(distanceUpdatedAt), {
                  addSuffix: true,
                })}
              </Text>
            )}
          </View>
        ) : (
          <Text>Unknown</Text>
        )}
      </View>
      {action}
    </View>
  )
}

export default Friend

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  distanceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
})
