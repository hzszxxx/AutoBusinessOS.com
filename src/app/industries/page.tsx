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
      benefits: ['165% revenue growth', '45% operational savings', '24/7 inventory sync'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'SaaS',
      description: 'Automate user onboarding, billing, and support to scale your software business.',
      href: '/industries/saas',
      icon: '💻',
      benefits: ['95% onboarding acceleration', '70% support optimization', 'Smart billing automation'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Manufacturing',
      description: 'Optimize production, quality control, and supply chain management processes.',
      href: '/industries/manufacturing',
      icon: '🏭',
      benefits: ['85% production optimization', '55% quality improvement', 'AI-driven scheduling'],
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Healthcare',
      description: 'Enhance patient care with automated scheduling, records, and communication.',
      href: '/industries/healthcare',
      icon: '🏥',
      benefits: ['65% administrative streamlining', 'Enhanced patient experience', 'Regulatory compliance automation'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Consulting',
      description: 'Automate client management, project tracking, and knowledge sharing.',
      href: '/industries/consulting',
      icon: '💼',
      benefits: ['78% efficiency gains', 'Superior client delivery', 'Automated knowledge management'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sector-Specific <span className="text-blue-600">Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Each industry has unique workflows, compliance requirements, and growth challenges. Our specialized automation solutions
              are pre-configured for your sector's specific needs, ensuring faster implementation and higher success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Calculate Industry ROI
              </Link>
              <Link
                href="/resources/guides"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn More →
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
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Targeted Solutions</h3>
              <p className="text-gray-600">
                Each industry has unique workflows, regulations, and challenges. Our automation solutions are specifically designed for your sector's requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Faster Implementation</h3>
              <p className="text-gray-600">
                Pre-built industry templates and workflows mean faster deployment and quicker time-to-value for your organization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Ready</h3>
              <p className="text-gray-600">
                Built-in compliance features and industry best practices ensure your automation meets regulatory requirements from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Automation Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on our analysis of 500+ implementations across different sectors,
              each industry has unique automation patterns and success factors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automation Maturity by Industry</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏭</span>
                    <span className="font-semibold">Manufacturing</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-600">Adoption Rate</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💻</span>
                    <span className="font-semibold">SaaS Technology</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">89%</div>
                    <div className="text-sm text-gray-600">Adoption Rate</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🛒</span>
                    <span className="font-semibold">E-commerce</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">82%</div>
                    <div className="text-sm text-gray-600">Adoption Rate</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏥</span>
                    <span className="font-semibold">Healthcare</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">71%</div>
                    <div className="text-sm text-gray-600">Adoption Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Success Factors by Sector</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 Fast Implementation Winners</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>SaaS companies:</strong> Focus on customer lifecycle automation</li>
                    <li>• <strong>E-commerce:</strong> Inventory and order management integration</li>
                    <li>• <strong>Consulting:</strong> Project workflow and time tracking systems</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🔒 Compliance-Critical Industries</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Healthcare:</strong> Require HIPAA-compliant automation workflows</li>
                    <li>• <strong>Financial Services:</strong> Need SOX and PCI DSS compliance features</li>
                    <li>• <strong>Manufacturing:</strong> ISO and safety standard adherence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documented Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real companies, measurable results. These are actual client outcomes, not hypothetical projections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">TechMart Global</h3>
                  <p className="text-gray-600">B2B E-commerce Platform • 2,400 employees</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">165%</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8 months</div>
                  <div className="text-sm text-gray-600">Full ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Automated Orders</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "AutoBusinessOS transformed our entire order-to-delivery process. What used to require 12 manual touchpoints
                now runs completely automated. Our team can focus on strategic partnerships instead of processing orders."
              </p>
              <div className="flex items-center text-blue-600 font-medium mt-4">
                <Link href="/industries/ecommerce" className="hover:text-blue-700">
                  View Complete Case Study →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">CloudSync Solutions</h3>
                  <p className="text-gray-600">SaaS Platform • 180 employees</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Onboarding Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">70%</div>
                  <div className="text-sm text-gray-600">Support Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Customer onboarding that used to take our team 3-5 days now completes in under 2 hours.
                We've scaled from 500 to 2,000 customers without adding support staff."
              </p>
              <div className="flex items-center text-blue-600 font-medium mt-4">
                <Link href="/industries/saas" className="hover:text-blue-700">
                  Read Implementation Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using AutoBusinessOS to automate their industry-specific processes and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Industry Analysis
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Book Industry Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
