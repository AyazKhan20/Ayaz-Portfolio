import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'React / Next.js', level: 92, color: '#61dafb' },
  { name: 'UI/UX Design', level: 88, color: '#f472b6' },
  { name: 'Node.js / Express', level: 85, color: '#68d391' },
  { name: 'TypeScript', level: 80, color: '#3b82f6' },
  { name: 'AWS / Cloud', level: 75, color: '#f59e0b' },
  { name: 'Python / AI', level: 70, color: '#a78bfa' },
]

const categories = [
  {
    label: 'Frontend',
    color: '#61dafb',
    bg: 'rgba(97,218,251,0.08)',
    border: 'rgba(97,218,251,0.2)',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
  },
  {
    label: 'Backend',
    color: '#68d391',
    bg: 'rgba(104,211,145,0.08)',
    border: 'rgba(104,211,145,0.2)',
    items: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Database',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase', 'Firebase'],
  },
  {
    label: 'DevOps & Tools',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Vercel', 'Git'],
  },
]

const timeline = [
  { year: '2021', title: 'Started Web Dev', desc: 'Learned HTML, CSS, JavaScript fundamentals' },
  { year: '2022', title: 'First Freelance Project', desc: 'Built full-stack apps with React & Node.js' },
  { year: '2023', title: 'Cloud & DevOps', desc: 'Mastered AWS, Docker and CI/CD pipelines' },
  { year: '2024', title: 'AI Integration', desc: 'Building AI-powered SaaS products with LLMs' },
]

const RADIUS = 36
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function CircleProgress({ level, color, name, inView, delay }) {
  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE

  return (
    <motion.div
      className="circle-skill"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="circle-wrap">
        <svg width="90" height="90" viewBox="0 0 90 90">
          {/* Track */}
          <circle cx="45" cy="45" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
          {/* Progress */}
          <motion.circle
            cx="45" cy="45" r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
            transform="rotate(-90 45 45)"
            style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </svg>
        <div className="circle-pct" style={{ color }}>{level}%</div>
      </div>
      <p className="circle-name">{name}</p>
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
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.9rem', maxWidth: 480, margin: '0.75rem auto 0' }}>
            Technologies I use to build fast, scalable, and beautiful products.
          </p>
        </motion.div>

        {/* Circular skill rings */}
        <div className="circle-skills-grid">
          {skills.map(({ name, level, color }, i) => (
            <CircleProgress key={name} name={name} level={level} color={color} inView={inView} delay={i * 0.08} />
          ))}
        </div>

        {/* Divider */}
        <div className="skills-divider" />

        {/* Categorized tech cards */}
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
                {items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="skill-cat-item"
                    style={{ background: bg, borderColor: border, color: 'var(--text)' }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + ci * 0.1 + ii * 0.04 }}
                    whileHover={{ scale: 1.06, color }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="skills-divider" />

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>Journey</p>
          <div className="timeline">
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                className="timeline-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                <div className="timeline-card glass">
                  <span className="timeline-year gradient-text">{year}</span>
                  <h4 className="timeline-title">{title}</h4>
                  <p className="timeline-desc">{desc}</p>
                </div>
                <div className="timeline-dot" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
