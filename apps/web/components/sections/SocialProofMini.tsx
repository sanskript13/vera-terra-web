'use client'

import { motion } from 'framer-motion'
import { simpleFade } from '@/lib/motion-utils'

import { CheckCircle2 } from 'lucide-react'
import { homeStats } from '@/content/pages/home'

export function SocialProofMini() {
    return (
        <section className="py-12 border-b border-border/50 bg-background/50">
            <div className="mx-auto max-w-[720px] px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    {homeStats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-medium">
                                <span className="font-bold text-foreground mr-1">{stat.value}</span>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
