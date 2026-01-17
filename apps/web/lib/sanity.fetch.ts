import { createClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

type FetchOptions = {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}

export async function sanityFetch<T>({
  query,
  params = {},
}: FetchOptions): Promise<T> {
  return client.fetch<T>(query, params)
}
