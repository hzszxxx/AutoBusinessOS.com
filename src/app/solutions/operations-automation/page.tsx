import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '运营自动化平台 - 库存管理、供应链优化、数据分析 | AutoBusinessOS',
  description: '专业的运营解决方案，库存管理、供应链优化、数据分析。提升40%运营效率，助力企业实现数字化转型。',
  keywords: 'operations automation, 运营自动化, 库存管理, 供应链优化',
}

export default function operationsautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              运营自动化平台
              <span className="block text-yellow-300">库存管理、供应链优化、数据分析</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              专业的运营自动化平台解决方案，帮助企业实现高效、智能的业务流程管理。提升40%运营效率，提升整体运营效率。
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

      {/* 痛点分析区域 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">运营管理痛点分析</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              传统运营管理模式面临效率低下、成本高昂、决策滞后等严峻挑战
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3">库存管理混乱</h3>
              <p className="text-gray-600">
                缺乏实时库存监控，库存积压和缺货现象严重，资金占用率高达30%，
                库存周转率低，影响企业资金流和运营效率。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-orange-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3">供应链不透明</h3>
              <p className="text-gray-600">
                供应链信息孤岛严重，缺乏端到端可视化管理，供应商协调困难，
                平均交付延期率达25%，客户满意度下降。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-500 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">数据分析滞后</h3>
              <p className="text-gray-600">
                缺乏实时数据分析能力，运营决策依赖经验判断，市场响应速度慢，
                错失业务机遇，竞争优势逐渐丧失。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-purple-500 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">流程标准化差</h3>
              <p className="text-gray-600">
                业务流程不规范，依赖人工经验，标准化程度低，
                运营成本居高不下，质量控制困难。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性详解 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">功能特性详解</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              全方位运营自动化解决方案，从库存管理到数据分析，提升企业运营效率和竞争力
            </p>
          </div>

          <div className="space-y-16">
            {/* 智能库存管理 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">智能库存管理系统</h3>
                <p className="text-gray-600 mb-6">
                  基于AI预测算法的智能库存管理系统，实现库存水位自动优化和智能补货。
                  支持多仓库、多SKU管理，提供实时库存监控和预警功能。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    AI需求预测，库存准确率提升85%以上
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    自动补货和调拨，减少缺货风险70%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    多维度库存分析，优化资金占用
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-600 mb-4">库存准确率提升</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">30%</div>
                  <p className="text-gray-600">库存成本降低</p>
                </div>
              </div>
            </div>

            {/* 供应链协同平台 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">全链路</div>
                  <p className="text-gray-600 mb-4">可视化管理</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">40%</div>
                  <p className="text-gray-600">交付效率提升</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">供应链协同平台</h3>
                <p className="text-gray-600 mb-6">
                  端到端供应链可视化管理平台，实现供应商、制造商、分销商的无缝协同。
                  提供实时物流跟踪、供应商绩效管理和风险预警功能。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    实时物流追踪，提升交付透明度
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    供应商协同管理，降低采购成本15%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    智能风险预警，提前识别供应链风险
                  </li>
                </ul>
              </div>
            </div>

            {/* 运营数据分析 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">运营数据分析中心</h3>
                <p className="text-gray-600 mb-6">
                  集成多源数据的运营分析平台，提供实时运营监控和智能分析报告。
                  支持自定义KPI指标和可视化看板，帮助管理者快速决策。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    实时运营监控，关键指标一目了然
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    智能趋势分析，预测业务走向
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    自定义报表，满足个性化需求
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">实时</div>
                  <p className="text-gray-600 mb-4">数据监控</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">80%</div>
                  <p className="text-gray-600">决策速度提升</p>
                </div>
              </div>
            </div>

            {/* 质量管理系统 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">99.5%</div>
                  <p className="text-gray-600 mb-4">质量合格率</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">60%</div>
                  <p className="text-gray-600">检测效率提升</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">智能质量管理</h3>
                <p className="text-gray-600 mb-6">
                  基于统计过程控制的智能质量管理系统，实现全流程质量监控和预警。
                  支持质量追溯、不合格品管理和持续改进闭环管理。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    全流程质量追溯，问题快速定位
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    智能质量预警，预防质量事故
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    持续改进管理，质量水平不断提升
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景案例 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">应用场景案例</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              真实客户案例展示运营自动化平台的显著成效和价值创造
            </p>
          </div>

          <div className="space-y-12">
            {/* 案例1：制造业企业 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">制造业</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">某汽车零部件企业供应链优化</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该企业拥有200多家供应商，传统供应链管理模式导致库存积压严重，交付延期频发，
                    运营成本居高不下，急需数字化转型提升竞争力。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">优化前问题：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 库存周转率仅6次/年</li>
                        <li>• 交付延期率达25%</li>
                        <li>• 供应商协调困难</li>
                        <li>• 库存资金占用3000万</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">优化后成果：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 库存周转率提升至12次/年</li>
                        <li>• 交付延期率降至8%</li>
                        <li>• 供应链透明度100%</li>
                        <li>• 释放库存资金1000万</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                    <p className="text-gray-600 mb-4">库存周转率提升</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">1000万</div>
                    <p className="text-gray-600">资金释放</p>
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
                    <h3 className="text-xl font-bold text-gray-900 ml-4">连锁超市运营数据分析升级</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该连锁企业拥有300家门店，传统运营管理缺乏数据支撑，决策响应慢，
                    库存周转效率低，门店运营标准化程度不高。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">升级前挑战：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 数据分析滞后5-7天</li>
                        <li>• 门店库存差异率15%</li>
                        <li>• 运营决策依赖经验</li>
                        <li>• 缺货率高达12%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">升级后效果：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 实时数据分析监控</li>
                        <li>• 库存差异率降至3%</li>
                        <li>• 数据驱动精准决策</li>
                        <li>• 缺货率控制在2%以内</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">80%</div>
                    <p className="text-gray-600 mb-4">库存差异率降低</p>
                    <div className="text-2xl font-bold text-primary-600 mb-2">83%</div>
                    <p className="text-gray-600">缺货率降低</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 案例3：电商平台 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">电商平台</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">跨境电商智能仓储管理</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该跨境电商平台日订单量10万+，多仓库管理复杂，库存预测困难，
                    仓储效率低下，客户满意度受到影响。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">改进前状况：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 库存预测准确率60%</li>
                        <li>• 仓储作业效率低</li>
                        <li>• 发货延误率18%</li>
                        <li>• 仓储成本占比25%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">改进后成效：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 库存预测准确率92%</li>
                        <li>• 仓储效率提升60%</li>
                        <li>• 发货延误率降至5%</li>
                        <li>• 仓储成本降至18%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">53%</div>
                    <p className="text-gray-600 mb-4">预测准确率提升</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">60%</div>
                    <p className="text-gray-600">仓储效率提升</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 客户证言 */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <blockquote className="text-xl italic mb-6">
                  &ldquo;运营自动化平台让我们的供应链管理变得更加透明和高效。库存周转率翻倍提升，
                  运营成本显著降低，整个团队的工作效率得到了质的飞跃。&rdquo;
                </blockquote>
                <cite className="text-primary-100">
                  — 张总 | 某制造企业COO
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实施方法论 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">实施方法论</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              基于精益运营理念的五步实施方法论，确保运营自动化项目成功落地并持续优化
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">运营诊断</h3>
              <p className="text-gray-600 text-sm">
                深入分析现有运营流程和痛点，识别改进机会和优化重点，制定详细的改进计划
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">流程优化</h3>
              <p className="text-gray-600 text-sm">
                基于精益原则重新设计运营流程，消除浪费环节，建立标准化作业体系
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">系统集成</h3>
              <p className="text-gray-600 text-sm">
                部署运营自动化系统，完成各业务系统的集成和数据打通，确保信息流畅
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">运营赋能</h3>
              <p className="text-gray-600 text-sm">
                开展全员培训和知识转移，建立数据驱动的运营管理文化和工作习惯
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">持续改进</h3>
              <p className="text-gray-600 text-sm">
                建立PDCA持续改进机制，定期评估运营效果，不断优化系统功能和流程
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">关键成功要素</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">目标导向</h4>
                <p className="text-gray-600 text-sm">明确运营改进目标和成功指标，确保项目实施方向正确</p>
              </div>
              <div className="text-center">
                <div className="text-secondary-500 text-3xl mb-3">🔄</div>
                <h4 className="font-semibold mb-2">流程先行</h4>
                <p className="text-gray-600 text-sm">先优化流程再上系统，避免用技术固化落后的管理模式</p>
              </div>
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">📊</div>
                <h4 className="font-semibold mb-2">数据驱动</h4>
                <p className="text-gray-600 text-sm">建立完善的数据采集和分析体系，让数据指导运营决策</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐比较 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">主流运营自动化工具对比</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              综合评估主流运营管理系统，帮助您选择最适合的数字化转型方案
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">功能模块</th>
                  <th className="px-6 py-4 text-center">AutoBusinessOS</th>
                  <th className="px-6 py-4 text-center">传统ERP</th>
                  <th className="px-6 py-4 text-center">专业WMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">智能库存管理</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ AI预测算法</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 基础预警</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 专业功能</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">供应链可视化</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 端到端追踪</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 功能有限</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 部分支持</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">运营数据分析</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 实时BI分析</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 基础报表</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 分析能力弱</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">质量管理</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 全流程管控</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 基础功能</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 不支持</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">移动端支持</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 原生APP</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 体验较差</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 部分功能</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">实施复杂度</td>
                  <td className="px-6 py-4 text-center text-green-600">中等</td>
                  <td className="px-6 py-4 text-center text-red-600">高</td>
                  <td className="px-6 py-4 text-center text-green-600">中低</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">选型建议</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-600 mb-3">制造企业</h4>
                <p className="text-gray-600 text-sm">
                  推荐AutoBusinessOS，集成库存、供应链、质量管理，
                  满足制造业复杂运营需求
                </p>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-secondary-600 mb-3">零售连锁</h4>
                <p className="text-gray-600 text-sm">
                  AutoBusinessOS提供多店铺管理和实时数据分析，
                  助力零售企业精准运营
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-600 mb-3">电商平台</h4>
                <p className="text-gray-600 text-sm">
                  智能仓储管理和供应链协同功能，
                  完美适配电商高频次运营场景
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
            准备开始您的运营自动化之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            使用我们的ROI计算器，了解运营自动化平台能为您的企业带来多少价值
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