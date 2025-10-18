// Copy this in your codebase
import type { Route } from 'next'
import {
  type CreateSerializerOptions,
  createSerializer,
  type ParserMap,
} from 'nuqs/server'

export function createTypedLink<Parsers extends ParserMap>(
  route: Route,
  parsers: Parsers,
  options: CreateSerializerOptions<Parsers> = {}
) {
  const serialize = createSerializer<Parsers, Route, Route>(
    parsers,
    options
  )
  return serialize.bind(null, route)
}
