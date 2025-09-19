import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automation Solutions - Complete Business Process Automation | AutoBusinessOS',
  description: 'Discover comprehensive automation solutions for every business function. From marketing and sales to customer service and finance - automate your entire operation with AutoBusinessOS.',
  keywords: 'business automation solutions, process automation, marketing automation, sales automation, customer service automation, finance automation',
  authors: [{ name: 'AutoBusinessOS Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function SolutionsPage() {
  const solutions = [
    {
      name: 'Marketing Automation',
      description: 'Automate lead generation, email campaigns, and social media management to scale your marketing efforts.',
      href: '/solutions/marketing-automation',
      icon: '📈',
      benefits: ['80% efficiency boost', '150% lead increase', 'Automated nurturing'],
      color: 'from-blue-500 to-blue-600',
      stats: '80% efficiency boost'
    },
    {
      name: 'Sales Automation',
      description: 'Streamline your sales process with automated CRM, follow-ups, and pipeline management.',
      href: '/solutions/sales-automation',
      icon: '💼',
      benefits: ['60% conversion increase', 'Automated follow-ups', 'Smart pipeline'],
      color: 'from-green-500 to-green-600',
      stats: '60% conversion increase'
    },
    {
      name: 'Customer Service Automation',
      description: 'Enhance customer experience with intelligent chatbots, ticket routing, and knowledge management.',
      href: '/solutions/customer-service-automation',
      icon: '🎧',
      benefits: ['70% faster response', '24/7 availability', 'Smart routing'],
      color: 'from-purple-500 to-purple-600',
      stats: '70% faster response'
    },
    {
      name: 'Finance Automation',
      description: 'Automate invoicing, expense tracking, and financial reporting for better cash flow management.',
      href: '/solutions/finance-automation',
      icon: '💰',
      benefits: ['90% time savings', 'Real-time reporting', 'Automated invoicing'],
      color: 'from-yellow-500 to-yellow-600',
      stats: '90% time savings'
    },
    {
      name: 'HR Automation',
      description: 'Streamline recruitment, onboarding, and employee management processes.',
      href: '/solutions/hr-automation',
      icon: '👥',
      benefits: ['85% faster hiring', 'Automated onboarding', 'Smart scheduling'],
      color: 'from-pink-500 to-pink-600',
      stats: '85% faster hiring'
    },
    {
      name: 'Operations Automation',
      description: 'Optimize workflows, inventory management, and operational processes for maximum efficiency.',
      href: '/solutions/operations-automation',
      icon: '⚙️',
      benefits: ['75% efficiency gain', 'Smart scheduling', 'Process optimization'],
      color: 'from-indigo-500 to-indigo-600',
      stats: '75% efficiency gain'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Complete <span className="text-blue-600">Automation</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto">
              Transform every aspect of your business with our comprehensive automation solutions. From marketing to finance, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Calculate Your ROI
              </Link>
              <Link
                href="/resources/guides"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                View Implementation Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Automation Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every business function can benefit from automation. Select the solutions that match your needs and start transforming your operations today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.name}
                href={solution.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AutoBusinessOS Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automation solutions are designed to work together seamlessly, providing you with a complete business transformation platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrated Platform</h3>
              <p className="text-gray-600">
                All solutions work together seamlessly, sharing data and workflows across your entire organization for maximum efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Deployment</h3>
              <p className="text-gray-600">
                Get up and running in days, not months. Our pre-built templates and intuitive setup process ensure quick implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results</h3>
              <p className="text-gray-600">
                Track performance with detailed analytics and reporting. See exactly how automation is transforming your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across All Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients consistently see dramatic improvements across all business functions when they implement our automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-gray-600">Average Efficiency Increase</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Time Savings</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Start with one solution or implement a complete transformation. Our experts will help you choose the right automation strategy for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Calculate Your ROI
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-white hover:bg-gray-50 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
