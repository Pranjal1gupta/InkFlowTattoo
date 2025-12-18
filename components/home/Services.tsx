
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Heart, Crown, Sparkles, Droplet, Syringe, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const services = [
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Bespoke tattoo artwork crafted by award-winning artists, from first sketch to final stencil.',
  },
  {
    icon: Syringe,
    title: 'Precision Tattooing',
    description: 'Modern machines and single-use needles for clean lines and smooth shading.',
  },
  {
    icon: Droplet,
    title: 'Premium Inks',
    description: 'Vegan, hypoallergenic inks in rich colors for long-lasting results.',
  },
  {
    icon: Shield,
    title: 'Sterile Environment',
    description: 'Studio-grade hygiene with strict sterilization and safety protocols.',
  },
  {
    icon: Sparkles,
    title: 'Nails Art',
    description: 'Creative and stunning nail art designs to complement your personal style.',
  },
  {
    icon: Zap,
    title: 'Piercing',
    description: 'Professional piercing services with sterile equipment and expert placement.',
  },
  {
    icon: Heart,
    title: 'Cover-ups & Touch-ups',
    description: 'Revive faded work or transform old tattoos with expert cover-ups.',
  },
  {
    icon: Crown,
    title: 'VIP Aftercare',
    description: 'Clear aftercare guidance and curated products for perfect healing.',
  },

];

export function Services() {
  return (
    <section className="relative py-10 bg-muted/20 dark:bg-background/60">
      {/* Simple ink-inspired background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 20%, rgba(255,107,53,0.16) 0, transparent 55%),
                            radial-gradient(circle at 85% 80%, rgba(255,71,87,0.12) 0, transparent 55%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Studio Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
              Our Craft
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughtful, safe, and art-driven tattoo services for every stage of your journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative h-full group border border-border/70 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/80 hover:bg-gradient-to-br hover:from-primary/5 hover:to-destructive/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Ink highlight background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/3 to-destructive/2 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-sm" />
              
              {/* Subtle ink drip overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.15)_0%,transparent_50%)] -z-20" />
              
              <div className="relative z-10">
                <CardHeader className="pb-3 pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-destructive/10 group-hover:from-primary/20 group-hover:to-destructive/20 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-500 ring-1 ring-transparent group-hover:ring-primary/30">
                    <service.icon className="h-7 w-7 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                  </div>
                  <CardTitle className="text-lg font-semibold bg-gradient-to-r from-foreground bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-destructive transition-all duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 relative">
                  {/* Text highlight shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transform -translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000 blur-sm" />
                  
                  <CardDescription className="text-sm text-muted-foreground/95 group-hover:text-foreground/95 relative z-10 leading-relaxed tracking-wide">
                    {service.description}
                  </CardDescription>
                  
                  {/* Animated underline */}
                  <div className="mt-4 h-px w-0 bg-gradient-to-r from-primary/60 to-destructive/60 opacity-0 group-hover:w-16 group-hover:opacity-100 transition-all duration-700 origin-left rounded-full" />
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Have an idea but not sure where to start?
          </p>
          <Button
            size="lg"
            className="px-10"
            variant="default"
          >
            Book a free consult
          </Button>
        </div>
      </div>
    </section>
  );
}

