import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  location: string;
  delay?: number;
}

export const TestimonialCard = ({ quote, author, title, location, delay = 0 }: TestimonialCardProps) => {
  return (
    <AnimatedSection animation="scale" delay={delay}>
      <div className={cn(
        "relative p-6 md:p-8 rounded-2xl",
        "bg-card border border-border/50",
        "hover:border-primary/50 transition-all duration-300",
        "group"
      )}>
        {/* Quote mark */}
        <div className="absolute -top-4 left-6 text-6xl text-primary/30 font-serif">"</div>
        
        <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed pt-4">
          {quote}
        </p>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            {author[0]}
          </div>
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{title}, {location}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
