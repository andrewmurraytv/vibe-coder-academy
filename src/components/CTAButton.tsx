import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const CTAButton = ({ children, className, onClick, href }: CTAButtonProps) => {
  const buttonClasses = cn(
    "relative group px-8 py-5 text-lg md:text-xl font-bold rounded-lg",
    "bg-gradient-cta text-accent-foreground",
    "shadow-cta hover:shadow-[0_12px_50px_hsl(45_100%_60%/0.5)]",
    "transform hover:scale-105 active:scale-100",
    "transition-all duration-300 ease-out",
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-t before:from-transparent before:to-white/20",
    "inline-block text-center",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
