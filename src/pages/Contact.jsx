import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'portraits',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#F8F7F3', color: '#2c2c2c', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info & Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-10">
              <span style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'Montserrat, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B4A292', marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', width: '30px', height: '1px', backgroundColor: '#B4A292' }} />
                Get in Touch
              </span>
              <h1 style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif", fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: '#17273C', letterSpacing: '0.01em', marginBottom: '1.5rem' }}>
                Let us create something<br /><em>worth remembering.</em>
              </h1>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', lineHeight: 1.8, color: '#666', maxWidth: '550px' }}>
                Whether it's a quiet milestone, a branding transformation, or a celebration of love — I would love to help you tell your story. Please fill out the form below, and I will get back to you within 24 to 48 hours.
              </p>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="bg-[#ECEDE5] p-8 md:p-12 text-center rounded-[4px] shadow-sm max-w-[580px]">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 400, color: '#17273C', marginBottom: '1rem' }}>
                  Thank you!
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px', letterSpacing: '0.05em', lineHeight: 1.8, color: '#555' }}>
                  Your message has been received. I am so excited to connect with you and will reach out to your inbox very soon.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="service-cta mt-8"
                  style={{ alignSelf: 'center', border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  <span>Send another message &rarr;</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-[580px]">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-500 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-500 mb-2">What experience are you looking for?</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="portraits">La Femme (Women's Portraits)</option>
                    <option value="family">The Family Table</option>
                    <option value="professional">Signature Professional</option>
                    <option value="milestone">The Milestone Experience</option>
                    <option value="other">Other / Collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-500 mb-2">Tell me about your vision</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe what you want to capture, dates you have in mind, or any questions..."
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[14px] text-gray-800 focus:outline-none focus:border-black transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="service-cta"
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    <span>{submitting ? 'Sending...' : 'Send Message'} &rarr;</span>
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Right: Editorial Image Panel */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[420px] aspect-[3/4] bg-[#ECEDE5] p-3 shadow-sm rounded-[4px] relative">
              <img
                src="https://lavenderblush-kudu-408789.hostingersite.com/wp-content/uploads/2026/07/PortraitsBySudha-Rachna-33-scaled.jpg"
                alt="Portrait of Rachna"
                className="w-full h-full object-cover"
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.5rem' }}>
                Rachna Randev
              </div>
            </div>
            
            {/* Quick Contact Info */}
            <div className="mt-8 w-full max-w-[420px] text-left space-y-4 font-['Montserrat',_sans-serif]">
              <div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-gray-400">Direct Email</p>
                <a href="mailto:hello@rachnarandev.com" className="text-[12px] text-gray-700 hover:text-black transition-colors">hello@rachnarandev.com</a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-gray-400">Location</p>
                <p className="text-[12px] text-gray-700">New York, NY & Available for Destination</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
