import { PageContent, PageMetadata } from '../types'

export const metadata: PageMetadata = {
    title: 'Ne Yapıyoruz | Vera Terra',
    description: 'Saha koçluğu, danışmanlık programları ve eğitim. Sahadan başlayan onarıcı tarım.',
    keywords: ['saha koçluğu', 'tarım danışmanlığı', 'eğitim akademi', 'tarla rehberliği']
}

export const pageContent: PageContent = {
    hero: {
        headline: 'Ne Yapıyoruz',
        subline: 'Saha koçluğu, danışmanlık programları ve eğitim. Tarladan başlıyor, birlikte ilerliyoruz.',
        primaryCta: { label: 'Tanışalım', href: '/iletisim' }
    },
    sections: [
        {
            type: 'text',
            heading: 'Neden saha, neden birlikte',
            content: 'Onarıcı tarım masa başında planlanmaz. Tarlaya gitmek, toprağa bakmak, mevcut pratiği anlamak gerekir. Her tarla farklıdır, her çiftçinin yolu farklıdır.\n\nBizim işimiz sahadan başlamak. Gözlemle başlıyor, veriyle devam ediyoruz. Hazır reçete vermiyoruz, birlikte çözüm arıyoruz. Süreç uzun, sabır gerektirir. Ama kalıcı değişim böyle oluyor.\n\nÜç alanda çalışıyoruz: birebir koçluk, program desteği ve eğitim. Hepsi aynı temele dayanıyor: sahadan başla, birlikte ilerle.'
        },
        {
            type: 'text',
            heading: 'Birebir tarla rehberliği',
            content: 'Saha koçluğu birebir çalışmaktır. Tarlanıza geliyoruz, toprak ve su durumunu değerlendiriyoruz, mevcut pratiği anlıyoruz. Sonra birlikte adım atıyoruz.\n\nStandart plan yoktur. Her tarla kendi dinamiklerine göre ilerler. Bir tarlada rotasyon öncelikli olabilir, diğerinde sulama zamanlaması. Gözlemleyip, test edip, kayıt altına alıyoruz.\n\nKoçluk süreci uzundur. Bir sezon değil, yıllarca sürebilir. Çünkü toprak sağlığı bir sezonda gelmez. Sabırla, adım adım ilerliyoruz.'
        },
        {
            type: 'text',
            heading: 'Süreç odaklı program desteği',
            content: 'Danışmanlık programları daha yapılandırılmış süreçlerdir. Sezonluk veya yıllık paketler halinde çalışıyoruz. Baseline ölçümle başlıyor, izleme ve raporlamayla devam ediyor.\n\nProgram boyunca düzenli tarla ziyaretleri yapıyoruz. Toprak, su, bitki sağlığı parametrelerini ölçüyor, değişimi takip ediyoruz. Her şey kayıt altında. Sezon sonunda değerlendirme yapıyor, bir sonraki adımları planlıyoruz.\n\nKüçük ölçekli üreticiden kooperatif ağlarına kadar farklı boyutlarda program tasarlıyoruz. Her program alana ve ihtiyaca göre uyarlanıyor.'
        },
        {
            type: 'text',
            heading: 'Kapasiteyi birlikte inşa ediyoruz',
            content: 'Eğitim sadece bilgi aktarmak değildir. Kapasite inşa etmektir. Çiftçi, agronomist, kooperatif yöneticisi – herkesin onarıcı tarımı anlaması, uygulaması ve yaygınlaştırması gerekir.\n\nEğitimlerimiz teorik değil, uygulama odaklıdır. Sahadan örneklerle çalışıyoruz. Grup içinde öğreniyoruz. Herkes kendi deneyimini paylaşıyor, birlikte gelişiyoruz.\n\nKohort bazlı programlar yürütüyoruz. Bir grup birlikte başlıyor, birlikte ilerliyor. Alan simülasyonları yapıyoruz. Veri toplama pratiği ediyoruz. Sonunda sertifikalandırıyoruz.'
        },
        {
            type: 'text',
            heading: 'Birbirini tamamlayan yaklaşımlar',
            content: 'Saha koçluğu birebir derinleşmektir. Danışmanlık programları yapılandırılmış süreci getirir. Eğitim kapasiteyi yaygınlaştırır. Üçü birlikte daha güçlüdür.\n\nBir çiftçi koçluk alabilir, sonra programa geçebilir. Bir kooperatif eğitimle başlayıp, sonra ağ genelinde program yürütebilir. Bir agronomist eğitim alıp, sonra kendi bölgesinde koçluk yapabilir.\n\nHedefimiz bağımlılık yaratmak değil, kapasite inşa etmektir. Siz kendi tarlanızı okuyabilir hale gelin. Kendi pratiğinizi geliştirebilir hale gelin. Biz yanınızda olalım, ama yol sizin olsun.'
        },
        {
            type: 'cta',
            heading: 'Hangi yaklaşım size uygun?',
            lead: 'Birebir koçluk mu, yapılandırılmış program mı, yoksa eğitimle mi başlamak istersiniz? Ön görüşmede dinleyelim, birlikte belirleyelim.',
            primaryCta: { label: 'Tanışalım', href: '/iletisim' },
            secondaryCta: { label: 'Nasıl Çalışıyoruz', href: '/nasil-calisiyoruz' }
        }
    ]
}
