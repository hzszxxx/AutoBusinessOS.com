import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap - AutoBusinessOS',
  description: 'Complete sitemap of AutoBusinessOS platform including solutions, industries, resources, and tools for business automation.',
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Site Map</h1>
          <p className="text-xl text-gray-600">
            Browse all pages on AutoBusinessOS platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Solutions</h2>
            <ul className="space-y-2">
              <li><Link href="/solutions" className="text-gray-700 hover:text-blue-600">All Solutions</Link></li>
              <li><Link href="/solutions/operations-automation" className="text-gray-700 hover:text-blue-600">Operations Automation</Link></li>
              <li><Link href="/solutions/customer-service-automation" className="text-gray-700 hover:text-blue-600">Customer Service Automation</Link></li>
              <li><Link href="/solutions/finance-automation" className="text-gray-700 hover:text-blue-600">Finance Automation</Link></li>
              <li><Link href="/solutions/hr-automation" className="text-gray-700 hover:text-blue-600">HR Automation</Link></li>
              <li><Link href="/solutions/sales-automation" className="text-gray-700 hover:text-blue-600">Sales Automation</Link></li>
              <li><Link href="/solutions/marketing-automation" className="text-gray-700 hover:text-blue-600">Marketing Automation</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Industries</h2>
            <ul className="space-y-2">
              <li><Link href="/industries" className="text-gray-700 hover:text-blue-600">All Industries</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-700 hover:text-blue-600">Healthcare</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-700 hover:text-blue-600">Manufacturing</Link></li>
              <li><Link href="/industries/consulting" className="text-gray-700 hover:text-blue-600">Consulting</Link></li>
              <li><Link href="/industries/saas" className="text-gray-700 hover:text-blue-600">SaaS</Link></li>
              <li><Link href="/industries/ecommerce" className="text-gray-700 hover:text-blue-600">E-commerce</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><Link href="/resources" className="text-gray-700 hover:text-blue-600">All Resources</Link></li>
              <li><Link href="/resources/blog" className="text-gray-700 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/resources/case-studies" className="text-gray-700 hover:text-blue-600">Case Studies</Link></li>
              <li><Link href="/resources/guides" className="text-gray-700 hover:text-blue-600">Guides</Link></li>
              <li><Link href="/resources/templates" className="text-gray-700 hover:text-blue-600">Templates</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Tools</h2>
            <ul className="space-y-2">
              <li><Link href="/tools" className="text-gray-700 hover:text-blue-600">All Tools</Link></li>
              <li><Link href="/tools/roi-calculator" className="text-gray-700 hover:text-blue-600">ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Latest Blog Articles */}
          <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-3">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Latest Blog Articles (2025)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🔥 Featured Articles</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/blog/ai-agents-business-implementation-guide-2025" className="text-gray-700 hover:text-blue-600">AI Agents for Business 2025</Link></li>
                  <li><Link href="/resources/blog/no-code-automation-platforms-2025-comparison" className="text-gray-700 hover:text-blue-600">No-Code Platforms Comparison 2025</Link></li>
                  <li><Link href="/resources/blog/marketing-automation-roi-calculator-framework-2025" className="text-gray-700 hover:text-blue-600">Marketing Automation ROI Framework</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Guides</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/blog/ecommerce-automation-complete-guide-2025" className="text-gray-700 hover:text-blue-600">E-commerce Automation Guide</Link></li>
                  <li><Link href="/resources/blog/crm-automation-complete-guide-2025" className="text-gray-700 hover:text-blue-600">CRM Automation Guide</Link></li>
                  <li><Link href="/resources/blog/automation-security-compliance-2025" className="text-gray-700 hover:text-blue-600">Security & Compliance 2025</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Comparisons & Analysis</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/blog/marketing-automation-platforms-comparison-2025" className="text-gray-700 hover:text-blue-600">Marketing Platforms Comparison</Link></li>
                  <li><Link href="/resources/blog/workflow-automation-tools-comparison-2025" className="text-gray-700 hover:text-blue-600">Workflow Tools Comparison</Link></li>
                  <li><Link href="/resources/blog/calculate-automation-roi-guide" className="text-gray-700 hover:text-blue-600">Calculate Automation ROI</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Getting Started</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/blog/enterprise-automation-getting-started" className="text-gray-700 hover:text-blue-600">Enterprise Automation Start</Link></li>
                  <li><Link href="/resources/blog/small-business-automation-tasks-2025" className="text-gray-700 hover:text-blue-600">Small Business Tasks 2025</Link></li>
                  <li><Link href="/resources/blog/automation-industry-use-cases" className="text-gray-700 hover:text-blue-600">Industry Use Cases</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Reports & Trends</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/blog/2024-enterprise-automation-landscape-report" className="text-gray-700 hover:text-blue-600">2024 Landscape Report</Link></li>
                  <li><Link href="/resources/blog/2024-automation-trends-report" className="text-gray-700 hover:text-blue-600">2024 Trends Report</Link></li>
                  <li><Link href="/resources/blog/automation-trends-2024" className="text-gray-700 hover:text-blue-600">Automation Trends 2024</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Strategy & Implementation</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources/blog/digital-transformation-strategy" className="text-gray-700 hover:text-blue-600">Digital Transformation</Link></li>
                  <li><Link href="/resources/blog/rpa-implementation-guide" className="text-gray-700 hover:text-blue-600">RPA Implementation</Link></li>
                  <li><Link href="/resources/blog/automation-cost-analysis" className="text-gray-700 hover:text-blue-600">Cost Analysis</Link></li>
                  <li><Link href="/resources/blog/ai-automation-integration" className="text-gray-700 hover:text-blue-600">AI Integration</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Studies & Guides */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Case Studies</h2>
            <ul className="space-y-2">
              <li><Link href="/resources/case-studies/ecommerce-success" className="text-gray-700 hover:text-blue-600">E-commerce Success Story</Link></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Implementation Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><Link href="/resources/guides/automation-getting-started" className="text-gray-700 hover:text-blue-600">Getting Started with Automation</Link></li>
                <li><Link href="/resources/guides/tool-selection" className="text-gray-700 hover:text-blue-600">Tool Selection Guide</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link href="/resources/guides/roi-analysis" className="text-gray-700 hover:text-blue-600">ROI Analysis Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* XML Sitemap Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            For search engines: <Link href="/sitemap.xml" className="text-blue-600 hover:underline">XML Sitemap</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
