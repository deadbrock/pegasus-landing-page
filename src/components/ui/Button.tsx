import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './cn'
import { useRipple } from './Ripple'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition ease-out-back disabled:opacity-60 disabled:pointer-events-none select-none',
  {
    variants: {
      variant: {
        default: 'bg-white text-[#0A3D91] hover:shadow-glow',
        secondary: 'bg-white/10 text-white hover:bg-white/15 border border-white/20',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const rippleRef = useRipple()
  return <Comp ref={rippleRef as any} className={cn(buttonVariants({ variant, size }), className)} {...props} />
}


