import { AnimatedSection } from "./AnimatedSection";
import { CTAButton } from "./CTAButton";
import { Callout } from "./Callout";
import { HandDrawnArrow } from "./HandDrawnArrow";
import { cn } from "@/lib/utils";
import { Check, Shield } from "lucide-react";

export const PriceBox = () => {
  return (
    <AnimatedSection animation="scale">
      <div className={cn(
        "relative max-w-2xl mx-auto p-8 md:p-12 rounded-3xl",
        "bg-gradient-to-b from-card to-card/80",
        "border-2 border-primary/50",
        "shadow-glow"
      )}>
        {/* Badge */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-primary rounded-full text-primary-foreground font-bold text-sm">
          BEST VALUE
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            The Vibe Coding Accelerator
          </h3>
          <p className="text-muted-foreground">Lifetime Access to Everything</p>
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-2xl text-muted-foreground line-through">$497</span>
            <Callout rotate={3}>Save $440!</Callout>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-6xl md:text-7xl font-black text-gradient">$57</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">One-time payment • Lifetime access</p>
        </div>

        {/* What's included */}
        <div className="space-y-3 mb-8">
          {[
            "Full Course Access (21+ Video Lessons)",
            "The 'Speed to Dollar' Blueprint",
            "Agency Arbitrage Model Training",
            "Debugging Masterclass",
            "Lifetime Updates & New Content"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-foreground">
              <Check className="w-5 h-5 text-highlight shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="relative">
          <HandDrawnArrow 
            direction="down" 
            label="Click here!" 
            className="absolute -top-16 right-0 text-accent hidden md:block"
          />
          <CTAButton 
            href="https://digitalabc.lemonsqueezy.com/checkout/buy/9c480fdc-7d32-4309-bc2b-a43aa8ee00c8"
            className="w-full text-center justify-center"
          >
            YES! I WANT TO BUILD APPS WITHOUT CODING — $57
          </CTAButton>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-highlight" />
          <span>60-Day Money Back Guarantee</span>
        </div>
      </div>
    </AnimatedSection>
  );
};
