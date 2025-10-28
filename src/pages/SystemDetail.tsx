import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getSystemBySlug } from "@/data/systems";
import NotFound from "./NotFound";

const SystemDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const system = slug ? getSystemBySlug(slug) : undefined;

  if (!system) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-mono text-lg font-medium text-foreground hover:text-muted-foreground transition-colors">
              Everything Automation
            </Link>
            
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

      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all systems
        </Link>
      </div>

      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              {system.system_name}
            </h1>
            <div className="text-3xl font-medium text-foreground mb-6">
              {system.price}
            </div>
          </div>
          
          <a
            href="https://cal.com/team-ea/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="h-12 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90">
              Request Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {system.description}
          </p>
          
          <div>
            <h2 className="text-2xl font-light text-foreground mb-4">
              What You Can Expect
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {system.what_you_can_expect}
            </p>
          </div>
        </div>
      </section>

      {/* Fit Assessment Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light text-foreground mb-6">
              Who This Is For
            </h2>
            <ul className="space-y-3">
              {system.who_this_is_for.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-foreground mb-6">
              Who This Is Not For
            </h2>
            <ul className="space-y-3">
              {system.who_this_is_not_for.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-muted-foreground mr-3 mt-1">•</span>
                  <span className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-light text-foreground mb-6">
              Inputs Required
            </h2>
            <ul className="space-y-3">
              {system.inputs_required.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-foreground mb-6">
              Outputs Delivered
            </h2>
            <ul className="space-y-3">
              {system.outputs_delivered.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-foreground mb-6">
              Requirements
            </h2>
            <ul className="space-y-3">
              {system.requirements.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span className="text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-light text-foreground mb-4">
              Timeline
            </h2>
            <p className="text-base text-muted-foreground">
              Delivered in {system.timeline_days}
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center space-y-6">
          <p className="text-xl text-foreground">
            Ready to deploy this system?
          </p>
          <a
            href="https://cal.com/team-ea/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="h-12 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90">
              Request Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Everything Automation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SystemDetail;
