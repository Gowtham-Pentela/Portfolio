import styles from './EducationLanguages.module.css'

const education = [
  {
    school: 'Purdue University Northwest',
    degree: 'M.S. Computer Science',
    meta: 'Hammond, IN',
    badges: ['Graduate Research', 'AI/ML', 'Data Systems'],
  },
  {
    school: 'BIHER',
    degree: 'B.Tech Computer Science',
    meta: 'Chennai, India',
    badges: ['Software Engineering', 'Data Engineering'],
  },
]

const languages = [
  { label: 'English', level: 'Professional' },
  { label: 'Telugu', level: 'Native' },
  { label: 'Hindi', level: 'Professional' },
  { label: 'Tamil', level: 'Conversational' },
]

export default function EducationLanguages() {
  return (
    <section id="education" className={styles.wrap}>
      <div className="section-tag">Education & Languages</div>
      <h2 className="section-title">Academic base,<br />global communication.</h2>

      <div className={styles.grid}>
        <div className={`${styles.panel} reveal`}>
          <div className={styles.panelLabel}>Education</div>
          {education.map((item, i) => (
            <article key={item.school} className={styles.eduCard} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <span>{item.meta}</span>
              </div>
              <div className={styles.badges}>
                {item.badges.map((badge) => <span key={badge}>{badge}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.panel} reveal`} style={{ transitionDelay: '0.12s' }}>
          <div className={styles.panelLabel}>Languages</div>
          <div className={styles.langList}>
            {languages.map((item) => (
              <div key={item.label} className={styles.langCard}>
                <strong>{item.label}</strong>
                <span>{item.level}</span>
              </div>
            ))}
          </div>
          <div className={styles.certBadges}>
            <span>AWS Certified Solutions Architect</span>
            <span>Azure AI Engineer Associate</span>
          </div>
        </div>
      </div>
    </section>
  )
}
