import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { FAQDisplay } from '@/components/SEO/FAQSchema'
import PageEngagement from '@/components/Analytics/PageEngagement'
import { HeaderAd } from '@/components/Ads/GoogleAdSense'

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

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast Setup",
      description: "Get up and running in minutes, not months. Our intuitive interface makes automation accessible to everyone."
    },
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that learn and adapt to your business processes automatically."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards and reports that give you instant insights into your automation performance."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, multi-factor authentication, and compliance certifications."
    },
    {
      icon: "⚡",
      title: "99.9% Uptime",
      description: "Reliable cloud infrastructure ensures your automation never stops working, even during peak loads."
    },
    {
      icon: "🌍",
      title: "Global Scale",
      description: "Deploy across multiple regions and time zones with our worldwide cloud infrastructure."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Inc.",
      role: "CEO",
      content: "AutoBusinessOS transformed our operations completely. We've seen 85% efficiency gains and our team can now focus on strategic initiatives instead of repetitive tasks.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing Co.",
      role: "Operations Director",
      content: "The ROI was immediate. Within 3 months, we reduced operational costs by 60% while increasing output by 40%. This platform is a game-changer.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "VP of Operations",
      content: "Implementation was seamless and the results exceeded our expectations. Our customer satisfaction scores improved by 90% thanks to automated workflows.",
      avatar: "ER"
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
      
      {/* Header Ad */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeaderAd />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Trusted by 500+ companies worldwide
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your Business,
              <br />
              <span className="text-blue-600">Accelerate Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your operations with intelligent automation. Increase efficiency by 80%, reduce costs by 60%, and focus your team on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/tools/roi-calculator"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Calculate Your ROI
              </Link>
              <Link
                href="/solutions"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                View Solutions
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-gray-600 text-sm">Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-gray-600 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AutoBusinessOS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade automation platform trusted by leading companies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Business Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From marketing to operations, automate every aspect of your business with our comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Marketing Automation',
                description: 'Intelligent lead nurturing, campaigns, and analytics',
                icon: '📊',
                href: '/solutions/marketing-automation',
                stats: '80% higher ROI'
              },
              {
                title: 'Sales Automation',
                description: 'CRM workflows, predictive analytics, automated follow-ups',
                icon: '💼',
                href: '/solutions/sales-automation',
                stats: '60% more conversions'
              },
              {
                title: 'Customer Service',
                description: 'AI-powered support and smart ticket routing',
                icon: '🎧',
                href: '/solutions/customer-service-automation',
                stats: '70% faster resolution'
              },
              {
                title: 'Finance Operations',
                description: 'Automated invoicing, expenses, and reporting',
                icon: '💰',
                href: '/solutions/finance-automation',
                stats: '90% less manual work'
              },
              {
                title: 'Human Resources',
                description: 'Recruiting, onboarding, and performance management',
                icon: '👥',
                href: '/solutions/hr-automation',
                stats: '50% faster hiring'
              },
              {
                title: 'Operations',
                description: 'Inventory, supply chain, and business intelligence',
                icon: '⚙️',
                href: '/solutions/operations-automation',
                stats: '40% efficiency gains'
              }
            ].map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="block p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="text-2xl mb-3">{solution.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {solution.description}
                </p>
                <div className="text-blue-600 font-medium text-sm">
                  {solution.stats} →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Your ROI in 3 Minutes
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Calculate the exact impact automation will have on your business. Get personalized results instantly.
          </p>
          <Link
            href="/tools/roi-calculator"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Calculate ROI →
          </Link>
        </div>
      </section>

      {/* Industry Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600">
              Companies in every sector rely on AutoBusinessOS for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'E-commerce', href: '/industries/ecommerce', growth: '+150% Revenue' },
              { name: 'SaaS', href: '/industries/saas', growth: '+200% Growth' },
              { name: 'Manufacturing', href: '/industries/manufacturing', growth: '+80% Output' },
              { name: 'Healthcare', href: '/industries/healthcare', growth: '+90% Satisfaction' }
            ].map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-blue-600 font-medium">{industry.growth}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQDisplay faqItems={faqItems} />
    </Layout>
  )
}