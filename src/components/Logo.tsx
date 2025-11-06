export default function Logo({ size=28 }: { size?: number }){
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Invest With Diomin logo" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(152 72% 35%)"/>
          <stop offset="100%" stopColor="hsl(46 65% 54%)"/>
        </linearGradient>
      </defs>
      <rect rx="12" ry="12" x="4" y="4" width="56" height="56" fill="url(#g)" />
      <path d="M18 40c6-10 10-16 14-16s8 6 14 16" fill="none" stroke="hsl(0 0% 100% / .9)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M22 46h20" stroke="hsl(0 0% 100% / .9)" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}
