import { useEffect } from 'react'

import supabase from './supabase'
import { store, useAppSelector } from '../store'
import { setSession } from '../store/slices/auth-slice'

export function useAuthListener(dispatch: typeof store.dispatch) {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION') {
        // ignore the INITIAL_SESSION event,
        // as we already load the session in loadInitialAuthState()
        return
      }

      dispatch(setSession(session))
    })

    return subscription.unsubscribe
  }, [dispatch])
}

export const useSession = () => useAppSelector((state) => state.auth.session)

export const useUser = () => useSession()?.user ?? null

export const useIsSignedIn = () => useUser() !== null
