import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F4F0] pt-16 pb-8 px-6 lg:px-20 text-[#2c2c2c] font-['Manrope',_sans-serif]">
      <div className="max-w-7xl mx-auto">

        {/* Instagram Header */}
        <div className="flex justify-between items-center mb-6 text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-gray-600 font-semibold">
          <div>FOLLOW US ON INSTAGRAM</div>
          <div>@rachna</div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-16">
          <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Bhavna-1-scaled.jpg" alt="Instagram post 1" className="w-full aspect-[4/5] object-cover" />
          <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Bhavna-3-scaled.jpg" alt="Instagram post 2" className="w-full aspect-[4/5] object-cover" />
          <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/M14-scaled.jpg" alt="Instagram post 3" className="w-full aspect-[4/5] object-cover" />
          <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/DES-9-scaled.jpg" alt="Instagram post 4" className="w-full aspect-[4/5] object-cover" />
          <img src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/Suka-5SUKA-scaled.jpg" alt="Instagram post 5" className="w-full aspect-[4/5] object-cover" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20 text-[13px] tracking-wide text-gray-800">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <a href="/about" className="hover:text-black transition-colors">About</a>
          <a href="/portfolio" className="hover:text-black transition-colors">Portfolio +</a>

          <a href="/contact" className="hover:text-black transition-colors">Contact</a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center relative pb-2">
          <div className="md:absolute left-0 text-[10px] tracking-[0.2em] text-gray-500 uppercase mb-8 md:mb-0">
            © 2026 Photography by Rachna Randev
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 items-center text-gray-800 mb-8 md:mb-0">
            {/* Facebook */}
            <a href="#" className="hover:text-black transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-black transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" className="hover:text-black transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Back to top */}
          <div onClick={scrollToTop} className="md:absolute right-0 cursor-pointer text-gray-800 hover:text-black transition-colors" title="Back to top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
        </div>



      </div>
    </footer>
  );
}

export default Footer;
