import { Text, View } from 'react-native'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { TabOne_Query } from './__generated__/TabOne_Query.graphql'
import CurrentUser from '../CurrentUser'

const TabOneQuery = graphql`
  query TabOne_Query {
    viewer {
      ...CurrentUser_profile
    }
  }
`

const TabOne = () => {
  const data = useLazyLoadQuery<TabOne_Query>(TabOneQuery, {})

  return (
    <View>
      {data.viewer ? (
        <CurrentUser currentUser={data.viewer} />
      ) : (
        <Text>No user</Text>
      )}
    </View>
  )
}

export default TabOne
