'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInVariants}>
        <Card className="border-primary/30 bg-gradient-to-br from-slate-900/40 via-black/20 to-slate-900/30 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Studio Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Address</p>
                <p className="text-muted-foreground">
                  Shop no-130, Ground floor, Amrit Plaza,<br/>
                   Jagat Farm, Greater Noida, Uttar Pradesh 201310
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Phone</p>
                <p className="text-muted-foreground">+91-7703827950</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Email</p>
                <p className="text-muted-foreground">inkflowtattoo2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Studio Hours</p>
                <div className="text-muted-foreground text-sm">
                  <p>Open 24/7</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInVariants}>
        <Card className="border-primary/30 bg-gradient-to-br from-slate-900/40 via-black/20 to-slate-900/30 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Follow Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-primary/20 to-destructive/20 border border-primary/30 hover:border-primary/60 cursor-pointer transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">@inkandsoul</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-primary/20 to-destructive/20 border border-primary/30 hover:border-primary/60 cursor-pointer transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Ink & Soul</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-primary/20 to-destructive/20 border border-primary/30 hover:border-primary/60 cursor-pointer transition-colors"
              >
                <Twitter className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">@inkandsoul</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInVariants}>
        <Card className="border-primary/30 bg-gradient-to-br from-slate-900/40 via-black/20 to-slate-900/30 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Before Your Visit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Bring a valid ID</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Eat a good meal beforehand</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Stay hydrated</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Avoid alcohol 24 hours prior</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Bring reference images</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Wear comfortable clothing</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}