
import { useEffect, useRef } from 'react'

interface SnowOptions { density?: number; speed?: number; sway?: number; maxSize?: number }

export default function SnowCanvas({ density = 0.1, speed = 1.0, sway = 1.0, maxSize = 3.5 }: SnowOptions) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const flakesRef = useRef<Array<{ x: number; y: number; r: number; vx: number; vy: number; phase: number }>>([])

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight

    const densityPx = (W * H) / 20000 * density
    flakesRef.current = Array.from({ length: Math.floor(densityPx) }).map(() => {
      const r = Math.random() * (maxSize - 0.8) + 0.8
      return { x: Math.random() * W, y: Math.random() * H, r, vx: (Math.random() - 0.5) * sway, vy: speed + Math.random() * 0.6, phase: Math.random() * Math.PI * 2 }
    })

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.save(); ctx.globalAlpha = 0.9; ctx.fillStyle = '#fff'
      for (const f of flakesRef.current) {
        f.phase += 0.01
        f.x += f.vx + Math.sin(f.phase) * 0.25
        f.y += f.vy
        if (f.y > H + 10) { f.y = -10; f.x = Math.random() * W }
        if (f.x < -10) { f.x = W + 10 }
        if (f.x > W + 10) { f.x = -10 }
        ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill()
      }
      ctx.restore()
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', onResize)
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      } window.removeEventListener('resize', onResize)
    }
  }, [density, speed, sway, maxSize])

  return <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}><canvas ref={ref} style={{ width: '100%', height: '100%' }} /></div>
}
