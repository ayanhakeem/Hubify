// src/pages/Support/Support.jsx
import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support">
      {/* Hero Section */}
      <section className="support-hero">
        <h1>Need Help? <span>We’ve Got You</span></h1>
        <p>
          At <b>NCEThub</b>, we value our community. Whether you have questions, 
          technical issues, or feedback, we’re here to support you.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="support-faq">
        <h2>📌 Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>💻 How do I register for events?</h3>
            <p>
              Simply visit the <b>Events</b> page, select your event, and click
              on <b>Register</b>. You’ll get a confirmation email once registered.
            </p>
          </div>
          <div className="faq-card">
            <h3>🎫 Is participation free?</h3>
            <p>
              Most of our events are free for students. Some premium hackathons
              may have a minimal entry fee which will be clearly mentioned.
            </p>
          </div>
          <div className="faq-card">
            <h3>📩 How can I contact support?</h3>
            <p>
              You can fill the form below or email us directly at{" "}
              <a href="mailto:support@ncethub.com">support@ncethub.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="support-contact">
        <h2>📬 Contact Support</h2>
        <form className="support-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Write your message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Support;
