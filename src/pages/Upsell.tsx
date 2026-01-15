import { AnimatedSection } from "@/components/AnimatedSection";
import { HandDrawnArrow } from "@/components/HandDrawnArrow";
import { Callout } from "@/components/Callout";
import { CTAButton } from "@/components/CTAButton";
import { Clock, Lightbulb, Rocket, Zap, Check, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const projectExamples = [
  "AI-Powered Resume Builder",
  "Client Booking System",
  "Habit Tracker App",
  "Invoice Generator",
  "Recipe Meal Planner",
  "Podcast Directory",
  "Event RSVP Manager",
  "Freelancer Time Tracker",
  "Product Launch Page",
  "Email Newsletter Dashboard",
  "Customer Feedback Portal",
  "Appointment Scheduler",
];

const Upsell = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero py-20">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

        <div className="container relative z-10 px-4 max-w-5xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-highlight/20 border border-highlight/30 text-highlight mb-6">
              <Gift className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Wait! Special One-Time Offer</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Skip <span className="text-gradient">50 Hours</span> of "What Should I Build?"
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Get 50 Ready-to-Build Project Ideas with <span className="text-foreground font-semibold">Copy-Paste Starter Prompts</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8">
              Stop staring at a blank screen wondering what to vibe code. Each project comes with the <span className="text-primary font-semibold">exact prompt</span> to get you started in under 60 seconds.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="relative inline-block">
              <HandDrawnArrow 
                direction="down" 
                label="One-time only!" 
                className="absolute -right-24 -top-2 text-accent hidden lg:block"
              />
              <div className="text-5xl md:text-7xl font-black text-gradient mb-2">$30</div>
              <p className="text-muted-foreground">Add to your order now</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              The Biggest Time Killer?
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              <span className="text-gradient font-bold">Deciding what to build.</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative p-8 rounded-2xl bg-destructive/10 border border-destructive/30 mb-8">
              <Clock className="w-12 h-12 text-destructive mb-4" />
              <p className="text-lg text-foreground/80 leading-relaxed">
                Most new vibe coders waste <span className="font-bold text-foreground">hours—sometimes days</span>—trying to come up with the "perfect" project idea. They scroll through Reddit, watch YouTube videos, and second-guess every concept.
              </p>
              <p className="text-xl font-bold text-destructive mt-4">
                That's time you could be building and making money.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative p-8 rounded-2xl bg-highlight/10 border border-highlight/30">
              <Callout className="absolute -top-8 left-8 text-lg" rotate={-3}>
                The solution...
              </Callout>
              <Zap className="w-12 h-12 text-highlight mb-4 mt-4" />
              <p className="text-lg text-foreground/80 leading-relaxed">
                With our <span className="font-bold text-foreground">50 Easy Projects Bundle</span>, you'll never waste another minute wondering "what's next." Just pick a project, paste the starter prompt, and <span className="text-highlight font-semibold">start vibing immediately</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              What You Get
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              50 carefully selected projects across multiple niches
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="p-6 rounded-2xl bg-card border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">50 Project Ideas</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  From simple tools to full SaaS applications. Perfect for practice, portfolios, or selling to clients.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {projectExamples.map((project, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-foreground/60">
                      <Check className="w-4 h-4 text-highlight flex-shrink-0" />
                      <span>{project}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">...and 38 more!</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="p-6 rounded-2xl bg-card border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-secondary/20">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Copy-Paste Starter Prompts</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Each project comes with a <span className="font-semibold text-foreground">detailed starter prompt</span> that tells the AI exactly what to build.
                </p>
                <div className="p-4 rounded-xl bg-background/50 border border-border/30 font-mono text-sm text-foreground/70">
                  <p className="text-muted-foreground text-xs mb-2">Example prompt:</p>
                  <p>"Build a habit tracker app where users can add daily habits, mark them complete, and see a 7-day streak visualization. Include a motivational quote on the dashboard..."</p>
                </div>
                <p className="text-highlight font-semibold mt-4">
                  → Paste, hit enter, start building.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Time Math Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-12">
              Do The Math
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <Clock className="w-10 h-10 text-destructive mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Average time finding a project idea</p>
                <p className="text-3xl font-bold text-foreground">1-2 hours</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <p className="text-4xl mb-2">×</p>
                <p className="text-sm text-muted-foreground mb-1">For 50 projects</p>
                <p className="text-3xl font-bold text-destructive">50-100 hours</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-primary shadow-glow">
                <Zap className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <p className="text-sm text-primary-foreground/80 mb-1">Your time with this bundle</p>
                <p className="text-3xl font-bold text-primary-foreground">0 hours</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative inline-block">
              <Callout className="text-2xl md:text-3xl" rotate={-2}>
                That's 50+ hours saved for just $30
              </Callout>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg text-foreground/70 mt-8">
              Less than <span className="text-foreground font-bold">$0.60 per project idea</span>. Less than <span className="text-foreground font-bold">$0.60 per hour saved</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Add This To Your Order Now
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              This offer is <span className="text-foreground font-semibold">only available right now</span> on this page. You won't see it again.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="p-8 rounded-2xl bg-card border border-primary/30 shadow-glow mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                <div>
                  <p className="text-muted-foreground line-through text-lg">$97 value</p>
                  <p className="text-5xl font-black text-gradient">$30</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-border" />
                <div className="text-left">
                  <p className="flex items-center gap-2 text-foreground/80">
                    <Check className="w-5 h-5 text-highlight" /> 50 Ready-to-Build Projects
                  </p>
                  <p className="flex items-center gap-2 text-foreground/80">
                    <Check className="w-5 h-5 text-highlight" /> Starter Prompts for Each
                  </p>
                  <p className="flex items-center gap-2 text-foreground/80">
                    <Check className="w-5 h-5 text-highlight" /> Instant PDF Download
                  </p>
                </div>
              </div>

              <div className="relative">
                <HandDrawnArrow 
                  direction="down" 
                  label="Yes please!" 
                  className="absolute -left-20 top-2 text-accent hidden lg:block"
                />
                <CTAButton className="text-lg md:text-xl px-8 py-6">
                  Yes! Add the 50 Projects Bundle - $30
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Link 
              to="/thank-you" 
              className="text-muted-foreground hover:text-foreground underline transition-colors"
            >
              No thanks, I'll come up with project ideas on my own
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2026 Vibe Coding Accelerator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Upsell;