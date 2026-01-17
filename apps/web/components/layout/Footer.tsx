import Link from 'next/link'
import { Linkedin, Instagram } from 'lucide-react'

const navigation = {
    main: [
        { name: 'Anasayfa', href: '/' },
        { name: 'Ne Yapıyoruz', href: '/ne-yapiyoruz' },
        { name: 'Nasıl Çalışıyoruz', href: '/nasil-calisiyoruz' },
        { name: 'Odak Alanlarımız', href: '/odak-alanlarimiz' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
    ],
    cta: { name: 'Tanışalım', href: '/iletisim' },
    legal: [
        { name: 'Gizlilik', href: '/gizlilik' },
        { name: 'KVKK', href: '/kvkk' },
    ],
    social: [
        {
            name: 'LinkedIn',
            href: '#',
            icon: Linkedin,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: Instagram,
        },
    ],
}

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                {/* Branding */}
                <div className="mb-8 md:mb-0">
                    <Link href="/" className="font-heading text-xl font-bold text-primary-700">
                        Vera Terra
                    </Link>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Şanlıurfa ve çevresinde onarıcı tarım danışmanlığı
                    </p>
                </div>

                {/* Navigation */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Main Links + CTA */}
                    <div className="col-span-2">
                        <h4 className="text-sm font-semibold text-foreground">Sayfalar</h4>
                        <ul className="mt-4 space-y-2">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary-700"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link
                                    href={navigation.cta.href}
                                    className="inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                                >
                                    {navigation.cta.name}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Yasal</h4>
                        <ul className="mt-4 space-y-2">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary-700"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground">Sosyal</h4>
                        <div className="mt-4 flex space-x-4">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary-700"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-border">
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <p className="text-center text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Vera Terra. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    )
}
