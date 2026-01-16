import './globals.css'
import {getSiteSettings} from '@/lib/sanity.fetch'

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const settings = await getSiteSettings()

  return (
    <html lang="tr">
      <body>
        <header className="border-b">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold">
              {settings?.title || 'Site'}
            </a>
            <nav className="flex gap-4 text-sm opacity-80">
              {(settings?.navigation || []).map((n: any, i: number) => (
                <a key={i} href={n.href}>{n.label}</a>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-6 py-6 text-sm opacity-70">
            {settings?.description || ''}
          </div>
        </footer>
      </body>
    </html>
  )
}
