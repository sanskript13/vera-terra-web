'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-utils'

interface FeatureItem {
    title: string
    description: string
}

const features: FeatureItem[] = [
    {
        title: "Saha Koçluğu",
        description: "Tarla başında yan yana çalışırız. Gözlem yapar, karar anlarında birlikte düşünürüz."
    },
    {
        title: "Danışmanlık Programları",
        description: "Rastgele öneriler değil; sahaya uyarlanan, sezon boyunca yürüyen bir çalışma düzeni kurarız."
    },
    {
        title: "Eğitim & Akademi",
        description: "Çiftçiler, kooperatifler ve saha ekipleri için uygulama odaklı öğrenme. Amaç: kapasite inşası."
    }
]

export function FeaturesGrid() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-[720px] px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading text-foreground mb-4">
                        Üç alanda hizmet veriyoruz
                    </h2>
                </div>

                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="group p-8 rounded-2xl border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
