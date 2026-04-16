import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Cpu, Cloud, Zap, Award, Users, Briefcase, Target } from 'lucide-react'

const stats = [
  { value: '6+', label: 'Months Exp.', icon: Briefcase, color: '#a78bfa' },
  { value: '5+', label: 'Projects', icon: Code2, color: '#06b6d4' },
  { value: '20+', label: 'Events', icon: Users, color: '#f472b6' },
  { value: '100%', label: 'Dedication', icon: Target, color: '#4ade80' },
]

const services = [
  { icon: Code2, title: 'Full-Stack .NET', desc: 'Scalable apps with C#, ASP.NET Core & modern web tech', color: '#a78bfa' },
  { icon: Cpu,   title: 'D365 Development', desc: 'Custom Dynamics 365 solutions & CRM integrations', color: '#06b6d4' },
  { icon: Cloud, title: 'Power Platform', desc: 'Power Automate, Power Apps & Power BI dashboards', color: '#f472b6' },
  { icon: Zap,   title: 'Azure & DevOps', desc: 'Cloud deployments, CI/CD pipelines & infrastructure', color: '#4ade80' },
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
                <p style={{ color: 'var(--accent2)', fontSize: '0.8rem', marginTop: '0.2rem' }}>Full-Stack .NET Developer</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.7rem', color: '#4ade80' }}>Open to opportunities</span>
                </div>
              </div>
            </div>
            <p className="about-text" style={{ marginTop: '1.5rem' }}>
              I'm a passionate developer specializing in Microsoft technologies — building scalable .NET applications, customizing Dynamics 365, and architecting cloud solutions on Azure.
            </p>
            <p className="about-text">
              I thrive at the intersection of business logic and clean code, turning complex requirements into elegant, maintainable solutions that actually work in production.
            </p>
            <a href="/resume.pdf" className="grad-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', marginTop: '1.5rem', fontSize: '0.82rem', padding: '0.7rem 1.5rem' }}>
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
              Code is not just instructions for machines — it's a craft, a form of expression, and a way to solve real human problems.
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--accent2)', marginTop: '1rem', fontWeight: 600 }}>— Ayaz Khan</p>
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
