import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send, Clock, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/resumeData'

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Clock,  label: 'Response Time', value: 'Within 24 hours',      href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = formData.subject || `Portfolio inquiry from ${formData.name}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => setSent(false), 4000)
    setSent(true)
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            Have a project in mind? Let's build something great.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Availability card */}
            <div className="availability-card glass">
              <div className="avail-pulse" />
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>Currently Available</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                  Open to entry-level software engineering roles, internship opportunities, and project collaborations.
                </p>
              </div>
            </div>

            {/* Info items */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="contact-info-item">
                <div className="contact-icon glass"><Icon size={17} /></div>
                <div>
                  <p className="contact-label">{label}</p>
                  {href
                    ? <a href={href} className="contact-value" style={{ textDecoration: 'none', color: 'var(--text)' }}>{value}</a>
                    : <p className="contact-value">{value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="contact-socials-row glass">
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                Connect with me
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {[
                  { label: 'GitHub', href: profile.github },
                  { label: 'LinkedIn', href: profile.linkedin },
                  { label: 'Email', href: `mailto:${profile.email}` },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="social-pill glass">
                    {label} <ArrowUpRight size={11} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" name="name" placeholder="Your name" value={formData.name} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" name="email" placeholder="your-email@example.com" value={formData.email} onChange={onChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" type="text" name="subject" placeholder="Project inquiry" value={formData.subject} onChange={onChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" name="message" placeholder="Tell me about your project..." value={formData.message} onChange={onChange} rows={5} required style={{ resize: 'none' }} />
            </div>
            <button type="submit" className="form-submit" disabled={sent}>
              {sent ? <><span>✓</span> Email Draft Opened</> : <><Send size={14} /> Send Message</>}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
