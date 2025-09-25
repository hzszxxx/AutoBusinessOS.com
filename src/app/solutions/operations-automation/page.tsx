import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operations Automation Platform - Inventory Management, Supply Chain Optimization & Data Analytics | AutoBusinessOS',
  description: 'Professional operations solutions featuring inventory management, supply chain optimization, and data analytics. Improve 40% operational efficiency and drive digital transformation.',
  keywords: 'operations automation, inventory management, supply chain optimization, workflow automation',
}

export default function operationsautomationPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Operations Automation Platform
              <span className="block text-yellow-300">Inventory Management, Supply Chain Optimization & Data Analytics</span>
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Professional operations automation platform solutions that help enterprises achieve efficient and intelligent business process management. Improve 40% operational efficiency and enhance overall operational performance.
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

      {/* Pain Point Analysis Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Operations Management Pain Point Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional operations management faces severe challenges including low efficiency, high costs, and delayed decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-500 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3">Chaotic Inventory Management</h3>
              <p className="text-gray-600">
                Lack of real-time inventory monitoring, severe inventory backlog and stockout issues, capital utilization rate as high as 30%,
                low inventory turnover rate, affecting enterprise cash flow and operational efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-orange-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3">Opaque Supply Chain</h3>
              <p className="text-gray-600">
                Severe supply chain information silos, lack of end-to-end visibility management, difficult supplier coordination,
                average delivery delay rate reaches 25%, declining customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-500 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Delayed Data Analysis</h3>
              <p className="text-gray-600">
                Lack of real-time data analysis capabilities, operational decisions rely on experience-based judgment, slow market response,
                missing business opportunities, gradually losing competitive advantages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-purple-500 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">Poor Process Standardization</h3>
              <p className="text-gray-600">
                Non-standardized business processes, reliance on manual experience, low standardization level,
                persistently high operational costs, difficult quality control.
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
              Comprehensive operations automation solutions, from inventory management to data analytics, improving enterprise operational efficiency and competitiveness
            </p>
          </div>

          <div className="space-y-16">
            {/* Smart Inventory Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Inventory Management System</h3>
                <p className="text-gray-600 mb-6">
                  AI prediction algorithm-based smart inventory management system that achieves automatic inventory level optimization and intelligent replenishment.
                  Supports multi-warehouse, multi-SKU management with real-time inventory monitoring and alert functions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    AI demand forecasting, inventory accuracy improved by over 85%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Automated replenishment and transfer, reducing stockout risk by 70%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Multi-dimensional inventory analysis, optimizing capital utilization
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-600 mb-4">Inventory Accuracy Improvement</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">30%</div>
                  <p className="text-gray-600">Inventory Cost Reduction</p>
                </div>
              </div>
            </div>

            {/* Supply Chain Collaboration Platform */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">Full-Chain</div>
                  <p className="text-gray-600 mb-4">Visibility Management</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">40%</div>
                  <p className="text-gray-600">Delivery Efficiency Improvement</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Collaboration Platform</h3>
                <p className="text-gray-600 mb-6">
                  End-to-end supply chain visibility management platform enabling seamless collaboration between suppliers, manufacturers, and distributors.
                  Provides real-time logistics tracking, supplier performance management, and risk alert functions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Real-time logistics tracking, enhancing delivery transparency
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Supplier collaborative management, reducing procurement costs by 15%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Intelligent risk alerts, proactive supply chain risk identification
                  </li>
                </ul>
              </div>
            </div>

            {/* Operations Data Analytics */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations Data Analytics Center</h3>
                <p className="text-gray-600 mb-6">
                  Multi-source data integrated operations analytics platform providing real-time operations monitoring and intelligent analysis reports.
                  Supports customizable KPI metrics and visualization dashboards, helping managers make quick decisions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Real-time operations monitoring, key metrics at a glance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Intelligent trend analysis, predicting business direction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Customizable reports, meeting personalized requirements
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">Real-time</div>
                  <p className="text-gray-600 mb-4">Data Monitoring</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-2">80%</div>
                  <p className="text-gray-600">Decision Speed Improvement</p>
                </div>
              </div>
            </div>

            {/* Quality Management System */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">99.5%</div>
                  <p className="text-gray-600 mb-4">Quality Pass Rate</p>
                  <div className="text-2xl font-bold text-primary-600 mb-2">60%</div>
                  <p className="text-gray-600">Inspection Efficiency Improvement</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Quality Management</h3>
                <p className="text-gray-600 mb-6">
                  Statistical process control-based intelligent quality management system achieving full-process quality monitoring and alerts.
                  Supports quality traceability, non-conforming product management, and continuous improvement closed-loop management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Full-process quality traceability, rapid problem identification
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Intelligent quality alerts, preventing quality incidents
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Continuous improvement management, constantly enhancing quality levels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real customer cases demonstrating the significant benefits and value creation of operations automation platforms
            </p>
          </div>

          <div className="space-y-12">
            {/* Case 1: Manufacturing Enterprise */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Manufacturing</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Automotive Parts Company Supply Chain Optimization</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This enterprise with over 200 suppliers faced severe inventory backlog due to traditional supply chain management,
                    frequent delivery delays, persistently high operational costs, urgently needing digital transformation to enhance competitiveness.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-optimization Issues:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Inventory turnover only 6 times/year</li>
                        <li>• Delivery delay rate at 25%</li>
                        <li>• Difficult supplier coordination</li>
                        <li>• Inventory capital tied up at 30 million</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-optimization Results:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Inventory turnover improved to 12 times/year</li>
                        <li>• Delivery delay rate reduced to 8%</li>
                        <li>• Supply chain transparency at 100%</li>
                        <li>• Released 10 million in inventory capital</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                    <p className="text-gray-600 mb-4">Inventory Turnover Improvement</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">10M CNY</div>
                    <p className="text-gray-600">Capital Released</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: Retail Chain */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">Retail Chain</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Supermarket Chain Operations Data Analytics Upgrade</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This chain enterprise with 300 stores lacked data support in traditional operations management, slow decision response,
                    low inventory turnover efficiency, and poor standardization of store operations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-upgrade Challenges:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Data analysis lagged 5-7 days</li>
                        <li>• Store inventory variance rate at 15%</li>
                        <li>• Operations decisions relied on experience</li>
                        <li>• Stockout rate as high as 12%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-upgrade Results:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Real-time data analysis monitoring</li>
                        <li>• Inventory variance rate reduced to 3%</li>
                        <li>• Data-driven precise decision making</li>
                        <li>• Stockout rate controlled within 2%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary-600 mb-2">80%</div>
                    <p className="text-gray-600 mb-4">Inventory Variance Reduction</p>
                    <div className="text-2xl font-bold text-primary-600 mb-2">83%</div>
                    <p className="text-gray-600">Stockout Rate Reduction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3: E-commerce Platform */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">E-commerce Platform</span>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">Cross-border E-commerce Smart Warehouse Management</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    This cross-border e-commerce platform with 100,000+ daily orders faced complex multi-warehouse management, difficult inventory forecasting,
                    low warehouse efficiency, and affected customer satisfaction.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-improvement Status:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Inventory forecast accuracy at 60%</li>
                        <li>• Low warehouse operation efficiency</li>
                        <li>• Shipping delay rate at 18%</li>
                        <li>• Warehousing costs at 25% of total</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-improvement Results:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Inventory forecast accuracy at 92%</li>
                        <li>• Warehouse efficiency improved by 60%</li>
                        <li>• Shipping delay rate reduced to 5%</li>
                        <li>• Warehousing costs reduced to 18%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">53%</div>
                    <p className="text-gray-600 mb-4">Forecast Accuracy Improvement</p>
                    <div className="text-2xl font-bold text-secondary-600 mb-2">60%</div>
                    <p className="text-gray-600">Warehouse Efficiency Improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Testimonial */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <blockquote className="text-xl italic mb-6">
                  &ldquo;The operations automation platform has made our supply chain management more transparent and efficient. Inventory turnover rate doubled,
                  operational costs significantly reduced, and our entire team's work efficiency achieved a qualitative leap.&rdquo;
                </blockquote>
                <cite className="text-primary-100">
                  — Mr. Zhang | COO of Manufacturing Enterprise
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five-step implementation methodology based on lean operations principles, ensuring successful deployment and continuous optimization of operations automation projects
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Operations Diagnosis</h3>
              <p className="text-gray-600 text-sm">
                In-depth analysis of existing operational processes and pain points, identifying improvement opportunities and optimization priorities, developing detailed improvement plans
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Process Optimization</h3>
              <p className="text-gray-600 text-sm">
                Redesigning operational processes based on lean principles, eliminating waste, establishing standardized operation systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">System Integration</h3>
              <p className="text-gray-600 text-sm">
                Deploying operations automation systems, completing integration and data connectivity across business systems, ensuring smooth information flow
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Operations Enablement</h3>
              <p className="text-gray-600 text-sm">
                Conducting company-wide training and knowledge transfer, establishing data-driven operational management culture and work practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600 text-sm">
                Establishing PDCA continuous improvement mechanisms, regularly evaluating operational effectiveness, continuously optimizing system functions and processes
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Success Factors</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Goal-Oriented</h4>
                <p className="text-gray-600 text-sm">Clear operational improvement goals and success metrics, ensuring correct project implementation direction</p>
              </div>
              <div className="text-center">
                <div className="text-secondary-500 text-3xl mb-3">🔄</div>
                <h4 className="font-semibold mb-2">Process First</h4>
                <p className="text-gray-600 text-sm">Optimize processes before implementing systems, avoid using technology to solidify outdated management models</p>
              </div>
              <div className="text-center">
                <div className="text-primary-500 text-3xl mb-3">📊</div>
                <h4 className="font-semibold mb-2">Data-Driven</h4>
                <p className="text-gray-600 text-sm">Establish comprehensive data collection and analysis systems, let data guide operational decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mainstream Operations Automation Tool Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation of mainstream operations management systems to help you choose the most suitable digital transformation solution
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Function Modules</th>
                  <th className="px-6 py-4 text-center">AutoBusinessOS</th>
                  <th className="px-6 py-4 text-center">Traditional ERP</th>
                  <th className="px-6 py-4 text-center">Professional WMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Smart Inventory Management</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ AI Prediction Algorithm</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Basic Alerts</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Professional Features</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Supply Chain Visibility</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ End-to-End Tracking</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Limited Function</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Partial Support</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Operations Data Analytics</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Real-time BI Analysis</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Basic Reports</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Weak Analytics</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Quality Management</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Full-Process Control</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Basic Functions</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Not Supported</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Mobile Support</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Native APP</td>
                  <td className="px-6 py-4 text-center text-red-600">✗ Poor Experience</td>
                  <td className="px-6 py-4 text-center text-yellow-600">△ Partial Functions</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Implementation Complexity</td>
                  <td className="px-6 py-4 text-center text-green-600">Medium</td>
                  <td className="px-6 py-4 text-center text-red-600">High</td>
                  <td className="px-6 py-4 text-center text-green-600">Medium-Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Selection Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-primary-600 mb-3">Manufacturing Enterprises</h4>
                <p className="text-gray-600 text-sm">
                  Recommend AutoBusinessOS, integrating inventory, supply chain, and quality management
                  to meet complex manufacturing operational requirements
                </p>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-xl">
                <h4 className="font-semibold text-secondary-600 mb-3">Retail Chains</h4>
                <p className="text-gray-600 text-sm">
                  AutoBusinessOS provides multi-store management and real-time data analytics,
                  empowering retail enterprises with precision operations
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-600 mb-3">E-commerce Platforms</h4>
                <p className="text-gray-600 text-sm">
                  Smart warehouse management and supply chain collaboration features,
                  perfectly suited for high-frequency e-commerce operational scenarios
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
            Ready to Start Your Operations Automation Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Use our ROI calculator to understand how much value an operations automation platform can bring to your enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/roi-calculator"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate ROI Free
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Expert Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}