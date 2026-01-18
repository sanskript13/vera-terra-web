'use client'

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { tokens } from '@/lib/design-tokens'

interface FormFieldProps {
    label: string
    helper?: string
    error?: string
    required?: boolean
    className?: string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FormFieldProps { }

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
    ({ label, helper, error, required, className, ...props }, ref) => {
        return (
            <div className={cn('space-y-2', className)}>
                <label className="block">
                    <span className="text-sm font-medium text-foreground">
                        {label}
                        {required && <span className="text-error ml-1">*</span>}
                    </span>
                </label>

                <input
                    ref={ref}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={helper ? `${props.id}-helper` : undefined}
                    className={cn(
                        'w-full px-4 py-3 rounded-lg border',
                        'bg-background text-foreground',
                        'placeholder:text-muted-foreground/60',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                        'transition-shadow duration-150',
                        error
                            ? 'border-error focus:ring-error'
                            : 'border-border hover:border-border/80'
                    )}
                    {...props}
                />

                {helper && !error && (
                    <p id={`${props.id}-helper`} className="text-xs text-muted-foreground">
                        {helper}
                    </p>
                )}

                {error && (
                    <p className="text-xs text-error" role="alert">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

FormInput.displayName = 'FormInput'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FormFieldProps { }

export const FormTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, helper, error, required, className, ...props }, ref) => {
        return (
            <div className={cn('space-y-2', className)}>
                <label className="block">
                    <span className="text-sm font-medium text-foreground">
                        {label}
                        {required && <span className="text-error ml-1">*</span>}
                    </span>
                </label>

                <textarea
                    ref={ref}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={helper ? `${props.id}-helper` : undefined}
                    rows={4}
                    className={cn(
                        'w-full px-4 py-3 rounded-lg border',
                        'bg-background text-foreground',
                        'placeholder:text-muted-foreground/60',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                        'transition-shadow duration-150',
                        'resize-none',
                        error
                            ? 'border-error focus:ring-error'
                            : 'border-border hover:border-border/80'
                    )}
                    {...props}
                />

                {helper && !error && (
                    <p id={`${props.id}-helper`} className="text-xs text-muted-foreground">
                        {helper}
                    </p>
                )}

                {error && (
                    <p className="text-xs text-error" role="alert">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

FormTextarea.displayName = 'FormTextarea'

interface SuccessPanelProps {
    title: string
    message: string
    className?: string
}

export function SuccessPanel({ title, message, className }: SuccessPanelProps) {
    return (
        <div
            className={cn(
                'p-6 rounded-lg border-2 border-success/30 bg-success/5',
                className
            )}
            role="status"
            aria-live="polite"
        >
            <h3 className="font-semibold text-success mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{message}</p>
        </div>
    )
}
