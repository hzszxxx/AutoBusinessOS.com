import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Service Automation Platform - AI Chatbots, Ticketing Systems & Knowledge Base Management | AutoBusinessOS',
  description: 'Professional customer service solutions featuring AI chatbots, ticketing systems, and knowledge base management. Reduce response time by 70% and drive digital transformation.',
  keywords: 'customer service automation, AI customer service, ticketing system, customer service chatbot',
}

export default function customerserviceautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Service Automation Platform
              <span className="block text-yellow-300">AI Chatbots, Ticketing Systems & Knowledge Base Management</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional customer service automation platform solutions that help enterprises achieve efficient and intelligent business process management. Reduce response time by 70% and improve overall operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Calculate ROI Free
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Pain Points in Traditional Customer Service Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research shows that 78% of enterprises face serious efficiency and quality issues in customer service management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excessive Response Times</h3>
              <p className="text-gray-600 mb-4">
                Traditional customer service has average response times exceeding 24 hours, reaching 48 hours during peak periods. Long customer wait times cause satisfaction to plummet, complaints to surge, and severe damage to brand image.
              </p>
              <div className="text-sm text-red-600 font-semibold">Average Response Time: 24+ Hours</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inefficient Handling of Repetitive Issues</h3>
              <p className="text-gray-600 mb-4">
                80% of customer inquiries are repetitive issues, but lack standardized handling processes. Customer service staff need to repeatedly answer the same questions, leading to low work efficiency and inconsistent responses.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Repetitive Issues Rate: 80%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lack of Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Lack of systematic analysis of customer service data, unable to understand customer satisfaction trends, common issue types, and service quality metrics. Management finds it difficult to make data-driven service optimization decisions.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Data utilization rate: Less than 15%</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Point Impact: Customer Satisfaction & Business Loss</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-58%</div>
                  <p className="text-gray-600">Customer satisfaction decline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+120%</div>
                  <p className="text-gray-600">Customer service cost increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">45%</div>
                  <p className="text-gray-600">Customer churn rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Introduction */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Customer Service Automation Platform Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-driven intelligent customer service solutions providing 7x24 hour customer service, significantly improving response efficiency and service quality
            </p>
          </div>

          {/* Core Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Customer Service Chatbot</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Intelligent customer service chatbot based on large language models, supporting natural language understanding and capable of handling complex customer inquiries. 7x24 hour online service with multi-platform integration including websites, messaging apps, and mobile apps.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Natural language understanding accuracy 95%+
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-platform unified access management
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent human handoff mechanism
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Ticketing System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Automated ticket generation and assignment system that intelligently identifies issue types and priorities. Supports ticket status tracking, SLA management, automatic follow-up functions, ensuring every customer issue is handled promptly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic ticket classification and assignment
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SLA time limit management and reminders
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full-process ticket handling tracking
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Knowledge Base</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Dynamically updated intelligent knowledge base system that automatically extracts and optimizes answers from historical conversations. Supports multi-dimensional search, similar question recommendations, and knowledge point correlation analysis to continuously improve answer accuracy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent knowledge extraction and updates
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Semantic search and matching
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Knowledge quality assessment and optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Service Data Analytics</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive customer service data analysis system with real-time service quality monitoring. Provides customer satisfaction analysis, issue classification statistics, service efficiency reports, and more to help management optimize service strategies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time service quality monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer satisfaction trend analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent service strategy recommendations
                </li>
              </ul>
            </div>
          </div>

          {/* Results Showcase */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Customer Service Automation Impact</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">-70%</div>
                <p className="text-gray-600">Response time reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">+85%</div>
                <p className="text-gray-600">Issue resolution efficiency</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">-60%</div>
                <p className="text-gray-600">Human customer service costs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">+92%</div>
                <p className="text-gray-600">Customer satisfaction improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer case studies demonstrating the actual effectiveness and value of our customer service automation platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Major E-commerce Platform</h3>
                  <p className="text-gray-600">Daily customer inquiries: 50,000+</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Daily customer inquiries exceeded 50,000 with a 500-person customer service team</li>
                  <li>• Peak response times exceeded 3 hours, causing customer complaints to surge</li>
                  <li>• Customer service costs reached 15% of revenue</li>
                  <li>• 80% of inquiries were repetitive issues with extremely low efficiency</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implementation:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deployed intelligent customer service chatbots to handle common issues</li>
                  <li>• Established intelligent ticketing system for automatic classification and processing</li>
                  <li>• Built professional e-commerce domain knowledge base</li>
                  <li>• Implemented unified multi-channel customer service platform</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">5 minutes</div>
                    <p className="text-sm text-gray-600">Average response time</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <p className="text-sm text-gray-600">Bot resolution rate</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">-65%</div>
                    <p className="text-sm text-gray-600">Customer service cost reduction</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">4.8/5</div>
                    <p className="text-sm text-gray-600">Customer satisfaction score</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;The intelligent customer service system completely transformed our customer service model. Not only did it significantly reduce operational costs, but more importantly, customer satisfaction improved dramatically. Now we can provide 7x24 quality service to our customers.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— Customer Service Director, Mr. Zhang</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Financial Services Company</h3>
                  <p className="text-gray-600">Customer base: 2M+</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complex financial products requiring highly specialized customer inquiries</li>
                  <li>• Strict regulatory requirements demanding complete service record traceability</li>
                  <li>• Long customer wait times causing continuous satisfaction decline</li>
                  <li>• Long new employee training cycles resulting in unstable service quality</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implementation:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Built professional financial knowledge base and FAQ system</li>
                  <li>• Implemented intelligent customer service assistance to improve service quality</li>
                  <li>• Established comprehensive service recording and quality inspection system</li>
                  <li>• Deployed multi-level intelligent routing and transfer mechanisms</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-75%</div>
                    <p className="text-sm text-gray-600">Average wait time</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <p className="text-sm text-gray-600">First-call resolution rate</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">-50%</div>
                    <p className="text-sm text-gray-600">New employee training time</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <p className="text-sm text-gray-600">Regulatory compliance rate</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;The intelligent customer service system not only improved service efficiency but also helped us meet strict regulatory requirements. Customer feedback shows significant improvements in both professionalism and response speed, with complaint rates dropping by 80%.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— Operations Director, Ms. Li</p>
              </div>
            </div>
          </div>

          {/* Case Data Summary */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Customer Case Data Summary</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
                <p className="text-gray-600">Success stories</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                <p className="text-gray-600">Customer satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2 months</div>
                <p className="text-gray-600">Average implementation cycle</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4 months</div>
                <p className="text-gray-600">Average payback period</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">450%</div>
                <p className="text-gray-600">Average ROI improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology and Best Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Customer Service Automation Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customer service automation best practices based on 80+ successful cases, ensuring efficient project implementation
            </p>
          </div>

          {/* Implementation Phases */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Four-Phase Implementation Process</h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="relative flex justify-between items-center">
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scenario Analysis</h4>
                  <p className="text-sm text-gray-600 max-w-32">Analyze customer service scenarios and issue types</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Knowledge Building</h4>
                  <p className="text-sm text-gray-600 max-w-32">Build industry-specific professional knowledge base</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold text-gray-900 mb-2">System Deployment</h4>
                  <p className="text-sm text-gray-600 max-w-32">Launch intelligent customer service system</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimization Iteration</h4>
                  <p className="text-sm text-gray-600 max-w-32">Continuous learning and performance optimization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Success Factors</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Knowledge Base Development</h4>
                    <p className="text-gray-600">Establish a complete industry-specific professional knowledge base to ensure accuracy and professionalism of chatbot responses</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Gradual Transition</h4>
                    <p className="text-gray-600">Adopt human-machine collaboration approach, gradually increasing bot handling ratio while ensuring service quality</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning Optimization</h4>
                    <p className="text-gray-600">Establish continuous learning mechanisms to continuously optimize answer quality from user feedback</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Multi-Channel Unification</h4>
                    <p className="text-gray-600">Achieve unified management of multiple customer service channels to provide consistent service experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Implementation Challenges & Solutions</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Challenge: Inaccurate Bot Responses</h4>
                  <p className="text-red-700 text-sm mb-3">
                    Initial bot response accuracy rates are not high, affecting customer experience
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Build professional industry knowledge base and FAQ</li>
                      <li>• Set up human handoff for low-confidence questions</li>
                      <li>• Regularly analyze unresolved issues to optimize knowledge base</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">挑战：客户不信任机器人</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    客户习惯人工服务，对机器人存在抗拒心理
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">解决方案：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 明确标识机器人身份，设置合理期望</li>
                      <li>• 提供随时转人工的便捷入口</li>
                      <li>• 通过优质服务逐步建立信任</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">挑战：复杂问题处理能力不足</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    机器人难以处理复杂的业务咨询和投诉
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">解决方案：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 建立智能路由，复杂问题自动转接</li>
                      <li>• 人机协作模式，机器人辅助人工</li>
                      <li>• 建立专家知识库处理专业问题</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐和比较 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              客服自动化工具对比分析
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              为您分析市场主流客服自动化工具，帮助选择最适合的解决方案
            </p>
          </div>

          {/* 工具对比表 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">功能特性</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">AutoBusinessOS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">传统客服系统</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">国外SaaS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">纯聊天机器人</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI自然语言理解</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 95%+准确率
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ 不支持</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ 支持</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ 基础支持</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">智能工单系统</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Full Features
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ Basic Features</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Requires Integration</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ Not Supported</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Multi-language Understanding</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Professional Optimization
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Average</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Average</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Basic</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Data Security Compliance</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Local Compliance
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ Supported</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Limited</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Basic</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Implementation Cost</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Low Cost
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Medium</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ High Cost</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ Very Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Tool Combinations */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Basic Plan</h3>
                <p className="text-gray-600 mt-2">Suitable for SME</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent Customer Service Chatbot
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Knowledge Base Management
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Simple Data Statistics
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">¥199/月</div>
                <p className="text-sm text-gray-600">Unlimited customer service agents</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Recommended</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Professional Plan</h3>
                <p className="text-gray-600 mt-2">Suitable for growing enterprises</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced AI Customer Service Chatbot
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent Ticketing System
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-channel Unified Management
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Data Analytics
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">¥599/月</div>
                <p className="text-sm text-gray-600">Includes advanced features</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise Plan</h3>
                <p className="text-gray-600 mt-2">Suitable for large enterprises</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enterprise-grade AI Platform
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Private Deployment
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized development
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated technical support
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Custom Quote</div>
                <p className="text-sm text-gray-600">Customized based on requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Customer Service Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Use our ROI calculator to understand how much value our customer service automation platform can bring to your enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate ROI Free
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Expert Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}