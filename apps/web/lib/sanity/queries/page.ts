export const homePageQuery = /* groq */ `
*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  seo,
  sections[]{
    ...,
    _type,
    // section içindeki common alanlar (varsa) otomatik gelir
  }
}
`
