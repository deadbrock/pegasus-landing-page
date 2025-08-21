# Pegasus - Landing Page

Projeto de landing page profissional do sistema Pegasus (gestão logística).

## Stack
- React + Vite + TypeScript
- Tailwind CSS
- framer-motion (animações)
- shadcn/ui (Button, Card, Accordion)
- lucide-react (ícones)

## Rodando o projeto
```bash
npm i
npm run dev
```

## Build e preview
```bash
npm run build
npm run preview
```

## Estrutura de componentes
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Features.tsx` (+ `FeatureCard`)
- `src/components/Differentials.tsx`
- `src/components/Stats.tsx`
- `src/components/Testimonials.tsx`
- `src/components/FAQ.tsx`
- `src/components/CTASection.tsx`
- `src/components/Footer.tsx`

## Acessibilidade e SEO
- Semântica com header/main/section/footer
- aria-labels e contraste AA no tema azul
- Metatags SEO e Open Graph em `index.html`

## Observações
- Tema com gradiente azul `from-[#0A3D91] to-[#1E90FF]`
- Parallax no Hero (framer-motion)
- Cards com tilt 3D e glassmorphism
