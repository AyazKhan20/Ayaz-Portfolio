import { motion } from 'framer-motion'
import { ArrowDown, GitBranch, Link, X as XIcon } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

const socials = [
  { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
  { icon: Link, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Hero() {
  return (
    <section className="hero">
      {/* Orbs */}
      <div className="orb" style={{ width: 500, height: 500, top: '10%', left: '-5%', background: 'radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)' }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: '10%', right: '-5%', background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)' }} />
      <div className="orb" style={{ width: 300, height: 300, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(244,114,182,0.08), transparent 70%)' }} />

      <div className="hero-content">
        <motion.div {...fadeUp(0.1)} className="hero-badge glass">
          <span className="dot" />
          Available for work
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="hero-title">
          Hi, I'm <span className="gradient-text">Ayaz</span>
        </motion.h1>

        <motion.p {...fadeUp(0.35)} className="hero-sub">
          Full-Stack Developer &amp; UI/UX Enthusiast
        </motion.p>

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
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="scroll-indicator"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
