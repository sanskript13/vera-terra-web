import {sanityClient} from './client'

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    // requestTag: debugging/cost tracking için (opsiyonel)
    // tag: 'web',
  })
}
