// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Star } from 'lucide-react';
// import Link from 'next/link';

// const testimonials = [
//   {
//     name: 'Sarah Johnson',
//     rating: 5,
//     text: 'Amazing experience! The artist was incredibly talented and made me feel comfortable throughout the entire process.',
//     image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
//   },
//   {
//     name: 'Mike Chen',
//     rating: 5,
//     text: 'Best tattoo studio in the city. Professional, clean, and the artwork is absolutely stunning.',
//     image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
//   },
//   {
//     name: 'Emma Davis',
//     rating: 5,
//     text: 'They brought my vision to life perfectly. The attention to detail and artistry is unmatched.',
//     image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
//   },
// ];

// export function TestimonialsPreview() {
//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Read testimonials from our satisfied clients who trusted us with their tattoo journey
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="text-center hover:shadow-lg transition-shadow">
//               <CardContent className="p-6">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <div className="flex justify-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
//                 <p className="font-semibold">{testimonial.name}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button size="lg" variant="outline" asChild>
//             <Link href="/testimonials">Read More Reviews</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, User } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The artist captured my vision perfectly. Clean lines, incredible shading, and made me feel completely at ease.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mike Chen",
    rating: 5,
    text: "Best studio experience ever. Sterile, professional, and the realism tattoo blew me away. 10/10.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Emma Davis",
    rating: 5,
    text: "Transformed my old tattoo into a masterpiece. Attention to detail and aftercare guidance was exceptional.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "James Rodriguez",
    rating: 5,
    text: "Japanese sleeve came out perfect. Artist was a genius with color blending and composition.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
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
