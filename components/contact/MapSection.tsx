export function MapSection() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6 text-center">Find Us</h3>
      <div className="h-96 w-full rounded-lg overflow-hidden bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8612896539416!2d77.49794697577934!3d28.47927427574883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb0bed392631%3A0xd846a63bcea16723!2sINKFLOW%20TATTOO%20Jagat%20Farm!5e1!3m2!1sen!2sin!4v1767355757960!5m2!1sen!2sin"
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