import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - AutoBusinessOS",
  description: "Learn about AutoBusinessOS, the revolutionary automation platform that transforms businesses through intelligent workflow automation and process optimization.",
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
              AutoBusinessOS is a modern business automation platform designed to help companies streamline their operations.
              We focus on making automation accessible and practical for businesses of all sizes.
            </p>

            {/* Origin Story */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-8 text-left max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                AutoBusinessOS was created to address a growing need in the market: businesses need powerful automation tools
                that are actually usable without extensive technical expertise. We're building a platform that bridges the gap
                between complex enterprise software and simple task automation.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our goal is to provide comprehensive automation solutions that help businesses save time, reduce errors,
                and focus on growth rather than repetitive tasks.
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
                To make business automation accessible and practical for organizations of all sizes.
                We believe that automation should be a tool that empowers businesses, not creates complexity.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform focuses on combining modern technology with intuitive design to deliver
                automation solutions that actually work for real businesses.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Exist</h3>
              <p className="text-gray-600">
                Traditional automation solutions are complex, expensive, and require extensive technical expertise.
                We saw an opportunity to change this by creating a platform that makes automation accessible to everyone.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product development to customer service.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration and work closely with our clients as partners.
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to stay ahead of the curve and deliver cutting-edge solutions.
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
            Discover how AutoBusinessOS can help streamline your business operations.
            Let's explore automation solutions that fit your needs.
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
              See Our Impact Calculator
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
