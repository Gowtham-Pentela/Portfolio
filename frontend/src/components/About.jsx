import styles from './About.module.css'

const skillGroups = [
  {
    label: 'AI / ML',
    tags:  ['Agentic Workflows','RAG Pipelines','LLM Eval','NLP','Vector Search','Prompt Engineering','Conversational AI'],
  },
  {
    label: 'Languages',
    tags:  ['Python','SQL','Java','Bash'],
  },
  {
    label: 'Cloud & Data',
    tags:  ['AWS Bedrock','Azure Databricks','GCP','PySpark','Delta Lake','pgvector','Synapse'],
  },
  {
    label: 'Backend & DevOps',
    tags:  ['FastAPI','LangChain','Docker','Kubernetes','CI/CD','Microservices','REST APIs'],
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
    <section id="about" className={styles.about}>
      <div className="section-tag">About</div>
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
              <div className={styles.skillLabel}>{g.label}</div>
              <div className={styles.skillTags}>
                {g.tags.map((t, j) => (
                  <span key={j} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
