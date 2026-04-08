import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, GitBranch, Linkedin, Twitter, Sparkles, Download } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const roles = [
  'Full-Stack .NET Developer',
  'D365 Developer',
  'Power Platform Developer',
  'Cloud Solutions Architect',
  'Azure DevOps Engineer',
]

const socials = [
  { icon: GitBranch, href: 'https://github.com/AyazKhan20', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

const floatingSnippets = [
  { code: 'const future = await build()', x: '8%',  y: '20%', delay: 0 },
  { code: '.NET Core 8.0 🚀',             x: '75%', y: '15%', delay: 0.5 },
  { code: 'git push origin main',         x: '80%', y: '70%', delay: 1 },
  { code: 'Azure.Deploy() ✓',             x: '5%',  y: '72%', delay: 1.5 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 80, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 80, damping: 20 })
  const heroRef = useRef(null)

  useEffect(() => {
    const move = (e) => { cursorX.set(e.clientX - 12); cursorY.set(e.clientY - 12) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Custom cursor */}
      <motion.div className="custom-cursor" style={{ x: springX, y: springY }} />

      {/* Orbs */}
      <div className="orb" style={{ width: 700, height: 700, top: '-15%', left: '-15%', background: 'radial-gradient(circle, rgba(124,58,237,0.18), transparent 65%)' }} />
      <div className="orb" style={{ width: 550, height: 550, bottom: '-15%', right: '-15%', background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 65%)' }} />
      <div className="orb" style={{ width: 400, height: 400, top: '35%', left: '50%', background: 'radial-gradient(circle, rgba(244,114,182,0.08), transparent 65%)' }} />

      {/* Grid */}
      <div className="hero-grid" />

      {/* Floating code snippets */}
      {floatingSnippets.map(({ code, x, y, delay }) => (
        <motion.div
          key={code}
          className="floating-snippet glass"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ opacity: { delay, duration: 0.6 }, y: { delay, duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <span className="snippet-dot" />{code}
        </motion.div>
      ))}

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge glass"
        >
          <Sparkles size={11} style={{ color: '#a78bfa' }} />
          <span>Open to opportunities</span>
          <span className="dot" />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Hi, I'm{' '}
          </motion.span>
          <motion.span
            className="gradient-text name-glow"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Ayaz Khan
          </motion.span>
        </motion.h1>

        <div className="hero-role-wrap">
          <span className="hero-role-prefix">I'm a </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.35 }}
              className="hero-role"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Passionate about building scalable .NET solutions, D365 customizations, and cloud-native apps on Azure. Turning complex business requirements into elegant digital experiences.
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <button className="grad-btn hero-cta" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <Sparkles size={14} /> View My Work
          </button>
          <a href="/resume.pdf" className="outline-btn hero-cta" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Download size={14} /> Download CV
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
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
        transition={{ delay: 1.8 }}
        className="scroll-indicator"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
