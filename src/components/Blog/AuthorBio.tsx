'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Author } from '@/data/authors';

export type { Author };

interface AuthorBioProps {
  author: Author;
  publishDate?: string;
  readTime?: string;
  compact?: boolean;
}

export default function AuthorBio({ author, publishDate, readTime, compact = false }: AuthorBioProps) {
  // Safety check for server-side rendering
  if (!author || !author.name) {
    return null;
  }

  if (compact) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <div className="flex-shrink-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
        <div>
          <div className="font-medium text-gray-900">{author.name}</div>
          <div className="text-gray-500 flex items-center gap-2">
            {publishDate && <span>{publishDate}</span>}
            {publishDate && readTime && <span>•</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-2xl">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-lg font-bold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-600">{author.role}</p>
          </div>

          <p className="text-gray-700 text-sm mb-3">
            {author.bio}
          </p>

          {(author.linkedin || author.twitter || author.email) && (
            <div className="flex items-center gap-4">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              )}

              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                  Twitter
                </a>
              )}

              {author.email && (
                <a
                  href={`mailto:${author.email}`}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
