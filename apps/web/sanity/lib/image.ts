import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
// import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
type SanityImageSource = unknown // Placeholder type - not used with hardcoded content

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
    // Return null for hardcoded content - images will use direct URLs
    return null as any
    // return builder.image(source)
}
