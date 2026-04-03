import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, GitBranch, Star } from 'lucide-react'

const projects = [
  {
    title: 'NexaCommerce',
    desc: 'Full-stack e-commerce platform with real-time inventory, AI recommendations, and seamless checkout experience.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    bg: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    category: 'fullstack',
    featured: true,
  },
  {
    title: 'AuraAI',
    desc: 'AI-powered SaaS dashboard for content generation with GPT-4 integration and analytics.',
    tags: ['React', 'Python', 'OpenAI', 'AWS'],
    bg: 'linear-gradient(135deg, #ec4899, #7c3aed)',
    category: 'ai',
  },
  {
    title: 'FlowBoard',
    desc: 'Real-time collaborative project management tool with drag-and-drop and live cursors.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Docker'],
    bg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    category: 'fullstack',
  },
  {
    title: 'CryptoVault',
    desc: 'Crypto portfolio tracker with live price feeds, alerts, and beautiful chart visualizations.',
    tags: ['Next.js', 'TypeScript', 'WebSocket', 'Chart.js'],
    bg: 'linear-gradient(135deg, #f59e0b, #ec4899)',
    category: 'frontend',
  },
  {
    title: 'DevConnect',
    desc: 'Developer networking platform with GitHub integration, code sharing, and mentorship matching.',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
    bg: 'linear-gradient(135deg, #10b981, #06b6d4)',
    category: 'fullstack',
  },
  {
    title: 'CloudDeploy',
    desc: 'One-click deployment platform for full-stack apps with CI/CD pipelines and monitoring.',
    tags: ['Node.js', 'AWS', 'Terraform', 'Docker'],
    bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    category: 'ai',
  },
]

const filters = ['all', 'fullstack', 'frontend', 'ai']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

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
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="filter-tabs"
        >
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'filter-btn-active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map(({ title, desc, tags, bg, featured }, i) => (
              <motion.div
                key={title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`project-card glass ${featured ? 'project-featured' : ''}`}
              >
                <div className="project-banner" style={{ background: bg }}>
                  <div className="project-banner-dots" />
                  <span className="project-banner-letter">{title[0]}</span>
                  {featured && (
                    <div className="project-featured-badge">
                      <Star size={10} fill="currentColor" /> Featured
                    </div>
                  )}
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
