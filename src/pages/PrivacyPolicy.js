import React from 'react';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At Bryan's Café, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines what data we collect, how we use it, and your rights regarding that data.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of personal information when you interact with our website or visit our cafe:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, and phone number (if provided via contact form).</li>
        <li><strong>Usage Data:</strong> Details of your interactions on our website, such as pages visited and links clicked, which help us improve our services.</li>
        <li><strong>Location Information:</strong> Approximate location data based on IP address for user experience improvements.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your personal data to:</p>
      <ul>
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Enhance our services and personalize your experience.</li>
        <li>Communicate promotions, offers, and updates if you have opted in to receive marketing communications.</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>We implement various security measures to protect your personal information. Access to your data is limited to authorized personnel, and we regularly review our data security protocols to maintain data protection standards.</p>

      <h2>4. Your Rights</h2>
      <p>You have the right to access, correct, or request the deletion of your personal data. To exercise these rights, please contact us at [contact@brianscafe.com].</p>

      <h2>5. Updates to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically.</p>
    </div>
  );
};

export default PrivacyPolicy;
