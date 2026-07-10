import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Instagram, Clock, Scissors, Award, Star } from 'lucide-react';

/**
 * Empire Fades - Premium Luxury Barbershop
 * Design Philosophy: Regal, elite, high-contrast luxury
 * Colors: Gold (#D4AF37) and Deep Black (#0A0A0A)
 * Typography: Playfair Display for headlines, Poppins for body
 * Accessibility: WCAG AA compliant with semantic HTML and ARIA labels
 */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: '/assets/images&logo/image1.png',
      alt: 'Empire Fades Interior - Premium Barbershop Environment',
    },
    {
      url: '/assets/images&logo/image3.png',
      alt: 'Precision Haircut in Progress',
    },
    {
      url: '/assets/images&logo/image5.png',
      alt: 'Luxury Grooming Experience',
    },
  ];

  const galleryImages = [
    '/assets/images&logo/image2.png',
    '/assets/images&logo/image4.png',
    '/assets/images&logo/image6.png',
    '/assets/images&logo/image7.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const googleMapsUrl = "https://www.google.com/maps?sca_esv=2c6ce2cde38922f6&sxsrf=APpeQnsVm-OxhdISyvAaLgeVbvLXZ7gfaA:1783651500794&iflsig=ABILxe8AAAAAalBqvDvX0PEO7KM0McjRB1p6tP-rUFF7&uact=5&gs_lp=Egdnd3Mtd2l6IhZlbXBpcmUgZmFkZXMgbGl2ZXJwb29sMgUQABiABDIFEAAYgAQyCBAAGBYYHhgKMgYQABgWGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIFEAAY7wVIqhJQAFjlEXAAeACQAQCYAbsBoAGiGaoBBDAuMjG4AQPIAQD4AQGYAhWgAtYZwgIOEC4YgAQYigUYsQMYgwHCAgsQABiABBixAxiDAcICBRAuGIAEwgIEEAAYA8ICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYigUYsQPCAg4QLhiABBixAxjHARjRA8ICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgsQLhiDARixAxiABMICCxAuGIAEGMcBGK8BwgIJEAAYgAQYChgLwgIIEAAYiQUYogSYAwCSBwQwLjIxoAf5ogGyBwQwLjIxuAfWGcIHBjAuMjAuMcgHIIAIAQ&um=1&ie=UTF-8&fb=1&gl=sg&sa=X&geocode=KeGJoV15lRJrMXDqutx1pZaA&daddr=Shop+219/263+Elizabeth+St,+Liverpool+NSW+2170,+Australia";
  
  const googleReviewUrl = "https://www.google.com/search?q=empire+fades+liverpool&sca_esv=2c6ce2cde38922f6&sxsrf=APpeQnsVm-OxhdISyvAaLgeVbvLXZ7gfaA%3A1783651500794&source=hp&ei=rFxQasPYLZOeseMPp6LikQs&iflsig=ABILxe8AAAAAalBqvDvX0PEO7KM0McjRB1p6tP-rUFF7&ved=0ahUKEwjD3uvQi8eVAxUTT2wGHSeROLIQ4dUDCD0&uact=5&oq=empire+fades+liverpool&gs_lp=Egdnd3Mtd2l6IhZlbXBpcmUgZmFkZXMgbGl2ZXJwb29sMgUQABiABDIFEAAYgAQyCBAAGBYYHhgKMgYQABgWGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzIFEAAY7wUyBRAAGO8FMggQABiABBiiBDIFEAAY7wVIqhJQAFjlEXAAeACQAQCYAbsBoAGiGaoBBDAuMjG4AQPIAQD4AQGYAhWgAtYZwgIOEC4YgAQYigUYsQMYgwHCAgsQABiABBixAxiDAcICBRAuGIAEwgIEEAAYA8ICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYigUYsQPCAg4QLhiABBixAxjHARjRA8ICCBAuGIAEGLEDwgIIEAAYgAQYsQPCAgsQLhiDARixAxiABMICCxAuGIAEGMcBGK8BwgIJEAAYgAQYChgLwgIIEAAYiQUYogSYAwCSBwQwLjIxoAf5ogGyBwQwLjIxuAfWGcIHBjAuMjAuMcgHIIAIAQ&sclient=gws-wiz#lrd=0x6b1295795da189e1:0x8096a575dcbaea70,3,,,,";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      {/* Skip to main content link for accessibility */}
      <a href="#main" className="skip-to-main">
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-primary/20 z-50" role="banner">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/images&logo/empirelogo.png" 
              alt="Empire Fades Logo" 
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              EMPIRE FADES
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">About</a>
            <a href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Services</a>
            <a href="#gallery" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Gallery</a>
            <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+61406713336" className="btn-primary py-2 px-6 text-xs hidden sm:block" aria-label="Call Empire Fades">CALL NOW</a>
            <button className="text-primary hover:text-white transition-colors md:hidden" aria-label="Toggle menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main">
        {/* Hero Section */}
        <section className="hero-section h-screen relative flex items-center justify-center overflow-hidden" aria-label="Hero banner">
          <div className="absolute inset-0 z-0">
            {heroImages.map((image, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
                aria-hidden={idx !== currentSlide}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-primary/10 hover:bg-primary/30 text-primary p-2 md:p-4 border border-primary/20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-primary/10 hover:bg-primary/30 text-primary p-2 md:p-4 border border-primary/20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-block mb-6 p-4 border border-primary/30 bg-black/40 backdrop-blur-sm">
              <img 
                src="/assets/images&logo/empirelogo.png" 
                alt="Empire Fades Logo" 
                className="w-32 md:w-48 h-auto mx-auto mb-4"
              />
              <div className="h-px w-24 bg-primary mx-auto mb-4"></div>
              <p className="text-primary tracking-[0.3em] font-bold uppercase text-sm md:text-base">Westfield Liverpool's Elite Barbershop</p>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              REIGN OVER <br/><span className="text-primary">YOUR STYLE</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light tracking-wide">
              Precision fades, classic cuts, and premium grooming for the modern gentleman. Experience the empire standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#services" className="btn-primary w-full sm:w-auto">OUR SERVICES</a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">FIND US</a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4" role="tablist" aria-label="Slide navigation">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-500 ${
                  idx === currentSlide ? 'bg-primary w-12' : 'bg-white/20 w-6 hover:bg-white/40'
                }`}
                role="tab"
                aria-selected={idx === currentSlide}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary"></div>
                <img
                  src="/assets/images&logo/image4.png"
                  alt="Empire Fades Barber at Work"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <p className="text-primary font-bold tracking-widest uppercase mb-4">The Empire Standard</p>
                <h3 className="mb-8 leading-tight text-4xl md:text-5xl font-bold">CRAFTING <span className="text-primary">CONFIDENCE</span></h3>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  At Empire Fades, we believe a haircut is more than just a service—it's a statement. Located in Westfield Liverpool, our barbershop combines traditional craftsmanship with modern techniques to deliver world-class grooming.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                  Our elite team of barbers is dedicated to precision, style, and providing an unparalleled experience in a premium, luxury environment. From the moment you step in, you're treated like royalty.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                      <Scissors size={24} aria-hidden="true" />
                    </div>
                    <span className="font-bold tracking-widest text-sm">ELITE CUTS</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                      <Award size={24} aria-hidden="true" />
                    </div>
                    <span className="font-bold tracking-widest text-sm">MASTER BARBERS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="mb-4 text-4xl md:text-6xl font-bold">PREMIUM <span className="text-primary">SERVICES</span></h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 tracking-widest uppercase text-sm">Tailored grooming for the modern man</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Empire Fade', 
                  desc: 'Our signature precision fade, tailored to your head shape and style preference.',
                  icon: <Scissors className="text-primary" size={32} aria-hidden="true" />
                },
                { 
                  title: 'Classic Cut', 
                  desc: 'Timeless styles executed with modern precision for a clean, professional look.',
                  icon: <Award className="text-primary" size={32} aria-hidden="true" />
                },
                { 
                  title: 'Beard Sculpt', 
                  desc: 'Professional beard shaping, lining, and conditioning for the perfect finish.',
                  icon: <Star className="text-primary" size={32} aria-hidden="true" />
                },
              ].map((service, idx) => (
                <article key={idx} className="luxury-card group">
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-primary/10">
                    <a href="#contact" className="text-xs font-black tracking-widest uppercase border-b border-primary pb-1 hover:text-white transition-colors">INQUIRE</a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-16 text-center">
              <a href="tel:+61406713336" className="btn-primary">CALL FOR INQUIRIES</a>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="mb-4 text-4xl md:text-6xl font-bold">THE <span className="text-primary">LOOKBOOK</span></h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-400 tracking-widest uppercase text-sm">Mastery in every detail</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, idx) => (
                <figure key={idx} className="relative aspect-[3/4] overflow-hidden group border border-primary/10">
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1} - Empire Fades barbershop work`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden" aria-label="Call to action">
          <div className="absolute inset-0 z-0">
            <img src="/assets/images&logo/image1.png" alt="" className="w-full h-full object-cover opacity-30 grayscale" aria-hidden="true" />
            <div className="absolute inset-0 bg-black/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="mb-8 text-4xl md:text-6xl font-bold">EXPERIENCE THE <span className="text-primary">EMPIRE</span></h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Walk-ins are welcome, but we recommend calling ahead to ensure your spot with our master barbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+61406713336" className="btn-primary">CALL LIVERPOOL SHOP</a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">GET DIRECTIONS</a>
            </div>
          </div>
        </section>

        {/* Google Review Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <a 
              href={googleReviewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-300"
              aria-label="Leave us a Google Review"
            >
              <img 
                src="/assets/images&logo/reviewa.png" 
                alt="Leave us a Google Review" 
                className="max-w-[300px] md:max-w-[400px] mx-auto rounded-lg shadow-xl"
              />
            </a>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contact" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-4xl md:text-6xl font-bold">VISIT <span className="text-primary">US</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="w-20 h-1 bg-primary mb-12"></div>
                
                <div className="space-y-12">
                  <address className="flex gap-6 not-italic">
                    <div className="w-16 h-16 shrink-0 border border-primary/30 flex items-center justify-center text-primary">
                      <MapPin size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-widest mb-2">LOCATION</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Westfield Liverpool<br/>
                        Shop 219/263 Elizabeth St<br/>
                        Liverpool NSW 2170<br/>
                        Australia
                      </p>
                    </div>
                  </address>

                  <div className="flex gap-6">
                    <div className="w-16 h-16 shrink-0 border border-primary/30 flex items-center justify-center text-primary">
                      <Clock size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-widest mb-2">HOURS</h3>
                      <dl className="grid grid-cols-2 gap-x-8 text-gray-400 text-sm">
                        <dt>Monday:</dt> <dd>9:00 AM - 5:30 PM</dd>
                        <dt>Tuesday:</dt> <dd>9:00 AM - 5:30 PM</dd>
                        <dt>Wednesday:</dt> <dd>9:00 AM - 5:30 PM</dd>
                        <dt>Thursday:</dt> <dd>9:00 AM - 9:00 PM</dd>
                        <dt>Friday:</dt> <dd>9:00 AM - 5:30 PM</dd>
                        <dt>Saturday:</dt> <dd>9:00 AM - 5:00 PM</dd>
                        <dt>Sunday:</dt> <dd>9:30 AM - 5:00 PM</dd>
                      </dl>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-16 h-16 shrink-0 border border-primary/30 flex items-center justify-center text-primary">
                      <Phone size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-widest mb-2">CONTACT</h3>
                      <p className="text-gray-400 text-lg"><a href="tel:+61406713336" className="hover:text-primary transition-colors">+61 406 713 336</a></p>
                      <p className="text-gray-400 text-lg"><a href="mailto:Empirefadesliverpool@gmail.com" className="hover:text-primary transition-colors">Empirefadesliverpool@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex gap-6">
                  <a href="https://www.instagram.com/empirefadesliverpool/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="w-12 h-12 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              
              <div className="h-[600px] border border-primary/20 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative group">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="btn-primary">VIEW ON GOOGLE MAPS</span>
                </a>
                <img 
                  src="/assets/images&logo/image1.png" 
                  alt="Westfield Liverpool Location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-black/80 p-6 border-l-4 border-primary backdrop-blur-sm">
                  <p className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">Westfield Liverpool</p>
                  <p className="text-white text-lg">Shop 219/263 Elizabeth St</p>
                  <p className="text-gray-400">Liverpool NSW 2170</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-primary/10" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/assets/images&logo/empirelogo.png" 
            alt="Empire Fades Logo" 
            className="w-24 h-24 mx-auto mb-8 object-contain"
          />
          <h3 className="text-2xl font-black tracking-widest text-primary mb-4" style={{ fontFamily: 'var(--font-display)' }}>EMPIRE FADES</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-12">
            The premier luxury grooming destination in Westfield Liverpool. Mastery, precision, and the empire standard in every cut.
          </p>
          <nav className="flex justify-center gap-8 mb-12" aria-label="Footer navigation">
            <a href="#about" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="pt-8 border-t border-white/5 text-[10px] text-gray-600 tracking-[0.3em] uppercase">
            &copy; 2026 Empire Fades. All rights reserved. | Crafted for the elite.
          </div>
        </div>
      </footer>
    </div>
  );
}
