import type { Album as AlbumType } from '@root/db'
import { ViewTransition } from 'react'

type AlbumProps = {
  data: Pick<
    AlbumType,
    | 'id'
    | 'name'
    | 'artist'
    | 'coverUrl'
    | 'releaseYear'
    | 'tracks'
  >
}

export function Album({ data }: AlbumProps) {
  return (
    <figure className="flex flex-col gap-2">
      <ViewTransition name={`album-${data.id}-cover`}>
        <img
          src={`/img/albums/${data.id}.jpg`}
          alt={data.name}
          className="aspect-square rounded-md object-cover"
        />
      </ViewTransition>
      <ViewTransition name={`album-${data.id}-info`}>
        <figcaption>
          <div className="mb-1 leading-tight">
            {data.name}
          </div>
          <div className="text-sm text-zinc-700 dark:text-zinc-300">
            {data.artist} • <span>{data.releaseYear}</span>
          </div>
        </figcaption>
      </ViewTransition>
    </figure>
  )
}
