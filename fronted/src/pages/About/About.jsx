// src/pages/About/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>
          About <span>NCEThub</span>
        </h1>
        <p>
          <b>NCEThub</b> is a community-driven platform for{" "}
          <b>hackathons</b>, <b>coding competitions</b>, and{" "}
          <b>innovation events</b>.  
          Our mission is simple: to connect coders, creators, and innovators
          under one roof where ideas turn into reality.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-box">
          <h2>🌟 Our Mission</h2>
          <p>
            We aim to <b>empower students, developers, and tech enthusiasts</b>
            by providing opportunities to learn, collaborate, and showcase
            their talent.  
            Through workshops, coding challenges, and hackathons, NCEThub is
            building the next generation of innovators.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="about-highlights">
        <h2>💡 Why Choose NCEThub?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>🚀 Opportunities</h3>
            <p>
              Explore exclusive events, gain real-world experience, and grow
              your coding journey.
            </p>
          </div>
          <div className="highlight-card">
            <h3>🤝 Collaboration</h3>
            <p>
              Network with peers, team up with innovators, and work on exciting
              challenges.
            </p>
          </div>
          <div className="highlight-card">
            <h3>🏆 Recognition</h3>
            <p>
              Showcase your skills to recruiters, mentors, and the global
              coding community.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>👨‍💻 Meet Our Founder</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://via.placeholder.com/200"
              alt="Mahmadayan Hakeem"
              className="team-photo"
            />
            <h3>Mahmadayan Hakeem</h3>
            <p className="role">CEO & Founder of NCEThub</p>
            <p className="bio">
              Passionate about building communities for coders and creators,
              Mahmadayan founded NCEThub to empower students and professionals
              through technology, collaboration, and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
