import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function BlogPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Industry Insights</span> Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-4xl mx-auto">
              Cutting-edge trends, in-depth analysis, practical experience - Your automation knowledge hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                📧 Subscribe to Updates
              </button>
              <Link
                href="/resources/blog/automation-trends-2024"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-block"
              >
                View Popular Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse articles by topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Industry Trends",
                icon: "📈",
                description: "Latest technology trends and market dynamics",
                color: "blue",
                topics: ["AI Technology Development", "Market Analysis", "Future Predictions"]
              },
              {
                category: "Technical Deep Dive",
                icon: "⚙️",
                description: "Technical principles and implementation details",
                color: "green",
                topics: ["Architecture Design", "Tool Comparison", "Implementation Methods"]
              },
              {
                category: "Implementation Guides",
                icon: "📊",
                description: "Step-by-step implementation guides",
                color: "purple",
                topics: ["Getting Started", "Best Practices", "Real-world Examples"]
              },
              {
                category: "Business Analysis",
                icon: "💼",
                description: "Business strategies and ROI analysis",
                color: "orange",
                topics: ["Strategic Planning", "Cost Analysis", "ROI Calculation"]
              }
            ].map((category) => (
              <div key={category.category} className={`bg-${category.color}-50 border-2 border-${category.color}-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.category}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">Popular Topics:</h4>
                  {category.topics.map((topic, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <span className={`text-${category.color}-500 mr-2`}>•</span>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Editor-recommended high-quality in-depth articles
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-2">
              <Link href="/resources/blog/automation-trends-2024" className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-48 p-8 flex items-center">
                    <div className="text-white">
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                        🔥 Trending Article
                      </div>
                      <h3 className="text-2xl font-bold mb-3">
                        2024 Enterprise Automation Development Trends & Predictions
                      </h3>
                      <p className="text-teal-100">
                        In-depth analysis of this year's latest automation technology trends and their impact and opportunities for enterprises
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>October 2024</span>
                      <div className="flex items-center gap-4">
                        <span>📖 15 min read</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      With the rapid development of artificial intelligence technology, enterprise automation is entering a completely new phase.
                      This article will deeply analyze key trends in 2024, including AI-driven intelligent automation,
                      the proliferation of low-code/no-code platforms, and new directions in enterprise digital transformation...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">AI Trends</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Market Analysis</span>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Future Predictions</span>
                      </div>
                      <span className="text-teal-600 font-medium hover:text-teal-800">
                        Read Full Article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Secondary Articles */}
            <div className="space-y-8">
              {[
                {
                  title: "Deep Integration of AI and Automation: New Business Opportunities",
                  excerpt: "Exploring how artificial intelligence is redefining the boundaries and possibilities of enterprise automation",
                  date: "October 2024",
                  readTime: "12 min",
                  category: "Technical Deep Dive",
                  href: "/resources/blog/ai-automation-integration"
                },
                {
                  title: "Enterprise Automation Cost Analysis: Investment and Returns",
                  excerpt: "Detailed analysis of automation project cost structure and ROI calculation methods",
                  date: "October 2024",
                  readTime: "18 min",
                  category: "Business Analysis",
                  href: "/resources/blog/automation-cost-analysis"
                }
              ].map((article, index) => (
                <Link key={index} href={article.href} className="block">
                  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Latest Articles
              </h2>
              <p className="text-gray-600">
                Stay updated with the latest in automation
              </p>
            </div>
            <div className="flex gap-4">
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>All Categories</option>
                <option>Industry Trends</option>
                <option>Technical Deep Dive</option>
                <option>Case Analysis</option>
                <option>Management Insights</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Latest Published</option>
                <option>Most Read</option>
                <option>Most Commented</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agents for Business in 2025: Complete Implementation Guide",
                excerpt: "Learn how to deploy autonomous AI agents in your business. From 3% to 25% adoption - discover the complete guide with 10+ use cases, platform comparisons, and ROI analysis. Market growing from $5.1B to $47.1B by 2030.",
                author: "AutoBusinessOS Team",
                date: "January 2025",
                readTime: "15 min",
                category: "AI Automation",
                tags: ["AI Agents", "Agentic AI", "Implementation Guide"],
                href: "/resources/blog/ai-agents-business-implementation-guide-2025",
                badge: "🔥 NEW"
              },
              {
                title: "Top 10 No-Code Automation Platforms in 2025: Complete Comparison",
                excerpt: "Compare the best no-code automation platforms in 2025. Build workflows without coding and save $100K+ on development costs. Detailed comparison of Zapier, Make, n8n, and 7 more platforms with pricing and features.",
                author: "AutoBusinessOS Team",
                date: "January 2025",
                readTime: "18 min",
                category: "Tool Comparison",
                tags: ["No-Code", "Platform Comparison", "Workflow Automation"],
                href: "/resources/blog/no-code-automation-platforms-2025-comparison",
                badge: "🔥 NEW"
              },
              {
                title: "Marketing Automation ROI Calculator 2025: How 500+ Companies Achieved 312% ROI",
                excerpt: "Learn how 500+ companies achieved 312% ROI with marketing automation. Step-by-step framework, free calculator, real case studies, and platform comparisons. 70% of marketing leaders are increasing automation investments in 2025.",
                author: "AutoBusinessOS Team",
                date: "January 2025",
                readTime: "20 min",
                category: "Business Analysis",
                tags: ["Marketing Automation", "ROI Calculator", "Case Studies"],
                href: "/resources/blog/marketing-automation-roi-calculator-framework-2025",
                badge: "🔥 NEW"
              },
              {
                title: "CRM Automation Complete Guide 2025: Boost Sales Productivity",
                excerpt: "Complete guide to CRM automation. Learn how to automate lead management, sales processes, customer communications, and reporting to increase productivity.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "24 min",
                category: "Implementation Guide",
                tags: ["CRM Automation", "Sales Automation", "Lead Management"],
                href: "/resources/blog/crm-automation-complete-guide-2025"
              },
              {
                title: "Marketing Automation Platform Comparison 2025: Top 10 Tools Reviewed",
                excerpt: "Compare the top 10 marketing automation platforms. In-depth analysis of features, pricing, integrations, and best use cases for HubSpot, Marketo, ActiveCampaign, and more.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "22 min",
                category: "Tool Comparison",
                tags: ["Marketing Automation", "Tool Review", "Platform Comparison"],
                href: "/resources/blog/marketing-automation-platforms-comparison-2025"
              },
              {
                title: "Best Workflow Automation Tools 2025: Compare Top 12 Platforms",
                excerpt: "Complete comparison of leading workflow automation platforms including Zapier, Make, Power Automate, n8n, and more. Find the right tool for your needs.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "25 min",
                category: "Tool Comparison",
                tags: ["Workflow Automation", "Tool Comparison", "Integration"],
                href: "/resources/blog/workflow-automation-tools-comparison-2025"
              },
              {
                title: "15 Business Tasks You Can Automate Today: Small Business Guide",
                excerpt: "Discover 15 practical tasks you can automate immediately with step-by-step implementation guides, tools, and cost savings for small businesses.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "20 min",
                category: "Implementation Guide",
                tags: ["Small Business", "Automation Tasks", "Practical Guide"],
                href: "/resources/blog/small-business-automation-tasks-2025"
              },
              {
                title: "E-commerce Automation Complete Guide 2025",
                excerpt: "Comprehensive guide to e-commerce automation. Learn how to automate inventory, orders, customer service, and marketing for online stores.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "23 min",
                category: "Implementation Guide",
                tags: ["E-commerce", "Store Automation", "Order Management"],
                href: "/resources/blog/ecommerce-automation-complete-guide-2025"
              },
              {
                title: "How to Calculate Automation ROI: Complete Guide",
                excerpt: "Step-by-step guide to calculating automation return on investment. Learn cost analysis methods, ROI formulas, and how to measure automation success.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "18 min",
                category: "Business Analysis",
                tags: ["ROI Calculation", "Cost Analysis", "Business Case"],
                href: "/resources/blog/calculate-automation-roi-guide"
              },
              {
                title: "Automation Security and Compliance Guide 2025",
                excerpt: "Essential guide to security and compliance in automation. Learn data protection, access control, audit trails, and regulatory compliance best practices.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "19 min",
                category: "Security & Compliance",
                tags: ["Security", "Compliance", "Data Protection"],
                href: "/resources/blog/automation-security-compliance-2025"
              },
              {
                title: "2024 Enterprise Automation Trends Report",
                excerpt: "Comprehensive analysis of major automation trends including AI-powered workflows, cloud-native platforms, and implementation insights.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "12 min",
                category: "Industry Insights",
                tags: ["AI Automation", "Cloud Platform", "Trends 2024"],
                href: "/resources/blog/2024-automation-trends-report"
              },
              {
                title: "Enterprise Automation Getting Started Guide",
                excerpt: "Step-by-step guide from manual processes to intelligent workflows. Practical guidance for launching your automation journey.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "10 min",
                category: "Implementation Guide",
                tags: ["Getting Started", "Best Practices", "Implementation"],
                href: "/resources/blog/enterprise-automation-getting-started"
              },
              {
                title: "Automation Use Cases Across 5 Industries",
                excerpt: "From E-commerce to SaaS: Explore automation opportunities with implementation insights and realistic expectations.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "11 min",
                category: "Industry Analysis",
                tags: ["E-commerce", "SaaS", "Use Cases"],
                href: "/resources/blog/automation-industry-use-cases"
              },
              {
                title: "RPA Implementation Guide: Best Practices",
                excerpt: "Comprehensive guide to implementing Robotic Process Automation. Learn planning, development, deployment, and maintenance best practices.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "17 min",
                category: "Implementation Guide",
                tags: ["RPA", "Implementation", "Best Practices"],
                href: "/resources/blog/rpa-implementation-guide"
              },
              {
                title: "Digital Transformation Strategy Guide",
                excerpt: "Strategic guide to digital transformation. Learn how to plan, execute, and measure digital transformation initiatives successfully.",
                author: "AutoBusinessOS Team",
                date: "October 2024",
                readTime: "16 min",
                category: "Strategy",
                tags: ["Digital Transformation", "Strategy", "Change Management"],
                href: "/resources/blog/digital-transformation-strategy"
              }
            ].map((article, index) => (
              <Link key={index} href={article.href} className="block group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="bg-gray-200 h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 opacity-80"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-gray-900 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>📖 {article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Professional Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Weekly curated industry insights and practical resources delivered to your inbox
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-medium text-gray-900">Weekly Curated</div>
                <div className="text-gray-600">Quality content push</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-medium text-gray-900">Industry Insights</div>
                <div className="text-gray-600">Cutting-edge trend analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <div className="font-medium text-gray-900">Practical Resources</div>
                <div className="text-gray-600">Tools and templates</div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  Subscribe Now
                </button>
              </div>
              <div className="text-xs text-gray-500">
                By subscribing, you agree to our privacy policy. You can unsubscribe at any time.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Share Your Insights?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            We welcome industry experts and practitioners to contribute and share your experience and perspectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              📝 Submit Article
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              💡 Content Partnership
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}