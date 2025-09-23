import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Automation Management System - Recruitment Process, Employee Management & Performance Evaluation Automation | AutoBusinessOS',
  description: 'Professional HR solutions featuring recruitment automation, employee lifecycle management, and performance evaluation. Reduce 50% HR workload and drive digital transformation.',
  keywords: 'HR automation, human resources automation, recruitment automation, employee management system',
}

export default function hrautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HR Automation Management System
              <span className="block text-yellow-300">Recruitment Process, Employee Management & Performance Evaluation Automation</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional HR automation management system solutions that help enterprises achieve efficient and intelligent business process management. Reduce 50% HR workload and improve overall operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Calculate ROI Free
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point Analysis Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HR Management Pain Point Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional HR management faces multiple challenges including low efficiency, high costs, and poor experience, urgently needing digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Lengthy Recruitment Process</h3>
              <p className="text-gray-600">
                Traditional recruitment processes are complex, taking an average of 45 days from resume screening to interview scheduling.
                Excellent talent loss rate reaches 60%, seriously impacting enterprise talent acquisition efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-orange-500 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Disorganized Employee Management</h3>
              <p className="text-gray-600">
                HR records management is chaotic, employee information updates are delayed, lacking unified employee lifecycle management,
                leading to a 35% increase in management costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Subjective Performance Evaluation</h3>
              <p className="text-gray-600">
                Traditional performance evaluations lack objective data support, with long evaluation cycles and delayed feedback.
                Employee satisfaction is only 42%, affecting team motivation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-purple-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Repetitive HR Work</h3>
              <p className="text-gray-600">
                Large amounts of repetitive administrative work occupy 70% of HR personnel time,
                unable to focus on strategic work such as talent development and organizational building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete lifecycle HR automation solutions, from recruitment to departure, providing intelligent human resource management experience
            </p>
          </div>

          <div className="space-y-16">
            {/* Smart Recruitment System */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Recruitment System</h3>
                <p className="text-gray-600 mb-6">
                  AI-powered intelligent resume screening and candidate matching system with automated interview scheduling and follow-up processes.
                  Supports multi-channel resume collection, intelligent recommendation of best-matched candidates, significantly improving recruitment efficiency.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    AI resume parsing and intelligent matching with 95%+ accuracy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Automated interview invitations and scheduling, saving 80% coordination time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Multi-dimensional candidate assessment, improving recruitment decision quality
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">65%</div>
                  <p className="text-gray-600 mb-4">Recruitment Cycle Reduction</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">95%</div>
                  <p className="text-gray-600">Resume Matching Accuracy</p>
                </div>
              </div>
            </div>

            {/* Employee Lifecycle Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">Unified</div>
                  <p className="text-gray-600 mb-4">Employee Information Management</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">90%</div>
                  <p className="text-gray-600">Management Efficiency Improvement</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Lifecycle Management</h3>
                <p className="text-gray-600 mb-6">
                  Complete employee lifecycle management system from onboarding to departure. Includes employee file management, onboarding process automation,
                  training tracking, career development planning, achieving unified employee information management and process standardization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Digital onboarding process, 75% improvement in new employee experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Dynamic employee profiles, real-time understanding of employee status
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Intelligent turnover alerts, reducing core talent loss rate
                  </li>
                </ul>
              </div>
            </div>

            {/* Intelligent Performance Evaluation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Performance Evaluation System</h3>
                <p className="text-gray-600 mb-6">
                  Objective performance evaluation system based on multi-dimensional data, supporting multiple evaluation modes such as OKR and KPI.
                  Real-time feedback mechanism and visual analysis make performance management more scientific and transparent.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Multi-dimensional data collection for more objective evaluation results
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Real-time performance tracking, timely discovery of problems and opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Intelligent goal recommendations, improving employee development targeting
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-600 mb-4">Employee Satisfaction</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">60%</div>
                  <p className="text-gray-600">Evaluation Time Reduction</p>
                </div>
              </div>
            </div>

            {/* Compensation and Benefits Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">Precise</div>
                  <p className="text-gray-600 mb-4">Compensation Calculation</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">99.8%</div>
                  <p className="text-gray-600">Calculation Accuracy</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compensation and Benefits Management</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent compensation calculation and benefits management system supporting complex compensation structures and personalized benefits plans.
                  Automated attendance statistics and social insurance calculations ensure accuracy and compliance of compensation distribution.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Intelligent compensation calculation, reducing 99% calculation errors
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Flexible benefits configuration, meeting personalized needs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Compliance monitoring, automatic risk point identification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios and Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Scenarios and Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer cases demonstrating the significant effectiveness and value creation of HR automation systems
            </p>
          </div>

          <div className="space-y-12">
            {/* Case 1: Technology Enterprise */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Technology Enterprise</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Internet Company Talent Management Digital Transformation</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This company has 5,000 employees with annual recruitment needs of 2,000 people. Traditional recruitment processes were cumbersome, HR teams faced enormous pressure,
                    high-quality candidate loss rates were high, and employee onboarding experience was poor, urgently needing digital solutions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-transformation challenges:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Average recruitment cycle of 45 days</li>
                        <li>• 60% candidate loss rate</li>
                        <li>• Low HR work efficiency</li>
                        <li>• Employee onboarding experience score 3.2</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-transformation results:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Recruitment cycle shortened to 16 days</li>
                        <li>• Candidate loss rate reduced to 25%</li>
                        <li>• HR efficiency improved by 200%</li>
                        <li>• Onboarding experience score improved to 4.6</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">65%</div>
                    <p className="text-gray-600 mb-4">Recruitment Cycle Reduction</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">200%</div>
                    <p className="text-gray-600">HR Efficiency Improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: Traditional Manufacturing */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">Manufacturing</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Traditional Manufacturing Performance Management Upgrade</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This manufacturing company has 3,000 employees. Traditional paper-based performance evaluation methods were inefficient and highly subjective,
                    resulting in low employee satisfaction with performance results, affecting team morale and work motivation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-upgrade issues:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Performance evaluation cycle up to 2 months</li>
                        <li>• Employee satisfaction only 42%</li>
                        <li>• Highly subjective evaluation results</li>
                        <li>• Lack of direction for talent development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-upgrade achievements:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Performance evaluation shortened to 1 week</li>
                        <li>• Employee satisfaction improved to 85%</li>
                        <li>• Objective data supports decisions</li>
                        <li>• Clear personalized development paths</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">85%</div>
                    <p className="text-gray-600 mb-4">Employee Satisfaction</p>
                    <div className="text-2xl font-bold text-primary-600 mb-2">87.5%</div>
                    <p className="text-gray-600">Evaluation Efficiency Improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Testimonial */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <blockquote className="text-xl italic mb-6">
                  &ldquo;The HR automation system has made our human resources management more intelligent and efficient. Recruitment cycles have been significantly shortened,
                  employee satisfaction has improved dramatically, and the HR team can finally focus on strategic work, creating greater value for the company.&rdquo;
                </blockquote>
                <cite className="text-primary-100">
                  — Mr. Li | CHRO of a Technology Company
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five-step implementation methodology based on best practices, ensuring HR automation projects are successfully implemented and produce practical benefits
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Current State Diagnosis</h3>
              <p className="text-gray-600 text-sm">
                In-depth research on enterprise HR management status, identify key pain points and improvement opportunities, develop targeted solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Process Redesign</h3>
              <p className="text-gray-600 text-sm">
                Redesign HR processes based on best practices, optimize organizational structure and job settings, improve management efficiency
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">System Implementation</h3>
              <p className="text-gray-600 text-sm">
                Deploy HR automation system in phases, complete data migration and system integration, ensure smooth transition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Capability Building</h3>
              <p className="text-gray-600 text-sm">
                Conduct systematic training and knowledge transfer, improve HR team digital capabilities and system operation levels
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Continuous Optimization</h3>
              <p className="text-gray-600 text-sm">
                Establish continuous improvement mechanisms, continuously optimize system functions and processes based on business development and user feedback
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Success Factors</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Strategic Alignment</h4>
                <p className="text-gray-600 text-sm">Ensure HR automation strategy is highly aligned with overall enterprise development strategy</p>
              </div>
              <div className="text-center">
                <div className="text-secondary-500 text-3xl mb-3">👥</div>
                <h4 className="font-semibold mb-2">Full Participation</h4>
                <p className="text-gray-600 text-sm">Establish cross-departmental collaboration mechanisms, gain full support from management and employees</p>
              </div>
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">Data-Driven</h4>
                <p className="text-gray-600 text-sm">Establish comprehensive data monitoring systems, use data to guide decisions and improvements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mainstream HR Automation Tool Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of mainstream HR management systems to help you choose the most suitable solution
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature Module</th>
                  <th className="px-6 py-4 text-center">AutoBusinessOS</th>
                  <th className="px-6 py-4 text-center">Traditional HRIS</th>
                  <th className="px-6 py-4 text-center">International SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Intelligent Recruitment</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ AI Resume Matching</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Basic Screening</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Limited AI Features</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Employee Lifecycle Management</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Complete Process Coverage</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Partial Modules</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Complete Features</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Performance Evaluation</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Intelligent Analysis</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Traditional Evaluation</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Multi-dimensional Evaluation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Mobile Experience</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Native APP</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Poor Experience</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Responsive Web</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Localization Adaptation</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Fully Adapted</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Local Product</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Insufficient Adaptation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Total Cost of Ownership</td>
                  <td className="px-6 py-4 text-center text-green-600">Medium</td>
                  <td className="px-6 py-4 text-center text-red-600">High</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Medium-High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Selection Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-600 mb-3">Growing Enterprises</h4>
                <p className="text-gray-600 text-sm">
                  Recommend AutoBusinessOS, complete functions, rapid implementation, controllable costs,
                  meeting HR management needs during rapid development
                </p>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-secondary-600 mb-3">Large Enterprises</h4>
                <p className="text-gray-600 text-sm">
                  AutoBusinessOS provides enterprise-level functions and personalized customization services,
                  supporting complex organizational structures and business processes
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-600 mb-3">Traditional Industries</h4>
                <p className="text-gray-600 text-sm">
                  Deep understanding of traditional industry characteristics, providing HR digital transformation solutions
                  that comply with industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your HR Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Use our ROI calculator to understand how much value HR automation management systems can bring to your enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate ROI Free
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