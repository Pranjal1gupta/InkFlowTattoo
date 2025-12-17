export function StudioStory() {
  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2015, Ink & Soul began as a dream to create a tattoo studio that 
              combines artistic excellence with a welcoming, professional environment. Our 
              journey started with a simple belief: every tattoo should be a masterpiece 
              that tells a unique story.
            </p>
            <p>
              Over the years, we've grown from a small studio to a renowned destination 
              for tattoo enthusiasts. Our commitment to quality, safety, and artistic 
              innovation has earned us the trust of hundreds of clients who have become 
              part of our extended family.
            </p>
            <p>
              Today, we continue to push the boundaries of tattoo artistry while 
              maintaining the personal touch and attention to detail that has defined 
              us from the beginning. Every piece we create is a collaboration between 
              artist and client, resulting in truly one-of-a-kind artwork.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Studio interior"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}