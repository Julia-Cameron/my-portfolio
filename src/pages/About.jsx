import { useState } from 'react';
// Import my image from the local assets folder
import myPicture from '../assets/my-picture.jpg';
import myResume from '../assets/Julia-Cameron-Resume.pdf';

const skillGroups = [
    {
        id: 'languages',
        title: 'Programming Languages',
        skills: ['JavaScript', 'Java', 'Python', 'C#'],
    },
    {
        id: 'frameworks',
        title: 'Frameworks & Libraries',
        skills: ['React', 'Node.js', 'Express', 'Streamlit', 'ReportLab'],
    },
    {
        id: 'web',
        title: 'Web Fundamentals',
        skills: ['HTML/CSS'],
    },
    {
        id: 'databases',
        title: 'Databases',
        skills: ['SQL', 'MongoDB'],
    },

    {
        id: 'tools',
        title: 'Tools & Platforms',
        skills: ['Git', 'Jira', 'Google Docs/MS Office'],
    },
];

// About component displays personal information and skills

function About() {
    const [activeSkillGroup, setActiveSkillGroup] = useState(null);

    return (
        <div>
            <div className="about-container">
                <h1 className="page-title">About Me: Julia Cameron</h1>
                <img src={myPicture} alt="Julia Cameron" className="about-image" />
                <a className="resume-link" href={myResume} target="_blank" rel="noopener noreferrer">Download My Resume</a>
                <p className="about-bio">I am a result-oriented Junior Software Developer and Software Engineering Technology student at Centennial College with a strong academic standing (4.3/4.5 GPA). My technical foundation spans object-oriented programming, user-centred design, and software requirements principles, utilizing languages such as Java, C#, Python, JavaScript, and SQL. I have hands-on project experience building functional applications, responsive e-commerce web demos, and relational database designs through effective Agile teamwork. Fluent in both English and Russian, I leverage cross-functional communication and modern development tools like Git, Jira, and various cloud platforms to deliver reliable software solutions. Additionally, my background as a Senior Drafting Engineer brings a rigorous, detail-oriented approach to technical documentation, quality compliance, and structured engineering workflows.</p>

                <div className="skills-section">
                    <h2 className="skills-title">Skills</h2>
                    <p className="skills-description">Through my academic studies in Software Engineering Technology and hands-on project work, I have built a strong foundation in several core technical domains. My practical experience includes front-end development (building responsive e-commerce flows and real estate web pages with HTML, CSS, and JavaScript), database management (designing and populating 3NF-compliant relational databases and writing complex SQL queries), and requirements engineering (authoring comprehensive software requirements specifications, use case diagrams, and workflows). Additionally, I have gained hands-on experience in object-oriented programming, user-centred design, and Agile teamwork using version control tools like Git and Jira.</p>
                    <div className="skills-grid">

                        // Map through skill groups and display each category with its skills

                        {skillGroups.map((group) => {
                            const isActive = activeSkillGroup === group.id;

                            return (
                                <div
                                    className={`skill-category${isActive ? ' is-active' : ''}`}
                                    key={group.id}
                                    onPointerEnter={(event) => {
                                        if (event.pointerType === 'mouse') setActiveSkillGroup(group.id);
                                    }}
                                    onPointerLeave={(event) => {
                                        if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) {
                                            setActiveSkillGroup((active) => active === group.id ? null : active);
                                        }
                                    }}
                                    onFocus={() => setActiveSkillGroup(group.id)}
                                    onBlur={(event) => {
                                        if (!event.currentTarget.contains(event.relatedTarget)) {
                                            setActiveSkillGroup((active) => active === group.id ? null : active);
                                        }
                                    }}
                                >
                                    // Skill category button and popover

                                    <button
                                        aria-controls={`skills-${group.id}`}
                                        aria-expanded={isActive}
                                        className="skill-badge"
                                        onClick={() => setActiveSkillGroup(group.id)}
                                        type="button"
                                    >
                                        {group.title}
                                    </button>
                                    <ul className="skill-popover" id={`skills-${group.id}`}>
                                        {group.skills.map((skill) => (
                                            <li className="skill-item" key={skill}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;