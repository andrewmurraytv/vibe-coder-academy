import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

interface StickyCtaBarProps {
  minutes: number;
}

export const StickyCtaBar = ({ minutes }: StickyCtaBarProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [isWiggling, setIsWiggling] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Wiggle every 10 seconds
  useEffect(() => {
    const wiggleInterval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 600);
    }, 10000);

    // Initial wiggle after 2 seconds
    const initialWiggle = setTimeout(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 600);
    }, 2000);

    return () => {
      clearInterval(wiggleInterval);
      clearTimeout(initialWiggle);
    };
  }, []);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const isUrgent = timeLeft < 300;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-gradient-cta py-2 md:py-3 px-4",
        "shadow-lg",
        isWiggling && "animate-wiggle"
      )}
    >
      <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent-foreground animate-pulse" />
          <span className="text-sm md:text-base font-bold text-accent-foreground uppercase tracking-wide">
            ⚡ Limited Time One-Time Offer ⚡
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm text-accent-foreground/80">Expires in:</span>
          <div className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-lg font-mono font-black text-lg md:text-xl",
            "bg-background/20 backdrop-blur-sm",
            isUrgent ? "text-destructive animate-pulse" : "text-accent-foreground"
          )}>
            <span>{String(mins).padStart(2, "0")}</span>
            <span className="animate-pulse">:</span>
            <span>{String(secs).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
