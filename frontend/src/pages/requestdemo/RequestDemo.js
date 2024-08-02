import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import './RequestDemo.css'; 

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", 
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", 
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", 
  "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", 
  "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", 
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", 
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", 
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", 
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
  "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const RequestDemo = () => {
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { firstName, lastName, email, company, phone, country };

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Request submitted successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setCountry('');
      } else {
        alert('Failed to submit request. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Error submitting request. Please try again later.');
    }
  };

  const handleSupportClick = () => {
    navigate('/contact'); // Navigate to /contact route using useNavigate
  };

  return (
    <div id="request-demo">
      <main id="request-demo-main">
        <section id="hero-section">
          <div id="demo-container">
            <div id="demo-form">
              <div id="demo-header">
                <h4>Book your live demo</h4>
              </div>
              <div id="role-container">
                <div className="form-group">
                  <label htmlFor="role">
                    What best describes your role? <span className="required">*</span>
                  </label>
                  <select id="role-select-input" onChange={handleRoleChange}>
                    <option value="">Select Role</option>
                    <option value="jobseeker">I’m here to submit my referee for a job.</option>
                    <option value="company">I’m interested in using Layer 3 Referencing at my organization.</option>
                  </select>
                </div>
                {role === 'jobseeker' && (
                  <div id="jobseeker-info">
                    <p><strong> Layer 3 Referencing </strong> is here to provide efficient and credible video references to all clients.</p>
                    <p>If you’re a <strong>job seeker</strong>, please proceed to fill the form in this link and click on submit to enable us have access to your referee. You are advised to contact your referee to be available and get ready for the interview. Please note that Layer 3 does not have any influence over the recruitment process. All video references are automatically saved and sent to the organisation in need of your video references <Link to="/applicant-form">link provided to you by the organization</Link> you are interviewing with.</p>
                    <p>If you encounter any technical challenge on how to fill this form, please <button onClick={handleSupportClick}>contact our support team here.</button></p>
                  </div>
                )}
                {role === 'company' && (
                  <form id="company-info" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">
                        Company Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">
                        Country/Region <span className="required">*</span>
                      </label>
                      <select
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      >
                        <option value="">Select Country/Region</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="btn-primary">
                      Request Demo
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div id="connect-section">
              <div id="connect-content">
                <h4>Connect with us</h4>
                <p>
                  We'd love to hear from you! Whether you have a question about
                  our services, pricing, need a demo, or anything else, our team
                  is ready to answer all your questions.
                </p>
              </div>
              <div id="connect-details">
                <h5>Contact Details</h5>
                <p>Email: support@layer2.com</p>
                <p>Phone: +1 800 555 1234</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RequestDemo;
