import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        © {new Date().getFullYear()} <span className={styles.teal}>Gowtham Pentela</span>
      </div>
      <div className={styles.text}>AI Engineer · AWS & Azure Certified</div>
    </footer>
  )
}
