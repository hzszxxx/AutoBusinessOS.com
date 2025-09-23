import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce Automation System - Inventory Management, Order Processing, Customer Service | AutoBusinessOS',
  description: 'Professional e-commerce automation solutions for inventory management, order processing, and customer service. Boost sales by 150%, reduce operational costs by 40%, and drive digital transformation.',
  keywords: 'ecommerce automation, retail automation, inventory management automation, order processing automation, ecommerce operations optimization',
}

export default function EcommercePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              E-commerce Automation System
              <span className="block text-blue-600">Inventory Management, Order Processing & Customer Service</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Intelligent automation system designed for e-commerce businesses, optimizing the entire workflow from inventory management to customer service. Help e-commerce companies boost sales by 150%, reduce operational costs by 40%, and achieve efficient digital operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
              >
Calculate ROI Free
              </Link>
              <Link
                href="#solutions"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block text-center"
              >
Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Industry Pain Point Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Challenges in E-commerce Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With intense competition in the e-commerce market, 88% of e-commerce businesses face these critical pain points in operational management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chaotic Inventory Management</h3>
              <p className="text-gray-600 mb-4">
                Multi-platform sales lead to unsynchronized inventory data, frequently causing overselling and stockouts. Manual inventory counting is time-consuming and labor-intensive, with low inventory turnover rates and serious capital occupation. Average inventory accuracy is only 65%, directly impacting customer satisfaction.
              </p>
              <div className="text-sm text-red-600 font-semibold">Inventory Loss Rate: Up to 30%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Low Order Processing Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Order processing relies on manual operations with slow processing speed and high error rates. Serious order backlogs during peak periods result in long customer wait times. Average order processing time requires 2-3 hours, severely impacting customer experience and repeat purchase rates.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Order Error Rate: 15%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Slow Customer Service Response</h3>
              <p className="text-gray-600 mb-4">
                Limited customer service staff cannot provide 24-hour online service. Repetitive questions account for 80%, yet still require manual responses. Average response time exceeds 30 minutes, leading to declining customer satisfaction and persistently high churn rates.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Customer Churn Rate: 45%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weak Data Analytics Capabilities</h3>
              <p className="text-gray-600 mb-4">
                Sales data is scattered across various platforms, lacking unified data analysis. Unable to timely understand sales trends, popular products, and customer preferences. Decision-making relies on experience rather than data, missing many sales opportunities.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Data Utilization Rate: Only 25%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Difficult Marketing ROI Assessment</h3>
              <p className="text-gray-600 mb-4">
                Marketing campaign effectiveness is difficult to quantify, with unclear return on investment. Unable to precisely target customers, resulting in serious advertising waste. Customer lifetime value cannot be accurately calculated, leading to unreasonable marketing budget allocation.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Marketing ROI: Below 2:1</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Point Impact: Serious E-commerce Business Losses</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-55%</div>
                  <p className="text-gray-600">Operational Efficiency Decline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+85%</div>
                  <p className="text-gray-600">Operational Cost Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-40%</div>
                  <p className="text-gray-600">Customer Satisfaction Decline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">-30%</div>
                  <p className="text-gray-600">Profit Margin Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Automation Solutions */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              E-commerce Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all e-commerce operations aspects, from product management to customer service, achieving intelligent and automated operations
            </p>
          </div>

          {/* Core Function Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Inventory Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Real-time inventory synchronization across multiple platforms, AI-powered sales demand prediction, and automatic replenishment alerts. Supports batch management and expiry date reminders, reducing inventory backlog and stockout risks. Inventory accuracy can reach over 99%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time inventory sync across platforms
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered sales forecasting and replenishment recommendations
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic safety stock alert mechanism
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Batch management and expiry date monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Order Processing Automation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                End-to-end automated processing from order receipt to shipment. Intelligent order routing, automated picking path optimization, and batch label printing and shipping. Processing speed improved by 300%, error rate reduced to below 1%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated order review and risk identification
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent picking path optimization algorithm
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Batch label printing and tracking number auto-fill
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time logistics status tracking updates
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Customer Service System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                24/7 intelligent customer service chatbot supporting multi-turn conversations and emotion recognition. Automatically handles 90% of common questions, with intelligent escalation to human agents for complex issues. Customer satisfaction improved to 95%, response time reduced to seconds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI intelligent Q&A and multi-turn conversations
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Emotion recognition and personalized responses
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ticketing system and customer service collaboration
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time customer service quality monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Marketing Automation Engine</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Precision marketing recommendations based on user behavior, automated email and SMS marketing. Personalized product recommendations to increase average order value and repeat purchase rates. Marketing ROI improved to over 5:1.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized product recommendation algorithm
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated email and SMS marketing
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cart abandonment recovery and churn prediction
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated membership tier management
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data Analytics Dashboard</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Real-time multi-dimensional business data analysis with intelligent sales forecasting and trend analysis. Automated visual report generation supporting decision-makers in quickly gaining business insights and formulating data-driven operational strategies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time business data monitoring dashboard
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sales trend forecasting and analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer profiling and behavior analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom reports and data export
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Supply Chain Collaboration</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Seamless integration with supplier systems, enabling procurement automation and supply chain visibility. Intelligent procurement recommendations and supplier performance evaluation to reduce procurement costs and improve supply chain efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated purchase order generation
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time supplier performance monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cost optimization and price comparison
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supply chain risk early warning system
                </li>
              </ul>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">E-commerce Automation Results & Improvements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+150%</div>
                <p className="text-gray-600">Sales Growth</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">-40%</div>
                <p className="text-gray-600">Operational Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+300%</div>
                <p className="text-gray-600">Processing Efficiency Improvement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              E-commerce Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer case studies showcasing the actual results and business value of e-commerce automation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Leading Fashion E-commerce Brand</h3>
                  <p className="text-gray-600">Annual Sales: $250 Million</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-platform sales inventory chaos, frequently overselling and stockouts</li>
                  <li>• Order surge during new product launches, severely insufficient processing capacity</li>
                  <li>• Customer service team of 20, peak response time exceeding 2 hours</li>
                  <li>• Difficult to evaluate marketing campaign effectiveness, unclear input-output ratio</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solutions:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deploy intelligent inventory management system for multi-platform inventory synchronization</li>
                  <li>• Implement automated order processing workflow to improve processing efficiency</li>
                  <li>• Launch AI customer service chatbot for 24/7 intelligent customer service</li>
                  <li>• Establish marketing automation system for precision targeting and effect tracking</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+180%</div>
                    <p className="text-sm text-gray-600">Annual sales growth</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">99.5%</div>
                    <p className="text-sm text-gray-600">Inventory accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">5 mins</div>
                    <p className="text-sm text-gray-600">Average response time</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">7:1</div>
                    <p className="text-sm text-gray-600">Marketing ROI</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;The automation system completely transformed our operational approach. Previously, new product launches were always chaotic, but now the system handles everything automatically. Sales have more than doubled, and customer satisfaction has significantly improved.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— Operations Director, Mr. Zhang</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Leading Fresh Food E-commerce Platform</h3>
                  <p className="text-gray-600">Daily Orders: 50,000+</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fresh products have short shelf life, complex inventory management</li>
                  <li>• High order volume with strict delivery time requirements</li>
                  <li>• Customer complaint response times affecting repeat purchase rates</li>
                  <li>• Inaccurate upstream supply chain procurement planning</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solutions:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Implement intelligent shelf life management and near-expiry product handling</li>
                  <li>• Deploy smart picking and delivery route optimization</li>
                  <li>• Establish comprehensive customer service and complaint handling mechanisms</li>
                  <li>• Launch supply chain collaboration and intelligent procurement systems</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-60%</div>
                    <p className="text-sm text-gray-600">Product waste reduction</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+250%</div>
                    <p className="text-sm text-gray-600">Picking efficiency improvement</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <p className="text-sm text-gray-600">Customer satisfaction</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">-35%</div>
                    <p className="text-sm text-gray-600">Procurement cost reduction</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Fresh food e-commerce has extremely high requirements for timeliness and quality. The automation system helped us solve core pain points. Product waste has significantly decreased, customer satisfaction continues to rise, and business growth is very stable.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— CEO Ms. Li</p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">B</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Leading Beauty Brand Flagship Store</h3>
                  <p className="text-gray-600">SKU Count: 3000+, Monthly GMV: $80 Million</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Numerous SKUs, extremely complex inventory management</li>
                      <li>• Strong seasonality of beauty products, difficult sales forecasting</li>
                      <li>• Dispersed multi-channel sales data, difficult decision-making</li>
                      <li>• Poor personalized recommendation effectiveness, low conversion rates</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Solutions:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Deploy AI-driven intelligent inventory prediction system</li>
                      <li>• Implement personalized recommendation algorithms and precision marketing</li>
                      <li>• Establish unified data center, integrate omni-channel data</li>
                      <li>• Launch intelligent replenishment and promotion decision systems</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+220%</div>
                      <p className="text-sm text-gray-600">GMV growth</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">+180%</div>
                      <p className="text-sm text-gray-600">Conversion rate improvement</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">-45%</div>
                      <p className="text-sm text-gray-600">Inventory turnover cycle</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">+65%</div>
                      <p className="text-sm text-gray-600">Average order value increase</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;The beauty industry changes rapidly, with diverse customer needs. The AI system helps us accurately predict trends, and personalized recommendations allow every customer to find products they love. Performance growth exceeded expectations.&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">— E-commerce Director Ms. Wang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Data Summary */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">E-commerce Customer Case Data Summary</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">Success cases</p>
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
                <p className="text-gray-600">Average investment payback period</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">450%</div>
                <p className="text-gray-600">Average ROI improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              E-commerce Automation Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on best practices from 100+ successful e-commerce cases, ensuring fast and secure project implementation
            </p>
          </div>

          {/* Implementation Phases */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Four-Phase Implementation Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-3">Business Research & Diagnosis</h4>
                <p className="text-sm text-gray-600">Deep analysis of existing business processes, identifying key pain points and automation opportunities</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• Business process mapping</li>
                  <li>• System status assessment</li>
                  <li>• Data quality analysis</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-3">Solution Design & Planning</h4>
                <p className="text-sm text-gray-600">Develop detailed automation implementation plans, determine technical architecture and implementation path</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• Technical solution design</li>
                  <li>• Implementation plan development</li>
                  <li>• Risk assessment contingency</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-3">Phased Implementation</h4>
                <p className="text-sm text-gray-600">Adopt phased deployment strategy, core first then expansion, ensuring business continuity</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• Core functions first</li>
                  <li>• Data migration testing</li>
                  <li>• User training promotion</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-3">Optimization & Iteration</h4>
                <p className="text-sm text-gray-600">Continuously monitor system performance, continuously optimize algorithms and processes</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• Performance data monitoring</li>
                  <li>• Continuous algorithm optimization</li>
                  <li>• Feature expansion upgrade</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Success Factors */}
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
                    <h4 className="font-semibold text-gray-900 mb-2">Data Quality Assurance</h4>
                    <p className="text-gray-600">Ensure accuracy and completeness of basic data, which is the foundation of automation success</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Process Standardization</h4>
                    <p className="text-gray-600">Organize and standardize existing business processes, laying the foundation for automation implementation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Team Training Support</h4>
                    <p className="text-gray-600">Comprehensive user training and ongoing technical support, ensuring effective system usage</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Monitoring & Optimization</h4>
                    <p className="text-gray-600">Establish performance monitoring mechanisms, continuously optimize algorithms and processes, improve automation effectiveness</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Control Measures</h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Data Security Risk</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    Security protection of customer data and transaction information is crucial
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Protection Measures:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Data encryption storage and transmission</li>
                      <li>• Strict access control</li>
                      <li>• Regular security audits and backups</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Business Continuity Risk</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    System switching process may impact normal business operations
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Protection Measures:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Gradual rollout and A/B testing</li>
                      <li>• Backup plans and quick rollback</li>
                      <li>• 24/7 monitoring and emergency response</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Algorithm Accuracy Risk</h4>
                  <p className="text-red-700 text-sm mb-3">
                    AI algorithm predictions and decisions may have bias
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Protection Measures:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Manual review and intervention mechanisms</li>
                      <li>• Continuous model training and optimization</li>
                      <li>• Multi-algorithm comparison validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              电商自动化工具推荐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选市场优质电商自动化工具，助力企业快速实现数字化转型
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">库存管理工具</h3>
                <p className="text-gray-600 mt-2">智能库存优化和管理</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多平台库存实时同步
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI需求预测和补货
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  滞销和缺货预警
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/tools/roi-calculator"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
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
                <h3 className="text-xl font-bold text-gray-900">Marketing Automation Platform</h3>
                <p className="text-gray-600 mt-2">Precision marketing and customer engagement</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized product recommendations
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated email/SMS marketing
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer behavior analysis tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time ROI performance monitoring
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/marketing-automation"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Intelligent Customer Service System</h3>
                <p className="text-gray-600 mt-2">24/7 automated customer service</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI intelligent Q&A chatbot
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-channel unified access
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ticket management and tracking
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/customer-service-automation"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              E-commerce Automation Investment Return Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on real case data, analyze the investment value and return expectations of e-commerce automation for you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Cost Analysis</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">System Deployment Cost</h4>
                    <span className="text-blue-600 font-bold">$300K-500K</span>
                  </div>
                  <p className="text-gray-600 text-sm">Including software licenses, system integration, data migration and other one-time investments</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Annual Operating Cost</h4>
                    <span className="text-green-600 font-bold">$100K-200K</span>
                  </div>
                  <p className="text-gray-600 text-sm">Including system maintenance, technical support, feature upgrades and other ongoing investments</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Training & Implementation Cost</h4>
                    <span className="text-purple-600 font-bold">$50K-100K</span>
                  </div>
                  <p className="text-gray-600 text-sm">Including employee training, process optimization, change management and other investments</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">Total Investment Cost</h4>
                    <span className="text-2xl font-bold text-gray-900">$450K-800K</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Return Expectations</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Sales Growth</h4>
                    <span className="text-green-600 font-bold">+150%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Through precision marketing and conversion optimization, annual sales increase by 150% on average</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Operating Cost Reduction</h4>
                    <span className="text-blue-600 font-bold">-40%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Automated processing reduces labor costs, significantly improves operational efficiency</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Inventory Cost Optimization</h4>
                    <span className="text-purple-600 font-bold">-30%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Intelligent inventory management reduces stockpiling and shortages, lowering capital utilization</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Customer Acquisition Cost</h4>
                    <span className="text-yellow-600 font-bold">-50%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Precision marketing improves conversion rates, reduces customer acquisition costs</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">Expected Investment Return Rate</h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">450%</div>
                    <p className="text-gray-600 text-sm">4-6 months investment recovery period</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Calculator CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Understand Your Enterprise's Specific ROI?
            </h3>
            <p className="text-gray-600 mb-6">
              Use our professional ROI calculator to input your business data and receive a personalized investment return analysis report
            </p>
            <Link
              href="/tools/roi-calculator"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Calculate ROI Free
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your E-commerce Automation Transformation Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact us today to get professional e-commerce automation solutions and accelerate your enterprise digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Free ROI Assessment
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-white hover:bg-gray-50 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Expert Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}