import React, { useState } from 'react';

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    gender: '',
    domain: '',
    certificate: '',
    college: '',
    contact: '',
    whatsapp: '',
    qualification: '',
    currentYear: '',
    source: '',
    sourceCustom: '',
    telegramLinkedIn: '',
    terms: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSf6ZnxoCY-vc0r9y7GltZonEKZSJvW_muftVc_EG_mk8XgOeg/formResponse';
    form.method = 'POST';
    form.submit();
  };

  return (
    <form id="bootstrapForm" className="max-w-2xl mx-auto p-8  rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">
        Internship Application Form
      </h2>
      <p className="mb-6 text-gray-600">
        This is a 4 Week Virtual Internship Program opportunity from CyberWave. Please fill all the required fields carefully. 
        Note: Please do not spam by applying multiple times for the same domain; your application will be considered invalid.
      </p>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Email</legend>
        <input
          type="email"
          name="email"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Name</legend>
        <input
          type="text"
          name="name"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Name"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Gender</legend>
        <div className="flex">
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="form-radio"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
              required
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="form-radio"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
              required
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Preferred Internship Domain</legend>
        <div className="flex flex-wrap">
          {['Web Development', 'Android Development', 'Data Science', 'Java Programming', 'DSA (C++ Programming)', 'Python Programming', 'UI/UX Design', 'Artificial Intelligence', 'Machine Learning'].map((domain) => (
            <label key={domain} className="inline-flex items-center mr-6 mb-2">
              <input
                type="radio"
                name="domain"
                value={domain}
                className="form-radio"
                checked={formData.domain === domain}
                onChange={handleChange}
                required
              />
              <span className="ml-2">{domain}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Certificate</legend>
        <div className="flex">
          {['Gold', 'Silver', 'Bronze'].map((certificate) => (
            <label key={certificate} className="inline-flex items-center mr-6 mb-2">
              <input
                type="radio"
                name="certificate"
                value={certificate}
                className="form-radio"
                checked={formData.certificate === certificate}
                onChange={handleChange}
                required
              />
              <span className="ml-2">{certificate}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">College</legend>
        <input
          type="text"
          name="college"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.college}
          onChange={handleChange}
          required
          aria-label="College"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Contact No.</legend>
        <input
          type="tel"
          name="contact"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.contact}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          aria-label="Contact Number"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">WhatsApp Number</legend>
        <input
          type="tel"
          name="whatsapp"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          aria-label="WhatsApp Number"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Highest Academic Qualification</legend>
        <input
          type="text"
          name="qualification"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.qualification}
          onChange={handleChange}
          required
          aria-label="Qualification"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Current Year (Education)</legend>
        <input
          type="text"
          name="currentYear"
          className="form-control border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.currentYear}
          onChange={handleChange}
          required
          aria-label="Current Year"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Where did you learn about CyberWave?</legend>
        <div className="flex flex-wrap">
          {['Social Media (LinkedIn, Instagram, etc.)', 'Referral (Friends, Colleagues, Relatives, etc.)', 'Campus Placement Cell/Coordinators'].map((source) => (
            <label key={source} className="inline-flex items-center mr-6 mb-2">
              <input
                type="radio"
                name="source"
                value={source}
                className="form-radio"
                checked={formData.source === source}
                onChange={handleChange}
                required
              />
              <span className="ml-2">{source}</span>
            </label>
          ))}
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="source"
              value="__other_option__"
              className="form-radio"
              checked={formData.source === '__other_option__'}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="sourceCustom"
              className="form-control border border-gray-300 rounded-lg p-3 ml-2"
              placeholder="Custom value"
              value={formData.sourceCustom}
              onChange={handleChange}
              aria-label="Custom Source"
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Joined our Telegram and LinkedIn*</legend>
        <div className="flex">
          <label className="inline-flex items-center mr-6 mb-2">
            <input
              type="radio"
              name="telegramLinkedIn"
              value="Yes"
              className="form-radio"
              checked={formData.telegramLinkedIn === 'Yes'}
              onChange={handleChange}
              required
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="telegramLinkedIn"
              value="No"
              className="form-radio"
              checked={formData.telegramLinkedIn === 'No'}
              onChange={handleChange}
              required
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Terms and Conditions</legend>
        <div className="flex">
          <label className="inline-flex items-center mb-2">
            <input
              type="radio"
              name="terms"
              value="Yes"
              className="form-radio"
              checked={formData.terms === 'Yes'}
              onChange={handleChange}
              required
            />
            <span className="ml-2">I have understood the internship details and I hereby acknowledge and accept the terms and conditions.</span>
          </label>
        </div>
      </fieldset>

      <button type="submit" className="btn btn-primary w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
    </form>
  );
};

export default InternshipForm;
