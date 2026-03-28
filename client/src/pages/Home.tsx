import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

/**
 * Stacked AU - Premium Burgers & Sandwiches
 * Design Philosophy: Bold, energetic, food-focused
 * Colors: Vibrant red (#E63946) with dark accents
 * Typography: Playfair Display for headlines, Poppins for body
 * Layout: Hero carousel → Product showcase → Call-to-action → Social proof → Footer
 */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663373970120/6VNrgPEST6ucjuAvWfhnPh/burger-hero_72d5e693.jpg',
      alt: 'Premium Stacked Burger',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663373970120/6VNrgPEST6ucjuAvWfhnPh/burger-showcase_7e925497.jpg',
      alt: 'Gourmet Burger Showcase',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663373970120/6VNrgPEST6ucjuAvWfhnPh/sandwich-detail_c2188de8.jpg',
      alt: 'Artisanal Sandwich',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              STACKED AU
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-primary text-sm">ORDER NOW</button>
            <button className="text-foreground hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="hero-section pt-24 bg-gradient-to-b from-gray-900 to-gray-800 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {heroImages.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.alt}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                  idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-5 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            STACKED AU
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Premium Burgers & Sandwiches</p>
          <button className="btn-primary">EXPLORE MENU</button>
        </div>
      </section>

      {/* Our Food Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663373970120/6VNrgPEST6ucjuAvWfhnPh/burger-showcase_7e925497.jpg"
                alt="Our Premium Burgers"
                className="food-card w-full"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                OUR FOOD
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Crafted with passion and premium ingredients, every burger and sandwich is a masterpiece. We source only the finest quality meats, fresh produce, and artisanal breads to deliver an unforgettable culinary experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">100% Premium Beef</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Fresh Local Produce</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Artisanal Breads</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">House-Made Sauces</span>
                </li>
              </ul>
              <button className="btn-primary">VIEW FULL MENU</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-display)' }}>
            WHY CHOOSE STACKED AU
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Premium Quality', desc: 'Hand-selected ingredients sourced from trusted suppliers' },
              { title: 'Expert Craftsmanship', desc: 'Prepared by experienced chefs with passion for flavor' },
              { title: 'Fast Delivery', desc: 'Hot, fresh meals delivered quickly to your door' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            FEATURED FAVORITES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'The Stacked Classic', price: '$18.99', desc: 'Double beef patty, aged cheddar, caramelized onions' },
              { name: 'The Aussie Stack', price: '$19.99', desc: 'Beef patty, beetroot, fried egg, bacon, special sauce' },
              { name: 'The Gourmet Chicken', price: '$17.99', desc: 'Crispy chicken breast, Swiss cheese, fresh greens' },
            ].map((product, idx) => (
              <div key={idx} className="food-card bg-white">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-6xl">🍔</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <button className="btn-primary text-sm">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            READY TO STACK?
          </h2>
          <p className="text-xl mb-8 text-white/90">Order now and experience premium burgers delivered fresh to your door</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">ORDER ONLINE</button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide transition-colors duration-200 border-2 border-white">
              FIND US
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            GET IN TOUCH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">(02) 1234 5678</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">Sydney, NSW, Australia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">hello@stackedau.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">STACKED AU</h3>
              <p className="text-gray-400">Premium burgers and sandwiches crafted with passion.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mon-Thu: 11am - 10pm</li>
                <li>Fri-Sat: 11am - 11pm</li>
                <li>Sun: 12pm - 9pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Stacked AU. All rights reserved. | Crafted with passion for great food.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
