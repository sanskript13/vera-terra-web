export const siteSettingsQuery = /* groq */ `
*[_type=="siteSettings"][0]{
  title,
  description,
  navigation[]{label, href},
  "logoUrl": logo.asset->url
}
`

export const pageBySlugQuery = /* groq */ `
*[_type=="page" && slug.current==$slug][0]{
  title,
  "slug": slug.current,
  sections[]{
    _key,
    _type,
    ...,
    "imageUrl": image.asset->url
  }
}
`

export const allPageSlugsQuery = /* groq */ `
*[_type=="page" && defined(slug.current)][]{
  "slug": slug.current
}
`
