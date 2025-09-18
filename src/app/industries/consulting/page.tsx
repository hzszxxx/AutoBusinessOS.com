import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Services Automation - Project Management, Client Communication, Report Generation | AutoBusinessOS',
  description: 'Comprehensive consulting automation solutions for project management, client communication, and report generation. Boost efficiency by 70%, increase profit margins by 50%, and drive professional services digitalization.',
  keywords: 'consulting automation, professional services automation, consultant automation, project management automation, client communication automation, report generation automation',
}

export default function ConsultingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Services Automation
              <span className="block text-yellow-300">Project Management, Client Communication & Report Generation</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Intelligent automation system designed specifically for consulting services, covering project management, client relationships, knowledge management, and report generation. Help consulting firms boost work efficiency by 70%, increase profit margins by 50%, and achieve professional services digital transformation.
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
Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Industry Pain Points Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Challenges Facing Professional Services Firms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In the digital transformation wave, 85% of consulting firms face these critical pain points in business operations and service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inefficient Project Management</h3>
              <p className="text-gray-600 mb-4">
                Traditional project management relies on Excel and email, resulting in low collaboration efficiency. Difficult project progress tracking, unreasonable resource allocation, and frequent delivery delays. Chaotic multi-project parallel management with inability to effectively monitor project health and profitability.
              </p>
              <div className="text-sm text-red-600 font-semibold">Project Delay Rate: Up to 40%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lack of Systematic Client Communication</h3>
              <p className="text-gray-600 mb-4">
                Client communication is scattered across multiple channels without unified management. Untimely handling of client requirement changes and incomplete communication records. Information asymmetry between project teams and clients affects service quality and client satisfaction.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Client Satisfaction: Only 75%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time-Consuming Report Generation</h3>
              <p className="text-gray-600 mb-4">
                Report creation relies on manual compilation with inconsistent formats and varying quality. Low efficiency in data collection and analysis, with repetitive work consuming significant time. Lengthy report review processes make delivery timelines difficult to guarantee.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Report Creation Time: 35% of Total Hours</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weak Knowledge Management System</h3>
              <p className="text-gray-600 mb-4">
                Project experience and knowledge are stored dispersedly, making reuse and inheritance difficult. Industry insights and best practices cannot be effectively accumulated, resulting in high learning costs for new employees. Lack of unified knowledge base and methodology leads to low service standardization.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Knowledge Reuse Rate: Only 20%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Difficult Profitability Analysis</h3>
              <p className="text-gray-600 mb-4">
                Inaccurate project cost accounting makes it impossible to accurately assess project profitability. Chaotic time recording and expense statistics with lagging financial data. Lack of effective pricing models and cost control mechanisms leads to continuously declining profit margins.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Average Profit Margin: Only 15%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Development Lacks Data Support</h3>
              <p className="text-gray-600 mb-4">
                Lack of effective business data analysis makes it impossible to identify growth opportunities. Inaccurate client value assessment with unclear business expansion directions. Insufficient market trend insights and lack of data foundation for competitive strategy formulation.
              </p>
              <div className="text-sm text-green-600 font-semibold">Data-Driven Decisions: Less than 30%</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Point Impact: Dual Challenge of Consulting Firm Competitiveness & Profitability</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-45%</div>
                  <p className="text-gray-600">Operational Efficiency Loss</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+60%</div>
                  <p className="text-gray-600">Project Delivery Cost Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-30%</div>
                  <p className="text-gray-600">Client Renewal Rate Decline</p>
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

      {/* Consulting Automation Solutions */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Services Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all consulting service aspects, from project management to knowledge accumulation, delivering intelligent and automated professional services
            </p>
          </div>

          {/* 核心功能卡片 */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Project Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI-driven project management platform with intelligent task allocation and progress tracking. Automated risk identification and alerting, optimized resource allocation, and real-time project profitability analysis. Project success rate improves to 95%, delivery efficiency increases by 70%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered task allocation and scheduling
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time progress tracking and alerts
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Resource optimization algorithms
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Project profitability analysis
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Client Relationship Automation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Full lifecycle client management platform with intelligent client segmentation and value assessment. Automated communication follow-up, requirement change management, and client satisfaction monitoring. Client satisfaction improves to 95%, renewal rate increases by 80%.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  360-degree client view and analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent client segmentation and profiling
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated communication and follow-up
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent requirement change management
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">智能报告生成</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI驱动的报告自动生成系统，智能数据分析和洞察提取。模板化报告框架，一键生成专业报告。自动化审核流程，报告质量和效率双重提升，制作时间减少80%。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI数据分析和洞察提取
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  模板化报告框架体系
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  一键生成专业报告
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动化审核和质量控制
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">知识管理系统</h3>
              </div>
              <p className="text-gray-600 mb-6">
                智能知识库和方法论沉淀平台，自动提取项目经验和最佳实践。AI智能检索和推荐，知识图谱构建，专业能力持续积累。知识复用率提升300%，新员工培训效率提升200%。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能知识提取和分类
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能检索和推荐
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  知识图谱自动构建
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  最佳实践自动沉淀
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">财务分析平台</h3>
              </div>
              <p className="text-gray-600 mb-6">
                全面的项目财务管理和分析系统，精准成本核算和盈利分析。智能定价模型，预算控制自动化，财务风险预警。项目利润率提升50%，财务管理效率提升300%。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  精准项目成本核算
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能定价模型和建议
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  预算控制和费用监控
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  财务风险预警机制
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">业务智能分析</h3>
              </div>
              <p className="text-gray-600 mb-6">
                综合业务数据分析和决策支持平台，市场趋势洞察，客户价值分析，业务增长机会识别。数据驱动的战略决策支持，竞争优势分析，业务发展规划。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  市场趋势和机会分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  客户价值和满意度分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  竞争优势和定位分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  业务增长策略建议
                </li>
              </ul>
            </div>
          </div>

          {/* 效果展示 */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Results Achieved Through Consulting Automation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+70%</div>
                <p className="text-gray-600">Work Efficiency Improvement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">+50%</div>
                <p className="text-gray-600">Profit Margin Growth</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">-80%</div>
                <p className="text-gray-600">Report Creation Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">+95%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例研究 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Services Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real client case studies demonstrating the practical results and business value of consulting automation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 案例1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">管</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某知名管理咨询公司</h3>
                  <p className="text-gray-600">员工：200人，年营收：5亿元</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 多项目并行管理混乱，经常延期交付</li>
                  <li>• 报告制作依赖手工，质量参差不齐</li>
                  <li>• 知识管理分散，经验难以传承</li>
                  <li>• 项目盈利能力分析不准确</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 部署智能项目管理平台</li>
                  <li>• 实施AI报告自动生成系统</li>
                  <li>• 建立统一知识管理体系</li>
                  <li>• 上线项目财务分析系统</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <p className="text-sm text-gray-600">项目按期交付率</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">-75%</div>
                    <p className="text-sm text-gray-600">报告制作时间</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+250%</div>
                    <p className="text-sm text-gray-600">知识复用率</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+85%</div>
                    <p className="text-sm text-gray-600">项目利润率</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;自动化系统彻底改变了我们的工作方式。项目管理更加精准，报告质量和效率大幅提升，知识沉淀帮助我们建立了真正的竞争优势。年利润增长超过40%。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 合伙人 陈先生</p>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">IT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某IT咨询服务公司</h3>
                  <p className="text-gray-600">员工：150人，专注数字化转型</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 技术项目复杂度高，风险控制困难</li>
                  <li>• 客户需求变更频繁，沟通成本高</li>
                  <li>• 技术文档和方案复用率低</li>
                  <li>• 项目成本控制不精准</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 实施项目风险智能监控系统</li>
                  <li>• 建立客户沟通自动化平台</li>
                  <li>• 部署技术知识库和方案库</li>
                  <li>• 上线精准成本核算系统</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-60%</div>
                    <p className="text-sm text-gray-600">项目风险事件</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+180%</div>
                    <p className="text-sm text-gray-600">客户沟通效率</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+300%</div>
                    <p className="text-sm text-gray-600">方案复用率</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+65%</div>
                    <p className="text-sm text-gray-600">成本控制精度</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;系统帮我们建立了标准化的项目管理流程，风险控制能力大幅提升。技术方案的复用让我们能够更快响应客户需求，竞争优势明显增强。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 总经理 李女士</p>
              </div>
            </div>

            {/* 案例3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">财</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某财务咨询集团</h3>
                  <p className="text-gray-600">员工：500人，分公司：8个，专注财务和税务咨询</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 多地分公司协作困难，标准不统一</li>
                      <li>• 财务报告制作工作量巨大</li>
                      <li>• 专业知识更新快，培训成本高</li>
                      <li>• 客户服务质量参差不齐</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 建立集团统一业务管理平台</li>
                      <li>• 实施财务报告自动化生成</li>
                      <li>• 部署知识更新和培训系统</li>
                      <li>• 建立服务质量监控体系</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+400%</div>
                      <p className="text-sm text-gray-600">跨地协作效率</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">-85%</div>
                      <p className="text-sm text-gray-600">报告制作时间</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">+200%</div>
                      <p className="text-sm text-gray-600">培训效率提升</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">98%</div>
                      <p className="text-sm text-gray-600">服务质量达标率</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;自动化平台让我们实现了真正的集团化管理。各分公司服务标准统一，效率大幅提升。专业能力的快速传播让我们在竞争中保持领先地位。&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">— 集团董事长 王先生</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 案例数据汇总 */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">咨询服务客户案例数据汇总</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
                <p className="text-gray-600">成功案例</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
                <p className="text-gray-600">客户满意度</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3个月</div>
                <p className="text-gray-600">平均实施周期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">6个月</div>
                <p className="text-gray-600">平均投资回收期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">320%</div>
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
              咨询自动化实施方法论
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于60+咨询企业成功案例的最佳实践，确保咨询自动化项目高效实施
            </p>
          </div>

          {/* 实施阶段 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">咨询数字化四步法</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-3">业务流程梳理</h4>
                <p className="text-sm text-gray-600">深入分析现有咨询服务流程，识别自动化机会点和价值点</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-3">系统架构设计</h4>
                <p className="text-sm text-gray-600">设计符合咨询业务特点的自动化系统架构和数据模型</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-3">模块化实施</h4>
                <p className="text-sm text-gray-600">按业务优先级分模块实施，先核心后扩展，快速见效</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-3">持续优化</h4>
                <p className="text-sm text-gray-600">基于使用反馈持续优化系统，提升自动化效果和用户体验</p>
              </div>
            </div>
          </div>

          {/* 关键成功因素 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">咨询自动化关键成功因素</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">顾问参与度</h4>
                    <p className="text-gray-600">充分调动资深顾问参与系统设计，确保符合实际业务需求</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">知识标准化</h4>
                    <p className="text-gray-600">建立统一的知识分类和管理标准，为自动化奠定基础</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">模板化建设</h4>
                    <p className="text-gray-600">构建标准化的项目模板和报告模板，提升复用效率</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">文化变革</h4>
                    <p className="text-gray-600">推动组织文化向数字化转型，建立知识共享和协作文化</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">实施风险及防范</h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">知识产权风险</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    咨询方法论和经验是核心资产，需要严格保护
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 建立严格的权限管理机制</li>
                      <li>• 实施数据加密和访问控制</li>
                      <li>• 制定知识产权保护政策</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">质量标准化风险</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    过度标准化可能影响咨询服务的个性化和创新性
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 保持系统灵活性和可定制性</li>
                      <li>• 建立创新激励机制</li>
                      <li>• 定期评估和优化标准</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">人才流失风险</h4>
                  <p className="text-red-700 text-sm mb-3">
                    关键人才离职可能带走重要的知识和客户资源
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 建立完善的知识传承机制</li>
                      <li>• 实施人才激励和留存策略</li>
                      <li>• 强化团队协作和备份</li>
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
              咨询自动化工具推荐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选适合咨询服务行业的自动化工具组合，覆盖咨询服务全流程
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">项目管理系统</h3>
                <p className="text-gray-600 mt-2">智能项目规划和执行管控</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI任务分配优化
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  实时进度监控
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  风险预警机制
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">知识管理平台</h3>
                <p className="text-gray-600 mt-2">智能知识沉淀和复用</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能知识提取
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能检索
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  知识图谱构建
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  最佳实践推荐
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">报告生成系统</h3>
                <p className="text-gray-600 mt-2">AI驱动的报告自动化</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能数据分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  模板化框架
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  一键生成报告
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
              Consulting Automation Investment ROI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on real consulting firm case data, analyze the investment value and return expectations of consulting automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资成本分析</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">系统平台建设</h4>
                    <span className="text-blue-600 font-bold">80-200万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含项目管理、知识管理、报告生成等核心系统</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">数据整合成本</h4>
                    <span className="text-green-600 font-bold">30-80万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含历史数据迁移、系统集成、数据标准化等</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">培训实施成本</h4>
                    <span className="text-purple-600 font-bold">20-50万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含员工培训、流程梳理、变革管理等投入</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">总投资成本</h4>
                    <span className="text-2xl font-bold text-gray-900">130-330万</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资回报预期</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">工作效率提升</h4>
                    <span className="text-green-600 font-bold">+70%</span>
                  </div>
                  <p className="text-gray-600 text-sm">通过自动化减少重复性工作，提升整体效率</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">项目交付能力</h4>
                    <span className="text-blue-600 font-bold">+100%</span>
                  </div>
                  <p className="text-gray-600 text-sm">提升项目管理能力，增加项目承接和交付数量</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">利润率提升</h4>
                    <span className="text-purple-600 font-bold">+50%</span>
                  </div>
                  <p className="text-gray-600 text-sm">降低运营成本，提升项目盈利能力</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">客户满意度</h4>
                    <span className="text-yellow-600 font-bold">+95%</span>
                  </div>
                  <p className="text-gray-600 text-sm">提升服务质量和交付效率，增强客户满意度</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">预期投资回报率</h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">320%</div>
                    <p className="text-gray-600 text-sm">6-8个月投资回收期</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI计算器CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              想计算您咨询企业的具体ROI？
            </h3>
            <p className="text-gray-600 mb-6">
              使用我们的专业ROI计算器，输入您的咨询业务数据，获得个性化的投资回报分析报告
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
            Ready to Begin Your Professional Services Digital Transformation?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today to get professional consulting services automation solutions that boost efficiency and profitability
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