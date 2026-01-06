'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Instagram } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'Dharvendra Rajput',
    specialization: 'Tattoo & Piercing',
    experience: '10+ years',
    image: 'https://res.hello.com/dlifnml9x/image/upload/v1767353722/Dharvendra_Rajput_xxvmjn.jpg',
    bio: 'Dharvendra is our senior artist with over 10 years of professional experience. Specializing in both intricate tattoo designs and professional piercing services, he has established himself as a master craftsman in the tattoo and piercing industry with a keen eye for detail.',
    styles: ['Tattoo Design', 'Piercing', 'Custom Art'],
    portfolio: [
      'https://res.hello.com/dlifnml9x/image/upload/v1765889814/503945321_1752354485320281_1521602636110283779_n_qskmtu.jpg',
      'https://res.hello.com/dlifnml9x/image/upload/v1765889814/503653212_1422997529115439_1092929154008277907_n_ovsecg.jpg',
      'https://res.hello.com/dlifnml9x/image/upload/v1765886636/traditional_e4uttb.jpg',
    ],
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    specialization: 'Tattoo, Piercing & Nails',
    experience: '6 years',
    image: 'https://res.hello.com/dlifnml9x/image/upload/v1767353722/Rohit_kumar_yxvttv.jpg',
    bio: 'Rohit brings versatile expertise with 6 years of experience across multiple disciplines. Skilled in creating stunning tattoo designs, professional piercing services, and nail art, Rohit offers comprehensive body modification and enhancement services with a creative touch.',
    styles: ['Tattoo Design', 'Piercing', 'Nail Art'],
    portfolio: [
      'https://res.hello.com/dlifnml9x/image/upload/v1765886636/Japanese_ze0ljz.jpg',
      'https://res.hello.com/dlifnml9x/image/upload/v1765886636/nontraditional_o5et64.jpg',
      'https://res.hello.com/dlifnml9x/image/upload/v1767353953/WhatsApp_Image_2025-12-24_at_4.20.24_PM_1_lgy0og.jpg',
    ],
  },
];

export function ArtistGrid() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {artists.map((artist) => (
          <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-black mb-2 bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent uppercase tracking-tight">
                {artist.name}
              </h3>
              <p className="text-primary font-bold mb-2 tracking-wide uppercase text-sm">{artist.specialization}</p>
              <p className="text-muted-foreground text-xs mb-4 uppercase tracking-widest">{artist.experience} experience</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {artist.styles.map((style) => (
                  <Badge 
                    key={style} 
                    variant="secondary" 
                    className="text-[10px] uppercase tracking-tighter bg-gradient-to-r from-primary/10 via-destructive/5 to-secondary/10 border-primary/20 text-foreground py-1 px-3"
                  >
                    {style}
                  </Badge>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 bg-gradient-to-r from-primary/5 via-destructive/5 to-secondary/5 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-bold uppercase tracking-widest text-xs py-6"
                    onClick={() => setSelectedArtist(artist)}
                  >
                    View Profile
                  </Button>
                </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-black bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent uppercase tracking-tight">
                        {artist.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-6 p-4 bg-muted/30 rounded-2xl border border-primary/10">
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-destructive rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                          <img
                            src={artist.image}
                            alt={artist.name}
                            className="relative w-24 h-24 rounded-full object-cover border-2 border-background shadow-2xl"
                          />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-primary uppercase tracking-tight">{artist.specialization}</p>
                          <p className="text-muted-foreground uppercase tracking-widest text-xs font-medium">{artist.experience} experience</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-3 uppercase tracking-widest text-sm text-primary/80">About</h4>
                        <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">{artist.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 uppercase tracking-widest text-sm text-primary/80">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {artist.styles.map((style) => (
                            <Badge 
                              key={style} 
                              variant="secondary"
                              className="bg-gradient-to-r from-primary/10 via-destructive/5 to-secondary/10 border-primary/20 text-foreground uppercase text-[10px] tracking-widest py-1 px-4"
                            >
                              {style}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-primary/80">Portfolio</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {artist.portfolio.map((image, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-xl border border-primary/10">
                              <img
                                src={image}
                                alt={`${artist.name} portfolio ${index + 1}`}
                                className="aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          className="w-full border-primary/30 bg-gradient-to-r from-primary/5 via-destructive/5 to-secondary/5 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-bold uppercase tracking-widest text-xs py-7 shadow-lg"
                        >
                          <Instagram className="mr-3 h-5 w-5 text-primary" />
                          Follow on Instagram
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}