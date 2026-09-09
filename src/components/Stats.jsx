import { useState, useEffect, useRef } from "react"
import { stats } from "../data"

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [start, target, duration])

  return count
}

function StatCard({ value, label, suffix, start }) {
  const count = useCountUp(value, 2000, start)
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-indigo-200 text-sm">{label}</div>
    </div>
  )
}

function Stats() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 px-6 bg-linear-to-r from-indigo-600 to-purple-600">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-200 font-medium uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by thousands of teams
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              start={started}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats