'use client'

import { useReducedMotion } from 'framer-motion'

export const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: [0.21, 0.47, 0.32, 0.98] as const
        }
    }
}

export const buttonHover = {
    scale: 1.05,
    transition: {
        duration: 0.2,
        ease: "easeInOut" as const
    }
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

export const simpleFade = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
}

export function useMotion() {
    const shouldReduceMotion = useReducedMotion()

    // If reduced motion is enabled, return variants that only change opacity
    // without movement, or instant transitions.
    if (shouldReduceMotion) {
        return {
            fadeUp: {
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            },
            staggerContainer: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
            },
            simpleFade: {
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            },
            buttonHover: {}
        }
    }

    return { fadeUp, staggerContainer, simpleFade, buttonHover }
}
