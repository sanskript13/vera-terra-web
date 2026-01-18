import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verattera.com'
const siteName = 'Vera Terra'

/**
 * Page Metadata Standard
 * 
 * RULES:
 * 1. Title format: "[Page H1] | Vera Terra"
 * 2. Description: 140-160 characters, approach-based (not promises)
 * 3. Title must match page H1 exactly
 * 4. Use this helper for all pages
 */

interface PageMetadataOptions {
    /** Page title - must match H1 on page */
    title: string
    /** Description - 140-160 chars, approach-based language */
    description: string
    /** URL path without leading slash */
    path?: string
    /** Optional OG image path */
    image?: string
}

export function createPageMetadata({
    title,
    description,
    path = '',
    image,
}: PageMetadataOptions): Metadata {
    const fullTitle = `${title} | ${siteName}`
    const url = `${siteUrl}/${path}`

    return {
        title: fullTitle,
        description,
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName,
            type: 'website',
            ...(image && { images: [{ url: image }] }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            ...(image && { images: [image] }),
        },
    }
}

/**
 * Standard page metadata templates
 * Use these as starting points, customize description per page
 */
export const pageMetadataTemplates = {
    home: {
        title: 'Onarıcı Tarım Danışmanlığı Şanlıurfa',
        description: 'Tarladan başlayan değişim. Saha koçluğu, danışmanlık ve eğitimle toprak sağlığını güçlendirmeyi hedefliyoruz.',
    },
    nasilCalisiyoruz: {
        title: 'Nasıl Çalışıyoruz',
        description: 'Gözlem, plan, uygulama ve öğrenme döngüsüyle sezon boyu birlikte ilerliyoruz. Tarladan başlayan, kayıtla ilerleyen bir süreç.',
    },
    odakAlanlari: {
        title: 'Odak Alanlarımız',
        description: 'Fıstık, pamuk, biber ve tahıl üretiminde onarıcı yaklaşımla saha danışmanlığı. Şanlıurfa bölgesel koşullarına özgü.',
    },
    hakkimizda: {
        title: 'Hakkımızda',
        description: 'Ne yaptığımız, nasıl çalıştığımız ve kimlerle çalışmaya uygun olduğumuz hakkında bilgi.',
    },
    iletisim: {
        title: 'İletişim',
        description: 'Tanışmak, soru sormak veya programa başlamak için iletişime geçin. 48 saat içinde dönüş yapıyoruz.',
    },
} as const
