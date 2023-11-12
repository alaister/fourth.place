import { useFragment } from '@apollo/client'
import { formatDistanceToNow } from 'date-fns'
import { ArrowUpRight } from 'lucide-react-native'
import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { graphql } from '~/gql'
import { formatDistance } from '~/lib/formatters'

const FriendItemFragment = graphql(/* GraphQL */ `
  fragment FriendItem on Friend {
    id
    nodeId
    profile: profileB {
      nodeId
      id
      name
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
