import React from 'react';

function Education() {

    // Keep each qualification's details together for the education cards.
    const education = [
        {
            id: 1,
            degree: (
                <>
                    Software Engineering Technology (Co-op)<br />
                    (Advanced Diploma)
                </>
            ),
            year: 'January 2026 - present',
            institution: 'Centennial College',
            academicStanding: 'GPA: 4.3/4.5',
            relevantCourses: 'Database Concepts (SQL), Java Programming, Web Interface Design, Software Requirements, Software System Design, Client-Side Web Development, C# Programming, and Python Programming.',
            extracurricularActivities: 'Mastered the art of translating cryptic compiler error messages into plain English and successfully caffeinating my way through back-to-back finals without breaking production code.',
            link: 'https://www.centennialcollege.ca'
        },
        {
            id: 2,
            degree: 'Oil and Gas Field Development Master\'s',
            year: '2001 - 2006',
            institution: 'Kuban State Technological University',
            academicStanding: (
                <>
                    Summa Cum Laude equivalent<br />
                    (evaluated by WES and CES)
                </>
            ),
            relevantCourses: 'Reservoir Engineering, Production Optimization, Field Development Planning, and Petroleum Economics.',
            extracurricularActivities: 'Proving that transitioning from drafting complex industrial P&IDs to writing clean software architectures is just a natural evolution of making messy systems make sense.',
            link: 'https://kubstu.ru/en'
        }
    ];
    return (
        <div className="education-container">
            <h1 className="page-title">Education & Credentials</h1>
            <p className="page-subtitle">Long before building e-commerce apps and relational databases, I spent years as a Senior Drafting Engineer turning complex technical drawings into reality and training junior teams. Trading blueprints for code gave me a superpower in cross-functional communication, meticulous quality assurance, and stakeholder alignment - all of which ensures I can build software systems and talk to the humans building them.</p>
            <div className="education-grid">
                {education.map(edu => (
                    <div key={edu.id} className="education-card">
                        <h2>{edu.degree}</h2>
                        <p className="education-year">{edu.year}</p>
                        <h3>{edu.institution}</h3>
                        <p>{edu.academicStanding}</p>
                        <p className="education-description">{edu.relevantCourses}</p>
                        <p className="education-description">{edu.extracurricularActivities}</p>
                        {edu.link && (
                            <p>
                                <a href={edu.link} className="education-link" target="_blank" rel="noopener noreferrer">
                                    Learn more about {edu.institution}
                                </a>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Education;