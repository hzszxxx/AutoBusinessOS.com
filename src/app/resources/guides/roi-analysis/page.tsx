import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function ROIAnalysisGuide() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-green-800 bg-opacity-50 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">📊 财务分析</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              自动化投资回报率分析指南
            </h1>
            <p className="text-xl text-green-100 mb-6">
              科学计算自动化ROI，做出明智的投资决策
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <span>⏱️ 预计阅读时间：18分钟</span>
              <span>📈 难度级别：中级</span>
              <span>📥 已下载：2,800+ 次</span>
              <span>⭐ 用户评分：4.8/5</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
            <p className="text-green-100 mb-4">下载完整ROI计算模板和案例分析</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📥 下载ROI模板
              </button>
              <Link href="/tools/roi-calculator" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                🧮 在线ROI计算器
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Navigation */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📖 目录导航</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <a href="#overview" className="block py-2 text-green-600 hover:text-green-800">
                  1. ROI分析概述
                </a>
                <a href="#framework" className="block py-2 text-green-600 hover:text-green-800">
                  2. ROI计算框架
                </a>
                <a href="#costs" className="block py-2 text-green-600 hover:text-green-800">
                  3. 成本分析详解
                </a>
                <a href="#benefits" className="block py-2 text-green-600 hover:text-green-800">
                  4. 收益量化方法
                </a>
              </div>
              <div>
                <a href="#cases" className="block py-2 text-green-600 hover:text-green-800">
                  5. 行业案例分析
                </a>
                <a href="#risks" className="block py-2 text-green-600 hover:text-green-800">
                  6. 风险评估方法
                </a>
                <a href="#decision" className="block py-2 text-green-600 hover:text-green-800">
                  7. 投资决策框架
                </a>
                <a href="#tools" className="block py-2 text-green-600 hover:text-green-800">
                  8. 实用工具和模板
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Overview */}
            <div id="overview" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. ROI分析概述</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                投资回报率（Return on Investment, ROI）是评估自动化项目价值的核心指标。
                正确的ROI分析不仅能帮助企业做出明智的投资决策，还能为项目实施提供清晰的目标和衡量标准。
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">💡 核心理念</h4>
                <p className="text-green-800">
                  &ldquo;ROI分析不仅仅是数字游戏，更是帮助企业理解自动化价值、优化投资策略的重要工具。&rdquo;
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">为什么ROI分析至关重要？</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-100 rounded-full p-2 mr-3">🎯</span>
                    决策支持
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• 客观评估项目价值</li>
                    <li>• 比较不同投资方案</li>
                    <li>• 确定项目优先级</li>
                    <li>• 获得管理层支持</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-100 rounded-full p-2 mr-3">📈</span>
                    价值管理
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• 设定明确的成功标准</li>
                    <li>• 监控项目进展</li>
                    <li>• 识别优化机会</li>
                    <li>• 证明投资价值</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">📋 ROI分析的三个层次</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-yellow-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-yellow-800 font-bold text-xs">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-yellow-900">财务ROI</h5>
                      <p className="text-sm text-yellow-800">直接的成本节约和收入增长</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-yellow-800 font-bold text-xs">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-yellow-900">运营ROI</h5>
                      <p className="text-sm text-yellow-800">效率提升、质量改善等运营价值</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-200 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                      <span className="text-yellow-800 font-bold text-xs">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-yellow-900">战略ROI</h5>
                      <p className="text-sm text-yellow-800">竞争优势、创新能力等长期价值</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Framework */}
            <div id="framework" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. ROI计算框架</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                标准的ROI计算公式看似简单，但在实际应用中需要考虑多个因素。
                我们推荐使用分层ROI分析方法，确保计算的准确性和全面性。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">基础ROI公式</h3>

              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  ROI = (收益 - 成本) ÷ 成本 × 100%
                </div>
                <div className="text-gray-600">
                  <div className="mb-2">净收益 = 总收益 - 总成本</div>
                  <div>投资回收期 = 总投资 ÷ 年度净收益</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">扩展ROI分析框架</h3>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-100 rounded-full p-2 mr-3">📊</span>
                    1. 总拥有成本 (TCO) 分析
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">一次性成本</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 软件许可费用</li>
                        <li>• 硬件采购成本</li>
                        <li>• 实施服务费用</li>
                        <li>• 培训和变革管理</li>
                        <li>• 系统集成费用</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">持续性成本</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 年度维护费用</li>
                        <li>• 运营支持成本</li>
                        <li>• 系统升级费用</li>
                        <li>• 额外人力成本</li>
                        <li>• 基础设施费用</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 rounded-full p-2 mr-3">💰</span>
                    2. 收益量化模型
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded">
                      <h5 className="font-medium text-green-900 mb-2">硬收益</h5>
                      <ul className="text-xs text-green-800 space-y-1">
                        <li>• 人力成本节约</li>
                        <li>• 运营费用降低</li>
                        <li>• 错误成本减少</li>
                        <li>• 收入直接增长</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-medium text-blue-900 mb-2">软收益</h5>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• 效率提升</li>
                        <li>• 质量改善</li>
                        <li>• 客户满意度</li>
                        <li>• 员工满意度</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded">
                      <h5 className="font-medium text-purple-900 mb-2">战略收益</h5>
                      <ul className="text-xs text-purple-800 space-y-1">
                        <li>• 市场响应速度</li>
                        <li>• 创新能力</li>
                        <li>• 竞争优势</li>
                        <li>• 风险降低</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 rounded-full p-2 mr-3">⏰</span>
                    3. 时间价值考量
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">净现值 (NPV)</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        考虑资金时间价值的投资评估方法
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs">
                        NPV = Σ(现金流量 ÷ (1+折现率)^年份)
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">内部收益率 (IRR)</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        使NPV等于零的折现率
                      </p>
                      <div className="bg-gray-50 p-3 rounded text-xs">
                        IRR是使项目净现值为0的折现率
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">🎯 ROI计算最佳实践</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div>
                    <h5 className="font-medium mb-2">保守估算原则</h5>
                    <ul className="space-y-1">
                      <li>• 成本估算偏高10-20%</li>
                      <li>• 收益估算偏低10-15%</li>
                      <li>• 考虑实施风险和延期</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">分阶段评估</h5>
                    <ul className="space-y-1">
                      <li>• 短期ROI (1年内)</li>
                      <li>• 中期ROI (1-3年)</li>
                      <li>• 长期ROI (3年以上)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Costs */}
            <div id="costs" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 成本分析详解</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                准确的成本分析是ROI计算的基础。企业需要识别所有相关成本，
                包括显性成本和隐性成本，一次性成本和持续性成本。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">成本分类体系</h3>

              <div className="space-y-8 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-red-100 rounded-full p-2 mr-3">💸</span>
                    直接成本
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">技术成本</h5>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="text-sm font-medium text-gray-900 mb-2">软件许可费</h6>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• 初始许可费用</li>
                            <li>• 年度维护费用</li>
                            <li>• 用户座位费用</li>
                            <li>• 功能模块费用</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="text-sm font-medium text-gray-900 mb-2">硬件设备</h6>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• 服务器和存储设备</li>
                            <li>• 网络设备升级</li>
                            <li>• 安全设备投入</li>
                            <li>• 备份和灾备设备</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">服务成本</h5>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="text-sm font-medium text-gray-900 mb-2">实施服务</h6>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• 咨询和设计费用</li>
                            <li>• 开发和定制费用</li>
                            <li>• 集成和配置费用</li>
                            <li>• 测试和部署费用</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h6 className="text-sm font-medium text-gray-900 mb-2">培训支持</h6>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• 用户培训费用</li>
                            <li>• 管理员培训费用</li>
                            <li>• 文档和材料费用</li>
                            <li>• 后续支持费用</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 rounded-full p-2 mr-3">👥</span>
                    人力成本
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded">
                      <h5 className="font-medium text-orange-900 mb-2">内部团队</h5>
                      <ul className="text-xs text-orange-800 space-y-1">
                        <li>• 项目经理时间</li>
                        <li>• IT团队投入</li>
                        <li>• 业务用户参与</li>
                        <li>• 测试团队时间</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded">
                      <h5 className="font-medium text-blue-900 mb-2">外部资源</h5>
                      <ul className="text-xs text-blue-800 space-y-1">
                        <li>• 外包开发费用</li>
                        <li>• 顾问咨询费用</li>
                        <li>• 临时人员费用</li>
                        <li>• 专家指导费用</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded">
                      <h5 className="font-medium text-green-900 mb-2">机会成本</h5>
                      <ul className="text-xs text-green-800 space-y-1">
                        <li>• 其他项目延期</li>
                        <li>• 业务中断损失</li>
                        <li>• 学习曲线影响</li>
                        <li>• 生产力暂时下降</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-purple-100 rounded-full p-2 mr-3">🔄</span>
                    持续运营成本
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">技术维护</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• 系统维护和升级 (年度许可费的15-25%)</li>
                        <li>• 安全补丁和更新</li>
                        <li>• 性能监控和优化</li>
                        <li>• 备份和灾难恢复</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">运营支持</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• 用户支持和帮助台</li>
                        <li>• 系统管理员人力</li>
                        <li>• 持续培训和认证</li>
                        <li>• 流程优化和改进</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ 常被忽视的隐性成本</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-yellow-800">
                  <div>
                    <h5 className="font-medium mb-2">变革管理成本</h5>
                    <ul className="space-y-1">
                      <li>• 流程重新设计</li>
                      <li>• 组织结构调整</li>
                      <li>• 员工抵制处理</li>
                      <li>• 文化变革推动</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">风险成本</h5>
                    <ul className="space-y-1">
                      <li>• 项目延期风险</li>
                      <li>• 预算超支风险</li>
                      <li>• 技术失败风险</li>
                      <li>• 合规性风险</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div id="benefits" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. 收益量化方法</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                收益量化是ROI分析中最具挑战性的部分。需要将定性的改进转化为定量的财务数据，
                同时确保收益预估的合理性和可实现性。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">收益分类和量化方法</h3>

              <div className="space-y-8 mb-8">
                <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                  <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                    <span className="bg-green-200 rounded-full p-2 mr-3">💰</span>
                    直接财务收益 (硬收益)
                  </h4>

                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-900 mb-3">人力成本节约</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-800 mb-2">计算公式：</p>
                          <div className="bg-green-100 p-3 rounded text-xs font-mono">
                            节约 = 原人工时间 × 自动化比例 × 小时工资率
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-green-800 mb-2">示例计算：</p>
                          <ul className="text-xs text-green-700 space-y-1">
                            <li>• 原处理时间：40小时/周</li>
                            <li>• 自动化比例：80%</li>
                            <li>• 平均工资：200元/小时</li>
                            <li>• 年节约：32×52×200 = 332,800元</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-900 mb-3">错误成本减少</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-800 mb-2">计算公式：</p>
                          <div className="bg-green-100 p-3 rounded text-xs font-mono">
                            节约 = 错误率降低 × 错误处理成本 × 业务量
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-green-800 mb-2">示例计算：</p>
                          <ul className="text-xs text-green-700 space-y-1">
                            <li>• 原错误率：5%</li>
                            <li>• 新错误率：0.5%</li>
                            <li>• 处理成本：500元/次</li>
                            <li>• 月业务量：1000笔</li>
                            <li>• 年节约：4.5%×500×1000×12 = 270,000元</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-900 mb-3">运营费用降低</h5>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">30-50%</div>
                          <div className="text-xs text-green-700">纸质文档减少</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">60-80%</div>
                          <div className="text-xs text-green-700">电话咨询减少</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">40-70%</div>
                          <div className="text-xs text-green-700">物理存储减少</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                    <span className="bg-blue-200 rounded-full p-2 mr-3">📈</span>
                    效率提升收益 (软收益)
                  </h4>

                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-900 mb-3">处理速度提升</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-blue-800 mb-2">量化方法：</p>
                          <ul className="text-xs text-blue-700 space-y-1">
                            <li>• 测量处理时间缩短</li>
                            <li>• 计算产能提升比例</li>
                            <li>• 评估额外业务价值</li>
                            <li>• 考虑客户满意度影响</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-blue-800 mb-2">价值计算：</p>
                          <div className="bg-blue-100 p-3 rounded text-xs">
                            速度提升50% → 产能提升33%<br/>
                            可处理更多业务或服务更多客户
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-900 mb-3">质量改善价值</h5>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">客户满意度</div>
                          <div className="text-xs text-blue-700">提升10-20%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">客户留存率</div>
                          <div className="text-xs text-blue-700">提升5-15%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">服务质量</div>
                          <div className="text-xs text-blue-700">一致性提升</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-200 rounded-lg p-6 bg-purple-50">
                  <h4 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                    <span className="bg-purple-200 rounded-full p-2 mr-3">🚀</span>
                    战略价值收益
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-purple-900 mb-3">市场响应能力</h5>
                      <ul className="text-sm text-purple-800 space-y-2">
                        <li>• 产品上市时间缩短</li>
                        <li>• 市场机会快速抓取</li>
                        <li>• 竞争优势建立</li>
                        <li>• 客户需求快速响应</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-900 mb-3">创新能力提升</h5>
                      <ul className="text-sm text-purple-800 space-y-2">
                        <li>• 员工时间释放用于创新</li>
                        <li>• 数据分析能力增强</li>
                        <li>• 决策速度和质量提升</li>
                        <li>• 新业务模式探索</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 收益量化最佳实践</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <h5 className="font-medium mb-2">数据收集方法</h5>
                    <ul className="space-y-1">
                      <li>• 建立基线数据</li>
                      <li>• 定期测量和监控</li>
                      <li>• 多方验证数据准确性</li>
                      <li>• 记录假设和计算方法</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">保守估算原则</h5>
                    <ul className="space-y-1">
                      <li>• 分阶段确认收益实现</li>
                      <li>• 考虑学习曲线影响</li>
                      <li>• 预留实现风险缓冲</li>
                      <li>• 持续跟踪和调整</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div id="cases" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 行业案例分析</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                通过真实的行业案例分析，了解不同类型企业的ROI实现路径和关键成功因素。
                以下案例基于我们客户的实际数据和结果。
              </p>

              <div className="space-y-8">
                {[
                  {
                    industry: "电商零售",
                    company: "中型电商平台",
                    scale: "年营收5亿元",
                    project: "订单处理自动化",
                    investment: "150万元",
                    timeframe: "12个月",
                    roi: "280%",
                    payback: "8个月",
                    details: {
                      costs: [
                        "RPA软件许可：45万元",
                        "实施服务：60万元",
                        "培训和变革：25万元",
                        "硬件和基础设施：20万元"
                      ],
                      benefits: [
                        "人力成本节约：240万元/年",
                        "错误率降低90%，节约：80万元/年",
                        "处理速度提升300%，产能提升：100万元/年",
                        "客户满意度提升15%，留存改善：50万元/年"
                      ],
                      lessons: [
                        "前期流程标准化是关键",
                        "员工培训投入要充分",
                        "分阶段实施降低风险",
                        "持续优化提升效果"
                      ]
                    }
                  },
                  {
                    industry: "制造业",
                    company: "传统制造企业",
                    scale: "员工1000+人",
                    project: "生产计划自动化",
                    investment: "200万元",
                    timeframe: "18个月",
                    roi: "320%",
                    payback: "10个月",
                    details: {
                      costs: [
                        "MES系统：80万元",
                        "集成和定制：70万元",
                        "硬件升级：30万元",
                        "培训和实施：20万元"
                      ],
                      benefits: [
                        "库存成本降低30%：180万元/年",
                        "生产效率提升25%：200万元/年",
                        "质量改善节约：120万元/年",
                        "人力优化节约：140万元/年"
                      ],
                      lessons: [
                        "需要充分的前期调研",
                        "系统集成复杂度较高",
                        "数据质量对结果影响大",
                        "管理层支持至关重要"
                      ]
                    }
                  },
                  {
                    industry: "金融服务",
                    company: "区域性银行",
                    scale: "50家分支机构",
                    project: "客户服务自动化",
                    investment: "300万元",
                    timeframe: "15个月",
                    roi: "240%",
                    payback: "12个月",
                    details: {
                      costs: [
                        "智能客服平台：120万元",
                        "系统集成：100万元",
                        "合规和安全：50万元",
                        "培训和变革：30万元"
                      ],
                      benefits: [
                        "客服人力成本节约：300万元/年",
                        "服务效率提升：150万元/年",
                        "客户满意度提升：100万元/年",
                        "合规成本降低：120万元/年"
                      ],
                      lessons: [
                        "合规要求增加复杂度",
                        "客户接受度需要培养",
                        "数据安全是重中之重",
                        "渐进式推广更安全"
                      ]
                    }
                  }
                ].map((caseStudy, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary-100 rounded-full px-3 py-1 mr-3">
                            <span className="text-primary-700 font-medium text-sm">{caseStudy.industry}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">{caseStudy.project}</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>企业规模：{caseStudy.scale}</div>
                          <div>实施周期：{caseStudy.timeframe}</div>
                          <div>总投资：{caseStudy.investment}</div>
                          <div>回收期：{caseStudy.payback}</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">{caseStudy.roi}</div>
                        <div className="text-sm text-gray-600">投资回报率</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                          <span className="text-red-600 mr-2">💸</span>主要成本构成
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {caseStudy.details.costs.map((cost, idx) => (
                            <li key={idx}>• {cost}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                          <span className="text-green-600 mr-2">💰</span>主要收益来源
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {caseStudy.details.benefits.map((benefit, idx) => (
                            <li key={idx}>• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                        <span className="text-blue-600 mr-2">💡</span>关键经验教训
                      </h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {caseStudy.details.lessons.map((lesson, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="text-blue-500 mr-2">✓</span>
                            {lesson}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">📊 行业ROI基准参考</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600 mb-1">150-400%</div>
                    <div className="text-blue-800 mb-2">电商零售</div>
                    <div className="text-xs text-blue-700">订单处理、客服、库存管理</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600 mb-1">200-350%</div>
                    <div className="text-blue-800 mb-2">制造业</div>
                    <div className="text-xs text-blue-700">生产计划、质量控制、供应链</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600 mb-1">180-300%</div>
                    <div className="text-blue-800 mb-2">金融服务</div>
                    <div className="text-xs text-blue-700">客服、风控、合规报告</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div id="risks" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. 风险评估方法</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                ROI分析必须考虑各种风险因素，这些风险可能影响预期收益的实现。
                建立全面的风险评估框架，有助于制定更现实的ROI预期和风险缓解策略。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">风险分类与评估</h3>

              <div className="space-y-6 mb-8">
                {[
                  {
                    category: "技术风险",
                    color: "red",
                    icon: "🔧",
                    risks: [
                      {
                        risk: "技术选择不当",
                        probability: "30%",
                        impact: "高",
                        mitigation: "充分的技术评估和试点测试"
                      },
                      {
                        risk: "系统集成困难",
                        probability: "40%",
                        impact: "中",
                        mitigation: "详细的集成规划和专业团队"
                      },
                      {
                        risk: "性能不达预期",
                        probability: "25%",
                        impact: "中",
                        mitigation: "性能基准测试和优化计划"
                      }
                    ]
                  },
                  {
                    category: "实施风险",
                    color: "orange",
                    icon: "🚧",
                    risks: [
                      {
                        risk: "项目延期",
                        probability: "50%",
                        impact: "中",
                        mitigation: "详细项目计划和里程碑管控"
                      },
                      {
                        risk: "预算超支",
                        probability: "35%",
                        impact: "高",
                        mitigation: "预算缓冲和严格的变更控制"
                      },
                      {
                        risk: "资源不足",
                        probability: "30%",
                        impact: "中",
                        mitigation: "提前资源规划和备选方案"
                      }
                    ]
                  },
                  {
                    category: "业务风险",
                    color: "yellow",
                    icon: "💼",
                    risks: [
                      {
                        risk: "用户接受度低",
                        probability: "40%",
                        impact: "高",
                        mitigation: "充分的用户参与和培训"
                      },
                      {
                        risk: "流程变更阻力",
                        probability: "45%",
                        impact: "中",
                        mitigation: "变革管理和激励机制"
                      },
                      {
                        risk: "业务中断",
                        probability: "20%",
                        impact: "高",
                        mitigation: "分阶段实施和回滚计划"
                      }
                    ]
                  }
                ].map((category) => (
                  <div key={category.category} className={`border border-${category.color}-200 rounded-lg p-6 bg-${category.color}-50`}>
                    <h4 className={`text-lg font-semibold text-${category.color}-900 mb-4 flex items-center`}>
                      <span className={`bg-${category.color}-200 rounded-full p-2 mr-3`}>
                        {category.icon}
                      </span>
                      {category.category}
                    </h4>
                    <div className="space-y-4">
                      {category.risks.map((risk, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="grid md:grid-cols-4 gap-4 items-center">
                            <div>
                              <h5 className="font-medium text-gray-900">{risk.risk}</h5>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-600 mb-1">发生概率</div>
                              <div className="font-medium">{risk.probability}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-gray-600 mb-1">影响程度</div>
                              <div className={`font-medium ${risk.impact === '高' ? 'text-red-600' : 'text-orange-600'}`}>
                                {risk.impact}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600 mb-1">缓解措施</div>
                              <div className="text-xs text-gray-700">{risk.mitigation}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">风险调整ROI计算</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">蒙特卡洛模拟</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    通过随机模拟不同情景下的ROI分布，获得更全面的风险评估。
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">模拟结果示例</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>乐观情况 (20%概率):</span>
                        <span className="font-medium text-green-600">ROI &gt; 300%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>基准情况 (60%概率):</span>
                        <span className="font-medium text-blue-600">ROI 150-300%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>悲观情况 (20%概率):</span>
                        <span className="font-medium text-orange-600">ROI &lt; 150%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">敏感性分析</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    分析关键变量变化对ROI的影响程度，识别最敏感的风险因素。
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-medium text-gray-900 mb-2">敏感度排序</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>实施成本 (+20%):</span>
                        <span className="font-medium text-red-600">ROI -35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>收益实现 (-20%):</span>
                        <span className="font-medium text-orange-600">ROI -40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>实施周期 (+6个月):</span>
                        <span className="font-medium text-yellow-600">ROI -15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3">⚠️ 风险控制建议</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-red-800">
                  <div>
                    <h5 className="font-medium mb-2">事前控制</h5>
                    <ul className="space-y-1">
                      <li>• 设置风险缓冲：成本+20%，收益-15%</li>
                      <li>• 分阶段实施，降低单次风险</li>
                      <li>• 建立详细的风险监控机制</li>
                      <li>• 制定应急预案和回滚方案</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">过程控制</h5>
                    <ul className="space-y-1">
                      <li>• 定期评估和调整ROI预期</li>
                      <li>• 建立项目预警机制</li>
                      <li>• 及时沟通和决策调整</li>
                      <li>• 持续优化和改进</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div id="decision" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. 投资决策框架</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                基于ROI分析结果，建立科学的投资决策框架，
                帮助企业在多个自动化项目中进行优先级排序和资源分配。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">多维度评估矩阵</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">投资优先级矩阵</h4>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center font-medium">高ROI</div>
                      <div className="bg-green-200 p-2 rounded text-center">立即执行</div>
                      <div className="bg-yellow-200 p-2 rounded text-center">优先考虑</div>
                      <div className="text-center font-medium">中ROI</div>
                      <div className="bg-yellow-200 p-2 rounded text-center">评估执行</div>
                      <div className="bg-orange-200 p-2 rounded text-center">延后执行</div>
                      <div className="text-center font-medium">低ROI</div>
                      <div className="bg-orange-200 p-2 rounded text-center">谨慎评估</div>
                      <div className="bg-red-200 p-2 rounded text-center">暂不执行</div>
                      <div></div>
                      <div className="text-center font-medium text-xs">低风险</div>
                      <div className="text-center font-medium text-xs">高风险</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    结合ROI水平和风险程度，确定项目优先级
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">综合评分标准</h4>
                  <div className="space-y-3">
                    {[
                      { factor: "财务回报", weight: "30%", description: "ROI、NPV、回收期" },
                      { factor: "战略价值", weight: "25%", description: "竞争优势、创新能力" },
                      { factor: "实施风险", weight: "20%", description: "技术、组织、业务风险" },
                      { factor: "资源需求", weight: "15%", description: "人力、资金、时间投入" },
                      { factor: "紧急程度", weight: "10%", description: "业务紧迫性、市场压力" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-20 text-gray-600">{item.weight}</div>
                        <div className="w-24 font-medium">{item.factor}</div>
                        <div className="text-gray-600">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">决策流程和工具</h3>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">阶段化决策流程</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    {[
                      {
                        stage: "初筛",
                        criteria: "基础ROI > 150%",
                        action: "值得深入分析",
                        color: "blue"
                      },
                      {
                        stage: "评估",
                        criteria: "综合评分 > 70分",
                        action: "制定详细方案",
                        color: "green"
                      },
                      {
                        stage: "决策",
                        criteria: "管理层审批",
                        action: "资源分配和启动",
                        color: "purple"
                      },
                      {
                        stage: "监控",
                        criteria: "ROI跟踪",
                        action: "持续优化调整",
                        color: "orange"
                      }
                    ].map((phase) => (
                      <div key={phase.stage} className={`bg-${phase.color}-50 border border-${phase.color}-200 p-4 rounded-lg text-center`}>
                        <h5 className={`font-medium text-${phase.color}-900 mb-2`}>{phase.stage}</h5>
                        <div className={`text-xs text-${phase.color}-800 mb-2`}>{phase.criteria}</div>
                        <div className={`text-xs text-${phase.color}-700`}>{phase.action}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">项目组合管理</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">平衡原则</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• 短期收益 vs 长期价值</li>
                        <li>• 高确定性 vs 高潜力项目</li>
                        <li>• 技术创新 vs 流程优化</li>
                        <li>• 不同业务部门需求</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">资源分配策略</h5>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• 70% 确定性高的项目</li>
                        <li>• 20% 创新性项目</li>
                        <li>• 10% 试验性项目</li>
                        <li>• 预留风险缓冲资源</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">✅ 决策检查清单</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-green-800">
                  <div>
                    <h5 className="font-medium mb-2">财务检查</h5>
                    <label className="flex items-center mb-1">
                      <input type="checkbox" className="mr-2" />
                      ROI计算方法和假设清晰
                    </label>
                    <label className="flex items-center mb-1">
                      <input type="checkbox" className="mr-2" />
                      成本和收益估算保守合理
                    </label>
                    <label className="flex items-center mb-1">
                      <input type="checkbox" className="mr-2" />
                      考虑了所有相关成本
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      风险因素得到充分评估
                    </label>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">实施检查</h5>
                    <label className="flex items-center mb-1">
                      <input type="checkbox" className="mr-2" />
                      技术方案可行性确认
                    </label>
                    <label className="flex items-center mb-1">
                      <input type="checkbox" className="mr-2" />
                      资源和时间安排合理
                    </label>
                    <label className="flex items-center mb-1">
                      <input type="checkbox" className="mr-2" />
                      变革管理计划完整
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      成功标准和监控机制明确
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools and Templates */}
            <div id="tools" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. 实用工具和模板</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                为了帮助您更好地进行ROI分析，我们提供了一系列实用的工具和模板。
                这些资源基于最佳实践，可以直接应用到您的项目中。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  {[
                    {
                      title: "ROI计算表格",
                      description: "完整的Excel模板，包含所有计算公式和示例数据",
                      features: ["成本分解模板", "收益量化工具", "敏感性分析", "风险调整计算"],
                      type: "Excel模板"
                    },
                    {
                      title: "项目评估表单",
                      description: "标准化的项目评估表单，帮助收集和整理项目信息",
                      features: ["基础信息收集", "成本收益分析", "风险评估矩阵", "决策建议"],
                      type: "Word文档"
                    }
                  ].map((tool, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{tool.title}</h4>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tool.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">包含功能：</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <span className="text-green-500 mr-2">✓</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        📥 下载模板
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "在线ROI计算器",
                      description: "交互式在线工具，实时计算和分析自动化项目ROI",
                      features: ["即时计算结果", "图表可视化", "情景分析", "结果导出"],
                      type: "在线工具"
                    },
                    {
                      title: "行业基准数据库",
                      description: "不同行业的ROI基准数据和最佳实践案例",
                      features: ["行业对比数据", "成功案例库", "失败教训分析", "趋势预测"],
                      type: "数据库"
                    }
                  ].map((tool, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{tool.title}</h4>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tool.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 mb-2">主要特性：</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {tool.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <span className="text-green-500 mr-2">✓</span>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={index === 0 ? "/tools/roi-calculator" : "/resources/case-studies"}
                        className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium text-center"
                      >
                        🚀 立即使用
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🛠️ 工具使用指南</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">第一步：数据收集</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 使用评估表单收集基础数据</li>
                      <li>• 参考行业基准设定目标</li>
                      <li>• 确保数据的准确性和完整性</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">第二步：计算分析</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 使用Excel模板详细计算</li>
                      <li>• 用在线工具验证结果</li>
                      <li>• 进行敏感性和风险分析</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">第三步：决策支持</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 生成专业的分析报告</li>
                      <li>• 制作决策支持材料</li>
                      <li>• 建立监控和跟踪机制</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            立即开始您的ROI分析
          </h2>
          <p className="text-xl mb-8 text-green-100">
            使用我们的专业工具，准确计算自动化项目的投资回报率
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              🧮 使用ROI计算器
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              📥 下载分析模板
            </button>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">相关推荐资源</h2>
            <p className="text-xl text-gray-600">深入了解自动化投资的方方面面</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "入门指南",
                title: "企业自动化入门完整指南",
                description: "从零开始学习企业自动化的基础知识和实施步骤",
                href: "/resources/guides/automation-getting-started",
                icon: "📚"
              },
              {
                type: "工具选择",
                title: "自动化工具选择决策指南",
                description: "科学的工具评估框架和选择建议",
                href: "/resources/guides/tool-selection",
                icon: "🔧"
              },
              {
                type: "成功案例",
                title: "行业成功案例研究",
                description: "真实的ROI实现案例和经验分享",
                href: "/resources/case-studies",
                icon: "🏆"
              }
            ].map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <div className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full inline-block mb-3">
                  {resource.type}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}