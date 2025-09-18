import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { FAQDisplay } from '@/components/SEO/FAQSchema'
import PageEngagement from '@/components/Analytics/PageEngagement'
import { InContentAd, ResponsiveAd } from '@/components/Ads/GoogleAdSense'

export default function Home() {
  const faqItems = [
    {
      question: "What is AutoBusinessOS?",
      answer: "AutoBusinessOS is an enterprise automation platform that transforms how businesses operate. Our AI-powered solutions streamline your entire workflow—from marketing and sales to customer service and finance—delivering measurable efficiency gains of 80% or more."
    },
    {
      question: "What ROI can I expect from AutoBusinessOS?",
      answer: "Our clients typically see: 80% boost in operational efficiency, 60% reduction in labor costs, 90% improvement in customer satisfaction, and 70% faster process completion. Beyond the numbers, you'll eliminate human errors, improve data accuracy, and empower your team to focus on strategic, high-value initiatives."
    },
    {
      question: "How quickly can we get started and see results?",
      answer: "Implementation typically takes 2-8 weeks depending on your organization's size and complexity. Most clients see significant returns within 3-6 months, with average ROI exceeding 300%. Use our ROI calculator to get a personalized estimate for your business."
    },
    {
      question: "Is AutoBusinessOS right for my industry and company size?",
      answer: "AutoBusinessOS scales with businesses of all sizes—from 50-person startups to 5,000+ enterprises. We have proven success across e-commerce, SaaS, manufacturing, healthcare, consulting, and financial services. Our modular approach adapts to your specific industry needs and growth trajectory."
    },
    {
      question: "Do we need technical expertise to implement AutoBusinessOS?",
      answer: "Not at all. Our intuitive, visual interface is designed for business users—no coding required. We provide comprehensive onboarding, training, and ongoing support to ensure your team maximizes the platform's potential from day one."
    },
    {
      question: "How secure is our data with AutoBusinessOS?",
      answer: "Security is our top priority. We maintain enterprise-grade protection with end-to-end encryption, multi-factor authentication, and comprehensive audit trails. Our platform is ISO27001 and SOC2 certified, meeting the highest international security standards for enterprise data protection."
    }
  ];

  return (
    <Layout>
      <PageEngagement 
        pagePath="/" 
        estimatedValue={50}
        trackScroll={true}
        trackTime={true}
        scrollThreshold={75}
        timeThreshold={300}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Future of <span className="text-yellow-300">Business</span>
              <br />Automation is Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-4xl mx-auto">
              Transform your business with intelligent automation. Drive 80% efficiency gains, cut costs by 60%, and empower your team to focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get Your ROI Report →
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Business Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline every aspect of your business operations—from lead generation and sales to customer success and financial reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Marketing Automation',
                description: 'Intelligent lead nurturing, omnichannel campaigns, and performance analytics',
                icon: '📊',
                href: '/solutions/marketing-automation',
                stats: '80% higher marketing ROI'
              },
              {
                title: 'Sales Automation',
                description: 'Streamlined CRM workflows, predictive analytics, and automated follow-ups',
                icon: '💼',
                href: '/solutions/sales-automation',
                stats: '60% boost in conversions'
              },
              {
                title: 'Customer Success',
                description: 'AI-powered support, smart routing, and self-service solutions',
                icon: '🎧',
                href: '/solutions/customer-service-automation',
                stats: '70% faster resolution'
              },
              {
                title: 'Financial Operations',
                description: 'Automated invoicing, expense tracking, and real-time reporting',
                icon: '💰',
                href: '/solutions/finance-automation',
                stats: '90% less manual work'
              },
              {
                title: 'Human Resources',
                description: 'Streamlined recruiting, employee onboarding, and performance management',
                icon: '👥',
                href: '/solutions/hr-automation',
                stats: '50% faster hiring'
              },
              {
                title: 'Operations Management',
                description: 'Smart inventory control, supply chain optimization, and business intelligence',
                icon: '⚙️',
                href: '/solutions/operations-automation',
                stats: '40% operational gains'
              }
            ].map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="bg-gray-50 hover:bg-gray-100 p-8 rounded-xl transition-colors group"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-sm font-medium text-primary-600">{solution.stats}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space 1 - Between Solutions and ROI Calculator */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <ResponsiveAd adSlot="1234567890" />
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover Your Automation Potential
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get a personalized ROI analysis in under 3 minutes. See exactly how automation will impact your bottom line.
          </p>
          <Link
            href="/tools/roi-calculator"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Start Your Analysis →
          </Link>
        </div>
      </section>

      {/* Industry Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of companies transforming their operations with AutoBusinessOS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'E-commerce', href: '/industries/ecommerce', growth: '+150% Revenue' },
              { name: 'SaaS', href: '/industries/saas', growth: '+200% Growth' },
              { name: 'Manufacturing', href: '/industries/manufacturing', growth: '+80% Output' },
              { name: 'Healthcare', href: '/industries/healthcare', growth: '+90% Patient Satisfaction' }
            ].map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-primary-600 font-medium">{industry.growth}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space 2 - Before FAQ Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <InContentAd />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQDisplay faqItems={faqItems} />
    </Layout>
  )
}