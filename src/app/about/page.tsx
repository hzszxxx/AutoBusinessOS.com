import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - AutoBusinessOS",
  description: "Learn about AutoBusinessOS, the revolutionary automation platform that transforms businesses through intelligent workflow automation and process optimization.",
  keywords: "about AutoBusinessOS, automation company, business automation platform, enterprise automation solutions",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in enterprise automation, former McKinsey consultant specializing in digital transformation.",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI and automation expert with 12+ years building scalable enterprise solutions at Fortune 500 companies.",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product strategy leader with deep expertise in user experience and automation workflow design.",
      image: "👩‍🎨"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack engineer and automation architect with expertise in cloud-native solutions and microservices.",
      image: "👨‍🔧"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "AutoBusinessOS was founded with a vision to democratize enterprise automation."
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Secured our first Fortune 500 client, proving the viability of our automation platform."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M in Series A funding to accelerate product development and market expansion."
    },
    {
      year: "2023",
      title: "Platform Launch",
      description: "Launched our comprehensive automation platform with 50+ pre-built workflows."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 15 countries, serving 500+ enterprise clients worldwide."
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Integrated advanced AI capabilities for intelligent process optimization and predictive analytics."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: 'white'}}>
              About <span className="text-yellow-300" style={{color: '#fef08a'}}>AutoBusinessOS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{color: 'white'}}>
              We're on a mission to revolutionize how businesses operate through intelligent automation. 
              Our platform empowers organizations to achieve 100% workflow automation, driving unprecedented efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize enterprise automation by making it accessible, affordable, and easy to implement for businesses of all sizes. 
                We believe that every organization deserves the power of automation to compete and thrive in the digital economy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines cutting-edge AI technology with deep industry expertise to deliver automation solutions 
                that not only work but transform how businesses operate.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">80%</div>
                  <div className="text-gray-600">Average Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">$2B+</div>
                  <div className="text-gray-600">Client Savings</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#111827'}}>Why We Exist</h3>
              <p style={{color: '#374151'}}>
                Traditional automation solutions are complex, expensive, and require extensive technical expertise. 
                We saw an opportunity to change this by creating a platform that makes automation accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of automation experts, engineers, and business strategists work together 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a startup with a big idea to a global leader in enterprise automation, 
              here's how we've grown and evolved.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{color: 'white'}}>
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: 'white'}}>
            Join hundreds of companies that have transformed their operations with AutoBusinessOS. 
            Let's discuss how we can help your business achieve its automation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block shadow-lg"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
