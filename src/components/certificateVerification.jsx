import React, { useState } from 'react';
import Button from './Button'; // Assuming Button component is imported
import Heading from './Heading';

// Use the base URL from environment variables
const baseUrl = process.env.REACT_APP_BASE_URL || 'https://cyberwave.info';

function CertificateVerification() {
  const [certificateId, setCertificateId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Build the verification link with the entered ID
    const verificationLink = `${baseUrl}/api/student?id=${certificateId}`;

    // Open the EJS page in a new tab
    window.open(verificationLink, '_blank');

    // Reset the certificate ID for next verification
    setCertificateId('');
  };

  return (
    <section id="certificateVerification">
      <div className="certificate-verification-container">
        <Heading title="Certificate Verification" className="mt-4 opacity-90" /> {/* Adjusted margin top */}
        <form onSubmit={handleSubmit} className="certificate-verification-form flex flex-col items-center">
          <label htmlFor="certificateId" className="certificate-verification-label">
            Enter Certificate ID:
          </label>
          <input
            type="text"
            id="certificateId"
            value={certificateId}
            onChange={(event) => setCertificateId(event.target.value)}
            required
            className="certificate-verification-input"
          />

          {/* Center the form elements using flexbox */}
          <div className="certificate-verification-button-container mt-4">
            <Button onClick={handleSubmit}>Verify</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CertificateVerification;
