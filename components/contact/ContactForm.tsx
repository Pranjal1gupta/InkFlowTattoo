'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    artist: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Card className="border-primary/30 bg-gradient-to-br from-slate-900/40 via-black/20 to-slate-900/30 backdrop-blur-xl shadow-2xl">
        <CardHeader>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <CardTitle className="text-3xl bg-gradient-to-r from-foreground via-primary to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Get In Touch
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Ready to start your tattoo journey? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="font-semibold text-primary">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="border-primary/30 bg-white dark:bg-slate-900/40 backdrop-blur focus:border-primary/60"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="font-semibold text-primary">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="border-primary/30 bg-white dark:bg-slate-900/40 backdrop-blur focus:border-primary/60"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Label htmlFor="phone" className="font-semibold text-primary">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="border-primary/30 bg-white dark:bg-slate-900/40 backdrop-blur focus:border-primary/60"
              />
            </motion.div>

            <motion.div variants={fadeInVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service" className="font-semibold text-primary">Service Type</Label>
                <Select onValueChange={(value) => handleChange('service', value)}>
                  <SelectTrigger className="border-primary/30 bg-white dark:bg-slate-900/40
                   backdrop-blur focus:border-primary/60">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-primary/30">
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="realism">Realism</SelectItem>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="minimalist">Minimalist</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="geometric">Geometric</SelectItem>
                    <SelectItem value="coverup">Cover-up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="artist" className="font-semibold text-primary">Preferred Artist</Label>
                <Select onValueChange={(value) => handleChange('artist', value)}>
                  <SelectTrigger className="border-primary/30 bg-white dark:bg-slate-900/40 backdrop-blur focus:border-primary/60">
                    <SelectValue placeholder="Select an artist" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-primary/30">
                    <SelectItem value="any">No preference</SelectItem>
                    <SelectItem value="alex">Alex Rivera</SelectItem>
                    <SelectItem value="maya">Maya Chen</SelectItem>
                    <SelectItem value="jordan">Jordan Kim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Label htmlFor="message" className="font-semibold text-primary">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your tattoo idea, size, placement, and any other details..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={5}
                className="border-primary/30 bg-white dark:bg-slate-900/40 backdrop-blur focus:border-primary/60"
                required
              />
            </motion.div>

            <motion.div variants={fadeInVariants}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-destructive hover:from-primary/80 hover:to-destructive/80 text-white font-bold uppercase tracking-widest shadow-lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </CardContent>
      </Card>
    </motion.div>
  );
}