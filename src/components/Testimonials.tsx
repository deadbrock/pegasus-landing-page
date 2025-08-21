import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    quote: 'Reduzimos atrasos e ganhamos visibilidade em toda a operação.',
    author: 'Mariana, Gerente de Logística'
  },
  {
    quote: 'A roteirização inteligente cortou custos de combustível rapidamente.',
    author: 'Roberto, Supervisor de Frota'
  },
  {
    quote: 'Integração simples com nosso ERP, times adotaram em dias.',
    author: 'Ana, Coordenadora de Operações'
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
        <div className="relative mt-10 glass rounded-3xl p-8 border border-white/10" onMouseEnter={pause} onMouseLeave={resume}>
          {data.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 p-8 ${i === index ? 'relative' : 'pointer-events-none'}`}
            >
              <p className="text-xl">“{t.quote}”</p>
              <footer className="mt-4 text-white/85">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}


