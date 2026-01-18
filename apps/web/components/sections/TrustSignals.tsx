'use client'

import { motion } from 'framer-motion'
import { Sprout, TrendingUp, Users } from 'lucide-react'

const trustItems = [
    {
        icon: Sprout,
        label: "Şanlıurfa odaklı saha yaklaşımı",
        description: "Yerel iklim ve toprak koşullarına uygun planlama"
    },
    {
        icon: TrendingUp,
        label: "Sezon içi izleme ve raporlama",
        description: "Uygulama takibi + geri bildirim döngüsü"
    },
    {
        icon: Users,
        label: "Fıstık, pamuk, biber ve tahıllar",
        description: "Ürün bazlı pratik öneriler"
    }
]

export function TrustSignals() {
    return (
        <section className="py-12 bg-primary-50/30 border-y border-border/40">
            <div className="mx-auto max-w-[720px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.25,
                                delay: i * 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className="text-center"
                        >
                            <item.icon className="w-8 h-8 mx-auto mb-3 text-primary-700" strokeWidth={1.5} />
                            <h3 className="font-bold text-foreground mb-1 text-sm">{item.label}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
