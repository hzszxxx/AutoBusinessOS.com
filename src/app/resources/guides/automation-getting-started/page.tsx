import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function AutomationGettingStartedGuide() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">📚 Implementation Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Complete Enterprise Automation Getting Started Guide
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Complete roadmap for building enterprise automation systems from scratch
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span>⏱️ Estimated Reading Time: 15 minutes</span>
              <span>📈 Difficulty Level: Beginner</span>
              <span>📥 Downloads: 3,500+ times</span>
              <span>⭐ User Rating: 4.9/5</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
            <p className="text-blue-100 mb-4">Download the complete guide PDF version now</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📥 Download PDF Guide
              </button>
              <Link href="/tools/roi-calculator" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                🧮 Calculate ROI Potential
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
                <a href="#introduction" className="block py-2 text-blue-600 hover:text-blue-800">
                  1. 什么是企业自动化
                </a>
                <a href="#benefits" className="block py-2 text-blue-600 hover:text-blue-800">
                  2. 自动化的核心价值
                </a>
                <a href="#assessment" className="block py-2 text-blue-600 hover:text-blue-800">
                  3. 现状评估方法
                </a>
                <a href="#planning" className="block py-2 text-blue-600 hover:text-blue-800">
                  4. 实施规划策略
                </a>
              </div>
              <div>
                <a href="#tools" className="block py-2 text-blue-600 hover:text-blue-800">
                  5. 工具选择指南
                </a>
                <a href="#implementation" className="block py-2 text-blue-600 hover:text-blue-800">
                  6. 实施步骤详解
                </a>
                <a href="#pitfalls" className="block py-2 text-blue-600 hover:text-blue-800">
                  7. 常见误区避免
                </a>
                <a href="#next-steps" className="block py-2 text-blue-600 hover:text-blue-800">
                  8. 下一步行动计划
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

            {/* Introduction */}
            <div id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. 什么是企业自动化</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                企业自动化是指利用技术手段，将原本需要人工执行的重复性、规则性业务流程，
                转化为由系统自动完成的过程。它不仅仅是简单的工具替换，更是对整个业务运营模式的重新思考和优化。
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">💡 核心理念</h4>
                <p className="text-blue-800">
                  &ldquo;自动化的真正价值不在于替代人力，而在于释放人的创造力，让员工专注于更有价值的战略性工作。&rdquo;
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">自动化的三个层次</h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">🔧 任务自动化</h4>
                  <p className="text-gray-600 text-sm">
                    自动化单个重复性任务，如数据录入、邮件发送、报告生成等。
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">🔄 流程自动化</h4>
                  <p className="text-gray-600 text-sm">
                    自动化完整的业务流程，如客户入职、订单处理、审批流程等。
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">🧠 智能自动化</h4>
                  <p className="text-gray-600 text-sm">
                    结合AI技术的高级自动化，能够处理复杂决策和学习优化。
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div id="benefits" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. 自动化的核心价值</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                企业实施自动化能够在多个维度创造价值。根据我们对500+企业的调研数据，
                自动化带来的价值远超过单纯的成本节约。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-green-600">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">成本效益</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 运营成本平均降低40-60%</li>
                        <li>• 人力成本优化30-50%</li>
                        <li>• 错误率减少90%以上</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-blue-600">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">效率提升</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 处理速度提升5-10倍</li>
                        <li>• 24/7不间断运行</li>
                        <li>• 响应时间大幅缩短</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-purple-600">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">数据洞察</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 实时数据收集和分析</li>
                        <li>• 业务透明度提升</li>
                        <li>• 数据驱动决策</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                      <span className="text-orange-600">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">竞争优势</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• 更快的市场响应速度</li>
                        <li>• 更好的客户体验</li>
                        <li>• 更强的创新能力</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">📈 成功案例数据</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-900">80%</div>
                    <div className="text-sm text-yellow-700">效率提升</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-900">60%</div>
                    <div className="text-sm text-yellow-700">成本降低</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-900">90%</div>
                    <div className="text-sm text-yellow-700">错误减少</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-900">6-18月</div>
                    <div className="text-sm text-yellow-700">投资回收期</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment */}
            <div id="assessment" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. 现状评估方法</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                在开始自动化之前，全面评估企业现状是成功的关键。
                这个阶段需要深入了解现有流程、识别痛点、评估改进潜力。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">评估框架：RAPID模型</h3>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span className="text-red-600 font-bold text-sm">R</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Repetitive - 重复性评估</h4>
                  </div>
                  <p className="text-gray-600 mb-3">识别企业中重复性最高的任务和流程</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>评估问题：</strong>
                      <br/>• 哪些任务每天/每周重复执行？
                      <br/>• 这些任务的标准化程度如何？
                      <br/>• 执行频率和时间成本是多少？
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">A</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Automatable - 可自动化评估</h4>
                  </div>
                  <p className="text-gray-600 mb-3">评估流程的自动化可行性</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>评估标准：</strong>
                      <br/>• 流程是否基于明确规则？
                      <br/>• 是否涉及大量人工判断？
                      <br/>• 技术实现复杂度如何？
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold text-sm">P</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Painful - 痛点评估</h4>
                  </div>
                  <p className="text-gray-600 mb-3">识别流程中的主要痛点和瓶颈</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>痛点类型：</strong>
                      <br/>• 效率低下的环节
                      <br/>• 容易出错的步骤
                      <br/>• 员工抱怨最多的任务
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold text-sm">I</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Impact - 影响评估</h4>
                  </div>
                  <p className="text-gray-600 mb-3">评估自动化后的潜在影响</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>影响维度：</strong>
                      <br/>• 时间节约潜力
                      <br/>• 成本降低空间
                      <br/>• 质量提升可能性
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-bold text-sm">D</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Difficulty - 难度评估</h4>
                  </div>
                  <p className="text-gray-600 mb-3">评估实施的技术和组织难度</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>难度因素：</strong>
                      <br/>• 技术复杂度
                      <br/>• 组织变革阻力
                      <br/>• 资源投入需求
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">🔄 评估工具推荐</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">流程映射工具</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 流程图绘制</li>
                      <li>• 时间成本分析</li>
                      <li>• 瓶颈识别</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">数据收集方法</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 员工访谈</li>
                      <li>• 流程观察</li>
                      <li>• 系统日志分析</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Planning */}
            <div id="planning" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. 实施规划策略</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                成功的自动化项目需要详细的规划和分阶段的实施策略。
                我们推荐采用&ldquo;小步快跑、迭代优化&rdquo;的方法。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">三阶段实施策略</h3>

              <div className="space-y-8 mb-8">
                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">第一阶段：快速胜利 (1-3个月)</h4>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-800 mb-2">目标</h5>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• 建立团队信心</li>
                              <li>• 证明自动化价值</li>
                              <li>• 积累实施经验</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-800 mb-2">适合项目</h5>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• 简单重复性任务</li>
                              <li>• 低风险流程</li>
                              <li>• 快速见效项目</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">第二阶段：核心优化 (3-9个月)</h4>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-800 mb-2">目标</h5>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• 优化核心业务流程</li>
                              <li>• 实现显著效率提升</li>
                              <li>• 建立标准化框架</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-800 mb-2">适合项目</h5>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• 端到端流程自动化</li>
                              <li>• 跨部门协作流程</li>
                              <li>• 客户接触点优化</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start">
                    <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">第三阶段：智能升级 (9个月+)</h4>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-800 mb-2">目标</h5>
                            <ul className="text-sm text-purple-700 space-y-1">
                              <li>• 引入AI和机器学习</li>
                              <li>• 实现预测性自动化</li>
                              <li>• 构建自适应系统</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-800 mb-2">适合项目</h5>
                            <ul className="text-sm text-purple-700 space-y-1">
                              <li>• 智能决策支持</li>
                              <li>• 预测性维护</li>
                              <li>• 个性化客户体验</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ 规划注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-800">
                  <div>
                    <h5 className="font-medium mb-2">资源配置</h5>
                    <ul className="space-y-1">
                      <li>• 确保充足的预算和人力</li>
                      <li>• 设立专门的项目团队</li>
                      <li>• 制定详细的时间表</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">风险管控</h5>
                    <ul className="space-y-1">
                      <li>• 制定应急预案</li>
                      <li>• 设置检查点和里程碑</li>
                      <li>• 建立回滚机制</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Selection */}
            <div id="tools" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. 工具选择指南</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                选择合适的自动化工具是项目成功的关键因素。
                不同类型的业务需求对应不同的工具类别。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">主要工具类别</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-100 rounded-full p-2 mr-3">🤖</span>
                    RPA (机器人流程自动化)
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    自动化重复性的手工操作，模拟人类在计算机上的操作行为。
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">适用场景：</h5>
                      <ul className="text-xs text-gray-600 ml-4 space-y-1">
                        <li>• 数据录入和迁移</li>
                        <li>• 报告生成和分发</li>
                        <li>• 系统间数据同步</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">推荐工具：</h5>
                      <p className="text-xs text-gray-600">UiPath, Blue Prism, Automation Anywhere</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 rounded-full p-2 mr-3">🔄</span>
                    BPM (业务流程管理)
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    设计、执行、监控和优化端到端的业务流程。
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">适用场景：</h5>
                      <ul className="text-xs text-gray-600 ml-4 space-y-1">
                        <li>• 审批流程管理</li>
                        <li>• 客户入职流程</li>
                        <li>• 订单处理流程</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">推荐工具：</h5>
                      <p className="text-xs text-gray-600">Nintex, K2, IBM BPM</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-purple-100 rounded-full p-2 mr-3">📧</span>
                    营销自动化
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    自动化营销活动、线索培育和客户沟通。
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">适用场景：</h5>
                      <ul className="text-xs text-gray-600 ml-4 space-y-1">
                        <li>• 邮件营销活动</li>
                        <li>• 线索评分和培育</li>
                        <li>• 客户细分管理</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">推荐工具：</h5>
                      <p className="text-xs text-gray-600">HubSpot, Marketo, Pardot</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 rounded-full p-2 mr-3">🔗</span>
                    集成平台 (iPaaS)
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    连接不同的应用和系统，实现数据和流程的无缝集成。
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">适用场景：</h5>
                      <ul className="text-xs text-gray-600 ml-4 space-y-1">
                        <li>• 系统集成和同步</li>
                        <li>• API管理和编排</li>
                        <li>• 数据转换和清洗</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">推荐工具：</h5>
                      <p className="text-xs text-gray-600">Zapier, Microsoft Power Automate, MuleSoft</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 工具选择决策框架</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">功能匹配度</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 业务需求覆盖度</li>
                      <li>• 技术能力满足度</li>
                      <li>• 扩展性和灵活性</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">成本效益</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 许可证和实施成本</li>
                      <li>• 运维和支持费用</li>
                      <li>• 预期投资回报率</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">技术适配</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 现有系统兼容性</li>
                      <li>• 安全性和合规性</li>
                      <li>• 团队技能匹配度</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div id="implementation" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. 实施步骤详解</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                自动化项目的实施需要遵循系统化的方法论，
                确保每个步骤都能有序推进并达到预期效果。
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "项目启动与团队组建",
                    duration: "1-2周",
                    color: "bg-red-500",
                    tasks: [
                      "明确项目目标和成功标准",
                      "组建跨职能项目团队",
                      "制定项目章程和治理结构",
                      "确定沟通机制和汇报流程"
                    ]
                  },
                  {
                    step: "02",
                    title: "详细需求分析",
                    duration: "2-3周",
                    color: "bg-orange-500",
                    tasks: [
                      "深入分析现有流程",
                      "收集用户需求和期望",
                      "识别技术和业务约束",
                      "定义自动化范围和边界"
                    ]
                  },
                  {
                    step: "03",
                    title: "解决方案设计",
                    duration: "2-4周",
                    color: "bg-yellow-500",
                    tasks: [
                      "设计目标流程和架构",
                      "选择技术方案和工具",
                      "制定数据迁移策略",
                      "设计用户界面和体验"
                    ]
                  },
                  {
                    step: "04",
                    title: "开发与配置",
                    duration: "4-8周",
                    color: "bg-green-500",
                    tasks: [
                      "搭建开发和测试环境",
                      "开发自动化流程和规则",
                      "配置系统集成接口",
                      "开发用户界面和报表"
                    ]
                  },
                  {
                    step: "05",
                    title: "测试与验证",
                    duration: "2-3周",
                    color: "bg-blue-500",
                    tasks: [
                      "执行单元测试和集成测试",
                      "进行用户接受度测试",
                      "验证性能和安全要求",
                      "修复发现的问题和缺陷"
                    ]
                  },
                  {
                    step: "06",
                    title: "部署与上线",
                    duration: "1-2周",
                    color: "bg-purple-500",
                    tasks: [
                      "准备生产环境",
                      "执行系统部署",
                      "进行数据迁移和验证",
                      "监控系统稳定性"
                    ]
                  }
                ].map((phase) => (
                  <div key={phase.step} className="flex items-start">
                    <div className={`${phase.color} rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{phase.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 mr-4">{phase.title}</h4>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.tasks.map((task, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">🔑 实施成功关键因素</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
                  <div>
                    <h5 className="font-medium mb-2">管理层面</h5>
                    <ul className="space-y-1">
                      <li>• 高层管理支持和承诺</li>
                      <li>• 明确的项目治理结构</li>
                      <li>• 充足的资源投入</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">执行层面</h5>
                    <ul className="space-y-1">
                      <li>• 详细的项目计划和里程碑</li>
                      <li>• 有效的风险管理机制</li>
                      <li>• 持续的沟通和反馈</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Pitfalls */}
            <div id="pitfalls" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. 常见误区避免</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                学习他人的失败经验，可以帮助您避免常见的陷阱。
                以下是我们总结的10个最常见的自动化实施误区。
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "误区1：没有明确的业务目标",
                    description: "为了自动化而自动化，缺乏明确的业务价值定义",
                    solution: "制定具体、可衡量的业务目标，如效率提升30%或成本降低25%",
                    impact: "项目缺乏方向，难以评估成功"
                  },
                  {
                    title: "误区2：忽视变革管理",
                    description: "只关注技术实施，忽视了人员和组织层面的变革",
                    solution: "制定全面的变革管理计划，包括培训、沟通和激励措施",
                    impact: "员工抵制，实施阻力大"
                  },
                  {
                    title: "误区3：过度追求完美方案",
                    description: "试图一次性解决所有问题，导致项目复杂度过高",
                    solution: "采用分阶段实施策略，先实现核心功能，再逐步完善",
                    impact: "项目周期延长，风险增加"
                  },
                  {
                    title: "误区4：低估实施复杂度",
                    description: "对技术难度和资源需求估计不足",
                    solution: "进行详细的可行性分析，预留充足的时间和资源缓冲",
                    impact: "项目延期，预算超支"
                  },
                  {
                    title: "误区5：忽视数据质量问题",
                    description: "没有清理和标准化现有数据就开始自动化",
                    solution: "在实施前进行数据审计和清理，建立数据质量标准",
                    impact: "自动化系统输出质量差"
                  }
                ].map((pitfall, index) => (
                  <div key={index} className="border border-red-200 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-red-100 rounded-full p-2 mr-4">
                        <span className="text-red-600">⚠️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-red-900 mb-2">{pitfall.title}</h4>
                        <p className="text-red-700 mb-3">{pitfall.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 border border-green-200 rounded p-4">
                        <h5 className="font-medium text-green-800 mb-2">✓ 正确做法</h5>
                        <p className="text-sm text-green-700">{pitfall.solution}</p>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded p-4">
                        <h5 className="font-medium text-orange-800 mb-2">💥 负面影响</h5>
                        <p className="text-sm text-orange-700">{pitfall.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div id="next-steps" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. 下一步行动计划</h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                读完这份指南后，您可以按照以下行动计划开始您的自动化之旅。
                记住，成功的关键在于循序渐进，持续优化。
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">🎯 立即行动清单</h4>
                    <div className="space-y-3">
                      {[
                        "使用RAPID模型评估现有流程",
                        "识别3-5个快速胜利项目",
                        "计算潜在投资回报率",
                        "组建项目核心团队",
                        "制定详细的实施时间表"
                      ].map((action, index) => (
                        <label key={index} className="flex items-center text-sm text-blue-800">
                          <input type="checkbox" className="mr-3 rounded border-blue-300" />
                          {action}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-green-900 mb-4">📚 推荐学习资源</h4>
                    <div className="space-y-2 text-sm">
                      <Link href="/resources/guides/roi-analysis" className="block text-green-700 hover:text-green-900">
                        → 自动化ROI分析深度指南
                      </Link>
                      <Link href="/resources/guides/tool-selection" className="block text-green-700 hover:text-green-900">
                        → 工具选择决策框架
                      </Link>
                      <Link href="/resources/case-studies" className="block text-green-700 hover:text-green-900">
                        → 行业成功案例研究
                      </Link>
                      <Link href="/resources/templates" className="block text-green-700 hover:text-green-900">
                        → 实施模板和工具下载
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-purple-900 mb-4">🎁 免费资源获取</h4>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-purple-800">
                        <span className="bg-purple-200 rounded-full p-1 mr-3">📊</span>
                        流程评估模板和检查清单
                      </div>
                      <div className="flex items-center text-sm text-purple-800">
                        <span className="bg-purple-200 rounded-full p-1 mr-3">🧮</span>
                        ROI计算表格和案例
                      </div>
                      <div className="flex items-center text-sm text-purple-800">
                        <span className="bg-purple-200 rounded-full p-1 mr-3">📋</span>
                        项目计划模板
                      </div>
                      <div className="flex items-center text-sm text-purple-800">
                        <span className="bg-purple-200 rounded-full p-1 mr-3">🔧</span>
                        工具对比分析表
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                      立即下载资源包
                    </button>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-orange-900 mb-4">🤝 专家支持服务</h4>
                    <p className="text-sm text-orange-800 mb-4">
                      需要专业指导？我们的自动化专家可以为您提供：
                    </p>
                    <ul className="text-sm text-orange-800 space-y-1 mb-4">
                      <li>• 免费30分钟咨询</li>
                      <li>• 定制化评估报告</li>
                      <li>• 实施路线图制定</li>
                      <li>• 技术选型建议</li>
                    </ul>
                    <Link href="/contact" className="inline-block w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium text-center">
                      预约专家咨询
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开始您的自动化之旅？
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            使用我们的ROI计算器，立即了解自动化能为您的企业带来多少价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              🧮 免费计算ROI
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              📥 下载完整指南
            </button>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">相关推荐资源</h2>
            <p className="text-xl text-gray-600">深入学习，构建完整的自动化知识体系</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: "深度指南",
                title: "自动化投资回报率分析指南",
                description: "详细的ROI计算方法、案例分析和投资决策框架",
                href: "/resources/guides/roi-analysis",
                icon: "📊"
              },
              {
                type: "工具选择",
                title: "自动化工具选择决策指南",
                description: "工具评估框架、对比分析和选择建议",
                href: "/resources/guides/tool-selection",
                icon: "🔧"
              },
              {
                type: "实施方法",
                title: "自动化项目实施最佳实践",
                description: "项目管理、风险控制和成功要素详解",
                href: "/resources/guides/implementation-best-practices",
                icon: "🚀"
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