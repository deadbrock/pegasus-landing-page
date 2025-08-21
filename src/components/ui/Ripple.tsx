import { useEffect, useRef } from 'react'

export function useRipple() {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      ripple.style.position = 'absolute'
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.borderRadius = '9999px'
      ripple.style.background = 'rgba(255,255,255,0.35)'
      ripple.style.pointerEvents = 'none'
      ripple.style.transform = 'scale(0)'
      ripple.style.opacity = '0.8'
      ripple.style.transition = 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease'
      ripple.className = 'ripple'
      ;(e.currentTarget as HTMLElement).appendChild(ripple)
      // force reflow
      ripple.getBoundingClientRect()
      ripple.style.transform = 'scale(1)'
      ripple.style.opacity = '0'
      setTimeout(() => ripple.remove(), 600)
    }
    el.addEventListener('click', handler)
    return () => el.removeEventListener('click', handler)
  }, [])

  return containerRef
}


