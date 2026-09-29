import React from 'react';

function Footer() {

    // Read the year at runtime so the copyright stays current.
    const currentYear = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Julia Cameron. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;