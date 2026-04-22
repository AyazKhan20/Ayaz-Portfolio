import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Award, Users, Briefcase, Target } from 'lucide-react'
import { profile, quickStats, awards } from '../data/resumeData'

const stats = [
  { value: quickStats[1].value, label: quickStats[1].label, icon: Code2, color: '#a78bfa' },
  { value: quickStats[2].value, label: quickStats[2].label, icon: Briefcase, color: '#06b6d4' },
  { value: quickStats[3].value, label: quickStats[3].label, icon: Users, color: '#f472b6' },
  { value: '100%', label: 'Learning Focus', icon: Target, color: '#4ade80' },
]

const services = [
  { icon: Code2, title: 'ASP.NET Core MVC', desc: 'Builds secure, scalable web applications with clean architecture and maintainable C# code.', color: '#a78bfa' },
  { icon: Rocket, title: 'MERN Development', desc: 'Ships React-based SPAs with Express APIs and MongoDB-backed data models.', color: '#06b6d4' },
  { icon: Award, title: 'Academic Projects', desc: 'Turns semester projects into practical products with real user workflows.', color: '#f472b6' },
  { icon: Briefcase, title: 'Internship Delivery', desc: 'Hands-on collaboration experience with UI implementation and backend coordination.', color: '#4ade80' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            The person behind <span className="gradient-text">the code</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="bento-grid">

          {/* Bio card - large */}
          <motion.div
            className="bento-card bento-bio glass"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bento-bio-top">
              <div className="avatar-ring" style={{ width: 72, height: 72 }}>
                <div className="avatar-inner">
                  <span className="avatar-initials gradient-text" style={{ fontSize: '1.3rem' }}>AK</span>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.2rem' }}>Ayaz Khan</h3>
                <p style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{profile.title}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.7rem', color: '#4ade80' }}>Open to opportunities</span>
                </div>
              </div>
            </div>
            <p className="about-text" style={{ marginTop: '1.5rem' }}>
              {profile.summary}
            </p>
            <p className="about-text">
              My current focus is building production-ready applications, improving system design skills, and growing from internship and academic project work into a strong software engineering career.
            </p>
            <a href={profile.resumeUrl} className="grad-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', marginTop: '1.5rem', fontSize: '0.82rem', padding: '0.7rem 1.5rem' }} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </motion.div>

          {/* Stats - 2x2 */}
          <div className="bento-stats">
            {stats.map(({ value, label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                className="bento-stat glass"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                style={{ '--stat-color': color }}
              >
                <Icon size={18} style={{ color, marginBottom: '0.5rem' }} />
                <div className="stat-value gradient-text">{value}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </div>

          {/* Quote card */}
          <motion.div
            className="bento-card bento-quote glass"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.4, fontFamily: 'Georgia' }}>"</span>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)', marginTop: '-0.5rem' }}>
              {awards[0].title} at {awards[0].org}. This achievement reflects my consistency in learning, problem-solving, and performing under pressure.
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--accent2)', marginTop: '1rem', fontWeight: 600 }}>{awards[0].date}</p>
          </motion.div>

        </div>

        {/* Services */}
        <div className="services-grid" style={{ marginTop: '7rem' }}>
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{ '--svc-color': color }}
            >
              <div className="service-icon" style={{ background: `${color}18`, color }}>
                <Icon size={20} />
              </div>
              <h4 className="service-title">{title}</h4>
              <p className="service-desc">{desc}</p>
              <div className="service-line" style={{ background: color }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
