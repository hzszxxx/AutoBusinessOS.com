import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function TemplatesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Practical Templates</span> Download Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Professional templates and tools to accelerate your automation project implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                📥 Download Popular Templates
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block"
              >
                Customize Exclusive Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Template Category Navigation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional templates covering the full lifecycle of automation projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Assessment & Analysis",
                icon: "📊",
                count: "8 Templates",
                description: "Current state assessment, ROI analysis, risk assessment",
                color: "blue",
                templates: ["Business Process Assessment Form", "ROI Calculation Spreadsheet", "Risk Assessment Matrix"]
              },
              {
                category: "Project Management",
                icon: "📋",
                count: "12 Templates",
                description: "Project planning, progress tracking, team management",
                color: "green",
                templates: ["Project Plan Template", "Milestone Tracking Sheet", "Team Role Chart"]
              },
              {
                category: "Technical Implementation",
                icon: "⚙️",
                count: "10 Templates",
                description: "Technical solutions, system design, test planning",
                color: "purple",
                templates: ["Technical Architecture Diagram", "Test Case Sheet", "Deployment Checklist"]
              },
              {
                category: "培训管理",
                icon: "🎓",
                count: "6个模板",
                description: "培训计划、考核标准、知识库",
                color: "orange",
                templates: ["培训计划表", "技能评估表", "操作手册"]
              }
            ].map((category) => (
              <div key={category.category} className={`bg-${category.color}-50 border-2 border-${category.color}-200 rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                  <div className={`text-sm text-${category.color}-600 font-medium mb-3`}>
                    {category.count}
                  </div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">包含模板：</h4>
                  {category.templates.map((template, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <span className={`text-${category.color}-500 mr-2`}>•</span>
                      {template}
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className={`bg-${category.color}-600 text-white px-4 py-2 rounded-lg hover:bg-${category.color}-700 transition-colors text-sm font-medium w-full`}>
                    浏览模板
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              热门下载模板
            </h2>
            <p className="text-xl text-gray-600">
              最受欢迎和最实用的专业模板
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "企业自动化现状评估表",
                category: "评估分析",
                format: "Excel",
                size: "2.5MB",
                downloads: "5,600+",
                rating: "4.9",
                description: "全面评估企业当前自动化水平，识别改进机会和优先级",
                features: [
                  "RAPID评估框架",
                  "自动评分系统",
                  "改进建议输出",
                  "行业基准对比"
                ],
                preview: "/api/templates/preview/assessment.jpg",
                badge: "🔥 最热门"
              },
              {
                title: "ROI投资回报率计算器",
                category: "评估分析",
                format: "Excel",
                size: "1.8MB",
                downloads: "4,200+",
                rating: "4.8",
                description: "专业的ROI计算模板，包含成本效益分析和风险评估",
                features: [
                  "动态ROI计算",
                  "敏感性分析",
                  "风险调整模型",
                  "图表可视化"
                ],
                preview: "/api/templates/preview/roi.jpg",
                badge: "⭐ 专业推荐"
              },
              {
                title: "自动化项目实施计划模板",
                category: "项目管理",
                format: "Excel + Word",
                size: "3.2MB",
                downloads: "3,800+",
                rating: "4.7",
                description: "详细的项目实施计划，包含时间表、资源分配和里程碑",
                features: [
                  "甘特图时间表",
                  "资源分配表",
                  "风险管控计划",
                  "进度跟踪表"
                ],
                preview: "/api/templates/preview/project.jpg",
                badge: "📋 管理必备"
              },
              {
                title: "工具选择对比分析表",
                category: "技术实施",
                format: "Excel",
                size: "1.5MB",
                downloads: "3,500+",
                rating: "4.6",
                description: "系统化的工具评估框架，帮助选择最适合的自动化工具",
                features: [
                  "多维度评估",
                  "权重自定义",
                  "评分可视化",
                  "决策建议"
                ],
                preview: "/api/templates/preview/tools.jpg",
                badge: "🔧 技术专用"
              },
              {
                title: "员工培训计划模板",
                category: "培训管理",
                format: "PowerPoint + Word",
                size: "4.1MB",
                downloads: "2,900+",
                rating: "4.5",
                description: "完整的员工培训体系，包含课程设计和考核标准",
                features: [
                  "分级培训体系",
                  "课程大纲模板",
                  "考核评估表",
                  "证书模板"
                ],
                preview: "/api/templates/preview/training.jpg",
                badge: "🎓 HR专用"
              },
              {
                title: "业务流程优化工作坊工具包",
                category: "评估分析",
                format: "PowerPoint + PDF",
                size: "5.6MB",
                downloads: "2,700+",
                rating: "4.8",
                description: "引导业务流程分析和优化的完整工具包",
                features: [
                  "工作坊议程",
                  "分析工具模板",
                  "优化方法指南",
                  "成果输出模板"
                ],
                preview: "/api/templates/preview/workshop.jpg",
                badge: "🛠️ 顾问专用"
              }
            ].map((template, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {template.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      {template.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {template.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {template.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-xs text-gray-600">
                          <span className="text-green-500 mr-1">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                      <div>
                        <span className="font-medium">Format:</span> {template.format}
                      </div>
                      <div>
                        <span className="font-medium">Size:</span> {template.size}
                      </div>
                      <div>
                        <span className="font-medium">Downloads:</span> {template.downloads}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">Rating:</span>
                        <span className="text-yellow-500">⭐</span>
                        <span className="ml-1">{template.rating}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                        Free Download
                      </button>
                      <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Bundles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              模板套装包
            </h2>
            <p className="text-xl text-gray-600">
              精心组合的模板套装，满足特定场景需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "项目经理完整工具包",
                description: "专为自动化项目经理设计的全套管理模板",
                price: "免费",
                originalPrice: "￥299",
                templates: 15,
                downloads: "8,500+",
                includes: [
                  "项目启动包（5个模板）",
                  "进度管理包（4个模板）",
                  "风险管控包（3个模板）",
                  "团队管理包（3个模板）"
                ],
                features: [
                  "完整项目生命周期覆盖",
                  "专业PM最佳实践",
                  "可定制化设计",
                  "持续更新维护"
                ],
                highlight: "🎯 项目经理首选"
              },
              {
                name: "企业决策者分析套装",
                description: "为企业高管和决策者提供的分析决策工具",
                price: "免费",
                originalPrice: "￥199",
                templates: 8,
                downloads: "6,200+",
                includes: [
                  "ROI分析工具包（3个模板）",
                  "风险评估包（2个模板）",
                  "市场分析包（2个模板）",
                  "决策支持包（1个模板）"
                ],
                features: [
                  "科学决策支持",
                  "数据驱动分析",
                  "直观可视化",
                  "高管友好设计"
                ],
                highlight: "👔 高管专用"
              }
            ].map((bundle, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                    {bundle.highlight}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                  <p className="text-gray-600">{bundle.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-orange-600">{bundle.price}</span>
                    <span className="text-lg text-gray-500 line-through">{bundle.originalPrice}</span>
                  </div>
                  <div className="flex justify-center gap-6 text-sm text-gray-600">
                    <span>{bundle.templates} 个模板</span>
                    <span>{bundle.downloads} 下载</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">包含内容：</h4>
                    <ul className="space-y-2">
                      {bundle.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2">📦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">核心特色：</h4>
                    <ul className="space-y-2">
                      {bundle.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold w-full">
                    立即下载套装
                  </button>
                  <p className="text-xs text-gray-500 mt-2">无需注册，直接下载</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Use Templates
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4 steps to maximize template value for your projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: 1,
                title: "Select Suitable Template",
                description: "Choose the most appropriate template based on your project needs and phase",
                tips: ["Define project goals", "Assess team skills", "Consider industry characteristics"],
                icon: "🎯"
              },
              {
                step: 2,
                title: "Download and Preview",
                description: "Download templates for free, carefully read usage instructions and examples",
                tips: ["Review template structure", "Understand completion requirements", "Prepare relevant data"],
                icon: "📥"
              },
              {
                step: 3,
                title: "Customize and Adjust",
                description: "Adjust template content and format according to actual enterprise situation",
                tips: ["Modify company information", "Adjust evaluation dimensions", "Add special requirements"],
                icon: "✏️"
              },
              {
                step: 4,
                title: "Apply and Optimize",
                description: "Apply templates in actual projects and continuously optimize based on usage results",
                tips: ["Collect usage feedback", "Record improvement points", "Share best practices"],
                icon: "🚀"
              }
            ].map((step) => (
              <div key={step.step} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
                        {step.step}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Points:</h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center text-sm text-gray-600">
                            <span className="text-orange-500 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Templates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Customized Templates?
            </h2>
            <p className="text-xl mb-6 text-orange-100">
              Our expert team can create professional templates tailored for you
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🎨 Personalized Design</h3>
                <p className="text-sm text-orange-100">
                  Customize template styles based on corporate VI and cultural characteristics
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🔧 Function Customization</h3>
                <p className="text-sm text-orange-100">
                  Develop exclusive functions for special business needs
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">📞 Professional Support</h3>
                <p className="text-sm text-orange-100">
                  Provide usage training and technical support services
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Consult Custom Services
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                View Custom Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about template downloads and usage
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Are templates completely free?",
                answer: "Yes, all templates we provide are completely free with no registration or payment required. We believe that by sharing quality resources, we can help more enterprises successfully implement automation projects."
              },
              {
                question: "What software formats do templates support?",
                answer: "Our templates primarily support Microsoft Office suite (Word, Excel, PowerPoint) and Google Workspace. All templates have undergone compatibility testing to ensure they work properly in common office software."
              },
              {
                question: "Can templates be modified?",
                answer: "Absolutely! We encourage users to customize templates according to their needs. Templates are designed with flexibility in mind, allowing you to adjust content, format, and styles to fit your enterprise requirements."
              },
              {
                question: "How to get template usage support?",
                answer: "Each template includes detailed usage documentation. If you encounter issues, you can contact us through online customer service or email. We also regularly hold template usage training activities."
              },
              {
                question: "Will templates be regularly updated?",
                answer: "Yes, we regularly update templates based on industry best practices and user feedback. Downloaded users will receive update notifications and can get the latest versions for free."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A: {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download Professional Templates Now
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Accelerate your automation project implementation and improve work efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              📥 Browse All Templates
            </button>
            <Link
              href="/tools/roi-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-block"
            >
              🧮 Use ROI Calculator
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}