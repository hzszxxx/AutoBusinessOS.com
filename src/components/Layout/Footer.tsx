import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    '解决方案': [
      { name: '营销自动化', href: '/solutions/marketing-automation' },
      { name: '销售自动化', href: '/solutions/sales-automation' },
      { name: '客服自动化', href: '/solutions/customer-service-automation' },
      { name: '财务自动化', href: '/solutions/finance-automation' },
    ],
    '行业案例': [
      { name: '电商行业', href: '/industries/ecommerce' },
      { name: 'SaaS企业', href: '/industries/saas' },
      { name: '制造业', href: '/industries/manufacturing' },
      { name: '医疗健康', href: '/industries/healthcare' },
    ],
    '资源中心': [
      { name: 'ROI计算器', href: '/tools/roi-calculator' },
      { name: '自动化指南', href: '/resources/guides' },
      { name: '案例研究', href: '/resources/case-studies' },
      { name: '模板下载', href: '/resources/templates' },
    ],
    '公司信息': [
      { name: '关于我们', href: '/about' },
      { name: '联系我们', href: '/contact' },
      { name: '隐私政策', href: '/privacy' },
      { name: '服务条款', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h3 className="text-white text-lg font-semibold mb-2">
                获取最新的自动化资讯
              </h3>
              <p className="text-gray-400 text-sm">
                订阅我们的邮件，第一时间了解企业自动化趋势和最佳实践。
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:w-1/2 md:ml-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-lg transition-colors duration-200">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AB</span>
            </div>
            <span className="text-white font-semibold">AutoBusinessOS</span>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AutoBusinessOS. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}