import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills as resumeSkills } from '../data/resumeData'

const categories = [
  { label: 'Languages', color: '#7c3aed', items: resumeSkills.languages },
  { label: 'Frameworks and Libraries', color: '#06b6d4', items: resumeSkills.frameworks },
  { label: 'Databases', color: '#f59e0b', items: resumeSkills.databases },
  { label: 'Tools', color: '#4ade80', items: resumeSkills.tools },
  { label: 'Soft Skills', color: '#f472b6', items: resumeSkills.soft },
]

const marqueeItems = [...resumeSkills.languages, ...resumeSkills.frameworks, ...resumeSkills.databases]

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
          <h2 className="section-title">Technical <span className="gradient-text">Strengths</span></h2>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.9rem', maxWidth: 460, margin: '0.75rem auto 0' }}>
            Skills aligned with my internship and academic project work.
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

        {/* Category cards */}
        <div className="skill-categories">
          {categories.map(({ label, color, items }, ci) => (
            <motion.div
              key={label}
              className="skill-category glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + ci * 0.1 }}
              style={{ borderColor: `${color}55` }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-dot" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                <span className="skill-cat-label" style={{ color }}>{label}</span>
              </div>
              <div className="skill-cat-items">
                {items.map((item, ii) => (
                  <motion.div
                    key={item}
                    className="skill-cat-item-row"
                    style={{ background: `${color}14`, borderColor: `${color}44` }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + ci * 0.08 + ii * 0.04 }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
