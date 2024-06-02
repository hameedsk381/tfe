import React, { useState } from 'react';
import './registration.css';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    gender: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false); 
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    setOpenSnackbar(true);

    setFormData({
      name: '',
      email: '',
      role: '',
      gender: '',
    });
    

  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit} className="volunteer-form">
      <h2>Volunteer Registration Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role :</label>
        <select name="role" id="role" value={formData.role} onChange={handleChange}>
          <option value="">-- Please select a role --</option>
          <option value="tutor">Tutor</option>
          <option value="event organizer">Event Organizer</option>
          <option value="administrative assistant">Administrative Assistant</option>
        </select>
      </div>
      <div className="form-group gender-group">
        <label>Gender:</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formData.gender === 'male'}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formData.gender === 'female'}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="non-binary"
              onChange={handleChange}
              checked={formData.gender === 'non-binary'}
            />
            Non-Binary
          </label>
        </div>
      </div>
      <button type="submit">Submit</button>

      {/* Snackbar component */}
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Thank you for registering! We'll be in touch soon."
      />
    </form>
  );
}

export default Registration;
