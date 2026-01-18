/**
 * Centralized Metrics - Single Source of Truth
 * 
 * GOVERNANCE RULES:
 * 1. No new metrics added without explicit approval
 * 2. All numeric claims must be verifiable
 * 3. StatStrip component only reads from this file
 * 4. Update this file when metrics change (with date)
 */

export const metrics = {
    // Last updated: 2026-01-18
    // Source: Internal records

    experience: {
        value: "3",
        unit: "sezon",
        label: "Şanlıurfa'da deneyim",
        description: "Yerel koşullara derin hakimiyet",
        verified: true,
    },

    // NOTE: The following metrics are placeholders.
    // Only use if you can verify the actual numbers.
    // Otherwise, use qualitative descriptions instead.

    // farmersWorkedWith: {
    //   value: "15+",
    //   unit: "çiftçi",
    //   label: "Birlikte çalışılan",
    //   description: "Küçük üreticiden kooperatiflere",
    //   verified: false, // NEEDS VERIFICATION
    // },

    // landCovered: {
    //   value: "650+",
    //   unit: "dekar",
    //   label: "Toplam alan",
    //   description: "Fıstık, pamuk, biber ve tahıllarda",
    //   verified: false, // NEEDS VERIFICATION
    // },
} as const

/**
 * Get all verified metrics for display
 */
export function getVerifiedMetrics() {
    return Object.values(metrics).filter(m => m.verified)
}

/**
 * Qualitative (safe) descriptions that don't require verification
 */
export const qualitativeDescriptions = {
    region: "Şanlıurfa odaklı saha yaklaşımı",
    monitoring: "Sezon içi izleme ve raporlama",
    crops: "Fıstık, pamuk, biber ve tahıllar",
    approach: "Onarıcı tarım odaklı danışmanlık",
} as const
