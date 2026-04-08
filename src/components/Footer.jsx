import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer-enhanced">
      {/* Gradient top border */}
      <div className="footer-gradient-line" />

      <div className="container">
        <div className="footer-inner">
          <div>
            <button
              className="gradient-text"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.3rem' }}
            >
              ayaz.dev
            </button>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.4rem', maxWidth: 220 }}>
              Building scalable solutions with Microsoft technologies.
            </p>
          </div>

          <div className="footer-links">
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="footer-link">{l}</button>
            ))}
          </div>

          <motion.button
            className="back-to-top glass"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ayaz Khan — Crafted with <Heart size={11} style={{ display: 'inline', color: '#ec4899', verticalAlign: 'middle' }} /> and lots of coffee.</p>
        </div>
      </div>
    </footer>
  )
}
