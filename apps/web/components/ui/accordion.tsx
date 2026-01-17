'use client'

import { createContext, useContext, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type AccordionContextType = {
    openItems: Set<string>
    toggleItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

function useAccordion() {
    const context = useContext(AccordionContext)
    if (!context) {
        throw new Error('Accordion components must be used within Accordion')
    }
    return context
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple'
    defaultValue?: string | string[]
}

export function Accordion({
    children,
    type = 'single',
    defaultValue,
    className,
    ...props
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<Set<string>>(
        new Set(
            Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
        )
    )

    const toggleItem = (value: string) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(value)) {
                newSet.delete(value)
            } else {
                if (type === 'single') {
                    newSet.clear()
                }
                newSet.add(value)
            }
            return newSet
        })
    }

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div className={cn('space-y-2', className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    value: string
}

export function AccordionItem({ value, children, className, ...props }: AccordionItemProps) {
    const { openItems } = useAccordion()
    const isOpen = openItems.has(value)

    return (
        <div
            className={cn('overflow-hidden rounded-xl border border-border', className)}
            data-state={isOpen ? 'open' : 'closed'}
            {...props}
        >
            {children}
        </div>
    )
}

interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    value: string
}

export function AccordionTrigger({
    value,
    children,
    className,
    ...props
}: AccordionTriggerProps) {
    const { openItems, toggleItem } = useAccordion()
    const isOpen = openItems.has(value)

    return (
        <button
            onClick={() => toggleItem(value)}
            className={cn(
                'flex w-full items-center justify-between bg-gray-50 px-6 py-4 text-left font-medium transition-all hover:bg-gray-100',
                className
            )}
            {...props}
        >
            <span>{children}</span>
            <ChevronDown
                className={cn(
                    'h-5 w-5 transition-transform duration-200',
                    isOpen && 'rotate-180'
                )}
            />
        </button>
    )
}

export function AccordionContent({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'overflow-hidden border-l-2 border-primary-300 px-6 py-4 text-sm',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
