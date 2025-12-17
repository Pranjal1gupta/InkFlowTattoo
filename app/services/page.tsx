import { ServicesTabs } from '@/components/services/ServicesTabs';

export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tattoo Styles & Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of tattoo styles and find the perfect match for your vision
          </p>
        </div>
        
        <ServicesTabs />
      </div>
    </div>
  );
}