import { cn } from "@/lib/utils";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

export const Callout = ({ children, className, rotate = -3 }: CalloutProps) => {
  return (
    <div
      className={cn(
        "relative inline-block px-4 py-2 font-handwritten text-2xl md:text-3xl text-accent animate-wiggle",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Hand-drawn circle/underline effect */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <ellipse
          cx="50"
          cy="25"
          rx="48"
          ry="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent/30"
          strokeDasharray="5 3"
        />
      </svg>
      {children}
    </div>
  );
};
