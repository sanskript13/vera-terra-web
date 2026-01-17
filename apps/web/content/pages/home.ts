import { PageContent, PageMetadata } from '../types'

export const metadata: PageMetadata = {
    title: 'Vera Terra | Yenileyici Tarım Danışmanlığı Şanlıurfa',
    description: 'Şanlıurfa ve çevresinde yenileyici tarım danışmanlığı. Fıstık, pamuk, Urfa biberi, buğdaygiller. Toprak sağlığı, MRV ile ölçülebilir değişim.',
    keywords: [
        'yenileyici tarım şanlıurfa',
        'rejeneratif tarım danışmanlığı',
        'fıstık pamuk buğday danışmanlık',
        'toprak sağlığı şanlıurfa',
        'MRV',
        'sürdürülebilir tarım güneydoğu',
        'alan danışmanlığı urfa'
    ]
}

export const pageContent: PageContent = {
    hero: {
        eyebrow: 'Şanlıurfa\'da',
        headline: 'Onarıcı tarımda saha danışmanlığı',
        subline: 'Tarladan başlayan değişim. Koçluk, program ve eğitimle toprak sağlığını güçlendirmeyi, uzun vadeli dayanıklılık inşa etmeyi hedefliyoruz.',
        primaryCta: { label: 'Tanışalım', href: '/iletisim' },
        secondaryCta: { label: 'Nasıl Çalışıyoruz', href: '/nasil-calisiyoruz' }
    },
    sections: [
        {
            type: 'text',
            heading: 'Sahadan geldik, sahada çalışıyoruz',
            content: 'Onarıcı tarımda saha danışmanlığı yapıyoruz. Toprak sağlığı, su verimliliği ve uzun vadeli dayanıklılık üzerine çalışıyoruz. Tarla ziyaretleriyle başlıyor, veriyle ilerliyoruz. Kimyasal reçete değil, pratik değişim öneriyoruz.\n\nŞanlıurfa ve çevresinde 4 üründe (Antep fıstığı, pamuk, Urfa biberi, buğdaygiller) aktif çalışıyoruz.'
        },
        {
            type: 'grid',
            heading: 'Üç alanda hizmet veriyoruz',
            lead: 'Sahadan başlayan danışmanlık: birebir koçluk, program desteği ve eğitim. Her tarla farklıdır, her çiftçi farklı yoldan ilerler.',
            items: [
                {
                    title: 'Saha Koçluğu',
                    text: 'Birebir tarla ziyaretleri. Toprak, su ve pratikleri yerinde değerlendiriyor, adım adım rehberlik ediyoruz.',
                    icon: '🌱'
                },
                {
                    title: 'Danışmanlık Programları',
                    text: 'Sezonluk veya yıllık paket programlar. Baseline ölçümden, izleme ve raporlamaya kadar tüm süreç dahil.',
                    icon: '📋'
                },
                {
                    title: 'Eğitim & Akademi',
                    text: 'Çiftçi, agronomist ve kooperatif yöneticileri için eğitim. Teorik değil, uygulama odaklı.',
                    icon: '🎓'
                }
            ]
        },
        {
            type: 'text',
            heading: 'Toprak sağlığından başlar, uzun vadeli dayanıklılığa gider',
            content: 'Onarıcı tarım bizim için bir sezonluk çözüm değil, yıllarca süren bir süreç. Toprak organik maddesini artırmayı, su tutma kapasitesini güçlendirmeyi, biyoçeşitliliği desteklemeyi amaçlıyoruz.\n\nKimyasal doz yazmıyoruz. Pratik değişiklikler öneriyoruz: rotasyon, toprak örtüsü, sulama zamanlaması gibi.',
            subheading: 'Odak: Onarıcı Tarım'
        },
        {
            type: 'products',
            heading: 'Şanlıurfa\'da dört üründe çalışıyoruz',
            lead: 'Her ürünün kendi dinamikleri var. Lokal iklim, toprak tipi ve su kaynaklarına göre pratikler uyarlıyoruz.',
            products: [
                {
                    name: 'Antep Fıstığı',
                    description: 'Uzun dönem toprak sağlığı ve verim dayanıklılığı. Çok yıllık ürün, sabırlı yaklaşım gerektirir.'
                },
                {
                    name: 'Pamuk',
                    description: 'Rotasyon, su verimliliği ve toprak yapısı. Yıllık ürün, hızlı iterasyon mümkün.'
                },
                {
                    name: 'Urfa Biberi',
                    description: 'Organik madde artışı ve sulama optimizasyonu. Lokal ürün, özel pratikler.'
                },
                {
                    name: 'Buğdaygiller',
                    description: 'Minimal işleme, toprak örtüsü, rotasyon. Geniş alan uygulamaları.'
                }
            ]
        },
        {
            type: 'process',
            heading: 'Tarladan başlıyor, veriyle ilerliyoruz',
            lead: 'Ön görüşmeyle başlıyoruz: alan profili, hedefler, zorluklar. Sonra tarlaya gidiyoruz. Program birlikte tasarlanıyor.',
            steps: [
                { number: 1, title: 'Ön görüşme ve alan profili', description: '' },
                { number: 2, title: 'Tarla değerlendirmesi ve baseline', description: '' },
                { number: 3, title: 'Sezonluk izleme ve rehberlik', description: '' },
                { number: 4, title: 'Ölçüm, raporlama, bir sonraki sezon', description: '' }
            ]
        },
        {
            type: 'stats',
            heading: 'Küçük çiftçiden kooperatiflere',
            stats: [
                { value: '650+ dekar', label: 'Aktif alan' },
                { value: '12 ay', label: 'Ortalama program süresi' }
            ],
            testimonial: {
                quote: 'Her ölçekte ortak nokta aynı: sahadan başlamak, veriyle ilerlemek, uzun vadeli düşünmek.',
                author: 'Şanlıurfa ve çevresinde'
            }
        },
        {
            type: 'cta',
            heading: 'Tarlanız için ön görüşme yapalım',
            lead: 'Alan profilinizi dinleyelim, hedeflerinizi anlayalım, uygun yaklaşımı birlikte belirleyelim. 48 saat içinde dönüş yapıyoruz.',
            primaryCta: { label: 'Tanışalım', href: '/iletisim' },
            secondaryCta: { label: 'Email Gönder', href: 'mailto:hello@verattera.com' }
        }
    ]
}

export const homeStats = [
    { label: "dekar saha deneyimi", value: "650+" },
    { label: "süreç yaklaşımı", value: "Sezon & yıl boyu" },
    { label: "ürün odağı", value: "4 ürün" },
]
