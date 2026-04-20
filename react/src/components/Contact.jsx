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

  // const handleFirstNameChange = (e) => {
  //   setForm({ ...form, firstName: e.target.value });
  // };

  // const handleLastNameChange = (e) => {
  //   setForm({ ...form, lastName: e.target.value });
  // };

  // const handleEmailChange = (e) => {
  //   setForm({ ...form, email: e.target.value });
  // };

  // const handleSubjectChange = (e) => {
  //   setForm({ ...form, subject: e.target.value });
  // };

  // const handleMessageChange = (e) => {
  //   setForm({ ...form, message: e.target.value });
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.firstName.trim()) {
      alert("Please enter your first name.");
      return;
    }
    if (!form.lastName.trim()) {
      alert("Please enter your last name.");
      return;
    }
    if (!form.email.trim()) {
      alert("Please enter your email address.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!form.subject.trim()) {
      alert("Please enter a subject.");
      return;
    }
    if (!form.message.trim()) {
      alert("Please enter a message.");
      return;
    }

    alert("Form Submitted Successfully!!");
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
