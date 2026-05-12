import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const terminalLines = [
  { type: 'cmd',    text: 'whoami' },
  { type: 'output', text: 'AI Engineer · 6+ yrs · Springfield, IL (open to relocation)' },
  { type: 'cmd',    text: 'cat specializations.txt' },
  { type: 'output-hl', parts: ['RAG Pipelines', ' · ', 'Agentic Workflows', ' · ', 'NLP', ' · ', 'LLM Systems'] },
  { type: 'cmd',    text: 'cat achievements.json' },
  { type: 'output-json', pairs: [['fault_detection','98%'], ['processing_time_reduction','96%']] },
  { type: 'output-json', pairs: [['cloud_savings','$30K/yr'], ['throughput','10K events/sec']] },
  { type: 'cmd-blink', text: 'open --portfolio' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 320)
      return () => clearTimeout(t)
    }
  }, [visibleLines])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgCircle} />

      <div className={styles.heroGrid}>
        <div>
          <div className={styles.tag} style={{ animationDelay: '0.1s' }}>
            Available for AI Engineer roles — USA
          </div>

          <h1 className={styles.name} style={{ animationDelay: '0.25s' }}>
            Gowtham<br /><span>Pentela</span>
          </h1>

          <p className={styles.subtitle} style={{ animationDelay: '0.34s' }}>
            Applied AI Engineer building reliable RAG, agentic workflow, and ML platforms
            that survive production traffic, messy inputs, and real operational pressure.
          </p>

          <div className={styles.role} style={{ animationDelay: '0.4s' }}>
            LLM Systems · Data Platforms · Production ML
          </div>

          <div className={styles.cta} style={{ animationDelay: '0.5s' }}>
            <a href="mailto:pentelagowtham@gmail.com" className="btn-primary">Get in touch</a>
            <a href="#projects" className="btn-ghost">View work</a>
            <a href="https://github.com/Gowtham-Pentela" target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
          </div>
        </div>

        <div className={styles.visualWrap} style={{ animationDelay: '0.55s' }}>
          <div className={styles.floatCard}>
            <div className={styles.cardTop}>
              <span>resume.stats</span>
              <span>live</span>
            </div>
            <div className={styles.statGrid}>
              <Stat num="98%" label="Fault detection" />
              <Stat num="96%" label="Faster processing" />
              <Stat num="$30K" label="Cloud savings" />
              <Stat num="10K+" label="Events / sec" />
            </div>
            <div className={styles.terminal}>
              <div className={styles.termBar}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
              </div>
              <div className={styles.termBody}>
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <TermLine key={i} line={line} isLast={i === visibleLines - 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ num, label }) {
  return (
    <div className={styles.stat}>
      <strong>{num}</strong>
      <span>{label}</span>
    </div>
  )
}

function TermLine({ line, isLast }) {
  if (line.type === 'cmd' || line.type === 'cmd-blink') return (
    <div className={styles.tLine}>
      <span className={styles.tPrompt}>~</span>
      <span className={styles.tCmd}>{line.text}</span>
      {line.type === 'cmd-blink' && isLast && <span className="cursor-blink" />}
    </div>
  )
  if (line.type === 'output') return (
    <div className={styles.tOutput}>{line.text}</div>
  )
  if (line.type === 'output-hl') return (
    <div className={styles.tOutput}>
      {line.parts.map((p, i) =>
        i % 2 === 0
          ? <span key={i} className={styles.tHl}>{p}</span>
          : <span key={i}>{p}</span>
      )}
    </div>
  )
  if (line.type === 'output-json') return (
    <div className={styles.tOutput}>
      {'{ '}
      {line.pairs.map(([k, v], i) => (
        <span key={i}>
          <span className={styles.tAmber}>"{k}"</span>
          {': '}
          <span className={styles.tHl}>"{v}"</span>
          {i < line.pairs.length - 1 ? ', ' : ''}
        </span>
      ))}
      {' }'}
    </div>
  )
  return null
}
