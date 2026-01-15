import { AnimatedSection } from "@/components/AnimatedSection";
import { Check, Download, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero py-20">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

        <div className="container relative z-10 px-4 max-w-3xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-highlight/20 border-2 border-highlight mb-8">
              <Check className="w-10 h-10 text-highlight" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              You're In! 🎉
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Welcome to the <span className="text-foreground font-semibold">Vibe Coding Accelerator</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your journey to building apps without traditional coding starts now. Check your email for your login details and let's get vibing!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              Your Next Steps
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Check Your Email
                  </h3>
                  <p className="text-foreground/70">
                    We've sent your login credentials and course access link to your email. Check your inbox (and spam folder, just in case).
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Download className="w-5 h-5 text-secondary" />
                    Download the Quick Start Guide
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Get set up with your tools before diving into the modules. This guide walks you through everything.
                  </p>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Quick Start PDF
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-highlight">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-highlight" />
                    Start Module 1
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Jump straight into "The New Stack" and get your first AI coding environment set up in 15 minutes.
                  </p>
                  <Button className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
                    Access Your Course
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-foreground/70 mb-6">
              Our support team is here for you. If you have any questions or issues accessing your course, don't hesitate to reach out.
            </p>
            <Button variant="outline">
              Contact Support
            </Button>
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

export default ThankYou;