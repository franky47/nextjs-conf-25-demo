import { database } from '@root/db/queries'
import { notFound } from 'next/navigation'
import { Album } from '@/views/demos/albums/album'
import { AlbumNav } from './nav'

export default async function Page({
  params,
}: PageProps<'/albums/[albumId]'>) {
  const { albumId } = await params
  const album = await database.getAlbumById(albumId)
  if (!album) {
    notFound()
  }

  return (
    <>
      <AlbumNav />
      <section className="mx-auto max-w-4xl p-4">
        <Album data={album} />
      </section>
    </>
  )
}

export async function generateMetadata({
  params,
}: PageProps<'/albums/[albumId]'>) {
  const { albumId } = await params
  const album = await database.getAlbumById(albumId)
  if (!album) {
    return {
      title: 'Album not found',
    }
  }
  return {
    title: `${album.name} • ${album.artist}`,
  }
}
