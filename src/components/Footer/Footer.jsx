import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/" className="footer__link">Terms & Conditions</Link>
            <Link to="/" className="footer__link">Privacy statement</Link>
            <Link to="/" className="footer__link">Help center</Link>
        </footer>
    );
};

export default Footer;
