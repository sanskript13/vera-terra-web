export const MARKETING_PAGE_BY_SLUG_QUERY = /* groq */ `
  *[_type == "marketingPage" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    seo{title, description, noIndex},
    sections[]{
      _type,
      ...,
      // nested arrays
      items[]{...,},
      // portable text blocks
      content[]{...,}
    }
  }
`
