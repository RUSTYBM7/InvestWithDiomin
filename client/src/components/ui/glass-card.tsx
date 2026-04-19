import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "rounded-xl transition-all duration-200",
  {
    variants: {
      elevation: {
        0: "shadow-none",
        1: "shadow-[var(--elevation-1)]",
        2: "shadow-[var(--elevation-2)]",
        3: "shadow-[var(--elevation-3)]",
      },
      variant: {
        default:
          "bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] [box-shadow:var(--glass-inner-highlight)]",
        subtle:
          "bg-[rgba(255,255,255,0.03)] dark:bg-[rgba(255,255,255,0.02)] backdrop-blur-lg border border-[rgba(255,255,255,0.08)]",
        strong:
          "bg-[rgba(255,255,255,0.15)] dark:bg-[rgba(255,255,255,0.08)] backdrop-blur-2xl border border-[rgba(255,255,255,0.2)] [box-shadow:var(--glass-inner-highlight),var(--glass-shadow-md)]",
        accent:
          "bg-gradient-to-br from-[rgba(45,156,219,0.12)] to-[rgba(39,174,96,0.08)] backdrop-blur-xl border border-[var(--glass-border-accent)]",
        solid:
          "bg-card border border-border",
      },
      interactive: {
        true: "cursor-pointer hover:bg-[var(--glass-bg-hover)] hover:-translate-y-1 hover:shadow-[var(--glass-shadow-lg)] active:-translate-y-0.5",
        false: "",
      },
    },
    defaultVariants: {
      elevation: 1,
      variant: "default",
      interactive: false,
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, elevation, variant, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(glassCardVariants({ elevation, variant, interactive, className }))}
      {...props}
    />
  )
)
GlassCard.displayName = "GlassCard"

const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
GlassCardTitle.displayName = "GlassCardTitle"

const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
GlassCardDescription.displayName = "GlassCardDescription"

const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
GlassCardFooter.displayName = "GlassCardFooter"

const GlassCardMedia = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("overflow-hidden rounded-t-xl", className)}
    {...props}
  />
))
GlassCardMedia.displayName = "GlassCardMedia"

export { 
  GlassCard, 
  GlassCardHeader, 
  GlassCardFooter, 
  GlassCardTitle, 
  GlassCardDescription, 
  GlassCardContent,
  GlassCardMedia,
  glassCardVariants 
}
