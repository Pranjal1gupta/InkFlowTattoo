const studioImages = [
  {
    src: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Studio workspace',
    title: 'Artist Workspace',
  },
  {
    src: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Reception area',
    title: 'Reception Area',
  },
  {
    src: 'https://images.pexels.com/photos/1040879/pexels-photo-1040879.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Consultation room',
    title: 'Consultation Room',
  },
  {
    src: 'https://images.pexels.com/photos/1040878/pexels-photo-1040878.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Sterilization area',
    title: 'Sterilization Area',
  },
];

export function StudioImages() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Studio Tour</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Take a virtual tour of our clean, modern, and welcoming studio space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {studioImages.map((image, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center font-medium">{image.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}