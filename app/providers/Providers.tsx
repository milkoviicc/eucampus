// app/providers/Providers.tsx
'use client'

import React, { useMemo } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '../redux/store'

type User = {
  id: string
  email: string
  fullName?: string
}

type InitialAuth = {
  isAuthenticated?: boolean
  user?: User
} | null

export default function Providers({
  children,
  initialAuth,
}: {
  children: React.ReactNode
  initialAuth?: InitialAuth
}) {
  // Build preloadedState shape expected by your reducers
  const preloadedState = useMemo(
    () => ({
      auth: {
        user: initialAuth?.user ?? null,
        isAuthenticated: !!initialAuth?.isAuthenticated,
        loading: false,
        error: null,
      },
    }),
    [initialAuth],
  )

  // create store per client instance (useMemo to avoid recreating on every render)
  const store = useMemo(() => createStore(preloadedState), [preloadedState])

  return <Provider store={store}>{children}</Provider>
}
