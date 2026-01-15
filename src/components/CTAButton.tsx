import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ children, className, onClick }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group px-8 py-5 text-lg md:text-xl font-bold rounded-lg",
        "bg-gradient-cta text-accent-foreground",
        "shadow-cta hover:shadow-[0_12px_50px_hsl(45_100%_60%/0.5)]",
        "transform hover:scale-105 active:scale-100",
        "transition-all duration-300 ease-out",
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-t before:from-transparent before:to-white/20",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
