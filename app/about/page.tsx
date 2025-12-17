import { StudioStory } from '@/components/about/StudioStory';
import { HygieneSafety } from '@/components/about/HygieneSafety';
import { WhyChooseUs } from '@/components/about/WhyChooseUs';
import { TeamValues } from '@/components/about/TeamValues';
import { StudioImages } from '@/components/about/StudioImages';

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ink & Soul</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where artistry meets passion, and every tattoo tells a story
          </p>
        </div>
        
        <StudioStory />
        <HygieneSafety />
        <WhyChooseUs />
        <TeamValues />
        <StudioImages />
      </div>
    </div>
  );
}