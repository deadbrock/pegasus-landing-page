import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden">
      <div className="container-section py-24 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Pegasus — Logística inteligente, do pedido à entrega.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-lg text-white/90"
            >
              Roteirização, rastreamento, controle de estoque e analytics em um só lugar.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4" aria-label="Chamadas para ação">
              <Button size="lg">Começar Agora</Button>
              <Button variant="secondary" size="lg">Ver Demonstração</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3" aria-label="Selos de confiança">
              <Badge>Disponível para desktop e mobile</Badge>
              <Badge>Integração via API</Badge>
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y, rotate }} aria-hidden className="aspect-square w-full max-w-md mx-auto glass rounded-3xl shadow-soft">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0A3D91" />
                    <stop offset="100%" stopColor="#1E90FF" />
                  </linearGradient>
                </defs>
                <path d="M50,220 C80,100 220,60 340,130 C260,200 180,260 90,290 Z" fill="url(#grad)" opacity="0.9" />
                <circle cx="300" cy="100" r="6" fill="#fff" opacity="0.7" />
                <circle cx="260" cy="70" r="3" fill="#fff" opacity="0.5" />
                <circle cx="340" cy="160" r="4" fill="#fff" opacity="0.5" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


