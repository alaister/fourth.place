import { Text, View } from 'react-native'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { CurrentUser_profile$key } from './__generated__/CurrentUser_profile.graphql'

const CurrentUserFragment = graphql`
  fragment CurrentUser_profile on Profiles {
    nodeId
    name
  }
`

export interface CurrentUserProps {
  currentUser: CurrentUser_profile$key
}

const CurrentUser = ({ currentUser }: CurrentUserProps) => {
  const data = useFragment(CurrentUserFragment, currentUser)

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}

export default CurrentUser
