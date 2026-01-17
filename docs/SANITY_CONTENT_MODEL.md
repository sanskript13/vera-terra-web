# Sanity Content Model — v1

> Marketing website with blog. Implementation-ready for Sanity schema.

---

## Content Types Overview

| Type | Kind | Purpose |
|------|------|---------|
| `siteSettings` | Singleton | Global config (logo, nav, footer, social) |
| `page` | Document | Marketing pages (home, about, pricing, etc.) |
| `post` | Document | Blog articles |
| `author` | Document | Blog post authors |
| `category` | Document | Blog categories |

---

## 1. `siteSettings` (Singleton)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | `string` | ✓ | Site name |
| `description` | `text` | ✓ | Default meta description |
| `logo` | `image` | ✓ | Site logo |
| `favicon` | `image` | | 32×32 or SVG |
| `ogImage` | `image` | ✓ | Default Open Graph image |
| `mainNav` | `array` of `navItem` | ✓ | Primary navigation |
| `footerNav` | `array` of `navItem` | | Footer links |
| `socialLinks` | `array` of `socialLink` | | Social media links |

### `navItem` (Object)

| Field | Type | Required |
|-------|------|----------|
| `label` | `string` | ✓ |
| `url` | `string` | ✓ |
| `external` | `boolean` | |

### `socialLink` (Object)

| Field | Type | Required |
|-------|------|----------|
| `platform` | `string` (enum) | ✓ |
| `url` | `url` | ✓ |

---

## 2. `page` (Document)

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `title` | `string` | ✓ | |
| `slug` | `slug` | ✓ | Unique, source: `title` |
| `seo` | `seo` (object) | ✓ | SEO fields |
| `sections` | `array` of `section` | ✓ | Page builder blocks |

---

## 3. `post` (Document)

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `title` | `string` | ✓ | |
| `slug` | `slug` | ✓ | Unique, source: `title` |
| `excerpt` | `text` | ✓ | Max 200 chars |
| `featuredImage` | `image` | ✓ | Alt text required |
| `author` | `reference` → `author` | ✓ | |
| `categories` | `array` of `reference` → `category` | | |
| `publishedAt` | `datetime` | ✓ | |
| `body` | `blockContent` | ✓ | Portable Text |
| `seo` | `seo` (object) | ✓ | SEO fields |

---

## 4. `author` (Document)

| Field | Type | Required |
|-------|------|----------|
| `name` | `string` | ✓ |
| `slug` | `slug` | ✓ |
| `avatar` | `image` | ✓ |
| `bio` | `text` | |
| `social` | `array` of `socialLink` | |

---

## 5. `category` (Document)

| Field | Type | Required |
|-------|------|----------|
| `title` | `string` | ✓ |
| `slug` | `slug` | ✓ |
| `description` | `text` | |

---

## Shared Objects

### `seo` (Object)

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `metaTitle` | `string` | ✓ | Max 60 chars |
| `metaDescription` | `text` | ✓ | Max 160 chars |
| `ogImage` | `image` | | Override default OG image |
| `noIndex` | `boolean` | | Default: false |

---

## Section/Block Types

Used in `page.sections` array. Each block has a `_type` discriminator.

### `hero`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | ✓ |
| `subheading` | `text` | |
| `image` | `image` | |
| `cta` | `cta` (object) | |
| `layout` | `string` (enum: `left`, `center`, `right`) | |

### `features`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | |
| `items` | `array` of `featureItem` | ✓ |
| `columns` | `number` (2, 3, 4) | |

#### `featureItem` (Object)

| Field | Type | Required |
|-------|------|----------|
| `icon` | `string` (icon name) | |
| `title` | `string` | ✓ |
| `description` | `text` | |

### `testimonials`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | |
| `items` | `array` of `testimonialItem` | ✓ |

#### `testimonialItem` (Object)

| Field | Type | Required |
|-------|------|----------|
| `quote` | `text` | ✓ |
| `author` | `string` | ✓ |
| `role` | `string` | |
| `avatar` | `image` | |
| `company` | `string` | |

### `cta` (Call to Action)

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | ✓ |
| `body` | `text` | |
| `button` | `cta` (object) | ✓ |
| `variant` | `string` (enum: `default`, `highlight`) | |

#### `cta` button object

| Field | Type | Required |
|-------|------|----------|
| `label` | `string` | ✓ |
| `url` | `string` | ✓ |
| `style` | `string` (enum: `primary`, `secondary`, `ghost`) | |

### `richText`

| Field | Type | Required |
|-------|------|----------|
| `content` | `blockContent` | ✓ |

### `imageGallery`

| Field | Type | Required |
|-------|------|----------|
| `images` | `array` of `image` | ✓ |
| `layout` | `string` (enum: `grid`, `carousel`, `masonry`) | |

### `pricing`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | |
| `plans` | `array` of `pricingPlan` | ✓ |

#### `pricingPlan` (Object)

| Field | Type | Required |
|-------|------|----------|
| `name` | `string` | ✓ |
| `price` | `string` | ✓ |
| `period` | `string` | |
| `features` | `array` of `string` | |
| `cta` | `cta` (object) | |
| `highlighted` | `boolean` | |

### `faq`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | |
| `items` | `array` of `faqItem` | ✓ |

#### `faqItem` (Object)

| Field | Type | Required |
|-------|------|----------|
| `question` | `string` | ✓ |
| `answer` | `blockContent` | ✓ |

### `contactForm`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | |
| `description` | `text` | |
| `formId` | `string` | | External form service ID |

### `logoCloud`

| Field | Type | Required |
|-------|------|----------|
| `heading` | `string` | |
| `logos` | `array` of `image` | ✓ |

---

## Validation Rules

### Slug Uniqueness

```ts
// All slugs must be unique within their type
validation: (Rule) => Rule.required().custom(async (slug, context) => {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: '2024-01-01' });
  const id = document._id.replace(/^drafts\./, '');
  const params = { draft: `drafts.${id}`, published: id, slug: slug?.current };
  const query = `!defined(*[_type == "${document._type}" && slug.current == $slug && !(_id in [$draft, $published])][0]._id)`;
  const isUnique = await client.fetch(query, params);
  return isUnique || 'Slug must be unique';
})
```

### Required SEO Fields

```ts
// seo object validation
fields: [
  defineField({
    name: 'metaTitle',
    type: 'string',
    validation: (Rule) => Rule.required().max(60).warning('Keep under 60 chars for best SEO'),
  }),
  defineField({
    name: 'metaDescription',
    type: 'text',
    rows: 3,
    validation: (Rule) => Rule.required().max(160).warning('Keep under 160 chars'),
  }),
]
```

### Image Alt Text

```ts
// All images should have alt text
defineField({
  name: 'featuredImage',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
    }),
  ],
})
```

---

## `blockContent` Definition

Portable Text schema for rich content:

```ts
defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    { type: 'block', styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'Quote', value: 'blockquote' },
    ]},
    { type: 'image', options: { hotspot: true } },
    { type: 'code' },
  ],
})
```

---

## File Structure (Sanity Studio)

```
apps/studio/
└── schemaTypes/
    ├── index.ts
    ├── documents/
    │   ├── siteSettings.ts
    │   ├── page.ts
    │   ├── post.ts
    │   ├── author.ts
    │   └── category.ts
    ├── objects/
    │   ├── seo.ts
    │   ├── navItem.ts
    │   ├── socialLink.ts
    │   ├── cta.ts
    │   └── blockContent.ts
    └── sections/
        ├── hero.ts
        ├── features.ts
        ├── testimonials.ts
        ├── ctaSection.ts
        ├── richText.ts
        ├── imageGallery.ts
        ├── pricing.ts
        ├── faq.ts
        ├── contactForm.ts
        └── logoCloud.ts
```

---

## Next Steps

1. Create `apps/studio` with Sanity CLI
2. Implement schema files per structure above
3. Configure singleton for `siteSettings`
4. Set up GROQ queries in `apps/web`
5. Create preview functionality
