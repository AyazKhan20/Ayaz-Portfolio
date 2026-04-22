import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Briefcase, GraduationCap } from 'lucide-react'
import { education, experience } from '../data/resumeData'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label">My Path</p>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="exp-edu-grid">
          {/* Experience Column */}
          <div className="timeline-col">
            <h3 className="timeline-heading">
              <Briefcase size={20} className="timeline-icon" />
              Work Experience
            </h3>
            <div className="timeline-items">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="timeline-item glass"
                >
                  <div className="timeline-date">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="timeline-title">{item.role}</h4>
                  <p className="timeline-subtitle">{item.company}</p>
                  <p className="timeline-desc">{item.desc}</p>
                  <div className="timeline-tags">
                    {item.skills.map(s => (
                      <span key={s} className="timeline-tag">{s}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-col">
            <h3 className="timeline-heading">
              <GraduationCap size={20} className="timeline-icon" />
              Education
            </h3>
            <div className="timeline-items">
              {education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="timeline-item glass highlight-border"
                >
                  <div className="timeline-date">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <p className="timeline-subtitle">{item.school}</p>
                  <p className="timeline-desc">{item.college || item.detail}</p>
                  {item.college && <p className="timeline-desc" style={{ marginBottom: 0 }}>{item.detail}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
