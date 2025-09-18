import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Automation System - Patient Management, Appointment System, Medical Records Automation | AutoBusinessOS',
  description: 'Professional healthcare automation solutions for patient management, appointment systems, and medical records with comprehensive automation. Improve satisfaction by 90%, reduce waiting time by 60%, and accelerate digital transformation in healthcare.',
  keywords: 'healthcare automation, hospital automation, patient management automation, appointment system automation, medical records automation, health management automation',
}

export default function HealthcarePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare Automation System
              <span className="block text-yellow-300">Patient Management, Appointment System & Medical Records Intelligence</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Intelligent automation system designed specifically for the healthcare industry, covering patient management, appointment scheduling, medical records, and clinical workflows. Help healthcare institutions achieve 90% patient satisfaction, reduce waiting time by 60%, and realize efficient smart healthcare.
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

      {/* Healthcare Industry Pain Points Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Challenges Facing the Healthcare Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With continuously growing healthcare demand and rising service quality requirements, 90% of healthcare institutions face these critical pain points in operational management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excessive Treatment Waiting Times</h3>
              <p className="text-gray-600 mb-4">
                Traditional registration and queuing systems result in long patient waiting times, with average wait times exceeding 2 hours during peak outpatient periods. Unbalanced resource allocation leads to some departments being idle while others are overloaded, severely impacting patient experience.
              </p>
              <div className="text-sm text-red-600 font-semibold">Average Waiting Time: 120 minutes</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chaotic Medical Records Management</h3>
              <p className="text-gray-600 mb-4">
                Paper-based medical record management is inefficient, difficult to search, and information updates are not timely. Electronic medical record systems are incomplete with low data standardization, making cross-departmental and inter-institutional information sharing difficult, affecting clinical decision-making and continuity of care.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Digitization Level: Only 40%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inefficient Appointment System</h3>
              <p className="text-gray-600 mb-4">
                Traditional phone appointment methods are inefficient with poor patient experience. Unreasonable appointment resource allocation cannot intelligently match doctor specialties with patient needs. Cancellation and appointment changes are cumbersome, causing serious resource waste.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Appointment Success Rate: Only 65%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improper Human Resource Allocation</h3>
              <p className="text-gray-600 mb-4">
                Medical staff scheduling lacks scientific approach with uneven workload distribution. Specialist doctor resources are tight while general practitioner utilization is insufficient. Unreasonable nursing staff ratios increase nursing quality and safety risk concerns.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Medical Staff Utilization: Only 70%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Insufficient Medical Data Utilization</h3>
              <p className="text-gray-600 mb-4">
                Vast amounts of medical data lack effective analysis and utilization, unable to support clinical decision-making. Disease prevention and health management lack data-driven approaches, with poor chronic disease management outcomes. Medical quality assessment lacks quantitative indicators and continuous improvement mechanisms.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Data Utilization Rate: Less than 25%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuously Rising Operating Costs</h3>
              <p className="text-gray-600 mb-4">
                High medical equipment maintenance costs and imprecise pharmaceutical inventory management. Labor costs are too high with low medical resource utilization efficiency. Energy management lacks intelligence, making operating cost control difficult and reducing healthcare institution profitability.
              </p>
              <div className="text-sm text-green-600 font-semibold">Cost Growth Rate: 12% annually</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pain Point Impact: Dual Challenges in Healthcare Service Quality & Efficiency</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-35%</div>
                  <p className="text-gray-600">Patient Satisfaction Decline</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+45%</div>
                  <p className="text-gray-600">Operating Cost Increase</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-50%</div>
                  <p className="text-gray-600">Resource Utilization Efficiency</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">-25%</div>
                  <p className="text-gray-600">Medical Staff Work Efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Automation Solutions */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Healthcare Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all healthcare service aspects, from patient management to clinical workflows, achieving intelligent and automated medical services
            </p>
          </div>

          {/* Core Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Appointment Scheduling</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI驱动的预约调度系统，智能匹配患者需求和医生专长。支持多渠道预约，实时资源调配，自动提醒和确认。预约成功率提升至95%，等待时间减少60%。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能医患匹配算法
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多渠道统一预约平台
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  实时资源动态调配
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动提醒和确认机制
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Patient Management System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                全生命周期患者管理平台，整合患者基本信息、就诊历史、健康档案。智能患者分流，个性化健康提醒，慢性病管理自动化。患者满意度提升至95%以上。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  360度患者健康档案
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能患者分流和导诊
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  个性化健康管理计划
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  慢性病自动化监测
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
                <h3 className="text-2xl font-bold text-gray-900">Electronic Medical Records System</h3>
              </div>
              <p className="text-gray-600 mb-6">
                智能化电子病历管理系统，支持语音录入、结构化数据提取、智能诊断辅助。病历模板标准化，跨科室信息共享，数据安全性和完整性大幅提升。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  语音识别智能录入
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  结构化病历数据提取
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  跨科室信息无缝共享
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能诊断决策支持
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Medical-Nursing Collaboration Platform</h3>
              </div>
              <p className="text-gray-600 mb-6">
                智能医护协作和排班系统，优化人力资源配置。护理计划自动化，医嘱执行监控，跨团队沟通协作。医护工作效率提升50%，医疗安全事件减少80%。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能排班和资源调配
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  护理计划自动化生成
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  医嘱执行实时监控
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  跨团队协作沟通平台
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
                <h3 className="text-2xl font-bold text-gray-900">Medical Data Analytics</h3>
              </div>
              <p className="text-gray-600 mb-6">
                综合医疗数据分析平台，实时监控医疗质量指标和运营效率。疾病趋势预测，资源利用分析，医疗成本控制。为管理决策提供数据支撑，提升医疗服务质量。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  医疗质量实时监控
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  疾病趋势预测分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  资源利用效率分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  成本控制和优化建议
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intelligent Operations Management</h3>
              </div>
              <p className="text-gray-600 mb-6">
                医院运营智能化管理系统，包含药品库存管理、设备维护、能耗控制、财务管理等。自动化采购决策，设备预测性维护，运营成本降低30%，运营效率提升60%。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能药品库存管理
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  设备预测性维护
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  能耗智能化控制
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  财务管理自动化
                </li>
              </ul>
            </div>
          </div>

          {/* Results Showcase */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Healthcare Automation Results & Improvements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+90%</div>
                <p className="text-gray-600">Patient Satisfaction Improvement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">-60%</div>
                <p className="text-gray-600">Waiting Time Reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+50%</div>
                <p className="text-gray-600">Medical Staff Work Efficiency</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">-30%</div>
                <p className="text-gray-600">Operating Cost Reduction</p>
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
              Healthcare Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer case studies showcasing the actual results and social value of healthcare automation systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 案例1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">综</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某三甲综合医院</h3>
                  <p className="text-gray-600">床位：1500张，日门诊量：8000人次</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 门诊高峰期患者等待时间超过3小时</li>
                  <li>• 病历管理混乱，查找困难，信息共享不畅</li>
                  <li>• 医护人员工作强度大，排班不合理</li>
                  <li>• 医疗质量监控缺乏实时数据支撑</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 部署智能预约调度系统</li>
                  <li>• 实施统一电子病历平台</li>
                  <li>• 上线医护协作管理系统</li>
                  <li>• 建立医疗质量实时监控平台</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">45分钟</div>
                    <p className="text-sm text-gray-600">平均等待时间</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <p className="text-sm text-gray-600">病历电子化率</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+65%</div>
                    <p className="text-sm text-gray-600">医护工作效率</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">95%</div>
                    <p className="text-sm text-gray-600">患者满意度</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;自动化系统彻底改变了我们的医疗服务模式。患者等待时间大幅缩短，医护人员工作效率显著提升，医疗服务质量和患者满意度都达到了新高度。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 院长 张教授</p>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">专</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某专科医院集团</h3>
                  <p className="text-gray-600">分院：12家，专科：心血管、肿瘤</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 多院区患者信息无法共享，重复检查</li>
                  <li>• 专家资源分配不均，预约困难</li>
                  <li>• 慢性病患者管理缺乏连续性</li>
                  <li>• 医疗成本控制困难，盈利能力下降</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 建立集团统一患者管理平台</li>
                  <li>• 实施跨院区智能预约系统</li>
                  <li>• 部署慢性病管理自动化系统</li>
                  <li>• 上线智能运营管理平台</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-80%</div>
                    <p className="text-sm text-gray-600">重复检查率</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+150%</div>
                    <p className="text-sm text-gray-600">专家资源利用率</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <p className="text-sm text-gray-600">慢病管理依从性</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">-25%</div>
                    <p className="text-sm text-gray-600">运营成本降低</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;集团化医疗信息系统让我们实现了真正的资源共享和协同发展。患者在任何一家分院都能享受到统一高质量的医疗服务，运营效率和盈利能力都大幅提升。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 集团CEO 李院长</p>
              </div>
            </div>

            {/* 案例3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">社</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某市社区医疗服务中心</h3>
                  <p className="text-gray-600">服务人口：50万，社区站点：25个</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 居民健康档案不完整，管理分散</li>
                      <li>• 慢性病患者随访困难，依从性差</li>
                      <li>• 医疗资源有限，服务效率低</li>
                      <li>• 与三甲医院缺乏有效转诊机制</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 建立区域化居民健康档案系统</li>
                      <li>• 实施慢性病智能管理平台</li>
                      <li>• 部署远程医疗和咨询系统</li>
                      <li>• 建立智能分级诊疗体系</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <p className="text-sm text-gray-600">健康档案完整率</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">+300%</div>
                      <p className="text-sm text-gray-600">慢病随访效率</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">+180%</div>
                      <p className="text-sm text-gray-600">服务覆盖率</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">85%</div>
                      <p className="text-sm text-gray-600">分级诊疗准确率</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;智能化系统让我们这些基层医疗机构也能提供高质量的健康管理服务。居民健康水平显著提升，慢性病控制率大幅改善，真正实现了'小病不出社区'的目标。&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">— 主任 王医生</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 案例数据汇总 */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">医疗健康客户案例数据汇总</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <p className="text-gray-600">成功案例</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-gray-600">客户满意度</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">6个月</div>
                <p className="text-gray-600">平均实施周期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">10个月</div>
                <p className="text-gray-600">平均投资回收期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">220%</div>
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
              医疗自动化实施方法论
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于150+医疗机构成功案例的最佳实践，确保医疗自动化项目安全、稳妥地实施
            </p>
          </div>

          {/* 实施阶段 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">医疗信息化六步法</h3>
            <div className="grid md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">需求调研</h4>
                <p className="text-xs text-gray-600">深入了解医疗业务流程和痛点</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">合规评估</h4>
                <p className="text-xs text-gray-600">确保符合医疗行业法规要求</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">安全设计</h4>
                <p className="text-xs text-gray-600">设计符合医疗安全标准的方案</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">分期实施</h4>
                <p className="text-xs text-gray-600">分阶段部署，确保业务连续性</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">5</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">培训上线</h4>
                <p className="text-xs text-gray-600">全面培训医护人员使用系统</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">6</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">持续优化</h4>
                <p className="text-xs text-gray-600">基于使用反馈持续改进系统</p>
              </div>
            </div>
          </div>

          {/* 关键成功因素 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">医疗自动化关键成功因素</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">医疗安全优先</h4>
                    <p className="text-gray-600">确保系统设计符合医疗安全标准，患者隐私保护严格合规</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">业务流程优化</h4>
                    <p className="text-gray-600">深度理解医疗业务流程，优化而非简单的系统化现有流程</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">医护人员参与</h4>
                    <p className="text-gray-600">充分听取一线医护人员意见，确保系统设计贴合实际使用需求</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">数据标准化</h4>
                    <p className="text-gray-600">建立统一的医疗数据标准，为跨系统协作奠定基础</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">实施风险及防范</h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">医疗安全风险</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    系统故障可能影响医疗服务，威胁患者安全
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 建立完善的应急预案和备用系统</li>
                      <li>• 实施严格的系统测试和验证</li>
                      <li>• 设置多重安全防护机制</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">数据隐私风险</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    患者隐私数据泄露可能导致法律和信任危机
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 严格遵守医疗数据保护法规</li>
                      <li>• 实施数据加密和访问控制</li>
                      <li>• 定期安全审计和漏洞检测</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">用户接受度风险</h4>
                  <p className="text-red-700 text-sm mb-3">
                    医护人员对新系统抗拒可能影响实施效果
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防范措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 充分的前期沟通和参与</li>
                      <li>• 系统化的培训和支持</li>
                      <li>• 循序渐进的推广策略</li>
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
              医疗自动化工具推荐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选适合医疗健康行业的自动化工具组合，覆盖医疗服务全流程
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V7a2 2 0 012-2h4a2 2 0 012 2v0M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">预约管理系统</h3>
                <p className="text-gray-600 mt-2">智能预约调度和资源配置</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能排班算法
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多渠道预约整合
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动提醒和确认
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">患者管理平台</h3>
                <p className="text-gray-600 mt-2">全生命周期患者健康管理</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  健康档案管理
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  慢病管理自动化
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  健康提醒和随访
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能健康评估
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/customer-service-automation"
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
                <h3 className="text-xl font-bold text-gray-900">电子病历系统</h3>
                <p className="text-gray-600 mt-2">智能病历管理和信息共享</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  语音识别录入
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  结构化数据提取
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  跨科室信息共享
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

      {/* ROI Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Healthcare Automation Investment ROI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based on real healthcare institution case data, analyzing the investment value and return expectations of healthcare automation for your organization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资成本分析</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">信息系统建设</h4>
                    <span className="text-blue-600 font-bold">300-800万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含HIS、EMR、PACS等核心系统建设和集成</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">硬件设备采购</h4>
                    <span className="text-green-600 font-bold">200-500万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含服务器、网络设备、终端设备等硬件投入</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">实施培训成本</h4>
                    <span className="text-purple-600 font-bold">100-200万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含系统实施、人员培训、流程优化等投入</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">总投资成本</h4>
                    <span className="text-2xl font-bold text-gray-900">600-1500万</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资回报预期</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">运营效率提升</h4>
                    <span className="text-green-600 font-bold">+60%</span>
                  </div>
                  <p className="text-gray-600 text-sm">通过流程优化和自动化，大幅提升医疗服务效率</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">人力成本节省</h4>
                    <span className="text-blue-600 font-bold">-25%</span>
                  </div>
                  <p className="text-gray-600 text-sm">自动化处理减少重复性工作，优化人力配置</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">医疗质量提升</h4>
                    <span className="text-purple-600 font-bold">+40%</span>
                  </div>
                  <p className="text-gray-600 text-sm">减少医疗差错，提升诊疗质量和患者安全</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">患者满意度</h4>
                    <span className="text-yellow-600 font-bold">+90%</span>
                  </div>
                  <p className="text-gray-600 text-sm">改善就医体验，提升患者满意度和信任度</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">预期投资回报率</h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">220%</div>
                    <p className="text-gray-600 text-sm">10-15个月投资回收期</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI计算器CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Calculate Your Healthcare Institution's Specific ROI?
            </h3>
            <p className="text-gray-600 mb-6">
              Use our professional ROI calculator to input your healthcare institution data and receive a personalized investment return analysis report
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
            Ready to Begin Your Smart Healthcare Transformation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today to get professional healthcare automation solutions and improve medical service quality and efficiency
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