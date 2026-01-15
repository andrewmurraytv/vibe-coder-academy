import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

export const ModuleCard = ({ number, title, description, delay = 0 }: ModuleCardProps) => {
  return (
    <AnimatedSection animation="fade-up" delay={delay}>
      <div className={cn(
        "relative p-6 md:p-8 rounded-2xl",
        "bg-card/50 border border-border/30",
        "hover:bg-card hover:border-primary/30",
        "transition-all duration-300 group"
      )}>
        {/* Module number */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-glow">
          {number}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 pl-6">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedSection>
  );
};
