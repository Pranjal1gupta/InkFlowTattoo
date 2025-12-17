"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import Link from "next/link";

const tattooPatternUrl =
  "url('data:image/svg+xml,%3Csvg width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Ccircle cx=%2260%22 cy=%2260%22 r=%223%22 fill=%22%23ff6b35%22 opacity=%220.1%22/%3E%3Ccircle cx=%2220%22 cy=%2230%22 r=%222%22 fill=%22%23221f1f%22 opacity=%220.15%22/%3E%3Ccircle cx=%22100%22 cy=%2280%22 r=%221.5%22 fill=%22%23ff4757%22 opacity=%220.1%22/%3E%3Cpath d=%22M30 90 Q60 70 90 90%22 stroke=%22%23221f1f%22 stroke-width=%221%22 opacity=%220.08%22/%3E%3C/g%3E%3C/svg%3E')";

const inkSplatterUrl =
  "https://images.unsplash.com/photo-1574179208501-42ad8b7f4b97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background - Dark/Light theme aware */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black/50 to-slate-900/20 dark:from-black dark:via-slate-900 dark:to-black/80"
        style={{
          backgroundImage: `
            ${tattooPatternUrl}, 
            radial-gradient(circle at 20% 80%, rgba(255,107,53,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,71,87,0.1) 0%, transparent 50%)
          `,
          backgroundSize: "120px 120px, 400px 400px, 600px 600px",
          backgroundPosition: "0 0, 100px 200px, -100px 100px",
        }}
      />

      {/* === ANIMATED TATTOO ELEMENTS === */}

      {/* Animated Ink Droplets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-5 w-3 h-3 bg-gradient-to-r from-primary/40 to-destructive/40 rounded-full animate-float opacity-40" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-gradient-to-r from-destructive/30 to-primary/30 rounded-full animate-float-delay1 opacity-30" />
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-gradient-to-r from-secondary/30 to-primary/40 rounded-full animate-float-delay2 opacity-50" />
        <div className="absolute bottom-1/3 right-5 w-2.5 h-2.5 bg-gradient-to-r from-primary/35 to-destructive/35 rounded-full animate-float-delay3 opacity-40" />
        <div className="absolute top-2/3 left-1/4 w-3.5 h-3.5 bg-gradient-to-r from-destructive/40 to-secondary/40 rounded-full animate-float-delay4 opacity-35" />
      </div>

      {/* Tattoo Machine/Pen - Main */}
      <div className="absolute top-10 right-20 w-16 h-6 opacity-25 animate-tattoo-machine-drift">
        <svg viewBox="0 0 120 32" className="w-full h-full">
          <defs>
            <linearGradient id="machineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e0e0e0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f5f5f5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#d0d0d0" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="8"
            width="110"
            height="16"
            rx="8"
            fill="#333"
            stroke="url(#machineGrad)"
            strokeWidth="1.5"
          />
          <rect x="10" y="10" width="20" height="12" rx="3" fill="#444" />
          <circle cx="85" cy="16" r="5" fill="#ff6b35" opacity="0.9">
            <animate
              attributeName="r"
              values="5;6;5"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <rect x="95" y="12" width="20" height="8" rx="2" fill="#222" />
          <circle cx="105" cy="16" r="1.5" fill="#ff4757" />
        </svg>
      </div>

      {/* Tattoo Ink Bottles */}
      <div className="absolute bottom-32 left-4 w-12 h-20 opacity-30 animate-ink-bottle-bob">
        <svg viewBox="0 0 40 70" className="w-full h-full">
          <defs>
            <linearGradient id="inkBottle1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4757" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c44569" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect
            x="8"
            y="15"
            width="24"
            height="45"
            rx="12"
            fill="url(#inkBottle1)"
          />
          <rect
            x="12"
            y="8"
            width="16"
            height="10"
            rx="5"
            fill="#333"
            stroke="#555"
            strokeWidth="1"
          />
          <circle cx="20" cy="62" r="4" fill="#333" />
          <text x="20" y="66" textAnchor="middle" fontSize="8" fill="#aaa">
            INK
          </text>
        </svg>
      </div>

      <div className="absolute top-40 right-4 w-10 h-16 opacity-25 animate-ink-bottle-float-delay">
        <svg viewBox="0 0 35 65" className="w-full h-full">
          <defs>
            <linearGradient id="inkBottle2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e55a30" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect
            x="7"
            y="12"
            width="21"
            height="42"
            rx="10"
            fill="url(#inkBottle2)"
          />
          <rect x="11" y="6" width="13" height="9" rx="4" fill="#444" />
          <circle cx="18" cy="58" r="3.5" fill="#333" />
        </svg>
      </div>

      {/* Needle Tip with Drip Effect */}
      <div className="absolute top-1/4 left-4 w-10 h-10 opacity-20 animate-needle-drip">
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <linearGradient id="needleTip" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8e8e8" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </linearGradient>
          </defs>
          <path
            d="M25 10 L35 10 L30 25 Z"
            fill="url(#needleTip)"
            stroke="#666"
            strokeWidth="1.5"
          />
          <circle cx="30" cy="28" r="3" fill="#ff4757" opacity="0.8">
            <animate
              attributeName="cy"
              values="28;32;28"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;4;3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M30 32 Q32 38 28 42"
            stroke="#ff4757"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.6;0.9;0.6"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Existing Elements (Enhanced) */}
      <div className="absolute top-20 left-4 w-16 h-16 md:w-20 md:h-20 opacity-20 animate-enhanced-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="inkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#ff4757" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="8" fill="url(#inkGrad)" opacity="0.6">
            <animate
              attributeName="r"
              values="8;10;8"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M30 70 Q50 60 70 70 T90 70"
            stroke="#ff6b35"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50;15 50 50;-10 50 50;0 50 50"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Ink Splatter Particles */}
      <div className="absolute bottom-40 left-10 w-16 h-16 opacity-15 animate-splatter-spin">
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
      </div>

      {/* Glowing Ink Lines */}
      <div className="absolute top-20 right-10 w-20 h-20 opacity-10 animate-glow-rotate-enhanced">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ff4757" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="M20 50 Q50 20 80 50 T50 80 Z"
            stroke="url(#glowGrad)"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Animated Ink Swirl Cloud - Top Right Corner */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-15 animate-ink-swirl">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="swirGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ff4757" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <path
            d="M50 10 Q90 30 80 70 Q50 90 20 70 Q10 40 50 10"
            fill="url(#swirGrad)"
            opacity="0.6"
          />
          <path
            d="M50 25 Q75 40 70 65 Q50 75 30 65 Q20 50 50 25"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Rotating Tribal Pattern */}
      <div className="absolute bottom-10 right-10 w-20 h-20 opacity-20 animate-tribal-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="tribalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4757" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,40 70,90 30,90 10,40"
            fill="none"
            stroke="url(#tribalGrad)"
            strokeWidth="2"
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="8" fill="url(#tribalGrad)" opacity="0.6" />
          <path
            d="M50 20 L50 80 M20 50 L80 50"
            stroke="#ff6b35"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Animated Lightning Bolts (Tribal Tattoo Style) */}
      <div className="absolute top-1/4 left-4 w-12 h-20 opacity-25 animate-lightning-strike">
        <svg viewBox="0 0 40 100" className="w-full h-full">
          <defs>
            <linearGradient
              id="lightningGrad"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff4757" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M20 10 L15 40 L25 40 L10 100"
            stroke="url(#lightningGrad)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M20 10 L25 40 L15 40 L30 100"
            stroke="url(#lightningGrad)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Flowing Ink Stream */}
      <div className="absolute left-2 top-1/3 w-20 h-32 opacity-15 animate-ink-flow">
        <svg viewBox="0 0 60 120" className="w-full h-full">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ff4757" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M30 10 Q20 30 25 50 Q30 70 20 90 Q15 110 30 120"
            stroke="url(#flowGrad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="30" cy="20" r="2" fill="#ff6b35" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Rotating Mandala/Compass Pattern */}
      <div className="absolute bottom-20 right-4 w-24 h-24 opacity-12 animate-mandala-rotate">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient
              id="mandalaGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff4757" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="url(#mandalaGrad)"
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke="url(#mandalaGrad)"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="60"
            cy="60"
            r="30"
            fill="none"
            stroke="url(#mandalaGrad)"
            strokeWidth="1"
            opacity="0.4"
          />
          <circle
            cx="60"
            cy="60"
            r="8"
            fill="url(#mandalaGrad)"
            opacity="0.7"
          />
          <line
            x1="60"
            y1="10"
            x2="60"
            y2="30"
            stroke="#ff6b35"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="60"
            y1="90"
            x2="60"
            y2="110"
            stroke="#ff6b35"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="10"
            y1="60"
            x2="30"
            y2="60"
            stroke="#ff6b35"
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="90"
            y1="60"
            x2="110"
            y2="60"
            stroke="#ff6b35"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Animated Ink Chain */}
      <div className="absolute top-5 left-20 w-24 h-10 opacity-18 animate-chain-swing">
        <svg viewBox="0 0 200 60" className="w-full h-full">
          <defs>
            <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff4757" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <circle
            cx="20"
            cy="30"
            r="6"
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="50"
            cy="30"
            r="6"
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="80"
            cy="30"
            r="6"
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="110"
            cy="30"
            r="6"
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="140"
            cy="30"
            r="6"
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth="2"
            opacity="0.7"
          />
          <circle
            cx="170"
            cy="30"
            r="6"
            fill="none"
            stroke="url(#chainGrad)"
            strokeWidth="2"
            opacity="0.7"
          />
          <line
            x1="26"
            y1="30"
            x2="44"
            y2="30"
            stroke="url(#chainGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="56"
            y1="30"
            x2="74"
            y2="30"
            stroke="url(#chainGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="86"
            y1="30"
            x2="104"
            y2="30"
            stroke="url(#chainGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="116"
            y1="30"
            x2="134"
            y2="30"
            stroke="url(#chainGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <line
            x1="146"
            y1="30"
            x2="164"
            y2="30"
            stroke="url(#chainGrad)"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Hero Image Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay dark:mix-blend-multiply"
          style={{
            backgroundImage: `url(${inkSplatterUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
      </div>

      {/* Content stays exactly the same */}
      <div className="container mx-auto px-4 text-center relative z-20 pt-20 md:pt-0 pb-20 md:pb-0">
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent drop-shadow-2xl uppercase">
              INK Flow Tattoo
            </h1>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-destructive opacity-75" />
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-200 mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Precision Crafted Tattoos • Custom Artwork • Timeless Stories
          </p>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Award-winning studio where visionary artists craft bold, custom tattoos that flow with your story.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center mb-12 max-w-2xl mx-auto">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-destructive/20 border border-primary/50 text-slate-700 dark:text-slate-200 text-sm font-medium backdrop-blur-sm">
              Hyper-realism portraits
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-destructive/20 to-primary/20 border border-destructive/50 text-slate-700 dark:text-slate-200 text-sm font-medium backdrop-blur-sm">
              Neo-traditional florals
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-destructive/20 border border-primary/50 text-slate-700 dark:text-slate-200 text-sm font-medium backdrop-blur-sm">
              Intricate blackwork
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group text-lg px-12 py-8 shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-destructive/90 text-white font-semibold border-2 border-transparent hover:border-white/50 backdrop-blur-sm"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:-translate-x-1 transition-transform" />
              Book Your Session
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-12 py-8 border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              asChild
            >
              <Link href="/gallery">
                <Users className="mr-3 h-6 w-6" />
                View Gallery
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-xl font-semibold text-slate-200 tracking-wide">
                Years Crafting
              </div>
              <div className="text-slate-400 text-sm mt-1">Masterpieces</div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-destructive/20 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black text-destructive mb-3 group-hover:scale-110 transition-transform">
                1K+
              </div>
              <div className="text-xl font-semibold text-slate-200 tracking-wide">
                Satisfied Clients
              </div>
              <div className="text-slate-400 text-sm mt-1">Worldwide</div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="text-4xl md:text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-xl font-semibold text-slate-200 tracking-wide">
                Sterile & Safe Studio
              </div>
              <div className="text-slate-400 text-sm mt-1">Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-white/50 to-transparent mt-2 rounded-full animate-pulse" />
        </div>
      </div>

      {/* === RANDOM FLOATING BALLS === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Ball 1 */}
        <div className="floating-ball ball-1" />
        {/* Ball 2 */}
        <div className="floating-ball ball-2" />
        {/* Ball 3 */}
        <div className="floating-ball ball-3" />
        {/* Ball 4 */}
        <div className="floating-ball ball-4" />
      </div>

      <style jsx global>{`
        .floating-ball {
          position: absolute;
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.9),
            rgba(255, 107, 53, 0.9)
          );
          opacity: 0.35;
          filter: blur(1px);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .ball-1 {
          top: 20%;
          left: 15%;
          animation: random-float-1 26s infinite alternate;
        }

        .ball-2 {
          bottom: 25%;
          right: 20%;
          width: 36px;
          height: 36px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.9),
            rgba(255, 71, 87, 0.9)
          );
          animation: random-float-2 32s infinite alternate;
        }

        .ball-3 {
          top: 60%;
          left: 70%;
          width: 30px;
          height: 30px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.9),
            rgba(116, 185, 255, 0.9)
          );
          animation: random-float-3 28s infinite alternate-reverse;
        }

        .ball-4 {
          top: 35%;
          right: 60%;
          width: 40px;
          height: 40px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.9),
            rgba(162, 155, 254, 0.9)
          );
          animation: random-float-4 34s infinite alternate-reverse;
        }

        @keyframes random-float-1 {
          0% {
            transform: translate(0, 0);
          }
          15% {
            transform: translate(120px, -80px);
          }
          30% {
            transform: translate(-90px, 140px);
          }
          45% {
            transform: translate(160px, 220px);
          }
          60% {
            transform: translate(-140px, 80px);
          }
          75% {
            transform: translate(200px, -120px);
          }
          100% {
            transform: translate(-180px, 160px);
          }
        }

        @keyframes random-float-2 {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-140px, -100px);
          }
          35% {
            transform: translate(100px, 160px);
          }
          55% {
            transform: translate(-200px, 240px);
          }
          70% {
            transform: translate(180px, -160px);
          }
          85% {
            transform: translate(-120px, 60px);
          }
          100% {
            transform: translate(220px, -200px);
          }
        }

        @keyframes random-float-3 {
          0% {
            transform: translate(0, 0);
          }
          15% {
            transform: translate(-140px, 120px);
          }
          30% {
            transform: translate(180px, -160px);
          }
          45% {
            transform: translate(-200px, -80px);
          }
          60% {
            transform: translate(140px, 200px);
          }
          75% {
            transform: translate(-180px, 60px);
          }
          100% {
            transform: translate(220px, -140px);
          }
        }

        @keyframes random-float-4 {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(160px, 140px);
          }
          35% {
            transform: translate(-120px, -200px);
          }
          55% {
            transform: translate(220px, 100px);
          }
          70% {
            transform: translate(-180px, -120px);
          }
          85% {
            transform: translate(100px, 180px);
          }
          100% {
            transform: translate(-240px, -160px);
          }
        }
      `}</style>
    </section>
  );
}
