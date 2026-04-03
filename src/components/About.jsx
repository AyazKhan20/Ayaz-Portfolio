import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Cloud, Zap } from 'lucide-react'

const stats = [
  { value: '6+', label: 'Months Experience' },
  { value: '5+', label: 'Projects Built' },
  { value: '20+', label: 'Events Participated' },
  { value: '100%', label: 'Accuracy & Consistency' },
]

const services = [
  { icon: Code2, title: 'Full-Stack .NET Dev', desc: 'Building scalable applications with C#, ASP.NET Core, and modern web technologies' },
  { icon: Palette, title: 'D365 Development', desc: 'Custom solutions for Microsoft Dynamics 365' },
  { icon: Cloud, title: 'Power Platform', desc: 'Building automated workflows with Power Automate and Power Apps' },
  { icon: Zap, title: 'Performance', desc: 'Optimized, fast & accessible web experiences' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        {/* Top grid */}
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
            <a href="/resume.pdf" className="grad-btn" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
              Download Resume
            </a>
          </motion.div>

          {/* Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Avatar card */}
            <div className="avatar-card glass" style={{ marginBottom: '1.5rem' }}>
              <div className="avatar-ring">
                <div className="avatar-inner">
                  <span className="avatar-initials gradient-text">AK</span>
                </div>
              </div>
              <div style={{ marginLeft: '1.25rem' }}>
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem' }}>Ayaz Khan</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Full-Stack .NET Developer</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.72rem', color: '#4ade80' }}>Open to opportunities</span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="stat-card glass"
                >
                  <div className="stat-value gradient-text">{value}</div>
                  <div className="stat-label">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div className="services-grid" style={{ marginTop: '5rem' }}>
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div className="service-icon">
                <Icon size={20} />
              </div>
              <h4 className="service-title">{title}</h4>
              <p className="service-desc">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
