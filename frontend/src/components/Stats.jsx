import styles from './Stats.module.css'

const stats = [
  { num: '98%',  label: 'Fault detection accuracy'    },
  { num: '96%',  label: 'Processing time reduction'   },
  { num: '$30K', label: 'Annual cloud savings'         },
  { num: '10K+', label: 'Sensor events per second'    },
]

export default function Stats() {
  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <div key={i} className={`${styles.item} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
          <div className={styles.num}>{s.num}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
