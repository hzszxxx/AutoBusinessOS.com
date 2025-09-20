import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import InternalLinks from '@/components/SEO/InternalLinks'

export default function ResourcesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Knowledge <span className="text-blue-600">Center</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Access our comprehensive library of automation expertise. From detailed implementation guides to real-world case studies,
              find everything you need to plan, execute, and optimize your automation strategy successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/guides"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Browse Expert Guides →
              </Link>
              <Link
                href="/resources/case-studies"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Exactly What You Need
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search guides, case studies, templates..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>All Content</option>
                  <option>Implementation Guides</option>
                  <option>Case Studies</option>
                  <option>Templates & Tools</option>
                  <option>Industry Insights</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>All Industries</option>
                  <option>E-commerce</option>
                  <option>SaaS Software</option>
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Financial Services</option>
                </select>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Find Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resource Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From getting started to advanced strategy, from tool selection to implementation—everything you need for automation success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Implementation Guides',
                description: 'Step-by-step playbooks to build your automation foundation',
                icon: '📚',
                href: '/resources/guides',
                count: '15+ Expert Guides',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
              },
              {
                title: 'Success Stories',
                description: 'Real-world results from companies like yours',
                icon: '🏆',
                href: '/resources/case-studies',
                count: '20+ Case Studies',
                color: 'bg-green-50 hover:bg-green-100 border-green-200'
              },
              {
                title: 'Templates & Tools',
                description: 'Ready-to-use resources to fast-track your projects',
                icon: '📋',
                href: '/resources/templates',
                count: '30+ Templates',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
              },
              {
                title: 'Industry Intelligence',
                description: 'Latest trends and strategic insights',
                icon: '📈',
                href: '/resources/blog',
                count: '50+ Articles',
                color: 'bg-orange-50 hover:bg-orange-100 border-orange-200'
              }
            ].map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className={`${category.color} p-8 rounded-xl transition-all group border-2`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm font-medium text-blue-600">{category.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Recommended Resources
            </h2>
            <p className="text-xl text-gray-600">
              Curated selection of the most popular and practical automation resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Getting Started',
                title: 'Complete Enterprise Automation Guide',
                description: 'Learn enterprise automation basics, assessment methods, and implementation steps from scratch',
                href: '/resources/guides/automation-getting-started',
                readTime: '15 min read',
                downloads: '2,500+ downloads',
                tag: 'Most Popular'
              },
              {
                type: 'Case Study',
                title: 'E-commerce Automation Transformation Success',
                description: 'See how an e-commerce company achieved 150% business growth through automation',
                href: '/resources/case-studies/ecommerce-success',
                readTime: '12 min read',
                downloads: '1,800+ reads',
                tag: 'Industry Trending'
              },
              {
                type: 'ROI Analysis',
                title: 'Automation ROI Analysis Guide',
                description: 'Detailed ROI calculation methods, case studies, and investment decision frameworks',
                href: '/resources/guides/roi-analysis',
                readTime: '18 min read',
                downloads: '3,200+ downloads',
                tag: 'Management Essential'
              }
            ].map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {resource.type}
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
                    {resource.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.readTime}</span>
                  <span>{resource.downloads}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Custom Automation Strategy
          </h2>
          <p className="text-xl mb-8">
            Submit your business information to receive a customized automation implementation roadmap and ROI analysis report
          </p>

          <div className="bg-white rounded-lg p-8 text-left max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  >
                    <option value="">Select your industry</option>
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="saas">SaaS Software</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Business Challenges
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                  placeholder="Describe the main business challenges you hope to solve through automation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Custom Strategy →
              </button>

              <p className="text-xs text-gray-500 text-center">
                We are committed to protecting your privacy and will not share your information with third parties
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Resource Updates
            </h2>
            <p className="text-xl text-gray-600">
              Continuously updated high-quality content to keep you at the forefront of automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: 'September 15, 2024',
                type: 'New Guide',
                title: '2024 Enterprise Automation Trends & Predictions',
                excerpt: 'In-depth analysis of the latest automation technology trends this year and their impact on enterprises...',
                href: '/resources/blog/automation-trends-2024'
              },
              {
                date: 'September 12, 2024',
                type: 'Case Update',
                title: 'SaaS Company Achieves 200% User Growth Through Automation',
                excerpt: 'Detailed analysis of how a SaaS company achieved rapid growth through comprehensive automation strategy...',
                href: '/resources/case-studies/saas-growth'
              },
              {
                date: 'September 10, 2024',
                type: 'Template Release',
                title: 'Automation Project Implementation Plan Template',
                excerpt: 'Standardized project implementation template to help enterprises systematically advance automation projects...',
                href: '/resources/templates'
              }
            ].map((update) => (
              <Link
                key={update.title}
                href={update.href}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{update.date}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    {update.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm">{update.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Internal Links */}
      <InternalLinks
        title="更多资源和工具"
        links={[
          {
            title: "解决方案概览",
            description: "了解所有自动化解决方案",
            href: "/solutions",
            category: "解决方案"
          },
          {
            title: "行业应用",
            description: "查看针对特定行业的解决方案",
            href: "/industries",
            category: "行业"
          },
          {
            title: "工具箱",
            description: "使用计算器和评估工具",
            href: "/tools",
            category: "工具"
          },
          {
            title: "联系咨询",
            description: "获取个性化咨询服务",
            href: "/contact",
            category: "咨询"
          }
        ]}
      />
    </Layout>
  )
}