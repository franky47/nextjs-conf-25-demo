import { database } from '@root/db/queries'
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
          <Album key={album.id} data={album} />
        ))}
      </AlbumGrid>
    </>
  )
}
