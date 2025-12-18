
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, User } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Ananya Sharma",
    rating: 5,
    text: "The artist understood exactly what I wanted and guided me patiently through the design. The detailing and finish are absolutely beautiful. Felt very comfortable throughout the session.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rohit Verma",
    rating: 5,
    text: "Very professional studio with high hygiene standards. The realism tattoo turned out even better than I imagined. Totally worth the time and money.",
    image:
      "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Priya Nair",
    rating: 5,
    text: "They redesigned my old tattoo so beautifully that it feels brand new. The artist explained the aftercare properly and followed up as well. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Arjun Mehta",
    rating: 5,
    text: "Got my Japanese sleeve done here and the experience was amazing. The colour work, composition, and patience of the artist were top class. Truly impressed.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];



export function TestimonialsPreview() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse at 15% 20%, rgba(255,107,53,0.15) 0%, transparent 40%),
                          radial-gradient(ellipse at 85% 80%, rgba(255,71,87,0.12) 0%, transparent 40%),
                          radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
              Client Stories
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the transformation through our clients' words
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative h-full overflow-hidden bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/10 hover:to-destructive/5 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-3 transition-all duration-500 shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-primary via-transparent to-destructive" />

              <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Quote icon */}
                <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-primary/30 to-destructive/30 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/40">
                  <Quote className="h-7 w-7 text-primary/90 group-hover:text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-all duration-300 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary drop-shadow-md"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <div className="text-center flex-1 mb-8">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground/85 group-hover:text-foreground transition-all duration-500 font-medium">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary/80 group-hover:scale-110 transition-all duration-500 shadow-lg"
                  />
                  <div className="text-left">
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/70">
                      Verified Client
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8">
          <div className="inline-block">
            <Button size="lg" className="px-10" variant="default">
              <Link href="/testimonials">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
