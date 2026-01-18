/**
 * Motion Budget & Rules
 * 
 * PERFORMANCE BUDGET:
 * - Max 2-3 scroll reveals per page (Intro, main content, CTA)
 * - Card hovers allowed (subtle lift)
 * - No scroll reveal on individual small elements
 * 
 * TIMING RULES:
 * - Duration: 150-250ms (never exceed 300ms)
 * - Easing: [0.21, 0.47, 0.32, 0.98] (custom ease-out)
 * - Stagger: 0.08-0.1s between items (max 5 items)
 * - Distance: 12-16px vertical translation
 * 
 * REDUCED MOTION:
 * - When prefers-reduced-motion is active:
 *   - Remove all transforms (no y-translate)
 *   - Keep minimal opacity fade OR no animation
 *   - Duration can be shortened to 100ms
 */

import { useReducedMotion } from 'framer-motion'

export const motionConfig = {
    // Standard timings
    duration: {
        fast: 0.15,
        normal: 0.2,
        slow: 0.25,
    },

    // Custom easing (gentle deceleration)
    ease: [0.21, 0.47, 0.32, 0.98] as const,

    // Stagger between items
    stagger: 0.08,

    // Translation distances
    distance: {
        sm: 12,
        md: 16,
        lg: 20,
    },
} as const

/**
 * Standard fade-up animation for sections
 * Use for: SectionHeader, main content blocks, CTABand
 */
export const sectionReveal = {
    hidden: { opacity: 0, y: motionConfig.distance.md },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: motionConfig.duration.normal,
            ease: motionConfig.ease,
        },
    },
}

/**
 * Reduced motion variant - opacity only
 */
export const sectionRevealReduced = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.1 },
    },
}

/**
 * Hook to get motion-safe animation variants
 */
export function useMotionSafe() {
    const shouldReduceMotion = useReducedMotion()

    return {
        reveal: shouldReduceMotion ? sectionRevealReduced : sectionReveal,
        shouldAnimate: !shouldReduceMotion,
    }
}

/**
 * Card hover animation (always allowed, even with reduced motion)
 * Reason: Hover is user-initiated, not auto-triggered
 */
export const cardHover = {
    y: -4,
    transition: { duration: 0.15 },
}

/**
 * Stagger container for lists/grids
 */
export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: motionConfig.stagger,
        },
    },
}
