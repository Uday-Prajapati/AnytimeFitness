import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Custom CSS
import logo from '../assets/logo.png'; // Import your logo image
import profileIcon from '../assets/user.png'; // Import the user profile icon

const Navbar = () => {
  const location = useLocation(); // Get the current route

  // Only display the navbar if the current path is "/"
  if (location.pathname !== '/') {
    return null; // Do not render the navbar if not on the homepage
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Anytime Fitness Logo" className="navbar-logo" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workout">Workout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/diet">Diet</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-gym">Book Nearby Gym</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community-challenge">Community Challenge</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="/profile" 
                id="userProfileDropdown" 
                role="button" 
                aria-expanded="false"
              >
                <img 
                  src={profileIcon} 
                  alt="User Profile" 
                  className="profile-icon" 
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
