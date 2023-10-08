import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'

import supabase from '../../lib/supabase'

export const fetchSession = createAsyncThunk('auth/fetchSession', async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { session }
})

export interface AuthState {
  session: Session | null
  isLoading: boolean
}

const initialState: AuthState = {
  isLoading: false,
  session: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<Session | null>) {
      state.isLoading = false
      state.session = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSession.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.isLoading = false
      state.session = action.payload.session
    })

    builder.addCase(fetchSession.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { setSession } = authSlice.actions

export default authSlice.reducer
