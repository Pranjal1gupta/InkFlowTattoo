import { Star, Users, Award, Palette, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Alien's Tattoo Certified",
    description: "Led by a Certified Artist from the world-renowned Alien's Tattoo Academy, ensuring elite global standards.",
  },
  {
    icon: Star,
    title: 'Celebrity Trusted',
    description: 'Trusted by Bollywood celebrities, top influencers, and international cricketers for red-carpet precision.',
  },
  {
    icon: Sparkles,
    title: 'Piercing & Nail Art',
    description: 'Premium piercing services and exquisite nail art to complement your unique aesthetic style.',
  },
  {
    icon: Palette,
    title: 'Custom Masterpieces',
    description: 'Every project is a bespoke collaboration, designed to turn your vision into a living work of art.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="mb-10 mt-10 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Ink Flow?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover why we are the preferred choice for tattoos, piercings, and nail art.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
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