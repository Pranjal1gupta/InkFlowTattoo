import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { FeaturedStyles } from '@/components/home/FeaturedStyles';
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedStyles />
      <Services />
      <GalleryPreview />
      <TestimonialsPreview />
    </>
  );
}