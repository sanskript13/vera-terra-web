import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:
                    'bg-primary-700 text-white shadow-sm hover:bg-primary-900 hover:shadow-md hover:-translate-y-0.5',
                secondary:
                    'border border-border bg-background text-foreground hover:bg-muted hover:-translate-y-0.5',
                ghost: 'text-primary-700 hover:bg-primary-100',
                outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50',
            },
            size: {
                sm: 'px-3 py-1.5 text-sm',
                md: 'px-5 py-2.5 text-sm',
                lg: 'px-6 py-3 text-base',
                xl: 'px-8 py-4 text-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
)

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
