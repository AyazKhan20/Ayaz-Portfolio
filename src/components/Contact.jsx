import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { icon: Mail, label: 'Email', value: 'ayaz@example.com' },
              { icon: MapPin, label: 'Location', value: 'Available Worldwide' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="contact-info-item">
                <div className="contact-icon glass"><Icon size={18} /></div>
                <div>
                  <p className="contact-label">{label}</p>
                  <p className="contact-value">{value}</p>
                </div>
              </div>
            ))}
            <div className="contact-note glass">
              <p>Response Time</p>
              <p>I typically respond within 24 hours. For urgent projects, feel free to reach out directly via email.</p>
            </div>
          </motion.div>

          <motion.form
            className="form"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <input className="form-input" type="text" placeholder="Your Name" required />
            <input className="form-input" type="email" placeholder="Your Email" required />
            <textarea className="form-input" placeholder="Your Message" rows={5} required style={{ resize: 'none' }} />
            <button type="submit" className="form-submit">
              {sent ? '✓ Message Sent!' : <><Send size={15} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
