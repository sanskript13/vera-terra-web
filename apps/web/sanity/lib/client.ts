import { createClient, type QueryParams } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
if (!dataset) throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
    perspective: 'published',
})

export async function sanityFetch<const QueryString extends string>({
    query,
    params = {},
    revalidate = 60,
    tags = [],
}: {
    query: QueryString
    params?: QueryParams
    revalidate?: number | false
    tags?: string[]
}) {
    return client.fetch(query, params, {
        next: { revalidate, tags },
    })
}
