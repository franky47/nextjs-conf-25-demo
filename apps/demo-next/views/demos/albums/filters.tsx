'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { startTransition, useOptimistic } from 'react'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { SearchInput } from '@/components/search-input'
import { FiltersSection } from './filters-section'

function useMockNuqs() {
  const router = useRouter()
  const uSP = useSearchParams()
  const [searchParams, setOptimisticSearchParams] =
    useOptimistic(new URLSearchParams(uSP))

  const query = searchParams.get('query') ?? ''
  const releaseYearParam = searchParams.get('releaseYear')
  const releaseYear = releaseYearParam
    ? Number(releaseYearParam)
    : null

  const setSearchParams = ({
    query,
    releaseYear,
  }: {
    query?: string
    releaseYear?: number | null
  }) => {
    const searchParams = new URLSearchParams(
      window.location.search
    )
    if (query !== undefined) {
      if (query) {
        searchParams.set('query', query)
      } else {
        searchParams.delete('query')
      }
    }
    if (releaseYear !== undefined) {
      if (releaseYear !== null) {
        searchParams.set(
          'releaseYear',
          releaseYear.toString()
        )
      } else {
        searchParams.delete('releaseYear')
      }
    }
    startTransition(() => {
      setOptimisticSearchParams(searchParams)
      router.replace(`/albums?${searchParams.toString()}`)
    })
  }
  return [{ query, releaseYear }, setSearchParams] as const
}

export function Filters() {
  const [{ query, releaseYear }, setSearchParams] =
    useMockNuqs()
  const onClear = () => {
    setSearchParams({ query: '', releaseYear: null })
  }
  return (
    <FiltersSection>
      <SearchInput
        value={query}
        onChange={(e) => {
          setSearchParams({ query: e.target.value })
        }}
        placeholder="Search albums"
        className="flex-2 text-xl lg:flex-1"
      />
      <Input
        type="number"
        className="flex-1 py-5 text-xl"
        value={releaseYear ?? ''}
        onChange={(e) =>
          setSearchParams({
            releaseYear: Number.isNaN(
              e.target.valueAsNumber
            )
              ? null
              : e.target.valueAsNumber,
          })
        }
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
