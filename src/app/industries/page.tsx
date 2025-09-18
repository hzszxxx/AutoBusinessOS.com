import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry Solutions - Enterprise Automation for Every Sector | AutoBusinessOS',
  description: 'Discover how AutoBusinessOS delivers tailored automation solutions across industries. From e-commerce to healthcare, manufacturing to SaaS - transform your sector with intelligent automation.',
  keywords: 'industry automation, sector-specific solutions, enterprise automation, business process automation, industry transformation',
  authors: [{ name: 'AutoBusinessOS Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function IndustriesPage() {
  const industries = [
    {
      name: 'E-commerce',
      description: 'Streamline inventory, orders, and customer service for maximum efficiency and growth.',
      href: '/industries/ecommerce',
      icon: '🛒',
      benefits: ['150% sales increase', '40% cost reduction', '24/7 automation'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'SaaS',
      description: 'Automate user onboarding, billing, and support to scale your software business.',
      href: '/industries/saas',
      icon: '💻',
      benefits: ['90% faster onboarding', '60% support efficiency', 'Automated billing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Manufacturing',
      description: 'Optimize production, quality control, and supply chain management processes.',
      href: '/industries/manufacturing',
      icon: '🏭',
      benefits: ['80% efficiency boost', '50% defect reduction', 'Smart scheduling'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Healthcare',
      description: 'Enhance patient care with automated scheduling, records, and communication.',
      href: '/industries/healthcare',
      icon: '🏥',
      benefits: ['70% admin reduction', 'Better patient care', 'Compliance automation'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Consulting',
      description: 'Automate client management, project tracking, and knowledge sharing.',
      href: '/industries/consulting',
      icon: '💼',
      benefits: ['85% time savings', 'Better client service', 'Knowledge automation'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Industry-Specific <span className="text-yellow-300">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-4xl mx-auto">
              Tailored automation solutions for every industry. Transform your sector with intelligent workflows designed for your unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
              >
                Calculate Your ROI
              </Link>
              <Link
                href="/resources/guides"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block shadow-lg"
              >
                View Implementation Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every industry has unique challenges. Our automation solutions are specifically designed to address the needs and opportunities in your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Industry-Specific Automation Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generic automation tools can't address the unique challenges and compliance requirements of your industry. Our solutions are built for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Targeted Solutions</h3>
              <p className="text-gray-600">
                Each industry has unique workflows, regulations, and challenges. Our automation solutions are specifically designed for your sector's requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Implementation</h3>
              <p className="text-gray-600">
                Pre-built industry templates and workflows mean faster deployment and quicker time-to-value for your organization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Ready</h3>
              <p className="text-gray-600">
                Built-in compliance features and industry best practices ensure your automation meets regulatory requirements from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how companies in your industry have transformed their operations with AutoBusinessOS automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">E-commerce Giant</h3>
                  <p className="text-gray-600">Online Retailer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "AutoBusinessOS helped us automate our entire order fulfillment process. We've seen a 150% increase in sales while reducing operational costs by 40%."
              </p>
              <div className="flex items-center text-primary-600 font-semibold">
                <Link href="/industries/ecommerce" className="hover:text-primary-700">
                  Read Full Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">SaaS Startup</h3>
                  <p className="text-gray-600">Software Company</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Customer onboarding that used to take days now happens in minutes. Our support team can focus on complex issues instead of routine tasks."
              </p>
              <div className="flex items-center text-primary-600 font-semibold">
                <Link href="/industries/saas" className="hover:text-primary-700">
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 text-white max-w-3xl mx-auto">
            Join thousands of companies already using AutoBusinessOS to automate their industry-specific processes and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              Calculate Your Industry ROI
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block shadow-lg"
            >
              Speak with an Expert
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
