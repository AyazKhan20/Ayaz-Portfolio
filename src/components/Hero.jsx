import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, GitBranch, Linkedin, Sparkles, Download, MapPin, Mail } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { profile, roles, quickStats } from '../data/resumeData'

const socials = [
  { icon: GitBranch, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

const floatingSnippets = [
  { code: 'ASP.NET Core MVC', x: '8%', y: '20%', delay: 0 },
  { code: 'MERN Stack Projects', x: '75%', y: '15%', delay: 0.5 },
  { code: 'GitHub: AyazKhan20', x: '78%', y: '70%', delay: 1 },
  { code: 'MCA 2024-2026', x: '5%', y: '72%', delay: 1.5 },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)
  const springX = useSpring(parallaxX, { stiffness: 70, damping: 18 })
  const springY = useSpring(parallaxY, { stiffness: 70, damping: 18 })
  const contentX = useTransform(springX, [-0.5, 0.5], [-18, 18])
  const contentY = useTransform(springY, [-0.5, 0.5], [-14, 14])
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])
  const heroRef = useRef(null)

  useEffect(() => {
    const move = (event) => {
      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect) return

      const normalizedX = (event.clientX - rect.left) / rect.width - 0.5
      const normalizedY = (event.clientY - rect.top) / rect.height - 0.5

      parallaxX.set(normalizedX)
      parallaxY.set(normalizedY)
    }

    const reset = () => {
      parallaxX.set(0)
      parallaxY.set(0)
    }

    const heroElement = heroRef.current
    heroElement?.addEventListener('pointermove', move)
    heroElement?.addEventListener('pointerleave', reset)

    return () => {
      heroElement?.removeEventListener('pointermove', move)
      heroElement?.removeEventListener('pointerleave', reset)
    }
  }, [parallaxX, parallaxY])

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <motion.section className="hero" ref={heroRef} style={{ perspective: 1400 }}>

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

      <motion.div className="hero-content" style={{ x: contentX, y: contentY, rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-profile-card glass"
        >
          <div className="hero-photo-frame">
            <img src={profile.profileImage} alt={`${profile.name} profile`} className="hero-photo" loading="eager" />
          </div>
          <div className="hero-profile-meta">
            <p className="hero-profile-name">{profile.name}</p>
            <p className="hero-profile-role">{profile.title}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge glass"
        >
          <Sparkles size={11} style={{ color: '#a78bfa' }} />
          <span>Open to entry-level software roles</span>
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
            {profile.name}
          </motion.span>
        </motion.h1>

        <div className="hero-role-wrap">
          <span className="hero-role-prefix">Focused on </span>
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
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}
        >
          {quickStats.map((item) => (
            <div key={item.label} className="glass" style={{ padding: '0.65rem 0.85rem', borderRadius: 999 }}>
              <strong style={{ fontSize: '0.8rem', marginRight: '0.35rem' }}>{item.value}</strong>
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}
        >
          <span className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', padding: '0.5rem 0.8rem', borderRadius: 999 }}>
            <MapPin size={12} /> {profile.location}
          </span>
          <a href={`mailto:${profile.email}`} className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', padding: '0.5rem 0.8rem', borderRadius: 999, textDecoration: 'none', color: 'var(--text)' }}>
            <Mail size={12} /> {profile.email}
          </a>
        </motion.div>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <button className="grad-btn hero-cta" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <Sparkles size={14} /> View Real Projects
          </button>
          <a href={profile.resumeUrl} className="outline-btn hero-cta" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} target="_blank" rel="noreferrer">
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
      </motion.div>

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
    </motion.section>
  )
}
