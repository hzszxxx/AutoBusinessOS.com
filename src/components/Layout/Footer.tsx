import Link from 'next/link'
import NewsletterSignup from '@/components/Forms/NewsletterSignup'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Solutions': [
      { name: 'Marketing Automation', href: '/solutions/marketing-automation' },
      { name: 'Sales Automation', href: '/solutions/sales-automation' },
      { name: 'Customer Service Automation', href: '/solutions/customer-service-automation' },
      { name: 'Finance Automation', href: '/solutions/finance-automation' },
    ],
    'Industries': [
      { name: 'E-commerce', href: '/industries/ecommerce' },
      { name: 'SaaS', href: '/industries/saas' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Healthcare', href: '/industries/healthcare' },
    ],
    'Resources': [
      { name: 'ROI Calculator', href: '/tools/roi-calculator' },
      { name: 'Automation Guides', href: '/resources/guides' },
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Templates', href: '/resources/templates' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
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
          <NewsletterSignup 
            source="footer" 
            className="text-white"
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong className="text-gray-300">Important Notice:</strong> Statistics, case studies, and ROI examples on this website are illustrative and based on industry research and typical automation scenarios. They are not based on our actual client data and should not be considered guaranteed outcomes. Individual results will vary significantly based on business context, implementation approach, process complexity, team adoption, and many other factors. All information is provided for educational purposes.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 md:flex md:items-center md:justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">AB</span>
            </div>
            <span className="text-white font-semibold">AutoBusinessOS</span>
          </div>

          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">
              Contact: <a href="mailto:contact@autobusinessos.com" className="text-blue-400 hover:text-blue-300">contact@autobusinessos.com</a>
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} AutoBusinessOS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}