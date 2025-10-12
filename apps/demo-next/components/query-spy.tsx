'use client'

import { useSearchParams } from 'next/navigation'
import { type ComponentProps, Fragment } from 'react'
import { cn } from '@/lib/utils'

export function QuerySpy() {
  const searchParams = useSearchParams()
  const items = Array.from(searchParams.entries())
    .filter(([, value]) => value !== null)
    .map(([key, value], index, list) => (
      <Fragment key={key + value}>
        <span className="font-semibold text-[#002654] dark:text-[#00acff]">
          {key}
        </span>
        <span className="text-zinc-700 dark:text-zinc-300">
          =
        </span>
        <span className="font-semibold text-[#cd1126] dark:text-[#fe6497]">
          {value.replaceAll(' ', '+')}
        </span>
        {index < list.length - 1 && (
          <span className="text-zinc-700 dark:text-zinc-300">
            &
          </span>
        )}
      </Fragment>
    ))
  if (items.length === 0) {
    return (
      <QuerySpyBackground className="text-zinc-500 italic">
        &lt;empty query&gt;
      </QuerySpyBackground>
    )
  }
  return (
    <QuerySpyBackground>
      <span className="text-zinc-700 dark:text-zinc-300">
        ?
      </span>
      {items}
    </QuerySpyBackground>
  )
}

export function QuerySpyBackground({
  className,
  ...props
}: ComponentProps<'pre'>) {
  return (
    <pre
      className={cn(
        'sticky top-0 z-40 overflow-x-auto border-b bg-background px-2.5 py-2 text-2xl',
        className
      )}
      {...props}
    />
  )
}
