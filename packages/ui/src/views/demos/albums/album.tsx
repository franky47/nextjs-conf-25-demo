import type { Album as AlbumType } from '@root/db'

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
      <img
        src={`/img/albums/${data.id}.jpg`}
        alt={data.name}
        className="aspect-square rounded-md object-cover"
      />
      <figcaption className="">
        <div className="mb-1 leading-tight">
          {data.name}
        </div>
        <div className="text-gray-700 text-sm dark:text-gray-300">
          {data.artist} • <span>{data.releaseYear}</span>
        </div>
      </figcaption>
    </figure>
  )
}
