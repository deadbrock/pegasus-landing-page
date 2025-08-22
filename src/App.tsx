import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Differentials } from './components/Differentials'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <Differentials />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
