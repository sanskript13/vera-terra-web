import { Metadata } from 'next'
import { PageRenderer } from '@/components/sections/PageRenderer'
import { pageContent, metadata as pageMetadata } from '@/content/pages/olcum-izleme'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verattera.com'

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: `${siteUrl}/olcum-izleme`,
    siteName: 'Vera Terra',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.title,
    description: pageMetadata.description,
  },
}

export default function() {
  return <PageRenderer content={pageContent} />
}
