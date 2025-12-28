import '../../styles/lamp.css'

export default function HangingLamp({ color = 'yellow', left = '10%', top = '0px' }: { color?: 'red'|'yellow'; left?: string; top?: string }) {
  return (
    <div className={`lamp ${color}`} style={{ left, top }} aria-hidden>
      <div className="wire" />
      <div className="bulb" />
      <div className="bulb-glow" />
    </div>
  )
}
