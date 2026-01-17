'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Bir sorun oluştu
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Üzgünüz, bir hata meydana geldi.
            </p>
            <button
                onClick={reset}
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                Tekrar dene
            </button>
        </div>
    )
}
