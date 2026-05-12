import styles from './Projects.module.css'

const featured = {
  num:   '01 / 03 · Featured · Live',
  emoji: '🎓',
  title: 'LectureForge AI',
  sub:   'YouTube Lecture to Interactive Study Kit + Faculty Audit',
  liveUrl:   'https://lectureforge-ai.vercel.app/',
  githubUrl: 'https://github.com/Gowtham-Pentela/lectureforge-ai',
  studentDesc: 'Paste a YouTube lecture URL and generate a full interactive study kit: timestamped outline with jump-to-video links, multi-depth summaries (90-sec, 5-min, full), source-grounded flashcards, semantic search across the transcript, a visual concept map, and progressive multilingual translation into 7 languages without reprocessing.',
  facultyDesc: 'Private, instructor-facing audit reviewing pedagogy, accessibility, equity, pacing, cognitive load, and student engagement. Returns a single highest-impact fix, a prioritized improvement list, dimension-by-dimension feedback, and timestamped suggested rewrites. No scores, no rankings — designed for improvement, not surveillance.',
  pipeline: ['YouTube URL', 'Transcript Ingestion', 'Lecture Analysis', 'Study Kit / Faculty Audit', 'Interactive Dashboard'],
  tags: ['Multi-agent Pipeline','RAG','Semantic Search','FastAPI','React','OpenAI API','pgvector','Multilingual NLP','Whisper','Vercel + Render','Agentic Workflows'],
}

const others = [
  {
    num:   '02 / 03',
    emoji: '🛠️',
    title: 'Vulcan Pro',
    sub:   'Multimodal AI Agent for Technical Manuals',
    desc:  'A production-grade multi-step agentic system with routing, hybrid retrieval, and planning layers. Separates retrieval, reasoning, and generation stages to prevent compounding multi-stage failures. Implements structured fallback strategies and deterministic output schemas for reliable behavior on ambiguous inputs.',
    tags:  ['Agentic AI','Hybrid Retrieval','RAG','Multi-step Planning','Python','Fallback Logic'],
    link:  'https://github.com/Gowtham-Pentela/prox-challenge',
    liveUrl: null,
  },
  {
    num:   '03 / 03',
    emoji: '⚡',
    title: 'TitanRAG',
    sub:   'End-to-End AI Workflow & Retrieval System',
    desc:  'Full RAG pipeline from document ingestion through vector search to LLM inference. Orchestration layer coordinates embeddings, retrieval, and response generation. Exposed via production-ready APIs for external integration. Deployed serverless on AWS Lambda and S3 for scalable, cost-efficient operation.',
    tags:  ['RAG','Vector Search','pgvector','AWS Lambda','FastAPI','Serverless','LLM Inference'],
    link:  'https://github.com/Gowtham-Pentela/TitanRAG',
    liveUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="section-tag">Projects</div>
      <h2 className="section-title">Production systems,<br />not toy demos.</h2>

      {/* Featured card */}
      <div className={`${styles.featuredCard} reveal`} style={{ marginBottom: '1.5rem' }}>
        <div className={styles.featuredHeader}>
          <div>
            <div className={styles.cardNum}>{featured.num}</div>
            <div className={styles.titleRow}>
              <span className={styles.emoji}>{featured.emoji}</span>
              <div className={styles.cardTitle} style={{ fontSize: '1.7rem' }}>{featured.title}</div>
            </div>
            <div className={styles.cardSub}>{featured.sub}</div>
          </div>
          <div className={styles.featuredBtns}>
            <a href={featured.liveUrl} target="_blank" rel="noreferrer" className="btn-primary btn-sm">
              Live Demo ↗
            </a>
            <a href={featured.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.featuredCols}>
          <div>
            <div className={styles.modeLabel} style={{ color: 'var(--teal)' }}>Student Mode</div>
            <p className={styles.cardDesc}>{featured.studentDesc}</p>
          </div>
          <div>
            <div className={styles.modeLabel} style={{ color: 'var(--amber)' }}>Faculty Audit Mode</div>
            <p className={styles.cardDesc}>{featured.facultyDesc}</p>
          </div>
        </div>

        <div className={styles.pipeline}>
          {featured.pipeline.map((step, i) => (
            <span key={i}>
              <span className={i === 0 || i === featured.pipeline.length - 1 ? styles.pipelineHl : styles.pipelineStep}>
                {step}
              </span>
              {i < featured.pipeline.length - 1 && (
                <span className={styles.pipelineArrow}> → </span>
              )}
            </span>
          ))}
        </div>

        <div className={styles.tagRow}>
          {featured.tags.map((t, i) => (
            <span key={i} className="project-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Other projects grid */}
      <div className={styles.grid}>
        {others.map((p, i) => (
          <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className={styles.cardNum}>{p.num}</div>
            <div className={styles.titleRow}>
              <span className={styles.emoji}>{p.emoji}</span>
              <div className={styles.cardTitle}>{p.title}</div>
            </div>
            <div className={styles.cardSub}>{p.sub}</div>
            <p className={styles.cardDesc}>{p.desc}</p>
            <div className={styles.tagRow}>
              {p.tags.map((t, j) => <span key={j} className="project-tag">{t}</span>)}
            </div>
            <div className={styles.cardLinks}>
              <a href={p.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
                View on GitHub →
              </a>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className={styles.cardLink}>
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
