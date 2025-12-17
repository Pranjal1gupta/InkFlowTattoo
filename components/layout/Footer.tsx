// import Link from 'next/link';
// import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-muted/50 border-t">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Studio Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Ink & Soul Studio</h3>
//             <p className="text-muted-foreground mb-4">
//               Professional tattoo studio creating custom artwork since 2015. 
//               Where your vision becomes reality.
//             </p>
//             <div className="flex space-x-4">
//               <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
//               <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
//               <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
//               <li><Link href="/artists" className="text-muted-foreground hover:text-primary transition-colors">Our Artists</Link></li>
//               <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
//               <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
//               <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-muted-foreground text-sm">123 Tattoo Street, Art District, NY 10001</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-muted-foreground text-sm">(555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-muted-foreground text-sm">info@inkandsoul.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Hours */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Studio Hours</h3>
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <Clock className="h-4 w-4 text-muted-foreground" />
//                 <div className="text-sm">
//                   <div className="text-muted-foreground">Mon - Fri: 12pm - 8pm</div>
//                   <div className="text-muted-foreground">Sat - Sun: 11am - 7pm</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t mt-8 pt-8 text-center">
//           <p className="text-muted-foreground text-sm">
//             © 2024 Ink & Soul Tattoo Studio. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



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
    <footer className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-muted/60 dark:from-slate-900 dark:via-black dark:to-black border-t border-border">
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

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Studio Info */}
          <div className="space-y-5">
            <h3 className="text-xl font-black tracking-wide bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Ink & Soul Studio
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm max-w-sm">
              Award-winning tattoo studio crafting custom artwork since 2015.
              Where vision, ink, and soul come together.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-background/60 dark:bg-white/10 backdrop-blur-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
                    className="text-muted-foreground hover:text-primary transition-all relative group"
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
          <div>
            <h4 className="text-lg font-semibold mb-5 text-foreground">
              Contact Info
            </h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>123 Tattoo Street, Art District, NY 10001</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@inkandsoul.com</span>
              </div>
            </div>
          </div>

          {/* Studio Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-foreground">
              Studio Hours
            </h4>
            <div className="flex gap-3 items-start text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary mt-1" />
              <div className="space-y-1">
                <div>Mon – Fri: 12pm – 8pm</div>
                <div>Sat – Sun: 11am – 7pm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © 2024 Ink & Soul Tattoo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
