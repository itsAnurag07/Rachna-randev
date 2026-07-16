import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './index.css';

function App() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "WHEN IS THE BEST TIME TO BOOK OUR PHOTOGRAPHER?",
      answer: "We recommend booking 9-12 months in advance, especially for popular dates."
    },
    {
      question: "ARE THE TRAVEL EXPENSES FULLY INCLUDED IN YOUR PACKAGES?",
      answer: "Travel within a 50-mile radius is included. For destination weddings and further locations, custom travel quotes will be provided."
    },
    {
      question: "HOW LONG DOES IT TYPICALLY TAKE TO RECEIVE OUR PHOTOS?",
      answer: "You will receive a curated sneak peek within 48 hours of your wedding. The full, high-resolution gallery will be delivered within 6 to 8 weeks."
    },
    {
      question: "DO YOU HAVE ANY PREFERRED VENDORS YOU WORK WITH?",
      answer: "Yes! Upon booking, I share an exclusive vendor guide featuring talented florists, planners, and makeup artists."
    }
  ];

  return (
    <div className="app-wrapper">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>

          <div className="nav-logo">
            <img src="/images/logo.png" alt="Rachna Logo" className="nav-logo-img" />
          </div>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Static Image Hero Section */}
      <section className="video-hero">
        <img
          className="video-hero-bg"
          src="/images/Hero_1.jpg"
          alt="Hero Background"
        />
        <div className="hero-overlay-text">
          Photography by Rachna randev
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ maxWidth: '1600px' }}>
          <div className="hero-title-area text-center">
            <h1 className="heading-medium hero-title" style={{ marginBottom: '1.5rem', marginTop: '5rem' }}>Romantic & Artful</h1>
            <div className="hero-location">New York & Destination</div>
          </div>

          <div className="hero-collage">
            <div className="hero-col hero-col-1">
              <img src="/images/hero.png" alt="Detail" className="img-portrait" />
            </div>
            <div className="hero-col hero-col-2">
              <img src="/images/lovestory.png" alt="Detail" className="img-square" />
              <img src="/images/venue.png" alt="Detail" className="img-landscape" />
            </div>
            <div className="hero-col hero-col-3">
              <img src="/images/hero.png" alt="Couple" className="img-tall" />
            </div>
            <div className="hero-col hero-col-4">
              <img src="/images/venue.png" alt="Detail" className="img-landscape" />
              <img src="/images/ceremony.png" alt="Detail" className="img-square" />
            </div>
            <div className="hero-col hero-col-5">
              <img src="/images/lovestory.png" alt="Detail" className="img-portrait" />
            </div>
          </div>

          <div className="text-center">
            <p className="hero-paragraph">
              PASSIONATE, PURPOSEFUL AND EMOTION-DRIVEN PHOTOGRAPHY WITH A FINE-ART EDITORIAL APPROACH. BEAUTIFULLY DOCUMENTING LOVE WITH AN AUTHENTIC AND ARTISTIC APPROACH, DELIVERING HEIRLOOM IMAGERY THAT IS ELEGANT, ROMANTIC AND JOYFUL. CELEBRATION WITH ELEGANCE.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="services-container">

        {/* Weddings */}
        <div className="service-row">
          <div className="service-text">
            <h2 className="heading-medium">Weddings</h2>
            <p className="service-description">
              It's an honor to capture your love as it unfolds on one of the most meaningful days of your life. Blending documentary moments with artful composition, I create timeless images that reflect your connection and the true feeling of the day.
            </p>
          </div>
          <div className="service-images">
            <div className="carousel-btn btn-left"><ChevronLeft size={20} strokeWidth={1} /></div>
            <div className="service-img-wrapper"><img src="/images/hero.png" alt="Wedding" /></div>
            <div className="service-img-wrapper"><img src="/images/ceremony.png" alt="Wedding" /></div>
            <div className="service-img-wrapper"><img src="/images/venue.png" alt="Wedding" /></div>
            <div className="carousel-btn btn-right"><ChevronRight size={20} strokeWidth={1} /></div>
          </div>
        </div>

        {/* Venues */}
        <div className="service-row reverse">
          <div className="service-text">
            <h2 className="heading-medium text-center" style={{ textAlign: 'right' }}>Venues</h2>
            <p className="service-description" style={{ textAlign: 'right' }}>
              I partner with venues and vendors to create elegant, story-driven imagery, highlighting the space, details, and atmosphere. Thoughtfully composed and marketing-ready, each image is crafted to showcase what makes your venue special.
            </p>
          </div>
          <div className="service-images">
            <div className="carousel-btn btn-left"><ChevronLeft size={20} strokeWidth={1} /></div>
            <div className="service-img-wrapper"><img src="/images/venue.png" alt="Venue" /></div>
            <div className="service-img-wrapper"><img src="/images/ceremony.png" alt="Venue" /></div>
            <div className="service-img-wrapper"><img src="/images/lovestory.png" alt="Venue" /></div>
            <div className="carousel-btn btn-right"><ChevronRight size={20} strokeWidth={1} /></div>
          </div>
        </div>

        {/* Love Stories */}
        <div className="service-row">
          <div className="service-text">
            <h2 className="heading-medium">Love Stories</h2>
            <p className="service-description">
              From quiet glances to bold laughter, I capture love stories and engagements with care and intention. Set in nature or meaningful places, these sessions reflect your connection through timeless imagery that feels as genuine as the love you share.
            </p>
          </div>
          <div className="service-images">
            <div className="carousel-btn btn-left"><ChevronLeft size={20} strokeWidth={1} /></div>
            <div className="service-img-wrapper"><img src="/images/lovestory.png" alt="Love Story" /></div>
            <div className="service-img-wrapper"><img src="/images/hero.png" alt="Love Story" /></div>
            <div className="service-img-wrapper"><img src="/images/lovestory.png" alt="Love Story" /></div>
            <div className="carousel-btn btn-right"><ChevronRight size={20} strokeWidth={1} /></div>
          </div>
        </div>

      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="heading-medium text-center faq-title">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{activeFaq === index ? '^' : 'v'}</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-card">
          <h2 className="heading-medium contact-title">Let's document your story  </h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="NAME *" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="EMAIL ADDRESS *" required />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="SUBJECT *" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="YOUR MESSAGE" rows="3"></textarea>
            </div>
            <button type="submit" className="btn-submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container footer">
        <div className="footer-logo">RACHNA</div>
        <div className="footer-socials">
          <a href="#">F</a>
          <a href="#">Y</a>
          <a href="#">P</a>
          <a href="#">B</a>
          <a href="#">IN</a>
        </div>
        <div className="footer-top"><a href="#">^</a></div>
      </footer>
    </div>
  )
}

export default App
