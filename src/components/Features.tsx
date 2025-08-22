import { motion } from 'framer-motion'
import { FeatureCard } from './FeatureCard'
import { Map, Satellite, Boxes, CheckCircle2, Wrench, BarChart3 } from 'lucide-react'
import { Button } from './ui/Button'

const features = [
  { title: 'Roteirização inteligente', description: 'Reduza tempo e custo de rotas.', icon: Map },
  { title: 'Rastreamento em tempo real', description: 'Acompanhe veículos e status.', icon: Satellite },
  { title: 'Controle de estoque', description: 'Insumos, peças e materiais sob controle.', icon: Boxes },
  { title: 'Aprovação de pedidos', description: 'Fluxo entre encarregados, supervisores e expedição.', icon: CheckCircle2 },
  { title: 'Manutenção preventiva', description: 'Alertas e histórico de viaturas/equipamentos.', icon: Wrench },
  { title: 'Analytics e KPIs', description: 'Painel com métricas de operação.', icon: BarChart3 },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-20">
      <div className="container-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Como o Pegasus ajuda na logística
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} icon={f.icon} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="gradient" size="lg">Quero otimizar minha logística com o Pegasus</Button>
        </div>
      </div>
    </section>
  )
}


