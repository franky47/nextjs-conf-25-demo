'use client'

import { useState } from 'react'
import { Button } from '@/components/button'

export function CounterButton() {
  const [count, setCount] = useState(0)
  return (
    <Button
      className="rounded-xl p-8 text-2xl tabular-nums"
      onClick={() => setCount((c) => c + 1)}
    >
      Count: {count}
    </Button>
  )
}
