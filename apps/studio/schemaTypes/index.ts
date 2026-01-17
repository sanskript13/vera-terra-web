// Documents
import siteSettings from './siteSettings'
import page from './page'
import post from './post'
import author from './documents/author'
import category from './documents/category'

// Objects
import seo from './objects/seo'
import blockContent from './objects/blockContent'
import socialLink from './objects/socialLink'
import navItem from './objects/navItem'
import ctaButton from './objects/ctaButton'

// Sections
import hero from './sections/hero'
import richTextSection from './sections/richTextSection'
import featureGrid from './sections/featureGrid'
import testimonials from './sections/testimonials'
import faq from './sections/faq'
import cta from './sections/cta'
import pricing from './sections/pricing'
import imageGallery from './sections/imageGallery'
import logoCloud from './sections/logoCloud'
import contactForm from './sections/contactForm'

// MK Schemas
import { mkSchemaTypes } from './mk'

export const schemaTypes = [
  // Documents
  siteSettings,
  page,
  post,
  author,
  category,

  // Objects
  seo,
  blockContent,
  socialLink,
  navItem,
  ctaButton,

  // Sections
  hero,
  richTextSection,
  featureGrid,
  testimonials,
  faq,
  cta,
  pricing,
  imageGallery,
  logoCloud,
  contactForm,

  // MK Schemas
  ...mkSchemaTypes,
]
