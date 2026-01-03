import { useTheme } from "next-themes";

export function StudioStory() {
  const { theme } = useTheme();
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-background/50 via-muted/30 dark:via-black/20 to-background/80">
      {/* Subtle ink texture background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 20% 20%, rgba(255,107,53,0.08) 0%, transparent 50%),
                          radial-gradient(ellipse 40% 60% at 80% 80%, rgba(255,71,87,0.06) 0%, transparent 50%),
                          radial-gradient(circle at 50% 10%, rgba(120,119,198,0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-20 mx-auto px-4">
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r from-primary/20 via-destructive/10 to-secondary/20 rounded-3xl backdrop-blur-xl border border-primary/30 shadow-xl max-w-max mx-auto">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-destructive rounded-full animate-pulse" />
            <span className="text-lg font-bold uppercase tracking-widest text-primary drop-shadow-lg">
              Our Legacy
            </span>
          </div> */}

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
            The Ink Flow Story
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Certified expertise from the world-renowned Alien's Tattoo Academy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-foreground via-primary/90 to-destructive/90 bg-clip-text text-transparent tracking-tight">
                  Alien's Tattoo Certified
                </h3>
                <p className="text-lg  leading-relaxed text-muted-foreground/90 group-hover:text-foreground/95 transition-colors">
                  Led by a Certified Tattoo Artist from Alien&apos;s Tattoo, one
                  of the most renowned centers globally. Every needle dip and
                  every line drawn is backed by world-class training and elite
                  artistic standards.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent my-6" />

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-bold text-foreground tracking-wide">
                  Celebrity Trusted Portfolio
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground/90">
                  Having worked with famous Bollywood Celebrities, top
                  influencers, and International Cricketers, we bring the same
                  red-carpet precision and professional care to every soul that
                  enters our studio.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent my-6" />

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-bold text-foreground tracking-wide">
                  Beyond Tattoos: Piercing & Nail Art
                </h4>
                <p className="text-lg leading-relaxed text-muted-foreground/90">
                  We offer premium Piercing services and exquisite Nail Art, 
                  ensuring a complete aesthetic transformation with the same 
                  dedication to hygiene, precision, and artistic excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-1 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-700 hover:shadow-3xl hover:shadow-primary/40">
              {/* Image */}
              <img
                src={theme === "light" ? "/light_logo.png" : "/logo.png"}
                alt="INK FLOW TATTOO interior"
                className="w-full h-[600px] lg:h-[700px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[-150%] group-hover:translate-x-[150%]" />

              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-destructive/20 rounded-2xl backdrop-blur-xl border-2 border-primary/40 animate-pulse opacity-80" />
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-destructive/20 to-secondary/20 rounded-2xl backdrop-blur-xl border-2 border-destructive/40 animate-pulse delay-1000 opacity-70" />

              {/* Floating ink elements */}
              <div className="absolute top-20 left-8 w-4 h-4 bg-gradient-to-r from-primary to-destructive rounded-full animate-float opacity-60" />
              <div className="absolute bottom-24 right-12 w-3 h-3 bg-gradient-to-r from-destructive to-primary rounded-full animate-float-delay1 opacity-50" />
            </div>

            {/* Stats badges */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary/90 to-destructive/90 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-primary/50 font-bold text-lg backdrop-blur-xl border border-primary/50">
              Since 2023
            </div>
          </div>
        </div>

        {/* Timeline highlights */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          <div className="group p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
            <div className="text-3xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
              Elite
            </div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Alien's Certified
            </div>
          </div>

          <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-destructive/10 backdrop-blur-xl border border-primary/30 shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-500">
            <div className="text-3xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
              Famous
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider">
              Celebrity Clients
            </div>
          </div>

          <div className="group p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
            <div className="text-3xl font-black text-destructive mb-2 group-hover:scale-110 transition-transform">
              1K+
            </div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Masterpieces
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
