import React from 'react';
import { Link } from 'react-router-dom';

// ─── Per-category data ───────────────────────────────────────────────────────
const categoryData = {
  ethereal: {
    title: 'Ethereal',
    heroLeft: '/images/ethereal_1.png',
    heroRight: '/images/ethereal_2.png',
    featuredLeft: '/images/light_1.png',
    featuredRight: '/images/light_2.png',
    gallery: [
      '/images/light_2.png',
      '/images/connect_center.png',
      '/images/about_img2.jpg',
      '/images/silk.png',
      '/images/light_1.png',
      '/images/about_philosophy.png',
    ],
  },
  cinematic: {
    title: 'Cinematic',
    heroLeft: '/images/cinematic_1.png',
    heroRight: '/images/cinematic_2.png',
    featuredLeft: '/images/about_img.jpg',
    featuredRight: '/images/hero.png',
    gallery: [
      '/images/connect_left.png',
      '/images/hero.png',
      '/images/Hero_1.jpg',
      '/images/connect_right.png',
      '/images/venue.png',
      '/images/ceremony.png',
    ],
  },
  happiness: {
    title: 'Happiness',
    heroLeft: '/images/happiness_1.png',
    heroRight: '/images/lovestory.png',
    featuredLeft: '/images/venue.png',
    featuredRight: '/images/ceremony.png',
    gallery: [
      '/images/ceremony.png',
      '/images/connect_right.png',
      '/images/Hero_1.jpg',
      '/images/venue.png',
      '/images/connect_left.png',
      '/images/happiness_1.png',
    ],
  },
  timeless: {
    title: 'Timeless',
    heroLeft: '/images/timeless_1.png',
    heroRight: '/images/light_3.png',
    featuredLeft: '/images/silk.png',
    featuredRight: '/images/about_img2.jpg',
    gallery: [
      '/images/light_1.png',
      '/images/connect_right.png',
      '/images/silk.png',
      '/images/about_img.jpg',
      '/images/light_2.png',
      '/images/timeless_1.png',
    ],
  },
};

// ─── Floral SVG ──────────────────────────────────────────────────────────────
function FloralIcon() {
  return (
    <svg style={{ transform: 'translateY(-20px)' }} viewBox="0 0 80 110" width="100" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 100 C40 100 40 50 40 20" stroke="#aaa" strokeWidth="0.8" />
      <ellipse cx="40" cy="30" rx="8" ry="14" stroke="#aaa" strokeWidth="0.8" fill="none" />
      <ellipse cx="27" cy="38" rx="7" ry="12" stroke="#aaa" strokeWidth="0.8" fill="none" transform="rotate(-25 27 38)" />
      <ellipse cx="53" cy="38" rx="7" ry="12" stroke="#aaa" strokeWidth="0.8" fill="none" transform="rotate(25 53 38)" />
      <ellipse cx="22" cy="52" rx="6" ry="10" stroke="#aaa" strokeWidth="0.8" fill="none" transform="rotate(-45 22 52)" />
      <ellipse cx="58" cy="52" rx="6" ry="10" stroke="#aaa" strokeWidth="0.8" fill="none" transform="rotate(45 58 52)" />
      <path d="M34 70 Q30 80 28 90" stroke="#aaa" strokeWidth="0.8" />
      <path d="M46 70 Q50 80 52 90" stroke="#aaa" strokeWidth="0.8" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function PortfolioCategory({ category }) {
  const data = categoryData[category];
  if (!data) return null;

  const otherCategories = Object.keys(categoryData).filter(c => c !== category);

  return (
    <div className="portfolio-page bg-white min-h-screen">
      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="portfolio-hero" data-purpose="portfolio-hero">
        {/* Left flanking image */}
        <div className="portfolio-hero-side portfolio-hero-left">
          <img src={data.heroLeft} alt={`${data.title} left`} className="portfolio-hero-img" />
        </div>

        {/* Center: icon + title */}
        <div className="portfolio-hero-center">
          <FloralIcon />
          <h1 className="portfolio-hero-title">{data.title.toUpperCase()}</h1>
          <p className="portfolio-hero-sub">scroll for more</p>
        </div>

        {/* Right flanking image */}
        <div className="portfolio-hero-side portfolio-hero-right">
          <img src={data.heroRight} alt={`${data.title} right`} className="portfolio-hero-img" />
        </div>
      </section>

      {/* ── Masonry Gallery ───────────────────────────────────────── */}
      <section className="portfolio-masonry" data-purpose="portfolio-masonry">
        {[data.featuredLeft, data.featuredRight, ...data.gallery].map((src, i) => (
          <div key={i} className="portfolio-masonry-item">
            <img src={src} alt={`${data.title} ${i + 1}`} className="portfolio-masonry-img" />
          </div>
        ))}
      </section>



      {/* ── Other Categories ───────────────────────────────────── */}
      <section className="portfolio-other-cats" data-purpose="portfolio-other-categories">
        <p className="portfolio-other-label caps-heading">Explore More</p>
        <div className="portfolio-other-links">
          {otherCategories.map(cat => (
            <Link key={cat} to={`/portfolio/${cat}`} className="portfolio-other-link">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PortfolioCategory;
