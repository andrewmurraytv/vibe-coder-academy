import { cn } from "@/lib/utils";

// Declare global tracer for TypeScript
declare global {
  interface Window {
    Tracer?: new (config: { websiteId: string; async: boolean; debug: boolean }) => {
      trackEvent: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  trackingLabel?: string;
}

const trackCTAClick = (label: string) => {
  // Track with Tracer if available
  if (window.Tracer) {
    try {
      const tracer = new window.Tracer({
        websiteId: "f9b46e5b-d42e-4b19-9ca9-ef8094ad2c69",
        async: true,
        debug: false
      });
      tracer.trackEvent("cta_click", { label });
    } catch (e) {
      console.log("Tracking not available");
    }
  }
};

export const CTAButton = ({ children, className, onClick, href, trackingLabel }: CTAButtonProps) => {
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

  const handleClick = () => {
    const label = trackingLabel || (typeof children === 'string' ? children : 'CTA Button');
    trackCTAClick(label);
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={() => {
          const label = trackingLabel || (typeof children === 'string' ? children : 'CTA Button');
          trackCTAClick(label);
        }}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
