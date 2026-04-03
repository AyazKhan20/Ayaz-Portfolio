import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, GitBranch, Link, X as XIcon, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor', 'Cloud Architect']

const socials = [
  { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
  { icon: Link, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://twitter.com', label: 'Twitter' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      {/* Orbs */}
      <div className="orb" style={{ width: 600, height: 600, top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 65%)' }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 65%)' }} />
      <div className="orb" style={{ width: 350, height: 350, top: '40%', left: '55%', background: 'radial-gradient(circle, rgba(244,114,182,0.1), transparent 65%)' }} />

      {/* Grid lines */}
      <div className="hero-grid" />

      <div className="hero-content">
        <motion.div {...fadeUp(0.1)} className="hero-badge glass">
          <Sparkles size={12} style={{ color: '#a78bfa' }} />
          <span>Available for work</span>
          <span className="dot" />
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="hero-title">
          Hi, I'm{' '}
          <span className="gradient-text name-glow">Ayaz</span>
        </motion.h1>

        {/* Animated role */}
        <div className="hero-role-wrap">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="hero-role"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p {...fadeUp(0.45)} className="hero-desc">
          I craft high-performance digital experiences that blend clean code with stunning design. Turning ideas into reality, one pixel at a time.
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="hero-btns">
          <button className="grad-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </button>
          <button className="outline-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </motion.div>

        <motion.div {...fadeUp(0.65)} className="hero-socials">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="social-icon glass" aria-label={label}>
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="scroll-indicator"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
