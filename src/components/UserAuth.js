import React, { useState, useRef } from 'react';
import { auth, db, storage } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FaCamera } from 'react-icons/fa'; // For the camera icon
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
import '../styles/UserAuth.css';

const UserAuth = () => {
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [isNewUser, setIsNewUser] = useState(true); // Toggle between Sign Up and Login
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility

  const fileInputRef = useRef(null); // Reference for the file input
  const navigate = useNavigate(); // Initialize navigate

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  // Remove profile picture
  const handleRemoveProfilePic = () => {
    setProfilePic(null);
    fileInputRef.current.value = ''; // Reset the file input field
  };

  // Handle form submission (Sign Up or Login)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isNewUser) {
      // Sign Up logic
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        setLoading(false);
        return;
      }
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        setLoading(false);
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        let profilePicUrl = '';
        if (profilePic) {
          // Upload profile picture to Firebase Storage
          const profilePicRef = ref(storage, `profilePictures/${user.uid}`);
          await uploadBytes(profilePicRef, profilePic);
          profilePicUrl = await getDownloadURL(profilePicRef);
        }

        // Store user details in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          username,
          dob,
          age,
          phone,
          email,
          password,
          profilePicUrl,
        });

        // Show success message
        alert('User signed up successfully!');

        // Reset form fields
        setUsername('');
        setDob('');
        setAge('');
        setPhone('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setProfilePic(null);
        setIsNewUser(true); // Reset to signup mode
        navigate('/'); // Redirect to home page after signup

      } catch (error) {
        alert('Error signing up: ' + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      // Login logic
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User logged in successfully!');
        navigate('/'); // Redirect to home page
      } catch (error) {
        alert('Error logging in: ' + error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle forgot password logic
  const handleForgotPassword = () => {
    if (!email) {
      alert('Please enter your email to reset the password.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset link sent to your email!');
      })
      .catch((error) => {
        alert('Error resetting password: ' + error.message);
      });
  };

  // Calculate age based on Date of Birth
  const handleDobChange = (e) => {
    setDob(e.target.value);
    const today = new Date();
    const birthDate = new Date(e.target.value);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{isNewUser ? 'Sign Up' : 'Login'}</h2>

        {/* Profile Picture Frame */}
        <div className="profile-pic-frame" onClick={() => fileInputRef.current.click()}>
          {profilePic ? (
            <img src={URL.createObjectURL(profilePic)} alt="Profile" />
          ) : (
            <FaCamera className="camera-icon" />
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          id="profilePicInput"
          onChange={handleProfilePicChange}
          accept="image/*"
          style={{ display: 'none' }} // Hide the file input
        />

        {/* Remove Profile Picture */}
        {profilePic && (
          <button className="remove-profile-btn" onClick={handleRemoveProfilePic}>
            Remove Profile
          </button>
        )}

        <form onSubmit={handleSubmit}>
          {isNewUser && (
            <>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="input-field"
              />
              <input
                type="date"
                value={dob}
                onChange={handleDobChange}
                required
                className="input-field"
              />
              <input
                type="text"
                value={age}
                placeholder="Age"
                readOnly
                className="input-field"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone No"
                required
                className="input-field"
              />
            </>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input-field"
          />

          {/* Password Field */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="input-field"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Field */}
          {isNewUser && (
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter Password"
                required
                className="input-field"
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : isNewUser ? 'Sign Up' : 'Login'}
            </button>
          </div>
          <p onClick={() => setIsNewUser(!isNewUser)} className="toggle-auth">
            {isNewUser ? 'Already have an account? Login' : 'New user? Sign Up'}
          </p>
          {!isNewUser && (
            <p onClick={handleForgotPassword} className="forgot-password">
              Forgot Password?
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
