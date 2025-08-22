import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Stat = { label: string; value: number; prefix?: string; suffix?: string }

const stats: Stat[] = [
  { label: 'Custos de rota', value: -23, suffix: '%' },
  { label: 'Entregas no prazo', value: 18, prefix: '+', suffix: '%' },
  { label: 'Tempo de integração', value: -60, suffix: '%' },
]

function useCountUp(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs)
      setValue(Math.round(p * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])
  return value
}

export function Stats() {
  return (
    <section className="py-20">
      <div className="container-section">
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const v = useCountUp(Math.abs(s.value))
            const sign = s.value < 0 ? '-' : s.prefix ?? ''
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="glass rounded-3xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-extrabold tracking-tight">
                  {sign}
                  {v}
                  {s.suffix}
                </div>
                <div className="mt-2 text-white/85">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


