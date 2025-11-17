import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';
import AuthorBio, { AUTHORS } from '@/components/Blog/AuthorBio';

export const metadata: Metadata = {
  title: "E-commerce Order Automation Case Study - AutoBusinessOS",
  description: "How a mid-size e-commerce company automated their order processing and reduced fulfillment time by 68% while scaling operations.",
  keywords: "ecommerce automation case study, order processing automation, fulfillment automation",
};

export default function EcommerceOrderAutomationCase() {
  return (
    <Layout>
      <article className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="text-sm text-blue-600 font-semibold mb-4">CASE STUDY</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Order Automation Reduced Fulfillment Time by 68%
            </h1>
            <div className="mb-6">
              <AuthorBio
                author={AUTHORS.emily_rodriguez}
                publishDate="January 15, 2025"
                readTime="12 min read"
                compact={true}
              />
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-700 font-medium">
                A mid-size e-commerce company selling home goods implemented end-to-end order automation,
                reducing manual processing time from 15 minutes to 4.8 minutes per order while improving accuracy to 99.2%.
              </p>
            </div>
          </div>

          {/* Company Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry</h3>
                  <p className="text-gray-600">E-commerce (Home Goods & Furniture)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Company Size</h3>
                  <p className="text-gray-600">75-100 employees</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Volume</h3>
                  <p className="text-gray-600">800-1,200 orders/day</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Revenue Range</h3>
                  <p className="text-gray-600">$15-20M annually</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  *Company name withheld for privacy. Details represent a composite of similar implementations.
                </p>
              </div>
            </div>
          </section>

          {/* The Challenge */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                As the company grew from 200 to 1,000+ daily orders, their manual order processing system became unsustainable:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">Key Pain Points:</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>15 minutes per order:</strong> Staff manually copying data between Shopify, their 3PL system, and accounting software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>8-12% error rate:</strong> Frequent typos in addresses, SKU mismatches, and incorrect shipping methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>Customer service bottleneck:</strong> 35% of inquiries were "Where's my order?" due to delayed processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❌</span>
                    <span><strong>Scaling challenge:</strong> Would need to hire 6 additional order processors to handle projected 50% growth</span>
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                The operations director estimated they were spending <strong>$180,000 annually</strong> on manual order processing,
                with costs projected to exceed $270,000 within 12 months.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The company implemented a comprehensive order automation system that connected their entire fulfillment workflow:
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🔄 Automated Order Processing</h3>
                  <p className="mb-3">Orders from Shopify automatically flow to the 3PL warehouse management system within 2 minutes of payment confirmation.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Address validation and standardization via USPS API</li>
                    <li>Automatic SKU mapping and inventory allocation</li>
                    <li>Intelligent shipping method selection based on weight, destination, and customer tier</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">📧 Customer Communication Automation</h3>
                  <p className="mb-3">Automated email sequences keep customers informed at every stage:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Order confirmation with estimated delivery date (sent immediately)</li>
                    <li>Shipment notification with tracking link (when label generated)</li>
                    <li>Delivery confirmation and review request (3 days after delivery)</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">⚠️ Exception Handling</h3>
                  <p className="mb-3">Smart rules flag orders requiring human review:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Orders exceeding $500 (fraud prevention)</li>
                    <li>International shipments requiring customs documentation</li>
                    <li>Out-of-stock items (trigger customer communication workflow)</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">📊 Real-Time Dashboard</h3>
                  <p className="mb-3">Operations team monitors key metrics:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Orders processed vs. pending</li>
                    <li>Average processing time</li>
                    <li>Exception queue status</li>
                    <li>Inventory levels and reorder alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <div className="space-y-4">
              {[
                { week: "Week 1-2", title: "Discovery & Mapping", description: "Documented current workflows, identified integration points, and defined success metrics" },
                { week: "Week 3-4", title: "System Configuration", description: "Set up API connections between Shopify, 3PL, and accounting systems. Configured basic automation rules" },
                { week: "Week 5-6", title: "Testing & Refinement", description: "Processed test orders, refined business rules, and trained staff on exception handling" },
                { week: "Week 7", title: "Pilot Launch", description: "Ran automation in parallel with manual process for 20% of orders to validate accuracy" },
                { week: "Week 8", title: "Full Rollout", description: "Transitioned 100% of orders to automated system with staff monitoring closely" },
              ].map((phase, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600">{phase.week}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{phase.title}</h3>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results After 6 Months</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">68%</div>
                <div className="text-gray-700 font-medium">Reduction in Processing Time</div>
                <div className="text-sm text-gray-600 mt-2">From 15 min to 4.8 min per order</div>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.2%</div>
                <div className="text-gray-700 font-medium">Order Accuracy Rate</div>
                <div className="text-sm text-gray-600 mt-2">Up from 88-92%</div>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">72%</div>
                <div className="text-gray-700 font-medium">Fewer "WISMO" Tickets</div>
                <div className="text-sm text-gray-600 mt-2">"Where Is My Order" inquiries</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Impact</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-blue-200">
                      <th className="pb-2 font-semibold">Metric</th>
                      <th className="pb-2 font-semibold text-right">Annual Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-2">Labor cost savings (4 FTE redeployed)</td>
                      <td className="py-2 text-right font-semibold">$140,000</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-2">Error reduction (fewer refunds/reships)</td>
                      <td className="py-2 text-right font-semibold">$32,000</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-2">Customer service efficiency improvement</td>
                      <td className="py-2 text-right font-semibold">$28,000</td>
                    </tr>
                    <tr className="border-b-2 border-blue-300">
                      <td className="py-2 font-bold">Total Annual Benefit</td>
                      <td className="py-2 text-right font-bold text-lg">$200,000</td>
                    </tr>
                    <tr>
                      <td className="py-2">Implementation investment</td>
                      <td className="py-2 text-right">$45,000</td>
                    </tr>
                    <tr className="bg-green-100">
                      <td className="py-2 font-bold">ROI (Year 1)</td>
                      <td className="py-2 text-right font-bold text-green-700 text-xl">344%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Key Lessons */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons Learned</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Start with high-volume, low-complexity processes",
                  description: "The team initially wanted to automate everything. Focusing first on standard domestic orders (70% of volume) delivered quick wins and built confidence."
                },
                {
                  title: "Exception handling is critical",
                  description: "10% of orders still require human review, but clear rules and a dedicated queue make this manageable and prevent automation from becoming a bottleneck."
                },
                {
                  title: "Run parallel processes during pilot",
                  description: "Processing orders both manually and automatically for 2 weeks revealed edge cases and built trust in the system before full rollout."
                },
                {
                  title: "Measure everything from day one",
                  description: "Having baseline metrics (processing time, error rates, customer inquiries) was essential to prove ROI and identify improvement opportunities."
                },
              ].map((lesson, index) => (
                <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">💡 {lesson.title}</h3>
                  <p className="text-yellow-800">{lesson.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Author Bio - Full */}
          <section className="mb-12">
            <AuthorBio author={AUTHORS.emily_rodriguez} />
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                By automating their order-to-fulfillment workflow, this e-commerce company transformed a major operational bottleneck
                into a competitive advantage. The freed-up staff time was reinvested in customer experience improvements and
                product curation, directly contributing to a 23% increase in customer retention.
              </p>
              <p className="mb-4">
                The automation system continues to scale seamlessly—the company has since grown to process 1,800+ daily orders
                with the same team size, something that would have required hiring 8-10 additional staff under the old manual system.
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mt-16 pt-8 border-t-2 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/resources/blog/ecommerce-automation-complete-guide-2025" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">📖 Complete Guide</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce Automation Complete Guide 2025</h3>
                <p className="text-gray-600 text-sm">Comprehensive strategies for automating your entire e-commerce operation</p>
              </Link>
              <Link href="/tools/roi-calculator" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">🔧 Free Tool</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Automation ROI Calculator</h3>
                <p className="text-gray-600 text-sm">Calculate potential savings from automating your order processing</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
