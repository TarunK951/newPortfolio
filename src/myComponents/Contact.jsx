import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./contact.css";

function Contact() {
  const formRef = useRef(null);
  const iconsRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    const icons = iconsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (form) observer.observe(form);
    if (icons) observer.observe(icons);

    // Initialize EmailJS
    emailjs.init("pZoKlOxSnjpqbwJnI");

    return () => {
      if (form) observer.unobserve(form);
      if (icons) observer.unobserve(icons);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ktyezlc",
        "template_ew73nrf",
        formData,
        "pZoKlOxSnjpqbwJnI"
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      {[...Array(40)].map((_, i) => (
        <div key={i} className="smoke-particle"></div>
      ))}
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Reach out via the form or connect with me on social media.
        </p>
        <div className="contact-content">
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Send Message
            </button>
            <p className={`success-message ${success ? "visible" : ""}`}>
              Message sent successfully!
            </p>
          </form>
          <div className="social-icons" ref={iconsRef}>
            <a
              href="https://github.com/TarunK951"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              aria-label="GitHub profile"
            >
              <FaGithubSquare className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/satya-tarun-k-91038424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="mailto:satyatarun.951@gmail.com"
              className="social-icon email"
              aria-label="Email"
            >
              <IoIosMail className="icon" />
            </a>
            <a
              href="https://wa.me/9391954467"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsappSquare className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
