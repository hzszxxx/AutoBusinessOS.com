import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import StructuredData from '@/components/SEO/StructuredData'
import InternalLinks from '@/components/SEO/InternalLinks'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation Platform - Boost ROI by 80% with AI-Powered Solutions | AutoBusinessOS',
  description: 'Professional marketing automation solutions including email marketing, social media management, lead nurturing, and conversion tracking. Help businesses increase marketing efficiency by 80% and reduce customer acquisition costs by 60%.',
  keywords: 'marketing automation, email marketing, lead nurturing, social media marketing, marketing ROI, business automation',
}

export default function MarketingAutomationPage() {
  const breadcrumbItems = [
    { name: 'Solutions', url: '/solutions' },
    { name: 'Marketing Automation', url: '/solutions/marketing-automation' }
  ];

  const relatedLinks = [
    {
      title: "ROI Calculator",
      description: "Calculate marketing automation ROI and quantify efficiency improvements",
      href: "/tools/roi-calculator",
      category: "Tools"
    },
    {
      title: "E-commerce Solutions",
      description: "Marketing automation solutions tailored for e-commerce businesses",
      href: "/industries/ecommerce",
      category: "Industry Solutions"
    },
    {
      title: "Sales Automation",
      description: "Seamlessly integrated sales process automation with marketing",
      href: "/solutions/sales-automation",
      category: "Solutions"
    },
    {
      title: "Automation Getting Started Guide",
      description: "Learn enterprise automation implementation methods from scratch",
      href: "/resources/guides/automation-getting-started",
      category: "Guides"
    }
  ];

  return (
    <Layout>
      <StructuredData
        type="article"
        title="Marketing Automation Platform - Boost ROI by 80% with AI-Powered Solutions"
        description="Professional marketing automation solutions including email marketing, social media management, lead nurturing, and conversion tracking. Help businesses increase marketing efficiency by 80% and reduce customer acquisition costs by 60%."
        url="https://autobusinessos.com/solutions/marketing-automation"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marketing Automation Platform
              <span className="block text-yellow-300">Boost Marketing ROI by 80% with Smart Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Complete marketing automation management from lead generation to customer conversion. Let your marketing team focus on strategy while AI handles repetitive tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Calculate Marketing ROI for Free
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Challenges in Traditional Marketing</h2>
            <p className="text-xl text-gray-600">Are you struggling with these common problems?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Repetitive Tasks Consume 80% of Time</h3>
              <p className="text-gray-600">
                Manual email sending, social media posting, lead follow-ups, and other repetitive tasks consume massive human resources, preventing teams from focusing on high-value strategy development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scattered Data Hinders Decision-Making</h3>
              <p className="text-gray-600">
                Marketing channel data is fragmented, making it impossible to get a complete customer view. This leads to data-poor marketing decisions and difficult ROI measurement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rising Customer Acquisition Costs</h3>
              <p className="text-gray-600">
                Lack of personalized marketing strategies, poor lead quality, and low conversion rates result in continuously rising customer acquisition costs and ineffective marketing budgets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Value of Marketing Automation
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Customer Journey Design</h3>
                    <p className="text-gray-600">
                      Automatically design personalized marketing workflows based on customer behavioral data, ensuring the right message reaches the right customer at the right time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Channel Unified Management</h3>
                    <p className="text-gray-600">
                      Integrate email, social media, SMS, push notifications, and other marketing channels, providing a unified management interface and data view.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Data Analysis and Optimization</h3>
                    <p className="text-gray-600">
                      Monitor marketing campaign performance in real-time, automatically optimize send times, content, and audience targeting to continuously improve marketing ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing Automation Performance Data</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">Marketing Efficiency Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600">Customer Acquisition Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                  <div className="text-sm text-gray-600">Lead Conversion Rate Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                  <div className="text-sm text-gray-600">Marketing ROI Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Feature Details
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive marketing automation features to meet all your business marketing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Email Marketing Automation',
                description: 'Smart email sequences, A/B testing, open rate optimization, personalized content recommendations',
                icon: '📧',
                features: ['Drag-and-drop email editor', 'Smart send time optimization', 'Detailed email analytics', 'Anti-spam protection']
              },
              {
                title: 'Social Media Management',
                description: 'Multi-platform content publishing, social listening, automated fan interaction, influence analysis',
                icon: '📱',
                features: ['Bulk content publishing', 'Social media calendar', 'Automated comment replies', 'KOL influence monitoring']
              },
              {
                title: 'Lead Nurturing and Scoring',
                description: 'Behavior-based lead scoring, automatic sales lead assignment, personalized nurturing workflows',
                icon: '🎯',
                features: ['Smart lead scoring', 'Sales lead distribution', 'Personalized nurturing paths', 'Conversion funnel analysis']
              },
              {
                title: 'Personalized Content Push',
                description: 'AI-driven content recommendations, dynamic content generation, user preference learning',
                icon: '🤖',
                features: ['AI content recommendations', 'Dynamic content blocks', 'User preference analysis', 'Content effectiveness testing']
              },
              {
                title: 'Marketing ROI Analysis',
                description: 'Multi-channel attribution analysis, marketing ROI calculation, budget optimization recommendations',
                icon: '📈',
                features: ['Multi-touch attribution', 'Real-time ROI calculation', 'Channel performance comparison', 'Budget allocation suggestions']
              },
              {
                title: 'A/B Testing Optimization',
                description: 'Multi-dimensional testing of email subjects, content, send times, and more for continuous optimization',
                icon: '🔬',
                features: ['Multivariate testing', 'Statistical significance testing', 'Auto-enable winning versions', 'Test result visualization']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Case Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how marketing automation works across different business scenarios
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'B2B Enterprise Lead Generation',
                description: 'Attract potential customers through content marketing, automate lead nurturing and scoring to improve sales team efficiency',
                steps: [
                  'Visitor downloads whitepaper triggers lead capture',
                  'Automatically send welcome emails and industry case studies',
                  'Score leads based on behavior to identify high-quality prospects',
                  'Automatically assign leads to appropriate sales representatives'
                ],
                result: 'Customer acquisition cost reduced by 50%, lead quality improved by 70%'
              },
              {
                title: 'E-commerce Customer Retention Strategy',
                description: 'Provide personalized marketing content and promotional activities for users at different purchase stages',
                steps: [
                  'New users automatically receive welcome packages and usage guides',
                  'Post-purchase satisfaction surveys and product recommendations',
                  'Inactive users automatically receive special offers',
                  'Loyal customers get exclusive VIP events and new product previews'
                ],
                result: 'Customer retention rate increased by 60%, repeat purchase rate up 40%'
              },
              {
                title: 'SaaS Product Activation Optimization',
                description: 'Guide new users through key actions to improve product activation and paid conversion rates',
                steps: [
                  'Automatically send product tours and quick-start tutorials after registration',
                  'Monitor user behavior and send targeted feature introductions',
                  'Send help content to users who haven\'t completed key actions',
                  'Push upgrade offers and success stories before trial period ends'
                ],
                result: 'Product activation rate increased by 80%, paid conversion rate up 45%'
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <div className="bg-primary-600 text-white px-6 py-3 rounded-lg inline-block">
                      <strong>Results:</strong> {useCase.result}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Automation Workflow:</h4>
                    <div className="space-y-3">
                      {useCase.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              5-Step Implementation Methodology
            </h2>
            <p className="text-xl text-primary-100">
              Our expert team will guide you through the complete implementation of marketing automation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Current State Analysis', desc: 'Assess existing marketing processes and technology stack' },
              { step: '2', title: 'Strategy Development', desc: 'Design personalized marketing automation strategies' },
              { step: '3', title: 'System Configuration', desc: 'Configure marketing automation platform and workflows' },
              { step: '4', title: 'Content Creation', desc: 'Create marketing content and template libraries' },
              { step: '5', title: 'Optimization & Iteration', desc: 'Continuously monitor performance and optimize strategies' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Recommendation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recommended Marketing Automation Tools
            </h2>
            <p className="text-xl text-gray-600">
              Carefully selected premium tools to help you quickly start your marketing automation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'HubSpot Marketing Hub',
                description: 'Comprehensive marketing automation platform, ideal for medium to large enterprises',
                features: ['Free version available', 'Powerful CRM integration', 'Rich template library'],
                price: 'Free - $1,200/month',
                rating: 4.5,
                suitableFor: 'Medium to Large Enterprises'
              },
              {
                name: 'Mailchimp',
                description: 'User-friendly email marketing automation tool, perfect for small businesses',
                features: ['Easy to use', 'Affordable pricing', 'Excellent design templates'],
                price: 'Free - $350/month',
                rating: 4.3,
                suitableFor: 'Small Businesses'
              },
              {
                name: 'ActiveCampaign',
                description: 'Powerful marketing automation and CRM platform',
                features: ['Advanced automation', 'Behavioral tracking', 'SMS marketing'],
                price: '$15 - $259/month',
                rating: 4.6,
                suitableFor: 'Small to Medium Businesses'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{tool.price}</div>
                    <div className="text-sm text-gray-500">Suitable for {tool.suitableFor}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Marketing Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Use our ROI calculator to discover how much value marketing automation can bring to your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate Marketing ROI for Free
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

      {/* Internal Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InternalLinks
          title="Related Solutions and Resources"
          links={relatedLinks}
        />
      </div>
    </Layout>
  )
}