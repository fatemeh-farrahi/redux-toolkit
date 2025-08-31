// src/features/counter/CounterDisplay.tsx
import React from 'react'
import { useAppSelector } from '../../types/hooks'

export function CounterDisplay() {
  const count = useAppSelector((state) => state.counter.value)

  return (
    <div>
      <h2>Counter Value in Another Component: {count}</h2>
    </div>
  )
}
