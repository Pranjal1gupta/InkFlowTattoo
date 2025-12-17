import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Studio Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-muted-foreground">
                123 Tattoo Street<br />
                Art District, NY 10001
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">info@inkandsoul.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Studio Hours</p>
              <div className="text-muted-foreground text-sm">
                <p>Monday - Friday: 12pm - 8pm</p>
                <p>Saturday - Sunday: 11am - 7pm</p>
                <p className="text-xs mt-1">*By appointment only</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer transition-colors">
              <Instagram className="h-5 w-5 text-primary" />
              <span className="text-sm">@inkandsoul</span>
            </div>
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer transition-colors">
              <Facebook className="h-5 w-5 text-primary" />
              <span className="text-sm">Ink & Soul</span>
            </div>
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer transition-colors">
              <Twitter className="h-5 w-5 text-primary" />
              <span className="text-sm">@inkandsoul</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Before Your Visit</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Bring a valid ID</li>
            <li>• Eat a good meal beforehand</li>
            <li>• Stay hydrated</li>
            <li>• Avoid alcohol 24 hours prior</li>
            <li>• Bring reference images</li>
            <li>• Wear comfortable clothing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}