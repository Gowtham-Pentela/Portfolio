import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
