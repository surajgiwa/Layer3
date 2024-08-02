// src/components/ApplicantForm.jsx
import React from 'react';
import './applicantForm.css'; // Import your CSS file

const ApplicantForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    // You can access form data using state or form references
  };

  return (
    <div className="form-container">
      <h2>Applicant Information Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email Address" required />
        <label htmlFor="resume-upload" className="upload-label">Upload Resume</label>
        <input id="resume-upload" type="file" accept=".pdf,.doc,.docx" required /> {/* Added label and id */}
        <input type="text" placeholder="Referee Name" required />
        <input type="email" placeholder="Referee Email Address" required />
        <textarea placeholder="Additional Notes"></textarea>
        <input type="submit" value="Submit Application" />
      </form>
    </div>
  );
};

export default ApplicantForm;
