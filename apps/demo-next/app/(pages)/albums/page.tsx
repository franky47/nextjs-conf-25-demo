import { database } from '@root/db/queries'
import { AlbumGrid } from '@root/ui/demos/albums/album-grid'
import { Album } from '@root/ui/views/demos/albums/album'

export default async function AlbumsPage() {
  const albums = await database.findAlbums()
  return (
    <>
      <AlbumGrid>
        {albums.map((album) => (
          <Album key={album.id} data={album} />
        ))}
      </AlbumGrid>
    </>
  )
}
