import { motion } from 'framer-motion'
import { FeatureCard } from './FeatureCard'
import { Boxes, Wrench, FileText, Receipt, BarChart3, Wallet, UserCog, Truck, Shield, FileSignature, Library, LocateFixed, FolderOpen, Bot } from 'lucide-react'
import { Button } from './ui/Button'

const features = [
  { title: 'Estoque Inteligente', description: 'Controle total, importação em Excel e relatórios de movimentação/ABC.', icon: Boxes, colorClass: 'text-cyan-300' },
  { title: 'Manutenção Preventiva', description: 'Agende serviços, acompanhe custos por veículo e receba alertas.', icon: Wrench, colorClass: 'text-emerald-300' },
  { title: 'Pedidos em Tempo Real', description: 'Crie, aprove e acompanhe em tabela ou Kanban com atualizações ao vivo.', icon: FileText, colorClass: 'text-indigo-300' },
  { title: 'Gestão Fiscal Automatizada', description: 'Importe NF-e (XML 4.0), cadastre fornecedores e movimente estoque.', icon: Receipt, colorClass: 'text-amber-300' },
  { title: 'Analytics Avançado', description: 'Dashboards com entregas, custos, rotas e performance de motoristas.', icon: BarChart3, colorClass: 'text-fuchsia-300' },
  { title: 'Controle de Custos', description: 'Gerencie despesas por categoria/veículo e relatórios de eficiência.', icon: Wallet, colorClass: 'text-rose-300' },
  { title: 'Gestão de Motoristas', description: 'Cadastro completo, alertas de CNH/documentos e relatórios.', icon: UserCog, colorClass: 'text-teal-300' },
  { title: 'Cadastro de Veículos', description: 'Registre dados da frota integrado à manutenção e custos.', icon: Truck, colorClass: 'text-sky-300' },
  { title: 'Auditoria Inteligente', description: 'Filtros avançados, alertas críticos e relatórios automáticos.', icon: Shield, colorClass: 'text-lime-300' },
  { title: 'Contratos Simplificados', description: 'Organize, edite e importe em lote com integração financeira.', icon: FileSignature, colorClass: 'text-orange-300' },
  { title: 'Relatórios Centralizados', description: 'Biblioteca completa, criação customizada e agendamento.', icon: Library, colorClass: 'text-violet-300' },
  { title: 'Rastreamento de Frotas', description: 'Monitore status e telemetria com integração OBD-CAN planejada.', icon: LocateFixed, colorClass: 'text-blue-300' },
  { title: 'Documentos & Gamificação', description: 'Pendências fiscais e engajamento com recompensas e metas.', icon: FolderOpen, colorClass: 'text-pink-300' },
  { title: 'Chatbot com IA', description: 'Atendimento 24/7 para supervisores, motoristas e gestores.', icon: Bot, colorClass: 'text-cyan-200' },
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
          Funcionalidades do Pegasus
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} icon={f.icon as any} colorClass={f.colorClass as any} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="gradient" size="lg">Quero otimizar minha logística com o Pegasus</Button>
        </div>
      </div>
    </section>
  )
}


