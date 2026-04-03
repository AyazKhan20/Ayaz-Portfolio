import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const skills = [
  { name: 'React / Next.js', level: 92, color: '#61dafb', icon: '⚛' },
  { name: 'UI/UX Design',    level: 88, color: '#f472b6', icon: '🎨' },
  { name: 'Node.js',         level: 85, color: '#68d391', icon: '🟢' },
  { name: 'TypeScript',      level: 80, color: '#3b82f6', icon: '𝙏𝙎' },
  { name: 'AWS / Cloud',     level: 75, color: '#f59e0b', icon: '☁' },
  { name: 'Python / AI',     level: 70, color: '#a78bfa', icon: '🐍' },
]

const categories = [
  {
    label: 'Frontend',
    color: '#61dafb',
    bg: 'rgba(97,218,251,0.07)',
    border: 'rgba(97,218,251,0.18)',
    items: [
      { name: 'React',          note: 'Expert' },
      { name: 'Next.js',        note: 'Expert' },
      { name: 'TypeScript',     note: 'Advanced' },
      { name: 'Tailwind CSS',   note: 'Expert' },
      { name: 'Framer Motion',  note: 'Advanced' },
      { name: 'Figma',          note: 'Advanced' },
    ],
  },
  {
    label: 'Backend',
    color: '#68d391',
    bg: 'rgba(104,211,145,0.07)',
    border: 'rgba(104,211,145,0.18)',
    items: [
      { name: 'Node.js',    note: 'Expert' },
      { name: 'Express',    note: 'Expert' },
      { name: 'Python',     note: 'Advanced' },
      { name: 'GraphQL',    note: 'Advanced' },
      { name: 'REST APIs',  note: 'Expert' },
      { name: 'WebSockets', note: 'Intermediate' },
    ],
  },
  {
    label: 'Database',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.18)',
    items: [
      { name: 'PostgreSQL', note: 'Advanced' },
      { name: 'MongoDB',    note: 'Advanced' },
      { name: 'Redis',      note: 'Intermediate' },
      { name: 'Prisma',     note: 'Advanced' },
      { name: 'Supabase',   note: 'Advanced' },
      { name: 'Firebase',   note: 'Intermediate' },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.18)',
    items: [
      { name: 'AWS',            note: 'Advanced' },
      { name: 'Docker',         note: 'Advanced' },
      { name: 'GitHub Actions', note: 'Advanced' },
      { name: 'Terraform',      note: 'Intermediate' },
      { name: 'Vercel',         note: 'Expert' },
      { name: 'Git',            note: 'Expert' },
    ],
  },
]

const marqueeItems = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
  'Docker', 'PostgreSQL', 'MongoDB', 'Tailwind', 'Figma', 'Git',
  'GraphQL', 'Redis', 'Terraform', 'Vercel', 'Prisma', 'Supabase',
]

const noteColor = {
  Expert:       '#4ade80',
  Advanced:     '#a78bfa',
  Intermediate: '#f59e0b',
}

const RADIUS = 38
const CIRC   = 2 * Math.PI * RADIUS

function AnimatedNumber({ value, inView, color }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.4, ease: 'easeOut' })
    const unsub = rounded.on('change', v => setDisplay(v))
    return () => { controls.stop(); unsub() }
  }, [inView])

  return <span style={{ color }}>{display}%</span>
}

function RingCard({ name, level, color, icon, inView, delay }) {
  const offset = CIRC - (level / 100) * CIRC
  return (
    <motion.div
      className="ring-card glass"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ '--ring-color': color }}
    >
      <div className="ring-svg-wrap">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
          <motion.circle
            cx="50" cy="50" r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.3, delay: delay + 0.2, ease: 'easeOut' }}
            transform="rotate(-90 50 50)"
            style={{ filter: `drop-shadow(0 0 8px ${color}90)` }}
          />
        </svg>
        <div className="ring-center">
          <span className="ring-icon">{icon}</span>
          <AnimatedNumber value={level} inView={inView} color={color} />
        </div>
      </div>
      <p className="ring-name">{name}</p>
      <div className="ring-bar-track">
        <motion.div
          className="ring-bar-fill"
          style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.9rem', maxWidth: 460, margin: '0.75rem auto 0' }}>
            Technologies I use to build fast, scalable, and beautiful products.
          </p>
        </motion.div>

        {/* Marquee strip */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-item glass">{item}</span>
            ))}
          </div>
        </div>

        <div className="skills-divider" />

        {/* Ring cards */}
        <div className="ring-cards-grid">
          {skills.map(({ name, level, color, icon }, i) => (
            <RingCard key={name} name={name} level={level} color={color} icon={icon} inView={inView} delay={i * 0.08} />
          ))}
        </div>

        <div className="skills-divider" />

        {/* Category cards */}
        <div className="skill-categories">
          {categories.map(({ label, color, bg, border, items }, ci) => (
            <motion.div
              key={label}
              className="skill-category glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + ci * 0.1 }}
              style={{ borderColor: border }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-dot" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                <span className="skill-cat-label" style={{ color }}>{label}</span>
              </div>
              <div className="skill-cat-items">
                {items.map(({ name: item, note }, ii) => (
                  <motion.div
                    key={item}
                    className="skill-cat-item-row"
                    style={{ background: bg, borderColor: border }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + ci * 0.08 + ii * 0.04 }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item}</span>
                    <span className="skill-note" style={{ color: noteColor[note] || 'var(--muted)' }}>{note}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="skill-legend"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {Object.entries(noteColor).map(([label, color]) => (
            <div key={label} className="legend-item">
              <span className="legend-dot" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
