import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function CaseStudiesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Automation Scenarios</span> Research Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-4xl mx-auto">
              Illustrative automation scenarios based on industry research and typical implementation patterns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/case-studies/ecommerce-success"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                View Example Scenarios →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-r-lg shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📊 Important Notice About These Scenarios
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>The scenarios presented on this page are illustrative examples</strong> based on industry research, published automation studies, and typical implementation patterns. They are designed to demonstrate potential automation applications and outcomes across various industries. <strong>These are not actual client case studies or guaranteed results.</strong> Your specific outcomes will vary significantly based on your business context, implementation approach, process complexity, team adoption, and many other factors unique to your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Scenario Overview
            </h2>
            <p className="text-xl text-gray-600">
              Example automation scenarios covering multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-gray-700 font-medium">Multiple Scenarios</div>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="text-3xl mb-2">🏭</div>
              <div className="text-gray-700 font-medium">Various Industries</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="text-3xl mb-2">💡</div>
              <div className="text-gray-700 font-medium">Example Solutions</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-8">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-gray-700 font-medium">Potential Benefits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Example Scenarios by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different industries face different challenges and solutions. Explore example automation scenarios relevant to your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "E-commerce & Retail",
                icon: "🛒",
                caseCount: "Multiple Examples",
                avgROI: "Example ROI",
                mainBenefits: ["Order Processing Automation", "Customer Service Bots", "Inventory Management"],
                topCase: {
                  title: "E-commerce Platform Automation Transformation Success",
                  result: "150% business growth, 60% cost reduction",
                  href: "/resources/case-studies/ecommerce-success"
                }
              },
              {
                industry: "Manufacturing",
                icon: "🏭",
                caseCount: "Multiple Examples",
                avgROI: "Example ROI",
                mainBenefits: ["Production Planning Optimization", "Quality Control", "Supply Chain Management"],
                topCase: {
                  title: "Manufacturing Enterprise Automation Upgrade Case",
                  result: "80% efficiency improvement, 90% defect reduction",
                  href: "/resources/case-studies/manufacturing-efficiency"
                }
              },
              {
                industry: "SaaS Software",
                icon: "💻",
                caseCount: "Multiple Examples",
                avgROI: "Example ROI",
                mainBenefits: ["User Onboarding", "Customer Success", "Product Analytics"],
                topCase: {
                  title: "SaaS Company Achieves 200% User Growth Through Automation",
                  result: "200% user growth, 40% churn reduction",
                  href: "/resources/case-studies/saas-growth"
                }
              },
              {
                industry: "Financial Services",
                icon: "🏦",
                caseCount: "Multiple Examples",
                avgROI: "Example ROI",
                mainBenefits: ["Risk Control", "Compliance Reporting", "Customer Service"],
                topCase: {
                  title: "Banking Digital Transformation Case",
                  result: "300% processing efficiency improvement, 50% compliance cost reduction",
                  href: "/resources/case-studies/finance-automation"
                }
              },
              {
                industry: "Healthcare",
                icon: "🏥",
                caseCount: "Multiple Examples",
                avgROI: "Example ROI",
                mainBenefits: ["Patient Management", "Appointment System", "Medical Records"],
                topCase: {
                  title: "Healthcare Institution Digital Transformation Case",
                  result: "90% patient satisfaction improvement, 70% operational efficiency boost",
                  href: "/resources/case-studies/healthcare-digital"
                }
              },
              {
                industry: "Consulting Services",
                icon: "💼",
                caseCount: "Multiple Examples",
                avgROI: "Example ROI",
                mainBenefits: ["Project Management", "Knowledge Management", "Client Relations"],
                topCase: {
                  title: "Consulting Firm Automation Upgrade Case",
                  result: "50% profit margin growth, 60% project delivery efficiency improvement",
                  href: "/resources/case-studies/consulting-automation"
                }
              }
            ].map((category) => (
              <div key={category.industry} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.industry}</h3>
                  <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <span>{category.caseCount}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Main Use Cases</h4>
                  <div className="space-y-2">
                    {category.mainBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">🏆 Featured Case</h4>
                  <Link
                    href={category.topCase.href}
                    className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <h5 className="font-medium text-gray-900 mb-1 hover:text-indigo-600">
                      {category.topCase.title}
                    </h5>
                    <p className="text-sm text-gray-600">{category.topCase.result}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Implementation Cases */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✓ Real Implementation Examples
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Implementation Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Learn from real-world automation implementations with measured outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link href="/resources/case-studies/ecommerce-order-automation" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                <div className="text-sm font-semibold mb-2">E-COMMERCE • ORDER AUTOMATION</div>
                <h3 className="text-2xl font-bold">How Order Automation Reduced Fulfillment Time by 68%</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Mid-size e-commerce company automated order-to-fulfillment workflow, processing 800-1,200 daily orders
                  with 99.2% accuracy while reducing per-order processing time from 15 to 4.8 minutes.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-2xl font-bold text-green-600">68%</div>
                    <div className="text-xs text-gray-600">Time Reduced</div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-2xl font-bold text-green-600">99.2%</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-2xl font-bold text-green-600">344%</div>
                    <div className="text-xs text-gray-600">ROI Year 1</div>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold">Read Full Case Study →</div>
              </div>
            </Link>

            <Link href="/resources/case-studies/saas-support-automation" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                <div className="text-sm font-semibold mb-2">B2B SAAS • SUPPORT AUTOMATION</div>
                <h3 className="text-2xl font-bold">SaaS Company Automates 60% of Support Tickets with AI</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Project management SaaS serving 2,000+ customers implemented AI-powered support automation,
                  reducing response time from 4 hours to 12 minutes while improving customer satisfaction.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-2xl font-bold text-green-600">60%</div>
                    <div className="text-xs text-gray-600">Auto-Resolved</div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-2xl font-bold text-green-600">12min</div>
                    <div className="text-xs text-gray-600">Avg Response</div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-xs text-gray-600">CSAT Score</div>
                  </div>
                </div>
                <div className="text-purple-600 font-semibold">Read Full Case Study →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Example Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              Illustrative examples based on industry research and typical patterns
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "E-commerce Enterprise Automation Transformation: From Manual to Intelligent Evolution",
                company: "Leading E-commerce Platform",
                industry: "E-commerce & Retail",
                scale: "$7B annual revenue",
                challenge: "Surging orders led to low processing efficiency, overwhelming customer service pressure, chaotic inventory management",
                solution: "Implemented end-to-end automation including order processing, customer service bots, intelligent inventory management",
                results: [
                  "300% order processing efficiency improvement",
                  "80% customer service response time reduction",
                  "150% inventory turnover improvement",
                  "60% operational cost reduction"
                ],
                roi: "320%",
                timeline: "12 months",
                href: "/resources/case-studies/ecommerce-success",
                featured: true
              },
              {
                title: "SaaS Company Achieves 200% User Growth Through Automation",
                company: "B2B SaaS Enterprise",
                industry: "Software Services",
                scale: "500K+ users",
                challenge: "Stagnant user growth, high customer success costs, insufficient product usage data analysis",
                solution: "Automated user onboarding, customer success processes, and product analytics",
                results: [
                  "200% user growth",
                  "40% customer churn reduction",
                  "35-point NPS score improvement",
                  "50% customer acquisition cost reduction"
                ],
                roi: "350%",
                timeline: "8 months",
                href: "/resources/case-studies/saas-growth",
                featured: true
              },
              {
                title: "Manufacturing Enterprise Automation Upgrade: 80% Efficiency Improvement Implementation Journey",
                company: "Large Manufacturing Enterprise",
                industry: "Manufacturing",
                scale: "3000+ employees",
                challenge: "Inaccurate production planning, manual quality control dependence, supply chain coordination difficulties",
                solution: "Smart manufacturing systems including MES, WMS, and quality management automation",
                results: [
                  "80% production efficiency improvement",
                  "90% product defect rate reduction",
                  "30% inventory cost reduction",
                  "99% on-time delivery rate improvement"
                ],
                roi: "280%",
                timeline: "18 months",
                href: "/resources/case-studies/manufacturing-efficiency",
                featured: false
              }
            ].map((caseStudy, index) => (
              <div key={index} className={`${caseStudy.featured ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200' : 'bg-gray-50 border border-gray-200'} rounded-lg p-8`}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      {caseStudy.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          🏆 Featured Example
                        </span>
                      )}
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      <Link href={caseStudy.href} className="hover:text-indigo-600">
                        {caseStudy.title}
                      </Link>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Company Background</h4>
                        <p className="text-gray-600 mb-1">Company: {caseStudy.company}</p>
                        <p className="text-gray-600">Scale: {caseStudy.scale}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Project Timeline</h4>
                        <p className="text-gray-600 mb-1">Implementation: {caseStudy.timeline}</p>
                        <p className="text-gray-600">ROI: {caseStudy.roi}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenges Faced</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Results</h4>
                    <div className="space-y-3">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">{caseStudy.roi}</div>
                      <div className="text-sm text-gray-600 mb-4">Example ROI</div>
                      <Link
                        href={caseStudy.href}
                        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                      >
                        View Full Example →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore More Scenarios
            </h2>
            <p className="text-xl text-gray-600">
              Use filters to find the most relevant example scenarios
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search case keywords..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>All Industries</option>
                  <option>E-commerce & Retail</option>
                  <option>Manufacturing</option>
                  <option>SaaS Software</option>
                  <option>Financial Services</option>
                  <option>Healthcare</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>Company Size</option>
                  <option>Small (≤100 people)</option>
                  <option>Medium (100-1000 people)</option>
                  <option>Large (&gt;1000 people)</option>
                </select>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Chain Inventory Management Automation",
                industry: "Retail",
                result: "200% inventory turnover improvement",
                roi: "250%",
                scale: "Medium Enterprise"
              },
              {
                title: "Educational Institution Student Management System",
                industry: "Education",
                result: "150% management efficiency improvement",
                roi: "180%",
                scale: "Medium Enterprise"
              },
              {
                title: "Logistics Company Delivery Optimization System",
                industry: "Logistics",
                result: "120% delivery efficiency improvement",
                roi: "220%",
                scale: "Large Enterprise"
              },
              {
                title: "Restaurant Chain Order Management Automation",
                industry: "Food & Beverage",
                result: "300% order processing speed improvement",
                roi: "190%",
                scale: "Medium Enterprise"
              },
              {
                title: "Real Estate CRM System Automation",
                industry: "Real Estate",
                result: "80% sales conversion rate improvement",
                roi: "160%",
                scale: "Small Enterprise"
              },
              {
                title: "Insurance Company Claims Process Automation",
                industry: "Insurance",
                result: "400% claims processing speed improvement",
                roi: "280%",
                scale: "Large Enterprise"
              }
            ].map((miniCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {miniCase.industry}
                  </span>
                  <span className="text-sm text-gray-500">{miniCase.scale}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-indigo-600 cursor-pointer">
                  {miniCase.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{miniCase.result}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">ROI: </span>
                    <span className="font-bold text-indigo-600">{miniCase.roi}</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Success Factors in Automation
            </h2>
            <p className="text-xl text-gray-600">
              Based on industry research and automation best practices, these are common success factors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                factor: "Clear Business Objectives",
                description: "Successful projects have clear, quantifiable business goals and success criteria",
                percentage: "95%",
                examples: ["50% efficiency improvement", "30% cost reduction", "Better customer satisfaction"]
              },
              {
                factor: "Senior Management Support",
                description: "Full support and resource investment from senior management",
                percentage: "92%",
                examples: ["CEO direct involvement", "Adequate budget", "Cross-departmental coordination"]
              },
              {
                factor: "Phased Implementation",
                description: "Adopting gradual implementation strategies to reduce risk and accumulate experience",
                percentage: "88%",
                examples: ["Pilot before rollout", "Rapid iteration", "Continuous optimization"]
              },
              {
                factor: "Employee Training and Engagement",
                description: "Emphasizing employee training and active participation in the change process",
                percentage: "85%",
                examples: ["Comprehensive training", "Participation in design", "Incentive mechanisms"]
              }
            ].map((factor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{factor.factor}</h3>
                  <div className="text-2xl font-bold text-indigo-600">{factor.percentage}</div>
                </div>
                <p className="text-gray-600 mb-4">{factor.description}</p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Typical Manifestations:</h4>
                  <div className="space-y-1">
                    {factor.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Learn from these example scenarios and let us help you achieve business automation transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Calculate Your ROI Potential
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-block"
            >
              Consult Expert Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}