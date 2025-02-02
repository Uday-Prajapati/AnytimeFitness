import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Import your Firebase config
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Include updateDoc for updating user data
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfile.css'; // Ensure this line is correct

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logoutSuccess, setLogoutSuccess] = useState(false); // State for logout success message
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [formData, setFormData] = useState({}); // State for form data
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;

      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setFormData(userDoc.data()); // Set formData to userData for editing
        } else {
          console.error("No such document!");
        }
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }

      setLoading(false);
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    setLogoutSuccess(true); // Set logout success state to true
    setTimeout(() => {
      navigate('/'); // Redirect to home after 2 seconds
    }, 2000);
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data state
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Assuming you have a method to upload the image and get the URL
      // For demonstration, let's just set the file name temporarily
      setFormData({ ...formData, profilePicUrl: URL.createObjectURL(file) });
      // In real implementation, upload the image to Firebase and get the URL
    }
  };

  const handleUpdateProfile = async () => {
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, 'users', user.uid), formData); // Update user data in Firestore
      setIsEditing(false); // Exit editing mode
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="profile-page">
      {logoutSuccess && <div className="logout-message">Logout Successfully</div>} {/* Logout success message */}

      {userData && !logoutSuccess && (
        <div className="profile-card"> {/* Main profile card container */}
          {/* Profile image section */}
          <div className="profile-image-container">
            {formData.profilePicUrl ? (
              <img src={formData.profilePicUrl} alt="Profile" />
            ) : (
              <img src="default-profile.jpg" alt="Default Profile" />  // Fallback image
            )}
            <h3>{formData.username}</h3>
            <p>Member</p> {/* You can change this to reflect the user's role */}
          </div>

          {/* Profile details section */}
          <div className="profile-details">
            <h2>Profile Details</h2>
            {isEditing ? (
              <>
                <div className="details">
                  <strong>Username:</strong>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="details">
                  <strong>Date of Birth:</strong>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="details">
                  <strong>Age:</strong>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="details">
                  <strong>Phone No:</strong>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="details">
                  <strong>Email:</strong>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="details">
                  <strong>Password:</strong>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    onChange={handleChange}
                  />
                </div>
                <div className="details">
                  <strong>Profile Picture:</strong>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <button type="button" onClick={handleUpdateProfile}>Save Changes</button>
              </>
            ) : (
              <>
                <div className="details">
                  <strong>Username:</strong> <span>{userData.username}</span>
                </div>
                <div className="details">
                  <strong>Date of Birth:</strong> <span>{userData.dob}</span>
                </div>
                <div className="details">
                  <strong>Age:</strong> <span>{userData.age}</span>
                </div>
                <div className="details">
                  <strong>Phone No:</strong> <span>{userData.phone}</span>
                </div>
                <div className="details">
                  <strong>Email:</strong> <span>{userData.email}</span>
                </div>
                <div className="details">
                  <strong>Password:</strong> <span>********</span> {/* Hidden password */}
                </div>
                <button type="button" onClick={handleEditClick}>Edit Profile</button>
                <button type="button" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
