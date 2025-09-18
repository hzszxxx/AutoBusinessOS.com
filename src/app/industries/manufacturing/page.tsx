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

            {/* 案例2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">汽</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某汽车零部件制造商</h3>
                  <p className="text-gray-600">年产值：15亿元，工厂：5个</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 多工厂协调困难，产能分配不均衡</li>
                  <li>• 汽车行业质量标准严格，质量成本高</li>
                  <li>• 供应链复杂，库存积压和缺料并存</li>
                  <li>• 客户需求变化快，交期压力大</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 实施多工厂协同生产计划系统</li>
                  <li>• 部署全流程质量追溯系统</li>
                  <li>• 上线供应链协同管理平台</li>
                  <li>• 建立客户需求响应机制</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+85%</div>
                    <p className="text-sm text-gray-600">产能利用率</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">-70%</div>
                    <p className="text-sm text-gray-600">质量成本降低</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+150%</div>
                    <p className="text-sm text-gray-600">库存周转率</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">98%</div>
                    <p className="text-sm text-gray-600">准时交付率</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;自动化让我们在激烈的汽车供应链竞争中脱颖而出。不仅成本大幅降低，质量和交期也得到客户高度认可，订单量持续增长。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 总经理 李女士</p>
              </div>
            </div>

            {/* 案例3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">机</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某精密机械制造集团</h3>
                  <p className="text-gray-600">年产值：50亿元，工厂：12个，员工：15000人</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 集团化管理复杂，各工厂标准不统一</li>
                      <li>• 精密加工要求高，设备维护成本巨大</li>
                      <li>• 技术工人短缺，质量稳定性难保证</li>
                      <li>• 订单交期长，客户满意度下降</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 建立集团统一的智能制造平台</li>
                      <li>• 实施全集团设备预测性维护</li>
                      <li>• 部署智能作业指导系统</li>
                      <li>• 建立客户订单协同管理系统</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+300%</div>
                      <p className="text-sm text-gray-600">管理效率提升</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">-50%</div>
                      <p className="text-sm text-gray-600">设备维护成本</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">+180%</div>
                      <p className="text-sm text-gray-600">人员技能提升</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">-40%</div>
                      <p className="text-sm text-gray-600">订单交期缩短</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;集团级的智能制造平台让我们实现了真正的统一管理。各工厂效率大幅提升，成本显著下降，客户满意度创历史新高。这为我们的国际化发展奠定了坚实基础。&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">— 集团CEO 王先生</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 案例数据汇总 */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">制造业客户案例数据汇总</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                <p className="text-gray-600">成功案例</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                <p className="text-gray-600">客户满意度</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4个月</div>
                <p className="text-gray-600">平均实施周期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">8个月</div>
                <p className="text-gray-600">平均投资回收期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">280%</div>
                <p className="text-gray-600">平均ROI提升</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实施方法论 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              制造业自动化实施方法论
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于120+制造业成功案例的最佳实践，针对制造业特点定制的实施方法论
            </p>
          </div>

          {/* 实施阶段 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">制造业数字化五步法</h3>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-3">现状诊断评估</h4>
                <p className="text-sm text-gray-600">全面评估现有生产体系，识别自动化改造的关键节点和价值点</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-3">顶层架构设计</h4>
                <p className="text-sm text-gray-600">设计统一的智能制造架构，制定分阶段实施路线图</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-3">核心场景实施</h4>
                <p className="text-sm text-gray-600">优先实施关键业务场景，快速验证效果，建立成功样板</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-3">全面推广复制</h4>
                <p className="text-sm text-gray-600">基于成功经验，向其他产线、车间、工厂全面推广复制</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">5</div>
                <h4 className="font-semibold text-gray-900 mb-3">持续优化升级</h4>
                <p className="text-sm text-gray-600">建立持续改进机制，不断优化算法模型，提升自动化水平</p>
              </div>
            </div>
          </div>

          {/* 关键成功因素 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">制造业自动化关键成功因素</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">标准化基础建设</h4>
                    <p className="text-gray-600">建立统一的数据标准、流程标准、接口标准，为自动化奠定基础</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">设备数字化改造</h4>
                    <p className="text-gray-600">对关键设备进行数字化改造，确保数据采集的完整性和准确性</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">人才队伍建设</h4>
                    <p className="text-gray-600">培养既懂制造又懂数字化的复合型人才，建立可持续发展能力</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">价值导向实施</h4>
                    <p className="text-gray-600">以业务价值为导向，优先实施ROI高、见效快的自动化场景</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">实施风险及防范</h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">技术选型风险</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    技术选择不当可能导致系统不兼容，影响整体效果
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 技术方案充分论证和测试</li>
                      <li>• 选择成熟稳定的技术路线</li>
                      <li>• 建立技术风险评估机制</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">生产连续性风险</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    系统切换可能影响正常生产，造成订单延期
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 制定详细的切换方案</li>
                      <li>• 准备应急备用方案</li>
                      <li>• 选择生产淡季实施</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">投资回报风险</h4>
                  <p className="text-red-700 text-sm mb-3">
                    投资规模大，回报周期长，可能影响企业现金流
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 分阶段投资，逐步实施</li>
                      <li>• 优先高ROI项目</li>
                      <li>• 建立效果监控机制</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              制造业自动化工具推荐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选适合制造业的自动化工具组合，覆盖生产制造全流程各个环节
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
                <h3 className="text-xl font-bold text-gray-900">生产计划系统</h3>
                <p className="text-gray-600 mt-2">智能生产计划和调度</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI产能优化算法
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  动态调度和插单
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  交期承诺分析
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/tools/roi-calculator"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  了解更多
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">推荐</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">质量控制平台</h3>
                <p className="text-gray-600 mt-2">智能质量检测和管控</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  机器视觉检测
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  质量数据分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  质量追溯系统
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  预测性质量控制
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/operations-automation"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  了解更多
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
                <h3 className="text-xl font-bold text-gray-900">设备维护系统</h3>
                <p className="text-gray-600 mt-2">智能设备健康管理</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  设备状态监控
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  预测性维护
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  故障诊断和预警
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/operations-automation"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors inline-block"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI分析 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              制造业自动化投资回报分析
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于真实制造业案例数据，为您分析制造业自动化的投资价值和回报预期
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资成本分析</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">系统建设成本</h4>
                    <span className="text-blue-600 font-bold">200-500万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含软硬件采购、系统集成、数据中台建设等投入</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">设备改造成本</h4>
                    <span className="text-green-600 font-bold">100-300万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含关键设备数字化改造、传感器部署等投入</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">培训实施成本</h4>
                    <span className="text-purple-600 font-bold">50-100万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含人员培训、流程梳理、变革管理等投入</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">总投资成本</h4>
                    <span className="text-2xl font-bold text-gray-900">350-900万</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资回报预期</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">生产效率提升</h4>
                    <span className="text-green-600 font-bold">+80%</span>
                  </div>
                  <p className="text-gray-600 text-sm">通过智能调度和优化，生产效率大幅提升</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">质量成本降低</h4>
                    <span className="text-blue-600 font-bold">-60%</span>
                  </div>
                  <p className="text-gray-600 text-sm">自动化质量检测减少质量问题和返工成本</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">设备维护成本</h4>
                    <span className="text-purple-600 font-bold">-40%</span>
                  </div>
                  <p className="text-gray-600 text-sm">预测性维护减少设备故障和维护费用</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">库存成本优化</h4>
                    <span className="text-yellow-600 font-bold">-30%</span>
                  </div>
                  <p className="text-gray-600 text-sm">智能供应链管理降低库存积压和缺料风险</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">预期投资回报率</h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">280%</div>
                    <p className="text-gray-600 text-sm">8-12个月投资回收期</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI计算器CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              想计算您制造企业的具体ROI？
            </h3>
            <p className="text-gray-600 mb-6">
              使用我们的专业ROI计算器，输入您的制造业务数据，获得个性化的投资回报分析报告
            </p>
            <Link
              href="/tools/roi-calculator"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              免费计算ROI
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开启智能制造转型之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            立即联系我们，获得专业的制造业自动化解决方案，实现工业4.0智能制造升级
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              免费评估ROI
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              联系专家咨询
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}