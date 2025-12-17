'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Instagram, Calendar } from 'lucide-react';

const artists = [
  {
    id: 1,
    name: 'Alex Rivera',
    specialization: 'Realism & Portraits',
    experience: '8 years',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Alex specializes in photorealistic tattoos and detailed portraits. With 8 years of experience, Alex has mastered the art of bringing photographs to life on skin with incredible detail and precision.',
    styles: ['Realism', 'Portraits', 'Black & Grey'],
    portfolio: [
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=200',
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200',
      'https://images.pexels.com/photos/1040879/pexels-photo-1040879.jpeg?auto=compress&cs=tinysrgb&w=200',
    ],
  },
  {
    id: 2,
    name: 'Maya Chen',
    specialization: 'Traditional & Neo-Traditional',
    experience: '6 years',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Maya brings a modern twist to classic tattoo styles. Her bold lines, vibrant colors, and creative interpretations of traditional motifs have made her one of the most sought-after artists in the studio.',
    styles: ['Traditional', 'Neo-Traditional', 'Color Work'],
    portfolio: [
      'https://images.pexels.com/photos/1040878/pexels-photo-1040878.jpeg?auto=compress&cs=tinysrgb&w=200',
      'https://images.pexels.com/photos/1040877/pexels-photo-1040877.jpeg?auto=compress&cs=tinysrgb&w=200',
      'https://images.pexels.com/photos/1040876/pexels-photo-1040876.jpeg?auto=compress&cs=tinysrgb&w=200',
    ],
  },
  {
    id: 3,
    name: 'Jordan Kim',
    specialization: 'Minimalist & Fine Line',
    experience: '4 years',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Jordan is our minimalist specialist, creating elegant and sophisticated designs with clean lines and subtle details. Perfect for clients looking for understated yet meaningful tattoos.',
    styles: ['Minimalist', 'Fine Line', 'Geometric'],
    portfolio: [
      'https://images.pexels.com/photos/1040875/pexels-photo-1040875.jpeg?auto=compress&cs=tinysrgb&w=200',
      'https://images.pexels.com/photos/1040874/pexels-photo-1040874.jpeg?auto=compress&cs=tinysrgb&w=200',
      'https://images.pexels.com/photos/1040873/pexels-photo-1040873.jpeg?auto=compress&cs=tinysrgb&w=200',
    ],
  },
];

export function ArtistGrid() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
              <p className="text-primary font-medium mb-2">{artist.specialization}</p>
              <p className="text-muted-foreground text-sm mb-4">{artist.experience} experience</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {artist.styles.map((style) => (
                  <Badge key={style} variant="secondary" className="text-xs">
                    {style}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setSelectedArtist(artist)}
                    >
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{artist.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-lg font-medium text-primary">{artist.specialization}</p>
                          <p className="text-muted-foreground">{artist.experience} experience</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">About</h4>
                        <p className="text-muted-foreground">{artist.bio}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {artist.styles.map((style) => (
                            <Badge key={style} variant="secondary">
                              {style}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Portfolio</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {artist.portfolio.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${artist.name} portfolio ${index + 1}`}
                              className="aspect-square object-cover rounded"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book with {artist.name}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Instagram className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}