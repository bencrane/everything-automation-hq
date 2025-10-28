
import { ArrowRight, Zap, GitBranch, Users, Mail, Database, Workflow, Keyboard, AlertCircle, Network, Clock, ShieldCheck, Calendar, TrendingUp, Wrench, Unlink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const automationSystems = [
  {
    name: "Cold Outreach Follow-up",
    slug: "cold-outreach-follow-up",
    description: "Automated sequences that nurture cold leads through personalized touchpoints based on engagement signals.",
    icon: Mail,
  },
  {
    name: "CRM Enrichment",
    slug: "crm-enrichment",
    description: "Pull data from multiple sources to automatically enrich contact records with company info, social profiles, and behavioral data.",
    icon: Database,
  },
  {
    name: "Webinar-to-Email Sync",
    slug: "webinar-to-email-sync",
    description: "Seamlessly move webinar attendees through email sequences based on attendance, engagement, and registration status.",
    icon: Users,
  },
  {
    name: "Auto-Tagged Lead Pipelines",
    slug: "auto-tagged-lead-pipelines",
    description: "Intelligent lead scoring and tagging based on behavior, source, and qualification criteria across all touchpoints.",
    icon: Zap,
  },
  {
    name: "Content Distribution Flow",
    slug: "content-distribution-flow",
    description: "Automatically distribute content across channels, track performance, and trigger follow-up actions based on engagement.",
    icon: GitBranch,
  },
  {
    name: "Customer Onboarding Automation",
    slug: "customer-onboarding-automation",
    description: "Streamlined onboarding sequences that adapt based on customer type, purchase tier, and completion status.",
    icon: Workflow,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-lg font-medium text-foreground">
              Everything Automation
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="https://cal.com/team-ea/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground leading-tight">
            Automation systems that
            <span className="block italic">actually drive results.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proven automation systems that streamline operations, grow pipeline, and boost revenue—so you can focus on everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="https://cal.com/team-ea/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="h-12 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                Request a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Your team is drowning in manual work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every day, hours vanish into repetitive tasks that could run on autopilot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Keyboard className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-sm font-medium text-foreground mb-2">
                  Manual Data Entry
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Copying information between systems, checking for errors, fixing mistakes.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-sm font-medium text-foreground mb-2">
                  Inconsistent Follow-up
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leads fall through cracks, customers don't get timely responses, nothing is systematic.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Network className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-sm font-medium text-foreground mb-2">
                  Scattered Information
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Data lives in 5 different tools with no single source of truth.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Clock className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-sm font-medium text-foreground mb-2">
                  No Time for Growth
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your team spends time on busywork instead of revenue-generating activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Usual Alternatives Don't Work */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">
            The Usual Alternatives Don't Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses try one of these paths—and regret it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 bg-card hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                Hire Engineers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-time automation engineers cost $150K+ per year. Recruiting takes months. Building systems takes longer.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                Custom Consulting Projects
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scope creep, timeline delays, and bills that balloon from $20K to $80K. You get a system built for yesterday's needs.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <Unlink className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                DIY with No-Code Tools
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zapier and Make work until they don't. Fragile connections break. No one knows how to fix them when the creator leaves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Everything Automation Difference */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">
              Experience The <span className="italic">Everything Automation</span><sup className="text-xs">™</sup> Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systems built to work from day one—not experimental projects that take months to deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6 bg-card hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                  Battle-Tested Systems
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every system has been deployed, refined, and proven across multiple businesses. No experimental builds.
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                  Deploy in Days, Not Months
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clear scope, fixed timeline, working system. No endless discovery calls or scope creep.
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                  Built for Scale
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Systems designed to handle growth from day one. Add complexity later without rebuilding from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Systems Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Ready-to-Deploy Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each system is pre-scoped with clear inputs, outputs, and delivery timelines. 
            No scope creep. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationSystems.map((system, index) => {
            const IconComponent = system.icon;
            return (
              <Link
                key={index}
                to={`/systems/${system.slug}`}
                className="group border border-border rounded-lg p-6 hover:border-muted-foreground/50 hover:shadow-sm transition-all duration-200 cursor-pointer block"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-medium text-foreground mb-2">
                      {system.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">
              How it Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Straightforward process. Clear deliverables. Working systems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                <span className="font-mono text-sm font-medium text-foreground">01</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2 text-center">Book</h3>
              <p className="text-sm text-muted-foreground text-center">
                Schedule a 30-minute scoping call to discuss your specific automation needs.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                <span className="font-mono text-sm font-medium text-foreground">02</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2 text-center">Intake</h3>
              <p className="text-sm text-muted-foreground text-center">
                Complete a detailed intake form covering your tools, data sources, and workflows.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                <span className="font-mono text-sm font-medium text-foreground">03</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2 text-center">Build</h3>
              <p className="text-sm text-muted-foreground text-center">
                Your system is built and tested in n8n with clear documentation and handoff notes.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                <span className="font-mono text-sm font-medium text-foreground">04</span>
              </div>
              <h3 className="font-mono text-sm font-medium text-foreground mb-2 text-center">Delivery</h3>
              <p className="text-sm text-muted-foreground text-center">
                Receive your working automation system with setup instructions and support docs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-light text-foreground leading-tight">
            Ready to leverage automation
            <span className="block font-medium">in your business?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Replace messy, manual, and haphazard processes with tried-and-true automation systems configured specifically for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://cal.com/team-ea/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="h-12 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                Request a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Row 1: Brand left, Contact right */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <div className="font-mono text-lg font-medium text-foreground">
                Everything Automation
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automation systems delivered fast.
              </p>
            </div>

            <div className="md:ml-auto md:text-right">
              <p className="text-sm text-foreground/80 font-normal leading-relaxed md:whitespace-nowrap">
                Ready to automate? Get in touch:{" "}
                <a
                  href="mailto:team@everythingautomation.com"
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors"
                >
                  team@everythingautomation.com
                </a>
              </p>
            </div>
          </div>

          {/* Row 2: Centered copyright */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground font-light">
              © 2025 Everything Automation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
