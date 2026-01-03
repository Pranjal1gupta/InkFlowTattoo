import { Shield, CircleCheck as CheckCircle, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Elite Sterilization',
    description: 'Hospital-grade sterilization for Tattoos, Piercing, and Nail Art equipment.',
  },
  {
    icon: CheckCircle,
    title: 'Single-Use Protocol',
    description: '100% single-use needles and tools, disposed of safely after every transformation.',
  },
  {
    icon: Award,
    title: "Alien's Certified",
    description: "Trained at the world-renowned Alien's Tattoo Academy with elite safety standards.",
  },
  {
    icon: Heart,
    title: 'Celebrity Care',
    description: 'The same red-carpet precision and hygiene trusted by Bollywood stars and athletes.',
  },
];

export function HygieneSafety() {
  return (
    <section className="relative py-16 bg-muted/20 dark:bg-background/60">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 20%, rgba(255,107,53,0.16) 0, transparent 55%),
                            radial-gradient(circle at 85% 80%, rgba(255,71,87,0.12) 0, transparent 55%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Health & Safety
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
              Hygiene & Safety Standards
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety is our top priority. We maintain the highest standards of cleanliness and safety protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <Card
              key={index}
              className="relative h-full group border border-border/70 bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/80 hover:bg-gradient-to-br hover:from-primary/5 hover:to-destructive/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/3 to-destructive/2 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-sm" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.15)_0%,transparent_50%)] -z-20" />
              
              <div className="relative z-10">
                <CardHeader className="pb-3 pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-destructive/10 group-hover:from-primary/20 group-hover:to-destructive/20 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-500 ring-1 ring-transparent group-hover:ring-primary/30">
                    <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                  </div>
                  <CardTitle className="text-lg font-semibold bg-gradient-to-r from-foreground bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-destructive transition-all duration-500">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transform -translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000 blur-sm" />
                  
                  <CardDescription className="text-sm text-muted-foreground/95 group-hover:text-foreground/95 relative z-10 leading-relaxed tracking-wide">
                    {feature.description}
                  </CardDescription>
                  
                  <div className="mt-4 h-px w-0 bg-gradient-to-r from-primary/60 to-destructive/60 opacity-0 group-hover:w-16 group-hover:opacity-100 transition-all duration-700 origin-left rounded-full" />
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}