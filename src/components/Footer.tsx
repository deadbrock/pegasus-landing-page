export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-section py-10 grid gap-6 md:grid-cols-3 text-white/85">
        <div>
          <div className="font-extrabold text-white text-lg">Pegasus</div>
          <p className="mt-2">Data de criação: 15/12/2024 — Desenvolvido por Douglas Marques.</p>
        </div>
        <nav aria-label="Links úteis" className="grid gap-2">
          <a href="#" className="hover:text-white">Política</a>
          <a href="#" className="hover:text-white">Termos</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </nav>
        <div className="grid gap-2">
          <div>Redes sociais</div>
          <div className="flex gap-3 text-white/70">
            <a aria-label="LinkedIn" href="#" className="hover:text-white">LinkedIn</a>
            <a aria-label="Twitter" href="#" className="hover:text-white">Twitter</a>
            <a aria-label="YouTube" href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-white/70">© {year} Pegasus. Todos os direitos reservados.</div>
    </footer>
  )
}


