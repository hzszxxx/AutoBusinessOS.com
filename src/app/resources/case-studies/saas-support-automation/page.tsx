import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';
import AuthorBio, { AUTHORS } from '@/components/Blog/AuthorBio';

export const metadata: Metadata = {
  title: "SaaS Customer Support Automation Case Study - AutoBusinessOS",
  description: "How a B2B SaaS company automated 60% of support tickets and reduced response time from 4 hours to 12 minutes while improving CSAT scores.",
  keywords: "saas support automation, customer service automation, helpdesk automation, chatbot case study",
};

export default function SaaSSupportAutomationCase() {
  return (
    <Layout>
      <article className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="text-sm text-blue-600 font-semibold mb-4">CASE STUDY</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SaaS Company Automates 60% of Support Tickets with AI
            </h1>
            <div className="mb-6">
              <AuthorBio
                author={AUTHORS.james_wilson}
                publishDate="January 12, 2025"
                readTime="10 min read"
                compact={true}
              />
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-700 font-medium">
                A project management SaaS provider serving 2,000+ business customers implemented AI-powered support automation,
                reducing average response time from 4 hours to 12 minutes while maintaining a 94% customer satisfaction score.
              </p>
            </div>
          </div>

          {/* Company Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Profile</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry</h3>
                  <p className="text-gray-600">B2B SaaS (Project Management)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Company Size</h3>
                  <p className="text-gray-600">120 employees, 8-person support team</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Base</h3>
                  <p className="text-gray-600">2,000+ business customers</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support Volume</h3>
                  <p className="text-gray-600">300-400 tickets/day</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  *Company identity anonymized for confidentiality. Case details represent actual implementation results.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                As the SaaS platform scaled from 500 to 2,000 customers, the support team faced mounting pressure:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Critical Issues:</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>Overwhelmed support queue:</strong> 4-hour average first response time during business hours, 18+ hours overnight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>65% repetitive questions:</strong> "How do I reset my password?", "How do I add team members?", "Why can't I export reports?"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>Support team burnout:</strong> High turnover (40% annually) due to repetitive work and evening coverage demands</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>CSAT declining:</strong> Customer satisfaction dropped from 91% to 78% over 6 months</span>
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                Customer feedback revealed the same frustrations repeatedly: <em>"Why can't I get simple answers instantly?
                I don't need a human for basic questions."</em>
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Automation Solution</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The company implemented a three-tier support automation system combining AI, knowledge base, and intelligent routing:
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🤖 AI-Powered Chatbot (Tier 1)</h3>
                  <p className="mb-3">Handles common questions instantly without human intervention:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Account management (password resets, user permissions, billing inquiries)</li>
                    <li>Feature explanations with contextual help articles and video tutorials</li>
                    <li>Integration troubleshooting guided by decision trees</li>
                    <li>Natural language processing trained on 18 months of historical tickets</li>
                  </ul>
                  <div className="mt-3 text-sm bg-blue-50 p-3 rounded">
                    <strong>Success rate:</strong> Resolves 58% of inquiries without human agent involvement
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">📚 Dynamic Knowledge Base (Tier 2)</h3>
                  <p className="mb-3">Self-service portal with intelligent search:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>150+ articles covering common workflows and troubleshooting</li>
                    <li>Video tutorials embedded directly in articles</li>
                    <li>Search results ranked by effectiveness (based on resolution data)</li>
                    <li>Automated suggestions based on user's current page/feature</li>
                  </ul>
                  <div className="mt-3 text-sm bg-blue-50 p-3 rounded">
                    <strong>Success rate:</strong> Additional 12% of users self-serve via knowledge base
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🎯 Intelligent Ticket Routing (Tier 3)</h3>
                  <p className="mb-3">For issues requiring human agents:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Automatic categorization (technical, billing, feature request)</li>
                    <li>Priority scoring based on customer tier and issue urgency</li>
                    <li>Routing to specialist based on expertise and current workload</li>
                    <li>Pre-filled context from chatbot conversation to save agent time</li>
                  </ul>
                  <div className="mt-3 text-sm bg-blue-50 p-3 rounded">
                    <strong>Result:</strong> Remaining 30% of tickets reach right specialist immediately
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🔄 Continuous Learning System</h3>
                  <p className="mb-3">Automation improves over time:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Weekly analysis of escalated tickets to identify new automation opportunities</li>
                    <li>Agent feedback loop to refine chatbot responses</li>
                    <li>A/B testing of knowledge base article formats</li>
                    <li>Quarterly review of resolution rates by question category</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Journey */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Approach</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 1: Data Analysis (Week 1-2)</h3>
                <p className="text-gray-600 mb-2">
                  Analyzed 6 months of support tickets (45,000+ tickets) to identify patterns:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 23% password/access issues</li>
                  <li>• 18% "how-to" questions covered in documentation</li>
                  <li>• 15% integration configuration questions</li>
                  <li>• 44% legitimate complex issues requiring agent expertise</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 2: Knowledge Base Overhaul (Week 3-6)</h3>
                <p className="text-gray-600 mb-2">
                  Completely restructured self-help resources:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rewrote all articles using data-driven insights on what customers actually search</li>
                  <li>• Created 45 new video tutorials (2-4 minutes each)</li>
                  <li>• Implemented smart search with synonyms and common misspellings</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 3: Chatbot Development (Week 7-10)</h3>
                <p className="text-gray-600 mb-2">
                  Built and trained AI assistant:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Trained on historical ticket data with resolution outcomes</li>
                  <li>• Created conversation flows for top 30 question types</li>
                  <li>• Integrated with account system for personalized responses</li>
                  <li>• Internal testing with support team for refinement</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 4: Soft Launch (Week 11-12)</h3>
                <p className="text-gray-600 mb-2">
                  Gradual rollout to gather feedback:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Offered chatbot to 20% of users, collected satisfaction scores</li>
                  <li>• Monitored escalation rates and failure patterns</li>
                  <li>• Made rapid adjustments based on real user interactions</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase 5: Full Deployment (Week 13)</h3>
                <p className="text-gray-600">
                  Chatbot became primary support channel with human backup clearly accessible.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results After 3 Months</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">12 min</div>
                <div className="text-gray-700 font-medium">Average First Response</div>
                <div className="text-sm text-gray-600 mt-2">Down from 4 hours</div>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-gray-700 font-medium">Automated Resolution Rate</div>
                <div className="text-sm text-gray-600 mt-2">No human agent needed</div>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                <div className="text-gray-700 font-medium">CSAT Score</div>
                <div className="text-sm text-gray-600 mt-2">Up from 78%</div>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Support Availability</div>
                <div className="text-sm text-gray-600 mt-2">Instant help anytime</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Impact</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between pb-2 border-b border-blue-200">
                  <span>Support team capacity freed up</span>
                  <span className="font-semibold">60%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-blue-200">
                  <span>Agent time reallocated to complex issues</span>
                  <span className="font-semibold">+45%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-blue-200">
                  <span>Support hiring needs avoided (3 FTE)</span>
                  <span className="font-semibold">$195,000/year</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-blue-200">
                  <span>Customer churn reduction</span>
                  <span className="font-semibold">-18%</span>
                </div>
                <div className="flex justify-between pt-2 text-lg">
                  <span className="font-bold">Estimated Annual Value</span>
                  <span className="font-bold text-green-600">$520,000+</span>
                </div>
              </div>
            </div>
          </section>

          {/* Unexpected Benefits */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unexpected Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">🎯 Product Insights</h3>
                <p className="text-purple-800 text-sm">
                  Automated ticket analysis revealed 3 major UX friction points that the product team addressed,
                  reducing related support inquiries by 40%.
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">👥 Team Morale</h3>
                <p className="text-purple-800 text-sm">
                  Support agent satisfaction increased dramatically when freed from repetitive work.
                  Annual turnover dropped from 40% to 15%.
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">🌍 Global Reach</h3>
                <p className="text-purple-800 text-sm">
                  24/7 instant support enabled expansion to European markets without hiring night-shift staff.
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-purple-900 mb-2">📈 Sales Enablement</h3>
                <p className="text-purple-800 text-sm">
                  Prospects testing the product during trials get instant support, increasing trial-to-paid conversion by 22%.
                </p>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Lessons</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">💡 Start with data, not assumptions</h3>
                <p className="text-yellow-800 text-sm">
                  The team initially thought billing questions were most common. Data showed password/access issues were 40% more frequent.
                  Building automation based on actual ticket data was crucial.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">💡 Make escalation effortless</h3>
                <p className="text-yellow-800 text-sm">
                  Customers never feel "trapped" with the bot because reaching a human is always one click away.
                  This built trust in the automated system.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">💡 Involve support team early</h3>
                <p className="text-yellow-800 text-sm">
                  Agents helped train the chatbot and identify edge cases. Their buy-in was essential—they now view automation
                  as a tool that lets them focus on interesting problems.
                </p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">💡 Plan for continuous improvement</h3>
                <p className="text-yellow-800 text-sm">
                  The chatbot resolution rate started at 42% and grew to 58% over 3 months through weekly refinements.
                  Automation is not "set and forget."
                </p>
              </div>
            </div>
          </section>

          {/* Author Bio - Full */}
          <section className="mb-12">
            <AuthorBio author={AUTHORS.james_wilson} />
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                This SaaS company transformed customer support from a cost center and bottleneck into a competitive differentiator.
                Customers now receive instant help for common issues 24/7, while complex problems get dedicated attention from specialists.
              </p>
              <p className="mb-4">
                The support team, freed from repetitive work, now focuses on high-value activities: proactive outreach to at-risk accounts,
                detailed feature explanation for enterprise clients, and product feedback that directly improves the platform.
              </p>
              <div className="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-r-lg mt-6">
                <p className="text-gray-800 italic">
                  "We were skeptical about chatbots initially—worried they'd frustrate customers. But the data was clear:
                  60% of our tickets were simple questions that users wanted answered immediately, not in 4 hours.
                  Automation gave customers what they actually wanted: speed and convenience."
                </p>
                <p className="text-sm text-gray-600 mt-2">— VP of Customer Success</p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mt-16 pt-8 border-t-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/solutions/customer-service-automation" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">📖 Topic Guide</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Service Automation Strategies</h3>
                <p className="text-gray-600 text-sm">Learn best practices for automating support workflows</p>
              </Link>
              <Link href="/resources/blog/crm-automation-complete-guide-2025" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">📚 Complete Guide</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">CRM & Support Automation Guide</h3>
                <p className="text-gray-600 text-sm">Comprehensive guide to customer relationship automation</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
