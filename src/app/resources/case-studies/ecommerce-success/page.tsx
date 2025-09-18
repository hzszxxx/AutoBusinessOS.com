import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function EcommerceSuccessCase() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-green-800 bg-opacity-50 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🏆 Success Story</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              E-commerce Enterprise Automation Transformation Success Case
            </h1>
            <p className="text-xl text-green-100 mb-6">
              From Manual to Intelligent Evolution: A Leading E-commerce Platform's Automation Transformation Journey
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <span>📊 Industry: E-commerce & Retail</span>
              <span>📈 ROI: 320%</span>
              <span>⏱️ Implementation: 12 months</span>
              <span>💰 Annual Revenue: $7B</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">300%</div>
              <div className="text-sm">Order Processing Efficiency Improvement</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">60%</div>
              <div className="text-sm">Operational Cost Reduction</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">150%</div>
              <div className="text-sm">Business Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Background</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Overview</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Business Type:</span>
                      <span className="font-medium">B2C E-commerce Platform</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Founded:</span>
                      <span className="font-medium">2015</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employee Count:</span>
                      <span className="font-medium">2,000+ people</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Revenue:</span>
                      <span className="font-medium">$7 billion</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">User Base:</span>
                      <span className="font-medium">5+ million</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Daily Orders:</span>
                      <span className="font-medium">100,000+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Model</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This enterprise is a comprehensive e-commerce platform specializing in fashion apparel, adopting a hybrid model of self-operated + third-party merchants.
                    Mainly selling clothing, shoes, bags, and home goods, covering over 300 cities nationwide with a complete warehousing and logistics system.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges Faced</h2>

              <div className="space-y-6">
                {[
                  {
                    challenge: "Order Processing Bottleneck",
                    description: "With rapid business growth, daily orders increased from 20K to 100K+, manual processing could no longer cope",
                    impact: "Order delay rate reached 15%, customer complaints increased 200%"
                  },
                  {
                    challenge: "Overwhelming Customer Service Pressure",
                    description: "Customer service team needed to handle massive repetitive inquiries, slow response speed, declining satisfaction",
                    impact: "Average response time exceeded 30 minutes, customer satisfaction only 70%"
                  },
                  {
                    challenge: "Chaotic Inventory Management",
                    description: "Multi-warehouse, multi-SKU management complexity, frequent stockouts or overstocking",
                    impact: "Inventory turnover rate 30% below industry average"
                  },
                  {
                    challenge: "Serious Data Silos",
                    description: "Independent departmental systems, lack of unified data view, decisions based on experience",
                    impact: "Marketing ROI difficult to calculate accurately, unreasonable resource allocation"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-red-400 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.challenge}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="bg-red-50 p-2 rounded text-xs text-red-700">
                      <strong>Impact:</strong> {item.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive automation transformation, building an intelligent e-commerce operating system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                module: "Order Processing Automation",
                icon: "📦",
                description: "End-to-end automation from order receipt to shipping",
                features: ["Smart Order Routing", "Automatic Inventory Allocation", "Delivery Optimization", "Exception Order Handling"],
                improvement: "300% Efficiency Improvement"
              },
              {
                module: "Intelligent Customer Service System",
                icon: "🤖",
                description: "AI customer service bots + human agent collaboration",
                features: ["Smart Q&A", "Sentiment Analysis", "Ticket Routing", "Knowledge Base Management"],
                improvement: "80% Response Time Reduction"
              },
              {
                module: "Smart Inventory Management",
                icon: "📊",
                description: "Predictive inventory management and automatic replenishment",
                features: ["Demand Forecasting", "Auto Replenishment", "Inventory Optimization", "Slow-moving Alerts"],
                improvement: "150% Turnover Rate Improvement"
              },
              {
                module: "Marketing Automation",
                icon: "📢",
                description: "Precision marketing and customer lifecycle management",
                features: ["User Profiling", "Personalized Recommendations", "Automated Marketing", "Performance Analytics"],
                improvement: "120% Conversion Rate Improvement"
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-4xl mb-4 text-center">{solution.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {solution.module}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Core Functions:</h4>
                  <div className="space-y-1">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-xs text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {solution.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600">
              12-month phased implementation ensuring smooth transition and continuous optimization
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                duration: "Months 1-3",
                title: "Infrastructure Setup",
                color: "blue",
                tasks: [
                  "Technical architecture design and environment setup",
                  "Core team formation and training",
                  "Data organization and system integration",
                  "Pilot process optimization"
                ],
                deliverables: ["Technical platform setup complete", "Team training complete", "Pilot plan confirmed"],
                metrics: "System availability > 99%"
              },
              {
                phase: "Phase 2",
                duration: "Months 4-6",
                title: "Core Module Implementation",
                color: "green",
                tasks: [
                  "Order processing automation launch",
                  "Intelligent customer service system deployment",
                  "Inventory management system optimization",
                  "Data analytics platform construction"
                ],
                deliverables: ["80% order automation rate", "Customer service bot launch", "Inventory system upgrade"],
                metrics: "200% order processing efficiency improvement"
              },
              {
                phase: "Phase 3",
                duration: "Months 7-9",
                title: "Full Rollout and Optimization",
                color: "purple",
                tasks: [
                  "Marketing automation system launch",
                  "Omnichannel integration optimization",
                  "Advanced analytics feature development",
                  "Continuous user experience optimization"
                ],
                deliverables: ["90% marketing automation rate", "Omnichannel integration complete", "Advanced analytics launch"],
                metrics: "250% overall operational efficiency improvement"
              },
              {
                phase: "Phase 4",
                duration: "Months 10-12",
                title: "Intelligence Upgrade",
                color: "orange",
                tasks: [
                  "AI algorithm optimization and upgrade",
                  "Predictive analytics feature enhancement",
                  "Personalized recommendation optimization",
                  "System performance tuning"
                ],
                deliverables: ["95% AI model accuracy", "Predictive analytics feature complete", "Performance optimization complete"],
                metrics: "Target results fully achieved"
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className={`bg-${phase.color}-500 rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 mr-4">{phase.phase}: {phase.title}</h3>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {phase.duration}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Tasks:</h4>
                      <ul className="space-y-1">
                        {phase.tasks.map((task, tIndex) => (
                          <li key={tIndex} className="flex items-center text-sm text-gray-600">
                            <span className={`text-${phase.color}-500 mr-2`}>•</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="space-y-1 mb-3">
                        {phase.deliverables.map((deliverable, dIndex) => (
                          <li key={dIndex} className="flex items-center text-sm text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                      <div className={`bg-${phase.color}-50 border border-${phase.color}-200 p-2 rounded text-sm`}>
                        <strong className={`text-${phase.color}-800`}>Key Metrics:</strong>
                        <span className={`text-${phase.color}-700 ml-2`}>{phase.metrics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results and ROI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Results & ROI Analysis
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensively exceeded expected targets, achieving significant business value
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { metric: "Order Processing Efficiency", before: "Manual Processing", after: "300% Improvement", icon: "📦" },
              { metric: "Customer Service Response", before: "30 minutes", after: "3 minutes", icon: "⚡" },
              { metric: "Inventory Turnover Rate", before: "6 times/year", after: "15 times/year", icon: "🔄" },
              { metric: "Operational Costs", before: "Baseline 100%", after: "60% Reduction", icon: "💰" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.metric}</h3>
                <div className="space-y-1">
                  <div className="text-sm text-gray-500">Before: {item.before}</div>
                  <div className="text-lg font-bold text-green-600">{item.after}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed ROI Analysis */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Cost Analysis</h3>

              <div className="space-y-4">
                {[
                  { item: "Software licenses and platform fees", amount: "$11.4M", percentage: "40%" },
                  { item: "Implementation services and custom development", amount: "$8.6M", percentage: "30%" },
                  { item: "Hardware equipment and infrastructure", amount: "$4.3M", percentage: "15%" },
                  { item: "Training and change management", amount: "$2.9M", percentage: "10%" },
                  { item: "Other expenses", amount: "$1.4M", percentage: "5%" }
                ].map((cost, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{cost.item}</div>
                      <div className="text-sm text-gray-500">{cost.percentage} share</div>
                    </div>
                    <div className="font-bold text-gray-900">{cost.amount}</div>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Investment Cost</span>
                    <span className="text-red-600">$28.6M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Annual Benefits Analysis</h3>

              <div className="space-y-4">
                {[
                  { item: "Labor cost savings", amount: "$51.4M", description: "Reduced 1,200 FTE workload" },
                  { item: "Operational efficiency improvement", amount: "$34.3M", description: "3x processing capacity improvement" },
                  { item: "Inventory cost reduction", amount: "$25.7M", description: "150% inventory turnover improvement" },
                  { item: "Customer satisfaction improvement", amount: "$17.1M", description: "40% repeat purchase rate improvement" },
                  { item: "Error cost reduction", amount: "$11.4M", description: "95% error rate reduction" }
                ].map((benefit, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-gray-900">{benefit.item}</div>
                      <div className="font-bold text-green-600">{benefit.amount}</div>
                    </div>
                    <div className="text-sm text-gray-500">{benefit.description}</div>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Annual Benefits</span>
                    <span className="text-green-600">$139.9M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Return on Investment Summary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">320%</div>
                <div className="text-green-100">Annual ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2.5 months</div>
                <div className="text-green-100">Payback Period</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.9x</div>
                <div className="text-green-100">Investment Multiple</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Lessons & Insights
            </h2>
            <p className="text-xl text-gray-600">
              Important experience and lessons learned during the successful transformation process
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                category: "Management Level",
                color: "blue",
                lessons: [
                  {
                    title: "Strong executive support is key to success",
                    description: "CEO directly participated in project promotion, providing sufficient resources and decision support",
                    impact: "Ensured project priority and cross-departmental coordination"
                  },
                  {
                    title: "Establish dedicated PMO organization",
                    description: "Set up dedicated project management office to coordinate various business departments",
                    impact: "Improved project execution efficiency and quality"
                  }
                ]
              },
              {
                category: "Technical Level",
                color: "green",
                lessons: [
                  {
                    title: "Data quality is the foundation of automation",
                    description: "Spent 3 months upfront cleaning and standardizing data",
                    impact: "Ensured accuracy and reliability of automation systems"
                  },
                  {
                    title: "System integration requires advance planning",
                    description: "Developed detailed system integration plan to avoid data silos",
                    impact: "Achieved end-to-end process automation"
                  }
                ]
              },
              {
                category: "Personnel Level",
                color: "purple",
                lessons: [
                  {
                    title: "Comprehensive employee training is essential",
                    description: "Invested $2.9M in employee training and skill development",
                    impact: "High employee acceptance and good system usage results"
                  },
                  {
                    title: "Establish incentive mechanisms to promote change",
                    description: "Set up automation promotion rewards to encourage employee participation in improvements",
                    impact: "Created a culture of continuous optimization"
                  }
                ]
              },
              {
                category: "Implementation Level",
                color: "orange",
                lessons: [
                  {
                    title: "Phased implementation reduces risk",
                    description: "Adopted pilot-rollout-optimization gradual strategy",
                    impact: "Avoided large-scale failures and accumulated successful experience"
                  },
                  {
                    title: "Continuous monitoring and optimization",
                    description: "Established comprehensive monitoring system, regular evaluation and adjustment",
                    impact: "Ensured continuous system improvement and value maximization"
                  }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className={`text-xl font-bold text-${section.color}-600 mb-6 flex items-center`}>
                  <span className={`bg-${section.color}-100 rounded-full w-8 h-8 flex items-center justify-center mr-3`}>
                    {index + 1}
                  </span>
                  {section.category}
                </h3>

                <div className="space-y-4">
                  {section.lessons.map((lesson, lIndex) => (
                    <div key={lIndex} className="border-l-4 border-gray-200 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{lesson.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{lesson.description}</p>
                      <div className={`bg-${section.color}-50 p-2 rounded text-sm`}>
                        <strong className={`text-${section.color}-800`}>Impact:</strong>
                        <span className={`text-${section.color}-700 ml-2`}>{lesson.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Future Development Plans
            </h2>
            <p className="text-xl text-gray-600">
              Based on current success, developing next-phase development plans
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Short-term Plans (6-12 months)</h3>
              <div className="space-y-4">
                {[
                  "AI recommendation algorithm optimization, improving conversion rate by 20%",
                  "Supply chain automation upgrade, reducing costs by 15%",
                  "Mobile user experience optimization",
                  "International business automation expansion"
                ].map((plan, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{plan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Long-term Vision (1-3 years)</h3>
              <div className="space-y-4">
                {[
                  "Build omnichannel intelligent retail ecosystem",
                  "Achieve end-to-end supply chain intelligence",
                  "Establish industry-leading data platform",
                  "Become industry automation benchmark enterprise"
                ].map((vision, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{vision}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-bold text-indigo-900 mb-3">💡 Company Message</h4>
            <blockquote className="text-indigo-800 italic">
              &ldquo;Automation transformation is not just a technology upgrade, but a transformation of enterprise thinking and culture. Through this transformation,
              we not only achieved significant operational efficiency improvements, but more importantly, established capabilities for continuous innovation and optimization.
              This has given us valuable advantages in fierce market competition.&rdquo;
            </blockquote>
            <div className="text-right mt-3 text-indigo-700 font-medium">
              —— Company CEO
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Achieve Similar Success?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Learn from this successful case experience and let us help you plan and implement automation transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Calculate Your ROI Potential
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
            >
              Consult Implementation Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Case Recommendations</h2>
            <p className="text-xl text-gray-600">Explore more industry success cases</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Company Achieves 200% User Growth Through Automation",
                industry: "SaaS Software",
                roi: "350%",
                highlight: "200% user growth",
                href: "/resources/case-studies/saas-growth"
              },
              {
                title: "Manufacturing Enterprise Automation Upgrade: 80% Efficiency Improvement",
                industry: "Manufacturing",
                roi: "280%",
                highlight: "80% production efficiency improvement",
                href: "/resources/case-studies/manufacturing-efficiency"
              },
              {
                title: "Healthcare Institution Digital Transformation Success Case",
                industry: "Healthcare",
                roi: "260%",
                highlight: "90% patient satisfaction improvement",
                href: "/resources/case-studies/healthcare-digital"
              }
            ].map((relatedCase, index) => (
              <Link
                key={index}
                href={relatedCase.href}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full inline-block mb-3">
                  {relatedCase.industry}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-green-600">
                  {relatedCase.title}
                </h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{relatedCase.highlight}</span>
                  <span className="font-bold text-green-600">ROI {relatedCase.roi}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}