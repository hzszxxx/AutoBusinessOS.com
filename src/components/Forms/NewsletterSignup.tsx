'use client';

import { useState } from 'react';
import { trackEmailSubscriptionConversion } from '@/components/Analytics/GoogleAds';
import { trackFormEvent } from '@/components/Analytics/GoogleAnalytics';

interface NewsletterSignupProps {
  source?: string;
  className?: string;
}

export default function NewsletterSignup({ 
  source = 'footer', 
  className = '' 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Track form submission start
      trackFormEvent('newsletter_signup', 'start');
      
      // Simulate API call (replace with actual newsletter service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track successful conversion
      trackEmailSubscriptionConversion(email, source);

      // Track form completion
      trackFormEvent('newsletter_signup', 'submit');

      setSubmitStatus('success');
      setEmail('');

    } catch (error) {
      console.error('Newsletter signup error:', error);
      trackFormEvent('newsletter_signup', 'error');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <h3 className={`text-lg font-semibold mb-4 ${className?.includes('text-white') ? 'text-white' : 'text-gray-900'}`}>
        Get the Latest Automation Insights
      </h3>
      <p className={`mb-4 ${className?.includes('text-white') ? 'text-gray-300' : 'text-gray-600'}`}>
        Subscribe to our newsletter to stay informed about enterprise automation trends and best practices.
      </p>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
          Thank you for subscribing! Check your email for confirmation.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
          There was an error subscribing. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            className?.includes('text-white')
              ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'
              : 'border-gray-300 bg-white text-gray-900'
          }`}
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            email && !isSubmitting
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}
