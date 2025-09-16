import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              革命性的<span className="text-yellow-300">自动化</span>
              <br />商业操作系统
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-4xl mx-auto">
              让企业业务流程100%自动化运行，提升效率80%，降低成本60%，释放团队创造力
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                免费计算ROI →
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block"
              >
                查看解决方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              全方位自动化解决方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              覆盖企业运营的每个环节，从营销获客到客户服务，从销售管理到财务分析
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '营销自动化',
                description: '智能线索培育、邮件营销、社交媒体管理',
                icon: '📊',
                href: '/solutions/marketing-automation',
                stats: '提升80%营销效率'
              },
              {
                title: '销售自动化',
                description: 'CRM集成、销售流程优化、客户跟进自动化',
                icon: '💼',
                href: '/solutions/sales-automation',
                stats: '增加60%销售转化'
              },
              {
                title: '客服自动化',
                description: '智能客服机器人、工单系统、知识库管理',
                icon: '🎧',
                href: '/solutions/customer-service-automation',
                stats: '降低70%响应时间'
              },
              {
                title: '财务自动化',
                description: '发票处理、费用管理、财务报表生成',
                icon: '💰',
                href: '/solutions/finance-automation',
                stats: '减少90%手工录入'
              },
              {
                title: 'HR自动化',
                description: '招聘流程、员工管理、绩效评估自动化',
                icon: '👥',
                href: '/solutions/hr-automation',
                stats: '节省50%HR工作量'
              },
              {
                title: '运营自动化',
                description: '库存管理、供应链优化、数据分析',
                icon: '⚙️',
                href: '/solutions/operations-automation',
                stats: '提升40%运营效率'
              }
            ].map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="bg-gray-50 hover:bg-gray-100 p-8 rounded-xl transition-colors group"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-sm font-medium text-primary-600">{solution.stats}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            计算您的自动化投资回报率
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            使用我们的专业ROI计算器，3分钟了解自动化能为您的企业带来多少价值
          </p>
          <Link
            href="/tools/roi-calculator"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            立即免费计算 →
          </Link>
        </div>
      </section>

      {/* Industry Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              成功案例与行业应用
            </h2>
            <p className="text-xl text-gray-600">
              看看其他企业如何通过自动化实现业务增长
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '电商零售', href: '/industries/ecommerce', growth: '+150%销量' },
              { name: 'SaaS企业', href: '/industries/saas', growth: '+200%用户' },
              { name: '制造业', href: '/industries/manufacturing', growth: '+80%效率' },
              { name: '医疗健康', href: '/industries/healthcare', growth: '+90%满意度' }
            ].map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-primary-600 font-medium">{industry.growth}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}