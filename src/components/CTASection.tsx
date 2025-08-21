import { Button } from './ui/Button'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section id="cta" className="py-20">
      <div className="container-section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-10 border border-white/10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Pronto para acelerar sua logística?</h2>
          <p className="mt-3 text-white/85">Implemente o Pegasus e ganhe eficiência do pedido à entrega.</p>
          <div className="mt-6 flex justify-center">
            <Button size="lg">Quero testar o Pegasus</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


