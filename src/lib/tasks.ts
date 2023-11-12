import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import { useEffect } from 'react'

import supabase from './supabase'

export const LOCATION_TASK_NAME = 'background-location-task'

export async function updateUserLocation(
  coordinates: Location.LocationObjectCoords,
) {
  const { longitude, latitude } = coordinates

  const { error } = await supabase.rpc('update_user_location', {
    latitude,
    longitude,
  })

  if (error) {
    throw error
  }
}

TaskManager.defineTask<{
  locations: Location.LocationObject[]
  timestamp: number
}>(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log('background task error:', error)

    return
  }

  const coordinates = data?.locations?.[0]?.coords
  if (coordinates) {
    updateUserLocation(coordinates)
  }
})

export async function startBackgroundLocationUpdates() {
  try {
    const isRegistered =
      await TaskManager.isTaskRegisteredAsync(LOCATION_TASK_NAME)

    if (!isRegistered) {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Low,
        showsBackgroundLocationIndicator: false,
        mayShowUserSettingsDialog: false,
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    // ignore error
  }
}

export function useStartBackgroundLocationUpdates() {
  useEffect(() => {
    startBackgroundLocationUpdates()
  }, [])
}
