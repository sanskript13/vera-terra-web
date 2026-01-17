'use client'

import { motion } from 'framer-motion'
import { fadeUp, buttonHover } from '@/lib/motion-utils'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const faqs = [
    {
        question: "Bu süreç ne kadar sürer?",
        answer: "Onarıcı tarım bir sezonluk çözüm değildir. Çoğu zaman adım adım ilerleyen, yıllara yayılan bir süreçtir."
    },
    {
        question: "Kimyasal kullanıyor musunuz?",
        answer: "Biz kimyasal reçete yazmayız. Sahada gözlem ve izleme disiplinini güçlendirir, mümkün olan yerde pratik değişimlerle riskleri yönetmeyi hedefleriz. Uygulamalar yerel mevzuat ve etiket kurallarına göre değerlendirilmelidir."
    },
    {
        question: "Hangi ürünlerde çalışıyorsunuz?",
        answer: "Öncelik sıramız: Antep fıstığı, pamuk, Urfa biberi ve buğdaygiller. Yaklaşımımız ürün bağımsızdır; deneyimimiz bu ürünlerde derinleşmiştir."
    },
    {
        question: "Kimlerle çalışıyorsunuz?",
        answer: "Küçük çiftçilerden kooperatiflere, tarım işletmelerinden projelere kadar farklı ölçekte yapılarla çalışırız."
    },
    {
        question: "İlk adım ne?",
        answer: "Kısa bir ön görüşmeyle alanı ve hedefleri anlarız; sonra sahaya çıkış için çerçeveyi birlikte kurarız."
    }
]

export function FAQAccordion() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-[720px] px-6">
                <motion.h2
                    className="text-3xl font-bold font-heading text-center text-foreground mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Sık sorulanlar
                </motion.h2>

                <Accordion type="single" className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger value={`item-${index}`} className="text-left text-lg font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Optional 'Next Step' Row */}
                <motion.div
                    className="mt-16 text-center pt-8 border-t border-border/40"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className="text-muted-foreground mb-4">Tarlanız için ön görüşme yapalım</p>
                    <motion.div whileHover={buttonHover}>
                        <Button asChild size="lg" className="rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                            <Link href="/iletisim">İletişim Formu</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
