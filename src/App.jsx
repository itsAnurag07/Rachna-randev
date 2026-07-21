import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioCategory from './pages/PortfolioCategory';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Hide custom cursor on carousel navigation buttons
      const target = e.target;
      if (target && typeof target.closest === 'function') {
        setHoveringInteractive(!!target.closest('.carousel-btn'));
      } else {
        setHoveringInteractive(false);
      }
      
      setHidden(false);
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        {/* Custom DOM Cursor */}
        <div 
          className={`custom-cursor ${clicked ? 'clicked' : ''} ${hidden || hoveringInteractive ? 'hidden' : ''}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/ethereal" element={<PortfolioCategory category="ethereal" />} />
          <Route path="/portfolio/cinematic" element={<PortfolioCategory category="cinematic" />} />
          <Route path="/portfolio/happiness" element={<PortfolioCategory category="happiness" />} />
          <Route path="/portfolio/timeless" element={<PortfolioCategory category="timeless" />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
