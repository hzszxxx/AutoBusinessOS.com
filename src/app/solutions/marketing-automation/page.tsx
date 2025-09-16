import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '营销自动化平台 - 提升80%营销ROI的智能解决方案 | AutoBusinessOS',
  description: '专业的营销自动化解决方案，提供邮件营销、社交媒体管理、线索培育、转化跟踪等功能。帮助企业提升80%营销效率，降低60%获客成本。',
  keywords: 'marketing automation, 营销自动化, 邮件营销, 线索培育, 社交媒体营销, 营销ROI',
}

export default function MarketingAutomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              营销自动化平台
              <span className="block text-yellow-300">提升80%营销ROI的智能解决方案</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              从线索获取到客户转化，全流程营销自动化管理。让您的营销团队专注策略制定，将重复性工作交给AI。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                免费计算营销ROI
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

      {/* Pain Points */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">传统营销面临的核心挑战</h2>
            <p className="text-xl text-gray-600">您是否也在为这些问题而困扰？</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">重复性工作占用80%时间</h3>
              <p className="text-gray-600">
                手动发送邮件、社交媒体发布、线索跟进等重复性工作消耗大量人力资源，团队无法专注高价值策略制定。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">数据分散难以决策</h3>
              <p className="text-gray-600">
                各个营销渠道数据分散，无法获得完整的客户视图，导致营销决策缺乏数据支撑，ROI难以衡量。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">获客成本持续上升</h3>
              <p className="text-gray-600">
                缺乏个性化营销策略，线索质量不高，转化率低下，导致获客成本不断攀升，营销预算效果不佳。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                营销自动化的核心价值
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">智能化客户旅程设计</h3>
                    <p className="text-gray-600">
                      基于客户行为数据，自动设计个性化的营销流程，确保在正确的时间向正确的客户传递正确的信息。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">多渠道统一管理</h3>
                    <p className="text-gray-600">
                      整合邮件、社交媒体、短信、推送通知等多个营销渠道，提供统一的管理界面和数据视图。
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">实时数据分析优化</h3>
                    <p className="text-gray-600">
                      实时监控营销活动效果，自动优化发送时间、内容和受众定位，持续提升营销ROI。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">营销自动化效果数据</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">营销效率提升</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600">获客成本降低</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                  <div className="text-sm text-gray-600">线索转化率提升</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
                  <div className="text-sm text-gray-600">营销ROI增长</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              功能特性详解
            </h2>
            <p className="text-xl text-gray-600">
              全方位营销自动化功能，满足企业各种营销需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '邮件营销自动化',
                description: '智能邮件序列、A/B测试、打开率优化、个性化内容推荐',
                icon: '📧',
                features: ['拖拽式邮件编辑器', '智能发送时间优化', '详细邮件数据分析', '反垃圾邮件保障']
              },
              {
                title: '社交媒体管理',
                description: '多平台内容发布、社交监听、粉丝互动自动回复、影响力分析',
                icon: '📱',
                features: ['批量内容发布', '社交媒体日历', '评论自动回复', 'KOL影响力监测']
              },
              {
                title: '线索培育和评分',
                description: '基于行为的线索评分、自动分配销售线索、培育流程个性化',
                icon: '🎯',
                features: ['智能线索评分', '销售线索分配', '个性化培育路径', '转化漏斗分析']
              },
              {
                title: '个性化内容推送',
                description: 'AI驱动的内容推荐、动态内容生成、用户偏好学习',
                icon: '🤖',
                features: ['AI内容推荐', '动态内容块', '用户偏好分析', '内容效果测试']
              },
              {
                title: '营销ROI分析',
                description: '全渠道归因分析、营销投入产出比计算、预算优化建议',
                icon: '📈',
                features: ['多触点归因', 'ROI实时计算', '渠道效果对比', '预算分配建议']
              },
              {
                title: 'A/B测试优化',
                description: '邮件主题、内容、发送时间等多维度测试，持续优化效果',
                icon: '🔬',
                features: ['多变量测试', '统计显著性检验', '获胜方案自动启用', '测试结果可视化']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              应用场景案例
            </h2>
            <p className="text-xl text-gray-600">
              看看营销自动化如何在不同业务场景中发挥作用
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: 'B2B企业获客流程',
                description: '通过内容营销吸引潜在客户，自动化线索培育和评分，提高销售团队效率',
                steps: [
                  '访客下载白皮书触发线索捕获',
                  '自动发送欢迎邮件和行业案例',
                  '基于行为打分，识别高质量线索',
                  '自动分配给对应销售代表跟进'
                ],
                result: '获客成本降低50%，线索质量提升70%'
              },
              {
                title: '电商用户留存策略',
                description: '针对不同购买阶段的用户，提供个性化的营销内容和优惠活动',
                steps: [
                  '新用户自动发送欢迎礼包和使用指南',
                  '购买后发送满意度调研和推荐商品',
                  '未活跃用户自动发送特价优惠',
                  '忠诚客户专享VIP活动和新品预览'
                ],
                result: '客户留存率提升60%，复购率增加40%'
              },
              {
                title: 'SaaS产品激活优化',
                description: '引导新用户完成关键操作，提高产品激活率和付费转化',
                steps: [
                  '注册后自动发送产品导览和快速上手教程',
                  '监控用户行为，针对性推送功能介绍',
                  '未完成关键操作用户发送帮助内容',
                  '试用期结束前推送升级优惠和成功案例'
                ],
                result: '产品激活率提升80%，付费转化率增加45%'
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <div className="bg-primary-600 text-white px-6 py-3 rounded-lg inline-block">
                      <strong>效果：</strong>{useCase.result}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">自动化流程：</h4>
                    <div className="space-y-3">
                      {useCase.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              5步实施方法论
            </h2>
            <p className="text-xl text-primary-100">
              我们的专业团队将指导您完成营销自动化的完整实施
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '1', title: '现状分析', desc: '评估当前营销流程和技术栈' },
              { step: '2', title: '策略制定', desc: '设计个性化自动化营销策略' },
              { step: '3', title: '系统配置', desc: '配置营销自动化平台和工作流' },
              { step: '4', title: '内容制作', desc: '创建营销内容和模板库' },
              { step: '5', title: '优化迭代', desc: '持续监控效果并优化策略' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Recommendation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              推荐营销自动化工具
            </h2>
            <p className="text-xl text-gray-600">
              精选优质工具，帮您快速开始营销自动化之旅
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'HubSpot Marketing Hub',
                description: '全方位营销自动化平台，适合中大型企业',
                features: ['免费版本可用', '强大的CRM集成', '丰富的模板库'],
                price: '免费 - $1,200/月',
                rating: 4.5,
                suitableFor: '中大型企业'
              },
              {
                name: 'Mailchimp',
                description: '易用的邮件营销自动化工具，适合小微企业',
                features: ['操作简单', '价格亲民', '优秀的设计模板'],
                price: '免费 - $350/月',
                rating: 4.3,
                suitableFor: '小微企业'
              },
              {
                name: 'ActiveCampaign',
                description: '功能强大的营销自动化和CRM平台',
                features: ['高级自动化', '行为追踪', 'SMS营销'],
                price: '$15 - $259/月',
                rating: 4.6,
                suitableFor: '中小企业'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">主要特性：</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{tool.price}</div>
                    <div className="text-sm text-gray-500">适合{tool.suitableFor}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  了解详情
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开始您的营销自动化之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            使用我们的ROI计算器，了解营销自动化能为您的企业带来多少价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              免费计算营销ROI
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