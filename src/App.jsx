import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const spotlightX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.25 })
  const spotlightY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.25 })
  const trailingSpotlightX = useSpring(pointerX, { stiffness: 35, damping: 28, mass: 0.45 })
  const trailingSpotlightY = useSpring(pointerY, { stiffness: 35, damping: 28, mass: 0.45 })

  useEffect(() => {
    const setInitialPosition = () => {
      pointerX.set(window.innerWidth / 2)
      pointerY.set(window.innerHeight / 3)
    }

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    setInitialPosition()
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('resize', setInitialPosition)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', setInitialPosition)
    }
  }, [pointerX, pointerY])

  return (
    <div className="app-shell">
      <motion.div className="mouse-spotlight mouse-spotlight-primary" style={{ x: spotlightX, y: spotlightY }} />
      <motion.div className="mouse-spotlight mouse-spotlight-secondary" style={{ x: trailingSpotlightX, y: trailingSpotlightY }} />
      <div className="noise" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
