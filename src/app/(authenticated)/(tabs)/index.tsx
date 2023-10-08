import { Suspense } from 'react'
import { ActivityIndicator, Button, StyleSheet } from 'react-native'

import EditScreenInfo from '~/components/EditScreenInfo'
import { Text, View } from '~/components/Themed'
import TabOne from '~/components/screens/TabOne'
import supabase from '~/lib/supabase'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Suspense fallback={<ActivityIndicator />}>
        <TabOne />
      </Suspense>
      <Button
        title="Sign Out"
        onPress={() => {
          supabase.auth.signOut()
        }}
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
