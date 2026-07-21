import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const portfolioCategories = [
  { name: 'Ethereal', path: '/portfolio/ethereal' },
  { name: 'Cinematic', path: '/portfolio/cinematic' },
  { name: 'Happiness', path: '/portfolio/happiness' },
  { name: 'Timeless', path: '/portfolio/timeless' },
];

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <nav className={`navbar ${isHome ? '' : 'navbar-solid'}`}>
      <div className="nav-links">
        {/* Portfolio with dropdown */}
        <div
          className="nav-dropdown-wrapper"
          onMouseEnter={() => setPortfolioOpen(true)}
          onMouseLeave={() => setPortfolioOpen(false)}
        >
          <Link to="/portfolio/ethereal" className="nav-dropdown-trigger">
            Portfolio
          </Link>
          {portfolioOpen && (
            <div className="nav-dropdown">
              {portfolioCategories.map((cat) => (
                <Link key={cat.path} to={cat.path} className="nav-dropdown-item">
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/services">Services</Link>

        <div className="nav-logo">
          <Link to="/">
            <img src={isHome ? "/images/logo.png" : "/images/Logo Black.png"} alt="Rachna Logo" className="nav-logo-img" />
          </Link>
        </div>

        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
