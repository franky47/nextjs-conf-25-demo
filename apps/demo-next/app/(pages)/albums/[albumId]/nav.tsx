'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'

export function AlbumNav() {
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <nav>
      <Button onClick={goBack} variant="link">
        <ArrowLeft /> Back
      </Button>
    </nav>
  )
}
