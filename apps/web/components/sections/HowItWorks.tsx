'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-utils'

const steps = [
    {
        title: "Ön görüşme",
        description: "İhtiyaç ve hedefleri netleştiririz",
        step: 1
    },
    {
        title: "Sahaya çıkış",
        description: "Mevcut durumu gözlemler, başlangıç çerçevesi kurarız",
        step: 2
    },
    {
        title: "Birlikte plan",
        description: "Küçük, uygulanabilir adımlarla yol haritası çıkarırız",
        step: 3
    },
    {
        title: "Sezon boyu takip",
        description: "Düzenli değerlendirme, öğrenme ve iyileştirme",
        step: 4
    }
]

export function HowItWorks() {
    return (
        <section className="py-16 md:py-24 bg-muted/20 border-y border-border/40">
            <div className="mx-auto max-w-[720px] px-6">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl font-bold font-heading text-foreground">
                        Tarladan başlarız, gözlem ve kayıtla ilerleriz
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting line (Desktop only) */}
                    <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-border/60 -z-10" />

                    <motion.div
                        className="grid gap-8 md:grid-cols-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        {steps.map((step) => (
                            <motion.div
                                key={step.step}
                                className="flex flex-col items-center text-center md:items-center"
                                variants={fadeUp}
                            >
                                <div className="w-14 h-14 rounded-full bg-background border-2 border-primary text-primary font-bold text-xl flex items-center justify-center mb-6 shadow-sm z-10">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {step.title}
                                </h3>
                                {/* Added description rendering if desired, though steps array has it. Assuming simple title for now as per previous, or adding description if needed. User copy had description. */}
                                <p className="text-muted-foreground mt-2 max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
