import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'NexaCommerce',
    desc: 'Full-stack e-commerce platform with real-time inventory, AI recommendations, and seamless checkout.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    bg: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
  },
  {
    title: 'AuraAI',
    desc: 'AI-powered SaaS dashboard for content generation with GPT-4 integration and analytics.',
    tags: ['React', 'Python', 'OpenAI', 'AWS'],
    bg: 'linear-gradient(135deg, #ec4899, #7c3aed)',
  },
  {
    title: 'FlowBoard',
    desc: 'Real-time collaborative project management tool with drag-and-drop and live cursors.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Docker'],
    bg: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  },
  {
    title: 'CryptoVault',
    desc: 'Crypto portfolio tracker with live price feeds, alerts, and beautiful chart visualizations.',
    tags: ['Next.js', 'TypeScript', 'WebSocket', 'Chart.js'],
    bg: 'linear-gradient(135deg, #f59e0b, #ec4899)',
  },
  {
    title: 'DevConnect',
    desc: 'Developer networking platform with GitHub integration, code sharing, and mentorship matching.',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
    bg: 'linear-gradient(135deg, #10b981, #06b6d4)',
  },
  {
    title: 'CloudDeploy',
    desc: 'One-click deployment platform for full-stack apps with CI/CD pipelines and monitoring.',
    tags: ['Node.js', 'AWS', 'Terraform', 'Docker'],
    bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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

        <div className="projects-grid">
          {projects.map(({ title, desc, tags, bg }, i) => (
            <motion.div
              key={title}
              className="project-card glass"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="project-banner" style={{ background: bg }}>
                <div className="project-banner-dots" />
                <span className="project-banner-letter">{title[0]}</span>
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
        </div>
      </div>
    </section>
  )
}
