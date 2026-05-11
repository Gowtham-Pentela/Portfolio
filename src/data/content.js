export const META = {
  name: 'Gowtham Pentela',
  title: 'Applied AI Engineer',
  tagline: 'Available for AI Engineer roles — USA',
  email: 'pentelagowtham@gmail.com',
  phone: '(219) 264-8814',
  location: 'Springfield, IL (Open to Relocation)',
  linkedin: 'https://linkedin.com/in/gowtham-pentela/',
  github: 'https://github.com/Gowtham-Pentela',
  portfolio: 'https://pentela.xyz/',
}

export const STATS = [
  { num: '98%',  label: 'Fault detection accuracy' },
  { num: '96%',  label: 'Processing time reduction' },
  { num: '$30K', label: 'Annual cloud savings' },
  { num: '10K+', label: 'Sensor events per second' },
]

export const SKILLS = [
  {
    label: 'AI / ML',
    tags: ['Agentic Workflows', 'RAG Pipelines', 'LLM Eval', 'NLP', 'Vector Search', 'Prompt Engineering'],
  },
  {
    label: 'Languages',
    tags: ['Python', 'SQL', 'Java', 'Bash'],
  },
  {
    label: 'Cloud & Data',
    tags: ['AWS Bedrock', 'Azure Databricks', 'GCP', 'PySpark', 'Delta Lake', 'pgvector'],
  },
  {
    label: 'Backend & DevOps',
    tags: ['FastAPI', 'LangChain', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices'],
  },
]

export const CERTS = [
  'AWS Certified Solutions Architect – Associate',
  'Azure AI Engineer Associate',
  'M.S. Computer Science · Purdue University Northwest',
  'B.Tech Computer Science · BIHER',
]

export const EXPERIENCE = [
  {
    period: 'Nov 2025 — Present',
    company: 'ITVertex · Remote, USA',
    title: 'AI Engineer',
    bullets: [
      'Engineered a <strong>100 GB/day NLP pipeline</strong> that ingests, cleans, and segments unstructured web data, cutting processing time by <strong>96%</strong> (from 15 minutes to 30 seconds per batch).',
      'Deployed a <strong>transformer-based classification system</strong> achieving 85% intent accuracy, reducing downstream routing errors across 3 production workflows.',
      'Designed a <strong>4-stage LLM pipeline architecture</strong> (ingestion, retrieval, routing, output) replacing fragile single-pass LLM calls with deterministic, validated processing stages.',
      'Built an <strong>intent-aware RAG retrieval layer</strong> using AWS Titan vector embeddings and pgvector, enabling semantic clustering and high-precision document retrieval.',
      'Developed a <strong>fallback and validation framework</strong> covering 15+ input failure modes, ensuring graceful degradation on high-variance natural-language inputs.',
    ],
    metrics: ['96% faster processing', '85% classification accuracy', '100 GB/day NLP pipeline'],
  },
  {
    period: 'May 2023 — Jul 2025',
    company: 'Purdue University Northwest · Hammond, IN',
    title: 'AI/ML Engineer & Data Architect',
    bullets: [
      'Deployed <strong>LightGBM and PyTorch predictive maintenance models</strong> on live IoT streams, achieving <strong>98% fault-detection accuracy</strong> and reducing equipment downtime by 30% in production.',
      'Architected a <strong>real-time Azure Data Factory pipeline with Delta Lake</strong> processing 10K+ sensor events per second with sub-second latency.',
      'Built a <strong>FastAPI + Azure Monitor alerting layer</strong> that automated system observability, reducing manual monitoring checks by 40%.',
      'Cut cloud infrastructure costs by <strong>$30K annually</strong> through autoscaling, tiered storage, and Databricks job optimisation without degrading throughput.',
    ],
    metrics: ['98% fault detection', '10K+ events/sec', '$30K/yr saved', '30% downtime reduction'],
  },
  {
    period: 'Aug 2021 — Dec 2022',
    company: 'Accenture · Hyderabad, India',
    title: 'Data Engineer & Data Architect',
    bullets: [
      'Improved enterprise data integrity by <strong>45%</strong> by re-engineering ETL and audit frameworks for a major US insurance client with schema validation and transformation constraints.',
      'Boosted loss-ratio and claim-severity <strong>forecast accuracy by 25%</strong> by delivering high-quality data pipelines linking policy, premium, and claims data.',
      'Prototyped <strong>NLP classification tools for claims triage and fraud detection</strong> in partnership with actuarial teams. Earned Rising Star award.',
    ],
    metrics: ['45% data integrity gain', '25% forecast accuracy boost', 'Rising Star award'],
  },
  {
    period: 'Jan 2020 — Jun 2021',
    company: 'Nivahata · Hyderabad, India',
    title: 'Software Engineer',
    bullets: [
      'Built <strong>FastAPI microservices sustaining 10K+ concurrent requests</strong> at 99.9% uptime as the production backbone for real-time data-driven applications.',
      'Automated data workflows and reporting pipelines, eliminating <strong>70% of manual processing effort</strong> and enabling near-real-time analytics.',
      'Created CI/CD automation for AWS EC2 and S3 deployments, <strong>cutting release time by 50%</strong>.',
    ],
    metrics: ['99.9% uptime', '70% less manual effort', '50% faster releases'],
  },
]

export const PROJECTS = [
  {
    num: '01 / 03',
    featured: true,
    title: 'LectureForge AI',
    sub: 'YouTube Lecture to Interactive Study Kit + Faculty Audit',
    liveUrl: 'https://lectureforge-ai.vercel.app/',
    githubUrl: 'https://github.com/Gowtham-Pentela/lectureforge-ai',
    studentDesc: 'Paste a YouTube lecture URL and generate a full interactive study kit: timestamped outline with jump-to-video links, multi-depth summaries (90-sec, 5-min, full), source-grounded flashcards, semantic search across the transcript, a visual concept map, and progressive multilingual translation into 7 languages without reprocessing.',
    facultyDesc: 'Private, instructor-facing audit reviewing pedagogy, accessibility, equity, pacing, cognitive load, and student engagement. Returns a single highest-impact fix, a prioritised improvement list, dimension-by-dimension feedback, and timestamped suggested rewrites. No scores, no rankings — designed for improvement, not surveillance.',
    pipeline: ['YouTube URL', 'Transcript Ingestion', 'Lecture Structure Analysis', 'Study Kit / Faculty Audit', 'Interactive Dashboard'],
    tags: ['Multi-agent Pipeline', 'RAG', 'Semantic Search', 'FastAPI', 'React', 'OpenAI API', 'pgvector', 'Multilingual NLP', 'Whisper', 'Vercel + Render', 'Agentic Workflows'],
  },
  {
    num: '02 / 03',
    featured: false,
    title: 'Vulcan Pro',
    sub: 'Multimodal AI Agent for Technical Manuals',
    githubUrl: 'https://github.com/Gowtham-Pentela/prox-challenge',
    desc: 'A production-grade multi-step agentic system with routing, hybrid retrieval, and planning layers. Separates retrieval, reasoning, and generation stages to prevent compounding multi-stage failures. Implements structured fallback strategies and deterministic output schemas for reliable behaviour on ambiguous inputs.',
    tags: ['Agentic AI', 'Hybrid Retrieval', 'RAG', 'Multi-step Planning', 'Python', 'Fallback Logic'],
  },
  {
    num: '03 / 03',
    featured: false,
    title: 'TitanRAG',
    sub: 'End-to-End AI Workflow & Retrieval System',
    githubUrl: 'https://github.com/Gowtham-Pentela/TitanRAG',
    desc: 'Full RAG pipeline from document ingestion through vector search to LLM inference. Orchestration layer coordinates embeddings, retrieval, and response generation. Exposed via production-ready APIs for external integration. Deployed serverless on AWS Lambda and S3 for scalable, cost-efficient operation.',
    tags: ['RAG', 'Vector Search', 'pgvector', 'AWS Lambda', 'FastAPI', 'Serverless', 'LLM Inference'],
  },
]
