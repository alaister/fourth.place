import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Platform } from 'react-native'
import { setupURLPolyfill } from 'react-native-url-polyfill'

import { Database } from './database.types'

const isNative = Platform.OS !== 'web'

if (isNative) {
  setupURLPolyfill()
}

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!
if (!SUPABASE_URL) {
  throw new Error('Missing process.env.EXPO_PUBLIC_SUPABASE_URL')
}

const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
if (!SUPABASE_ANON_KEY) {
  throw new Error('Missing process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY')
}

export const AUTH_STORAGE_KEY = 'supabase-auth-token'

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    ...(isNative && {
      storage: AsyncStorage,
      detectSessionInUrl: false,
    }),
    autoRefreshToken: true,
    persistSession: true,
    storageKey: AUTH_STORAGE_KEY,
  },
})

export { SUPABASE_URL, SUPABASE_ANON_KEY }

export default supabase
