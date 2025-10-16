import { database } from '@root/db/queries'
import Link from 'next/link'
import { Suspense } from 'react'
import { Album } from '@/views/demos/albums/album'
import { AlbumGrid } from '@/views/demos/albums/album-grid'
import { Filters } from '@/views/demos/albums/filters'

export default async function AlbumsPage() {
  const albums = await database.findAlbums()
  return (
    <>
      <Suspense>
        <Filters />
      </Suspense>
      <AlbumGrid>
        {albums.map((album) => (
          <Link
            key={album.id}
            href={{ pathname: `/albums/${album.id}` }}
          >
            <Album data={album} />
          </Link>
        ))}
      </AlbumGrid>
    </>
  )
}

export async function generateMetadata({
  searchParams,
}: PageProps<'/albums'>) {
  const filters = await loadFilters(searchParams)
  const totalAlbums =
    await database.countMatchingAlbums(filters)
  const hasQuery = filters.query || filters.releaseYear
  return {
    title:
      totalAlbums === 0
        ? 'No albums'
        : hasQuery
          ? `${totalAlbums} albums`
          : `All albums`,
  }
}
