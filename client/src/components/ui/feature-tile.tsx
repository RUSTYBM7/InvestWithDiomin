import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"

interface FeatureTileProps {
  icon: React.ElementType
  title: string
  description: string
  cta?: string
  href?: string
  external?: boolean
  className?: string
  iconClassName?: string
}

export function FeatureTile({
  icon: Icon,
  title,
  description,
  cta,
  href,
  external = false,
  className = "",
  iconClassName = "",
}: FeatureTileProps) {
  const content = (
    <>
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-200 group-hover:bg-primary group-hover:scale-110",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      {cta && href && (
        <GlassButton variant="outline" size="sm" className="mt-auto">
          {cta}
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </GlassButton>
      )}
    </>
  )

  if (href && !cta) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("block h-full", className)}
        >
          <GlassCard interactive className="h-full p-6 group">
            {content}
          </GlassCard>
        </a>
      )
    }
    return (
      <Link to={href} className={cn("block h-full", className)}>
        <GlassCard interactive className="h-full p-6 group">
          {content}
        </GlassCard>
      </Link>
    )
  }

  if (href && cta) {
    const buttonContent = (
      <>
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-200 group-hover:bg-primary group-hover:scale-110",
            iconClassName
          )}
        >
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <GlassButton variant="outline" size="sm" className="mt-auto" asChild>
          {external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {cta}
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          ) : (
            <Link to={href}>
              {cta}
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </GlassButton>
      </>
    )

    return (
      <GlassCard interactive className={cn("h-full p-6 group flex flex-col", className)}>
        {buttonContent}
      </GlassCard>
    )
  }

  return (
    <GlassCard interactive className={cn("h-full p-6 group", className)}>
      {content}
    </GlassCard>
  )
}

interface FeatureTileGridProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureTileGrid({
  children,
  columns = 3,
  className = "",
}: FeatureTileGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>
      {children}
    </div>
  )
}
