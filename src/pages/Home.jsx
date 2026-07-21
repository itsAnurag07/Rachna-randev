import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const GRAPHQL_URL = 'https://lavenderblush-kudu-408789.hostingersite.com/graphql';
const HERO_VIDEO_ID = 'cG9zdDo1ODM=';

function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [heroVideoUrl, setHeroVideoUrl] = useState(null);

  useEffect(() => {
    fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query { mediaItem(id: "${HERO_VIDEO_ID}") { mediaItemUrl } }`
      }),
    })
      .then(res => res.json())
      .then(data => {
        const url = data?.data?.mediaItem?.mediaItemUrl;
        if (url) setHeroVideoUrl(url);
      })
      .catch(() => { });
  }, []);

  const couplesScrollRef = useRef(null);
  const familyScrollRef = useRef(null);
  const celebrationsScrollRef = useRef(null);

  const scrollCouplesLeft = () => {
    if (couplesScrollRef.current) {
      couplesScrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollCouplesRight = () => {
    if (couplesScrollRef.current) {
      couplesScrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const scrollFamilyLeft = () => {
    if (familyScrollRef.current) {
      familyScrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollFamilyRight = () => {
    if (familyScrollRef.current) {
      familyScrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const scrollCelebrationsLeft = () => {
    if (celebrationsScrollRef.current) {
      celebrationsScrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollCelebrationsRight = () => {
    if (celebrationsScrollRef.current) {
      celebrationsScrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const handleCtaClick = (e, targetUrl) => {
    e.preventDefault();
    const cta = e.currentTarget;
    cta.classList.add('clicked');
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 600);
  };

  const couplesImages = [
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/C12-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/C16-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/S20-scaled.jpg",


    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Gaby-4Gaby.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Tara-21.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Tara-8.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Ovi-6.jpg",
  ];

  const familyImages = [



    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Michelle-mom-and-me-1-HI-REZ-1-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/C23-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Isabel-10-1-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/M31.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Sally-29-scaled.jpg",

    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Trish-29-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/E10-scaled.jpg",

  ];


  const Celebrations = [
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Siri-2Siri-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Keiko-5-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/BTS-Shot-3-1-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/M-18-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Ovi-6-scaled.jpg",
    "https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Trish-Final-521-scaled.jpg"
  ];


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
    <>
      {/* Video Hero Section */}
      <section className="video-hero">
        {heroVideoUrl ? (
          <video
            className="video-hero-bg"
            src={heroVideoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="video-hero-bg"
            src="/images/"
            alt="Hero Background"
          />
        )}

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
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Bianca-4.jpg" alt="Detail" className="img-portrait" />
            </div>
            <div className="hero-col hero-col-2">
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Trish-18.jpg" alt="Detail" className="img-square" />
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/M18.jpg" alt="Detail" className="img-landscape" />
            </div>
            <div className="hero-col hero-col-3">
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Bianca-12-1.jpg" alt="Couple" className="img-tall" />
            </div>
            <div className="hero-col hero-col-4">
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Aniv-7.jpg" alt="Detail" className="img-landscape" />
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Michelle-mom-and-me-1-HI-REZ.jpg" alt="Detail" className="img-square" />
            </div>
            <div className="hero-col hero-col-5">
              <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Soo-5.jpg" alt="Detail" className="img-portrait" />
            </div>
          </div>

          <div className="text-center">
            <p className="hero-paragraph">
              PASSIONATE, PURPOSEFUL AND EMOTION-DRIVEN PHOTOGRAPHY WITH A FINE-ART EDITORIAL APPROACH. BEAUTIFULLY DOCUMENTING LOVE WITH AN AUTHENTIC AND ARTISTIC APPROACH, DELIVERING HEIRLOOM IMAGERY THAT IS ELEGANT, ROMANTIC AND JOYFUL. CELEBRATION WITH ELEGANCE.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}


      {/* Services Sections */}
      <section className="services-container" id="services">

        {/* POrtraits */}
        <div className="service-row">
          <div className="service-text">
            <h2 className="heading-medium">Potraits</h2>
            <p className="service-description">
              It's an honor to capture your love as it unfolds on one of the most meaningful days of your life. Blending documentary moments with artful composition, I create timeless images that reflect your connection and the true feeling of the day.
            </p>
            <a href="/contact" className="service-cta" onClick={(e) => handleCtaClick(e, '/contact')}>
              <span>Book a Portrait Session &rarr;</span>
            </a>
          </div>
          <div className="service-images-container" style={{ flex: 2, position: 'relative', display: 'flex' }}>
            <div
              className="service-images-scroll"
              ref={couplesScrollRef}
              style={{
                display: 'flex',
                gap: '0.7rem',
                overflowX: 'hidden',
                scrollBehavior: 'smooth',
                width: '100%'
              }}
            >
              {couplesImages.map((img, idx) => (
                <div className="service-img-wrapper" key={idx} style={{ flex: '0 0 calc(33.333% - 0.47rem)' }}>
                  <img src={img} alt={`Couple ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div className="carousel-btn btn-left" onClick={scrollCouplesLeft} style={{ zIndex: 20, cursor: 'pointer' }}><ChevronLeft size={20} strokeWidth={1} /></div>
            <div className="carousel-btn btn-right" onClick={scrollCouplesRight} style={{ zIndex: 20, cursor: 'pointer' }}><ChevronRight size={20} strokeWidth={1} /></div>
          </div>
        </div>

        {/* Family */}
        <div className="service-row reverse">
          <div className="service-text">
            <h2 className="heading-medium text-center" style={{ textAlign: 'right' }}>Family</h2>
            <p className="service-description" style={{ textAlign: 'right' }}>
              I partner with venues and vendors to create elegant, story-driven imagery, highlighting the space, details, and atmosphere. Thoughtfully composed and marketing-ready, each image is crafted to showcase what makes your venue special.
            </p>
            <a href="/contact" className="service-cta" style={{ alignSelf: 'flex-end' }} onClick={(e) => handleCtaClick(e, '/contact')}>
              <span>Book Family Session &rarr;</span>
            </a>
          </div>
          <div className="service-images-container" style={{ flex: 2, position: 'relative', display: 'flex' }}>
            <div
              className="service-images-scroll"
              ref={familyScrollRef}
              style={{
                display: 'flex',
                gap: '0.7rem',
                overflowX: 'hidden',
                scrollBehavior: 'smooth',
                width: '100%'
              }}
            >
              {familyImages.map((img, idx) => (
                <div className="service-img-wrapper" key={idx} style={{ flex: '0 0 calc(33.333% - 0.47rem)' }}>
                  <img src={img} alt={`Family ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div className="carousel-btn btn-left" onClick={scrollFamilyLeft} style={{ zIndex: 20, cursor: 'pointer' }}><ChevronLeft size={20} strokeWidth={1} /></div>
            <div className="carousel-btn btn-right" onClick={scrollFamilyRight} style={{ zIndex: 20, cursor: 'pointer' }}><ChevronRight size={20} strokeWidth={1} /></div>
          </div>
        </div>

        {/* Love Stories */}
        <div className="service-row">
          <div className="service-text">
            <h2 className="heading-medium">CELEBRATIONS</h2>
            <p className="service-description">
              From quiet glances to bold laughter, I capture love stories and engagements with care and intention. Set in nature or meaningful places, these sessions reflect your connection through timeless imagery that feels as genuine as the love you share.
            </p>
            <a href="/contact" className="service-cta" onClick={(e) => handleCtaClick(e, '/contact')}>
              <span>Reach out to us &rarr;</span>
            </a>
          </div>
          <div className="service-images-container" style={{ flex: 2, position: 'relative', display: 'flex' }} id="portfolio">
            <div
              className="service-images-scroll"
              ref={celebrationsScrollRef}
              style={{
                display: 'flex',
                gap: '0.7rem',
                overflowX: 'hidden',
                scrollBehavior: 'smooth',
                width: '100%'
              }}
            >
              {Celebrations.map((img, idx) => (
                <div className="service-img-wrapper" key={idx} style={{ flex: '0 0 calc(33.333% - 0.47rem)' }}>
                  <img src={img} alt={`Celebration ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div className="carousel-btn btn-left" onClick={scrollCelebrationsLeft} style={{ zIndex: 20, cursor: 'pointer' }}><ChevronLeft size={20} strokeWidth={1} /></div>
            <div className="carousel-btn btn-right" onClick={scrollCelebrationsRight} style={{ zIndex: 20, cursor: 'pointer' }}><ChevronRight size={20} strokeWidth={1} /></div>
          </div>
        </div>

      </section>




      {/* Welcome Section */}
      {/* Welcome Section */}
      <section className="bg-[#F7F5F2] py-12">
        <div className="max-w-[1200px] mx-auto px-3">

          <div className="grid lg:grid-cols-2 items-center gap-[15px]">

            {/* Left Content */}
            <div className="bg-[#ECEDE5] h-[700px] flex items-center justify-center">

              <div className="max-w-[500px] px-8 py-10">

                <p className="uppercase tracking-[0.28em] text-[10px] text-[#444] mb-4">
                  Helping Brands Since 2019
                </p>

                <h2
                  className="text-[25px] leading-[1.3] font-light text-[#17273C] mb-5"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  Welcome to <br />
                  Rachna
                  Photography
                </h2>

                <p className="text-[15px] leading-6 text-[#555] mb-8">
                  I'm Rachna, a photographer who finds beauty in the
                  simplicity of life. My focus is on commercial and editorial
                  photography, bringing a gentle, magazine-like quality to
                  brand photos, product shots, and portraits. With a love for
                  nature, earthy tones, and minimalism, I enjoy working with
                  brands that align with my values. If this is you, let's create
                  something beautiful together.
                </p>

                <a
                  href="/about"
                  className="uppercase tracking-[0.35em] text-[12px] font-semibold border-b border-black pb-2"
                >
                  Read More
                </a>

              </div>

            </div>

            {/* Right Image */}

            <div className="flex justify-center">

              <div className="w-[550px] h-[700px] rounded-[270px] overflow-hidden">

                <img
                  src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/PortraitsBySudha-Rachna-1-2-scaled.jpg"
                  alt="Rachna"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

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
      <section className="contact-section" id="contact">
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
    </>
  );
}

export default Home;
