import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '../components/Input';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      setFormData(prev => ({
        ...prev,
        subject: `Booking Inquiry: ${service}`,
        message: `I would like to book or get more information about the "${service}" service.`,
      }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      if (formData.email.includes('@')) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="bg-light py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-dark sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg text-gray-600">Have a question or need to book a service? Reach out to us!</p>
            <div className="mt-8 space-y-4 text-gray-700">
              <p><strong>Address:</strong> 123 Auto Drive, Car City, ST 54321</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> contact@autoprosolutions.com</p>
              <p><strong>Hours:</strong> Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input id="name" label="Full Name" type="text" value={formData.name} onChange={handleChange} required />
              <Input id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} required />
              <Input id="subject" label="Subject" type="text" value={formData.subject} onChange={handleChange} required />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400">
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {status === 'success' && <p className="mt-4 text-green-600">Thank you for your message! We'll get back to you shortly.</p>}
            {status === 'error' && <p className="mt-4 text-red-600">Something went wrong. Please check your details and try again.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;