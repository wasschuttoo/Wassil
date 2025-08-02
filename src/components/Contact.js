import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type your message..." required></textarea>
          </div>
          <button className="contact-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;