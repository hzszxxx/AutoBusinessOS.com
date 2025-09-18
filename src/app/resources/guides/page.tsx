import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function GuidesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Implementation</span> Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              From basic foundations to advanced strategies, comprehensive guides to help you successfully implement enterprise automation projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/guides/automation-getting-started"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Start with Getting Started Guide →
              </Link>
              <Link
                href="/tools/roi-calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Guides by Stage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter what stage you are at in your automation journey, there are professional guides here to support you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                stage: 'Assessment & Planning',
                title: 'Preparation Phase',
                description: 'Understand automation fundamentals, assess current state, and develop implementation plans',
                icon: '🎯',
                color: 'bg-blue-50 border-blue-200',
                guides: [
                  {
                    title: 'Complete Enterprise Automation Getting Started Guide',
                    href: '/resources/guides/automation-getting-started',
                    description: 'Automation fundamentals and getting started steps from scratch',
                    readTime: '15 min read'
                  },
                  {
                    title: 'Automation ROI Analysis Guide',
                    href: '/resources/guides/roi-analysis',
                    description: 'Detailed ROI calculation methods and investment decision frameworks',
                    readTime: '18 min read'
                  }
                ]
              },
              {
                stage: 'Tool Selection',
                title: 'Technology Selection Phase',
                description: 'Choose the right automation tools and technology stack',
                icon: '🔧',
                color: 'bg-green-50 border-green-200',
                guides: [
                  {
                    title: 'Automation Tool Selection Decision Guide',
                    href: '/resources/guides/tool-selection',
                    description: 'Tool evaluation frameworks, comparative analysis and selection recommendations',
                    readTime: '20 min read'
                  }
                ]
              },
              {
                stage: 'Implementation & Management',
                title: 'Execution & Deployment Phase',
                description: 'Project implementation, change management and continuous optimization',
                icon: '🚀',
                color: 'bg-purple-50 border-purple-200',
                guides: [
                  {
                    title: 'Automation Project Implementation Best Practices',
                    href: '/resources/guides/implementation-best-practices',
                    description: 'Project management, risk control and success factors',
                    readTime: '22 min read'
                  },
                  {
                    title: 'Automation Change Management Guide',
                    href: '/resources/guides/change-management',
                    description: 'Employee training, organizational change and culture building',
                    readTime: '16 min read'
                  }
                ]
              }
            ].map((category) => (
              <div key={category.stage} className={`${category.color} border-2 rounded-xl p-8`}>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <div className="text-sm font-medium text-gray-600 mb-2">{category.stage}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="space-y-4">
                  {category.guides.map((guide) => (
                    <Link
                      key={guide.title}
                      href={guide.href}
                      className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 hover:text-primary-600">
                        {guide.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                      <div className="text-xs text-gray-500">{guide.readTime}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Guides
            </h2>
            <p className="text-xl text-gray-600">
              Implementation guides with the highest user downloads and best ratings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Complete Enterprise Automation Getting Started Guide',
                description: 'This is a comprehensive getting started guide that covers the basic concepts of enterprise automation, assessment methods, tool selection and implementation steps. Whether you are a business owner just starting to get into automation, or a manager responsible for driving digital transformation, this guide can provide you with a clear roadmap.',
                href: '/resources/guides/automation-getting-started',
                features: ['Basic Concept Analysis', 'Current State Assessment Methods', 'Implementation Step Guidance', 'Common Pitfall Avoidance'],
                downloads: '3,500+',
                rating: '4.9',
                difficulty: 'Beginner Level',
                time: '15 min read',
                badge: 'Most Popular'
              },
              {
                title: 'Automation ROI Analysis Guide',
                description: 'Detailed introduction on how to calculate and analyze the return on investment for automation projects. Includes actual case studies from multiple industries to help you make informed investment decisions. This guide provides standardized ROI calculation templates and evaluation frameworks.',
                href: '/resources/guides/roi-analysis',
                features: ['ROI Calculation Formulas', 'Cost-Benefit Analysis', 'Risk Assessment Methods', 'Decision Framework'],
                downloads: '2,800+',
                rating: '4.8',
                difficulty: 'Intermediate Level',
                time: '18 min read',
                badge: 'Management Essential'
              }
            ].map((guide) => (
              <div key={guide.title} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                    {guide.badge}
                  </span>
                  <div className="text-right text-sm text-gray-500">
                    <div>⭐ {guide.rating} • {guide.downloads} downloads</div>
                    <div>{guide.difficulty} • {guide.time}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Core Content Includes:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {guide.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={guide.href}
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Read Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions and professional answers about enterprise automation implementation
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'What is the typical ROI payback period for enterprise automation?',
                answer: 'Based on our experience and customer feedback, most enterprise automation projects have an ROI payback period between 6-18 months. The specific timeframe depends on the scale of automation, industry characteristics, and implementation quality. Simple process automation may see returns within 3-6 months, while complex end-to-end automation may require 12-24 months.'
              },
              {
                question: 'Are small and medium enterprises suitable for implementing automation?',
                answer: 'Absolutely suitable. In fact, SMEs can often see automation benefits faster because their processes are relatively simple and decision-making is quicker. We recommend SMEs start with core business processes such as customer management, financial processing, or marketing activities, choosing automation projects with smaller investments but larger impacts.'
              },
              {
                question: 'How to choose the right automation tools?',
                answer: 'Choosing automation tools requires considering multiple factors: business requirement fit, technical maturity, integration capability, cost-effectiveness, vendor support, etc. We recommend first clarifying specific requirements, then evaluating tool functional coverage, and finally considering implementation complexity and costs. We suggest conducting small-scale pilots first, validating effectiveness before full rollout.'
              },
              {
                question: 'Will employees resist automation? How to deal with it?',
                answer: 'Employee resistance is a common phenomenon, mainly stemming from concerns about job loss and fear of change. Effective change management strategies include: early communication of automation goals and benefits, involving employees in the automation design process, providing adequate training and support, redefining job roles rather than layoffs, establishing incentive mechanisms, etc.'
              },
              {
                question: 'What are the main reasons for automation implementation failure?',
                answer: 'Common failure reasons include: lack of clear goals and strategy, inappropriate technology choices, lack of senior management support, insufficient employee training, overly aggressive implementation plans, ignoring change management, lack of continuous optimization, etc. The key to success is developing detailed implementation plans, phased advancement, and continuous monitoring and adjustment.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A: {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Implementation Guidance?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert team can provide you with customized automation consulting services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule Expert Consultation
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Calculate ROI Potential
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}