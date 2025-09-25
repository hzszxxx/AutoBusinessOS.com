import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import MetaTags from '@/components/SEO/MetaTags'

const healthcarePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Healthcare Industry Automation Solutions",
  "description": "Intelligent healthcare automation solutions for patient management, appointment systems, and medical records intelligence",
  "url": "https://autobusinessos.com/industries/healthcare/",
  "mainEntity": {
    "@type": "Service",
    "name": "Healthcare Automation Solutions",
    "provider": {
      "@type": "Organization",
      "name": "AutoBusinessOS"
    }
  }
}

export default function HealthcarePage() {
  return (
    <Layout>
      <MetaTags
        title="Healthcare Industry Automation Solutions"
        description="Intelligent healthcare automation solutions for patient management, appointment systems, and medical records intelligence"
        keywords="healthcare automation, patient management, medical records, appointment system, healthcare technology"
        canonicalUrl="https://autobusinessos.com/industries/healthcare/"
        schema={healthcarePageSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Industry Automation Solutions
              <span className="block text-yellow-300">Patient Management, Appointment System & Medical Records Intelligence</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Revolutionize healthcare operations with AI-powered patient management, intelligent appointment scheduling, and comprehensive electronic health records systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Calculate Healthcare ROI
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Healthcare Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions designed to improve patient care, streamline operations, and enhance medical outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Appointment Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI-powered appointment optimization, automated scheduling, and patient flow management for improved healthcare delivery
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Patient Management System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive patient records, treatment tracking, and personalized care coordination for better health outcomes
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Electronic Health Records</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Digital medical records, secure data management, and seamless information sharing across healthcare providers
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Start Healthcare Transformation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}