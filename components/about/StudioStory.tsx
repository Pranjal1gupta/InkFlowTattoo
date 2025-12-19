// export function StudioStory() {
//   return (
//     <section className="mb-16">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//           <div className="space-y-4 text-muted-foreground">
//             <p>
//               Founded in 2015, Ink & Soul began as a dream to create a tattoo studio that 
//               combines artistic excellence with a welcoming, professional environment. Our 
//               journey started with a simple belief: every tattoo should be a masterpiece 
//               that tells a unique story.
//             </p>
//             <p>
//               Over the years, we've grown from a small studio to a renowned destination 
//               for tattoo enthusiasts. Our commitment to quality, safety, and artistic 
//               innovation has earned us the trust of hundreds of clients who have become 
//               part of our extended family.
//             </p>
//             <p>
//               Today, we continue to push the boundaries of tattoo artistry while 
//               maintaining the personal touch and attention to detail that has defined 
//               us from the beginning. Every piece we create is a collaboration between 
//               artist and client, resulting in truly one-of-a-kind artwork.
//             </p>
//           </div>
//         </div>
//         <div className="relative">
//           <img
//             src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt="Studio interior"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


export function StudioStory() {
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-b from-background/50 via-muted/30 dark:via-black/20 to-background/80">
      {/* Subtle ink texture background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse 60% 40% at 20% 20%, rgba(255,107,53,0.08) 0%, transparent 50%),
                          radial-gradient(ellipse 40% 60% at 80% 80%, rgba(255,71,87,0.06) 0%, transparent 50%),
                          radial-gradient(circle at 50% 10%, rgba(120,119,198,0.04) 0%, transparent 50%)`
      }} />
      
      <div className="container relative z-20 mx-auto px-4">
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r from-primary/20 via-destructive/10 to-secondary/20 rounded-3xl backdrop-blur-xl border border-primary/30 shadow-xl max-w-max mx-auto">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-destructive rounded-full animate-pulse" />
            <span className="text-lg font-bold uppercase tracking-widest text-primary drop-shadow-lg">
              Our Legacy
            </span>
          </div> */}
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
            The Ink & Soul Story
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            From a single artist's vision to an award-winning studio legacy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:order-2 space-y-8">
            <div className="group relative p-8 bg-gradient-to-br from-card/80 via-background/50 to-card/60 backdrop-blur-xl rounded-3xl border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 shadow-xl">
              {/* Quote accent */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-primary/30 to-destructive/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-primary/40">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.663 17.069A2 2 0 017 15V9.5a2 2 0 012-2h2.28l.727-2.174A3.374 3.374 0 0114.44 4H18a2 2 0 012 2v9a2 2 0 01-2 2H9.663zM8 15a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h4a1 1 0 011 1v6z"/>
                </svg>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-foreground via-primary/90 to-destructive/90 bg-clip-text text-transparent tracking-tight">
                    Founded 2023
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-muted-foreground/90 group-hover:text-foreground/95 transition-colors">
                    Born from one artist's dream to create a space where tattooing meets fine art. 
                    Every needle dip, every line drawn - a commitment to turning skin into canvas.
                  </p>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent my-6" />
                
                <div className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-bold text-foreground tracking-wide">
                    1K+ Masterpieces Later
                  </h4>
                  <p className="text-lg leading-relaxed text-muted-foreground/90">
                    From our first tiny studio to award-winning destination. Thousands of stories etched in skin, 
                    each one a collaboration between visionary artists and brave souls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-1 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-700 hover:shadow-3xl hover:shadow-primary/40">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca3350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=85"
                alt="Ink & Soul Studio interior"
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
            <div className="text-3xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">2015</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Doors Open</div>
          </div>
          
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-destructive/10 backdrop-blur-xl border border-primary/30 shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-500">
            <div className="text-3xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">2020</div>
            <div className="text-sm font-semibold uppercase tracking-wider">Awards Won</div>
          </div>
          
          <div className="group p-6 rounded-2xl bg-card/70 backdrop-blur-xl border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
            <div className="text-3xl font-black text-destructive mb-2 group-hover:scale-110 transition-transform">1K+</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Stories Inked</div>
          </div>
        </div>
      </div>
    </section>
  );
}
