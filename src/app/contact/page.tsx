'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'general'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '', interest: 'general' });
    alert('Thank you for your interest in TCCA! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Community
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Interested in joining TCCA or learning more about our activities? Get in touch with us!
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                Area of Interest
              </label>
              <select
                name="interest"
                id="interest"
                value={formData.interest}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              >
                <option value="general">General Membership</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="cultural">Cultural Events</option>
                <option value="leadership">Leadership Roles</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your interest in TCCA and any questions you may have."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 prose prose-emerald">
            <h3 className="text-lg font-medium text-emerald-900">Other Ways to Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://discord.gg/gZ9f4Cu" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-500">
                  Join our Discord Community
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/tamutzuchi/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-500">
                  Follow us on Facebook
                </a>
              </li>
              <li>
                <span className="text-gray-600">Monthly Meetings: First Tuesday of every month</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 