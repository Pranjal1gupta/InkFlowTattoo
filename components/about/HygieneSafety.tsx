import { Shield, CircleCheck as CheckCircle, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const safetyFeatures = [
  {
    icon: Shield,
    title: 'Sterilization Standards',
    description: 'Hospital-grade sterilization equipment and procedures for all tools and surfaces.',
  },
  {
    icon: CheckCircle,
    title: 'Single-Use Needles',
    description: 'All needles and tubes are single-use and disposed of safely after each session.',
  },
  {
    icon: Award,
    title: 'Licensed Artists',
    description: 'All our artists are fully licensed and trained in health and safety protocols.',
  },
  {
    icon: Heart,
    title: 'Aftercare Support',
    description: 'Comprehensive aftercare instructions and ongoing support for optimal healing.',
  },
];

export function HygieneSafety() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Hygiene & Safety Standards</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your safety is our top priority. We maintain the highest standards of cleanliness and safety protocols.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {safetyFeatures.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-full w-fit">
                <feature.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}