'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const styles = [
  { name: 'Realism', description: 'Photorealistic tattoos with incredible detail and depth', image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/realism_zfkefy.jpg' },
  { name: 'Traditional', description: 'Classic American traditional style with bold lines and vibrant colors', image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/traditional_e4uttb.jpg' },
  { name: 'Neo-Traditional', description: 'Modern twist on classic style with intricate details and bold shading', image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/nontraditional_o5et64.jpg' },
  { name: 'Minimalist', description: 'Clean, simple designs with elegant line work and negative space', image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/minimalistic_mmvwen.jpg' },
  { name: 'Japanese', description: 'Traditional Irezumi with mythical creatures and dramatic backgrounds', image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/Japanese_ze0ljz.jpg' },
  { name: 'Portrait', description: 'Hyper-detailed portraits capturing the essence of your loved ones', image: 'https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/Portrait_qvmui7.jpg' },
];

const loopStyles = Array(50).fill(null).flatMap(() => styles);
const TOTAL_SLIDES = loopStyles.length;

export function FeaturedStyles() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const prevIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % TOTAL_SLIDES);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    const cardWidth = 320 + 48;
    const wasReset = index < prevIndexRef.current;

    if (wasReset) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
      trackRef.current.offsetHeight;
      requestAnimationFrame(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = 'transform 900ms ease';
      });
    } else {
      trackRef.current.style.transition = 'transform 900ms ease';
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    prevIndexRef.current = index;
  }, [index]);

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="text-center mb-14">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Studio Styles
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
            Our Styles
          </span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Signature tattoo styles crafted with precision artistry.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-[1060px] mx-auto">
        <div className="overflow-hidden py-24 px-6 md:px-0">
          <div
            ref={trackRef}
            className="flex gap-12 transition-transform duration-900 ease-out"
          >
            {loopStyles.map((style, i) => {
              const isCenter = i === index + 1;

              return (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    isCenter
                      ? 'scale-125 -translate-y-8 z-40 mx-auto md:mx-0'
                      : 'scale-90 opacity-60 blur-[1px] hidden md:block'
                  }`}
                >
                  <Card className={`w-80 h-[480px] overflow-hidden border-4 ${
                    isCenter
                      ? 'shadow-2xl ring-4 ring-primary'
                      : 'shadow-lg'
                  }`}>
                    {/* IMAGE */}
                    <div className="relative h-[75%] overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>

                    {/* TEXT — HARD CUT */}
                    <CardContent className="h-[25%] p-5 overflow-hidden">
                      <h3 className="text-xl font-bold truncate">
                        {style.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {style.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTROLS */}
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-50"
          onClick={() => setIndex((i) => (i - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)}
        >
          <ChevronLeft />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-50"
          onClick={() => setIndex((i) => (i + 1) % TOTAL_SLIDES)}
        >
          <ChevronRight />
        </Button>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Button size="lg" asChild>
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
    </section>
  );
}
