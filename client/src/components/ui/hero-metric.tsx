import * as React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface HeroMetricProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export function HeroMetric({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  className = "",
  valueClassName = "",
  labelClassName = "",
}: HeroMetricProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const prevEndRef = useRef(end)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const runAnimation = useCallback((targetEnd: number, startFrom: number = 0) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    const startTime = Date.now()
    
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = startFrom + (targetEnd - startFrom) * easeOutQuart

      setCount(current)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        animationRef.current = null
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [duration])

  useEffect(() => {
    if (!isVisible) return

    const endChanged = end !== prevEndRef.current
    prevEndRef.current = end

    if (endChanged) {
      setCount(0)
      runAnimation(end, 0)
    } else if (count === 0) {
      runAnimation(end, 0)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, end, runAnimation])

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`

  return (
    <div
      ref={ref}
      className={cn("text-center", className)}
      role="group"
      aria-label={label}
    >
      <div
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          valueClassName
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {displayValue}
      </div>
      <div
        className={cn(
          "mt-1 text-sm text-muted-foreground md:text-base",
          labelClassName
        )}
      >
        {label}
      </div>
    </div>
  )
}
