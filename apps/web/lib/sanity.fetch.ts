import {sanityClient} from './sanity.client'
import {allPageSlugsQuery, pageBySlugQuery, siteSettingsQuery} from './sanity.queries'

export async function getSiteSettings() {
  return sanityClient.fetch(siteSettingsQuery)
}

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(pageBySlugQuery, {slug})
}

export async function getAllPageSlugs(): Promise<{slug: string}[]> {
  return sanityClient.fetch(allPageSlugsQuery)
}
