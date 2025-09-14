// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Register.css";

const Register = ({ user }) => {
  const { hackathonId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    teamMembers: '',
    college: '',
    city: '',
    state: ''
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/members/register', {
        hackathonId,
        ...formData
      });

      alert(response.data.message);
      navigate('/events');
    } catch (error) {
      console.error(error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="register-page">
      <h2>Register for Hackathon</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <label>Team Members (comma-separated):
          <input type="text" name="teamMembers" value={formData.teamMembers} onChange={handleInputChange} />
        </label>
        <label>College:
          <input type="text" name="college" value={formData.college} onChange={handleInputChange} required />
        </label>
        <label>City:
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
        </label>
        <label>State:
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
