import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AdminEventForm.css"; // We'll create this CSS file for styling

const AdminEventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // JWT from login

      await axios.post("http://localhost:5000/api/events", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setMessage("✅ Event created successfully!");
      setFormData({ title: "", description: "", date: "" });

      // Redirect to events page after success
      setTimeout(() => {
        navigate("/events");
      }, 1000); // Optional delay to show success message briefly

    } catch (error) {
      setMessage("❌ Error creating event. Only admins can create events.");
      console.error(error);
    }
  };

  return (
    <div className="admin-event-form-container">
      <form onSubmit={handleSubmit} className="admin-event-form">
        <h3>Add New Event</h3>

        {message && <div className="message">{message}</div>}

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AdminEventForm;
