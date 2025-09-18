import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Automation Systems - CRM Integration, Sales Process Optimization & Customer Follow-up Automation | AutoBusinessOS',
  description: 'Professional sales solutions featuring CRM integration, sales process optimization, and automated customer follow-up. Increase sales conversion by 60% and drive digital transformation.',
  keywords: 'sales automation, CRM automation, sales process optimization, customer management system',
}

export default function salesautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Automation Systems
              <span className="block text-yellow-300">CRM Integration, Sales Process Optimization & Customer Follow-up Automation</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional sales automation system solutions that help enterprises achieve efficient and intelligent business process management. Increase sales conversion by 60% and improve overall operational efficiency.
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
              Core Pain Points in Traditional Sales Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              According to latest enterprise research data, 85% of companies face these critical challenges in sales management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Low Customer Follow-up Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Sales staff spend an average of 3.2 hours daily on repetitive follow-up tasks, with less than 40% of time dedicated to actual sales communication. Many potential customers are lost due to untimely follow-up, causing conversion rates to stagnate.
              </p>
              <div className="text-sm text-red-600 font-semibold">Average Customer Loss Rate: 35%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scattered Data Difficult to Analyze</h3>
              <p className="text-gray-600 mb-4">
                Customer information is scattered across multiple platforms like Excel, WeChat, and email, lacking unified data views. Sales managers cannot track team performance in real-time, making decisions based on experience rather than data-driven insights.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Data Integration Level: Only 23%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lack of Standardized Sales Processes</h3>
              <p className="text-gray-600 mb-4">
                Different sales staff use different sales methods, lacking standardized processes. New employee training periods are long, experience transfer is difficult, and overall team efficiency varies significantly.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Process Standardization Level: Less than 30%</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Impact: Enterprise Sales Performance Loss</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-42%</div>
                  <p className="text-gray-600">Sales efficiency decline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+68%</div>
                  <p className="text-gray-600">Customer acquisition cost increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-35%</div>
                  <p className="text-gray-600">Customer satisfaction decline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sales Automation System Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sales solutions from lead generation to deal closure, enabling full sales process automation
            </p>
          </div>

          {/* Core Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Lead Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI-powered lead scoring system that automatically identifies high-value customers. Supports multi-channel lead aggregation including website forms, social media, phone inquiries, providing unified management to avoid duplicate follow-ups.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI intelligent lead scoring with 95% accuracy
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-channel lead automatic aggregation
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent duplicate lead detection
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Automated Follow-up System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Intelligent follow-up strategies based on customer behavior and preferences, automatically sending personalized emails, SMS, and messages. Supports follow-up task reminders to ensure important customers are never overlooked.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized marketing content auto-generation
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-channel unified message delivery
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart follow-up timing optimization
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sales Data Analytics</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Real-time sales funnel analysis with visual sales process display. Predictive analytics help identify potential at-risk customers, intelligently recommend optimal sales strategies, and improve deal closure rates.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time sales funnel visualization
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI prediction of customer conversion probability
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent sales strategy recommendation engine
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Team Collaboration Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Unified customer view supporting team member collaborative follow-up. Standardized sales process templates enable new employees to get up to speed quickly. Permission management ensures customer information security.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  360-degree unified customer view
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Standardized sales process templates
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-level security permission management
                </li>
              </ul>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Sales Automation Performance Improvements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+60%</div>
                <p className="text-gray-600">Sales conversion rate increase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">-45%</div>
                <p className="text-gray-600">Customer acquisition cost reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+80%</div>
                <p className="text-gray-600">Follow-up efficiency improvement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">+35%</div>
                <p className="text-gray-600">Customer satisfaction increase</p>
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
              Real customer case studies demonstrating the actual effectiveness and value of sales automation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">Tech</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Leading Technology Company</h3>
                  <p className="text-gray-600">Employee Scale: 500-1000 people</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sales team of 30 people with customer information scattered across personal computers</li>
                  <li>• Customer follow-up relied on personal experience with low standardization</li>
                  <li>• Monthly sales target completion rate only 65%</li>
                  <li>• Customer churn rate as high as 40%, repeat purchase rate below 25%</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deployed intelligent CRM system for unified customer data management</li>
                  <li>• Established standardized sales processes and communication templates</li>
                  <li>• Implemented AI intelligent lead scoring and follow-up reminders</li>
                  <li>• Built real-time sales data analytics dashboard</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <p className="text-sm text-gray-600">Monthly target completion rate</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+120%</div>
                    <p className="text-sm text-gray-600">Sales efficiency improvement</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <p className="text-sm text-gray-600">Customer churn rate reduced to</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">65%</div>
                    <p className="text-sm text-gray-600">Customer repeat purchase rate increased to</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;After implementing the sales automation system, our sales team efficiency has significantly improved. Now every sales person can clearly understand customer status and follow up more timely and accurately. Most importantly, our sales performance has achieved double growth.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— Sales Director Mr. Wang</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">Trade</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Large Trading Company</h3>
                  <p className="text-gray-600">Employee Scale: 200-500 people</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• International customers widely distributed, time zone management difficult</li>
                  <li>• Average inquiry response time 12 hours, obvious competitive disadvantage</li>
                  <li>• Missing customer communication records, difficult handovers</li>
                  <li>• Poor quotation accuracy, sales cycle as long as 45 days</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Implemented 24/7 automated customer response system</li>
                  <li>• Built intelligent quotation system to improve quotation accuracy</li>
                  <li>• Deployed multilingual customer service chatbots</li>
                  <li>• Established global customer time zone intelligent management</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2 hours</div>
                    <p className="text-sm text-gray-600">Average response time</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">22 days</div>
                    <p className="text-sm text-gray-600">Average deal cycle</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+95%</div>
                    <p className="text-sm text-gray-600">Quotation accuracy improvement</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+180%</div>
                    <p className="text-sm text-gray-600">Annual revenue growth</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;The automated sales system has given us a clear advantage in global competition. Customer responses are faster, quotations are more accurate, and the entire sales process has become very smooth. Now our annual revenue has more than doubled compared to last year.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— International Business Manager Ms. Li</p>
              </div>
            </div>
          </div>

          {/* Customer Case Data Summary */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Customer Case Data Summary</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Success cases</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <p className="text-gray-600">Customer satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3 months</div>
                <p className="text-gray-600">Average implementation cycle</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">6 months</div>
                <p className="text-gray-600">Average investment payback period</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">320%</div>
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
              Sales Automation Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Best practice methodology based on 50+ successful cases, ensuring successful project implementation
            </p>
          </div>

          {/* Implementation Phases */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Five-Stage Implementation Process</h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="relative flex justify-between items-center">
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements Research</h4>
                  <p className="text-sm text-gray-600 max-w-24">Deep understanding of existing sales processes</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution Design</h4>
                  <p className="text-sm text-gray-600 max-w-24">Customized system configuration plan</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold text-gray-900 mb-2">System Deployment</h4>
                  <p className="text-sm text-gray-600 max-w-24">Phased system rollout deployment</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training & Rollout</h4>
                  <p className="text-sm text-gray-600 max-w-24">Company-wide training and adoption</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">5</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimization Iteration</h4>
                  <p className="text-sm text-gray-600 max-w-24">Continuous optimization and feature iteration</p>
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
                    <h4 className="font-semibold text-gray-900 mb-2">Senior Leadership Support</h4>
                    <p className="text-gray-600">Gaining full support and resource investment from management to ensure smooth project progress</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Quality Management</h4>
                    <p className="text-gray-600">Establish data cleaning and maintenance mechanisms to ensure accuracy and completeness of customer data</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Gradual Implementation</h4>
                    <p className="text-gray-600">Phased and departmental gradual implementation to reduce change resistance and ensure smooth transition</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Training Support</h4>
                    <p className="text-gray-600">Establish comprehensive training systems to ensure users can proficiently use system functions</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Common Implementation Challenges & Solutions</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Challenge: Employee resistance to new system</h4>
                  <p className="text-red-700 text-sm mb-3">
                    Sales staff are accustomed to traditional work methods and have resistance to new systems
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Select sales champions as system ambassadors</li>
                      <li>• Set up system usage incentive mechanisms</li>
                      <li>• Demonstrate personal efficiency improvements from the system</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Challenge: Difficult historical data migration</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    Existing customer data is scattered with inconsistent formats, requiring substantial migration effort
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Develop data cleaning and standardization processes</li>
                      <li>• Migrate in batches, prioritizing core customer data</li>
                      <li>• Establish data quality validation mechanisms</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Challenge: High system integration complexity</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Need to integrate with multiple existing systems like ERP and financial systems
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Solutions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use standard API interfaces for system integration</li>
                      <li>• Implement integration in phases, prioritizing core functions</li>
                      <li>• Establish integration testing and validation processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Recommendations and Comparisons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sales Automation Tool Comparison Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analyze mainstream sales automation tools in the market to help you choose the most suitable solution
            </p>
          </div>

          {/* Tool Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">AutoBusinessOS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Traditional CRM</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Foreign SaaS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Custom System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI Intelligent Lead Scoring</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Built-in
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ Not supported</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Requires customization</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Requires development</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Multi-channel Customer Data Integration</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Full support
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Partial support</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ Supported</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Requires development</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Localization Support</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Deep localization
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ Good</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ Poor</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ Customizable</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Implementation Cost</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ Low cost
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ Medium</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ High cost</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ Very high</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Implementation Timeline</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 1-3 months
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">3-6 months</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">3-6 months</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">6-12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Tool Packages */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Startup Solution</h3>
                <p className="text-gray-600 mt-2">Suitable for teams under 50 people</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lightweight CRM system
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic automated follow-up
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Simple data analytics
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">$39/month</div>
                <p className="text-sm text-gray-600">Per user per month</p>
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
                <h3 className="text-xl font-bold text-gray-900">Growth Enterprise Solution</h3>
                <p className="text-gray-600 mt-2">Suitable for 50-500 person teams</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI intelligent sales assistant
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced data analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-system integration
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized customization
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">$79/month</div>
                <p className="text-sm text-gray-600">Per user per month</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enterprise Solution</h3>
                <p className="text-gray-600 mt-2">Suitable for teams over 500 people</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full-featured AI platform
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Private deployment
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated technical support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom development
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Custom Pricing</div>
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
            Ready to Start Your Sales Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Use our ROI calculator to understand how much value a sales automation system can bring to your business
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