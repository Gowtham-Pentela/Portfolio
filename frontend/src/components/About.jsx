import styles from './About.module.css'

const skillGroups = [
  {
    label: 'AI / ML',
    level: 96,
    tags:  [
      { name: 'Agentic Workflows', score: 94 },
      { name: 'RAG Pipelines', score: 95 },
      { name: 'LLM Eval', score: 86 },
      { name: 'NLP', score: 90 },
      { name: 'Vector Search', score: 91 },
      { name: 'Prompt Engineering', score: 89 },
      { name: 'Conversational AI', score: 86 },
    ],
  },
  {
    label: 'Languages',
    level: 90,
    tags:  [
      { name: 'Python', score: 94 },
      { name: 'SQL', score: 90 },
      { name: 'Java', score: 78 },
      { name: 'Bash', score: 76 },
    ],
  },
  {
    label: 'Cloud & Data',
    level: 92,
    tags:  [
      { name: 'AWS Bedrock', score: 88 },
      { name: 'Azure Databricks', score: 92 },
      { name: 'GCP', score: 74 },
      { name: 'PySpark', score: 90 },
      { name: 'Delta Lake', score: 88 },
      { name: 'pgvector', score: 86 },
      { name: 'Synapse', score: 82 },
    ],
  },
  {
    label: 'Backend & DevOps',
    level: 88,
    tags:  [
      { name: 'FastAPI', score: 91 },
      { name: 'LangChain', score: 89 },
      { name: 'Docker', score: 84 },
      { name: 'Kubernetes', score: 77 },
      { name: 'CI/CD', score: 82 },
      { name: 'Microservices', score: 86 },
      { name: 'REST APIs', score: 90 },
    ],
  },
]

const certs = [
  'AWS Certified Solutions Architect – Associate',
  'Azure AI Engineer Associate',
  'M.S. Computer Science · Purdue University Northwest',
  'B.Tech Computer Science · BIHER',
]

export default function About() {
  return (
    <section id="skills" className={styles.about}>
      <div className="section-tag">Skills</div>
      <h2 className="section-title">I build AI systems<br />that hold up in production.</h2>

      <div className={styles.grid}>
        <div className="reveal-left">
          <p className={styles.body}>
            I am an Applied AI Engineer with <strong>6+ years</strong> of experience turning ambiguous data
            challenges into <strong>reliable, production-grade ML and LLM systems</strong>. I have shipped
            across the full stack: from raw sensor pipelines processing 10K+ events per second,
            to agentic RAG architectures serving enterprise business logic at scale.
          </p>
          <p className={styles.body}>
            My design philosophy: systems should <strong>fail gracefully, not silently</strong>. That means
            fallback logic, validation layers, structured outputs, and evaluation frameworks
            built in from day one — not bolted on after the first incident.
          </p>
          <p className={styles.body}>
            I earned my <strong>M.S. in Computer Science from Purdue University Northwest</strong>, and hold
            active certifications as an <strong>AWS Solutions Architect Associate</strong> and{' '}
            <strong>Azure AI Engineer Associate</strong>.
          </p>
          <div className={styles.certList}>
            {certs.map((c, i) => (
              <div key={i} className={styles.certItem}>
                <span className={styles.certArrow}>▸</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.skillsGrid} reveal`}>
          {skillGroups.map((g, i) => (
            <div key={i} className={styles.skillCard}>
              <div className={styles.skillHead}>
                <div className={styles.skillLabel}>{g.label}</div>
                <span>{g.level}%</span>
              </div>
              <div className={styles.skillBar} aria-hidden="true">
                <span className={styles.skillFill} style={{ '--level': `${g.level}%`, transitionDelay: `${i * 0.12}s` }} />
              </div>
              <div className={styles.skillTags}>
                {g.tags.map((t) => (
                  <span key={t.name} className={`skill-tag ${styles.scoredTag}`}>
                    <span>{t.name}</span>
                    <strong>{t.score}%</strong>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
