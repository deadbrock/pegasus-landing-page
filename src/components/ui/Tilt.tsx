import type { ReactNode } from 'react'
import { useRef } from 'react'

type Props = {
  children: ReactNode
  maxTilt?: number
  glow?: boolean
  className?: string
}

export function Tilt({ children, maxTilt = 10, glow = true, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * (maxTilt * 2)
    const ry = (0.5 - px) * (maxTilt * 2)
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    if (glow) el.style.boxShadow = `${(px - 0.5) * 24}px ${(py - 0.5) * 24}px 60px rgba(30,144,255,0.25)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg)'
    el.style.boxShadow = 'none'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1)' }}
    >
      {children}
    </div>
  )
}


