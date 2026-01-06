'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  // Row 1: Large + Medium + Small
  "https://res.clom/dlifnml9x/image/upload/v1765889122/559545658_18291897292283113_1750511619829188265_n_hu31ao.jpg",
  "https://res..com/dlifnml9x/image/upload/v1765889122/572734626_17953356378040405_6307863326780196306_n_sv5qdz.jpg",
  "https://res..com/dlifnml9x/image/upload/v1765889122/568506296_17952354753040405_8365654209002739960_n_aut3sw.jpg",

  // Row 2: Small + Large + Medium
  "https://res.hello.com/dlifnml9x/image/upload/v1765889122/474144920_17920343796040405_4696761388915164172_n_zofycv.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765889122/470686941_18257379649283113_5054945575176911260_n_eg61ch.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765889122/470974549_934707575281483_7229704689389210383_n_gq0h5m.jpg",

  // Row 3: Medium + Small + Large
  "https://res.hello.com/dlifnml9x/image/upload/v1765886636/Japanese_ze0ljz.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765886636/traditional_e4uttb.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765890431/587237693_17956189086040405_3698477966883008414_n_inc7s2.jpg",

  // Row 4: Small + Medium + Large + Small
  "https://res.hello.com/dlifnml9x/image/upload/v1765886636/Portrait_qvmui7.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765889121/574187747_17953355388040405_7205668849576268010_n_bk0lu7.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765889121/587029319_17955041421040405_2413674960516867788_n_sthmef.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765889484/587812875_17956460610040405_2646320563805426057_n_f2pe9i.jpg",

  // Row 5: ❌ Not included (insufficient images)
  "https://res.hello.com/dlifnml9x/image/upload/v1765889814/503653212_1422997529115439_1092929154008277907_n_ovsecg.jpg",
  "https://res.hello.com/dlifnml9x/image/upload/v1765889814/503945321_1752354485320281_1521602636110283779_n_qskmtu.jpg",
];
export function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="relative py-12 bg-gradient-to-b from-muted/40 via-background/60 to-muted/20 overflow-hidden">
      {/* Ink splatter background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 15% 25%, rgba(255,107,53,0.15) 0%, transparent 50%),
                          radial-gradient(ellipse 40% 60% at 85% 75%, rgba(255,71,87,0.1) 0%, transparent 50%),
                          radial-gradient(circle at 50% 90%, rgba(120,119,198,0.08) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative z-20 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Gallery Preview
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
              Our Gallery
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness the artistry. Every piece tells a story etched in skin.
          </p>
        </div>

        {/* Compact Masonry Grid - Smaller sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto mb-16">
          {/* Column 1 */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 border hover:border-primary/40 hover:scale-105" onClick={() => setSelectedImage(0)}>
              <img
                src={galleryImages[0]}
                alt="Tattoo artwork 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-xs font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(3)}>
              <img
                src={galleryImages[3]}
                alt="Tattoo artwork 4"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[2/3] overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(7)}>
              <img
                src={galleryImages[7]}
                alt="Tattoo artwork 8"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl cursor-pointer hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 border hover:border-primary/40 hover:scale-105" onClick={() => setSelectedImage(1)}>
              <img
                src={galleryImages[1]}
                alt="Tattoo artwork 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-xs font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(4)}>
              <img
                src={galleryImages[4]}
                alt="Tattoo artwork 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(9)}>
              <img
                src={galleryImages[9]}
                alt="Tattoo artwork 10"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 border hover:border-primary/40 hover:scale-105" onClick={() => setSelectedImage(2)}>
              <img
                src={galleryImages[2]}
                alt="Tattoo artwork 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-xs font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[2/3] overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(6)}>
              <img
                src={galleryImages[6]}
                alt="Tattoo artwork 7"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(10)}>
              <img
                src={galleryImages[10]}
                alt="Tattoo artwork 11"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(8)}>
              <img
                src={galleryImages[8]}
                alt="Tattoo artwork 9"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 border hover:border-primary/40 hover:scale-105" onClick={() => setSelectedImage(11)}>
              <img
                src={galleryImages[11]}
                alt="Tattoo artwork 12"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="text-white text-xs font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-400 border hover:border-primary/30 hover:scale-102" onClick={() => setSelectedImage(12)}>
              <img
                src={galleryImages[12]}
                alt="Tattoo artwork 13"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-white mx-auto mb-1" />
                  <span className="text-white text-[10px] font-medium uppercase tracking-widest">Click to Expand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-10" variant="default">
              <Link href="/gallery">
              View Complete Gallery
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-all duration-800" />
            </Link>
            </Button>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/90">
            {selectedImage !== null && (
              <img
                src={galleryImages[selectedImage]}
                alt="Gallery full view"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
