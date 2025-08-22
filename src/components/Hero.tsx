import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { Particles } from './Particles'

export function Hero() {

  return (
    <section id="inicio" className="relative overflow-hidden">
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

          {/* bloco removido conforme solicitação: card lateral do Hero com itens de frota/rotas/rastreamento */}
        </div>
      </div>
    </section>
  )
}


