import { useFragment } from '@apollo/client'
import { Button, StyleSheet, View } from 'react-native'

import { Text } from '~/components/ui'
import { graphql } from '~/gql'
import { FriendRequestState } from '~/gql/graphql'
import { useUpdateFriendRequestMutation } from '~/lib/mutations/update-friend-request-mutation'

const FriendRequestItemFragment = graphql(/* GraphQL */ `
  fragment FriendRequestItem on FriendRequest {
    nodeId
    id
    state
    actionedAt
    toUser {
      nodeId
      name
    }
    fromUser {
      nodeId
      name
    }
  }
`)

export interface FriendRequestProps {
  friendRequestNodeId: string
  type: 'received' | 'sent'
}

const FriendRequest = ({ friendRequestNodeId, type }: FriendRequestProps) => {
  const { data, complete } = useFragment({
    fragment: FriendRequestItemFragment,
    fragmentName: 'FriendRequestItem',
    from: {
      nodeId: friendRequestNodeId,
    },
  })

  const [updateFriendRequest] = useUpdateFriendRequestMutation()

  if (!complete) return null

  const user = type === 'received' ? data.fromUser : data.toUser

  return (
    <View style={styles.wrapper}>
      <Text>{type === 'received' ? 'From: ' : 'To: '}</Text>
      <Text>{user.name}</Text>
      <Text> ({data.state})</Text>
      {type === 'received' && (
        <>
          <Button
            title="Decline"
            onPress={() => {
              updateFriendRequest({
                variables: {
                  nodeId: data.nodeId,
                  state: FriendRequestState.Rejected,
                },
              })
            }}
          />
          <Button
            title="Accept"
            onPress={() => {
              updateFriendRequest({
                variables: {
                  nodeId: data.nodeId,
                  state: FriendRequestState.Accepted,
                },
              })
            }}
          />
        </>
      )}
      {type === 'sent' && (
        <Button
          title="Cancel"
          onPress={() => {
            updateFriendRequest({
              variables: {
                nodeId: data.nodeId,
                state: FriendRequestState.Cancelled,
              },
            })
          }}
        />
      )}
    </View>
  )
}

export default FriendRequest

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
