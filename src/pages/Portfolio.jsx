import React, { useState } from 'react';

const portfolioImages = [
  { id: 1, src: '/images/ethereal_1.png', category: 'Ethereal', alt: 'Ethereal bride in forest' },
  { id: 2, src: '/images/cinematic_1.png', category: 'Cinematic', alt: 'Cinematic couple in city' },
  { id: 3, src: '/images/happiness_1.png', category: 'Happiness', alt: 'Joyful wedding toast' },
  { id: 4, src: '/images/hero.png', category: 'Cinematic', alt: 'Moody beach portrait' },
  { id: 5, src: '/images/light_1.png', category: 'Timeless', alt: 'Minimalist airy linen setting' },
  { id: 6, src: '/images/timeless_1.png', category: 'Timeless', alt: 'Classic black and white couple' },
  { id: 7, src: '/images/lovestory.png', category: 'Happiness', alt: 'Couple walking in sun' },
  { id: 8, src: '/images/ceremony.png', category: 'Happiness', alt: 'Joyful ceremony moment' },
  { id: 9, src: '/images/light_2.png', category: 'Ethereal', alt: 'Ceramic vase with pampas grass' },
  { id: 10, src: '/images/connect_left.png', category: 'Cinematic', alt: 'Couple dancing black and white' },
  { id: 11, src: '/images/connect_center.png', category: 'Ethereal', alt: 'Bride walking from behind' },
  { id: 12, src: '/images/light_3.png', category: 'Timeless', alt: 'Delicate white dried botanicals' }
];

const categories = ['All', 'Ethereal', 'Cinematic', 'Happiness', 'Timeless'];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-earthy-white text-gray-800 antialiased min-h-screen">
      {/* Header Section */}
      <header className="pt-24 pb-12 text-center" data-purpose="portfolio-header">
        <span className="caps-heading block mb-4 text-gray-500">The Collections</span>
        <h1 className="hero-heading text-5xl lg:text-6xl mb-8">Portfolio</h1>
        <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto italic px-6">
          A curated selection of moments, woven together to tell a story of authentic connection and timeless beauty.
        </p>
      </header>

      {/* Filter Tabs */}
      <section className="pb-16 px-6" data-purpose="portfolio-filters">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 lg:gap-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-widest text-xs font-semibold pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === cat
                  ? 'border-gray-800 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="px-6 lg:px-12 pb-32" data-purpose="portfolio-gallery">
        <div className="max-w-[1400px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="break-inside-avoid relative group overflow-hidden shadow-soft cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white uppercase tracking-[0.2em] text-xs font-light">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        {filteredImages.length === 0 && (
          <p className="text-center text-gray-500 py-20 font-serif italic">
            No images found for this category.
          </p>
        )}
      </section>
    </div>
  );
}

export default Portfolio;
