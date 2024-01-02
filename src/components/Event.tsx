import { useFragment } from '@apollo/client'
import { formatRelative } from 'date-fns'
import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import { Text } from '~/components/ui'
import { graphql } from '~/gql'

const EventItemFragment = graphql(/* GraphQL */ `
  fragment EventItem on Event {
    id
    nodeId
    name
    startAt
    endAt
    hostCollection: eventParticipantCollection(filter: { role: { eq: HOST } }) {
      edges {
        node {
          nodeId
          profile {
            nodeId
            name
            avatarPath
          }
        }
      }
    }
  }
`)

export interface EventProps {
  eventNodeId: string
}

const Event = ({ eventNodeId }: EventProps) => {
  const { data, complete } = useFragment({
    fragment: EventItemFragment,
    fragmentName: 'EventItem',
    from: {
      nodeId: eventNodeId,
    },
  })

  if (!complete) return null

  const hosts = data.hostCollection?.edges.map(({ node }) => node) ?? []

  return (
    <Link href={`/(authenticated)/(tabs)/(events)/${data.id}`}>
      <Text>{data.name}</Text>
      {data.startAt && (
        <View>
          <Text>{formatRelative(new Date(data.startAt), new Date())}</Text>
        </View>
      )}
      {hosts.length > 0 && (
        <View>
          {hosts.map((host) => (
            <Text key={host.nodeId}>{host.profile.name}</Text>
          ))}
        </View>
      )}
    </Link>
  )
}

export default Event

const styles = StyleSheet.create({})
