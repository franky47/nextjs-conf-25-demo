import type { ComponentProps } from 'react'

export function FiltersSection(
  props: ComponentProps<'nav'>
) {
  return (
    <nav
      className="mt-2 flex flex-wrap items-center gap-2 px-4"
      {...props}
    />
  )
}
