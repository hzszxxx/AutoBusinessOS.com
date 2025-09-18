'use client';

import { useState } from 'react';
import { trackAdConversion, AdConversions } from '@/components/Analytics/GoogleAds';
import { trackFormEvent } from '@/components/Analytics/GoogleAnalytics';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Track form submission start
      trackFormEvent('contact_form', 'start');
      
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track successful conversion
      trackAdConversion(
        AdConversions.CONTACT_FORM_SUBMIT,
        100, // $100 value for contact form submission
        'USD',
        `contact_${Date.now()}`
      );

      // Track form completion
      trackFormEvent('contact_form', 'submit');

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      trackFormEvent('contact_form', 'error');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Send Us a Message
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Fill out the form below and we'll get back to you within 24 hours with a personalized response.
      </p>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          There was an error submitting your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your Company Inc."
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={(e) => handleInputChange('interest', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select an option</option>
            <option value="marketing-automation">Marketing Automation</option>
            <option value="sales-automation">Sales Automation</option>
            <option value="customer-service">Customer Service Automation</option>
            <option value="finance-automation">Finance Automation</option>
            <option value="hr-automation">HR Automation</option>
            <option value="operations-automation">Operations Automation</option>
            <option value="general-inquiry">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Tell us about your automation needs and how we can help..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg ${
            isFormValid && !isSubmitting
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
