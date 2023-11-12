import * as Location from 'expo-location'
import { Button, StyleSheet, Text, View } from 'react-native'

import { LOCATION_TASK_NAME } from '~/lib/tasks'

async function requestPermissions() {
  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync()
  if (foregroundStatus === 'granted') {
    const { status: backgroundStatus } =
      await Location.requestBackgroundPermissionsAsync()
    if (backgroundStatus === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Low,
        showsBackgroundLocationIndicator: false,
        mayShowUserSettingsDialog: false,
      })
    }
  }
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <Button
        title="Start location updates"
        onPress={() => {
          requestPermissions()
        }}
      />
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
