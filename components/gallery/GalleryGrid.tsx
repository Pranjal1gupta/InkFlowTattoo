'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Alex Rivera',
  },
  {
    src: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Maya Chen',
  },
  {
    src: 'https://images.pexels.com/photos/1040879/pexels-photo-1040879.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Jordan Kim',
  },
  {
    src: 'https://images.pexels.com/photos/1040878/pexels-photo-1040878.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Portrait tattoo',
    category: 'Portrait',
    artist: 'Alex Rivera',
  },
  {
    src: 'https://images.pexels.com/photos/1040877/pexels-photo-1040877.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Geometric tattoo',
    category: 'Geometric',
    artist: 'Jordan Kim',
  },
  {
    src: 'https://images.pexels.com/photos/1040876/pexels-photo-1040876.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Cover-up tattoo',
    category: 'Cover-up',
    artist: 'Maya Chen',
  },
  {
    src: 'https://images.pexels.com/photos/1040875/pexels-photo-1040875.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Fine line tattoo',
    category: 'Minimalist',
    artist: 'Jordan Kim',
  },
  {
    src: 'https://images.pexels.com/photos/1040874/pexels-photo-1040874.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Color realism',
    category: 'Realism',
    artist: 'Alex Rivera',
  },
  {
    src: 'https://images.pexels.com/photos/1040873/pexels-photo-1040873.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Neo-traditional',
    category: 'Traditional',
    artist: 'Maya Chen',
  },
];

const categories = ['All', 'Realism', 'Traditional', 'Minimalist', 'Portrait', 'Geometric', 'Cover-up'];

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg bg-muted"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-sm">{image.category}</p>
              <p className="text-xs text-muted-foreground">by {image.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/90">
          {selectedImage !== null && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-lg font-semibold">{filteredImages[selectedImage].category}</h3>
                <p className="text-sm opacity-80">by {filteredImages[selectedImage].artist}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}