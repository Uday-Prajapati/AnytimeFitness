import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Ensure the path is correct
import UserAuth from './components/UserAuth'; // Ensure the path is correct
import Workout from './components/Workout'; // Ensure the path is correct
import Diet from './components/Diet'; // Ensure the path is correct
import CommunityChallenge from './components/CommunityChallenge'; // Ensure the path is correct
import SocialMedia from './components/SocialMedia'; // Ensure the path is correct
import BookNearbyGym from './components/BookNearbyGym'; // Ensure the path is correct
import GymDetails from './components/GymDetails'; // Ensure the path is correct
import Navbar from './components/Navbar'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be present on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Main page */}
        <Route path="/login" element={<UserAuth />} /> {/* User authentication */}
        <Route path="/workout" element={<Workout />} /> {/* Workout page */}
        <Route path="/diet" element={<Diet />} /> {/* Diet page */}
        <Route path="/community-challenge" element={<CommunityChallenge />} /> {/* Community challenge */}
        <Route path="/book-gym" element={<BookNearbyGym />} /> {/* Book nearby gym */}
        <Route path="/gym-details" element={<GymDetails />} /> {/* Gym details page */}
        <Route path="/social-media" element={<SocialMedia />} /> {/* Social media page */}
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
