import { Button } from './ui/Button'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <nav aria-label="Principal" className="backdrop-blur-md/20 glass">
      <div className="container-section flex items-center justify-between py-4">
        <a href="#inicio" className="font-extrabold tracking-tight text-white text-xl sm:text-2xl" aria-label="Ir para o início">
          Pegasus
        </a>
        <ul className="hidden md:flex items-center gap-6 text-white/90">
          <li><a href="#inicio" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5">Início</a></li>
          <li><a href="#funcionalidades" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5">Funcionalidades</a></li>
          <li><a href="#ajuda" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5">Como Ajudamos</a></li>
          <li><a href="#depoimentos" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5">Depoimentos</a></li>
          <li><a href="#faq" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5">FAQ</a></li>
          <li><a href="#contato" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-0.5">Contato</a></li>
        </ul>
        <motion.div whileTap={{ scale: 0.96 }}>
          <Button asChild>
            <a href="#cta">Testar o Pegasus</a>
          </Button>
        </motion.div>
      </div>
    </nav>
  )
}


