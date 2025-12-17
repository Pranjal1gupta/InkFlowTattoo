import { TestimonialsGrid } from '@/components/testimonials/TestimonialsGrid';

export default function Testimonials() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read what our clients have to say about their experience at Ink & Soul
          </p>
        </div>
        
        <TestimonialsGrid />
      </div>
    </div>
  );
}