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

export async function generateMetadata() {
  const { totalAlbums, matchingAlbums } =
    await database.countAlbums()
  const hasFilter = totalAlbums !== matchingAlbums
  return {
    title:
      totalAlbums === 0
        ? 'No albums'
        : hasFilter
          ? `${matchingAlbums} albums`
          : `All albums`,
  }
}
