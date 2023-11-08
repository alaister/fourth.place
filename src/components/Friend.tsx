import { useFragment } from '@apollo/client'
import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { graphql } from '~/gql'

const FriendItemFragment = graphql(/* GraphQL */ `
  fragment FriendItem on Friend {
    id
    nodeId
    profile: profileB {
      nodeId
      id
      name
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

  return (
    <View style={styles.wrapper}>
      <Text>{data.profile.name}</Text>
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
})
