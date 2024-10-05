import React from 'react';
import Button from "./Button";

const CertificateDetails = () => {
  const certificateTypes = [
    {
      type: 'Bronze',
      projects: '3 projects (all mandatory)',
      perks: 'Certificate to your home (offline)',
    },
    {
      type: 'Silver',
      projects: '4 projects (3 mandatory, 1 optional)',
      perks: 'CyberWave T-shirt and certificate to your house',
    },
    {
      type: 'Gold',
      projects: '5 projects (3 mandatory, 2 optional)',
      perks: 'Gold certificate, CyberWave T-shirt, and CyberWave bottle',
    },
  ];

  const applyLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeZQdDcHyb8d7jRe15FlOsBGS8mRr_xW8emuXPiXNfXp8ca4Q/viewform';

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 ">CyberWave Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificateTypes.map((certificate, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md flex flex-col text-gray-400">
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-4">{certificate.type} Certificate</h2>
              <p className="mb-2">
                <strong className="text-gray-400">Projects:</strong> {certificate.projects}
              </p>
              <p className="mb-4">
                <strong className="text-gray-400">Perks:</strong> {certificate.perks}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 opacity-70">
        <Button href={applyLink} className="text-gray-400">Apply Now</Button>
      </div>
      <div className="mt-8 p-4 rounded-lg shadow-md">
        <p className="text-center text-lg text-gray-400">
          If you want an online certificate, we will provide it. You can ask doubts during the course, and we will assist you once you have registered and the course is ongoing.
        </p>
      </div>
    </div>
  );
};

export default CertificateDetails;
