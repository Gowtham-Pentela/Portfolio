import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = (e.clientX - 3) + 'px'
        dotRef.current.style.top  = (e.clientY - 3) + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x - 16) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y - 16) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'scale(3)'
      if (ringRef.current) ringRef.current.style.opacity   = '0.3'
    }
    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'scale(1)'
      if (ringRef.current) ringRef.current.style.opacity   = '1'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
