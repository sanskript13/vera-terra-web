/**
 * Design Tokens - Vera Terra
 * Centralized spacing, typography, motion, and visual tokens
 */

export const tokens = {
    // Spacing
    spacing: {
        section: {
            sm: 'py-12 md:py-16',
            md: 'py-16 md:py-24',
            lg: 'py-20 md:py-32',
        },
        stack: {
            xs: 'space-y-2',
            sm: 'space-y-4',
            md: 'space-y-6',
            lg: 'space-y-8',
            xl: 'space-y-12',
        },
        gap: {
            xs: 'gap-2',
            sm: 'gap-4',
            md: 'gap-6',
            lg: 'gap-8',
            xl: 'gap-12',
        },
    },

    // Border Radius
    radius: {
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-full',
    },

    // Shadows
    shadow: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg hover:shadow-xl',
        focus: 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    },

    // Typography Scale
    typography: {
        eyebrow: 'text-xs font-semibold uppercase tracking-wider text-primary-700',
        h1: 'text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground',
        h2: 'text-3xl md:text-4xl font-bold font-heading text-foreground',
        h3: 'text-2xl md:text-3xl font-bold font-heading text-foreground',
        h4: 'text-xl md:text-2xl font-semibold font-heading text-foreground',
        body: 'text-base leading-relaxed text-muted-foreground',
        small: 'text-sm leading-relaxed text-muted-foreground',
    },

    // Motion
    motion: {
        duration: {
            fast: 150,
            normal: 200,
            slow: 250,
        },
        easing: [0.21, 0.47, 0.32, 0.98] as const,
        distance: {
            sm: 12,
            md: 16,
            lg: 20,
        },
    },

    // Container
    container: {
        default: 'max-w-[720px] mx-auto px-6',
        wide: 'max-w-4xl mx-auto px-6',
        full: 'max-w-7xl mx-auto px-6',
    },
} as const
