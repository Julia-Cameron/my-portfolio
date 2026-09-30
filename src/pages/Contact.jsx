import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for programmatic navigation
import emailjs from '@emailjs/browser'; // Import EmailJS for sending emails

function Contact() {
    const navigate = useNavigate();

    // Track the field values and whether a message is sending or sent.
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Send the current field values to the configured EmailJS template.
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        // Use EmailJS to send the email with the specified template and parameters

        emailjs.send('service_iodwejf', 'template_k8cuhxv', templateParams, 'PBxW3VP1JHKnogeMH')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setLoading(false);
                setSubmitted(true);
                setTimeout(() => navigate('/'), 2000);
            })

            // Handle any errors that occur during the email sending process
            .catch((error) => {
                console.log('FAILED...', error);
                setLoading(false);
                alert('Oops! Something went wrong sending the message. Try emailing me directly at juliacameron.net@gmail.com')
            });
    };

    // Handle changes to the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update only the field that triggered this change.
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle clearing the form fields
    // Clear the form fields by resetting the formData state to its initial values
    const handleClear = () => {
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1 className="page-title">Get in Touch!</h1>
            <p className="contact-subtitle">Whether you have a job opportunity, a project collaboration, or just want to debate the best way to center a
                `div`, my inbox is open.</p>
            <div className="direct-channels">
                <h2>Direct Channels</h2>
                <p><strong>Email:</strong> <a href="mailto:juliacameron.net@gmail.com">juliacameron.net@gmail.com</a><br />
                    <strong>Location:</strong> Windsor, ON<br />
                    <strong>GitHub:</strong> <a href="https://github.com/Julia-Cameron" target="_blank" rel="noopener noreferrer">github.com/Julia-Cameron</a></p><br />
            </div>
            <h2>You can also reach me via the contact form below.</h2>
            {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-group label" htmlFor="name">Name:</label>
                        <input className="form-group input"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group label" htmlFor="email">Email:</label>
                        <input className="form-group input"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group label" htmlFor="message">Message:</label>
                        <textarea className="form-group input"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-actions">
                        <button className="submit-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                        <button className="clear-btn" type="button" onClick={handleClear} disabled={loading}>
                            Clear
                        </button>
                    </div>
                </form>
            ) : (
                <div className="success-message">
                    <h3>Thank you for your message!</h3>
                    <p>We will get back to you soon.</p>
                </div>
            )}
        </div>
    );
}
export default Contact;