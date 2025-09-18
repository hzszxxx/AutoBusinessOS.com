import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance Automation Systems - Invoice Processing, Expense Management & Financial Reporting | AutoBusinessOS',
  description: 'Professional finance solutions featuring invoice processing, expense management, and financial reporting. Reduce manual data entry by 90% and drive digital transformation.',
  keywords: 'finance automation, financial automation, invoice processing, expense management',
}

export default function financeautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Finance Automation Systems
              <span className="block text-yellow-300">Invoice Processing, Expense Management & Financial Reporting</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional finance automation system solutions that help enterprises achieve efficient and intelligent business process management. Reduce manual data entry by 90% and improve overall operational efficiency.
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

      {/* Pain Point Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Management Pain Point Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional financial management faces numerous challenges, enterprises urgently need intelligent transformation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold mb-3">Low Manual Entry Efficiency</h3>
              <p className="text-gray-600">
                Repetitive tasks such as invoice entry and account reconciliation take up over 80% of finance staff time,
                with error rates as high as 15%, seriously affecting work efficiency and data accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-orange-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Difficult Cost Control</h3>
              <p className="text-gray-600">
                Lack of real-time expense monitoring, delayed financial reports, inability to promptly detect cost anomalies,
                leading to an average 25% increase in enterprise operating costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Delayed Report Generation</h3>
              <p className="text-gray-600">
                Traditional manual financial report preparation takes 3-7 days, poor data timeliness,
                affecting management decision-making efficiency and missing market opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-purple-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Increased Compliance Risks</h3>
              <p className="text-gray-600">
                Manual processing is prone to compliance loopholes, difficult audit traceability,
                with average annual penalty losses exceeding $500K due to financial non-compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性详解 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive finance automation solutions, from basic entry to advanced analytics, meeting enterprise needs at all levels
            </p>
          </div>

          <div className="space-y-16">
            {/* Intelligent Invoice Processing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Invoice Processing System</h3>
                <p className="text-gray-600 mb-6">
                  Based on OCR technology and AI algorithms, realize automatic invoice recognition, classification and entry. Supports VAT invoices,
                  regular invoices, electronic invoices and other formats, with recognition accuracy above 99.5%.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Automatically scan and recognize invoice information, reducing 90% manual data entry work
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Smart verification and duplicate checking, ensuring invoice legitimacy and uniqueness
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Automatic classification and filing with multi-dimensional query and statistics support
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">99.5%</div>
                  <p className="text-gray-600 mb-4">Invoice Recognition Accuracy</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">Save 90%</div>
                  <p className="text-gray-600">Data Entry Workload</p>
                </div>
              </div>
            </div>

            {/* Automated Expense Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">Real-time</div>
                  <p className="text-gray-600 mb-4">Expense Monitoring & Alerts</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">25%</div>
                  <p className="text-gray-600">Cost Savings</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Expense Management</h3>
                <p className="text-gray-600 mb-6">
                  Integrated budget management, expense applications, approval workflows, and reimbursement management for complete expense lifecycle control.
                  Supports multi-level approvals, budget alerts, and real-time monitoring to ensure expense compliance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Smart budget allocation and alerts with automatic overspend notifications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Mobile expense claims, submit expense requests anytime, anywhere
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Automated approval process, reducing average approval time by 70%
                  </li>
                </ul>
              </div>
            </div>

            {/* Intelligent Financial Reports */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Financial Report Generation</h3>
                <p className="text-gray-600 mb-6">
                  Automatically generates various financial reports based on real-time data, including balance sheets, income statements, cash flow statements, etc.
                  Supports multi-dimensional analysis and visual presentation for clear financial data insights.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Real-time data updates, report generation in just 5 minutes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Diverse chart displays with drill-down analysis support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    One-click export in multiple formats to meet different scenario requirements
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">5 Minutes</div>
                  <p className="text-gray-600 mb-4">Report Generation Time</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">95%</div>
                  <p className="text-gray-600">Time Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer cases demonstrating the significant benefits of finance automation systems
            </p>
          </div>

          <div className="space-y-12">
            {/* Case Study 1: Manufacturing Enterprise */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Manufacturing</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Large Manufacturing Enterprise Financial Digital Transformation</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This enterprise has annual revenue of $5 billion, 20 subsidiaries, and a finance team of 200 people. Under traditional processes, monthly financial reports took 15 days to complete,
                    with invoice processing error rates as high as 12%, severely impacting financial management efficiency.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-Implementation Challenges:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Monthly reports took 15 days</li>
                        <li>• Invoice processing error rate 12%</li>
                        <li>• Severe finance staff overtime</li>
                        <li>• Delayed cost control</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-Implementation Results:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Monthly reports completed in 2 days</li>
                        <li>• Invoice processing error rate reduced to 0.5%</li>
                        <li>• Finance efficiency improved by 85%</li>
                        <li>• Annual cost savings of $8M</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
                    <p className="text-gray-600 mb-4">Efficiency Improvement</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">$8M</div>
                    <p className="text-gray-600">Annual Cost Savings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 案例2：零售连锁 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">零售连锁</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">全国连锁零售企业费用管控</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该连锁企业拥有500家门店，每月处理费用单据超过10万张。传统手工审批模式导致费用管控困难，
                    预算超支现象严重，年度超支率达30%。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">核心问题：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 费用审批周期长达10天</li>
                        <li>• 预算超支率30%</li>
                        <li>• 门店费用监控困难</li>
                        <li>• 财务合规风险高</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">解决效果：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 费用审批缩短至2天</li>
                        <li>• 预算超支率降至5%</li>
                        <li>• 实时费用监控预警</li>
                        <li>• 合规率提升至99%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">75%</div>
                    <p className="text-gray-600 mb-4">审批时间缩短</p>
                    <div className="text-2xl font-bold text-primary-600 mb-2">25%</div>
                    <p className="text-gray-600">超支率降低</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 客户证言 */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <blockquote className="text-xl italic mb-6">
                  &ldquo;财务自动化系统彻底改变了我们的工作方式。以前需要一周才能完成的财务报表，
                  现在几分钟就能生成。团队可以把更多时间投入到战略分析上，为公司创造更大价值。&rdquo;
                </blockquote>
                <cite className="text-primary-100">
                  — 王总 | 某大型制造企业CFO
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
              Proven five-step implementation process ensuring successful deployment of finance automation projects
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Requirements Analysis</h3>
              <p className="text-gray-600 text-sm">
                Deep understanding of enterprise financial status, identifying key pain points and improvement opportunities, creating detailed requirements list
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Solution Design</h3>
              <p className="text-gray-600 text-sm">
                Design customized solutions based on research findings, including functional modules, technical architecture, and implementation plans
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">System Deployment</h3>
              <p className="text-gray-600 text-sm">
                System installation and configuration according to the plan, completing data migration and system integration testing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Training & Launch</h3>
              <p className="text-gray-600 text-sm">
                Organize comprehensive training to ensure users master system operations, smoothly transitioning to new work modes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Continuous Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuously monitor system performance, optimize functions and improve processes based on user feedback
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Success Factors</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Clear Objectives</h4>
                <p className="text-gray-600 text-sm">Set clear project goals and success metrics to ensure correct implementation direction</p>
              </div>
              <div className="text-center">
                <div className="text-secondary-500 text-3xl mb-3">👥</div>
                <h4 className="font-semibold mb-2">Team Collaboration</h4>
                <p className="text-gray-600 text-sm">Establish cross-departmental collaboration mechanisms to ensure full cooperation and support from all parties</p>
              </div>
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                <p className="text-gray-600 text-sm">Establish feedback mechanisms to continuously optimize system functions and business processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mainstream Finance Automation Tool Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help you choose the finance automation solution that best meets your enterprise needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">AutoBusinessOS</th>
                  <th className="px-6 py-4 text-center">Traditional ERP</th>
                  <th className="px-6 py-4 text-center">Other SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Smart Invoice Recognition</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 99.5% Accuracy</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Requires Custom Development</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 95% Accuracy</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Real-time Report Generation</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 5-minute Generation</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 1-2 Hours</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 30 Minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Mobile Support</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Native APP</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Not Supported</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Web Version</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Deployment Method</td>
                  <td className="px-6 py-4 text-center text-green-600">Cloud + On-premise</td>
                  <td className="px-6 py-4 text-center text-yellow-600">On-premise Only</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Cloud Only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Implementation Period</td>
                  <td className="px-6 py-4 text-center text-green-600">2-4 Weeks</td>
                  <td className="px-6 py-4 text-center text-red-600">3-6 Months</td>
                  <td className="px-6 py-4 text-center text-yellow-600">1-2 Months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Investment Cost</td>
                  <td className="px-6 py-4 text-center text-green-600">Medium</td>
                  <td className="px-6 py-4 text-center text-red-600">High</td>
                  <td className="px-6 py-4 text-center text-green-600">Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-600 mb-3">Small & Medium Enterprises</h4>
                <p className="text-gray-600 text-sm">
                  Recommend AutoBusinessOS for fast deployment and cost control,
                  meeting basic finance automation needs
                </p>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-secondary-600 mb-3">Large Enterprises</h4>
                <p className="text-gray-600 text-sm">
                  AutoBusinessOS provides enterprise-level features, supporting large-scale data processing
                  with seamless integration to existing systems
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-600 mb-3">Specialized Industries</h4>
                <p className="text-gray-600 text-sm">
                  Provides industry-specific customized solutions meeting special compliance requirements
                  with personalized feature development support
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
            Ready to Start Your Finance Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Use our ROI calculator to understand how much value a finance automation system can bring to your enterprise
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