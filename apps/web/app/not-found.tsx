import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
            <h1 className="text-6xl font-bold tracking-tight text-foreground">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
                Sayfa bulunamadı
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                Anasayfaya dön
            </Link>
        </div>
    )
}
