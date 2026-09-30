import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            {/* Introduce the portfolio and link visitors to work and contact. */}
            <div className="hero-content">
                <h1 className="hero-title">Welcome to my portfolio</h1>
                <p className="hero-subtitle">
                    I'm Julia Cameron, a Junior Software Developer and Software Engineering Technology student at Centennial College. I enjoy building reliable web applications and thoughtful user experiences. Explore my projects, learn more about my journey, and feel free to get in touch.
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