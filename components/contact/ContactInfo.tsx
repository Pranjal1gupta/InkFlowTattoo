'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

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
      className="space-y-10"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInVariants}>
        <Card className="border-primary/20 dark:border-primary/30 bg-white/90 dark:bg-transparent dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-black/20 dark:to-slate-900/30 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-slate-900 via-primary to-destructive dark:from-primary dark:to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Studio Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-7">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Address</p>
                <p className="text-slate-600 dark:text-muted-foreground">
                  Shop no-130, Ground floor, Amrit Plaza,<br/>
                   Jagat Farm, Greater Noida, Uttar Pradesh 201310
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Phone</p>
                <p className="text-slate-600 dark:text-muted-foreground">+91-7703827950</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Email</p>
                <p className="text-slate-600 dark:text-muted-foreground">inkflowtattoo2023@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary">Studio Hours</p>
                <div className="text-slate-600 dark:text-muted-foreground text-sm">
                  <p>Open 24/7</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInVariants}>
        <Card className="border-primary/20 dark:border-primary/30 bg-white/90 dark:bg-transparent dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-black/20 dark:to-slate-900/30 backdrop-blur-xl shadow-2xl space-y-2">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-slate-900 via-primary to-destructive dark:from-primary dark:to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Follow Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://www.instagram.com/inkflowtattoo2023/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary/20 dark:to-destructive/20 border border-primary/20 dark:border-primary/30 hover:border-primary/60 cursor-pointer transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">@inkflowtattoo2023</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary/20 dark:to-destructive/20 border border-primary/20 dark:border-primary/30 hover:border-primary/60 cursor-pointer transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">@inkflowtattoo2023</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary/20 dark:to-destructive/20 border border-primary/20 dark:border-primary/30 hover:border-primary/60 cursor-pointer transition-colors"
              >
                <Youtube className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">@inkflowtattoo2023</span>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* <motion.div variants={fadeInVariants}>
        <Card className="border-primary/20 bg-white/90 dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-black/20 dark:to-slate-900/30 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-slate-900 via-primary to-destructive dark:from-primary dark:to-destructive bg-clip-text text-transparent drop-shadow-xl uppercase font-black tracking-tight">
              Before Your Visit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-600 dark:text-muted-foreground">
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Bring a valid ID</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Eat a good meal beforehand</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Stay hydrated</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Avoid alcohol 24 hours prior</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Bring reference images</li>
              <li className="flex items-center"><span className="text-primary mr-2">✓</span>Wear comfortable clothing</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div> */}
    </motion.div>
  );
}