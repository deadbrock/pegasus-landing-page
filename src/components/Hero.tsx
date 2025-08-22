import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { useRef } from 'react'
import { Truck, Map as MapIcon, Satellite } from 'lucide-react'
import { Particles } from './Particles'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden">
      <div className="container-section py-24 sm:py-28">
        <Particles count={36} />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Pegasus, tenha controle total da sua logística.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-lg text-white/90"
            >
              Do planejamento ao rastreamento, controle sua operação de ponta a ponta.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4" aria-label="Chamadas para ação">
              <Button variant="gradient" size="lg">Começar Agora 🚀</Button>
              <Button variant="secondary" size="lg" className="hover:scale-[1.05]">Ver Demonstração ▶️</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3" aria-label="Selos de confiança">
              <Badge>Disponível para desktop e mobile</Badge>
              <Badge>Integração via API</Badge>
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y, rotate }} aria-hidden className="aspect-square w-full max-w-md mx-auto glass rounded-3xl shadow-soft grid place-items-center">
              <div className="grid gap-4 text-white/95">
                <div className="flex items-center gap-3 justify-center">
                  <Truck className="w-12 h-12 text-cyan-300" aria-hidden />
                  <span className="text-lg">Frotas e entregas</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <MapIcon className="w-12 h-12 text-emerald-300" aria-hidden />
                  <span className="text-lg">Rotas e otimização</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Satellite className="w-12 h-12 text-indigo-300" aria-hidden />
                  <span className="text-lg">Rastreamento em tempo real</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


