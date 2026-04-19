import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Message sent! We'll respond as soon as possible.");
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_card">
        <h2 className="contact_heading">Get in Touch</h2>
        <p className="contact_subtext">
          Have questions? We'd love to hear from you. Send us a message and we'll respond
          as soon as possible.
        </p>

        <div className="contact_row">
          <div className="contact_field">
            <label className="contact_label" htmlFor="firstName">
              First Name <span className="contact_required">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="contact_input"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="contact_field">
            <label className="contact_label" htmlFor="lastName">
              Last Name <span className="contact_required">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="contact_input"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="contact_field">
          <label className="contact_label" htmlFor="email">
            Email Address <span className="contact_required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact_input"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="contact_field">
          <label className="contact_label" htmlFor="subject">
            Subject <span className="contact_required">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="contact_input"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        <div className="contact_field">
          <label className="contact_label" htmlFor="message">
            Message <span className="contact_required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="contact_textarea"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button className="contact_submit" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
