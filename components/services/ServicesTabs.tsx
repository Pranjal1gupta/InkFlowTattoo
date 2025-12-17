'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = {
  realism: {
    title: 'Realism',
    description: 'Photorealistic tattoos with incredible detail and depth',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=500',
    details: [
      'Photorealistic portraits and images',
      'Black & grey or full color options',
      'Detailed shading and highlighting',
      'Custom design consultation included',
    ],
    pricing: 'Starting at $200/hour',
    duration: '3-8 hours depending on size',
  },
  traditional: {
    title: 'Traditional',
    description: 'Classic American traditional style with bold lines and vibrant colors',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=500',
    details: [
      'Bold, clean line work',
      'Classic color palette',
      'Timeless designs and motifs',
      'Quick healing process',
    ],
    pricing: 'Starting at $150/hour',
    duration: '1-4 hours depending on size',
  },
  minimalist: {
    title: 'Minimalist',
    description: 'Clean, simple designs with elegant line work',
    image: 'https://images.pexels.com/photos/1040879/pexels-photo-1040879.jpeg?auto=compress&cs=tinysrgb&w=500',
    details: [
      'Fine line work',
      'Simple, elegant designs',
      'Perfect for first-time clients',
      'Subtle and sophisticated',
    ],
    pricing: 'Starting at $100/hour',
    duration: '1-3 hours depending on complexity',
  },
  portrait: {
    title: 'Portrait',
    description: 'Detailed portraits capturing the essence of your loved ones',
    image: 'https://images.pexels.com/photos/1040878/pexels-photo-1040878.jpeg?auto=compress&cs=tinysrgb&w=500',
    details: [
      'Realistic human and pet portraits',
      'Memorial and tribute pieces',
      'High-quality reference photos required',
      'Multiple consultation sessions',
    ],
    pricing: 'Starting at $250/hour',
    duration: '4-10 hours depending on detail',
  },
  geometric: {
    title: 'Geometric',
    description: 'Precise geometric patterns and sacred geometry designs',
    image: 'https://images.pexels.com/photos/1040877/pexels-photo-1040877.jpeg?auto=compress&cs=tinysrgb&w=500',
    details: [
      'Sacred geometry patterns',
      'Mandala designs',
      'Precise line work and symmetry',
      'Custom pattern creation',
    ],
    pricing: 'Starting at $175/hour',
    duration: '2-6 hours depending on complexity',
  },
  coverup: {
    title: 'Cover-ups',
    description: 'Transform old tattoos into beautiful new artwork',
    image: 'https://images.pexels.com/photos/1040876/pexels-photo-1040876.jpeg?auto=compress&cs=tinysrgb&w=500',
    details: [
      'Assessment of existing tattoo',
      'Custom design to cover old work',
      'Color correction and enhancement',
      'Free consultation included',
    ],
    pricing: 'Starting at $200/hour',
    duration: '3-8 hours depending on coverage needed',
  },
};

export function ServicesTabs() {
  return (
    <Tabs defaultValue="realism" className="w-full">
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
        {Object.entries(services).map(([key, service]) => (
          <TabsTrigger key={key} value={key} className="text-xs lg:text-sm">
            {service.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(services).map(([key, service]) => (
        <TabsContent key={key} value={key}>
          <Card>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="aspect-square lg:aspect-auto overflow-hidden rounded-l-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.details.map((detail, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 py-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-semibold">{service.pricing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold">{service.duration}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Book Consultation</Button>
                      <Button variant="outline">View Gallery</Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}