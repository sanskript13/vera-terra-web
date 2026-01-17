'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Anasayfa', href: '/' },
  { name: 'Ne Yapıyoruz', href: '/ne-yapiyoruz' },
  { name: 'Nasıl Çalışıyoruz', href: '/nasil-calisiyoruz' },
  { name: 'Odak Alanlarımız', href: '/odak-alanlarimiz' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5" aria-label="Vera Terra Anasayfa">
            <span className="font-heading text-xl font-bold text-primary-700">Vera Terra</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Ana navigasyon" className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium leading-6 text-foreground hover:text-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
                  active && 'text-primary-700 font-semibold'
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex flex-1 justify-end">
          <Button asChild>
            <Link href="/iletisim">Tanışalım</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menüyü aç"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          {/* Overlay */}
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30"
            aria-label="Menüyü kapat"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menü"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Vera Terra Anasayfa"
              >
                <span className="font-heading text-xl font-bold text-primary-700">Vera Terra</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Menüyü kapat"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        active && 'bg-primary-50 text-primary-700'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>
                    Tanışalım
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
