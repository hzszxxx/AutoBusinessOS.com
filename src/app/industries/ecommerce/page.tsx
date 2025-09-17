import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '电商自动化系统 - 库存管理、订单处理、客户服务自动化 | AutoBusinessOS',
  description: '专业的电商行业自动化解决方案，库存管理、订单处理、客户服务全面自动化。提升150%销量，降低40%运营成本，助力电商企业数字化转型。',
  keywords: '电商自动化, ecommerce automation, 零售自动化, 库存管理自动化, 订单处理自动化, 电商运营优化',
}

export default function EcommercePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              电商自动化系统
              <span className="block text-yellow-300">库存管理、订单处理、客户服务全面自动化</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              专为电商行业打造的智能自动化系统，从库存管理到客户服务全流程优化。帮助电商企业提升150%销量，降低40%运营成本，实现高效数字化运营。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                免费计算ROI
              </Link>
              <Link
                href="#solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                了解解决方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 电商行业痛点分析 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              电商行业运营的核心挑战
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              中国电商市场竞争激烈，88%的电商企业在运营管理中面临以下关键痛点
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">库存管理混乱</h3>
              <p className="text-gray-600 mb-4">
                多平台销售导致库存数据不同步，经常出现超卖、缺货问题。人工盘点耗时费力，库存周转率低下，资金占用严重。平均库存准确率仅为65%，直接影响客户满意度。
              </p>
              <div className="text-sm text-red-600 font-semibold">库存损失率：高达30%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">订单处理效率低</h3>
              <p className="text-gray-600 mb-4">
                订单处理依赖人工操作，处理速度慢、错误率高。高峰期订单积压严重，客户等待时间长。平均订单处理时间需要2-3小时，严重影响客户体验和复购率。
              </p>
              <div className="text-sm text-orange-600 font-semibold">订单错误率：15%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">客户服务响应慢</h3>
              <p className="text-gray-600 mb-4">
                客服人员数量有限，无法24小时在线服务。重复性问题占比80%，但仍需人工回复。平均响应时间超过30分钟，客户满意度持续下降，流失率居高不下。
              </p>
              <div className="text-sm text-yellow-600 font-semibold">客户流失率：45%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">数据分析能力弱</h3>
              <p className="text-gray-600 mb-4">
                销售数据分散在各个平台，缺乏统一的数据分析。无法及时了解销售趋势、热门商品、客户偏好。决策依赖经验而非数据，错失许多销售机会。
              </p>
              <div className="text-sm text-purple-600 font-semibold">数据利用率：仅25%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">营销效果难评估</h3>
              <p className="text-gray-600 mb-4">
                营销活动效果难以量化评估，投入产出比不明确。无法精准定位目标客户，广告投放浪费严重。客户生命周期价值无法准确计算，营销预算分配不合理。
              </p>
              <div className="text-sm text-blue-600 font-semibold">营销ROI：低于2:1</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">痛点影响：电商业务损失严重</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-55%</div>
                  <p className="text-gray-600">运营效率下降</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+85%</div>
                  <p className="text-gray-600">运营成本增加</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-40%</div>
                  <p className="text-gray-600">客户满意度下降</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">-30%</div>
                  <p className="text-gray-600">利润率降低</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 电商自动化解决方案 */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              电商自动化解决方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              全面覆盖电商运营各个环节，从商品管理到客户服务，实现智能化、自动化运营
            </p>
          </div>

          {/* 核心功能卡片 */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">智能库存管理</h3>
              </div>
              <p className="text-gray-600 mb-6">
                多平台库存实时同步，AI预测销售需求，自动补货提醒。支持批次管理、保质期提醒，降低库存积压和缺货风险。库存准确率可达99%以上。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多平台库存实时同步更新
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能销量预测和补货建议
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动安全库存预警机制
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  批次管理和保质期监控
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">订单处理自动化</h3>
              </div>
              <p className="text-gray-600 mb-6">
                从订单接收到发货全流程自动化处理。智能订单分流、自动拣货路径优化、批量打单发货。处理速度提升300%，错误率降低至1%以下。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  订单自动审核和风险识别
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能拣货路径优化算法
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  批量打单和快递单号回填
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  物流状态实时跟踪更新
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">智能客服系统</h3>
              </div>
              <p className="text-gray-600 mb-6">
                24/7智能客服机器人，支持多轮对话和情感识别。自动处理90%常见问题，复杂问题智能转人工。客户满意度提升至95%，响应时间缩短至秒级。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能问答和多轮对话
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  情感识别和个性化回复
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  工单系统和客服协作
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  客户服务质量实时监控
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">营销自动化引擎</h3>
              </div>
              <p className="text-gray-600 mb-6">
                基于用户行为的精准营销推荐，自动化邮件营销、短信营销。个性化商品推荐，提升客单价和复购率。营销ROI提升至5:1以上。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  个性化商品推荐算法
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动化邮件和短信营销
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  购物车挽回和流失预警
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  会员等级自动化管理
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
                <h3 className="text-2xl font-bold text-gray-900">数据分析驾驶舱</h3>
              </div>
              <p className="text-gray-600 mb-6">
                实时多维度业务数据分析，智能销售预测和趋势分析。可视化报表自动生成，支持决策者快速洞察业务状况，制定数据驱动的运营策略。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  实时业务数据监控面板
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  销售趋势预测和分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  客户画像和行为分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自定义报表和数据导出
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">供应链协同</h3>
              </div>
              <p className="text-gray-600 mb-6">
                与供应商系统无缝对接，实现采购自动化和供应链可视化。智能采购建议，供应商绩效评估，降低采购成本，提升供应链效率。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动化采购订单生成
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  供应商绩效实时监控
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  成本优化和价格对比
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  供应链风险预警机制
                </li>
              </ul>
            </div>
          </div>

          {/* 效果展示 */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">电商自动化带来的效果提升</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+150%</div>
                <p className="text-gray-600">销量增长</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">-40%</div>
                <p className="text-gray-600">运营成本降低</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+300%</div>
                <p className="text-gray-600">处理效率提升</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">+95%</div>
                <p className="text-gray-600">客户满意度</p>
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
              电商客户成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              真实客户案例展示电商自动化系统的实际效果和商业价值
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 案例1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">潮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某知名潮牌电商</h3>
                  <p className="text-gray-600">年销售额：2.5亿元</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 多平台销售库存混乱，经常出现超卖缺货</li>
                  <li>• 新品上市时订单激增，处理能力严重不足</li>
                  <li>• 客服团队20人，高峰期响应时间超过2小时</li>
                  <li>• 营销活动效果评估困难，投入产出不明确</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 部署智能库存管理系统，实现多平台库存同步</li>
                  <li>• 实施订单自动化处理流程，提升处理效率</li>
                  <li>• 上线AI客服机器人，24/7智能客户服务</li>
                  <li>• 建立营销自动化系统，精准推送和效果追踪</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+180%</div>
                    <p className="text-sm text-gray-600">年销售额增长</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">99.5%</div>
                    <p className="text-sm text-gray-600">库存准确率</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">5分钟</div>
                    <p className="text-sm text-gray-600">平均响应时间</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">7:1</div>
                    <p className="text-sm text-gray-600">营销投资回报比</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;自动化系统彻底改变了我们的运营方式。以前新品发布时总是手忙脚乱，现在系统自动处理一切。销售额翻了一倍多，客户满意度也显著提升。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 运营总监 张先生</p>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">鲜</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某生鲜电商平台</h3>
                  <p className="text-gray-600">日订单量：5万+</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 生鲜商品保质期短，库存管理复杂</li>
                  <li>• 订单量大且配送时效要求高</li>
                  <li>• 客户投诉处理及时性影响复购率</li>
                  <li>• 供应链上游采购计划不精准</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 实施保质期智能管理和临期商品处理</li>
                  <li>• 部署智能拣货和配送路径优化</li>
                  <li>• 建立完善的客户服务和投诉处理机制</li>
                  <li>• 上线供应链协同和智能采购系统</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">-60%</div>
                    <p className="text-sm text-gray-600">商品损耗率降低</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+250%</div>
                    <p className="text-sm text-gray-600">拣货效率提升</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <p className="text-sm text-gray-600">客户满意度</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">-35%</div>
                    <p className="text-sm text-gray-600">采购成本降低</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;生鲜电商对时效和品质要求极高，自动化系统帮我们解决了核心痛点。商品损耗大幅降低，和客户满意度持续攀升，业务增长非常稳健。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— CEO 李女士</p>
              </div>
            </div>

            {/* 案例3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-xl">美</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某美妆品牌旗舰店</h3>
                  <p className="text-gray-600">SKU数量：3000+，月GMV：8000万</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• SKU众多，库存管理极其复杂</li>
                      <li>• 美妆产品季节性强，销售预测困难</li>
                      <li>• 多渠道销售数据分散，决策困难</li>
                      <li>• 个性化推荐效果差，转化率低</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 部署AI驱动的智能库存预测系统</li>
                      <li>• 实施个性化推荐算法和精准营销</li>
                      <li>• 建立统一数据中台，整合全渠道数据</li>
                      <li>• 上线智能补货和促销决策系统</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+220%</div>
                      <p className="text-sm text-gray-600">GMV增长</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">+180%</div>
                      <p className="text-sm text-gray-600">转化率提升</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">-45%</div>
                      <p className="text-sm text-gray-600">库存周转周期</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">+65%</div>
                      <p className="text-sm text-gray-600">客单价提升</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;美妆行业变化快，客户需求多样化。AI系统帮我们精准预测趋势，个性化推荐让每个客户都能找到心仪的产品。业绩增长超出预期。&rdquo;
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-2">— 电商总监 王女士</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 案例数据汇总 */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">电商客户案例数据汇总</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">成功案例</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                <p className="text-gray-600">客户满意度</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2个月</div>
                <p className="text-gray-600">平均实施周期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4个月</div>
                <p className="text-gray-600">平均投资回收期</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">450%</div>
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
              电商自动化实施方法论
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于100+电商成功案例的最佳实践，确保项目快速、稳妥地实施落地
            </p>
          </div>

          {/* 实施阶段 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">四阶段实施流程</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-semibold text-gray-900 mb-3">业务调研诊断</h4>
                <p className="text-sm text-gray-600">深入分析现有业务流程，识别关键痛点和自动化机会点</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• 业务流程梳理</li>
                  <li>• 系统现状评估</li>
                  <li>• 数据质量分析</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-semibold text-gray-900 mb-3">方案设计规划</h4>
                <p className="text-sm text-gray-600">制定详细的自动化实施方案，确定技术架构和实施路径</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• 技术方案设计</li>
                  <li>• 实施计划制定</li>
                  <li>• 风险评估预案</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-semibold text-gray-900 mb-3">分阶段实施</h4>
                <p className="text-sm text-gray-600">采用分阶段部署策略，先核心后扩展，确保业务连续性</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• 核心功能先行</li>
                  <li>• 数据迁移测试</li>
                  <li>• 用户培训推广</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h4 className="font-semibold text-gray-900 mb-3">优化迭代</h4>
                <p className="text-sm text-gray-600">持续监控系统运行效果，不断优化算法和流程</p>
                <ul className="text-xs text-gray-500 mt-3 space-y-1">
                  <li>• 效果数据监控</li>
                  <li>• 算法持续优化</li>
                  <li>• 功能扩展升级</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 关键成功因素 */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">关键成功因素</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">数据质量保障</h4>
                    <p className="text-gray-600">确保基础数据的准确性和完整性，这是自动化成功的基石</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">业务流程标准化</h4>
                    <p className="text-gray-600">梳理和标准化现有业务流程，为自动化实施奠定基础</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">团队培训支持</h4>
                    <p className="text-gray-600">全面的用户培训和持续技术支持，确保系统有效使用</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">持续监控优化</h4>
                    <p className="text-gray-600">建立效果监控机制，持续优化算法和流程，提升自动化效果</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">风险控制措施</h3>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">数据安全风险</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    客户数据和交易信息的安全保护至关重要
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防护措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 数据加密存储和传输</li>
                      <li>• 访问权限严格控制</li>
                      <li>• 定期安全审计和备份</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">业务连续性风险</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    系统切换过程中可能影响正常业务运营
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防护措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 灰度发布和A/B测试</li>
                      <li>• 备用方案和快速回滚</li>
                      <li>• 24/7监控和应急响应</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">算法准确性风险</h4>
                  <p className="text-red-700 text-sm mb-3">
                    AI算法的预测和决策可能存在偏差
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">防护措施：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 人工审核和干预机制</li>
                      <li>• 模型持续训练和优化</li>
                      <li>• 多算法对比验证</li>
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
              电商自动化工具推荐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选市场优质电商自动化工具，助力企业快速实现数字化转型
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">库存管理工具</h3>
                <p className="text-gray-600 mt-2">智能库存优化和管理</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多平台库存实时同步
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI需求预测和补货
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  滞销和缺货预警
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
                <h3 className="text-xl font-bold text-gray-900">营销自动化平台</h3>
                <p className="text-gray-600 mt-2">精准营销和客户触达</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  个性化商品推荐
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  自动化邮件/短信营销
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  客户行为分析追踪
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ROI效果实时监控
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/marketing-automation"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">智能客服系统</h3>
                <p className="text-gray-600 mt-2">24/7自动化客户服务</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能问答机器人
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多渠道统一接入
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  工单管理和跟踪
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/solutions/customer-service-automation"
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
              电商自动化投资回报分析
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于真实案例数据，为您分析电商自动化的投资价值和回报预期
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资成本分析</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">系统部署成本</h4>
                    <span className="text-blue-600 font-bold">30-50万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含软件许可、系统集成、数据迁移等一次性投入</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">年度运营成本</h4>
                    <span className="text-green-600 font-bold">10-20万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含系统维护、技术支持、功能升级等持续投入</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">培训推广成本</h4>
                    <span className="text-purple-600 font-bold">5-10万</span>
                  </div>
                  <p className="text-gray-600 text-sm">包含员工培训、流程优化、变革管理等投入</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">总投资成本</h4>
                    <span className="text-2xl font-bold text-gray-900">45-80万</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">投资回报预期</h3>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">销售额提升</h4>
                    <span className="text-green-600 font-bold">+150%</span>
                  </div>
                  <p className="text-gray-600 text-sm">通过精准营销和转化优化，年销售额平均提升150%</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">运营成本降低</h4>
                    <span className="text-blue-600 font-bold">-40%</span>
                  </div>
                  <p className="text-gray-600 text-sm">自动化处理减少人工成本，运营效率大幅提升</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">库存成本优化</h4>
                    <span className="text-purple-600 font-bold">-30%</span>
                  </div>
                  <p className="text-gray-600 text-sm">智能库存管理减少积压和缺货，降低资金占用</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900">客户获取成本</h4>
                    <span className="text-yellow-600 font-bold">-50%</span>
                  </div>
                  <p className="text-gray-600 text-sm">精准营销提升转化率，降低客户获取成本</p>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">预期投资回报率</h4>
                    <div className="text-4xl font-bold text-green-600 mb-2">450%</div>
                    <p className="text-gray-600 text-sm">4-6个月投资回收期</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI计算器CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              想了解您企业的具体ROI？
            </h3>
            <p className="text-gray-600 mb-6">
              使用我们的专业ROI计算器，输入您的业务数据，获得个性化的投资回报分析报告
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
            准备开启电商自动化转型之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            立即联系我们，获得专业的电商自动化解决方案，助力企业实现数字化转型
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