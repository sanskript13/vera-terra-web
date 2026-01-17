#!/bin/bash
# Add metadata to all page.tsx files

PAGES=("nasil-calisiyoruz" "odak-alanlarimiz" "onarici-tarim-yaklasimimiz" "calistigimiz-urunler" "saha-koclugu" "danismanlik-programlari" "egitim-akademi" "program-akisi" "olcum-izleme" "hakkimizda" "iletisim")

for page in "${PAGES[@]}"; do
  echo "Adding metadata to $page..."
  cat > "app/$page/page.tsx" << EOF
import { Metadata } from 'next'
import { PageRenderer } from '@/components/sections/PageRenderer'
import { pageContent, metadata as pageMetadata } from '@/content/pages/$page'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verattera.com'

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    url: \\\`\\\${siteUrl}/$page\\\`,
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
EOF
done

echo "✅ Metadata added to all pages"
