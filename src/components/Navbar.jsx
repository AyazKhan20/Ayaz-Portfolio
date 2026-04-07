import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-inner">
        <button className="nav-logo gradient-text" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ayaz.dev
        </button>

        <div className="nav-links">
          {links.map(l => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <button className="nav-hire" onClick={() => scrollTo('Contact')}>Hire Me</button>
        </div>

        <button className="nav-mobile-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile-menu"
          >
            {links.map(l => (
              <button key={l} className="nav-link" style={{ textAlign: 'left' }} onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
