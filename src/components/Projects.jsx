import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, GitBranch, Star, ArrowUpRight } from 'lucide-react'
import { projects, profile } from '../data/resumeData'

const projectVisuals = {
  dotnet: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
  mern: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
}

const filters = ['All', 'Dotnet', 'Mern']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active.toLowerCase())
  const featured = projects.find(p => p.featured)
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            Project work from MCA and BCA coursework, focused on practical systems.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map(f => (
            <button key={f} className={`filter-btn ${active === f ? 'filter-btn-active' : ''}`} onClick={() => setActive(f)}>
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured card - only show in All view */}
        {active === 'All' && featured && (
          <motion.div
            className="featured-project glass"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="featured-banner" style={{ background: projectVisuals[featured.category] }}>
              <div className="project-banner-dots" />
              <div className="featured-banner-content">
                <span className="featured-label"><Star size={11} fill="currentColor" /> Featured Project</span>
                <h2 className="featured-title">{featured.title}</h2>
                <div className="project-tags" style={{ justifyContent: 'center' }}>
                  {featured.tags.map(t => <span key={t} className="project-tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>{t}</span>)}
                </div>
              </div>
            </div>
            <div className="featured-body">
              <p className="project-desc" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>{featured.desc}</p>
              <div className="project-links" style={{ marginTop: '1.5rem', gap: '1.5rem' }}>
                <a href={profile.github} target="_blank" rel="noreferrer" className="project-link-btn grad-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GitBranch size={13} /> GitHub Profile
                </a>
                <a href={`mailto:${profile.email}?subject=Project%20Inquiry%20-%20${encodeURIComponent(featured.title)}`} className="project-link-btn outline-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ExternalLink size={13} /> Request Details
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {(active === 'All' ? projects.filter(p => !p.featured) : filtered).map(({ title, desc, tags, category, year }, i) => (
              <motion.div
                key={title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="project-card glass"
                onMouseEnter={() => setHovered(title)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="project-banner" style={{ background: projectVisuals[category] }}>
                  <div className="project-banner-dots" />
                  <span className="project-banner-letter">{title[0]}</span>
                  <span className="project-year">{year}</span>
                  <motion.div
                    className="project-hover-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === title ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={28} color="#fff" />
                  </motion.div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-desc">{desc}</p>
                  <div className="project-tags">
                    {tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={profile.github} target="_blank" rel="noreferrer" className="project-link"><GitBranch size={13} /> GitHub</a>
                    <a href={`mailto:${profile.email}?subject=Project%20Details%20-%20${encodeURIComponent(title)}`} className="project-link"><ExternalLink size={13} /> Ask Details</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
