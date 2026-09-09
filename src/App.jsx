import { useState } from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20">
          <Hero darkMode={darkMode} />
          <TrustedBy />
          <Features />
          <About />
          <HowItWorks />
          <Stats />
          <Solutions />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTA />
          <Footer />
        </main>
        <BackToTop />
      </div>
    </div>
  )
}

export default App