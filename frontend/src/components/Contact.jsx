import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'ok' | 'err'

  const fallbackSubject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'visitor'}`)
  const fallbackBody = encodeURIComponent(
    `Hi Gowtham,\n\n${form.message || 'I would like to connect about an AI Engineer opportunity.'}\n\nName: ${form.name || ''}\nEmail: ${form.email || ''}`
  )
  const fallbackMailto = `mailto:pentelagowtham@gmail.com?subject=${fallbackSubject}&body=${fallbackBody}`

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-tag" style={{ justifyContent: 'center' }}>Contact</div>
      <h2 className={`section-title ${styles.centered}`}>
        Open to AI Engineer roles<br />across the United States.
      </h2>
      <p className={styles.sub}>Remote · Hybrid · On-site · Open to relocation</p>

      <div className={styles.avatarWrap} aria-hidden="true">
        <div className={styles.avatar}>GP</div>
      </div>

      <div className={styles.infoGrid}>
        <a href="mailto:pentelagowtham@gmail.com" className={styles.infoCard}>
          <span>Email</span>
          <strong>pentelagowtham@gmail.com</strong>
        </a>
        <a href="tel:+12192648814" className={styles.infoCard}>
          <span>Phone</span>
          <strong>(219) 264-8814</strong>
        </a>
        <div className={styles.infoCard}>
          <span>Location</span>
          <strong>Springfield, IL</strong>
        </div>
      </div>

      <div className={styles.socialLinks}>
        {[
          { label: 'LinkedIn', url: 'https://linkedin.com/in/gowtham-pentela/' },
          { label: 'GitHub',   url: 'https://github.com/Gowtham-Pentela'       },
          { label: 'Portfolio', url: 'https://pentela.xyz/' },
        ].map(l => (
          <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className={styles.socialLink}>
            {l.label}
          </a>
        ))}
      </div>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              name="name" value={form.name} onChange={handleChange}
              className={styles.input} placeholder="Your name" required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange}
              className={styles.input} placeholder="your@email.com" required
            />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Message</label>
          <textarea
            name="message" value={form.message} onChange={handleChange}
            className={styles.textarea} placeholder="Tell me about the role or project..." rows={5} required
          />
        </div>
        <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'ok' && (
          <p className={styles.msgOk}>Message sent. I will get back to you soon.</p>
        )}
        {status === 'err' && (
          <div className={styles.fallback}>
            <p className={styles.msgErr}>
              The form could not send right now, but your message is still ready to go by email.
            </p>
            <a href={fallbackMailto} className="btn-ghost">
              Open email draft
            </a>
          </div>
        )}
      </form>
    </section>
  )
}
