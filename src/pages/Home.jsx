import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            {/* Introduce the portfolio and link visitors to work and contact. */}
            <div className="hero-content">
                <h1 className="hero-title">Hi, I'm Julia Cameron</h1>
                <p className="hero-subtitle">
                    <strong>Headline:</strong> Junior Software Developer and Software Engineering Technology student at Centennial College.<br />
                    <strong>Specialization:</strong> Full-stack development, user interface design, and building reliable, end-to-end web applications.<br />
                    <strong>Interests:</strong> Exploring new technologies, contributing to open-source projects, and continuously improving my coding skills.
                </p>
                {/* Offer direct links to the projects and contact pages. */}
                <div className="hero-buttons">
                    <Link to="/projects" className="btn primary-btn">View My Work</Link>
                    <Link to="/contact" className="btn secondary-btn">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
}
export default Home;