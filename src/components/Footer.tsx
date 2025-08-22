import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-white/10 bg-[#071a3a]">
      <div className="container-section py-10 text-center text-white/85">
        <div className="font-extrabold text-white text-lg">Pegasus</div>
        <p className="mt-2">Data de criação: 15/12/2024 — Desenvolvido por Douglas Marques.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a aria-label="GitHub" href="#" className="hover:text-white"><Github className="w-5 h-5" /></a>
          <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
          <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
        </div>
        <div className="py-4 text-white/70">© {year} Pegasus. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}


