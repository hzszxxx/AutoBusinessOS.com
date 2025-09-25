import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Automation Systems - Production Planning, Quality Control & Supply Chain Management | AutoBusinessOS',
  description: 'Professional manufacturing automation solutions covering production planning, quality control, and supply chain management. Boost efficiency by 80%, reduce costs by 25%, and accelerate digital transformation.',
  keywords: 'manufacturing automation, factory automation, production automation, production planning automation, quality control automation, supply chain automation',
}

export default function ManufacturingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Manufacturing Automation Systems
              <span className="block text-yellow-300">Intelligent Production Planning, Quality Control & Supply Chain Management</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Intelligent automation systems designed specifically for manufacturing, covering the entire process from production planning to quality control and supply chain coordination. Help manufacturing companies boost production efficiency by 80%, reduce operational costs by 25%, and achieve Industry 4.0 smart manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Calculate ROI Free
              </Link>
              <Link
                href="#solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Pain Points Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Challenges Facing Manufacturing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In the era of global competition and smart manufacturing transformation, 95% of manufacturing enterprises face these critical pain points in production operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lack of Precision in Production Planning</h3>
              <p className="text-gray-600 mb-4">
                Traditional production planning relies on experience without data support, resulting in poor accuracy. Unable to respond timely to market demand changes, frequently causing capacity surplus or shortage. Difficult to handle rush orders and urgent orders, severely impacting delivery commitments.
              </p>
              <div className="text-sm text-red-600 font-semibold">Planning Accuracy: Only 55%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outdated Quality Control Management</h3>
              <p className="text-gray-600 mb-4">
                Quality inspection mainly relies on manual sampling with low efficiency and limited coverage. Quality data is scattered across systems, preventing effective quality analysis and early warning. Quality issues are discovered too late, leading to high rework costs.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Quality Issue Costs: 15% of Total Costs</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Coordination Difficulties</h3>
              <p className="text-gray-600 mb-4">
                Scattered supplier management with poor information transparency and low coordination efficiency. Procurement planning disconnected from production planning, causing both inventory backlog and material shortages. Inaccurate supplier delivery times affecting overall production rhythm and customer delivery.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Inventory Turnover: Only 6 times/year</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Missing Equipment Efficiency Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Equipment status monitoring mainly relies on manual inspections, unable to monitor equipment health in real-time. Inadequate equipment failure warning mechanisms lead to massive downtime losses from unexpected failures. Equipment maintenance lacks scientific planning, keeping maintenance costs high.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Overall Equipment Efficiency: Only 65%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Serious Data Silos Problems</h3>
              <p className="text-gray-600 mb-4">
                Production, quality, logistics, and finance systems operate independently, preventing effective data integration. Lack of unified data analysis platform leaves management decisions without data support. Information transmission delays affect rapid response capabilities.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Data Integration Level: Less than 35%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improper Human Resource Allocation</h3>
              <p className="text-gray-600 mb-4">
                Skilled talent shortage with high recruitment and training costs. Unscientific staff scheduling causes serious human resource waste. Uneven skill levels among front-line workers make standardized operations difficult to execute, affecting product quality consistency.
              </p>
              <div className="text-sm text-green-600 font-semibold">Staff Utilization Rate: Only 70%</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Point Impact: Declining Manufacturing Competitiveness</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-45%</div>
                  <p className="text-gray-600">Production Efficiency Loss</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+35%</div>
                  <p className="text-gray-600">Operating Cost Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-30%</div>
                  <p className="text-gray-600">Customer Satisfaction Decline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">-25%</div>
                  <p className="text-gray-600">Market Competitiveness Weakening</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Automation Solutions */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manufacturing Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of core manufacturing business scenarios, from production planning to quality control, achieving intelligent and automated manufacturing
            </p>
          </div>

          {/* Core Function Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Production Planning</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI-driven production planning optimization system that automatically generates optimal production plans based on multi-dimensional data including order demand, equipment capacity, and material status. Supports dynamic adjustment and real-time optimization, improving planning accuracy to over 95%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI Intelligent Capacity Balancing
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dynamic Rush Orders and Emergency Scheduling
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-Factory Collaborative Planning
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Delivery Commitment Assessment
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Quality Control</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Quality inspection system based on machine vision and AI algorithms, achieving full-process automated monitoring of product quality. Predictive quality analysis proactively identifies quality risks, improving quality pass rate to 99.5% and reducing quality costs by 60%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated Machine Vision Detection
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time Quality Data Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality Issue Prediction & Early Warning
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality Traceability & Improvement Recommendations
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Supply Chain Collaboration Platform</h3>
              </div>
              <p className="text-gray-600 mb-6">
                End-to-end supply chain visibility management with deep collaboration with suppliers. Smart procurement decisions, inventory optimization management, and supply risk early warning. Inventory turnover improved by 200%, procurement costs reduced by 15%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supplier Collaboration Management Platform
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Demand Forecasting & Procurement
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inventory Optimization & Safety Stock
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Supply Risk Monitoring & Early Warning
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Equipment Maintenance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Equipment health monitoring system combining IoT sensors and AI algorithms, monitoring equipment operating status in real-time. Predictive maintenance reduces unplanned downtime, improving overall equipment efficiency to over 85% and reducing maintenance costs by 40%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time Equipment Monitoring & Diagnostics
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Predictive Maintenance Planning
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Failure Pattern Recognition & Early Warning
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated Maintenance Work Orders
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Manufacturing Data Platform</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Unified manufacturing data platform integrating multi-dimensional data including production, quality, equipment, and materials. Real-time production dashboards, intelligent report generation, providing data support for management decisions, improving decision efficiency by 300%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enterprise-wide Data Integration & Governance
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time Production Monitoring Dashboards
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Analytics & Decision Support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customizable Reports & KPI Monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Workforce Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Smart scheduling system based on production planning and skill models, optimizing human resource allocation. Skills training management, automated work instructions, standardized operations monitoring. Improves productivity by 50% and significantly enhances quality consistency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Scheduling & Workforce Allocation
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Skills Training & Certification Management
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Work Instruction Delivery
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated Performance Evaluation
                </li>
              </ul>
            </div>
          </div>

          {/* Results Display */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Manufacturing Automation Impact Results</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+80%</div>
                <p className="text-gray-600">Production Efficiency Boost</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">-25%</div>
                <p className="text-gray-600">Operating Cost Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+99.5%</div>
                <p className="text-gray-600">Quality Pass Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">+200%</div>
                <p className="text-gray-600">Inventory Turnover Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manufacturing Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer case studies demonstrating the actual results and business value of manufacturing automation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Major Electronics Manufacturing Enterprise</h3>
                  <p className="text-gray-600">Annual Revenue: $4.3B, Employees: 8,000</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multiple product lines with complex production planning, frequent delivery delays</li>
                  <li>• Quality inspection relied on manual processes with high miss rates and frequent customer complaints</li>
                  <li>• Unexpected equipment failures causing over $700K monthly downtime losses</li>
                  <li>• Severe data silos leaving decisions without data support</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deployed AI-powered smart production planning system</li>
                  <li>• Implemented machine vision quality inspection system</li>
                  <li>• Launched predictive equipment maintenance platform</li>
                  <li>• Established unified manufacturing data platform</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <p className="text-sm text-gray-600">Planning Accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">99.8%</div>
                    <p className="text-sm text-gray-600">Quality Pass Rate</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">-80%</div>
                    <p className="text-sm text-gray-600">Equipment Failure Losses</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+120%</div>
                    <p className="text-sm text-gray-600">Production Efficiency</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;The automation system completely transformed our production management model. We can now accurately forecast and plan, quality issues have dramatically decreased, and equipment utilization has significantly improved. Annual profit growth exceeded $290M.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— Manufacturing Director, Mr. Zhang</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Major Automotive Parts Manufacturer</h3>
                  <p className="text-gray-600">Annual Revenue: $2.1B, Factories: 5</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-factory coordination difficulties with unbalanced capacity allocation</li>
                  <li>• Strict automotive industry quality standards resulting in high quality costs</li>
                  <li>• Complex supply chain with inventory backlog and material shortages coexisting</li>
                  <li>• Rapid customer demand changes creating intense delivery pressure</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implemented:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deployed multi-factory collaborative production planning system</li>
                  <li>• Implemented full-process quality traceability system</li>
                  <li>• Launched supply chain collaboration management platform</li>
                  <li>• Established customer demand response mechanism</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+85%</div>
                    <p className="text-sm text-gray-600">Capacity Utilization</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">-70%</div>
                    <p className="text-sm text-gray-600">Quality Cost Reduction</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+150%</div>
                    <p className="text-sm text-gray-600">Inventory Turnover Rate</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">98%</div>
                    <p className="text-sm text-gray-600">On-Time Delivery Rate</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Automation helped us stand out in the fierce automotive supply chain competition. Not only did costs drop significantly, but our quality and delivery performance gained high customer recognition, leading to continuous order growth.&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— General Manager, Ms. Li</p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Major Precision Machinery Manufacturing Group</h3>
                  <p className="text-gray-600">Annual Revenue: $7.1B, Factories: 12, Employees: 15,000</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Implementation Challenges:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Complex group management with inconsistent factory standards</li>
                      <li>• High precision machining requirements with enormous equipment maintenance costs</li>
                      <li>• Technical worker shortage making quality consistency difficult to guarantee</li>
                      <li>• Long order lead times resulting in declining customer satisfaction</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution Implemented:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Established unified group-wide smart manufacturing platform</li>
                      <li>• Implemented group-wide predictive equipment maintenance</li>
                      <li>• Deployed intelligent work instruction system</li>
                      <li>• Built customer order collaboration management system</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Implementation Results:</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+300%</div>
                      <p className="text-sm text-gray-600">Management Efficiency</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">-50%</div>
                      <p className="text-sm text-gray-600">Equipment Maintenance Cost</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">+180%</div>
                      <p className="text-sm text-gray-600">Staff Skill Enhancement</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">-40%</div>
                      <p className="text-sm text-gray-600">Order Lead Time Reduction</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;The group-level smart manufacturing platform enabled us to achieve truly unified management. Factory efficiency improved dramatically, costs dropped significantly, and customer satisfaction reached historic highs. This laid a solid foundation for our international expansion.&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">— Group CEO, Mr. Wang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Data Summary */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Manufacturing Customer Case Data Summary</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                <p className="text-gray-600">Success Cases</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4 Months</div>
                <p className="text-gray-600">Average Implementation Cycle</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">8 Months</div>
                <p className="text-gray-600">Average ROI Recovery Period</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">280%</div>
                <p className="text-gray-600">Average ROI Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manufacturing Automation Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Best practices based on 120+ successful manufacturing cases, customized implementation methodology tailored for manufacturing characteristics
            </p>
          </div>

          {/* Implementation Phases */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Manufacturing Digitization Five-Step Approach</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-3">Current State Assessment</h4>
                <p className="text-sm text-gray-600">Comprehensive evaluation of existing production systems, identifying key automation transformation points and value opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-3">Top-Level Architecture Design</h4>
                <p className="text-sm text-gray-600">Design unified smart manufacturing architecture and develop phased implementation roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-3">Core Scenario Implementation</h4>
                <p className="text-sm text-gray-600">Prioritize critical business scenarios, rapidly validate effectiveness, and establish successful templates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-3">Full-Scale Rollout</h4>
                <p className="text-sm text-gray-600">Based on successful experience, comprehensively roll out to other production lines, workshops, and factories</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">5</div>
                <h4 className="font-semibold text-gray-900 mb-3">Continuous Optimization</h4>
                <p className="text-sm text-gray-600">Establish continuous improvement mechanisms, continuously optimize algorithmic models, and enhance automation levels</p>
              </div>
            </div>
          </div>

          {/* Key Success Factors */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Manufacturing Automation Key Success Factors</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Standardization Foundation Building</h4>
                    <p className="text-gray-600">Establish unified data standards, process standards, and interface standards to lay the foundation for automation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Equipment Digitization Transformation</h4>
                    <p className="text-gray-600">Conduct digital transformation of key equipment to ensure completeness and accuracy of data collection</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Talent Development</h4>
                    <p className="text-gray-600">Cultivate cross-functional talent with both manufacturing and digitization expertise to build sustainable development capabilities</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Value-Driven Implementation</h4>
                    <p className="text-gray-600">Focus on business value, prioritizing automation scenarios with high ROI and quick results</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Implementation Risks and Prevention</h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Technology Selection Risk</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    Inappropriate technology choices may lead to system incompatibility, affecting overall effectiveness
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Prevention Measures:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Thorough validation and testing of technical solutions</li>
                      <li>• Select mature and stable technology routes</li>
                      <li>• Establish technical risk assessment mechanisms</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Production Continuity Risk</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    System transitions may impact normal production, causing order delays
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Prevention Measures:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Develop detailed transition plans</li>
                      <li>• Prepare emergency backup solutions</li>
                      <li>• Choose off-peak production periods for implementation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Investment Return Risk</h4>
                  <p className="text-red-700 text-sm mb-3">
                    Large investment scale and long payback period may impact enterprise cash flow
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">Prevention Measures:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Phased investment with gradual implementation</li>
                      <li>• Prioritize high-ROI projects</li>
                      <li>• Establish effect monitoring mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Recommendations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manufacturing Automation Tool Recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully selected automation tool combinations suitable for manufacturing, covering all aspects of the production manufacturing process
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Production Planning System</h3>
                <p className="text-gray-600 mt-2">Intelligent production planning and scheduling</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI Capacity Optimization Algorithms
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dynamic Scheduling and Rush Orders
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Delivery Commitment Analysis
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/tools/roi-calculator"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Recommended</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quality Control Platform</h3>
                <p className="text-gray-600 mt-2">Intelligent quality detection and management</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Machine Vision Detection
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality Data Analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality Traceability System
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Predictive Quality Control
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/operations-automation"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Equipment Maintenance System</h3>
                <p className="text-gray-600 mt-2">Intelligent equipment health management</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipment Status Monitoring
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Predictive Maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fault Diagnosis and Early Warning
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/operations-automation"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Manufacturing Automation Investment Return Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on real manufacturing case data, analyze the investment value and return expectations of manufacturing automation for you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Cost Analysis</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">System Construction Cost</h4>
                    <span className="text-blue-600 font-bold">$2.8-7.1M</span>
                  </div>
                  <p className="text-gray-600 text-sm">Including software and hardware procurement, system integration, data platform construction and other investments</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Equipment Transformation Cost</h4>
                    <span className="text-green-600 font-bold">$1.4-4.2M</span>
                  </div>
                  <p className="text-gray-600 text-sm">Including digital transformation of key equipment, sensor deployment and other investments</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Training Implementation Cost</h4>
                    <span className="text-purple-600 font-bold">$0.7-1.4M</span>
                  </div>
                  <p className="text-gray-600 text-sm">Including staff training, process optimization, change management and other investments</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">Total Investment Cost</h4>
                    <span className="text-2xl font-bold text-gray-900">$4.9-12.7M</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Return Expectations</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Production Efficiency Improvement</h4>
                    <span className="text-green-600 font-bold">+80%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Production efficiency dramatically improved through intelligent scheduling and optimization</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Quality Cost Reduction</h4>
                    <span className="text-blue-600 font-bold">-60%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Automated quality inspection reduces quality issues and rework costs</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Equipment Maintenance Cost</h4>
                    <span className="text-purple-600 font-bold">-40%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Predictive maintenance reduces equipment failures and maintenance costs</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">Inventory Cost Optimization</h4>
                    <span className="text-yellow-600 font-bold">-30%</span>
                  </div>
                  <p className="text-gray-600 text-sm">Intelligent supply chain management reduces inventory backlog and material shortage risks</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">Expected Return on Investment</h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">280%</div>
                    <p className="text-gray-600 text-sm">8-12 month investment recovery period</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Calculator CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Calculate Your Manufacturing Enterprise's Specific ROI?
            </h3>
            <p className="text-gray-600 mb-6">
              Use our professional ROI calculator, input your manufacturing business data, and get a personalized investment return analysis report
            </p>
            <Link
              href="/tools/roi-calculator"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Calculate ROI Free
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Smart Manufacturing Transformation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us immediately to get professional manufacturing automation solutions and achieve Industry 4.0 smart manufacturing upgrade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Free ROI Assessment
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
    </Layout>
  )
}