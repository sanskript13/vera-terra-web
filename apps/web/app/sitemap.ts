import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://verattera.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/ne-yapiyoruz',
        '/saha-koclugu',
        '/danismanlik-programlari',
        '/egitim-akademi',
        '/odak-alanlarimiz',
        '/onarici-tarim-yaklasimimiz',
        '/calistigimiz-urunler',
        '/nasil-calisiyoruz',
        '/program-akisi',
        '/olcum-izleme',
        '/hakkimizda',
        '/iletisim',
        '/gizlilik',
        '/kvkk',
    ]

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))
}
