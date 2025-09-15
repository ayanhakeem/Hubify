import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import "./Events.css";

const Events = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/events`);
        setEvents(res.data);
      } catch (err) {
        console.error("Fetch events error:", err.response ? err.response.data : err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Determine event status
  const getEventStatus = (eventDate) => {
    const today = new Date();
    const eventDay = new Date(eventDate);
    today.setHours(0, 0, 0, 0);
    eventDay.setHours(0, 0, 0, 0);

    if (eventDay > today) return "Upcoming";
    if (eventDay.getTime() === today.getTime()) return "Active";
    return "Past";
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      const token = localStorage.getItem("token");
      console.log("Token used:", token);
      console.log("Deleting event with id:", id);
      console.log("API URL:", process.env.REACT_APP_API_URL);

      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Delete response:", res);
      setEvents(events.filter((event) => event._id !== id));
      alert("Event deleted successfully!");
    } catch (err) {
      if (err.response) {
        console.error("Error data:", err.response.data);
        console.error("Status code:", err.response.status);
      } else {
        console.error("Error message:", err.message);
      }
      alert("Failed to delete event.");
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading events...</p>;
  }

  return (
    <div className="events-page">
      <h1>🚀 Events & Competitions</h1>
      <p className="events-subtitle">
        Stay updated with the latest <b>hackathons</b>, <b>workshops</b>, and <b>competitions</b>.
      </p>

      {events.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>No events available.</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => {
            const status = getEventStatus(event.date);
            return (
              <div key={event._id} className="event-card">
                <div className="event-header">
                  <h2>{event.title}</h2>
                  <span className={`status ${status.toLowerCase()}`}>● {status}</span>
                </div>
                <p className="event-type">{event.description}</p>
                <p className="event-date">📅 {new Date(event.date).toLocaleDateString()}</p>

                {user ? (
                  <>
                    <Link to={`/register/${event._id}`} className="register-btn">
                      Register
                    </Link>
                    {user.role === "admin" && (
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(event._id)}
                      >
                        Delete
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    className="register-btn"
                    onClick={() => alert("Please log in to register")}
                  >
                    Register
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Events;
