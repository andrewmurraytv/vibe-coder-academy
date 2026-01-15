import { cn } from "@/lib/utils";

interface HandDrawnArrowProps {
  direction?: "down" | "right" | "left" | "up-right";
  className?: string;
  label?: string;
}

export const HandDrawnArrow = ({ direction = "down", className, label }: HandDrawnArrowProps) => {
  const arrows = {
    down: (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className={cn("animate-wiggle", className)}>
        <path
          d="M30 5 C35 20, 25 35, 30 50 C32 55, 28 60, 30 70"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="1000"
          className="animate-draw"
          style={{ strokeDashoffset: 0 }}
        />
        <path
          d="M20 60 L30 75 L40 60"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    right: (
      <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className={cn("animate-wiggle", className)}>
        <path
          d="M5 25 C20 20, 35 30, 50 25 C55 23, 60 27, 70 25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 15 L75 25 L60 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    left: (
      <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className={cn("animate-wiggle", className)}>
        <path
          d="M75 25 C60 30, 45 20, 30 25 C25 27, 20 23, 10 25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 15 L5 25 L20 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    "up-right": (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className={cn("animate-wiggle", className)}>
        <path
          d="M10 70 C20 50, 40 40, 60 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M45 15 L65 15 L65 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {arrows[direction]}
      {label && (
        <span className="font-handwritten text-xl text-accent">{label}</span>
      )}
    </div>
  );
};
