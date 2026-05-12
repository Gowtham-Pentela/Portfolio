import { useEffect } from 'react'
import Cursor     from './components/Cursor'
import Loader     from './components/Loader'
import ParticleCanvas from './components/ParticleCanvas'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Stats      from './components/Stats'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import EducationLanguages from './components/EducationLanguages'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()

  // Re-run reveal after initial paint so all .reveal elements are observed
  useEffect(() => {
    const t = setTimeout(() => {
      const event = new Event('scroll')
      window.dispatchEvent(event)
    }, 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader />
      <ParticleCanvas />
      <div className="noise" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <EducationLanguages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
