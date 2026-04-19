export function AnimatedGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 animate-blob rounded-full bg-primary/20 opacity-70 mix-blend-multiply blur-3xl filter" />
      <div className="animation-delay-2000 absolute -right-1/4 -top-1/4 h-1/2 w-1/2 animate-blob rounded-full bg-secondary/20 opacity-70 mix-blend-multiply blur-3xl filter" />
      <div className="animation-delay-4000 absolute -bottom-1/4 left-1/4 h-1/2 w-1/2 animate-blob rounded-full bg-primary/10 opacity-70 mix-blend-multiply blur-3xl filter" />
    </div>
  );
}
