import { type HTMLAttributes } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card } from './card'
import { Badge } from './badge'
import { cn } from '@/lib/utils'

interface StatModuleProps extends HTMLAttributes<HTMLDivElement> {
    value: string | number
    label: string
    change?: {
        value: number
        period: string
    }
    icon?: React.ReactNode
}

export function StatModule({
    value,
    label,
    change,
    icon,
    className,
    ...props
}: StatModuleProps) {
    const isPositive = change && change.value > 0
    const isNegative = change && change.value < 0
    const isNeutral = change && change.value === 0

    return (
        <Card className={cn('p-6', className)} {...props}>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="mt-2 font-heading text-4xl font-bold text-primary-700">
                        {value}
                    </p>
                    {change && (
                        <div className="mt-3 flex items-center gap-1">
                            <Badge
                                variant={isPositive ? 'success' : isNegative ? 'error' : 'outline'}
                                className="flex items-center gap-1"
                            >
                                {isPositive && <TrendingUp className="h-3 w-3" />}
                                {isNegative && <TrendingDown className="h-3 w-3" />}
                                {isNeutral && <Minus className="h-3 w-3" />}
                                {isPositive && '+'}
                                {change.value}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{change.period}</span>
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                        {icon}
                    </div>
                )}
            </div>
        </Card>
    )
}
