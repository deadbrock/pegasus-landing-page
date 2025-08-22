import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Tilt } from './ui/Tilt'

type Props = {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: Icon }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <Tilt className="[perspective:1000px]">
        <Card className="glass border-white/10 hover:shadow-glow transition-shadow ease-out-back duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/10">
                <Icon className="w-8 h-8 text-cyan-300" aria-hidden />
              </div>
              <CardTitle className="text-white text-lg">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-white/85">{description}</p>
          </CardContent>
        </Card>
      </Tilt>
    </motion.div>
  )
}


