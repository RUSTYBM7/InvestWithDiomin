import * as React from "react"
import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"

interface Testimonial {
  quote: string
  author: string
  role?: string
  company?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 300)
    },
    [isAnimating]
  )

  const goNext = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, testimonials.length, goTo])

  const goPrev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length)
  }, [current, testimonials.length, goTo])

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(goNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, goNext])

  if (testimonials.length === 0) return null

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              aria-hidden={index !== current}
            >
              <GlassCard
                variant="default"
                elevation={2}
                className="mx-auto max-w-2xl p-8 md:p-10"
              >
                <Quote className="h-10 w-10 text-primary/30 mb-6" />
                <blockquote className="mb-6">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    {(testimonial.role || testimonial.company) && (
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.role && testimonial.company && " · "}
                        {testimonial.company}
                      </div>
                    )}
                  </div>
                </footer>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {testimonials.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <GlassButton
              variant="ghost"
              size="icon"
              onClick={goPrev}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </GlassButton>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <GlassButton
              variant="ghost"
              size="icon"
              onClick={goNext}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </GlassButton>
          </div>

          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                role="tab"
                aria-selected={index === current}
                aria-label={`Go to testimonial ${index + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-200",
                  index === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

interface TestimonialGridProps {
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialGrid({
  testimonials,
  className = "",
}: TestimonialGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {testimonials.map((testimonial, index) => (
        <GlassCard
          key={index}
          variant="default"
          elevation={1}
          className="h-full p-6"
        >
          <Quote className="h-8 w-8 text-primary/30 mb-4" />
          <blockquote className="mb-4">
            <p className="text-foreground leading-relaxed">
              "{testimonial.quote}"
            </p>
          </blockquote>
          <footer className="mt-auto">
            <div className="text-sm font-medium text-foreground">
              {testimonial.author}
            </div>
            {(testimonial.role || testimonial.company) && (
              <div className="text-xs text-muted-foreground">
                {testimonial.role}
                {testimonial.role && testimonial.company && " · "}
                {testimonial.company}
              </div>
            )}
          </footer>
        </GlassCard>
      ))}
    </div>
  )
}
