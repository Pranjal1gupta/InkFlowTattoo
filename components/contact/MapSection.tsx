export function MapSection() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6 text-center">Find Us</h3>
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959542207!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ink & Soul Tattoo Studio Location"
        />
      </div>
      <p className="text-center text-muted-foreground mt-4">
        Located in the heart of the Art District, easily accessible by public transportation
      </p>
    </div>
  );
}