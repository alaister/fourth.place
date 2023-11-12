import { NativeModules, Platform } from 'react-native'

export const locale = (
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier
).replace(/_/, '-') as string

export function formatDistance(distance: number) {
  if (distance < 1000) {
    return `${distance.toFixed(0)} m`
  }

  return `${(distance / 1000).toFixed(2)} km`
}
