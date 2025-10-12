import { type ReactNode, Suspense } from 'react'
import { Header } from '@/components/header'
import {
  QuerySpy,
  QuerySpyBackground,
} from '@/components/query-spy'

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Header
        querySpy={
          <Suspense fallback={<QuerySpyBackground />}>
            <QuerySpy />
          </Suspense>
        }
      />
      {children}
    </>
  )
}
