import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing experience! The artist was incredibly talented and made me feel comfortable throughout the entire process. The studio is clean, professional, and the artwork exceeded my expectations.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    tattoo: 'Floral sleeve',
    artist: 'Maya Chen',
  },
  {
    name: 'Mike Chen',
    rating: 5,
    text: 'Best tattoo studio in the city. Professional, clean, and the artwork is absolutely stunning. Alex did an incredible job on my portrait tattoo - it looks exactly like the photo!',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
    tattoo: 'Portrait tattoo',
    artist: 'Alex Rivera',
  },
  {
    name: 'Emma Davis',
    rating: 5,
    text: 'They brought my vision to life perfectly. The attention to detail and artistry is unmatched. Jordan created the most beautiful minimalist design that I absolutely love.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    tattoo: 'Minimalist design',
    artist: 'Jordan Kim',
  },
  {
    name: 'David Rodriguez',
    rating: 5,
    text: 'Exceptional service from start to finish. The consultation was thorough, the artist was skilled, and the aftercare instructions were detailed. Highly recommend!',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100',
    tattoo: 'Traditional eagle',
    artist: 'Maya Chen',
  },
  {
    name: 'Lisa Park',
    rating: 5,
    text: 'I was nervous about getting my first tattoo, but the team made me feel so comfortable. The studio is immaculate and the artists are true professionals.',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
    tattoo: 'Small geometric design',
    artist: 'Jordan Kim',
  },
  {
    name: 'James Wilson',
    rating: 5,
    text: 'Outstanding work! The cover-up they did on my old tattoo is incredible. You can\'t even tell there was anything there before. True artists!',
    image: 'https://images.pexels.com/photos/1040879/pexels-photo-1040879.jpeg?auto=compress&cs=tinysrgb&w=100',
    tattoo: 'Cover-up piece',
    artist: 'Alex Rivera',
  },
];

export function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
            
            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Tattoo:</span> {testimonial.tattoo}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Artist:</span> {testimonial.artist}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}