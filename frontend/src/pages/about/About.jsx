import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/job-interview8.jpg';
import StoryImage from '../../images/job-interview2.jpg';
import VisionImage from '../../images/job-interview1.jpg';
import MissionImage from '../../images/job-interview4.jpg';
import './about.css';

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Upgrade hiring and admissions with Layer 3 Referencing. Replace outdated text and phone calls with advanced video references for more accurate and efficient evaluations. Make confident, people-focused decisions with our innovative solution.
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our Story" />
                    </div>
                    <div className="about__section-content">
                        <h2>Reference Renaissance</h2>
                        <p>It’s universally accepted in the corporate world that the people a company employs, not the products or the services, will ultimately determine the long-term success of the organization. Brian Griffiths has been assisting top-level North American companies for over 25 years in not only securing key talent but equally important conducting the background checks.</p>
                        <p>He noticed particularly over the last 10 years that many companies are not putting the same level of emphasis on reference checks as in the past. References are more regarded as a compliance check-off necessity pre-onboarding versus a vital value-add information opportunity to determine an individual’s capability to perform the required tasks at a high level.</p>
                        <p>As a result, poor hiring decisions are being made with alarmingly more frequency leading to early terminations or resignations. This is not only disruptive to the corporate culture but also time-consuming as per hiring a replacement and expensive as per lost productivity.</p>
                    </div>
                </div>
            </section>

            <section className="about__Vision">
                <div className="container about__Vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Our vision at Layer 3 Referencing is to transform the hiring and admissions processes. We aim to replace outdated text and phone call references with advanced video referencing for more accurate, efficient, and engaging evaluations. Make confident, people-focused decisions with our cutting-edge solution, whether you're recruiting top talent or admitting the best students.</p>
                        <ul>
                            <li><strong>Innovate:</strong> Introduce advanced video referencing to replace traditional text and phone call methods, making the process more dynamic, engaging, and efficient.</li>
                            <li><strong>Empower:</strong> Enable employers and academic institutions to make informed, confident decisions by providing comprehensive and authentic candidate evaluations.</li>
                            <li><strong>Simplify:</strong> Streamline the talent and admissions journey, ensuring a seamless, user-friendly experience for all parties involved.</li>
                            <li><strong>Focus on People:</strong> Place people at the heart of our solution, fostering meaningful connections and accurate assessments that go beyond the limitations of conventional references.</li>
                        </ul>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Vision" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our Mission" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>At Layer 3 Referencing, our mission is to revolutionize credential presentation for job and academic applications through a dynamic video referencing platform. We empower applicants to showcase their skills and personality with personalized video references, enabling evaluators to make informed decisions based on authentic evaluations.</p>
                        <p>By leveraging advanced technology and a user-centric approach, we enhance transparency, efficiency, and fairness in the referencing process. We believe in the power of visual communication to create meaningful connections and unlock potential.</p>
                        <p>Join us in transforming the future of referencing, where your story is seen, heard, and valued.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
