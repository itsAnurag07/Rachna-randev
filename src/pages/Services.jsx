import React from 'react';

const services = [
  {
    id: 'la-femme',
    num: '01',
    label: 'La Femme Experience',
    category: "Women's Portraits",
    tagline: 'Her story, celebrated.',
    description: "A love letter to the woman in her season — her strength, her softness, every chapter worth marking in gold. This is where she stops waiting for the right moment and becomes it.",
    includes: ['Empowerment portraits', 'Celebration portraits'],
    image: 'https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Shiri-42-scaled.jpg',
    reverse: false,
  },
  {
    id: 'family-table',
    num: '02',
    label: 'The Family Table Experience',
    category: 'Family Portraits',
    tagline: 'Every season, gathered.',
    description: "The years that shape a family, held in a single frame — first breaths, graduation walks, the fleeting teenage years, and the tender everyday between a mother and her child. Because the ordinary days are the ones you will ache to remember.",
    includes: ['Newborns', 'Graduates — elementary, middle, and high school', 'Teens', 'Mom-and-me sessions', 'Multi-generational gatherings'],
    image: 'https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Yasmin-13-scaled.jpg',
    reverse: true,
  },
  {
    id: 'signature-professional',
    num: '03',
    label: 'The Signature Professional Experience',
    category: null,
    tagline: 'Presence, polished.',
    description: "Confidence, captured. For the woman building an empire, and the professional ready to be seen exactly as she leads — with ambition and confidence, aligned with her vision, unmistakably herself.",
    includes: ['Personal branding sessions', 'Executive headshots'],
    image: 'https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/BTS-Shot-3-scaled.jpg',
    reverse: false,
  },
  {
    id: 'milestone',
    num: '04',
    label: 'The Milestone Experience',
    category: null,
    tagline: 'The moments that mark us.',
    description: "Some birthdays are not simply birthdays — they are arrivals. Some graduations are not endings, but a door swinging open. These are the thresholds of a life, and they deserve more than a phone photo. They deserve to be honored.",
    includes: ['Milestone birthdays — 16, 30, 40, 50 and beyond', 'High school graduation', 'Middle school graduation', 'First and last days, anniversaries, and personal triumphs'],
    image: 'https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Keiko-7-scaled.jpg',
    reverse: true,
  },
];

const sectionBg = ['#F8F7F3', '#ECEDE5', '#F8F7F3', '#ECEDE5'];

function Services() {
  return (
    <div style={{ backgroundColor: '#F8F7F3', color: '#2c2c2c' }}>

      {/* PAGE HEADER */}
      <header style={{ position: 'relative', paddingTop: '10rem', paddingBottom: '5rem', textAlign: 'center', overflow: 'hidden' }}>
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -45%)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(100px, 18vw, 200px)', color: '#17273C', opacity: 0.03, whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
          Experiences
        </span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B4A292', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '1px', backgroundColor: '#B4A292' }} />
            Services Offerings
            <span style={{ display: 'inline-block', width: '40px', height: '1px', backgroundColor: '#B4A292' }} />
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 300, lineHeight: 1.15, color: '#17273C', letterSpacing: '0.01em', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            Curated experiences,<br /><em>served with intention.</em>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ width: '80px', height: '1px', backgroundColor: '#d8d4cc' }} />
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#B4A292' }} />
            <div style={{ width: '80px', height: '1px', backgroundColor: '#d8d4cc' }} />
          </div>
        </div>
      </header>

      {/* SERVICE SECTIONS */}
      <main>
        {services.map((svc, i) => (
          <section key={svc.id} id={svc.id} style={{ display: 'flex', minHeight: '90vh', backgroundColor: sectionBg[i] }}>

            {/* Vertical Side Label */}
            <div style={{ flex: '0 0 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', borderRight: svc.reverse ? 'none' : '1px solid #e0ddd5', borderLeft: svc.reverse ? '1px solid #e0ddd5' : 'none', order: svc.reverse ? 3 : 1, backgroundColor: sectionBg[i] }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#B4A292', writingMode: 'vertical-rl', transform: svc.reverse ? 'rotate(0deg)' : 'rotate(180deg)' }}>
                {svc.num}
              </span>
              <div style={{ width: '1px', height: '50px', backgroundColor: '#d0ccc5' }} />
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', writingMode: 'vertical-rl', transform: svc.reverse ? 'rotate(0deg)' : 'rotate(180deg)', whiteSpace: 'nowrap' }}>
                {svc.label}
              </span>
            </div>

            {/* Full-Height Image */}
            <div style={{ flex: '0 0 55%', position: 'relative', overflow: 'hidden', order: 2 }}>
              <img
                src={svc.image}
                alt={svc.label}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(18%) sepia(6%) brightness(0.95)', transition: 'transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: svc.reverse ? 'linear-gradient(to left, rgba(248,247,243,0.18) 0%, transparent 35%)' : 'linear-gradient(to right, rgba(248,247,243,0.18) 0%, transparent 35%)', pointerEvents: 'none' }} />
            </div>

            {/* Content Panel */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', padding: 'clamp(3rem, 5vw, 5rem) clamp(2.5rem, 4vw, 4.5rem)', order: svc.reverse ? 1 : 3, overflow: 'hidden' }}>

              {/* Giant watermark chapter number */}
              <span style={{ position: 'absolute', bottom: '-1.5rem', right: '-0.5rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(120px, 14vw, 200px)', color: '#17273C', opacity: 0.035, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                {svc.num}
              </span>

              <div style={{ position: 'relative', zIndex: 1, maxWidth: '420px', width: '100%' }}>

                {/* Label */}
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#B4A292', marginBottom: '0.5rem' }}>
                  {svc.label}
                </p>

                {/* Category */}
                {svc.category && (
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', letterSpacing: '0.1em', color: '#17273C', marginBottom: '1.5rem' }}>
                    — {svc.category}
                  </p>
                )}

                {/* Tagline */}
                <h2 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.2, color: '#17273C', marginBottom: '2rem' }}>
                  {svc.tagline}
                </h2>

                {/* Accent line with dot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ width: '36px', height: '1px', backgroundColor: '#B4A292' }} />
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#B4A292', opacity: 0.6 }} />
                </div>

                {/* Description */}
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.875rem', lineHeight: 1.95, color: '#666', letterSpacing: '0.02em', marginBottom: '2rem' }}>
                  {svc.description}
                </p>

                {/* Includes */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '8px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#999', marginBottom: '0.75rem' }}>
                    Includes
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {svc.includes.map((item, j) => (
                      <li key={j} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '11px', letterSpacing: '0.05em', lineHeight: 1.9, color: '#555', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#B4A292', flexShrink: 0, fontSize: '13px', lineHeight: 1.6 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#2c2c2c', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.4'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  Book This Experience
                  <svg width="28" height="1" viewBox="0 0 28 1"><line x1="0" y1="0.5" x2="28" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg>
                </a>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* CLOSING CTA */}
      <section style={{ position: 'relative', backgroundColor: '#ECEDE5', padding: 'clamp(5rem, 10vw, 8rem) 1.5rem', textAlign: 'center', overflow: 'hidden' }}>
        <span style={{ position: 'absolute', bottom: '-2rem', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(80px, 14vw, 160px)', color: '#17273C', opacity: 0.04, whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
          Begin
        </span>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '2.5rem', opacity: 0.5 }}>
            <svg width="42" height="58" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 35 V 75" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M30 35 C 22 35, 22 15, 30 15 C 38 15, 38 35, 30 35 Z" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M26 40 C 12 35, 12 18, 22 24 C 32 30, 30 40, 26 40 Z" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M34 40 C 48 35, 48 18, 38 24 C 28 30, 30 40, 34 40 Z" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M28 45 C 16 45, 15 30, 24 35 C 33 40, 30 45, 28 45 Z" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M32 45 C 44 45, 45 30, 36 35 C 27 40, 30 45, 32 45 Z" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M30 55 L 24 65" stroke="#2c2c2c" strokeWidth="1" />
              <path d="M30 50 L 36 60" stroke="#2c2c2c" strokeWidth="1" />
            </svg>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B4A292', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#B4A292' }} />
            Ready to Begin
            <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#B4A292' }} />
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.25, color: '#17273C', maxWidth: '520px', margin: '0 auto 3rem' }}>
            Let us create something<br /><em>worth remembering.</em>
          </h2>
          <a href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#2c2c2c', textDecoration: 'none', transition: 'opacity 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.4'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >
            Get in Touch
            <svg width="30" height="1" viewBox="0 0 30 1"><line x1="0" y1="0.5" x2="30" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
