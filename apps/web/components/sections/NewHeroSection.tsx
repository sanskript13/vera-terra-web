'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, buttonHover } from '@/lib/motion-utils'

interface ActionButtonProps {
    label: string
    href: string
    variant?: 'primary' | 'secondary'
}

function ActionButton({ label, href, variant = 'primary' }: ActionButtonProps) {
    const isPrimary = variant === 'primary'

    return (
        <motion.div
            whileHover={buttonHover}
            className="inline-block"
        >
            <Link
                href={href}
                className={cn(
                    "inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-200 rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
                    isPrimary
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        : "border-2 border-primary/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted/80 hover:border-primary/40"
                )}
            >
                {label}
            </Link>
        </motion.div>
    )
}

interface NewHeroSectionProps {
    headline?: string
    description?: string
    primaryCta?: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
}

export function NewHeroSection({
    headline = "Onarıcı tarımda saha danışmanlığı",
    description = "Şanlıurfa’da tarladan başlayan bir süreç. Saha koçluğu, danışmanlık programları ve eğitimle; toprağı, suyu ve üretim sistemini birlikte ele alıyoruz. Hedefimiz hızlı vaatler değil, uzun vadeli dayanıklılık.",
    primaryCta = { label: "Tanışalım", href: "/iletisim" },
    secondaryCta = { label: "Nasıl Çalışıyoruz", href: "/nasil-calisiyoruz" }
}: NewHeroSectionProps) {
    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-background">
            {/* Background with Gradient and Grain */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-50/30 to-accent-50/20" />

                {/* Grain Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="container relative z-10 px-6 mx-auto max-w-[720px]">
                <div className="flex flex-col">
                    {/* Top-left subtle logo lockup - only visible if we want to emphasize it inside hero, 
              but distinct from global header. Keeping it very subtle as requested. */}
                    <div className="absolute top-8 left-6 md:left-8 lg:left-0 hidden lg:flex items-center gap-3 opacity-80">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Vera Terra</span>
                    </div>

                    {/* Main Content */}
                    <motion.div
                        className="space-y-8 pt-20 lg:pt-0"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]"
                            variants={fadeUp}
                        >
                            {headline}
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty"
                            variants={fadeUp}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            variants={fadeUp}
                        >
                            <ActionButton
                                label={primaryCta.label}
                                href={primaryCta.href}
                                variant="primary"
                            />
                            <ActionButton
                                label={secondaryCta.label}
                                href={secondaryCta.href}
                                variant="secondary"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
