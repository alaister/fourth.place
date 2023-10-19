import { useFragment } from '@apollo/client'
import { Link } from 'expo-router'
import { View } from 'react-native'

import { graphql } from '~/gql'

export const ThingItemFragment = graphql(/* GraphQL */ `
  fragment ThingItem on Things {
    nodeId
    title
  }
`)

export interface ThingProps {
  thingId: string
}

const ThingItem = ({ thingId }: ThingProps) => {
  const { data } = useFragment({
    fragment: ThingItemFragment,
    fragmentName: 'ThingItem',
    from: {
      __typename: 'Things',
      nodeId: thingId,
    },
  })

  return (
    <View>
      <Link href={`/three/${data.nodeId}`}>{data.title}</Link>
    </View>
  )
}

export default ThingItem
