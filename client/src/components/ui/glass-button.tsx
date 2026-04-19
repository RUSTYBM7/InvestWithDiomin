import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[rgba(217,168,77,0.25)] dark:bg-[rgba(217,168,77,0.2)] backdrop-blur-xl border border-[rgba(217,168,77,0.3)] text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_16px_rgba(217,168,77,0.2)] hover:bg-[rgba(217,168,77,0.35)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_8px_24px_rgba(217,168,77,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_8px_rgba(217,168,77,0.2)] bg-gradient-to-b from-primary/90 to-primary",
        secondary:
          "bg-[rgba(93,140,120,0.2)] dark:bg-[rgba(93,140,120,0.15)] backdrop-blur-xl border border-[rgba(93,140,120,0.3)] text-secondary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_4px_16px_rgba(93,140,120,0.15)] hover:bg-[rgba(93,140,120,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_rgba(93,140,120,0.25)] hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-b from-secondary/90 to-secondary",
        outline:
          "bg-[var(--glass-bg)] backdrop-blur-xl border border-primary/30 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_4px_16px_rgba(217,168,77,0.15)] hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "bg-transparent hover:bg-[var(--glass-bg)] hover:backdrop-blur-lg text-foreground hover:text-primary border border-transparent hover:border-[var(--glass-border)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_4px_16px_rgba(239,68,68,0.25)] hover:bg-destructive/90 hover:shadow-[0_8px_24px_rgba(239,68,68,0.35)] hover:-translate-y-0.5 active:translate-y-0",
        link:
          "text-primary underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading
    const Comp = asChild ? Slot : "button"

    const iconLeft = loading ? <Loader2 className="animate-spin" /> : leftIcon
    const iconRight = !loading ? rightIcon : null

    return (
      <Comp
        className={cn(
          glassButtonVariants({ variant, size, className }),
          fullWidth && "w-full",
        )}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={!asChild ? isDisabled : undefined}
        {...props}
      >
        {iconLeft}
        <Slottable>{children}</Slottable>
        {iconRight}
      </Comp>
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
