import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./UserDashboard.css";

const UserDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;

        // Fetch user registrations
        const regRes = await axios.get(
          `http://localhost:5000/api/members/user/${user.email}`
        );
        setRegistrations(regRes.data.registrations);

        // Fetch all events
        const eventsRes = await axios.get("http://localhost:5000/api/events");
        setEvents(eventsRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));

  // Helper to get hackathon title from hackathonId
  const getHackathonTitle = (hackathonId) => {
    const event = events.find(e => e._id === hackathonId);
    return event ? event.title : hackathonId;
  };

  return (
    <div className="user-dashboard">
      <h2 className="welcome">Welcome, {user.name}!</h2>

      {registrations.length === 0 ? (
        <p className="no-registrations">You have not registered for any hackathons yet.</p>
      ) : (
        <div className="registrations-container">
          <h3>Your Registered Hackathons:</h3>
          <ul className="registrations-list">
            {registrations.map((reg) => (
              <li key={reg._id} className="registration-item">
                <span className="hackathon-title">{getHackathonTitle(reg.hackathonId)}</span> — {reg.college}, {reg.city}, {reg.state} <br />
                <span className="team-members">Team Members: {reg.teamMembers || 'N/A'}</span> <br />
                <span className="registered-at">Registered At: {new Date(reg.registeredAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
