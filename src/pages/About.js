import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Banner section */}
      <section className="home">
     
        <div className="home-container">
          <h1>Welcome to Bryan's Café</h1>
          <p>Where Community Meets Flavor. Discover Our Story and Our Passion for Quality.</p>
          <hr />
          <a href="/menu">Explore Our Menu</a>
        </div>
      </section>

      {/* About Us content section */}
      <div className="about-us">
        <div className="row">
          <div className="box image-box">
            <img src="about-img.jpg" alt="About Us" />
          </div>
          <div className="box text-box">
            <h2>About Us</h2>
            <p>Welcome to Bryan's Café, where every sip and bite is a celebration of flavor and community. Our café is dedicated to creating a warm and inviting atmosphere for all who walk through our doors. We offer a delightful menu featuring freshly brewed coffee, homemade pastries, and seasonal dishes made from locally sourced ingredients. At Bryan's, we strive to foster connections and provide a space where friends, families, and neighbors can come together to enjoy great food and memorable experiences.</p>
          </div>
        </div>

        <div className="row">
          <div className="box text-box">
            <h2>Our History</h2>
            <p>Bryan's Café was established with a passion for coffee and community. Drawing from experiences and love for culinary arts, Bryan envisioned a café that not only serves delicious food and drinks but also builds connections within the community. Since opening, Bryan's has become a cherished spot for gatherings, celebrations, and everyday moments, growing alongside our loyal patrons. We look forward to continuing our journey and sharing our love for food and coffee with you.</p>
          </div>
          <div className="box image-box">
            <img src="history-img.jpg" alt="Our History" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
