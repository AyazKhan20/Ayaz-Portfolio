import { GitBranch, Link, X as XIcon, Heart } from 'lucide-react'

const socials = [
  { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
  { icon: Link, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: XIcon, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer-enhanced">
      <div className="container">
        <div className="footer-inner">
          <button className="nav-logo gradient-text" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem' }}>
            ayaz.dev
          </button>

          <div className="footer-links">
            {['about', 'skills', 'projects', 'contact'].map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="footer-link">
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-icon glass" aria-label={label}
                style={{ width: 36, height: 36 }}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ayaz Khan. Crafted with <Heart size={12} style={{ display: 'inline', color: '#ec4899', verticalAlign: 'middle' }} /> and passion.</p>
        </div>
      </div>
    </footer>
  )
}
