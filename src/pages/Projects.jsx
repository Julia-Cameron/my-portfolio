import React from 'react';
import bluepinImage from '../assets/bluepin-image.png';
import jsekImage from '../assets/jsek-marketplace-image.png';
import industrialPipeSpanToolImage from '../assets/industrial-pipe-span-tool-image.png';
import realestatePortfolioSiteImage from '../assets/realestate-portfolio-site-image.png';

function Projects() {

    // Store project details as data so the cards share one layout.
    const projects = [
        {
            id: 1,
            title: 'BluePin',
            image: bluepinImage,
            role: 'Full Stack Developer',
            description: 'Built a browser-based engineering document review dashboard supporting blueprint uploads, metadata tracking, threaded comment markups, and revision history. Implemented automated PostgreSQL table provisioning, SHA-256 duplicate file hashing, and dual-storage handling for Supabase cloud buckets or local environments',
            behindTheScenes: 'Bridging the gap between heavy industrial drafting standards and modern web apps - because reviewing technical blueprints shouldn\'t feel like an archaeological excavation.',
            tech: ['Node.js', 'Express 5', 'PostgreSQL', 'Supabase Storage', 'Multer', 'HTML', 'CSS', 'JavaScript'],
            link: 'https://bluepin-r9q9.onrender.com'
        },
        {
            id: 2,
            title: 'JSEK Marketplace',
            image: jsekImage,
            role: 'Frontend Developer',
            description: 'Built core buyer flows including landing, authentication, checkout, and receipt generation for a responsive e-commerce demo. Implemented Luhn checksum card validation, live card brand detection, simulated decline scenarios, and persistent cart management using local storage.',
            behindTheScenes: 'Proving that shopping carts can be built without losing your mind - or your customer\'s data.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'Jira'],
            link: 'https://jsek-marketplace-project-2181inp43-jc-d78b.vercel.app/'
        },

        {
            id: 4,
            title: 'Real Estate Portfolio Site',
            image: realestatePortfolioSiteImage, // Add the image import at the top and reference it here
            role: 'Frontend Developer',
            description: 'A modern and responsive real estate portfolio website showcasing properties and professional services. Built with HTML and CSS to provide a clean, professional presentation of real estate listings and agent information.',
            behindTheScenes: 'Interesting behind-the-scenes details.',
            tech: ['HTML5', 'CSS3'],
            link: 'https://realestate-portfolio-site-mbxbs25fw-jc-d78b.vercel.app'

        },
        {
            id: 3,
            title: 'Industrial Pipe Span Tool',
            image: industrialPipeSpanToolImage,
            role: 'Full Stack Developer',
            description: 'Developed an efficient calculation tool for industrial pipe spans leveraging Python, SQLite, and Streamlit. Designed automated logic to process heavy engineering parameters and ensure structural reliability under real-world oil and gas infrastructure standards.',
            behindTheScenes: 'Channeling my past life as an oil and gas drafting engineer to automate complex span calculations, because manually checking pipe deflection charts is a relic of the dark ages we left behind in 2017.',
            tech: ['Python', 'SQLite', 'Streamlit', 'Oil & Gas Standards'],
            link: 'https://industrial-pipe-span-tool.streamlit.app'
        }
    ];
    return (
        <div className="projects-container">
            <h1 className="page-title">Featured Projects</h1>
            <p className="page-subtitle">A collection of software engineering projects built with real code, solid architecture, and just enough caffeine to avoid existential dread.</p>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h2 className="project-title">{project.title}</h2>
                        {project.image && (
                            <img src={project.image} alt={project.title} className="project-image" />
                        )}
                        <p className="project-description">{project.description}</p>
                        {project.role && <p className="project-role"><strong>Role:</strong> {project.role}</p>}
                        {project.outcome && <p className="project-outcome"><strong>Outcome:</strong> {project.outcome}</p>}
                        {project.behindTheScenes && <p className="project-behind-the-scenes"><strong>Behind the Scenes:</strong> {project.behindTheScenes}</p>}
                        {project.tech && <p className="project-tech"><strong>TechStack:</strong> {project.tech.join(', ')}</p>}
                        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;    