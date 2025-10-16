'use client'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { SearchInput } from '@/components/search-input'
import { FiltersSection } from './filters-section'

export function Filters() {
  const onClear = () => {}
  return (
    <FiltersSection>
      <SearchInput
        // value={query}
        // onChange={(e) =>
        //   setSearchParams({ query: e.target.value })
        // }
        placeholder="Search albums"
        className="flex-2 text-xl lg:flex-1"
      />
      <Input
        type="number"
        className="flex-1 py-5 text-xl"
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
      <Button
        className="flex-1 py-5 text-lg"
        onClick={onClear}
      >
        Clear
      </Button>
    </FiltersSection>
  )
}
