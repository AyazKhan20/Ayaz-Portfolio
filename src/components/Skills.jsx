import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'AWS / Cloud', level: 75 },
  { name: 'UI/UX Design', level: 88 },
  { name: 'Python / AI', level: 70 },
]

const tech = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Tailwind', 'Figma', 'Git']

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          <div>
            {skills.map(({ name, level }, i) => (
              <motion.div
                key={name}
                className="skill-row"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="skill-header">
                  <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{name}</span>
                  <span className="skill-pct">{level}%</span>
                </div>
                <div className="skill-track">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="tech-grid">
            {tech.map((t, i) => (
              <motion.span
                key={t}
                className="tech-badge glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
