import { memo, useEffect, useMemo, useRef } from 'react'

type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number }

function ParticlesBase({ count = 30 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      a: Math.random() * 0.5 + 0.35,
    }))
  }, [count])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      resize()
    }
    window.addEventListener('resize', onResize)

    const loop = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.globalAlpha = 0.8
      for (const p of particles) {
        // wrap movement
        p.x = (p.x + p.vx + 1) % 1
        p.y = (p.y + p.vy + 1) % 1
        const px = p.x * (width / dpr)
        const py = p.y * (height / dpr)
        const rad = p.r
        const grad = ctx.createRadialGradient(px, py, 0, px, py, rad * 6)
        grad.addColorStop(0, 'rgba(255,255,255,0.6)')
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(px, py, rad, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [particles])

  return (
    <canvas
      aria-hidden
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  )
}

export const Particles = memo(ParticlesBase)


