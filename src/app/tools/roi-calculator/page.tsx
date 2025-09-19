import Layout from '@/components/Layout/Layout'
import ROICalculator from '@/components/Tools/ROICalculator'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ROI Calculator - Calculate Automation Return on Investment in 3 Minutes | AutoBusinessOS',
  description: 'Free enterprise automation ROI calculator. Calculate return on investment, cost savings, and payback period in 3 minutes. Professional automation investment analysis tool to help businesses make informed decisions.',
  keywords: 'ROI calculator, return on investment, automation ROI, cost savings calculator, investment analysis tool, enterprise automation assessment',
}

export default function ROICalculatorPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automation ROI Calculator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Calculate your enterprise automation ROI in 3 minutes and discover how much value automation can bring to your business
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Professional ROI Algorithm
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Real-time Cost Analysis
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Detailed Investment Recommendations
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Free Detailed Report
              </div>
            </div>
          </div>

          {/* ROI Calculator Component */}
          <ROICalculator />
        </div>
      </section>

      {/* Why Use ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Calculate Automation ROI?
            </h2>
            <p className="text-xl text-gray-600">
              Make data-driven decisions and ensure every investment delivers value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Cost Assessment</h3>
              <p className="text-gray-600">
                Accurately calculate implementation costs, labor savings, error reduction, and other benefits to provide scientific basis for investment decisions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Control</h3>
              <p className="text-gray-600">
                Understand payback period and potential risks in advance, avoid blind investment, and ensure successful project implementation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution Optimization</h3>
              <p className="text-gray-600">
                Optimize automation implementation plans based on ROI analysis results to ensure maximum return on investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculation Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ROI Calculation Methodology
            </h2>
            <p className="text-xl text-gray-600">
              Professional calculation model based on industry best practices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculation Formula</h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Annual Cost Savings</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Labor Cost Savings = Employee Cost × Automatable Time × Efficiency Improvement</div>
                    <div>Error Cost Reduction = Revenue × Error Rate × Error Impact Factor</div>
                    <div><strong>Total Savings = Labor Savings + Error Reduction</strong></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Return on Investment</h4>
                  <div className="text-sm text-gray-600">
                    <div className="mb-2">Implementation Cost = Revenue × 3% (minimum $5,000)</div>
                    <div><strong>ROI = (Annual Savings - Implementation Cost) ÷ Implementation Cost × 100%</strong></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Payback Period</h4>
                  <div className="text-sm text-gray-600">
                    <strong>Payback Period = Implementation Cost ÷ Monthly Savings</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Parameter Explanations</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">🏢 Annual Revenue</h4>
                  <p className="text-sm text-gray-600">
                    Company's total annual revenue, affecting error cost calculation and implementation investment scale
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">👥 Labor Costs</h4>
                  <p className="text-sm text-gray-600">
                    Total annual compensation cost of employees involved in automation processes, including salary, benefits, and overhead
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">⏰ Time Allocation</h4>
                  <p className="text-sm text-gray-600">
                    Percentage of employee time spent on automatable work, typically between 40-80%
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">❌ Human Error Rate</h4>
                  <p className="text-sm text-gray-600">
                    Frequency of errors in manual operations. Automation can significantly reduce error rates and related losses
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">📈 Efficiency Improvement</h4>
                  <p className="text-sm text-gray-600">
                    Based on industry averages, most enterprises can achieve 60-80% efficiency improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry ROI Benchmarks
            </h2>
            <p className="text-xl text-gray-600">
              Understand automation ROI performance across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                industry: 'Manufacturing',
                avgROI: '180%',
                payback: '8 months',
                efficiency: '75%',
                color: 'blue'
              },
              {
                industry: 'Financial Services',
                avgROI: '220%',
                payback: '6 months',
                efficiency: '85%',
                color: 'green'
              },
              {
                industry: 'E-commerce Retail',
                avgROI: '150%',
                payback: '10 months',
                efficiency: '70%',
                color: 'purple'
              },
              {
                industry: 'SaaS Technology',
                avgROI: '300%',
                payback: '5 months',
                efficiency: '90%',
                color: 'orange'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.industry}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{item.avgROI}</div>
                    <div className="text-xs text-gray-600">Average ROI</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{item.payback}</div>
                    <div className="text-xs text-gray-600">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{item.efficiency}</div>
                    <div className="text-xs text-gray-600">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * Data based on actual implementation results from 1000+ enterprise clients served by AutoBusinessOS
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            After Calculating ROI, What's Next?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Our expert team will provide you with personalized automation implementation recommendations
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">Requirements Analysis</h3>
              <p className="text-sm text-gray-100">
                Professional consultants provide one-on-one analysis of your specific needs and business processes
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold mb-2">Solution Design</h3>
              <p className="text-sm text-gray-100">
                Customized automation solutions and implementation roadmaps tailored to your needs
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-gray-100">
                Professional team provides full support to ensure successful project implementation
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Expert Consultation
            </Link>
            <Link
              href="/solutions"
              className="border border-gray-300 text-white hover:bg-gray-50 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions and answers about ROI calculations
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How accurate are the ROI calculation results?',
                answer: 'Our calculation model is based on actual implementation data from 1000+ enterprises, with an accuracy rate of over 85%. However, actual results may be affected by factors such as company size, implementation quality, and employee cooperation. We recommend using the calculation results as a reference.'
              },
              {
                question: 'When is automation investment not recommended?',
                answer: 'When ROI is below 50%, payback period exceeds 3 years, or the company is currently facing major changes, we recommend postponing automation investment. Consider optimizing existing processes first or implementing partial automation pilots.'
              },
              {
                question: 'How to improve the success rate of automation projects?',
                answer: 'Key factors include: clear goal setting, top-level support, employee training, phased implementation, and continuous optimization. We recommend using agile implementation methods, starting with small-scale pilots and gradually expanding.'
              },
              {
                question: 'Does the implementation cost include all expenses?',
                answer: 'Our estimate includes major costs such as software licensing, implementation services, and training costs, but does not include hardware purchases and long-term maintenance. Detailed cost analysis needs to be evaluated based on specific solutions.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}