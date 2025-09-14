// src/pages/Home/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Welcome to <span>NCEThub 🚀</span>
        </h1>
        <p>
          Your one-stop platform for <b>hackathons</b>, <b>coding competitions</b>,
          and <b>innovation events</b>. Collaborate, compete & create!
        </p>
        <a href="/events" className="cta-btn">
          Explore Events
        </a>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>🔥 Hackathons</h2>
          <p>Find and join the most exciting hackathons happening across campuses.</p>
        </div>
        <div className="feature-card">
          <h2>💡 Innovation</h2>
          <p>Showcase your creativity, build amazing projects, and get noticed.</p>
        </div>
        <div className="feature-card">
          <h2>🏆 Competitions</h2>
          <p>Compete in coding challenges and sharpen your problem-solving skills.</p>
        </div>
        <div className="feature-card">
          <h2>🤝 Networking</h2>
          <p>Connect with peers, mentors, and industry experts to grow your career.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose NCEThub?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>🌍 Global Community</h3>
            <p>
              Be part of a growing network of students, coders, and innovators
              worldwide.
            </p>
          </div>
          <div className="why-card">
            <h3>⚡ Hands-On Learning</h3>
            <p>
              Gain real-world skills through hackathons, workshops, and coding
              challenges.
            </p>
          </div>
          <div className="why-card">
            <h3>🎯 Career Growth</h3>
            <p>
              Get noticed by recruiters, showcase your skills, and build your
              portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Community Says 💬</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "NCEThub helped me participate in my first hackathon. I learned so
              much and even landed an internship!"
            </p>
            <h4>- Ananya, Student Developer</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The competitions pushed me to improve my coding skills. Great
              platform for growth!"
            </p>
            <h4>- Rohan, Competitive Programmer</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "Amazing place to network with like-minded people and build
              real-world projects."
            </p>
            <h4>- Meera, Innovator</h4>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <h2>Be Part of the Change 🚀</h2>
        <p>
          Ready to take your coding journey to the next level? Join NCEThub
          today!
        </p>
        <a href="/signup" className="cta-btn">
          Join Now
        </a>
      </section>
    </div>
  );
};

export default Home;
