'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles, Droplets } from 'lucide-react';
import Link from 'next/link';

export function ServicesTabs() {
  const features = [
    { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: '100% Sterilized & Disposable Equipment' },
    { icon: <Sparkles className="w-5 h-5 text-primary" />, text: 'Premium Imported Inks' },
    { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, text: 'Free Custom Design Consultation' },
    { icon: <Droplets className="w-5 h-5 text-primary" />, text: 'Complete Aftercare Guidance' },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <CardHeader className="text-center border-b bg-muted/30 pb-8">
        <CardTitle className="text-4xl font-black tracking-tight uppercase mb-2">
          Pricing Details
        </CardTitle>
        <p className="text-muted-foreground font-medium italic">Professional Artistry at Fair Rates</p>
      </CardHeader>
      
      <CardContent className="pt-10 space-y-10 px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Basic charge: 1500/-
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="p-8 rounded-3xl border bg-card shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4 group-hover:text-primary transition-colors">Black & Grey</h4>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl font-black">500/-</span>
                <span className="text-muted-foreground font-medium">sq. inch</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Perfect for realism, linework, and traditional styles.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="p-8 rounded-3xl border-2 border-primary/20 bg-primary/5 shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300 group"
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Vibrant Colour</h4>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl font-black text-primary">700/-</span>
                <span className="text-muted-foreground font-medium">sq. inch</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">High-pigment inks for lasting, brilliant color results.</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-muted/50">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                {feature.icon}
              </div>
              <span className="text-sm font-semibold text-muted-foreground">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-2">
          <Button asChild className="flex-1 h-14 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" size="lg">
            <Link href="/contact">
              Book Consultation
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 h-14 text-lg font-bold hover:bg-muted transition-all" size="lg">
            <Link href="/gallery">
              View Gallery
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
