import { Heart, Eye, Handshake, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about tattoo artistry and committed to creating meaningful, beautiful work.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'We help bring your unique vision to life with creativity, skill, and attention to detail.',
  },
  {
    icon: Handshake,
    title: 'Respect',
    description: 'We treat every client with respect, ensuring a comfortable and welcoming environment.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay current with the latest techniques and trends while honoring traditional craftsmanship.',
  },
];

export function TeamValues() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The core principles that guide everything we do at Ink & Soul Tattoo Studio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div key={index} className="text-center p-6 rounded-lg bg-muted/30">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <value.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-muted-foreground text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}