import Layout from '@/components/Layout/Layout';
import ContactForm from '@/components/Forms/ContactForm';
import { HeaderAd } from '@/components/Ads/GoogleAdSense';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - AutoBusinessOS",
  description: "Get in touch with AutoBusinessOS experts. Contact us for automation consulting, implementation support, or to learn more about our solutions.",
  keywords: "contact AutoBusinessOS, automation consulting, implementation support, enterprise automation contact",
};

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
              Ready to transform your business with automation? Get in touch with our experts 
              for a personalized consultation and discover how AutoBusinessOS can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Space - Before Contact Form */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeaderAd />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@autobusinessos.com</p>
                    <p className="text-gray-600">For general inquiries and support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">Available upon request</p>
                    <p className="text-gray-600">Contact us via email for phone consultation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">
                      Remote-first company<br />
                      Serving clients globally<br />
                      Contact us for local support details
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">💬</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Chat</h4>
                    <p className="text-gray-600">Available 24/7 on our website</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Response Times</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>General Inquiries:</span>
                    <span className="font-medium">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical Support:</span>
                    <span className="font-medium">4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales Inquiries:</span>
                    <span className="font-medium">2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our automation solutions and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How quickly can you implement automation?
              </h3>
              <p className="text-gray-600">
                Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks. 
                We provide detailed project plans during the consultation phase.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do you offer training and support?
              </h3>
              <p className="text-gray-600">
                Yes! We provide comprehensive training for your team and ongoing support to ensure successful adoption 
                and optimization of your automation solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What industries do you serve?
              </h3>
              <p className="text-gray-600">
                We serve a wide range of industries including e-commerce, SaaS, manufacturing, healthcare, 
                consulting, and more. Our solutions are tailored to each industry's specific needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Is there a free consultation?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer free initial consultations to assess your needs and provide recommendations. 
                No obligation, just expert advice to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
