import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { MouseFollower } from '@/components/ui/mouse-follower';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'INK FLOW TATTOO | Professional Custom Tattoos & Body Art in Greater Noida',
    template: '%s | INK FLOW TATTOO',
  },
  description: 'Professional tattoo studio in Greater Noida specializing in custom artwork, realism, traditional tattoos, cover-ups, and precision tattooing. Award-winning artists, sterile environment, premium vegan inks. Located at Jagat Farm, Greater Noida.',
  keywords: [
    'tattoo studio',
    'custom tattoos',
    'professional tattoo artist',
    'realism tattoos',
    'traditional tattoos',
    'tattoo cover-ups',
    'body art',
    'tattoo consultation',
    'sterile tattoo environment',
    'vegan tattoo ink',
    'precision tattooing',
    'award-winning tattoo artists',
    'tattoo aftercare',
    'walk-in tattoos',
    'tattoo booking',
    'INK FLOW TATTOO',
    'greater noida tattoo',
    'jagat farm tattoo studio',
    'noida tattoo artist',
    'uttar pradesh tattoo',
  ],
  authors: [{ name: 'INK FLOW TATTOO' }],
  creator: 'INK FLOW TATTOO',
  publisher: 'INK FLOW TATTOO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inkflowtattoo.com',
    siteName: 'INK FLOW TATTOO',
    title: 'INK FLOW TATTOO | Professional Custom Tattoos & Body Art in Greater Noida',
    description: 'Professional tattoo studio in Greater Noida specializing in custom artwork, realism, traditional tattoos, cover-ups, and precision tattooing. Located at Jagat Farm, Greater Noida.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'INK FLOW TATTOO - Professional Custom Tattoos in Greater Noida',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@inkflowtattoo',
    creator: '@inkflowtattoo',
    title: 'INK FLOW TATTOO | Professional Custom Tattoos & Body Art in Greater Noida',
    description: 'Professional tattoo studio in Greater Noida specializing in custom artwork, realism, traditional tattoos, cover-ups, and precision tattooing. Located at Jagat Farm, Greater Noida.',
    images: [
      {
        url: '/logo.png',
        alt: 'INK FLOW TATTOO - Professional Custom Tattoos in Greater Noida',
      },
    ],
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://inkflowtattoo.com',
  },
  category: 'Business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TattooShop',
    name: 'INK FLOW TATTOO',
    description: 'Professional tattoo studio in Greater Noida specializing in custom artwork, realism, traditional tattoos, cover-ups, and precision tattooing. Award-winning artists, sterile environment, premium vegan inks.',
    url: 'https://inkflowtattoo.com',
    logo: 'https://inkflowtattoo.com/logo.png',
    image: 'https://inkflowtattoo.com/logo.png',
    telephone: '+91-XXXX-XXXXXX',
    email: 'info@inkflowtattoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop no-130, Ground floor, Amrit Plaza, Jagat Farm',
      addressLocality: 'Greater Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201310',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.4743',
      longitude: '77.5071',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '12:00',
        closes: '17:00',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '28.4743',
        longitude: '77.5071',
      },
      geoRadius: '25000',
    },
    priceRange: '₹₹',
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'UPI', 'Digital Payments'],
    currenciesAccepted: 'INR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tattoo Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Tattoo Designs',
            description: 'Bespoke tattoo artwork crafted by award-winning artists',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Precision Tattooing',
            description: 'Modern machines and single-use needles for clean lines and smooth shading',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cover-ups & Touch-ups',
            description: 'Revive faded work or transform old tattoos with expert cover-ups',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tattoo Consultation',
            description: 'Professional consultation for tattoo design and placement',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/inkflowtattoo',
      'https://www.instagram.com/inkflowtattoo',
      'https://www.twitter.com/inkflowtattoo',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MouseFollower />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
