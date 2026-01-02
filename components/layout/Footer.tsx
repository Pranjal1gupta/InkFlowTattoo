
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background/60 to-muted/20 border-t border-border">
      {/* Ambient ink glow */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,107,53,0.12), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255,71,87,0.10), transparent 40%)
          `,
        }}
      />

      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Studio Info */}
          <div className="space-y-5 col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-black tracking-wide bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Ink & Soul Studio
            </h3>

            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm max-w-sm">
              Award-winning tattoo studio crafting custom artwork since 2023.
              
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/inkflowtattoo2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/60 dark:bg-white/10 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/60 dark:bg-white/10 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/60 dark:bg-white/10 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
              >
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-5 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                ['About Us', '/about'],
                ['Our Artists', '/artists'],
                ['Services', '/services'],
                ['Gallery', '/gallery'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all relative group"
                  >
                    <span className="group-hover:pl-2 transition-all">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-5 text-foreground">
              Contact Info
            </h4>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex gap-2 sm:gap-3 items-start">
                <MapPin className="h-5 w-5 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-1" />
                <span className="break-words">Shop no-130, Ground floor, Amrit Plaza, Jagat Farm, Greater Noida, Uttar Pradesh 201310</span>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+91-7703827950</span>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="break-words">inkflowtattoo2023@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Studio Hours */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-5 text-foreground">
              Studio Hours
            </h4>
            <div className="flex gap-2 sm:gap-3 items-start text-xs sm:text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <div>Open 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2024 Ink & Soul Tattoo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
