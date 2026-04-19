import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { GlassCard } from "./glass-card"
import { GlassButton } from "./glass-button"
import { Badge } from "./badge"

interface ContentItem {
  id: number | string
  title: string
  description?: string
  excerpt?: string
  category?: string
  tags?: string[]
  publishedAt?: string
  readingTime?: number
  slug?: string
  href?: string
  isLive?: boolean
}

interface ContentListProps {
  items: ContentItem[]
  showDate?: boolean
  showReadingTime?: boolean
  showCategory?: boolean
  showLiveBadge?: boolean
  className?: string
}

export function ContentList({
  items,
  showDate = true,
  showReadingTime = false,
  showCategory = true,
  showLiveBadge = true,
  className = "",
}: ContentListProps) {
  if (items.length === 0) {
    return (
      <GlassCard variant="subtle" className="p-8 text-center">
        <p className="text-muted-foreground">No content available yet.</p>
      </GlassCard>
    )
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const href = item.href || (item.slug ? `/insights/${item.slug}` : "#")
        const isFirst = index === 0

        return (
          <Link
            key={item.id}
            to={href}
            className="block group"
            data-testid={`content-item-${item.id}`}
          >
            <GlassCard
              interactive
              className="p-4 md:p-5 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {showCategory && item.category && (
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    )}
                    {showLiveBadge && isFirst && item.isLive !== false && (
                      <Badge className="gap-1 bg-primary/20 text-primary border-primary/30">
                        <Zap className="h-3 w-3" />
                        Live
                      </Badge>
                    )}
                    {item.tags?.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs opacity-70"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-1 font-semibold leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  {(item.description || item.excerpt) && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description || item.excerpt}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    {showDate && item.publishedAt && (
                      <span>
                        {new Date(item.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                    {showReadingTime && item.readingTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {item.readingTime} min read
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowRight className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </Link>
        )
      })}
    </div>
  )
}

interface ContentGridProps {
  items: ContentItem[]
  columns?: 2 | 3 | 4
  showDate?: boolean
  showReadingTime?: boolean
  showCategory?: boolean
  className?: string
}

export function ContentGrid({
  items,
  columns = 3,
  showDate = true,
  showReadingTime = false,
  showCategory = true,
  className = "",
}: ContentGridProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  if (items.length === 0) {
    return (
      <GlassCard variant="subtle" className="p-8 text-center">
        <p className="text-muted-foreground">No content available yet.</p>
      </GlassCard>
    )
  }

  return (
    <div className={cn("grid gap-6", columnClasses[columns], className)}>
      {items.map((item) => {
        const href = item.href || (item.slug ? `/insights/${item.slug}` : "#")

        return (
          <Link
            key={item.id}
            to={href}
            className="block group"
            data-testid={`content-card-${item.id}`}
          >
            <GlassCard interactive className="h-full p-5">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {showCategory && item.category && (
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                )}
              </div>
              <h3 className="mb-2 font-semibold leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              {(item.description || item.excerpt) && (
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {item.description || item.excerpt}
                </p>
              )}
              <div className="mt-auto flex items-center gap-4 text-xs text-muted-foreground">
                {showDate && item.publishedAt && (
                  <span>
                    {new Date(item.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
                {showReadingTime && item.readingTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.readingTime} min
                  </span>
                )}
              </div>
            </GlassCard>
          </Link>
        )
      })}
    </div>
  )
}
