'use client'

import { Button } from '@root/ui/components/button'
import { Input } from '@root/ui/components/input'
import { FiltersSection } from './filters-section.js'

export function Filters() {
  return (
    <FiltersSection>
      <Input
        // value={query}
        // onChange={(e) =>
        //   setSearchParams({ query: e.target.value })
        // }
        placeholder="Search albums"
        className="flex-2 py-5 text-xl lg:flex-1"
      />
      <Input
        type="number"
        className="w-28 flex-1 py-5 text-xl"
        // value={releaseYear ?? ''}
        // onChange={(e) =>
        //   setSearchParams({
        //     releaseYear: Number.isNaN(
        //       e.target.valueAsNumber
        //     )
        //       ? null
        //       : e.target.valueAsNumber,
        //   })
        // }
        placeholder="Year"
      />
      <Button className="flex-1 px-4 text-lg">Clear</Button>
    </FiltersSection>
  )
}
