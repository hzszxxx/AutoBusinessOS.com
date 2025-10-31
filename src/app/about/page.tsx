import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - AutoBusinessOS",
  description: "Learn about AutoBusinessOS, the business automation platform that helps companies eliminate repetitive work and scale efficiently. Discover our mission and approach.",
  keywords: "about AutoBusinessOS, automation company, business automation platform, enterprise automation solutions",
};

export default function AboutPage() {
  const coreCapabilities = [
    {
      title: "Product Development",
      description: "Building intuitive automation tools that solve real business problems",
      icon: "🛠️"
    },
    {
      title: "Platform Engineering",
      description: "Creating robust, scalable infrastructure for automation workflows",
      icon: "⚙️"
    },
    {
      title: "User Experience",
      description: "Designing interfaces that make complex automation simple to use",
      icon: "🎨"
    },
    {
      title: "Customer Success",
      description: "Supporting businesses in their automation journey",
      icon: "🤝"
    }
  ];

  const developmentPhases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      description: "Building core automation infrastructure and essential features"
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      description: "Creating comprehensive automation workflows for various business functions"
    },
    {
      phase: "Phase 3",
      title: "AI Integration",
      description: "Incorporating intelligent automation and machine learning capabilities"
    },
    {
      phase: "Current",
      title: "Continuous Improvement",
      description: "Ongoing platform enhancements and feature development based on user feedback"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Team Behind <span className="text-blue-600">Your Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              AutoBusinessOS helps companies eliminate repetitive work so teams can focus on what matters.
              We make automation accessible—no coding degree required.
            </p>

            {/* Origin Story */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-8 text-left max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Why We Exist</h3>
              <p className="text-gray-700 leading-relaxed">
                We built AutoBusinessOS because traditional automation tools have a problem: they're either too simple to handle
                real business complexity, or too complex to use without an IT team. You shouldn't need a computer science degree
                to automate your invoicing workflow.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our goal is simple: give business users the power to automate their own workflows—no coding, no lengthy implementation
                projects, no waiting for IT. Just connect your tools, build your workflow, and watch hours of manual work disappear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Make automation so simple that your marketing manager can build workflows—not just your IT team.
                Automation should empower your business, not create more work.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine enterprise capabilities with consumer-grade simplicity. The result: powerful automation
                that business users can actually deploy—without coding, without IT tickets, without months of implementation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-gray-600 font-semibold">User-Friendly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔧</div>
                  <div className="text-gray-600 font-semibold">Practical Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="text-gray-600 font-semibold">Scalable Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <div className="text-gray-600 font-semibold">Continuous Innovation</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We Solve</h3>
              <p className="text-gray-600">
                Your operations manager knows exactly which processes waste time—but can't automate them without IT.
                Your IT team is buried in tickets. Traditional tools require months of implementation. We fix this:
                business users build automation in days, not quarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core competencies that enable us to deliver effective automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform development approach and ongoing evolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developmentPhases.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">{item.phase}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Organization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparency and trust are fundamental to how we operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 Company Information</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Organization:</strong> AutoBusinessOS</p>
                <p><strong>Focus:</strong> Business Process Automation Platform Development</p>
                <p><strong>Location:</strong> Operating globally with remote-first approach</p>
                <p><strong>Established:</strong> 2024</p>
                <p><strong>Type:</strong> Technology Platform Provider</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">📞 Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Website:</strong> autobusinessos.com</p>
                <p><strong>Support:</strong> Available through contact form</p>
                <p><strong>Documentation:</strong> Comprehensive guides and resources</p>
                <p><strong>Community:</strong> Active user forum and support</p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-bold mb-2">Product Development</h4>
                <p>We build automation tools based on real business needs, tested extensively with actual companies before launch. Every feature must save time in practice, not just in theory.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Customer-Centric</h4>
                <p>Our roadmap is driven by customer feedback. We conduct regular interviews with businesses to understand their automation challenges and priorities.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Transparency</h4>
                <p>We maintain clear communication about our platform capabilities, limitations, and development progress. No overpromising, just honest guidance.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Continuous Improvement</h4>
                <p>We ship regular updates, fix bugs quickly, and constantly refine the platform based on user experience and feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ship Quality</h3>
              <p className="text-gray-600">
                We test every feature with real businesses before launch. No feature ships until it actually saves time—not creates more work. Check our changelog to see what we shipped this month.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Listen First</h3>
              <p className="text-gray-600">
                We build what businesses actually need, not what sounds impressive in marketing. Every quarter, we interview 50+ customers to understand their automation challenges. Your feedback shapes our roadmap.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Move Fast</h3>
              <p className="text-gray-600">
                We ship new features monthly, not yearly. When you report a bug, we fix it in days. When you request a feature, we build it in weeks. Speed matters when you're trying to scale your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            See exactly how much time and money you could save. Our ROI calculator gives you personalized results in 3 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
