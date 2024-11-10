import React, { useState } from 'react';
import Button from './Button'; 
import Heading from './Heading';

// Use the base URL from environment variables
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

function CertificateVerification() {
  const [certificateId, setCertificateId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Build the verification link with the entered ID
    const verificationLink = `${baseUrl}/student?id=${certificateId}`;

    // Open the EJS page in a new tab
    window.open(verificationLink, '_blank');

    // Reset the certificate ID for next verification
    setCertificateId('');
  };

  return (
    <section id="certificateVerification">
      <div className="certificate-verification-container">
        <Heading title="Certificate Verification" className="mt-4 opacity-90" /> 
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
          <div className="certificate-verification-button-container mt-4">
            <Button type="submit">Verify</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CertificateVerification;
