import { cn } from './cn'

type Props = React.HTMLAttributes<HTMLSpanElement>

export function Badge({ className, ...props }: Props) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/95', className)}
      {...props}
    />
  )
}


