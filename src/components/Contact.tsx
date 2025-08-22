import { motion } from 'framer-motion'
import { Instagram, Linkedin, Phone, Mail, MessageCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { useId, useState } from 'react'

export function Contact() {
  const formId = useId()
  const [subject, setSubject] = useState('Dúvida')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const company = (data.get('company') as string) || ''
    const message = data.get('message') as string
    const subj = data.get('subject') as string

    // mailto fallback (abre cliente de email do usuário)
    const mailto = new URL(`mailto:douglas.mds24@gmail.com`)
    mailto.searchParams.set('subject', `[Pegasus] ${subj} - ${name}`)
    mailto.searchParams.set('body', `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nEmpresa: ${company}\nAssunto: ${subj}\n\nMensagem:\n${message}`)
    window.open(mailto.toString(), '_blank')

    // Redireciona para WhatsApp com mensagem padrão
    const wa = new URL('https://wa.me/5581993932249')
    wa.searchParams.set('text', 'Olá, gostaria de mais informações sobre o Pegasus!')
    window.open(wa.toString(), '_blank')
  }

  return (
    <section id="contato" className="py-20">
      <div className="container-section">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center">Contato</motion.h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Coluna esquerda: texto e contatos diretos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold">Vamos conversar?</h3>
            <p className="mt-2 text-white/85">Tire dúvidas, solicite uma demonstração ou fale com nosso time de suporte</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5" aria-hidden /> <a href="https://wa.me/5581993932249" className="hover:underline">(81) 99393-2249</a></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5" aria-hidden /> <a href="mailto:douglas.mds24@gmail.com" className="hover:underline">douglas.mds24@gmail.com</a></div>
            </div>

            <div className="mt-6 flex gap-4">
              <a aria-label="Instagram" href="https://instagram.com/doug_souzz?igsh=eW80MHVjeWdiNmo1" className="transition-transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/douglas-souza-451b56253" className="transition-transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
              <a aria-label="WhatsApp" href="https://wa.me/5581993932249" className="transition-transform hover:scale-110"><MessageCircle className="w-6 h-6" /></a>
            </div>
          </motion.div>

          {/* Coluna direita: formulário */}
          <motion.form
            id={formId}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 border border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="sm:col-span-1">
              <label className="block mb-1 text-sm">Nome</label>
              <input required name="name" className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/60" />
            </div>
            <div className="sm:col-span-1">
              <label className="block mb-1 text-sm">E-mail</label>
              <input required type="email" name="email" className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/60" />
            </div>
            <div className="sm:col-span-1">
              <label className="block mb-1 text-sm">Telefone</label>
              <input required name="phone" className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/60" />
            </div>
            <div className="sm:col-span-1">
              <label className="block mb-1 text-sm">Empresa (opcional)</label>
              <input name="company" className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/60" />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 text-sm">Assunto</label>
              <select name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/60">
                <option>Dúvida</option>
                <option>Demonstração</option>
                <option>Suporte</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 text-sm">Mensagem</label>
              <textarea required name="message" rows={5} className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/60" />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <Button variant="gradient" size="lg" type="submit">Enviar mensagem</Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}


