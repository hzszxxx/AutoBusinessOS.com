import Link from 'next/link';

interface InternalLinksProps {
  title?: string;
  links: Array<{
    title: string;
    description: string;
    href: string;
    category?: string;
  }>;
}

export default function InternalLinks({ title = "Related Resources", links }: InternalLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <Link href={link.href} className="block">
              <div className="flex items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-indigo-600 hover:text-indigo-700 mb-2">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">{link.description}</p>
                  {link.category && (
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {link.category}
                    </span>
                  )}
                </div>
                <svg className="w-5 h-5 text-gray-400 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}