"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const styles = [
  {
    name: "Realism",
    description: "Photorealistic tattoos with incredible detail and depth",
    image:
      "https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/realism_zfkefy.jpg",
  },
  {
    name: "Traditional",
    description:
      "Classic American traditional style with bold lines and vibrant colors",
    image:
      "https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/traditional_e4uttb.jpg",
  },
  {
    name: "Neo-Traditional",
    description:
      "Modern twist on classic style with intricate details and bold shading",
    image:
      "https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/nontraditional_o5et64.jpg",
  },
  {
    name: "Minimalist",
    description:
      "Clean, simple designs with elegant line work and negative space",
    image:
      "https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/minimalistic_mmvwen.jpg",
  },
  {
    name: "Japanese",
    description:
      "Traditional Irezumi with mythical creatures and dramatic backgrounds",
    image:
      "https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/Japanese_ze0ljz.jpg",
  },
  {
    name: "Portrait",
    description:
      "Hyper-detailed portraits capturing the essence of your loved ones",
    image:
      "https://res.cloudinary.com/dlifnml9x/image/upload/v1765886636/Portrait_qvmui7.jpg",
  },
];

const BUFFER_SIZE = 3;
const loopStyles = Array(BUFFER_SIZE * 2 + 1)
  .fill(null)
  .flatMap(() => styles);

export function FeaturedStyles() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(BUFFER_SIZE * styles.length);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    const cardWidth = isMobile ? 192 + 16 : 320 + 48;
    const mobileOffset = isMobile ? (window.innerWidth - 192) / 2 : 0;

    trackRef.current.style.transition = "transform 900ms ease";
    trackRef.current.style.transform = `translateX(-${
      index * cardWidth - mobileOffset
    }px)`;

    // Reset position when reaching the end of buffer
    if (index >= (BUFFER_SIZE * 2) * styles.length) {
      setTimeout(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = "none";
        setIndex(BUFFER_SIZE * styles.length);
        trackRef.current.style.transform = `translateX(-${
          BUFFER_SIZE * styles.length * cardWidth - mobileOffset
        }px)`;
      }, 900);
    }
    // Reset position when reaching the beginning of buffer
    else if (index <= 0) {
      setTimeout(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = "none";
        setIndex(BUFFER_SIZE * styles.length);
        trackRef.current.style.transform = `translateX(-${
          BUFFER_SIZE * styles.length * cardWidth - mobileOffset
        }px)`;
      }, 900);
    }
  }, [index, isMobile]);

  return (
    <section className="py-12 md:py-16 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="text-center mb-8 md:mb-14">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Studio Styles
        </p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent">
            Our Styles
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Signature tattoo styles crafted with precision artistry.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-[1060px] mx-auto">
        <div className="overflow-hidden py-8 md:py-24 px-4 md:px-0">
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-12 transition-transform duration-900 ease-out"
          >
            {loopStyles.map((style, i) => {
              const centerIndex = isMobile ? index : index + 1;
              const isCenter = i === centerIndex;

              return (
                <div
                  key={i}
                  className={`shrink-0 transition-all duration-700 ${
                    isCenter
                      ? "scale-100 md:scale-125 -translate-y-0 md:-translate-y-8 z-40"
                      : "scale-75 md:scale-90 opacity-60 blur-[1px] pointer-events-none md:opacity-60 md:blur-[1px] md:pointer-events-auto"
                  }`}
                >
                  <Card
                    className={`w-48 md:w-80 h-72 md:h-[480px] overflow-hidden border-4 ${
                      isCenter ? "shadow-2xl ring-4 ring-primary" : "shadow-lg"
                    }`}
                  >
                    {/* IMAGE */}
                    <div className="relative h-[80%] md:h-[75%] overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>

                    {/* TEXT — HARD CUT */}
                    <CardContent className="h-[20%] md:h-[25%] p-3 md:p-5 overflow-hidden">
                      <h3 className="text-sm md:text-xl font-bold truncate">
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
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 z-50"
          onClick={() => setIndex((i) => i - 1)}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 z-50"
          onClick={() => setIndex((i) => i + 1)}
        >
          <ChevronRight />
        </Button>
      </div>

      {/* CTA */}
      <div className="text-center mt-6 md:mt-10">
        <Button size="lg" asChild>
          <Link href="/services">Explore More Services</Link>
        </Button>
      </div>
    </section>
  );
}
