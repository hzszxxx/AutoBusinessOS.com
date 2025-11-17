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
      answer: "AutoBusinessOS is an educational resource and knowledge hub dedicated to business automation. We provide comprehensive guides, case studies, research, and tools to help organizations understand and implement automation strategies effectively."
    },
    {
      question: "What kind of content do you publish?",
      answer: "We publish in-depth guides on automation technologies, implementation strategies, tool comparisons, industry-specific best practices, and case studies. Our content covers marketing automation, sales processes, customer service, finance, HR, and operations management."
    },
    {
      question: "Who writes your content?",
      answer: "Our content is created by automation specialists and industry experts with extensive experience in enterprise process optimization, digital transformation, and technology implementation across various sectors."
    },
    {
      question: "Are your guides free to access?",
      answer: "Yes, all our guides, articles, case studies, and tools are freely available. We believe in providing valuable educational resources to help businesses make informed decisions about their automation initiatives."
    },
    {
      question: "How can I stay updated with new content?",
      answer: "You can browse our latest articles on the blog page, subscribe to our newsletter for weekly updates, or follow specific topic categories that interest you. We regularly publish new guides and update existing content with the latest industry insights."
    },
    {
      question: "Do you recommend specific automation tools?",
      answer: "We provide objective comparisons and analysis of various automation platforms and tools. Our recommendations are based on research, feature analysis, and suitability for different use cases. We aim to help you make informed decisions based on your specific needs."
    }
  ];

  const features = [
    {
      icon: "📖",
      title: "Comprehensive Guides",
      description: "In-depth tutorials covering everything from basic automation concepts to advanced AI integration strategies. Step-by-step implementation guides for all major platforms."
    },
    {
      icon: "🔬",
      title: "Research-Backed Insights",
      description: "Analysis based on industry research, market trends, and automation best practices. Stay informed about the latest developments in business process automation."
    },
    {
      icon: "💼",
      title: "Real-World Case Studies",
      description: "Learn from successful automation implementations across various industries. Understand challenges, solutions, and measurable outcomes from actual business scenarios."
    },
    {
      icon: "🛠️",
      title: "Free Tools & Resources",
      description: "Access ROI calculators, comparison charts, and templates to help you evaluate automation opportunities and plan your implementation strategy."
    },
    {
      icon: "📊",
      title: "Industry Analysis",
      description: "Detailed breakdowns of automation opportunities in e-commerce, SaaS, manufacturing, healthcare, and other sectors. Understand sector-specific challenges and solutions."
    },
    {
      icon: "🎓",
      title: "Expert Knowledge Base",
      description: "Articles written by automation specialists with years of experience in enterprise process optimization, digital transformation, and technology implementation."
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
              Enterprise Automation Knowledge Hub
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn Business Automation
              <br />
              <span className="text-blue-600">Best Practices & Guides</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive resource for understanding automation technologies, implementation strategies, and industry best practices. Free guides, case studies, and expert insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/resources/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Browse Latest Articles
              </Link>
              <Link
                href="/resources/guides"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                View Complete Guides
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">📚</div>
                <div className="text-gray-600 text-sm">20+ Guides</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">💡</div>
                <div className="text-gray-600 text-sm">Expert Insights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🔧</div>
                <div className="text-gray-600 text-sm">Free Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🎯</div>
                <div className="text-gray-600 text-sm">Case Studies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Automation Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and best practices in enterprise automation.
              Our expert team publishes comprehensive guides to help you make informed decisions.
            </p>
          </div>

          {/* Featured Content */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold mb-4">📖 New Article Series: 2025 Automation Trends</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Discover how AI agents, no-code platforms, and intelligent workflows are transforming businesses.
              Learn from real-world implementations and industry research.
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

      {/* Topic Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Automation Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep-dive into specific automation areas with our comprehensive guides and tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Marketing Automation',
                description: 'Email campaigns, lead scoring, and multi-channel strategies',
                icon: '📊',
                href: '/solutions/marketing-automation',
                stats: 'Read guides →'
              },
              {
                title: 'Sales Process Automation',
                description: 'CRM optimization, pipeline management, and sales workflows',
                icon: '💼',
                href: '/solutions/sales-automation',
                stats: 'Learn best practices →'
              },
              {
                title: 'Customer Service',
                description: 'Support ticket automation, chatbots, and response systems',
                icon: '🎧',
                href: '/solutions/customer-service-automation',
                stats: 'Explore strategies →'
              },
              {
                title: 'Finance & Accounting',
                description: 'Invoice processing, expense management, and reporting',
                icon: '💰',
                href: '/solutions/finance-automation',
                stats: 'View tutorials →'
              },
              {
                title: 'Human Resources',
                description: 'Recruitment automation, onboarding, and HR workflows',
                icon: '👥',
                href: '/solutions/hr-automation',
                stats: 'Discover methods →'
              },
              {
                title: 'Operations Management',
                description: 'Supply chain, inventory, and process optimization',
                icon: '⚙️',
                href: '/solutions/operations-automation',
                stats: 'Browse articles →'
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
                  {solution.stats}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Free Automation Tools & Templates
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Access our collection of free calculators, templates, and worksheets to evaluate and plan your automation initiatives. No signup required.
          </p>
          <Link
            href="/tools/roi-calculator"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Browse Free Tools →
          </Link>
        </div>
      </section>

      {/* Industry Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Automation Guides
            </h2>
            <p className="text-xl text-gray-600">
              Learn automation strategies tailored to your industry's unique challenges and opportunities
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
            description: "Calculate automation investment returns quickly",
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