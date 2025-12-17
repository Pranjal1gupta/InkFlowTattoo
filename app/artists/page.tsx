import { ArtistGrid } from '@/components/artists/ArtistGrid';

export default function Artists() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Artists</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our talented team of professional tattoo artists, each bringing their unique style and expertise
          </p>
        </div>
        
        <ArtistGrid />
      </div>
    </div>
  );
}