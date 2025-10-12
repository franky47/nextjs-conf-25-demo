import type { ComponentProps } from 'react'

export function FiltersSection(
  props: ComponentProps<'nav'>
) {
  return (
    <nav
      className="flex flex-wrap items-center gap-2 px-4 py-2"
      {...props}
    />
  )
}
