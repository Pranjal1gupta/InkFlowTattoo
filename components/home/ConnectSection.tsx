import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

export function ConnectSection() {
  return (
    <section className="relative py-20 bg-muted/20 dark:bg-background/60 overflow-hidden">
      {/* Ink-inspired background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 85% 20%, rgba(255,107,53,0.16) 0, transparent 55%),
                            radial-gradient(circle at 15% 80%, rgba(255,71,87,0.12) 0, transparent 55%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
              CONNECT WITH US
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            Ready to start your journey with Ink Flow Tattoo? Whether you have a clear vision or just a spark of an idea, we're here to help you bring it to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className=" px-8 h-14 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105">
              <a href="tel:+917703827950">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className=" px-8 h-14 text-base font-bold border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-105">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
