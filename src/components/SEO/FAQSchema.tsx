interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqItems: FAQItem[];
}

export default function FAQSchema({ faqItems }: FAQSchemaProps) {
  if (!faqItems || faqItems.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

// FAQ Display Component
interface FAQDisplayProps {
  faqItems: FAQItem[];
  title?: string;
}

export function FAQDisplay({ faqItems, title = "Frequently Asked Questions" }: FAQDisplayProps) {
  if (!faqItems || faqItems.length === 0) return null;

  return (
    <>
      <FAQSchema faqItems={faqItems} />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600">
              Common questions about AutoBusinessOS automation platform
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-gray-50 border border-gray-200 rounded-lg">
                <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  {item.question}
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}