import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for routing
import './notFound.css'; // Import your CSS file for styling

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
