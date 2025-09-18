import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function ToolSelectionGuide() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-purple-800 bg-opacity-50 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🔧 工具选择</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              自动化工具选择决策指南
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              科学评估，精准选择，让技术为业务赋能
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <span>⏱️ 预计阅读时间：20分钟</span>
              <span>📈 难度级别：中级</span>
              <span>📥 已下载：2,200+ 次</span>
              <span>⭐ 用户评分：4.7/5</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
            <p className="text-purple-100 mb-4">下载工具对比表格和评估框架</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📥 下载选择框架
              </button>
              <Link href="/tools/roi-calculator" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                🧮 计算工具ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              自动化工具全景图
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解不同类型的自动化工具，找到最适合您业务需求的解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "流程自动化",
                icon: "🔄",
                tools: ["RPA工具", "BPM平台", "工作流引擎"],
                useCase: "重复性任务、流程标准化",
                complexity: "中等",
                roi: "3-12个月"
              },
              {
                category: "营销自动化",
                icon: "📧",
                tools: ["营销平台", "CRM系统", "邮件工具"],
                useCase: "线索培育、客户沟通",
                complexity: "简单",
                roi: "2-6个月"
              },
              {
                category: "数据自动化",
                icon: "📊",
                tools: ["ETL工具", "BI平台", "数据管道"],
                useCase: "数据处理、报表生成",
                complexity: "中等",
                roi: "4-10个月"
              },
              {
                category: "智能自动化",
                icon: "🤖",
                tools: ["AI平台", "机器学习", "认知服务"],
                useCase: "智能决策、预测分析",
                complexity: "复杂",
                roi: "6-18个月"
              }
            ].map((category) => (
              <div key={category.category} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">主要工具：</span>
                    <div className="text-gray-600">{category.tools.join(", ")}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">适用场景：</span>
                    <div className="text-gray-600">{category.useCase}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <span className="font-medium text-gray-700">复杂度：</span>
                      <span className="text-gray-600">{category.complexity}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">ROI：</span>
                      <span className="text-gray-600">{category.roi}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Framework */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SMART工具选择框架
            </h2>
            <p className="text-xl text-gray-600">
              基于业务需求的科学决策方法
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                letter: "S",
                word: "Specific",
                title: "具体需求分析",
                description: "明确定义要解决的具体业务问题和目标",
                questions: [
                  "要自动化的具体流程是什么？",
                  "涉及哪些系统和数据？",
                  "期望达到什么效果？",
                  "有哪些约束条件？"
                ]
              },
              {
                letter: "M",
                word: "Measurable",
                title: "可量化指标",
                description: "设定清晰的成功衡量标准和KPI",
                questions: [
                  "如何量化当前效率？",
                  "目标改进幅度是多少？",
                  "ROI预期是什么？",
                  "如何监控实施效果？"
                ]
              },
              {
                letter: "A",
                word: "Achievable",
                title: "可实现性评估",
                description: "评估技术可行性和组织准备度",
                questions: [
                  "技术复杂度是否匹配？",
                  "团队技能是否足够？",
                  "预算是否充足？",
                  "时间安排是否合理？"
                ]
              },
              {
                letter: "R",
                word: "Relevant",
                title: "相关性匹配",
                description: "确保解决方案与业务战略高度匹配",
                questions: [
                  "是否符合业务战略？",
                  "能否带来竞争优势？",
                  "与现有系统兼容吗？",
                  "支持未来扩展吗？"
                ]
              },
              {
                letter: "T",
                word: "Time-bound",
                title: "时间边界",
                description: "设定明确的实施时间表和里程碑",
                questions: [
                  "实施周期是多长？",
                  "关键里程碑有哪些？",
                  "何时能看到效果？",
                  "如何处理延期风险？"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">{item.letter}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.word} - {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.questions.map((question, qIndex) => (
                        <div key={qIndex} className="flex items-center text-sm text-gray-600">
                          <span className="text-purple-500 mr-2">?</span>
                          {question}
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

      {/* Tool Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              主流工具对比分析
            </h2>
            <p className="text-xl text-gray-600">
              客观对比主流自动化工具的优劣势
            </p>
          </div>

          <div className="space-y-12">
            {/* RPA Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">RPA工具对比</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">工具</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">易用性</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">功能丰富度</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">成本</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">适合场景</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        tool: "UiPath",
                        ease: "⭐⭐⭐⭐",
                        features: "⭐⭐⭐⭐⭐",
                        cost: "高",
                        scenario: "大型企业、复杂流程"
                      },
                      {
                        tool: "Automation Anywhere",
                        ease: "⭐⭐⭐⭐",
                        features: "⭐⭐⭐⭐",
                        cost: "高",
                        scenario: "企业级、云原生"
                      },
                      {
                        tool: "Blue Prism",
                        ease: "⭐⭐⭐",
                        features: "⭐⭐⭐⭐",
                        cost: "高",
                        scenario: "金融、严格合规"
                      },
                      {
                        tool: "Power Automate",
                        ease: "⭐⭐⭐⭐⭐",
                        features: "⭐⭐⭐",
                        cost: "中",
                        scenario: "Microsoft生态、中小企业"
                      }
                    ].map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-200 px-4 py-3 font-medium">{item.tool}</td>
                        <td className="border border-gray-200 px-4 py-3">{item.ease}</td>
                        <td className="border border-gray-200 px-4 py-3">{item.features}</td>
                        <td className="border border-gray-200 px-4 py-3">{item.cost}</td>
                        <td className="border border-gray-200 px-4 py-3 text-sm">{item.scenario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing Automation */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">营销自动化工具对比</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    tool: "HubSpot",
                    pros: ["易于使用", "功能全面", "免费版本", "生态丰富"],
                    cons: ["高级功能付费", "定制化有限"],
                    bestFor: "中小企业、初学者",
                    pricing: "免费-$1,200/月"
                  },
                  {
                    tool: "Marketo",
                    pros: ["功能强大", "B2B专业", "深度分析", "扩展性好"],
                    cons: ["学习曲线陡", "价格较高"],
                    bestFor: "大型B2B企业",
                    pricing: "$1,195-$5,999/月"
                  },
                  {
                    tool: "Pardot",
                    pros: ["Salesforce集成", "B2B导向", "AI支持"],
                    cons: ["依赖Salesforce", "复杂度高"],
                    bestFor: "Salesforce用户",
                    pricing: "$1,250-$4,000/月"
                  }
                ].map((tool) => (
                  <div key={tool.tool} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{tool.tool}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">优势</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {tool.pros.map((pro, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-green-500 mr-2">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-700 mb-2">劣势</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {tool.cons.map((con, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-red-500 mr-2">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">适合对象：</div>
                          <div className="text-gray-600">{tool.bestFor}</div>
                        </div>
                        <div className="text-sm mt-2">
                          <div className="font-medium text-gray-700">价格范围：</div>
                          <div className="text-gray-600">{tool.pricing}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              工具选择决策矩阵
            </h2>
            <p className="text-xl text-gray-600">
              系统化评估和比较不同工具方案
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">评估维度和权重</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">核心评估维度</h4>
                <div className="space-y-3">
                  {[
                    { dimension: "功能匹配度", weight: "25%", description: "满足业务需求的程度" },
                    { dimension: "易用性", weight: "20%", description: "学习和使用的难易程度" },
                    { dimension: "技术架构", weight: "20%", description: "稳定性、扩展性、安全性" },
                    { dimension: "成本效益", weight: "15%", description: "TCO和ROI分析" },
                    { dimension: "厂商实力", weight: "10%", description: "公司背景、支持服务" },
                    { dimension: "生态集成", weight: "10%", description: "与现有系统的集成能力" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-16 text-sm font-medium text-purple-600">{item.weight}</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.dimension}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">评分标准 (1-5分)</h4>
                <div className="space-y-3">
                  {[
                    { score: "5分", description: "完全满足，表现优秀", color: "green" },
                    { score: "4分", description: "基本满足，表现良好", color: "blue" },
                    { score: "3分", description: "部分满足，表现一般", color: "yellow" },
                    { score: "2分", description: "勉强满足，表现不佳", color: "orange" },
                    { score: "1分", description: "不满足，表现很差", color: "red" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-12 h-6 bg-${item.color}-100 text-${item.color}-700 rounded text-center text-sm font-medium mr-3`}>
                        {item.score}
                      </div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">示例评估结果</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2">工具</th>
                      <th className="text-center py-2">功能匹配</th>
                      <th className="text-center py-2">易用性</th>
                      <th className="text-center py-2">技术架构</th>
                      <th className="text-center py-2">成本效益</th>
                      <th className="text-center py-2">厂商实力</th>
                      <th className="text-center py-2">生态集成</th>
                      <th className="text-center py-2 font-medium">总分</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "方案A", scores: [4, 5, 4, 3, 5, 4], total: 4.15 },
                      { tool: "方案B", scores: [5, 3, 5, 4, 4, 3], total: 4.05 },
                      { tool: "方案C", scores: [3, 4, 3, 5, 3, 5], total: 3.65 }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 font-medium">{row.tool}</td>
                        {row.scores.map((score, sIndex) => (
                          <td key={sIndex} className="text-center py-2">{score}</td>
                        ))}
                        <td className="text-center py-2 font-bold text-purple-600">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              工具选择实施步骤
            </h2>
            <p className="text-xl text-gray-600">
              按照这个流程，确保选择最适合的工具
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "需求分析和目标设定",
                duration: "1-2周",
                activities: [
                  "梳理业务流程和痛点",
                  "明确自动化目标和范围",
                  "定义成功标准和KPI",
                  "评估现有技术环境"
                ]
              },
              {
                step: 2,
                title: "市场调研和初筛",
                duration: "1-2周",
                activities: [
                  "收集工具信息和资料",
                  "参加产品演示和展会",
                  "咨询行业专家和同行",
                  "初步筛选候选工具"
                ]
              },
              {
                step: 3,
                title: "深度评估和POC",
                duration: "2-4周",
                activities: [
                  "申请试用账号和环境",
                  "设计POC测试场景",
                  "实际测试工具功能",
                  "评估技术适配性"
                ]
              },
              {
                step: 4,
                title: "商务谈判和选型",
                duration: "2-3周",
                activities: [
                  "获取详细报价信息",
                  "谈判许可和服务条款",
                  "进行最终决策评估",
                  "确定供应商和方案"
                ]
              }
            ].map((phase) => (
              <div key={phase.step} className="flex items-start">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-purple-600 font-bold">{phase.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 mr-4">{phase.title}</h3>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.activities.map((activity, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-purple-500 mr-2">✓</span>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            需要专业的工具选择建议？
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            我们的专家团队可以帮助您进行专业的工具评估和选型
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              咨询选型专家
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              下载评估模板
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}