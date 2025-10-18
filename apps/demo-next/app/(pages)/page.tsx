import Link from 'next/link'
import { Suspense } from 'react'
import { CounterButton } from '@/views/demos/counter/counter-button'

export default function Page() {
  return (
    <>
      <div className="mt-12 flex items-center justify-center">
        <Suspense>
          <CounterButton />
        </Suspense>
      </div>
      <nav className="mt-24 text-center">
        <Link
          href="/albums"
          className="text-zinc-500 underline"
        >
          SSR demo
        </Link>
      </nav>
    </>
  )
}

export const metadata = {
  title: 'Counter button',
}
