import { and, count, eq, like, or } from 'drizzle-orm'
import { db } from './index.ts'
import { albums } from './schema.ts'

type FindAlbumsQuery = {
  query: string
  releaseYear: number | null
}

export const database = {
  getAlbumById(id: string) {
    return db.query.albums.findFirst({
      where: (fields, operators) =>
        operators.eq(fields.id, id),
      columns: {
        updatedAt: false,
        createdAt: false,
      },
    })
  },

  async countAlbums(
    { query, releaseYear }: FindAlbumsQuery = {
      query: '',
      releaseYear: null,
    }
  ) {
    const [totalAlbums, results] = await Promise.all([
      db.$count(albums),
      db
        .select({ matchingAlbums: count() })
        .from(albums)
        .where(
          and(
            or(
              like(albums.name, `%${query}%`),
              like(albums.artist, `%${query}%`)
            ),
            releaseYear && releaseYear > 1900
              ? eq(albums.releaseYear, releaseYear)
              : undefined
          )
        ),
    ])
    return {
      totalAlbums,
      matchingAlbums: results[0]?.matchingAlbums ?? 0,
    }
  },

  findAlbums(
    { query, releaseYear }: FindAlbumsQuery = {
      query: '',
      releaseYear: null,
    }
  ) {
    return db.query.albums.findMany({
      where(fields, operators) {
        const searchOps = query
          ? operators.or(
              operators.like(fields.name, `%${query}%`),
              operators.like(fields.artist, `%${query}%`)
            )
          : undefined
        const yearOps =
          releaseYear && releaseYear > 1900
            ? operators.eq(fields.releaseYear, releaseYear)
            : undefined
        return operators.and(searchOps, yearOps)
      },
      limit: 20,
      columns: {
        updatedAt: false,
        createdAt: false,
      },
    })
  },
}
