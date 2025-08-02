import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);

    window.location.href = `mailto:chelsea.fc.wass@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you soon!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="you@email.com" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Type your message..." 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="contact-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;