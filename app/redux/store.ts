// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

export const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState,
  })

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
