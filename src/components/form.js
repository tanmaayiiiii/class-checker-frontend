import React, { useState } from 'react';
import { signUpUser } from '../services/api.js';
import '../styles/SeatCheckerForm.css'; // We'll add some styles for the form

const SeatCheckerForm = () => {
  const [email, setEmail] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Call the signup function from api.js
      const data = await signUpUser(email, classNumber);
      
      // Success message
      setMessage(data.message); // "User registered successfully!"
    } catch (error) {
      // Error handling
      setMessage(error.message || 'Error signing up');
    }
  };

  return (
    <div className="form-container">
      <h2>Class Seat Checker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Class Number:</label>
          <input
            type="text"
            value={classNumber}
            onChange={(e) => setClassNumber(e.target.value)}
            required
            className="form-control"
            placeholder="Enter class number"
          />
        </div>

        <button type="submit" className="submit-btn">Confirm</button>
      </form>

      {/* Display Success or Error Message */}
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default SeatCheckerForm;