import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const items = [
  { q: 'O Pegasus integra com meu ERP atual?', a: 'Sim, oferecemos integrações via API e conectores customizáveis.' },
  { q: 'Quanto tempo leva para implantar?', a: 'Projetos iniciam em dias e vão de 2 a 6 semanas conforme escopo.' },
  { q: 'Como funciona o suporte?', a: 'Suporte em horário comercial, SLAs combinados e base de conhecimento.' },
  { q: 'O Pegasus funciona offline?', a: 'Aplicativos móveis suportam cenários offline com sincronização posterior.' },
  { q: 'Como é feita a segurança dos dados?', a: 'Criptografia em trânsito e repouso, autenticação robusta e auditorias.' },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container-section">
        <h2 className="text-3xl sm:text-4xl font-bold">FAQ</h2>
        <Accordion.Root type="single" collapsible className="mt-8 grid gap-4">
          {items.map((item, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="glass rounded-2xl border border-white/10">
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left px-5 py-4 flex items-center justify-between gap-4">
                  <span className="font-semibold">{item.q}</span>
                  <ChevronDown className="transition-transform data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-5 pb-5 text-white/85">
                {item.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}


