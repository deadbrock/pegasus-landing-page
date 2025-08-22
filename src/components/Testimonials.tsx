import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    quote: 'Reduzimos atrasos e ganhamos visibilidade em toda a operação.',
    author: 'Mariana Silva',
    role: 'Gerente de Logística',
    avatar: 'MS'
  },
  {
    quote: 'A roteirização inteligente cortou custos de combustível rapidamente.',
    author: 'Roberto Lima',
    role: 'Supervisor de Frota',
    avatar: 'RL'
  },
  {
    quote: 'Integração simples com nosso ERP, times adotaram em dias.',
    author: 'Ana Pereira',
    role: 'Coordenadora de Operações',
    avatar: 'AP'
  }
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    const play = () => setIndex((i) => (i + 1) % data.length)
    intervalRef.current = window.setInterval(play, 3500)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  const pause = () => intervalRef.current && clearInterval(intervalRef.current)
  const resume = () => {
    intervalRef.current = window.setInterval(() => setIndex((i) => (i + 1) % data.length), 3500)
  }

  return (
    <section id="depoimentos" className="py-20">
      <div className="container-section">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold">
          Depoimentos
        </motion.h2>
        <div className="relative mt-10 glass rounded-3xl p-8 border border-white/10 overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="flex" style={{ transform: `translateX(-${index * 100}%)`, transition: 'transform 500ms ease' }}>
            {data.map((t, i) => (
              <div key={i} className="min-w-full px-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 grid place-items-center text-white font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xl">“{t.quote}”</p>
                    <div className="mt-3 text-white/85">{t.author} — {t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


