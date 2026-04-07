import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, GitBranch, Link, X as XIcon, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const roles = ['Full-Stack .NET Developer', 'D365 Developer', 'Open Source Contributor', 'Tech Enthusiast','Power Platform Developer', 'Cloud Solutions Architect','Azure DevOps ']

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      {/* Dynamic Background Orbs */}
      <motion.div 
        animate={{ 
          x: mousePos.x * 2, 
          y: mousePos.y * 2,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="orb" 
        style={{ width: 600, height: 600, top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 65%)' }} 
      />
      <motion.div 
        animate={{ 
          x: -mousePos.x * 1.5, 
          y: -mousePos.y * 1.5,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="orb" 
        style={{ width: 500, height: 500, bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 65%)' }} 
      />
      <motion.div 
        animate={{ 
          x: mousePos.x, 
          y: -mousePos.y,
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="orb" 
        style={{ width: 350, height: 350, top: '40%', left: '55%', background: 'radial-gradient(circle, rgba(244,114,182,0.1), transparent 65%)' }} 
      />

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent2)',
            }}
          />
        ))}
      </div>

      {/* Grid lines with parallax */}
      <motion.div 
        style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        className="hero-grid" 
      />

      <div className="hero-content">
        <motion.div {...fadeUp(0.1)} className="hero-badge glass">
          <Sparkles size={12} style={{ color: '#a78bfa' }} />
          <span>Available for work</span>
          <span className="dot" />
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="hero-title">
          Hi, I'm{' '}
          <span className="gradient-text name-glow">Ayaz khan</span>
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
