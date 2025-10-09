import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service - AutoBusinessOS",
  description: "AutoBusinessOS Terms of Service - Read our terms and conditions for using our website and services.",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <Layout>
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and AutoBusinessOS ("we," "us," or "our") concerning your access to and use of the autobusinessos.com website (the "Site") and any related services provided by us.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the Site, you agree that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You are at least 18 years old or the age of majority in your jurisdiction</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Site and its original content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by AutoBusinessOS and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Limited License</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Site for your personal, non-commercial use. This license does not include any right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Resell or make commercial use of the Site or its content</li>
                <li>Modify, distribute, or reproduce any content from the Site</li>
                <li>Use any data mining, robots, or similar data gathering methods</li>
                <li>Download any content except as expressly permitted on the Site</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Trademarks</h3>
              <p className="text-gray-700 leading-relaxed">
                "AutoBusinessOS" and our logos are trademarks or registered trademarks of AutoBusinessOS. You may not use these marks without our prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Representations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>All information you submit is accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information</li>
                <li>You have the legal capacity and agree to comply with these Terms</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>You will not access the Site through automated or non-human means</li>
                <li>You will not use the Site for any illegal or unauthorized purpose</li>
                <li>Your use of the Site will not violate any applicable law or regulation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Systematically retrieve data or content from the Site to create a collection or database</li>
                <li>Make unauthorized use of the Site, including collecting usernames and/or email addresses</li>
                <li>Use the Site to advertise or offer to sell goods and services</li>
                <li>Circumvent, disable, or interfere with security-related features of the Site</li>
                <li>Engage in unauthorized framing of or linking to the Site</li>
                <li>Trick, defraud, or mislead us and other users</li>
                <li>Interfere with, disrupt, or create an undue burden on the Site or networks</li>
                <li>Attempt to impersonate another user or person</li>
                <li>Use any information obtained from the Site to harass, abuse, or harm another person</li>
                <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
                <li>Upload or transmit viruses, trojan horses, or other malicious code</li>
                <li>Engage in automated use of the system without our permission</li>
                <li>Delete copyright or proprietary rights notices from any content</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents</li>
                <li>Attempt to bypass any measures designed to prevent or restrict access to the Site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Generated Content</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Content Responsibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are solely responsible for any content you submit, post, or transmit through the Site. You agree that you will not submit content that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Is unlawful, threatening, abusive, harassing, defamatory, libelous, or invasive of privacy</li>
                <li>Infringes any intellectual property or other rights of any third party</li>
                <li>Contains software viruses or any other malicious code</li>
                <li>Contains advertising, promotional materials, or spam</li>
                <li>Is otherwise objectionable or harmful</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 License to Your Content</h3>
              <p className="text-gray-700 leading-relaxed">
                By posting content on the Site, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in any media.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Websites and Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Site may contain links to third-party websites or services that are not owned or controlled by AutoBusinessOS. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER AUTOBUSINESSOS NOR ANY PERSON ASSOCIATED WITH AUTOBUSINESSOS MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                WITHOUT LIMITING THE FOREGOING, NEITHER AUTOBUSINESSOS NOR ANYONE ASSOCIATED WITH AUTOBUSINESSOS REPRESENTS OR WARRANTS THAT THE SITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              <p className="text-gray-700 leading-relaxed">
                AUTOBUSINESSOS HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL AUTOBUSINESSOS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
              <p className="text-gray-700 leading-relaxed">
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless AutoBusinessOS, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AutoBusinessOS operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any legal action or proceeding arising under these Terms will be brought exclusively in courts located in the applicable jurisdiction, and the parties irrevocably consent to the personal jurisdiction and venue therein.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Informal Negotiations</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms, you and AutoBusinessOS agree to first attempt to negotiate any dispute informally for at least 30 days before initiating any arbitration or court proceeding.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2 Binding Arbitration</h3>
              <p className="text-gray-700 leading-relaxed">
                If the parties are unable to resolve a dispute through informal negotiations, the dispute will be finally and exclusively resolved by binding arbitration, except where prohibited by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the Site will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Waiver</h2>
              <p className="text-gray-700 leading-relaxed">
                No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and AutoBusinessOS's failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and AutoBusinessOS regarding the use of the Site and supersede all prior and contemporaneous written or oral agreements between you and AutoBusinessOS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Assignment</h2>
              <p className="text-gray-700 leading-relaxed">
                You may not assign or transfer these Terms, by operation of law or otherwise, without AutoBusinessOS's prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and void. AutoBusinessOS may freely assign or transfer these Terms without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Electronic Communications</h2>
              <p className="text-gray-700 leading-relaxed">
                By using the Site, you consent to receiving electronic communications from us. You agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communications be in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong> <a href="https://autobusinessos.com/contact" className="text-blue-600 hover:underline">https://autobusinessos.com/contact</a>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:legal@autobusinessos.com" className="text-blue-600 hover:underline">legal@autobusinessos.com</a>
                </p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> By using the AutoBusinessOS website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
