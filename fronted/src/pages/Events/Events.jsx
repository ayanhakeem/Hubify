import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import "./Events.css";

const Events = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  // Function to determine the event status based on date
  const getEventStatus = (eventDate) => {
    const today = new Date();
    const eventDay = new Date(eventDate);

    // Clear time portions to compare only dates
    today.setHours(0, 0, 0, 0);
    eventDay.setHours(0, 0, 0, 0);

    if (eventDay > today) {
      return "Upcoming";
    } else if (eventDay.getTime() === today.getTime()) {
      return "Active";
    } else {
      return "Past";
    }
  };

  return (
    <div className="events-page">
      <h1>🚀 Events & Competitions</h1>
      <p className="events-subtitle">
        Stay updated with the latest <b>hackathons</b>, <b>workshops</b>, and{" "}
        <b>competitions</b>.
      </p>

      <div className="events-grid">
        {events.map((event) => {
          const status = getEventStatus(event.date);
          return (
            <div key={event._id} className="event-card">
              <div className="event-header">
                <h2>{event.title}</h2>
                <span className={`status ${status.toLowerCase()}`}>
                  ● {status}
                </span>
              </div>
              <p className="event-type">{event.description}</p>
              <p className="event-date">📅 {new Date(event.date).toLocaleDateString()}</p>

              {user ? (
                <Link
                  to={`/register/${event._id}`}
                  className="register-btn"
                >
                  Register
                </Link>
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
    </div>
  );
};

export default Events;
