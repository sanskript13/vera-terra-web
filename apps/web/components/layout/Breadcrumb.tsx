import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
    name: string
    href: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
                {/* Home */}
                <li>
                    <Link
                        href="/"
                        className="text-muted-foreground hover:text-primary-700"
                    >
                        Ana Sayfa
                    </Link>
                </li>

                {/* Items */}
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                        {index === items.length - 1 ? (
                            <span className="font-medium text-foreground">{item.name}</span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-muted-foreground hover:text-primary-700"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
