import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  minutes: number;
  className?: string;
}

export const CountdownTimer = ({ minutes, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  const isUrgent = timeLeft < 300; // Less than 5 minutes

  return (
    <div className={cn("text-center", className)}>
      <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
        This price expires in:
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className={cn(
          "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl",
          "bg-card border-2",
          isUrgent ? "border-destructive animate-pulse" : "border-primary/50"
        )}>
          <span className={cn(
            "text-3xl md:text-4xl font-black",
            isUrgent ? "text-destructive" : "text-foreground"
          )}>
            {String(mins).padStart(2, "0")}
          </span>
        </div>
        <span className="text-3xl font-bold text-muted-foreground">:</span>
        <div className={cn(
          "flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl",
          "bg-card border-2",
          isUrgent ? "border-destructive animate-pulse" : "border-primary/50"
        )}>
          <span className={cn(
            "text-3xl md:text-4xl font-black",
            isUrgent ? "text-destructive" : "text-foreground"
          )}>
            {String(secs).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className={cn(
        "text-xs mt-2",
        isUrgent ? "text-destructive font-semibold" : "text-muted-foreground"
      )}>
        {isUrgent ? "⚠️ Hurry! Time is almost up!" : "Then price returns to $497"}
      </p>
    </div>
  );
};
