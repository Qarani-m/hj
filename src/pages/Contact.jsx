



import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-2">
                We welcome partnerships and working together. If you have an inquiry, please fill out the form below.
              </p>
              <p className="text-gray-600 text-lg">
                You can call us anytime between 9 A.M. and 5 P. M. EAT
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg resize-vertical"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
                >
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                CONTACT INFO
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have any Queries? Let us know. We will clear it for you at the best.
              </p>
            </div>

            <div className="space-y-8">
              {/* Office Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">OFFICE</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Bankers Court, Off Ngong Road along Green Lane,<br />
                    Nairobi, Kenya
                  </p>
                  <p className="text-gray-600 mt-2">
                    Chandaria Business Innovation & Incubation Centre,<br />
                    Kenyatta University, Thika Road, Kenya
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">EMAIL</h4>
                  <a 
                    href="mailto:info@greengenerationinitiative.org"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    info@greengenerationinitiative.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">PHONE</h4>
                  <a 
                    href="tel:+254797729733"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    (+254) 0797729733
                  </a>
                </div>
              </div>
            </div>

            {/* Map or Additional Info Section */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-green-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
      </div>
    </section>
  );
};


export default Contact;