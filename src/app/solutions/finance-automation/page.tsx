import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '财务自动化系统 - 发票处理、费用管理、财务报表生成 | AutoBusinessOS',
  description: '专业的财务解决方案，发票处理、费用管理、财务报表生成。减少90%手工录入，助力企业实现数字化转型。',
  keywords: 'finance automation, 财务自动化, 发票处理, 费用管理',
}

export default function financeautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              财务自动化系统
              <span className="block text-yellow-300">发票处理、费用管理、财务报表生成</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              专业的财务自动化系统解决方案，帮助企业实现高效、智能的业务流程管理。减少90%手工录入，提升整体运营效率。
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">财务管理痛点分析</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              传统财务管理模式面临诸多挑战，企业急需智能化转型解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold mb-3">手工录入效率低</h3>
              <p className="text-gray-600">
                发票录入、账目对账等重复性工作占用财务人员80%以上时间，
                错误率高达15%，严重影响工作效率和数据准确性。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-orange-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">成本控制困难</h3>
              <p className="text-gray-600">
                缺乏实时费用监控，财务报表滞后，无法及时发现成本异常，
                平均导致企业运营成本增加25%。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">报表生成滞后</h3>
              <p className="text-gray-600">
                传统手工制作财务报表耗时3-7天，数据时效性差，
                影响管理层决策效率，错失市场机遇。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-purple-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">合规风险增加</h3>
              <p className="text-gray-600">
                手工处理容易出现合规漏洞，审计追溯困难，
                平均每年因财务不规范导致的罚款损失超过50万元。
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
              全方位的财务自动化解决方案，从基础录入到高级分析，满足企业各层级需求
            </p>
          </div>

          <div className="space-y-16">
            {/* 智能发票处理 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">智能发票处理系统</h3>
                <p className="text-gray-600 mb-6">
                  基于OCR技术和AI算法，实现发票自动识别、分类和录入。支持增值税专用发票、
                  普通发票、电子发票等多种格式，识别准确率达99.5%以上。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    自动扫描识别发票信息，减少90%手工录入工作
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    智能验真查重，确保发票合法性和唯一性
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    自动分类归档，支持多维度查询和统计
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">99.5%</div>
                  <p className="text-gray-600 mb-4">发票识别准确率</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">节省90%</div>
                  <p className="text-gray-600">录入工作量</p>
                </div>
              </div>
            </div>

            {/* 自动化费用管理 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">实时</div>
                  <p className="text-gray-600 mb-4">费用监控预警</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">25%</div>
                  <p className="text-gray-600">成本节省</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">自动化费用管理</h3>
                <p className="text-gray-600 mb-6">
                  集成预算管理、费用申请、审批流程和报销管理，实现费用全生命周期管控。
                  支持多级审批、预算预警和实时监控，确保费用合规性。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    智能预算分配和预警，超支自动提醒
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    移动端报销，随时随地提交费用申请
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    自动化审批流程，平均审批时间缩短70%
                  </li>
                </ul>
              </div>
            </div>

            {/* 智能财务报表 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">智能财务报表生成</h3>
                <p className="text-gray-600 mb-6">
                  基于实时数据自动生成各类财务报表，包括资产负债表、利润表、现金流量表等。
                  支持多维度分析和可视化展示，让财务数据一目了然。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    实时数据更新，报表生成仅需5分钟
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    多样化图表展示，支持钻取分析
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    一键导出多种格式，满足不同场景需求
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">5分钟</div>
                  <p className="text-gray-600 mb-4">报表生成时间</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">95%</div>
                  <p className="text-gray-600">时间节省</p>
                </div>
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
              真实客户案例展示财务自动化系统的显著成效
            </p>
          </div>

          <div className="space-y-12">
            {/* 案例1：制造业企业 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">制造业</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">某大型制造企业财务数字化转型</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该企业年营收50亿，拥有20个分子公司，财务团队200人。传统模式下，月度财务报表需要15天完成，
                    发票处理错误率高达12%，严重影响财务管理效率。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">实施前挑战：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 月度报表耗时15天</li>
                        <li>• 发票处理错误率12%</li>
                        <li>• 财务人员加班严重</li>
                        <li>• 成本控制滞后</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">实施后效果：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 月度报表2天完成</li>
                        <li>• 发票处理错误率降至0.5%</li>
                        <li>• 财务效率提升85%</li>
                        <li>• 年度成本节省800万</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">85%</div>
                    <p className="text-gray-600 mb-4">效率提升</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">800万</div>
                    <p className="text-gray-600">年度成本节省</p>
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

      {/* 实施方法论 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">实施方法论</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              经过验证的五步实施流程，确保财务自动化项目成功落地
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">需求调研</h3>
              <p className="text-gray-600 text-sm">
                深入了解企业财务现状，识别关键痛点和改进机会，制定详细的需求清单
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">方案设计</h3>
              <p className="text-gray-600 text-sm">
                基于调研结果设计定制化解决方案，包括功能模块、技术架构和实施计划
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">系统部署</h3>
              <p className="text-gray-600 text-sm">
                按照既定方案进行系统安装配置，完成数据迁移和系统集成测试
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">培训上线</h3>
              <p className="text-gray-600 text-sm">
                组织全员培训，确保用户熟练掌握系统操作，平滑过渡到新的工作模式
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">持续优化</h3>
              <p className="text-gray-600 text-sm">
                持续监控系统运行状况，根据使用反馈进行功能优化和流程改进
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">关键成功要素</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">明确目标</h4>
                <p className="text-gray-600 text-sm">设定清晰的项目目标和成功指标，确保实施方向正确</p>
              </div>
              <div className="text-center">
                <div className="text-secondary-500 text-3xl mb-3">👥</div>
                <h4 className="font-semibold mb-2">团队协作</h4>
                <p className="text-gray-600 text-sm">建立跨部门协作机制，确保各方充分配合支持</p>
              </div>
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">持续改进</h4>
                <p className="text-gray-600 text-sm">建立反馈机制，持续优化系统功能和业务流程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐比较 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">主流财务自动化工具对比</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              帮助您选择最适合企业需求的财务自动化解决方案
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">功能特性</th>
                  <th className="px-6 py-4 text-center">AutoBusinessOS</th>
                  <th className="px-6 py-4 text-center">传统ERP</th>
                  <th className="px-6 py-4 text-center">其他SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">发票智能识别</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 99.5%准确率</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 需定制开发</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 95%准确率</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">实时报表生成</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 5分钟生成</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 1-2小时</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 30分钟</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">移动端支持</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 原生APP</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 不支持</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 网页版</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">部署方式</td>
                  <td className="px-6 py-4 text-center text-green-600">云端+本地</td>
                  <td className="px-6 py-4 text-center text-yellow-600">仅本地部署</td>
                  <td className="px-6 py-4 text-center text-yellow-600">仅云端</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">实施周期</td>
                  <td className="px-6 py-4 text-center text-green-600">2-4周</td>
                  <td className="px-6 py-4 text-center text-red-600">3-6个月</td>
                  <td className="px-6 py-4 text-center text-yellow-600">1-2个月</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">投资成本</td>
                  <td className="px-6 py-4 text-center text-green-600">中等</td>
                  <td className="px-6 py-4 text-center text-red-600">高</td>
                  <td className="px-6 py-4 text-center text-green-600">低</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">推荐建议</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-600 mb-3">中小企业</h4>
                <p className="text-gray-600 text-sm">
                  推荐选择AutoBusinessOS，快速部署、成本可控，
                  能够满足基础财务自动化需求
                </p>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-secondary-600 mb-3">中大型企业</h4>
                <p className="text-gray-600 text-sm">
                  AutoBusinessOS提供企业级功能，支持大规模数据处理，
                  与现有系统无缝集成
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-600 mb-3">特殊行业</h4>
                <p className="text-gray-600 text-sm">
                  提供行业定制化方案，满足特殊合规要求，
                  支持个性化功能开发
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
            准备开始您的财务自动化之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            使用我们的ROI计算器，了解财务自动化系统能为您的企业带来多少价值
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