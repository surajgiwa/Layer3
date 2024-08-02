import React from 'react';
import { Container } from 'react-bootstrap'; // Import Bootstrap Container component

const Header = ({ title, image, children }) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container-bg">
                    <img src={image} alt="Header Background" />
                </div>
                <Container>
                    <div className="header__content">
                        <h2>{title}</h2>
                        <p>{children}</p>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;
