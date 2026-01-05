'use client';

import { ServicesTabs } from '@/components/services/ServicesTabs';
import { motion } from 'framer-motion';

const tattooPatternUrl =
  "url('data:image/svg+xml,%3Csvg width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Ccircle cx=%2260%22 cy=%2260%22 r=%223%22 fill=%22%23ff6b35%22 opacity=%220.1%22/%3E%3Ccircle cx=%2220%22 cy=%2230%22 r=%222%22 fill=%22%23221f1f%22 opacity=%220.15%22/%3E%3Ccircle cx=%22100%22 cy=%2280%22 r=%221.5%22 fill=%22%23ff4757%22 opacity=%220.1%22/%3E%3Cpath d=%22M30 90 Q60 70 90 90%22 stroke=%22%23221f1f%22 stroke-width=%221%22 opacity=%220.08%22/%3E%3C/g%3E%3C/svg%3E')";

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const inkDropVariants = (delay: number) => ({
  animate: {
    y: [0, 40, 0],
    x: [0, Math.random() * 40 - 20, 0],
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 3 + delay * 0.5,
      repeat: Infinity,
      delay: delay * 0.3,
      ease: 'easeInOut' as const,
    },
  },
});

export default function Services() {
  return (
    <div>
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden py-12">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black/50 to-slate-900/20 dark:from-black dark:via-slate-900 dark:to-black/80"
          style={{
            backgroundImage: `
              ${tattooPatternUrl}, 
              radial-gradient(circle at 20% 80%, rgba(255,107,53,0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,71,87,0.1) 0%, transparent 50%)
            `,
            backgroundSize: '120px 120px, 400px 400px, 600px 600px',
            backgroundPosition: '0 0, 100px 200px, -100px 100px',
          }}
        />
        
        {/* Fade Effect at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        {/* Minimal Pulsing Circle - Bottom Right */}
        <motion.div 
          className="absolute bottom-12 right-10 w-6 h-6 rounded-full border border-primary/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ink Splatter Particles */}
        <motion.div 
          className="absolute top-8 left-8 w-14 h-14 opacity-12"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <circle cx="20" cy="20" r="3" fill="#ff4757" opacity="0.8" />
            <circle cx="40" cy="15" r="2" fill="#ff6b35" opacity="0.6" />
            <circle cx="10" cy="40" r="4" fill="#74b9ff" opacity="0.7" />
            <path
              d="M25 45 Q35 50 45 42"
              stroke="#ff6b35"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Glowing Ink Lines */}
        <motion.div 
          className="absolute top-10 right-5 w-16 h-16 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="glowGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ff4757" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M20 50 Q50 20 80 50 T50 80 Z"
              stroke="url(#glowGrad2)"
              strokeWidth="3"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </motion.div>

        {/* Floating Ball */}
        <motion.div 
          className="absolute top-5 left-10 w-8 h-8 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(162, 155, 254, 0.9))',
            filter: 'blur(1px)',
          }}
          animate={{
            x: [-120, 60, -100, 120, -80, 100, 0],
            y: [-100, 120, -80, 80, -120, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.2, 0.35, 0.55, 0.7, 0.85, 1],
          }}
        />

        {/* Animated Ink Droplets */}
        <motion.div 
          className="absolute inset-0 pointer-events-none" 
          variants={containerVariants} 
          initial="initial" 
          animate="animate"
        >
          <motion.div variants={inkDropVariants(0)} className="absolute top-1/4 left-5 w-3 h-3 bg-gradient-to-r from-primary/40 to-destructive/40 rounded-full opacity-40" />
          <motion.div variants={inkDropVariants(1)} className="absolute top-1/3 right-10 w-2 h-2 bg-gradient-to-r from-destructive/30 to-primary/30 rounded-full opacity-30" />
          <motion.div variants={inkDropVariants(2)} className="absolute bottom-1/4 left-20 w-4 h-4 bg-gradient-to-r from-secondary/30 to-primary/40 rounded-full opacity-50" />
          <motion.div variants={inkDropVariants(3)} className="absolute bottom-1/3 right-5 w-2.5 h-2.5 bg-gradient-to-r from-primary/35 to-destructive/35 rounded-full opacity-40" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="relative text-center px-4 z-10"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInVariants}>
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-primary/20 via-destructive/10 to-secondary/20 rounded-2xl backdrop-blur-xl border border-primary/30 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-destructive rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary drop-shadow-lg">
                Our Services
              </span>
            </div>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent drop-shadow-2xl tracking-tight uppercase">
              Tattoo Styles & Services
            </h1>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Explore our diverse range of tattoo styles and find the perfect match for your vision
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <ServicesTabs />
        </div>
      </div>
    </div>
  );
}
