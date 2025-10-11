import { CounterButton } from '@root/ui/views/demos/counter/counter-button'
import Link from 'next/link'
import { Suspense } from 'react'

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
          className="text-gray-500 underline"
        >
          SSR demo
        </Link>
      </nav>
    </>
  )
}
