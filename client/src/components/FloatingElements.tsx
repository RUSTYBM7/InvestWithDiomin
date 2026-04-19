import { TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';

export function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-20">
      <div className="absolute left-[10%] top-[20%] animate-float text-primary/30">
        <TrendingUp className="h-8 w-8" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute right-[15%] top-[30%] animate-float text-secondary/30">
        <Shield className="h-10 w-10" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute left-[20%] bottom-[25%] animate-float text-primary/30">
        <Zap className="h-6 w-6" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute right-[25%] bottom-[35%] animate-float text-secondary/30">
        <BarChart3 className="h-12 w-12" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
}
