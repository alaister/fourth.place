import { NativeModules, Platform } from 'react-native'

export const locale = (
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier
).replace(/_/, '-') as string

export const formatterKM = new Intl.NumberFormat(locale, {
  style: 'unit',
  unit: 'kilometer',
  unitDisplay: 'short',
})

export const formatterM = new Intl.NumberFormat(locale, {
  style: 'unit',
  unit: 'meter',
  unitDisplay: 'short',
})

export function formatDistance(distance: number) {
  return distance > 1000
    ? formatterKM.format(distance / 1000)
    : formatterM.format(distance)
}
