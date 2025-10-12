'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { Button } from '@/components/button'

export function ThemeControl() {
  const hydrated = useIsHydrated()
  const { theme = 'dark', setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme((current) =>
      current === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={toggleTheme}
      suppressHydrationWarning
    >
      {hydrated && theme === 'light' && <Sun />}
      {hydrated && theme === 'dark' && <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function useIsHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}
