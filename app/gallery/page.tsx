import { GalleryGrid } from '@/components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Featured Work
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning tattoo artwork and get inspired for your next piece
          </p>
        </div>
        
        <GalleryGrid />
      </div>
    </div>
  );
}