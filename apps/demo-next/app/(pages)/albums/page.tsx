import { database } from '@root/db/queries'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { Album } from '@/views/demos/albums/album'
import { AlbumGrid } from '@/views/demos/albums/album-grid'
import { Filters } from '@/views/demos/albums/filters'

export default async function AlbumsPage({
  searchParams,
}: PageProps<'/albums'>) {
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

export const metadata = {
  title: 'Albums',
} satisfies Metadata
