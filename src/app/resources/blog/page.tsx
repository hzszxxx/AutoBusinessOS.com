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
                count: "25 Articles",
                description: "Latest technology trends and market dynamics",
                color: "blue",
                topics: ["AI Technology Development", "Market Analysis", "Future Predictions"]
              },
              {
                category: "Technical Deep Dive",
                icon: "⚙️",
                count: "18 Articles",
                description: "Technical principles and implementation details",
                color: "green",
                topics: ["Architecture Design", "Tool Comparison", "Implementation Methods"]
              },
              {
                category: "Case Analysis",
                icon: "📊",
                count: "22 Articles",
                description: "In-depth analysis of real-world cases",
                color: "purple",
                topics: ["Success Stories", "Lessons Learned", "Experience Summary"]
              },
              {
                category: "Management Insights",
                icon: "💼",
                count: "15 Articles",
                description: "Management strategies and decision thinking",
                color: "orange",
                topics: ["Strategic Planning", "Team Management", "Change Leadership"]
              }
            ].map((category) => (
              <div key={category.category} className={`bg-${category.color}-50 border-2 border-${category.color}-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.category}</h3>
                  <div className={`text-sm text-${category.color}-600 font-medium mb-3`}>
                    {category.count}
                  </div>
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
                      <span>September 15, 2024</span>
                      <div className="flex items-center gap-4">
                        <span>📖 15 min read</span>
                        <span>💬 156 comments</span>
                        <span>👁️ 8.2K views</span>
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
                  date: "September 12, 2024",
                  readTime: "12 min",
                  category: "Technical Deep Dive",
                  href: "/resources/blog/ai-automation-integration"
                },
                {
                  title: "Enterprise Automation Cost Analysis: The Art of Balancing Investment and Returns",
                  excerpt: "Detailed analysis of automation project cost structure and ROI calculation methods",
                  date: "September 10, 2024",
                  readTime: "18 min",
                  category: "Management Insights",
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
                title: "Cross-Industry Automation Maturity Comparison Analysis",
                excerpt: "In-depth analysis of automation development levels and characteristics across manufacturing, finance, retail and other industries",
                author: "Expert Zhang",
                date: "September 8, 2024",
                readTime: "14 min",
                views: "3.2K",
                category: "Industry Trends",
                tags: ["Industry Comparison", "Maturity Assessment", "Development Trends"],
                href: "/resources/blog/industry-automation-comparison",
                image: "/api/blog/images/industry-comparison.jpg"
              },
              {
                title: "Complete Guide to Enterprise Automation Security",
                excerpt: "Comprehensive introduction to security risks and protection strategies for automation systems, ensuring digital transformation security",
                author: "Security Li",
                date: "September 6, 2024",
                readTime: "16 min",
                views: "2.8K",
                category: "Technical Deep Dive",
                tags: ["Security Protection", "Risk Control", "Best Practices"],
                href: "/resources/blog/automation-security-guide",
                image: "/api/blog/images/security-guide.jpg"
              },
              {
                title: "Practical Automation Transformation Path for SMEs",
                excerpt: "Tailored to SME characteristics, providing practical automation implementation advice and strategies",
                author: "Consultant Wang",
                date: "September 4, 2024",
                readTime: "11 min",
                views: "4.1K",
                category: "Management Insights",
                tags: ["Small & Medium Enterprise", "Transformation Strategy", "Implementation Path"],
                href: "/resources/blog/sme-automation-path",
                image: "/api/blog/images/sme-path.jpg"
              },
              {
                title: "Common RPA Implementation Pitfalls and How to Avoid Them",
                excerpt: "Based on extensive practical experience, summarizing typical problems and solutions in RPA project implementation",
                author: "Implementation Chen",
                date: "September 2, 2024",
                readTime: "13 min",
                views: "2.5K",
                category: "Case Analysis",
                tags: ["RPA", "Implementation Experience", "Problem Solving"],
                href: "/resources/blog/rpa-pitfalls-solutions",
                image: "/api/blog/images/rpa-pitfalls.jpg"
              },
              {
                title: "Talent Development Strategy in the Age of Automation",
                excerpt: "Exploring talent development strategies and skill training methods during automation transformation",
                author: "HR Liu",
                date: "August 30, 2024",
                readTime: "12 min",
                views: "3.7K",
                category: "Management Insights",
                tags: ["Talent Development", "Skill Development", "Organizational Change"],
                href: "/resources/blog/automation-talent-strategy",
                image: "/api/blog/images/talent-strategy.jpg"
              },
              {
                title: "Low-Code Platform Selection and Evaluation Guide",
                excerpt: "Detailed comparison of mainstream low-code platform features, pros and cons, and applicable scenarios",
                author: "Architect Zhao",
                date: "August 28, 2024",
                readTime: "20 min",
                views: "1.9K",
                category: "Technical Deep Dive",
                tags: ["Low-Code", "Platform Selection", "Technical Assessment"],
                href: "/resources/blog/low-code-platform-guide",
                image: "/api/blog/images/low-code-guide.jpg"
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
                        <span>👤 {article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>📖 {article.readTime}</span>
                        <span>👁️ {article.views}</span>
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

      {/* Popular Authors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expert Authors
            </h2>
            <p className="text-xl text-gray-600">
              Industry veterans providing professional insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ming Zhang",
                title: "Automation Technology Director",
                company: "Leading Tech Company",
                expertise: "RPA, AI Integration, Technical Architecture",
                articles: 12,
                followers: "5.2K",
                bio: "15 years of automation technology experience, specializing in enterprise-level automation solution design and implementation"
              },
              {
                name: "Hua Li",
                title: "Digital Transformation Consultant",
                company: "Top Consulting Firm",
                expertise: "Strategic Planning, Change Management, ROI Analysis",
                articles: 18,
                followers: "8.1K",
                bio: "Helped 200+ enterprises successfully achieve digital transformation with extensive management consulting experience"
              },
              {
                name: "Fang Wang",
                title: "Business Process Expert",
                company: "Process Optimization Consulting",
                expertise: "Process Design, Efficiency Optimization, Best Practices",
                articles: 15,
                followers: "6.7K",
                bio: "Specializes in business process analysis and optimization, helping enterprises improve operational efficiency"
              },
              {
                name: "Qiang Chen",
                title: "AI Product Manager",
                company: "AI Technology Company",
                expertise: "AI Applications, Product Design, User Experience",
                articles: 9,
                followers: "4.3K",
                bio: "AI product design expert, specializing in intelligent automation product planning and implementation"
              }
            ].map((author, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-teal-400 to-blue-500 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {author.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{author.name}</h3>
                <div className="text-sm text-gray-600 mb-2">{author.title}</div>
                <div className="text-xs text-gray-500 mb-3">{author.company}</div>
                <p className="text-sm text-gray-600 mb-4">{author.bio}</p>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Expertise:</strong> {author.expertise}
                </div>
                <div className="flex justify-center gap-4 text-xs text-gray-500">
                  <span>📝 {author.articles} articles</span>
                  <span>👥 {author.followers} followers</span>
                </div>
              </div>
            ))}
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