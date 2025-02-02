import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookNearbyGym.css';

// Import images
import weightAndBarsImage from '../assets/Weight & Bars.jpg';
import jupitoFitnessImage from '../assets/jupito fitness.png';
import powerzoneImage from '../assets/powerzone gym.jpg';
import flexGymImage from '../assets/the flex.png';
import fitnessShastraImage from '../assets/fitness shastra.jpg';
import eGymImage from '../assets/e-gym.jpg';
import prime1FitnessImage from '../assets/prime.webp';
import cultImage from '../assets/cult.png';
import cloud9Image from '../assets/cloud 9.png';
import fitlifeImage from '../assets/fitlife.png';
import ironParadiseImage from '../assets/iron paradie.jpg';
import peoplesGymImage from '../assets/people.jpg';

// Import background image
import backgroundImage from '../assets/Nearby.png';

const gyms = [
  {
    name: 'Weight & Bars',
    location: 'Aruna Residency, A-1, Malad, Sunder Nagar, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.7',
    phone: '09819439189',
    feeStructure: {
      '3 months': '4500 ₹',
      '6 months': '8500 ₹',
      '1 year': '8599 ₹',
    },
    image: weightAndBarsImage,
  },
  {
    name: 'Jupito Fitness',
    location: 'A- Ahimsa, Keshav Srishti Apartment, CHSL, New Link Rd, above Bank Of India, Malad, Sunder Nagar, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.8',
    phone: '09619702324',
    feeStructure: {
      '3 months': '10,000 ₹',
      '6 months': '12,500 ₹',
      '1 year': '14999 ₹',
    },
    image: jupitoFitnessImage,
  },
  {
    name: 'Powerzone Gym',
    location: 'Power Zone Gym, Sumati Sadan, Malad, Orlem, Dominic Colony, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.8',
    phone: '07208445444',
    feeStructure: {
      '3 months': '6000 ₹',
      '6 months': '8000 ₹',
      '1 year': '12000 ₹',
    },
    image: powerzoneImage,
  },
  {
    name: 'The Flex Gym',
    location: '1st floor, Rele Smruti Building, Nadiadwala Colony No.1, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.7',
    phone: '09773115684',
    feeStructure: {
      'N/A': 'N/A',
    },
    image: flexGymImage,
  },
  {
    name: 'Fitness Shastra',
    location: 'Co-operative Society, Dheeraj Ganga, Chincholi Bunder Rd, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.2',
    phone: '022 4006 5868',
    feeStructure: {
      '3 months': '10000 ₹',
      '6 months': '12000 ₹',
      '1 year': '16000 ₹',
    },
    image: fitnessShastraImage,
  },
  {
    name: 'E-Gym',
    location: 'Ijmima Complex, Infinity 2, Mindspace, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.6',
    phone: '07685999444',
    feeStructure: {
      'N/A': 'N/A',
    },
    image: eGymImage,
  },
  {
    name: 'Prime 1 Fitness',
    location: 'Renis Apartments, 1st Floor Ahimsa Marg, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.8',
    phone: '08355861682',
    feeStructure: {
      '3 months': '7000 ₹',
      '6 months': '9000 ₹',
      '1 year': '16000 v',
    },
    image: prime1FitnessImage,
  },
  {
    name: 'Cult',
    location: '1st Floor, Dheeraj Sagar Apartment, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.7',
    phone: '022 4507 2670',
    feeStructure: {
      'N/A': 'N/A',
    },
    image: cultImage,
  },
  {
    name: 'Cloud 9',
    location: 'Kalpataru Pinnacle, 6th floor, Opp. Inorbit Mall, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.1',
    phone: '07400068975',
    feeStructure: {
      'N/A': 'N/A',
    },
    image: cloud9Image,
  },
  {
    name: 'Fitlife Gym',
    location: '1st Floor, Kalpataru Plaza, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.8',
    phone: '07208329335',
    feeStructure: {
      '3 months': '6000 ₹',
      '6 months': '12000 ₹',
      '1 year': '16000 v',
    },
    image: fitlifeImage,
  },
  {
    name: 'Iron Paradise Fitness Club',
    location: 'Swami Vivekananda Rd, behind Milap petrol pump, Kandivali West, Mumbai, Maharashtra 400064',
    rating: '4.9',
    phone: '09082919410',
    feeStructure: {
      '3 months': '3500 ₹',
      '6 months': '8000 ₹',
      '1 year': '10000 ₹',
    },
    image: ironParadiseImage,
  },
  {
    name: 'Peoples Gym',
    location: 'Ground Floor, Keshav Mansion, Malad West, Mumbai, Maharashtra 400064',
    rating: '4.3',
    phone: '08291293893',
    feeStructure: {
      '3 months': '15000 ₹',
      '6 months': '19000 ₹',
      '1 year': '28000 ₹',
    },
    image: peoplesGymImage,
  },
];

const BookNearbyGym = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleBookNow = (gym) => {
    navigate('/gym-details', { state: { gym } });
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  // Filter gyms based on search query
  const filteredGyms = gyms.filter((gym) =>
    gym.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="book-gym-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button className="home-btn" onClick={handleNavigateHome}>
      ← Home
      </button>
      <h2>Book a Nearby Gym</h2>
      <input
        type="text"
        placeholder="Search for gyms..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />
      <div className="gym-list">
        {filteredGyms.length > 0 ? (
          filteredGyms.map((gym, index) => (
            <div key={index} className="gym-card"> {/* Apply .gym-card class */}
              <img src={gym.image} alt={gym.name} className="gym-image" />
              <h3>{gym.name}</h3>
              <p>Rating: {gym.rating}</p>
              <button className="book-btn" onClick={() => handleBookNow(gym)}>
                Enquiry Now
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No gyms found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default BookNearbyGym;
