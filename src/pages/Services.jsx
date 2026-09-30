import React from 'react';

function Services() {
    // Keep service details together so every item uses the same card layout.
    const Services = [
        {
            id: 1,
            title: 'Front-End Development',
            description: 'Building responsive, modern, and user-centered web applications using React, JavaScript, HTML, and CSS. Clean component architecture and smooth interfaces are guaranteed.\nIncludes: Meticulous alignment of elements, custom layouts, and a zero-tolerance policy for elements that mysteriously break on mobile screens.',
        },
        {
            id: 2,
            title: 'Full-Stack & Back-End Development',
            description: 'Developing robust back-end application logic, object-oriented systems, and data pipelines using Java, C#, and Python. Connecting user interfaces seamlessly with secure underlying services.\n\nIncludes: Writing clean server-side code, handling APIs like a pro, and managing data flow so your app doesn\'t just look pretty on the surface.',
        },
        {
            id: 3,
            title: 'Database Desing & Architecture',
            description: 'Structuring robust relational databases (such as Oracle SQL and SQLite) adhering to Third Normal Form (3NF) standards with optimized business logic queries.\n\nIncludes: Making sure your data stays safe, structured, and far away from accidental DROP TABLE commands.',
        },
        {
            id: 4,
            title: 'Technical Documentation & Engineering Specs',
            description: 'Drafting comprehensive Software Requirements Specifications (SRS), use case diagrams, P&IDs, and technical engineering documentation following strict industry standards.\n\nIncludes: Translating chaotic ideas into beautifully structured documents that even non-technical stakeholders can follow without falling asleep.',
        },

    ];
    return (
        <div className="services-container">
            <h1 className="page-title">Services & Offerings</h1>
            <p className="services-subtitle">Building robust applications without any accidental production database deletions. I bring a strong technical foundation, meticulous attention to detail, and a rigorous approach to software development - ensuring your data stays safe while your product moves forward.</p>
            <div className="services-grid">

                {/* Map through the Services array and render each service card. */}

                {Services.map(service => (
                    <div key={service.id} className="service-card">
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Services;