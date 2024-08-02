import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/services/Service';
import Signin from './pages/Login/Signin';
import userdashboard from './pages/UserPage/userdashboard';
import UserPage from './pages/UserPage/UserPage';
import ApplicantFormPage from './pages/ApplicantFormPage';
import RequestDemo from './pages/requestdemo/RequestDemo';
import VideoUploadPage from './pages/videosupload/VideoUploadPage';
import admindashboard from './pages/admindashboard/admindashboard';
import AdminRoute from './components/AdminRoute'; // Import AdminRoute component
import NotAuthorized from './pages/NotAuthorized'; // Import NotAuthorized component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component

const App = () => {
  return (
    <Router>
      <div className="bg-white min-vh-100 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/applicant-form" element={<ApplicantFormPage />} />
            <Route path="/requestdemo" element={<RequestDemo />} />

            {/* Protect UserDashboard route */}
            <Route
              path="/userdashboard"
              element={<PrivateRoute element={userdashboard} />}
            />

            {/* Protect UserPage route */}
            <Route
              path="/userpage"
              element={<PrivateRoute element={UserPage} />}
            />

            {/* Use AdminRoute for AdminDashboard */}
            <Route
              path="/admindashboard"
              element={<AdminRoute element={admindashboard} />}
            />

            {/* Use AdminRoute for VideoUploadPage */}
            <Route
              path="/videosupload"
              element={<AdminRoute element={VideoUploadPage} />}
            />

            {/* NotAuthorized component for unmatched routes */}
            <Route path="*" element={<NotAuthorized />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
