import React from 'react';
import { Container,  } from 'react-bootstrap'; // Import Bootstrap Container and Button components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if not already imported
import Image from '../images/main_header1.png';
import '../pages/home/home.css';


const MainHeader = () => {
    return (
        <header className="main__header">
            <Container className="main__header-container">
            <div className="main__header-left main__header-box">
            <h4 className="main__header-title">Video interview platform</h4>
            <h2 className="main__header-subtitle">Let's make a change to your recruiting process</h2>
            <p className="main__header-text">
                Simplify your hiring and recruiting process and make transparent decisions with Layer 3.
            </p>
                    <Link to="/requestdemo" className='btn lg demo-btn'>Make a Request </Link>
                    <Link to="/Login" className='btn lg signin-btn'>Sign in</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={Image} alt="Main Header " />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default MainHeader;
