# Vera Terra Website

Modern Next.js website for Vera Terra - Onarıcı Tarım Danışmanlığı (Regenerative Agriculture Consulting) in Şanlıurfa, Turkey.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
cd apps/web
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit: <http://localhost:3000>

## 📋 Project Overview

**Framework:** Next.js 16 (App Router)  
**Language:** TypeScript (100% type-safe)  
**Styling:** Tailwind CSS  
**Content:** Hardcoded TypeScript modules  
**Forms:** React Server Actions + Zod validation  
**Email:** Resend API  

### Key Features

✅ **Type-Safe Content Architecture** - All content in TypeScript modules  
✅ **13 IA Pages** - Complete site structure with ~150 content sections  
✅ **SEO Optimized** - Metadata, sitemap, robots.txt, OpenGraph  
✅ **Production Contact Form** - Validation, spam protection, email delivery  
✅ **Accessibility** - ARIA labels, focus styles, keyboard navigation  
✅ **Error Handling** - Error boundaries, custom 404 page  
✅ **Performance** - Static generation, font optimization, minimal JS  

## 📁 Project Structure

```
vibe-site/
├── apps/
│   ├── web/                    # Main Next.js application
│   │   ├── app/               # Next.js App Router
│   │   │   ├── layout.tsx    # Root layout
│   │   │   ├── page.tsx      # Homepage
│   │   │   ├── */page.tsx    # IA pages
│   │   │   ├── actions/      # Server actions
│   │   │   ├── error.tsx     # Error boundary
│   │   │   └── not-found.tsx # 404 page
│   │   ├── components/
│   │   │   ├── forms/        # ContactForm
│   │   │   ├── layout/       # Header, Footer
│   │   │   ├── sections/     # PageRenderer
│   │   │   └── ui/           # Shared components
│   │   ├── content/
│   │   │   ├── types.ts      # Type definitions
│   │   │   └── pages/        # Content modules (13 files)
│   │   ├── lib/
│   │   │   └── validations/  # Zod schemas
│   │   └── public/           # Static assets
│   └── studio/                # Sanity Studio (legacy)
└── packages/                   # Shared packages
```

## 🎯 Content Management

### All Content is Type-Safe

Content lives in TypeScript modules at `/apps/web/content/pages/*.ts`

**Example:**

```typescript
// content/pages/ne-yapiyoruz.ts
import { PageContent, PageMetadata } from '../types'

export const metadata: PageMetadata = {
  title: 'Ne Yapıyoruz | Vera Terra',
  description: 'Saha koçluğu, danışmanlık programları ve eğitim.',
  keywords: ['saha koçluğu', 'tarım danışmanlığı']
}

export const pageContent: PageContent = {
  hero: {
    headline: 'Ne Yapıyoruz',
    subline: 'Saha koçluğu, danışmanlık...',
    primaryCta: { label: 'Tanışalım', href: '/iletisim' }
  },
  sections: [
    {
      type: 'text',
      heading: 'Section Title',
      content: 'Section content...'
    },
    // More sections...
  ]
}
```

### Editing Content

1. **Update content:** Edit `/content/pages/*.ts` files
2. **Add metadata:** Update `metadata` export in content file
3. **Deploy:** Commit and push (auto-deploys on Vercel)

No CMS, no database - just TypeScript files!

## 🗺️ Site Structure

**IA Pages (13):**

- `/` - Homepage
- `/ne-yapiyoruz` - What We Do
- `/saha-koclugu` - Field Coaching
- `/danismanlik-programlari` - Consulting Programs
- `/egitim-akademi` - Education & Academy
- `/odak-alanlarimiz` - Focus Areas
- `/onarici-tarim-yaklasimimiz` - Our Approach
- `/calistigimiz-urunler` - Products We Work With
- `/nasil-calisiyoruz` - How We Work
- `/program-akisi` - Program Flow
- `/olcum-izleme` - Measurement & Monitoring
- `/hakkimizda` - About Us
- `/iletisim` - Contact

**Legal Pages (2):**

- `/gizlilik` - Privacy Policy
- `/kvkk` - GDPR (Turkish)

**SEO:**

- `/sitemap.xml` - All 15 routes
- `/robots.txt` - Search engine directives

## 🔧 Development

### Commands

```bash
# Development
pnpm dev              # Start dev server (localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Type checking
pnpm tsc --noEmit     # Check TypeScript errors
```

### Adding a New Page

1. **Create content module:**

   ```bash
   touch apps/web/content/pages/new-page.ts
   ```

2. **Define content:**

   ```typescript
   import { PageContent, PageMetadata } from '../types'
   
   export const metadata: PageMetadata = {
     title: 'Page Title | Vera Terra',
     description: 'Page description...',
   }
   
   export const pageContent: PageContent = {
     hero: { headline: 'Title', subline: 'Subtitle' },
     sections: [/* ... */]
   }
   ```

3. **Create route:**

   ```bash
   mkdir apps/web/app/new-page
   touch apps/web/app/new-page/page.tsx
   ```

4. **Use PageRenderer:**

   ```typescript
   import { PageRenderer } from '@/components/sections/PageRenderer'
   import { pageContent } from '@/content/pages/new-page'
   
   export default function NewPage() {
     return <PageRenderer content={pageContent} />
   }
   ```

5. **Add to navigation** (Header/Footer)

6. **Update sitemap** (`app/sitemap.ts`)

## 🌐 Deployment

### Environment Variables

**Required for production:**

```bash
NEXT_PUBLIC_SITE_URL=https://verattera.com
RESEND_API_KEY=re_xxxxx
CONTACT_TO_EMAIL=hello@verattera.com
CONTACT_FROM_EMAIL=noreply@verattera.com
```

### Deploy to Vercel

**Option 1: Automatic (recommended)**

```bash
git push origin main
# Vercel auto-deploys
```

**Option 2: Manual**

```bash
npm i -g vercel
vercel --prod
```

**Option 3: Vercel Dashboard**

1. Import repository
2. Configure environment variables
3. Deploy

### Post-Deployment Checklist

- [ ] All routes load (test 15 pages)
- [ ] Contact form delivers email
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] 301 redirects work (old routes)
- [ ] Mobile responsive
- [ ] Run Lighthouse audit

## 📧 Contact Form

Production-grade form at `/iletisim` with:

✅ **5 Fields:** Name, Region, Product, Message, Expectation  
✅ **Validation:** Zod schema (client + server)  
✅ **Spam Protection:** Honeypot + rate limiting (3/hour per IP)  
✅ **Email Delivery:** Resend API  
✅ **States:** Loading, success, error  
✅ **A11y:** Labels, ARIA, focus management  

**Setup:**

1. Get API key from <https://resend.com>
2. Add to Vercel environment variables
3. Test form submission

## 🔍 SEO

### Metadata

- ✅ All pages have title + description
- ✅ OpenGraph tags on all pages
- ✅ Twitter cards on all pages
- ✅ Canonical URLs

### Sitemap

- 15 URLs indexed
- Monthly change frequency
- Priority weighting

### Robots.txt

- Allow all crawlers
- Sitemap reference included

### Performance

- Static page generation
- Optimized fonts (next/font)
- Minimal JavaScript
- No images (text-based design)

**Expected Lighthouse Scores:**

- Performance: 90-95
- Accessibility: 90-95
- Best Practices: 95-100
- SEO: 95-100

## ♿ Accessibility

✅ **ARIA Labels:** Navigation, dialogs, forms  
✅ **Focus Styles:** Custom focus-visible styles  
✅ **Keyboard Nav:** Full keyboard accessibility  
✅ **Screen Readers:** Proper labels and roles  
✅ **Semantic HTML:** Proper heading hierarchy  
✅ **Form A11y:** Labels, validation messages, error states  

## 🔒 Security

✅ **Server-Side Validation:** Zod schemas  
✅ **Rate Limiting:** 3 submissions/hour per IP  
✅ **Honeypot:** Hidden field spam protection  
✅ **CSRF Protection:** Next.js server actions  
✅ **Environment Variables:** Secure env vars  
✅ **Type Safety:** No `any` types  

## 📊 Monitoring (Recommended)

**Analytics:**

- Vercel Analytics (built-in)
- Google Analytics (optional)

**Error Tracking:**

- Vercel Error Logs (built-in)
- Sentry (optional)

**Uptime:**

- Vercel monitoring
- UptimeRobot (optional)

**Email:**

- Resend Dashboard (delivery stats)

## 🗂️ Documentation

**Quick Reference:**

- [`quick-start.md`](apps/web/.gemini/brain/.../quick-start.md) - Quick deploy guide
- [`deployment-guide.md`](apps/web/.gemini/brain/.../deployment-guide.md) - Complete deployment
- [`contact-form-implementation.md`](apps/web/.gemini/brain/.../contact-form-implementation.md) - Form details
- [`project-complete.md`](apps/web/.gemini/brain/.../project-complete.md) - Full summary

## 🛠️ Tech Stack

**Core:**

- Next.js 16.1.2 (App Router)
- React 19
- TypeScript 5.9

**Styling:**

- Tailwind CSS 4.x
- Framer Motion (animations)

**Forms & Validation:**

- React Server Actions
- Zod validation
- Resend (email)

**Utilities:**

- clsx / cn (class merging)
- Lucide React (icons)

## 📝 Content Guidelines

**Tone:** Sade, sahadan, iddiasız ama güven veren  
**CTA:** Always "Tanışalım" → /iletisim  
**Products:** Antep fıstığı → Pamuk → Urfa biberi → Buğdaygiller  
**Region:** Şanlıurfa ve çevresi  
**Terminology:** "Onarıcı tarım" (primary), "rejeneratif" (secondary)  

**No:**

- Technical jargon
- Sales language
- Specific pricing
- Package details
- Definitive claims (use "hedefliyoruz")

## 🔄 Redirects

Old routes redirect to new IA:

```
/akademi → /egitim-akademi
/programlar → /danismanlik-programlari
/mrv → /olcum-izleme
/mrv-etki → /olcum-izleme
/on-gorusme → /iletisim
```

**301 redirects** configured in `next.config.mjs`

## 🚨 Troubleshooting

### Build Fails

```bash
# Check TypeScript
pnpm tsc --noEmit

# Check build locally
pnpm build

# Check Vercel logs
```

### Contact Form Issues

```bash
# 1. Verify env vars in Vercel
# 2. Check Resend dashboard logs
# 3. Test from email (not spam folder)
```

### 404 Errors

```bash
# 1. Verify route in /app directory
# 2. Check redirects in next.config.mjs
# 3. Clear Vercel cache
```

## 📄 License

Proprietary - Vera Terra

## 👥 Support

For questions or issues:

1. Check documentation in `/brain/*.md`
2. Review deployment guide
3. Contact development team

---

**Status:** ✅ Production Ready  
**Last Updated:** 2026-01-17  
**Version:** 1.0.0
