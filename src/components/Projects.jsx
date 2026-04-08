import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, GitBranch, Star, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'NexaCommerce',
    desc: 'Full-stack e-commerce platform with real-time inventory, AI recommendations, and seamless checkout. Built with Next.js and Node.js.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    bg: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
    category: 'fullstack',
    featured: true,
    year: '2024',
  },
  {
    title: 'AuraAI',
    desc: 'AI-powered SaaS dashboard for content generation with GPT-4 integration and real-time analytics.',
    tags: ['React', 'Python', 'OpenAI', 'AWS'],
    bg: 'linear-gradient(135deg, #ec4899 0%, #7c3aed 100%)',
    category: 'ai',
    year: '2024',
  },
  {
    title: 'FlowBoard',
    desc: 'Real-time collaborative project management with drag-and-drop, live cursors and team chat.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Docker'],
    bg: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    category: 'fullstack',
    year: '2023',
  },
  {
    title: 'CryptoVault',
    desc: 'Crypto portfolio tracker with live price feeds, smart alerts and beautiful chart visualizations.',
    tags: ['Next.js', 'TypeScript', 'WebSocket', 'Chart.js'],
    bg: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    category: 'frontend',
    year: '2023',
  },
  {
    title: 'DevConnect',
    desc: 'Developer networking platform with GitHub integration, code sharing and mentorship matching.',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
    bg: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    category: 'fullstack',
    year: '2023',
  },
  {
    title: 'CloudDeploy',
    desc: 'One-click deployment platform for full-stack apps with CI/CD pipelines and live monitoring.',
    tags: ['Node.js', 'AWS', 'Terraform', 'Docker'],
    bg: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    category: 'ai',
    year: '2022',
  },
]

const filters = ['All', 'Fullstack', 'Frontend', 'AI']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active.toLowerCase())
  const featured = projects.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured || active !== 'All')

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
            A selection of projects that showcase my skills and passion.
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
            <div className="featured-banner" style={{ background: featured.bg }}>
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
                <a href="#" className="project-link-btn grad-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ExternalLink size={13} /> Live Demo
                </a>
                <a href="#" className="project-link-btn outline-btn" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GitBranch size={13} /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {(active === 'All' ? projects.filter(p => !p.featured) : filtered).map(({ title, desc, tags, bg, year }, i) => (
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
                <div className="project-banner" style={{ background: bg }}>
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
                    <a href="#" className="project-link"><GitBranch size={13} /> Code</a>
                    <a href="#" className="project-link"><ExternalLink size={13} /> Live Demo</a>
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
