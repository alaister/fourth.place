import { FlatList, RefreshControl, StyleSheet } from 'react-native'

import Event from '~/components/Event'
import { useEventsQuery } from '~/lib/queries/events-query'
import { useRefresh } from '~/lib/utils'

const ProfileScreen = () => {
  const { data, refetch } = useEventsQuery()
  const [isRefetching, onRefresh] = useRefresh(refetch)

  const events = data?.eventCollection?.edges.map(({ node }) => node)

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <Event eventNodeId={item.nodeId} />}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
      }
    />
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
