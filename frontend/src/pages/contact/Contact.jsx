import React, { useState } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/job-interview3.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to your backend or email service
    console.log({ email, subject, description });
    alert('Request submitted successfully!');
    setEmail('');
    setSubject('');
    setDescription('');
  };

  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        You can get in touch with us 24/7 and we will reach out to you instantly!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__options">
            <a href="mailto:support@egattor.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
            <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
            <a href="https://wa.me/+123456789" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <h2>Submit a request</h2>
            <p>Providing as much information as possible in your request will allow us to help you faster</p>
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
