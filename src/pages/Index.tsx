import { AnimatedSection } from "@/components/AnimatedSection";
import { HandDrawnArrow } from "@/components/HandDrawnArrow";
import { Callout } from "@/components/Callout";
import { CTAButton } from "@/components/CTAButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ModuleCard } from "@/components/ModuleCard";
import { PriceBox } from "@/components/PriceBox";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { Check, Zap, Clock, DollarSign, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Sticky CTA Bar */}
      <StickyCtaBar minutes={25} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero py-20 pt-28 md:pt-24">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

        <div className="container relative z-10 px-4 max-w-5xl mx-auto text-center">
          {/* Pre-headline */}
          <AnimatedSection delay={0}>
            <p className="text-sm md:text-base uppercase tracking-widest text-primary font-medium mb-4">
              Attention: Aspiring Entrepreneurs, Side-Hustlers, and "Non-Tech" Founders...
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative inline-block mb-6">
              <Callout className="text-xl md:text-2xl" rotate={-2}>
                The "Developer Tax" is Officially Dead.
              </Callout>
            </div>
          </AnimatedSection>

          {/* Main Headline */}
          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Here's How To Build & Sell{" "}
              <span className="text-gradient">$5,000 Apps</span>{" "}
              In A Single Afternoon...
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Even If You Don't Know Your PHP From Your HTML.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Forget spending 6 months learning Python. The rules have changed. Today, the only programming language you need is <span className="text-primary font-semibold">English</span>. Welcome to the era of <span className="font-bold">"Vibe Coding."</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="relative inline-block">
              <HandDrawnArrow 
                direction="down" 
                label="Start here" 
                className="absolute -left-20 top-0 text-accent hidden lg:block"
              />
              <CTAButton href="https://digitalabc.lemonsqueezy.com/checkout/buy/9c480fdc-7d32-4309-bc2b-a43aa8ee00c8">
                Get Instant Access for Just $57
              </CTAButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="mt-6">
              <CountdownTimer minutes={25} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative -mt-20 mb-20 px-4">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-glow">
            <img src={heroImage} alt="Vibe Coding in action" className="w-full h-auto" />
          </div>
        </AnimatedSection>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
              <span className="font-handwritten text-3xl text-accent">Dear Future Tech Founder,</span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              For the last 20 years, there has been a <span className="font-bold text-foreground">massive "wall"</span> standing between you and your million-dollar idea.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              That wall was built by expensive developers, confusing code, and the terrifying "green text on a black screen."
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-lg text-foreground/80 mb-6">
              If you wanted to build an app, a SaaS platform, or even a custom tool for your business, you had two bad options:
            </p>
          </AnimatedSection>

          <div className="space-y-6 mb-12">
            <AnimatedSection animation="fade-right" delay={400}>
              <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30">
                <h3 className="text-xl font-bold text-destructive mb-2">❌ Pay the "Developer Tax"</h3>
                <p className="text-foreground/70">Fork over $10,000+ to an agency and wait 4 months for a prototype.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={500}>
              <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30">
                <h3 className="text-xl font-bold text-destructive mb-2">❌ Enter "Tutorial Hell"</h3>
                <p className="text-foreground/70">Buy a coding bootcamp, struggle through variables and syntax for weeks, feel stupid, and eventually quit.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={600}>
            <div className="relative">
              <Callout className="block text-center text-3xl md:text-4xl mb-8" rotate={0}>
                But something massive shifted in late 2024.
              </Callout>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              While everyone was distracted by ChatGPT writing funny poems, a quiet revolution happened in the software world. It's called <span className="text-gradient font-bold text-2xl">Vibe Coding</span>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <p className="text-2xl md:text-3xl font-bold text-foreground text-center">
              And it has completely leveled the playing field.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              The "Syntax" Era is Over.
            </h2>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-gradient">
              The "Vibe" Era is Here.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              <span className="font-bold text-foreground">"Vibe Coding"</span> is a new way of building software where you don't write code. <span className="underline decoration-primary decoration-2">You describe functionality.</span>
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30">
                <p className="text-sm uppercase tracking-wider text-destructive mb-2">You DON'T type:</p>
                <code className="text-foreground/60 font-mono text-sm">function()&#123; return x; &#125;</code>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={300}>
              <div className="p-6 rounded-xl bg-highlight/10 border border-highlight/30">
                <p className="text-sm uppercase tracking-wider text-highlight mb-2">You DO type:</p>
                <p className="text-foreground/90 italic">"Make me a button that glows blue when I hover over it, and when clicked, saves the user's email to my database."</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <p className="text-xl md:text-2xl text-foreground text-center font-semibold">
              And the AI writes the code. <span className="text-highlight">Perfect, bug-free, industry-standard code.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Arbitrage Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              The Great Arbitrage:
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-center mb-12">
              Why This is The Opportunity of the Decade
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 mb-12">
              <Callout className="absolute -top-8 left-8 text-xl" rotate={-5}>
                The dirty little secret...
              </Callout>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed pt-4">
                <span className="font-bold text-foreground">The world still thinks software is expensive and hard to build.</span>
              </p>
              <ul className="mt-6 space-y-3 text-foreground/70">
                <li>• Your local real estate agent thinks a custom CRM costs <span className="text-foreground font-semibold">$15,000</span></li>
                <li>• Your dentist thinks a patient booking app takes <span className="text-foreground font-semibold">6 months</span> to develop</li>
                <li>• The internet marketer needs a custom dashboard and expects to pay a dev team <span className="text-foreground font-semibold">$5k/month</span></li>
              </ul>
              <p className="mt-6 text-lg text-foreground/80">
                They are operating on <span className="line-through">2020</span> math. <span className="text-gradient font-bold">You are operating on 2026 math.</span>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <DollarSign className="w-10 h-10 text-highlight mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Market Value</p>
                <p className="text-3xl font-bold text-foreground">$5,000</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <Clock className="w-10 h-10 text-secondary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Your Cost</p>
                <p className="text-3xl font-bold text-foreground">$20 + 3hrs</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-primary text-center shadow-glow">
                <Zap className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <p className="text-sm text-primary-foreground/80 mb-1">Your Profit</p>
                <p className="text-3xl font-bold text-primary-foreground">99.6%</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-2xl md:text-3xl font-bold text-center text-foreground">
              You are no longer just an "idea guy."<br />
              <span className="text-gradient">You are a One-Person Unicorn.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introducing Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-lg text-primary mb-2">Introducing</p>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              The Vibe Coding Accelerator
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              The First "No-Code" Coding Course for Pure Capitalists
            </p>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-16">
              This is not a computer science degree. We won't teach you the history of the floppy disk. We won't bore you with "algorithms." This is a <span className="text-foreground font-semibold">production-focused masterclass</span> on how to use the latest AI tools to manifest software into existence for profit.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ModuleCard
              number={1}
              title="The New Stack (Setup & Tools)"
              description="We strip away the confusion. You'll be set up with Cursor and Replit in 15 minutes. No command line nightmares. We show you exactly which buttons to press to turn your computer into a code-generating machine."
              delay={100}
            />
            <ModuleCard
              number={2}
              title='"Speaking" Code'
              description="This is the core skill. We teach you the art of 'Prompt Engineering for Development.' You'll learn how to talk to the AI to get it to build complex features—login systems, payment gateways (Stripe), and databases."
              delay={200}
            />
            <ModuleCard
              number={3}
              title='The "Speed to Dollar" Blueprint'
              description="How to go from a napkin sketch to a live, credit-card-accepting SaaS in 48 hours. We build a live project together from scratch, step-by-step."
              delay={300}
            />
            <ModuleCard
              number={4}
              title="The Agency Arbitrage Model"
              description="How to find clients who are starving for custom software, how to price your 'Vibe Coding' services, and how to deliver a $10k product in a fraction of the time."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              "But... Is this really for me?"
            </h2>
          </AnimatedSection>

          <div className="space-y-8 mt-12">
            <AnimatedSection delay={100}>
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                <p className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-2xl">🥲</span>
                  "I tried to learn Python once and cried."
                </p>
                <p className="text-lg text-foreground/80 pl-9">
                  <span className="text-highlight font-semibold">Perfect.</span> This course is for you. Vibe Coding was invented for people who hate syntax but love logic and creativity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                <p className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-2xl">🤷</span>
                  "I'm not a 'technical' person."
                </p>
                <p className="text-lg text-foreground/80 pl-9">
                  <span className="text-highlight font-semibold">False.</span> If you can order a pizza with specific toppings and explain to a friend how to get to your house, you are technical enough for Vibe Coding. It's about clear communication, not memorizing commands.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50">
                <p className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-2xl">🤖</span>
                  "Won't AI write bad code?"
                </p>
                <p className="text-lg text-foreground/80 pl-9">
                  <span className="text-highlight font-semibold">Not anymore.</span> We teach you the specific "self-healing" workflows. If the AI makes a mistake, you paste the error back in, and it fixes itself. It's like having a Senior Developer sitting next to you, doing the typing while you give the orders.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
              Don't Take My Word For It.
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              See what our "Non-Coder" Students are Building:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="I sold my first app for $3,500 last week. I'm a graphic designer. I know colors, not code. I took this course on a Friday. By Sunday, I had built a custom project management tool for my agency. A client saw it and asked if I could build one for them. This feels illegal."
              author="Sarah J."
              title="Graphic Designer"
              location="Austin TX"
              delay={100}
            />
            <TestimonialCard
              quote="Finally, I don't need a Co-Founder. I've had this idea for a fitness app for 3 years. I interviewed 10 developers, and they all wanted 50% equity or $20k cash. I found the Vibe Coding Accelerator and decided to try it. My app is now live on the App Store. I own 100% of it."
              author="Mike R."
              title="Entrepreneur"
              location="London UK"
              delay={200}
            />
            <TestimonialCard
              quote="The 'Vibe' concept just clicked. I always got stuck on the syntax. Missing a semicolon would ruin my day. With Vibe Coding, I just describe the flow. 'User clicks here, data goes there.' It's how my brain actually works. I built a full real-estate listing site in my first week."
              author="David L."
              title="Real Estate Agent"
              location="Toronto CA"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              The "Knowledge Gap" Window is <span className="text-gradient">Closing</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Right now, we are in a <span className="font-bold text-foreground">"Gold Rush"</span> phase. The tools are new. The general public doesn't know how powerful they are yet.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="inline-block p-6 md:p-8 rounded-2xl bg-card border border-primary/30 mb-8">
              <p className="text-lg text-foreground/80">
                In 2 years, everyone will be doing this.<br />
                <span className="text-2xl font-bold text-foreground">But right now? You can be the expert.</span>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground mb-12">
              <span>A traditional coding bootcamp costs <span className="text-destructive font-bold">$12,000</span></span>
              <span className="hidden md:inline">•</span>
              <span>Hiring a developer for ONE project costs <span className="text-destructive font-bold">$5,000</span></span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
              Get Lifetime Access Today
            </h2>
          </AnimatedSection>

          <PriceBox />
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-highlight/20 mb-6">
              <Shield className="w-10 h-10 text-highlight" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Your 100% "Bug-Free" Guarantee
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am so confident that you will be building live apps within 30 days that I'm taking all the risk.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Join the course. Build your first app. If you don't feel like you've gained a superpower—if you can't confidently "Vibe Code" a working application—simply email us within <span className="font-bold text-foreground">60 days</span>. We will refund every penny. No questions asked. <span className="text-highlight font-semibold">You keep the knowledge.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              It's Time to Stop Dreaming<br />
              <span className="text-gradient">and Start Shipping.</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              You have the idea. Now you have the hands.<br />
              The barrier to entry has been smashed. The only thing left is for you to step through the door.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative inline-block">
              <HandDrawnArrow 
                direction="down" 
                label="Your future starts here" 
                className="absolute -top-20 -right-24 text-accent hidden lg:block"
              />
              <CTAButton 
                href="https://digitalabc.lemonsqueezy.com/checkout/buy/9c480fdc-7d32-4309-bc2b-a43aa8ee00c8"
                className="text-lg md:text-xl px-10 py-6"
              >
                YES! I WANT TO BUILD APPS WITHOUT CODING — $57
              </CTAButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-muted-foreground mt-8 font-handwritten text-xl">
              See you inside! 👋
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PS Section */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-lg text-foreground/70">
              <span className="font-bold text-foreground">P.S.</span> Remember, the "Developer Tax" is voluntary now. You can keep paying others to build your dreams, or you can learn to speak the language of the future (which is just English) and build them yourself. The price goes up to <span className="text-destructive font-bold">$497</span> soon. Don't wait.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card/50 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Vibe Coding Accelerator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
