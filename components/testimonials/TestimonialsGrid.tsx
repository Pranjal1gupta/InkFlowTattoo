import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Vishal Rathor',
    rating: 5,
    text: 'Amazing experience! The artist was incredibly talented and made me feel comfortable throughout the entire process. The studio is clean, professional, and the artwork exceeded my expectations.',
    image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1766999147/Himanshu_Gupta_tkssn0.png',
    tattoo: 'Mandala Sleeve',
    artist: 'Dharvendra Rajput',
  },
  {
    name: 'Gita Yadav',
    rating: 5,
    text: 'Best tattoo studio in the city. Professional, clean, and the artwork is absolutely stunning. Rohit did an incredible job on my portrait tattoo - it looks exactly like the photo!',
    image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448889/m3_izwcpr.jpg',
    tattoo: 'Portrait Tattoo',
    artist: 'Rohit Kumar',
  },
  {
    name: 'Kartik Singh',
    rating: 5,
    text: 'They brought my vision to life perfectly. The attention to detail and artistry is unmatched. The customized design they created is something I will cherish forever.',
    image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767641589/kartiksingh_bxytbk.png  ',
    tattoo: 'Tribal Back Piece',
    artist: 'Dharvendra Rajput',
  },
  {
    name: 'Arushi Panday',
    rating: 5,
    text: 'Exceptional service from start to finish. The consultation was thorough, the artist was skilled, and the aftercare instructions were detailed. Highly recommend!',
    image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1766998388/Tanwi_Singh_nr0njv.png',
    tattoo: 'Fine-line Florals',
    artist: 'Rohit Kumar',
  },
  {
    name: 'Himanshu Singh Parmar',
    rating: 5,
    text: 'I was nervous about getting my first tattoo, but the team made me feel so comfortable. The studio is immaculate and the artists are true professionals.',
    image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767641591/unnamed_l03mkn.png',
    tattoo: 'Geometric Lion',
    artist: 'Dharvendra Rajput',
  },
  {
    name: 'Somya Pathak',
    rating: 5,
    text: "Outstanding work! The cover-up they did on my old tattoo is incredible. You can't even tell there was anything there before. True artists!",
    image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767000337/kiransingh_gmrgbc.png',
    tattoo: 'Abstract Watercolor',
    artist: 'Rohit Kumar',
  },
];

export function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="group relative h-full overflow-hidden bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/10 hover:to-destructive/5 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-3 transition-all duration-500 shadow-xl"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-primary via-transparent to-destructive" />

          <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              {/* Quote icon */}
              <div className="w-12 h-12 mb-6 bg-gradient-to-br from-primary/30 to-destructive/30 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-primary/40">
                <Quote className="h-6 w-6 text-primary/90 group-hover:text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 transition-all duration-300 ${
                      i < testimonial.rating
                        ? "fill-primary text-primary drop-shadow-md"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-lg leading-relaxed text-muted-foreground/90 group-hover:text-foreground transition-all duration-500 font-medium italic mb-8">
                "{testimonial.text}"
              </p>
            </div>

            <div className="space-y-6">
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary/80 group-hover:scale-110 transition-all duration-500 shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">Verified Client</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Tattoo</p>
                  <p className="text-sm font-semibold text-primary">{testimonial.tattoo}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Artist</p>
                  <p className="text-sm font-semibold text-primary">{testimonial.artist}</p>
                </div>
              </div>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
