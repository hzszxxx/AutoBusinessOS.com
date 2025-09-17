import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '销售自动化系统 - CRM集成、销售流程优化、客户跟进自动化 | AutoBusinessOS',
  description: '专业的销售解决方案，CRM集成、销售流程优化、客户跟进自动化。增加60%销售转化，助力企业实现数字化转型。',
  keywords: 'sales automation, CRM自动化, 销售流程优化, 客户管理系统',
}

export default function salesautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              销售自动化系统
              <span className="block text-yellow-300">CRM集成、销售流程优化、客户跟进自动化</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              专业的销售自动化系统解决方案，帮助企业实现高效、智能的业务流程管理。增加60%销售转化，提升整体运营效率。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                免费计算ROI
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                了解功能详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 痛点分析 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              传统销售管理的核心痛点
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据最新企业调研数据，85%的企业在销售管理中面临以下关键挑战
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">客户跟进效率低下</h3>
              <p className="text-gray-600 mb-4">
                销售人员平均每天花费3.2小时处理重复性跟进工作，真正用于销售沟通的时间不足40%。大量潜在客户因跟进不及时而流失，转化率长期停滞不前。
              </p>
              <div className="text-sm text-red-600 font-semibold">平均客户流失率：35%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">数据分散难以分析</h3>
              <p className="text-gray-600 mb-4">
                客户信息分散在Excel、微信、邮件等多个平台，缺乏统一的数据视图。销售经理无法实时掌握团队业绩，决策依赖经验而非数据驱动。
              </p>
              <div className="text-sm text-orange-600 font-semibold">数据整合度：仅23%</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">销售流程标准化缺失</h3>
              <p className="text-gray-600 mb-4">
                不同销售人员采用不同的销售方法，缺乏标准化流程。新员工培训周期长，经验传承困难，团队整体效率参差不齐。
              </p>
              <div className="text-sm text-yellow-600 font-semibold">流程标准化程度：不足30%</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">痛点影响：企业销售业绩损失</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">-42%</div>
                  <p className="text-gray-600">销售效率下降</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">+68%</div>
                  <p className="text-gray-600">客户获取成本增加</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">-35%</div>
                  <p className="text-gray-600">客户满意度下降</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性详细介绍 */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              销售自动化系统核心功能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              全方位的销售解决方案，从线索获取到成交跟进，实现销售全流程自动化管理
            </p>
          </div>

          {/* 核心功能卡片 */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">智能线索管理</h3>
              </div>
              <p className="text-gray-600 mb-6">
                AI驱动的线索评分系统，自动识别高价值客户。支持多渠道线索汇聚，包括网站表单、社交媒体、电话咨询等，统一管理避免重复跟进。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能线索评分，准确率达95%
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多渠道线索自动汇聚整合
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  重复线索智能去重识别
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">自动化跟进系统</h3>
              </div>
              <p className="text-gray-600 mb-6">
                基于客户行为和偏好的智能跟进策略，自动发送个性化邮件、短信和微信消息。支持跟进任务提醒，确保重要客户不被遗漏。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  个性化营销内容自动生成
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多渠道统一消息推送
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  智能跟进时机优化推荐
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">销售数据分析</h3>
              </div>
              <p className="text-gray-600 mb-6">
                实时销售漏斗分析，可视化展示销售进程。预测性分析帮助识别潜在风险客户，智能推荐最佳销售策略，提升成交概率。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  实时销售漏斗可视化分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI预测客户成交概率
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  销售策略智能推荐引擎
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">团队协作管理</h3>
              </div>
              <p className="text-gray-600 mb-6">
                统一的客户视图，支持团队成员协作跟进。销售流程标准化模板，新员工快速上手。权限管理确保客户信息安全。
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  360度客户视图统一展示
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  标准化销售流程模板
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  分级权限安全管理
                </li>
              </ul>
            </div>
          </div>

          {/* 效果展示 */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">销售自动化带来的效果提升</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">+60%</div>
                <p className="text-gray-600">销售转化率提升</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">-45%</div>
                <p className="text-gray-600">客户获取成本降低</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">+80%</div>
                <p className="text-gray-600">跟进效率提升</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">+35%</div>
                <p className="text-gray-600">客户满意度提升</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 真实案例研究 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              客户成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              真实客户案例展示销售自动化系统的实际效果和价值
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 案例1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">科</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某知名科技公司</h3>
                  <p className="text-gray-600">员工规模：500-1000人</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 销售团队30人，客户信息分散在个人电脑</li>
                  <li>• 客户跟进依赖个人经验，标准化程度低</li>
                  <li>• 月度销售目标完成率仅65%</li>
                  <li>• 客户流失率高达40%，复购率不足25%</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 部署智能CRM系统，统一客户数据管理</li>
                  <li>• 建立标准化销售流程和话术模板</li>
                  <li>• 实施AI智能线索评分和跟进提醒</li>
                  <li>• 搭建实时销售数据分析dashboard</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <p className="text-sm text-gray-600">月度目标完成率</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+120%</div>
                    <p className="text-sm text-gray-600">销售效率提升</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">15%</div>
                    <p className="text-sm text-gray-600">客户流失率降至</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">65%</div>
                    <p className="text-sm text-gray-600">客户复购率提升至</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;实施销售自动化系统后，我们的销售团队效率显著提升。现在每个销售人员都能清楚地了解客户状态，跟进更加及时精准。最重要的是，我们的销售业绩实现了翻倍增长。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 销售总监 王先生</p>
              </div>
            </div>

            {/* 案例2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">贸</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">某大型贸易公司</h3>
                  <p className="text-gray-600">员工规模：200-500人</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">实施前挑战：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 国际客户分布广泛，时差管理困难</li>
                  <li>• 询盘响应时间平均12小时，竞争劣势明显</li>
                  <li>• 客户沟通记录缺失，交接困难</li>
                  <li>• 报价准确性差，成交周期长达45天</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案：</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 实施24/7自动化客户响应系统</li>
                  <li>• 建立智能报价系统，提升报价准确性</li>
                  <li>• 部署多语言客户服务机器人</li>
                  <li>• 建立全球客户时区智能管理</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">实施效果：</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2小时</div>
                    <p className="text-sm text-gray-600">平均响应时间</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">22天</div>
                    <p className="text-sm text-gray-600">平均成交周期</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">+95%</div>
                    <p className="text-sm text-gray-600">报价准确率提升</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+180%</div>
                    <p className="text-sm text-gray-600">年度营收增长</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  &ldquo;自动化销售系统让我们在全球竞争中获得了明显优势。客户响应更快，报价更准确，整个销售流程变得非常顺畅。现在我们的年度营收比去年翻了一倍多。&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-2">— 海外业务部经理 李女士</p>
              </div>
            </div>
          </div>

          {/* 案例数据汇总 */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">客户案例数据汇总</h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">成功案例</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
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

      {/* 实施方法论和最佳实践 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              销售自动化实施方法论
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于50+成功案例总结的最佳实践方法论，确保项目成功实施
            </p>
          </div>

          {/* 实施阶段 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">五阶段实施流程</h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="relative flex justify-between items-center">
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                  <h4 className="font-semibold text-gray-900 mb-2">需求调研</h4>
                  <p className="text-sm text-gray-600 max-w-24">深入了解现有销售流程</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                  <h4 className="font-semibold text-gray-900 mb-2">方案设计</h4>
                  <p className="text-sm text-gray-600 max-w-24">定制化系统配置方案</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                  <h4 className="font-semibold text-gray-900 mb-2">系统部署</h4>
                  <p className="text-sm text-gray-600 max-w-24">分阶段系统上线部署</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                  <h4 className="font-semibold text-gray-900 mb-2">培训推广</h4>
                  <p className="text-sm text-gray-600 max-w-24">全员培训和使用推广</p>
                </div>
                <div className="bg-white text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">5</div>
                  <h4 className="font-semibold text-gray-900 mb-2">优化迭代</h4>
                  <p className="text-sm text-gray-600 max-w-24">持续优化和功能迭代</p>
                </div>
              </div>
            </div>
          </div>

          {/* 最佳实践 */}
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
                    <h4 className="font-semibold text-gray-900 mb-2">高层领导支持</h4>
                    <p className="text-gray-600">获得管理层的充分支持和资源投入，确保项目推进顺利</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">数据质量管理</h4>
                    <p className="text-gray-600">建立数据清洗和维护机制，确保客户数据的准确性和完整性</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">渐进式实施</h4>
                    <p className="text-gray-600">分阶段、分部门逐步实施，降低变革阻力，确保平稳过渡</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">持续培训支持</h4>
                    <p className="text-gray-600">建立完善的培训体系，确保用户能够熟练使用系统功能</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">常见实施挑战与解决方案</h3>
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">挑战：员工抗拒使用新系统</h4>
                  <p className="text-red-700 text-sm mb-3">
                    销售人员习惯传统工作方式，对新系统存在抗拒心理
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">解决方案：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 选择销售冠军作为系统推广大使</li>
                      <li>• 设置系统使用激励机制</li>
                      <li>• 展示系统带来的个人效率提升</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">挑战：历史数据迁移困难</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    原有客户数据分散，格式不统一，迁移工作量大
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">解决方案：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 制定数据清洗和标准化流程</li>
                      <li>• 分批次迁移，优先核心客户数据</li>
                      <li>• 建立数据质量验证机制</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">挑战：系统集成复杂度高</h4>
                  <p className="text-blue-700 text-sm mb-3">
                    需要与现有ERP、财务系统等多个系统集成
                  </p>
                  <div className="bg-white p-4 rounded">
                    <h5 className="font-semibold text-gray-900 mb-2">解决方案：</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 采用标准API接口进行系统集成</li>
                      <li>• 分阶段实现集成，优先核心功能</li>
                      <li>• 建立集成测试和验证流程</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐和比较 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              销售自动化工具对比分析
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              为您分析市场主流销售自动化工具，帮助选择最适合的解决方案
            </p>
          </div>

          {/* 工具对比表 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">功能特性</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">AutoBusinessOS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">传统CRM</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">国外SaaS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">自建系统</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI智能线索评分</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 内置
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ 不支持</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ 需定制</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ 需开发</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">多渠道客户数据整合</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 全支持
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ 部分支持</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ 支持</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ 需开发</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">本土化支持</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 深度本土化
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ 良好</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ 较差</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✓ 可定制</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">实施成本</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 低成本
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">△ 中等</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ 高成本</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">✗ 很高</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">实施周期</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✓ 1-3个月
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">3-6个月</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">3-6个月</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">6-12个月</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 推荐工具组合 */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">初创企业方案</h3>
                <p className="text-gray-600 mt-2">适合50人以下团队</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  轻量级CRM系统
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  基础自动化跟进
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  简单数据分析
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">¥299/月</div>
                <p className="text-sm text-gray-600">每用户每月</p>
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
                <h3 className="text-xl font-bold text-gray-900">成长企业方案</h3>
                <p className="text-gray-600 mt-2">适合50-500人团队</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI智能销售助手
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  高级数据分析
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  多系统集成
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  个性化定制
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">¥599/月</div>
                <p className="text-sm text-gray-600">每用户每月</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">企业级方案</h3>
                <p className="text-gray-600 mt-2">适合500人以上团队</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  全功能AI平台
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  私有化部署
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  专属技术支持
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  定制化开发
                </li>
              </ul>

              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">定制报价</div>
                <p className="text-sm text-gray-600">根据需求定制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开始您的销售自动化之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            使用我们的ROI计算器，了解销售自动化系统能为您的企业带来多少价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              免费计算ROI
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