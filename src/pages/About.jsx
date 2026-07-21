import React from 'react';

function About() {
  return (
    <div className="bg-earthy-white text-gray-800 antialiased min-h-screen">
      {/* BEGIN: MainHeader */}
      <header className="pt-16 pb-2 text-center" data-purpose="header-section">
        <span className="caps-heading block mb-4">Behind the Lens</span>
        <p className="hero-heading mb-7">Meet Rachna</p>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: HeroContent */}
      <main className="relative w-full overflow-hidden">
        {/* Top row with side text and arch image */}
        <section className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-12 items-center relative z-10 pt-4">
          {/* Left Side Text */}
          <div className="col-span-12 lg:col-span-3 text-center flex justify-center lg:justify-start lg:-ml-16 order-2 lg:order-1 lg:-mt-72 relative" data-purpose="hero-side-text-left">
            <p className="side-text lg:whitespace-nowrap lg:max-w-none max-w-[300px] mx-auto lg:mx-0 mt-6 lg:mt-0 relative z-10">
              Based in New York City, photographing <br className="hidden lg:block" /> people, brands and products since 2019
            </p>
          </div>
          {/* Central Arch Image */}
          <div className="col-span-12 lg:col-span-6 flex justify-center order-1 lg:order-2 lg:-mt-0" data-purpose="main-portrait-container">
            <div className="w-full max-w-[370px] hero-center-img arch-shape shadow-sm">
              <img
                alt="Portrait of Rachna"
                className="w-full h-full object-cover"
                src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/PortraitsBySudha-Rachna-33-scaled.jpg"
              />
            </div>
          </div>
          {/* Right Side Text */}
          <div className="col-span-12 lg:col-span-3 text-center flex justify-center lg:justify-end lg:-mr-16 order-3 mt-6 lg:-mt-72 relative" data-purpose="hero-side-text-right">
            <p className="side-text lg:whitespace-nowrap lg:max-w-none max-w-[300px] mx-auto lg:mx-0 relative z-10">
              Earthy tones and minimalism.  <br className="hidden lg:block" /> Photos that speak softly with power.
            </p>
          </div>
        </section>

        {/* Content Split Layout */}
        <section className="bg-earthy-cream mt-[-150px] lg:mt-[-310px] pt-[200px] lg:pt-[314px] pb-24 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
            {/* Left Side Column Images */}
            <div className="col-span-12 lg:col-span-3 flex flex-col items-center lg:items-start gap-12 lg:-mt-32 lg:-ml-12" data-purpose="left-gallery">
              <div className="aspect-[4/5] w-[85%] bg-white overflow-hidden shadow-sm">
                <img
                  alt="Minimalist airy linen setting"
                  className="w-full h-full object-cover"
                  src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/PortraitsBySudha-Rachna-35-scaled.jpg"
                />
              </div>
              <div className="aspect-[4/5] w-[85%] bg-white overflow-hidden shadow-sm">
                <img
                  alt="Ceramic vase with pampas grass"
                  className="w-full h-full object-cover"
                  src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/BTS-SHOT-scaled.jpg"
                />
              </div>
            </div>

            {/* Center Content Column */}
            <div className="col-span-12 lg:col-span-6 px-4 lg:px-10 text-center mt-12" data-purpose="about-text-content">
              <span className="caps-heading block mb-12">A Bit About Me</span>
              <div className="body-copy space-y-8 text-center text-gray-800">
                <p>
                  I’m Rachna, a commercial and editorial photographer with a passion for weaving beauty into every shot. My work is all about earthy tones and a minimalist vibe, creating images that are both timeless and enchanting. I’m a bit of a perfectionist, always striving for that perfect shot, yet I also love the spontaneous, candid moments that often turn out to be the most magical.
                </p>
                <p>
                  When I’m not behind the camera, you can find me hiking in the mountains, tending to my collection of houseplants, or sipping on a meticulously brewed cup of coffee. I value authenticity and connection, both in my personal life and in my work. I’m also an advocate for sustainability and love working with brands that prioritize eco-friendly practices. If this is you, let’s create something beautiful together!
                </p>
              </div>
              <div className="mt-20 signature space-y-1">
                <p>xo xo</p>
                <p>Rachna Randev</p>
              </div>
            </div>

            {/* Right Side Column Images */}
            <div className="col-span-12 lg:col-span-3 flex justify-center lg:justify-end lg:-mt-32 lg:-mr-12" data-purpose="right-gallery">
              <div className="w-[85%] h-full bg-white overflow-hidden shadow-sm">
                <img
                  alt="Delicate white dried botanicals"
                  className="w-full h-full object-cover"
                  src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/IMG_7445-2-scaled.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="bg-white py-24 px-6 lg:px-20 mt-8 lg:mt-0" data-purpose="lets-connect">
          <div className="w-full mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-[12px]">
            {/* Left Image */}
            <div className="flex justify-center items-center flex-shrink-0" data-purpose="connect-left">
              <img
                src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/IMG_7792-scaled.jpg"
                alt="Bride in forest"
                className="w-[260px] lg:w-[280px] aspect-[2/3] object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-16 lg:py-0 bg-[#F5F5F3]" data-purpose="connect-center">
              <div className="mb-10 opacity-70">
                <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stem */}
                  <path d="M30 35 V 75" stroke="#2c2c2c" strokeWidth="1" />
                  {/* Center Petal */}
                  <path d="M30 35 C 22 35, 22 15, 30 15 C 38 15, 38 35, 30 35 Z" stroke="#2c2c2c" strokeWidth="1" />
                  {/* Left Petal */}
                  <path d="M26 40 C 12 35, 12 18, 22 24 C 32 30, 30 40, 26 40 Z" stroke="#2c2c2c" strokeWidth="1" />
                  {/* Right Petal */}
                  <path d="M34 40 C 48 35, 48 18, 38 24 C 28 30, 30 40, 34 40 Z" stroke="#2c2c2c" strokeWidth="1" />
                  {/* Lower Left Petal */}
                  <path d="M28 45 C 16 45, 15 30, 24 35 C 33 40, 30 45, 28 45 Z" stroke="#2c2c2c" strokeWidth="1" />
                  {/* Lower Right Petal */}
                  <path d="M32 45 C 44 45, 45 30, 36 35 C 27 40, 30 45, 32 45 Z" stroke="#2c2c2c" strokeWidth="1" />
                  {/* Leaves */}
                  <path d="M30 55 L 24 65" stroke="#2c2c2c" strokeWidth="1" />
                  <path d="M30 50 L 36 60" stroke="#2c2c2c" strokeWidth="1" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.75rem] font-['Manrope'] mb-8 font-light tracking-[0.15em] uppercase text-[#1a2b3c]">
                Let's Connect
              </h2>



              <a href="/#contact" className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-black transition-colors duration-300">
                Contact Me
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center flex-shrink-0" data-purpose="connect-right">
              <img
                src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/IMG_8577-scaled.jpg"
                alt="Bride in veil"
                className="w-[260px] lg:w-[280px] aspect-[2/3] object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;

