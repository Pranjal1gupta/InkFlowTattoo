'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889122/470686941_18257379649283113_5054945575176911260_n_eg61ch.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889122/470974549_934707575281483_7229704689389210383_n_gq0h5m.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889122/572734626_17953356378040405_6307863326780196306_n_sv5qdz.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889484/587812875_17956460610040405_2646320563805426057_n_f2pe9i.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889122/474144920_17920343796040405_4696761388915164172_n_zofycv.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767353953/WhatsApp_Image_2025-12-24_at_4.20.24_PM_1_lgy0og.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449948/nt2_s6o08l.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449949/nt3_e8q0cv.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449950/nt4_ihjtox.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449951/nt8_lfwaaz.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449951/.trashed-1768741821-IMG-20251218-WA0015_rkhmwu.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449951/nt_tlxet0.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449952/IMG-20251218-WA0005_oxi4z9.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449955/nt5_pz68fp.jpg',
    alt: 'Neo-Traditional tattoo',
    category: 'Neo-Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889121/589314142_17956459887040405_6920803168377222644_n_glxc0m.jpg',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889814/503945321_1752354485320281_1521602636110283779_n_qskmtu.jpg',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/Japanese_ze0ljz.jpg',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889121/559186231_18291895861283113_2401673590949108080_n_woatjh.webp',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889122/568506296_17952354753040405_8365654209002739960_n_aut3sw.jpg',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889814/503653212_1422997529115439_1092929154008277907_n_ovsecg.jpg',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449491/j1_g5z8se.jpg',
    alt: 'Japanese tattoo',
    category: 'Japanese',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767449418/.trashed-1768741821-IMG-20251218-WA0002_czbnzc.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448290/realism3_s8s2gf.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889121/587029319_17955041421040405_2413674960516867788_n_sthmef.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/Portrait_qvmui7.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/realism_zfkefy.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889121/464283828_18250065469283113_8946261899867387503_n_aiv1xv.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889122/559545658_18291897292283113_1750511619829188285_n_hu31ao.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767447819/realism2_iucumd.jpg',
    alt: 'Realism tattoo',
    category: 'Realism',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889484/591018696_17956367808040405_4605646466708707853_n_jruuky.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/traditional_e4uttb.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448558/t2_kcfoxb.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448560/t5_qouhhb.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448561/t1_jnhhhy.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448563/t3_u6nb5t.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448564/t4_yi47hq.jpg',
    alt: 'Traditional tattoo',
    category: 'Traditional',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765889121/574187747_17953355388040405_7205668849576268010_n_bk0lu7.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/minimalistic_mmvwen.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765890431/587237693_17956189086040405_3698477966883008414_n_inc7s2.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448892/m2_teec1l.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448891/m4_aaqdx0.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448890/m1_mdyxwo.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Rohit Kumar',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448889/m3_izwcpr.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Dharvendra Rajput',
  },
  {
    src: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1767448888/m5_kryxdk.jpg',
    alt: 'Minimalist tattoo',
    category: 'Minimalist',
    artist: 'Rohit Kumar',
  },
];

const categories = ['All', 'Realism', 'Traditional', 'Neo-Traditional', 'Japanese', 'Minimalist'];

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

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
            onClick={() => {
              setSelectedCategory(category);
              setVisibleCount(8);
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8">
        {filteredImages.slice(0, visibleCount).map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg bg-muted border border-border"
            onClick={() => setSelectedImage(index)}
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-xs font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="font-medium text-sm">{image.category}</p>
              <p className="text-xs text-muted-foreground">by {image.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredImages.length && (
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setVisibleCount(prev => prev + 8)}
            className="min-w-[200px] text-lg"
          >
            Load More
          </Button>
        </div>
      )}

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black/90">
          {selectedImage !== null && (
            <div className="relative">
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