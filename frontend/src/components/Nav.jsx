import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#about',      label: 'About'    },
  { href: '#experience', label: 'Work'     },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact'  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>GP // AI_ENGINEER</div>

      {/* Desktop links */}
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span className={open ? styles.barOpen1 : styles.bar} />
        <span className={open ? styles.barOpen2 : styles.bar} />
        <span className={open ? styles.barOpen3 : styles.bar} />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.drawer}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.drawerLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
