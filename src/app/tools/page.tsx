import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tools - AutoBusinessOS",
  description: "Discover powerful automation tools and calculators to optimize your business processes and measure ROI with AutoBusinessOS.",
  keywords: "automation tools, ROI calculator, business tools, automation calculators, productivity tools",
};

export default function ToolsPage() {
  const toolCards = [
    {
      title: "ROI Calculator",
      description: "Calculate the return on investment for your automation projects with our comprehensive ROI calculator.",
      href: "/tools/roi-calculator",
      icon: "📊",
      features: ["Custom calculations", "Real-time results", "Export reports", "Industry benchmarks"]
    },
    {
      title: "Automation Assessment",
      description: "Evaluate your current automation readiness and identify opportunities for improvement.",
      href: "/tools/automation-assessment",
      icon: "🔍",
      features: ["Process analysis", "Gap identification", "Priority ranking", "Action plan"]
    },
    {
      title: "Cost-Benefit Analyzer",
      description: "Compare automation costs against potential savings to make informed decisions.",
      href: "/tools/cost-benefit-analyzer",
      icon: "💰",
      features: ["Cost modeling", "Savings projection", "Break-even analysis", "Risk assessment"]
    },
    {
      title: "Implementation Planner",
      description: "Create detailed implementation timelines and resource allocation plans for your automation projects.",
      href: "/tools/implementation-planner",
      icon: "📅",
      features: ["Timeline creation", "Resource planning", "Milestone tracking", "Risk mitigation"]
    },
    {
      title: "Performance Monitor",
      description: "Track and analyze the performance of your automation solutions in real-time.",
      href: "/tools/performance-monitor",
      icon: "📈",
      features: ["Real-time metrics", "Performance alerts", "Trend analysis", "Custom dashboards"]
    },
    {
      title: "Compliance Checker",
      description: "Ensure your automation solutions meet industry regulations and compliance requirements.",
      href: "/tools/compliance-checker",
      icon: "✅",
      features: ["Regulation mapping", "Compliance scoring", "Gap analysis", "Remediation plans"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Automation <span className="text-blue-600">Calculators</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Get instant insights with our suite of business intelligence tools. From ROI calculations to implementation planning,
              our calculators help you make informed automation decisions in minutes, not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Launch Impact Calculator
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
              >
                Request Tool Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Selection Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Smart Tool Selection Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Calculate ROI First</h4>
                <p className="text-sm text-gray-600">Understand potential returns before investing time and resources</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Assess Current State</h4>
                <p className="text-sm text-gray-600">Identify gaps and opportunities in your existing processes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Plan & Execute</h4>
                <p className="text-sm text-gray-600">Create detailed implementation roadmaps with clear milestones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional-Grade Business Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by automation consultants using data from 500+ successful implementations.
              Get accurate projections and actionable insights in minutes, not weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCards.map((tool, index) => (
              <Link key={index} href={tool.href} className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group">
                <div className="text-4xl mb-4 text-center">{tool.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tool.description}
                </p>
                <div className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our tools are designed by automation experts and built with real-world experience to deliver accurate, actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert-Designed</h3>
              <p className="text-gray-600">
                Built by automation professionals with years of industry experience and proven methodologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data-Driven</h3>
              <p className="text-gray-600">
                Based on real-world data and industry benchmarks to provide accurate, reliable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive interfaces and step-by-step guidance make complex calculations simple and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start with our ROI calculator to see the potential impact of automation on your business, or explore our full suite of tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Start ROI Analysis
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Get Tool Support
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
