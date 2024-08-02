import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                    At Layer 3, we're your premier destination for a comprehensive library of video references.
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                        <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                        <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                        <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/About">About</Link>
                    <Link to="/Service">Service</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Login">Sign in</Link>
                    <Link to="/RequestDemo">Request a Demo</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/Events">Events</Link>
                    <Link to="/Communities">Communities</Link>
                    <Link to="/FAQs">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/Contact">Contact </Link>
                    <Link to="/Support">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small> 2024 LAYER 3 REFERENCES INC &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
