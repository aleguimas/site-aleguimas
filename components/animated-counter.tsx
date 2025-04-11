"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return

    hasAnimated.current = true
    let startTime: number
    let animationFrameId: number

    const startValue = 0
    const endValue = end

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(endValue)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, end, duration])

  return (
    <div ref={countRef} className={className}>
      {count}
      {suffix}
    </div>
  )
}
