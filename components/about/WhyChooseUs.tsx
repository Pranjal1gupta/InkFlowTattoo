import { Star, Users, Clock, Palette } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: 'Award-Winning Artists',
    description: 'Our team has won multiple awards for artistic excellence and innovation in tattoo design.',
  },
  {
    icon: Users,
    title: 'Personalized Experience',
    description: 'We take time to understand your vision and work closely with you throughout the process.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'We offer flexible appointment times including evenings and weekends to fit your schedule.',
  },
  {
    icon: Palette,
    title: 'Custom Artwork',
    description: 'Every tattoo is custom designed specifically for you - no flash sheets or generic designs.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Ink & Soul?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover what sets us apart from other tattoo studios and why clients choose us for their tattoo journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
              <reason.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}