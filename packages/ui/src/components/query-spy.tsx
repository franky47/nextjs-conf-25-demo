'use client'

import { type ComponentProps, Fragment } from 'react'
import { cn } from '../lib/utils.ts'

type QuerySpyProps = {
  useSearchParams: () => URLSearchParams
}

export function QuerySpy({
  useSearchParams,
}: QuerySpyProps) {
  const searchParams = useSearchParams()
  const items = Array.from(searchParams.entries())
    .filter(([, value]) => value !== null)
    .map(([key, value], index, list) => (
      <Fragment key={key + value}>
        <span className="font-semibold text-[#002654] dark:text-[#00acff]">
          {key}
        </span>
        <span className="text-gray-700 dark:text-gray-300">
          =
        </span>
        <span className="font-semibold text-[#cd1126] dark:text-[#fe6497]">
          {value.replaceAll(' ', '+')}
        </span>
        {index < list.length - 1 && (
          <span className="text-gray-700 dark:text-gray-300">
            &
          </span>
        )}
      </Fragment>
    ))
  if (items.length === 0) {
    return (
      <QuerySpyBackground className="text-gray-500 italic">
        &lt;empty query&gt;
      </QuerySpyBackground>
    )
  }
  return (
    <QuerySpyBackground>
      <span className="text-gray-700 dark:text-gray-300">
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
        'mx-2 my-2 rounded-lg border px-3 py-2 text-[22px]',
        className
      )}
      {...props}
    />
  )
}
