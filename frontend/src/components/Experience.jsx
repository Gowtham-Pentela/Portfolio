import styles from './Experience.module.css'

const jobs = [
  {
    period:  'Nov 2025 — Present',
    company: 'ITVertex · Remote, USA',
    title:   'AI Engineer',
    bullets: [
      'Engineered a <strong>100 GB/day NLP pipeline</strong> that ingests, cleans, and segments unstructured web data, cutting processing time by <strong>96%</strong> (from 15 minutes to 30 seconds per batch).',
      'Deployed a <strong>transformer-based classification system</strong> achieving 85% intent accuracy, reducing downstream routing errors across 3 production workflows.',
      'Designed a <strong>4-stage LLM pipeline architecture</strong> (ingestion, retrieval, routing, output) replacing fragile single-pass LLM calls with deterministic, validated processing stages.',
      'Built an <strong>intent-aware RAG retrieval layer</strong> using AWS Titan vector embeddings and pgvector, enabling semantic clustering and high-precision document retrieval.',
      'Developed a <strong>fallback and validation framework</strong> covering 15+ input failure modes, ensuring graceful degradation on high-variance natural-language inputs.',
      'Collaborated across backend and data engineering teams to integrate AI workflow components into production services and databases.',
    ],
    metrics: ['96% faster processing', '85% classification accuracy', '100 GB/day NLP pipeline'],
  },
  {
    period:  'May 2023 — Jul 2025',
    company: 'Purdue University Northwest · Hammond, IN',
    title:   'AI/ML Engineer & Data Architect',
    bullets: [
      'Deployed <strong>LightGBM and PyTorch predictive maintenance models</strong> on live IoT streams, achieving <strong>98% fault-detection accuracy</strong> and reducing equipment downtime by 30% in production.',
      'Architected a <strong>real-time Azure Data Factory pipeline with Delta Lake</strong> processing 10K+ sensor events per second with sub-second latency.',
      'Built a <strong>FastAPI + Azure Monitor alerting layer</strong> that automated system observability, reducing manual monitoring checks by 40%.',
      'Cut cloud infrastructure costs by <strong>$30K annually</strong> through autoscaling, tiered storage, and Databricks job optimization without degrading throughput.',
      'Developed predictive analytics and anomaly detection models on time-series sensor data, achieving <strong>95%+ accuracy</strong> on held-out real-world datasets.',
      'Presented model performance and data quality findings to faculty and industry partners, translating technical results into actionable operational decisions.',
    ],
    metrics: ['98% fault detection', '10K+ events/sec', '$30K/yr saved', '30% downtime reduction'],
  },
  {
    period:  'Aug 2021 — Dec 2022',
    company: 'Accenture · Hyderabad, India',
    title:   'Data Engineer & Data Architect',
    bullets: [
      'Improved enterprise data integrity by <strong>45%</strong> by re-engineering ETL and audit frameworks for a major US insurance client with schema validation and transformation constraints.',
      'Boosted loss-ratio and claim-severity <strong>forecast accuracy by 25%</strong> by delivering high-quality data pipelines linking policy, premium, and historical claims data.',
      'Reduced DB2 batch process runtime by <strong>40%</strong>, directly accelerating claims reporting cycles and downstream analytics turnaround.',
      'Prototyped <strong>NLP classification tools for claims triage and fraud detection</strong> in partnership with actuarial teams. Earned <strong>Rising Star award</strong>.',
    ],
    metrics: ['45% data integrity gain', '25% forecast accuracy boost', '40% faster DB2 runtime', 'Rising Star award'],
  },
  {
    period:  'Jan 2020 — Jun 2021',
    company: 'Nivahata · Hyderabad, India',
    title:   'Software Engineer',
    bullets: [
      'Built <strong>FastAPI microservices sustaining 10K+ concurrent requests</strong> at 99.9% uptime as the production backbone for real-time data-driven applications.',
      'Automated data workflows and reporting pipelines, eliminating <strong>70% of manual processing effort</strong> and enabling near-real-time analytics.',
      'Created CI/CD automation for AWS EC2 and S3 deployments, <strong>cutting release time by 50%</strong>.',
    ],
    metrics: ['99.9% uptime', '70% less manual effort', '50% faster releases'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.exp}>
      <div className="section-tag">Experience</div>
      <h2 className="section-title">6+ years of shipped<br />production systems.</h2>

      <div className={styles.timeline}>
        {jobs.map((job, i) => (
          <div key={i} className={`${styles.item} reveal-left`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className={styles.meta}>
              <span className={styles.period}>{job.period}</span>
              <span className={styles.company}>{job.company}</span>
            </div>
            <div className={styles.title}>{job.title}</div>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
            <div className={styles.metrics}>
              {job.metrics.map((m, j) => (
                <span key={j} className="metric-pill">{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
