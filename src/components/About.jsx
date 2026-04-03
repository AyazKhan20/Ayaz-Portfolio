import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Built' },
  { value: '20+', label: 'Happy Clients' },
  { value: '99%', label: 'Satisfaction' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Building the future,{' '}
              <span className="gradient-text">one line at a time</span>
            </h2>
            <p className="about-text">
              I'm a passionate full-stack developer who loves creating seamless digital experiences. With a strong foundation in modern web technologies, I bridge the gap between design and engineering.
            </p>
            <p className="about-text" style={{ marginBottom: '2rem' }}>
              When I'm not coding, I'm exploring new design trends, contributing to open source, or leveling up my skills in cloud architecture and AI integrations.
            </p>
            <a href="/resume.pdf" className="outline-btn" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              Download Resume
            </a>
          </motion.div>

          <div className="stats-grid">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="stat-card glass"
              >
                <div className="stat-value gradient-text">{value}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
