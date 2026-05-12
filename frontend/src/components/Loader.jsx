import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loader} aria-hidden="true">
      <div className={styles.mark}>GP</div>
      <div className={styles.bar}>
        <span />
      </div>
    </div>
  )
}
