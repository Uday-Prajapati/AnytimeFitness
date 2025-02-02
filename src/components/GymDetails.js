import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/GymDetails.css';

const GymDetails = () => {
  const location = useLocation();
  const { gym } = location.state;
  const navigate = useNavigate();

  return (
    <div className="gym-details-page">
      <div className="gym-details-container">
        {/* Gym Name as Static Text */}
        <h2 className="gym-name">{gym.name}</h2>
        <div className="gym-info">
          <p><strong>Location:</strong> {gym.location}</p>
          <p><strong>Rating:</strong> {gym.rating}</p>
          <p><strong>Phone:</strong> {gym.phone}</p>
        </div>
        <div className="fee-structure">
          <h3>Fee Structure:</h3>
          <ul>
            {Object.entries(gym.feeStructure).map(([duration, fee]) => (
              <li key={duration}>
                <span>{duration}:</span> {fee} ₹
              </li>
            ))}
          </ul>
        </div>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default GymDetails;
