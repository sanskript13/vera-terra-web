import { sanityFetch } from './client'

/**
 * Convenience helpers for pages
 */
export async function getPageBySlug(slug: string) {
  const query = /* groq */ `
    *[_type == "marketingPage" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      sections
    }
  `
  return sanityFetch<any>({ query, params: { slug } })
}

// getAllPageSlugs not needed for hardcoded content
/*
export async function getAllPageSlugs(): Promise<string[]> {
    const query = groq`
      *[_type == "marketingPage" && defined(slug.current)] {
        "slug": slug.current
      }
    `
    const rows = await sanityFetch<Array<{ slug: string }>>({ query })
    return rows.map((r) => r.slug).filter(Boolean)
}
*/
