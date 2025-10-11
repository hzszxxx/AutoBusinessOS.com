import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { FAQDisplay } from '@/components/SEO/FAQSchema'
import PageEngagement from '@/components/Analytics/PageEngagement'
import { HeaderAd } from '@/components/Ads/GoogleAdSense'
import InternalLinks from '@/components/SEO/InternalLinks'

export default function Home() {
  const faqItems = [
    {
      question: "What is AutoBusinessOS?",
      answer: "AutoBusinessOS is a business automation platform that helps companies eliminate repetitive work. You can automate workflows across marketing, sales, customer service, and finance—helping reduce manual tasks and freeing your team to focus on strategic work."
    },
    {
      question: "What ROI can I expect from AutoBusinessOS?",
      answer: "Results vary based on your implementation and business processes. Automation can help reduce manual work hours, speed up task completion, and minimize errors in automated processes. Your specific results depend on which processes you automate and how you implement them. Use our ROI calculator to estimate your potential outcomes. Individual results may vary."
    },
    {
      question: "How quickly can we get started and see results?",
      answer: "Implementation timelines vary based on complexity and your team's needs. Simple workflows can be deployed quickly, while comprehensive automation projects take longer. The timeline depends on your specific processes and organizational requirements. Our team can provide a customized estimate for your situation."
    },
    {
      question: "Is AutoBusinessOS right for my industry and company size?",
      answer: "Yes. AutoBusinessOS works for companies from 50 to 5,000+ employees. We support e-commerce, SaaS, manufacturing, healthcare, consulting, and financial services. Our modular platform lets you start with one department and expand as you see results."
    },
    {
      question: "Do we need technical expertise to implement AutoBusinessOS?",
      answer: "No coding required. If you can use Excel or drag-and-drop in PowerPoint, you can build automation workflows. Your marketing manager can create email sequences, your operations lead can automate approvals, and your finance team can set up invoice processing—all without IT help."
    },
    {
      question: "How secure is our data with AutoBusinessOS?",
      answer: "Security is our top priority. We maintain enterprise-grade protection with end-to-end encryption, multi-factor authentication, and comprehensive audit trails. Our platform follows industry-standard security practices to protect your data and maintain compliance with international data protection standards."
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Deploy in Days, Not Months",
      description: "Connect your existing tools quickly and start building automation workflows. Our platform is designed for fast deployment without lengthy implementation projects."
    },
    {
      icon: "🤖",
      title: "AI That Learns Your Business",
      description: "Our AI learns from your team's decisions, improving accuracy over time. The system adapts to your business processes, handling exceptions more effectively as it learns from your workflow patterns."
    },
    {
      icon: "📊",
      title: "See Every Automation in Action",
      description: "Know exactly how much time you're saving, which workflows run smoothly, and where to optimize. Real-time dashboards show your ROI."
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption, multi-factor authentication, and comprehensive audit trails protect your data. We follow industry-standard security practices and compliance frameworks."
    },
    {
      icon: "⚡",
      title: "Always Available",
      description: "Built for reliability with 99.9% uptime target. Your automation is designed to run 24/7 and handle peak loads. Our infrastructure is monitored continuously to maintain availability."
    },
    {
      icon: "🌍",
      title: "Works Globally",
      description: "Deploy across multiple regions and time zones. Support teams worldwide with infrastructure that scales with your business."
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
              Modern Business Automation Platform
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automate Your Business,
              <br />
              <span className="text-blue-600">Accelerate Growth</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Eliminate repetitive work and free your team for strategic projects. Automation can help reduce manual tasks, minimize errors, and deliver measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/tools/roi-calculator"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Calculate Your ROI in 3 Minutes
              </Link>
              <Link
                href="/solutions"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                View Solutions
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🚀</div>
                <div className="text-gray-600 text-sm">Quick Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🤖</div>
                <div className="text-gray-600 text-sm">AI-Powered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">📊</div>
                <div className="text-gray-600 text-sm">Analytics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🔒</div>
                <div className="text-gray-600 text-sm">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The AutoBusinessOS Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While other tools require IT teams to configure everything, AutoBusinessOS works out of the box. Your business users can build workflows without coding—and you'll see measurable results within weeks.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Automate Everything from Marketing to Finance</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Connect your CRM, email, accounting software, and more. Build workflows that span departments—from lead capture to invoice payment—all in one platform.
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
                stats: 'Boost efficiency →'
              },
              {
                title: 'Sales Automation',
                description: 'CRM workflows, predictive analytics, automated follow-ups',
                icon: '💼',
                href: '/solutions/sales-automation',
                stats: 'Learn more →'
              },
              {
                title: 'Customer Service',
                description: 'AI-powered support and smart ticket routing',
                icon: '🎧',
                href: '/solutions/customer-service-automation',
                stats: 'Explore features →'
              },
              {
                title: 'Finance Operations',
                description: 'Automated invoicing, expenses, and reporting',
                icon: '💰',
                href: '/solutions/finance-automation',
                stats: 'View details →'
              },
              {
                title: 'Human Resources',
                description: 'Recruiting, onboarding, and performance management',
                icon: '👥',
                href: '/solutions/hr-automation',
                stats: 'See how →'
              },
              {
                title: 'Operations',
                description: 'Inventory, supply chain, and business intelligence',
                icon: '⚙️',
                href: '/solutions/operations-automation',
                stats: 'Discover more →'
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
            Enter your current process times and see exactly how much you'll save. Get a personalized ROI report in minutes.
          </p>
          <Link
            href="/tools/roi-calculator"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Get My ROI Analysis →
          </Link>
        </div>
      </section>

      {/* Industry Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored automation solutions for different business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'E-commerce', href: '/industries/ecommerce', desc: 'Order & inventory automation' },
              { name: 'SaaS', href: '/industries/saas', desc: 'Customer lifecycle management' },
              { name: 'Manufacturing', href: '/industries/manufacturing', desc: 'Production optimization' },
              { name: 'Healthcare', href: '/industries/healthcare', desc: 'Patient management systems' }
            ].map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-gray-600 text-sm">{industry.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQDisplay faqItems={faqItems} />

      {/* Related Internal Links */}
      <InternalLinks
        title="Explore More Solutions"
        links={[
          {
            title: "ROI Calculator",
            description: "Calculate automation investment returns instantly",
            href: "/tools/roi-calculator",
            category: "Tools"
          },
          {
            title: "Enterprise Solutions",
            description: "View complete automation solutions",
            href: "/solutions",
            category: "Solutions"
          },
          {
            title: "Case Studies",
            description: "Learn from successful customer implementations",
            href: "/resources/case-studies",
            category: "Resources"
          },
          {
            title: "Implementation Guide",
            description: "Complete automation getting started guide",
            href: "/resources/guides/automation-getting-started",
            category: "Guides"
          }
        ]}
      />
    </Layout>
  )
}