import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StarryBackground from './pages/StarryBackground';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Footer from './Footer';

function App() {
  return (
    <>
      <StarryBackground />
      <Router>
        <div className="app-container">
          {/* Navigation Bar */}
          <nav className="navbar">
            <div className="nav-logo-container">
              {/* Use the owner's initials until a custom logo is added. */}
              <div className="nav-logo-box">
                JC
              </div>
              <span className="nav-title">My Portfolio</span>
            </div>

            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/projects" className="nav-link">Projects</Link>
              <Link to="/education" className="nav-link">Education</Link>
            </div>
          </nav>

          <div className="content-container">
            {/* The current URL decides which page appears in this area. */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router >
    </>
  );
}

export default App;

