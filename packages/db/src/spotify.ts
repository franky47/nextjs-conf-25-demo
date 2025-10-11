import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import { generateText } from 'ai'
import { ollama } from 'ollama-ai-provider-v2'
import { parse as parseSpotifyUri } from 'spotify-uri'
import { z } from 'zod'
import type { NewAlbum } from './schema.ts'

export { parseSpotifyUri }

const model = ollama('llama3.2')

const env = z
  .object({
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
  })
  .parse(process.env)

export const spotify = SpotifyApi.withClientCredentials(
  env.SPOTIFY_CLIENT_ID,
  env.SPOTIFY_CLIENT_SECRET
)

export function getSpotifyAlbumId(uri: string) {
  try {
    const result = parseSpotifyUri(uri)
    return result.type === 'album' ? result.id : undefined
  } catch {
    return undefined
  }
}

export async function findAlbumById(
  id: string
): Promise<NewAlbum | undefined> {
  const result = await spotify.albums.get(id)
  return {
    id: result.id,
    name: result.name,
    artist: result.artists.map((a) => a.name).join(', '),
    coverUrl:
      result.images[0]?.url ?? 'https://placehold.co/300',
    releaseYear: parseInt(
      result.release_date.slice(0, 4),
      10
    ),
    tracks: result.total_tracks,
  }
}

export async function fetchAlbumData(
  query: string
): Promise<NewAlbum | undefined> {
  const searchResult = await spotify.search(
    query,
    ['album'],
    'FR',
    1
  )
  const result = searchResult.albums.items[0]
  if (!result) {
    console.info('No result for query %s', query)
    return
  }

  const { text: cleanedUpAlbumName } = await generateText({
    model,
    messages: [
      {
        role: 'system',
        content:
          `Your role is to cleanup album names,` +
          ` removing attributes like "(Deluxe Edition)"` +
          ` or "(Remastered)" from the album name.` +
          ` Keep capitalization and other parts of the name intact.` +
          ` Do not add, change or remove any other words or punctuation.` +
          ` Reply only with the cleaned up album name.`,
      },
      {
        role: 'user',
        content: result.name,
      },
    ],
  })
  return {
    id: result.id,
    name: cleanedUpAlbumName,
    artist: result.artists.map((a) => a.name).join(', '),
    coverUrl:
      result.images[0]?.url ?? 'https://placehold.co/300',
    releaseYear: parseInt(
      result.release_date.slice(0, 4),
      10
    ),
    tracks: result.total_tracks,
  }
}
