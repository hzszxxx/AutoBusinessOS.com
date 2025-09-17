import Layout from '@/components/Layout/Layout'
import ROICalculator from '@/components/Tools/ROICalculator'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ROI计算器 - 3分钟计算自动化投资回报率 | AutoBusinessOS',
  description: '免费的企业自动化ROI计算器，3分钟快速计算投资回报率、成本节省和回收期。专业的自动化投资分析工具，帮助企业做出明智决策。',
  keywords: 'ROI计算器, 投资回报率, 自动化ROI, 成本节省计算, 投资分析工具, 企业自动化评估',
}

export default function ROICalculatorPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              自动化ROI计算器
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              3分钟快速计算企业自动化投资回报率，了解自动化能为您的企业带来多少价值
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                专业ROI算法
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                实时成本分析
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                详细投资建议
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                免费详细报告
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
              为什么需要计算自动化ROI？
            </h2>
            <p className="text-xl text-gray-600">
              数据驱动决策，让每一分投资都物有所值
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">精确成本评估</h3>
              <p className="text-gray-600">
                准确计算实施成本、人力节省、错误减少等各项收益，为投资决策提供科学依据
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">风险控制</h3>
              <p className="text-gray-600">
                提前了解投资回收期和潜在风险，避免盲目投资，确保项目成功实施
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">优化方案</h3>
              <p className="text-gray-600">
                基于ROI分析结果，优化自动化实施方案，确保获得最大投资回报
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
              ROI计算方法论
            </h2>
            <p className="text-xl text-gray-600">
              基于行业最佳实践的专业计算模型
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">计算公式</h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">年度节省成本</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>人力成本节省 = 员工成本 × 可自动化时间 × 效率提升比例</div>
                    <div>错误成本减少 = 营收 × 错误率 × 错误影响系数</div>
                    <div><strong>总节省 = 人力节省 + 错误减少</strong></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">投资回报率</h4>
                  <div className="text-sm text-gray-600">
                    <div className="mb-2">实施成本 = 营收 × 3% (最低3万元)</div>
                    <div><strong>ROI = (年度节省 - 实施成本) ÷ 实施成本 × 100%</strong></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">投资回收期</h4>
                  <div className="text-sm text-gray-600">
                    <strong>回收期 = 实施成本 ÷ 月度节省成本</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">关键参数说明</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">🏢 年营收</h4>
                  <p className="text-sm text-gray-600">
                    公司年度总营业收入，影响错误成本计算和实施投入规模
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">👥 人力成本</h4>
                  <p className="text-sm text-gray-600">
                    涉及自动化流程的员工年度薪酬总成本，包括工资、社保、福利等
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">⏰ 处理时间占比</h4>
                  <p className="text-sm text-gray-600">
                    员工用于可自动化工作的时间占比，通常在40-80%之间
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">❌ 人为错误率</h4>
                  <p className="text-sm text-gray-600">
                    人工操作的错误频率，自动化可显著降低错误率并减少相关损失
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">📈 效率提升预期</h4>
                  <p className="text-sm text-gray-600">
                    基于行业平均水平，大多数企业可实现60-80%的效率提升
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
              行业ROI基准数据
            </h2>
            <p className="text-xl text-gray-600">
              了解不同行业的自动化投资回报表现
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                industry: '制造业',
                avgROI: '180%',
                payback: '8个月',
                efficiency: '75%',
                color: 'blue'
              },
              {
                industry: '金融服务',
                avgROI: '220%',
                payback: '6个月',
                efficiency: '85%',
                color: 'green'
              },
              {
                industry: '电商零售',
                avgROI: '150%',
                payback: '10个月',
                efficiency: '70%',
                color: 'purple'
              },
              {
                industry: 'SaaS科技',
                avgROI: '300%',
                payback: '5个月',
                efficiency: '90%',
                color: 'orange'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.industry}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">{item.avgROI}</div>
                    <div className="text-xs text-gray-600">平均ROI</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{item.payback}</div>
                    <div className="text-xs text-gray-600">回收期</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{item.efficiency}</div>
                    <div className="text-xs text-gray-600">效率提升</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * 数据来源于AutoBusinessOS服务的1000+企业客户实际实施效果
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            计算完ROI，接下来该怎么做？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            我们的专家团队将为您提供个性化的自动化实施建议
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">需求分析</h3>
              <p className="text-sm text-primary-100">
                专业顾问一对一分析您的具体需求和业务流程
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold mb-2">方案设计</h3>
              <p className="text-sm text-primary-100">
                量身定制自动化解决方案和实施路线图
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">实施落地</h3>
              <p className="text-sm text-primary-100">
                专业团队全程支持，确保项目成功实施
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              联系专家咨询
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              查看解决方案
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              常见问题
            </h2>
            <p className="text-xl text-gray-600">
              关于ROI计算的常见疑问解答
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'ROI计算结果的准确性如何？',
                answer: '我们的计算模型基于1000+企业的实际实施数据，准确率达85%以上。但实际效果还会受到企业规模、实施质量、员工配合度等因素影响，建议将计算结果作为参考依据。'
              },
              {
                question: '什么情况下不建议投资自动化？',
                answer: '当ROI低于50%、回收期超过3年，或企业当前面临重大变革时，建议暂缓自动化投资。建议先优化现有流程，或考虑部分自动化试点。'
              },
              {
                question: '如何提高自动化项目的成功率？',
                answer: '关键因素包括：明确的目标设定、高层支持、员工培训、分阶段实施、持续优化。我们建议采用敏捷实施方法，从小范围试点开始逐步扩展。'
              },
              {
                question: '计算中的实施成本是否包含所有费用？',
                answer: '我们的估算包含软件许可、实施服务、培训成本等主要费用，但不包含硬件采购、长期维护等。详细的成本分析需要根据具体方案进行评估。'
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