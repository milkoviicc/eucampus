// src/redux/features/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { setCookie, removeCookie } from '../../lib/cookies'

export interface User {
  id: string
  email: string
  fullName: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

interface AuthCookie {
  isAuthenticated: boolean
  user: {
    id: string
    email: string
    fullName: string
  }
}

// Simulate API login
export const loginThunk = createAsyncThunk<
  { user: User },
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  // fake server delay
  await new Promise((r) => setTimeout(r, 500))

  const { email, password } = credentials

  if (email !== 'marko.milkovicc@gmail.com' || password !== 'string123') {
    return rejectWithValue('Credenciales no válidas')
  }

  const user: User = {
    id: Math.random().toString(36).slice(2, 9),
    email,
    fullName: 'Marko Milkovic',
  }

  const auth: AuthCookie = {
    isAuthenticated: true,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    },
  }

  setCookie('auth', auth)

  return { user }
})

export const registerThunk = createAsyncThunk<
  { user: User },
  { email: string; password: string; fullName: string },
  { rejectValue: string }
>('auth/register', async (payload, { rejectWithValue }) => {
  await new Promise((r) => setTimeout(r, 500))

  const { email, password, fullName } = payload
  if (!email.includes('@') || password.length < 4 || !fullName) {
    return rejectWithValue('Invalid registration data')
  }

  const user: User = {
    id: Math.random().toString(36).slice(2, 9),
    email,
    fullName,
  }

  const auth: AuthCookie = {
    isAuthenticated: true,
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    },
  }

  setCookie('auth', auth)

  return { user }
})

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  removeCookie('auth')
  return true
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Rehydrate from cookie payload (used on app start)
    setAuthFromCookie: (state, action: PayloadAction<{ user: User; isAuthenticated: boolean }>) => {
      state.user = action.payload.user
      state.isAuthenticated = !!action.payload.isAuthenticated
    },
    clearAuthState: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (s) => {
        s.loading = true
        s.error = null
      })
      .addCase(loginThunk.fulfilled, (s, a) => {
        s.loading = false
        s.user = a.payload.user
        s.isAuthenticated = true
      })
      .addCase(loginThunk.rejected, (s, a) => {
        s.loading = false
        s.error = a.payload ?? 'Login failed'
      })
      .addCase(registerThunk.pending, (s) => {
        s.loading = true
        s.error = null
      })
      .addCase(registerThunk.fulfilled, (s, a) => {
        s.loading = false
        s.user = a.payload.user
        s.isAuthenticated = true
      })
      .addCase(registerThunk.rejected, (s, a) => {
        s.loading = false
        s.error = a.payload ?? 'Registration failed'
      })
      .addCase(logoutThunk.fulfilled, (s) => {
        s.user = null
        s.isAuthenticated = false
      })
  },
})

export const { setAuthFromCookie, clearAuthState } = authSlice.actions
export default authSlice.reducer
