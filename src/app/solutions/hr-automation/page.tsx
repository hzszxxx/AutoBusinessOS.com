import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Automation Management System - Recruitment Process, Employee Management & Performance Evaluation Automation | AutoBusinessOS',
  description: 'Professional HR solutions featuring recruitment automation, employee lifecycle management, and performance evaluation. Reduce 50% HR workload and drive digital transformation.',
  keywords: 'HR automation, human resources automation, recruitment automation, employee management system',
}

export default function hrautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              HR Automation Management System
              <span className="block text-yellow-300">Recruitment Process, Employee Management & Performance Evaluation Automation</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional HR automation management system solutions that help enterprises achieve efficient and intelligent business process management. Reduce 50% HR workload and improve overall operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tools/roi-calculator"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Calculate ROI Free
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block text-center"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 痛点分析区域 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">人力资源管理痛点分析</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              传统HR管理模式面临效率低、成本高、体验差等多重挑战，亟需数字化转型
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">招聘流程冗长</h3>
              <p className="text-gray-600">
                传统招聘流程复杂，从简历筛选到面试安排平均耗时45天，
                优秀人才流失率高达60%，严重影响企业人才获取效率。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-orange-500 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">员工管理散乱</h3>
              <p className="text-gray-600">
                人事档案管理混乱，员工信息更新滞后，缺乏统一的员工生命周期管理，
                导致管理成本增加35%。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">绩效评估主观</h3>
              <p className="text-gray-600">
                传统绩效评估缺乏客观数据支撑，评估周期长、反馈滞后，
                员工满意度仅为42%，影响团队积极性。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-purple-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Repetitive HR Work</h3>
              <p className="text-gray-600">
                Large amounts of repetitive administrative work occupy 70% of HR personnel time,
                unable to focus on strategic work such as talent development and organizational building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete lifecycle HR automation solutions, from recruitment to departure, providing intelligent human resource management experience
            </p>
          </div>

          <div className="space-y-16">
            {/* Smart Recruitment System */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Recruitment System</h3>
                <p className="text-gray-600 mb-6">
                  基于AI技术的智能简历筛选和候选人匹配系统，自动化面试安排和跟进流程。
                  支持多渠道简历收集，智能推荐最匹配候选人，大幅提升招聘效率。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    AI简历解析和智能匹配，准确率达95%以上
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    自动化面试邀请和日程安排，节省80%协调时间
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    多维度候选人评估，提升招聘决策质量
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">65%</div>
                  <p className="text-gray-600 mb-4">招聘周期缩短</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">95%</div>
                  <p className="text-gray-600">简历匹配准确率</p>
                </div>
              </div>
            </div>

            {/* 员工全生命周期管理 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">统一</div>
                  <p className="text-gray-600 mb-4">员工信息管理</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">90%</div>
                  <p className="text-gray-600">管理效率提升</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">员工全生命周期管理</h3>
                <p className="text-gray-600 mb-6">
                  从入职到离职的完整员工生命周期管理系统。包括员工档案管理、入职流程自动化、
                  培训跟踪、职业发展规划等，实现员工信息的统一管理和流程的标准化。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    数字化入职流程，新员工体验提升75%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    动态员工画像，实时掌握员工状态
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    智能离职预警，降低核心人才流失率
                  </li>
                </ul>
              </div>
            </div>

            {/* 智能绩效评估 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">智能绩效评估系统</h3>
                <p className="text-gray-600 mb-6">
                  基于多维度数据的客观绩效评估体系，支持OKR、KPI等多种评估模式。
                  实时反馈机制和可视化分析，让绩效管理更加科学、透明。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    多维度数据采集，评估结果更客观
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    实时绩效跟踪，及时发现问题和机会
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    智能目标推荐，提升员工发展针对性
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-600 mb-4">员工满意度</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">60%</div>
                  <p className="text-gray-600">评估时间缩短</p>
                </div>
              </div>
            </div>

            {/* 薪酬福利管理 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">精准</div>
                  <p className="text-gray-600 mb-4">薪酬核算</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">99.8%</div>
                  <p className="text-gray-600">计算准确率</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">薪酬福利管理</h3>
                <p className="text-gray-600 mb-6">
                  智能化薪酬计算和福利管理系统，支持复杂薪酬结构和个性化福利方案。
                  自动化考勤统计、社保公积金计算，确保薪酬发放的准确性和合规性。
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    智能薪酬核算，减少99%计算错误
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    弹性福利配置，满足个性化需求
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    合规性监控，自动识别风险点
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
              真实客户案例展示HR自动化系统的显著成效和价值创造
            </p>
          </div>

          <div className="space-y-12">
            {/* 案例1：科技企业 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">科技企业</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">某互联网企业人才管理数字化转型</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该企业员工5000人，年招聘需求2000人次。传统招聘流程繁琐，HR团队压力巨大，
                    优秀候选人流失率高，员工入职体验差，急需数字化解决方案。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">转型前挑战：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 招聘周期平均45天</li>
                        <li>• 候选人流失率60%</li>
                        <li>• HR工作效率低下</li>
                        <li>• 员工入职体验评分3.2</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">转型后效果：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 招聘周期缩短至16天</li>
                        <li>• 候选人流失率降至25%</li>
                        <li>• HR效率提升200%</li>
                        <li>• 入职体验评分提升至4.6</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">65%</div>
                    <p className="text-gray-600 mb-4">招聘周期缩短</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">200%</div>
                    <p className="text-gray-600">HR效率提升</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 案例2：传统制造业 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">制造业</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">传统制造企业绩效管理升级</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    该制造企业员工3000人，传统纸质绩效考核方式效率低下，评估主观性强，
                    员工对绩效结果满意度低，影响团队士气和工作积极性。
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">升级前问题：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 绩效评估周期长达2个月</li>
                        <li>• 员工满意度仅42%</li>
                        <li>• 评估结果主观性强</li>
                        <li>• 人才发展缺乏方向</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">升级后成果：</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 绩效评估缩短至1周</li>
                        <li>• 员工满意度提升至85%</li>
                        <li>• 客观数据支撑决策</li>
                        <li>• 个性化发展路径清晰</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">85%</div>
                    <p className="text-gray-600 mb-4">员工满意度</p>
                    <div className="text-2xl font-bold text-primary-600 mb-2">87.5%</div>
                    <p className="text-gray-600">评估效率提升</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 客户证言 */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <blockquote className="text-xl italic mb-6">
                  &ldquo;HR自动化系统让我们的人力资源管理变得更加智能和高效。招聘周期大幅缩短，
                  员工满意度显著提升，HR团队终于可以专注于战略性工作，为公司创造更大价值。&rdquo;
                </blockquote>
                <cite className="text-primary-100">
                  — 李总 | 某科技企业CHRO
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
              基于最佳实践的五步实施方法论，确保HR自动化项目顺利落地并产生实际效益
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">现状诊断</h3>
              <p className="text-gray-600 text-sm">
                深入调研企业HR管理现状，识别关键痛点和改进机会，制定针对性解决方案
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">流程重塑</h3>
              <p className="text-gray-600 text-sm">
                基于最佳实践重新设计HR流程，优化组织架构和岗位设置，提升管理效率
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">系统实施</h3>
              <p className="text-gray-600 text-sm">
                按阶段部署HR自动化系统，完成数据迁移和系统集成，确保平滑过渡
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">能力建设</h3>
              <p className="text-gray-600 text-sm">
                开展系统性培训和知识转移，提升HR团队数字化能力和系统运营水平
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">持续优化</h3>
              <p className="text-gray-600 text-sm">
                建立持续改进机制，根据业务发展和用户反馈不断优化系统功能和流程
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">关键成功要素</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">战略对齐</h4>
                <p className="text-gray-600 text-sm">确保HR自动化战略与企业整体发展战略高度对齐</p>
              </div>
              <div className="text-center">
                <div className="text-secondary-500 text-3xl mb-3">👥</div>
                <h4 className="font-semibold mb-2">全员参与</h4>
                <p className="text-gray-600 text-sm">建立跨部门协作机制，获得管理层和员工的充分支持</p>
              </div>
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">📈</div>
                <h4 className="font-semibold mb-2">数据驱动</h4>
                <p className="text-gray-600 text-sm">建立完善的数据监控体系，用数据指导决策和改进</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具推荐比较 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">主流HR自动化工具对比</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              综合评估主流HR管理系统，帮助您选择最适合的解决方案
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">功能模块</th>
                  <th className="px-6 py-4 text-center">AutoBusinessOS</th>
                  <th className="px-6 py-4 text-center">传统HRIS</th>
                  <th className="px-6 py-4 text-center">国外SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">智能招聘</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ AI简历匹配</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 基础筛选</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 有限AI功能</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">员工生命周期管理</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 全流程覆盖</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 部分模块</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 功能完整</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">绩效考核</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 智能分析</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 传统评估</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 多维评估</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">移动端体验</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 原生APP</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 体验较差</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ 响应式网页</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">本土化适配</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 完全适配</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ 本土产品</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ 适配不足</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">总拥有成本</td>
                  <td className="px-6 py-4 text-center text-green-600">中等</td>
                  <td className="px-6 py-4 text-center text-red-600">高</td>
                  <td className="px-6 py-4 text-center text-yellow-600">中高</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">选型建议</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-600 mb-3">成长型企业</h4>
                <p className="text-gray-600 text-sm">
                  推荐AutoBusinessOS，功能完整、快速实施、成本可控，
                  满足快速发展期的HR管理需求
                </p>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-secondary-600 mb-3">大型企业</h4>
                <p className="text-gray-600 text-sm">
                  AutoBusinessOS提供企业级功能和个性化定制服务，
                  支持复杂组织架构和业务流程
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-600 mb-3">传统行业</h4>
                <p className="text-gray-600 text-sm">
                  深度理解传统行业特点，提供符合行业规范的
                  HR数字化转型解决方案
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
            准备开始您的HR自动化之旅？
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            使用我们的ROI计算器，了解HR自动化管理系统能为您的企业带来多少价值
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