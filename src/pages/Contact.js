import React, { useEffect, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('/branches.xml')
      .then((response) => response.text())
      .then((xmlString) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlString, 'application/xml');
        
        const branchItems = Array.from(xml.getElementsByTagName('branch')).map((branch) => ({
          address: branch.getElementsByTagName('address')[0].textContent,
          contact: branch.getElementsByTagName('contact')[0].textContent,
          hours: branch.getElementsByTagName('hours')[0].textContent,
          mapLink: branch.getElementsByTagName('mapLink')[0].textContent,
        }));

        setBranches(branchItems);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Branch Information */}
      <div className="branches">
        <h2>Our Branches</h2>
        {branches.map((branch, index) => (
          <div className="branch" key={index}>
            <p><strong>Address:</strong> {branch.address}</p>
            <p><strong>Contact:</strong> {branch.contact}</p>
            <p><strong>Hours:</strong> {branch.hours}</p>
            <a href={branch.mapLink} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
