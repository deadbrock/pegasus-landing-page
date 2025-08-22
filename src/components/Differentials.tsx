import { Rocket, Link2, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Rocket, title: 'Implementação rápida e modular', text: 'Comece pequeno e expanda sem atritos.' },
  { icon: Link2, title: 'Integração com APIs', text: 'Conecte ERPs e bancos de dados com facilidade.' },
  { icon: Users, title: 'Experiência para campo e backoffice', text: 'Fluxos desenhados para o dia a dia operacional.' },
]

export function Differentials() {
  return (
    <section id="ajuda" className="py-20 bg-white/10">
      <div className="container-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Diferenciais
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-6 border border-white/10 bg-white/20"
            >
              <item.icon className="w-12 h-12 text-cyan-300" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/85">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


