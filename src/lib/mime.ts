import db from 'mime-db'

export const MIME_TYPES_BY_EXTENSION = Object.fromEntries(
  Object.entries(db)
    .filter(([, { extensions }]) => extensions !== undefined)
    .flatMap(([mime, { extensions }]) =>
      extensions!.map((extension) => [extension, mime]),
    ),
)

export function lookupMime(extension: string): string | undefined {
  return MIME_TYPES_BY_EXTENSION[extension]
}
