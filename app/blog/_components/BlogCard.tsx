import { ReadMoreIcon } from '@/components/icons';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  slug: string;
  description: string;
};

function BlogCard({ title, description, slug }: Props) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[var(--blogCardBg)] to-[var(--cardBackground)] p-4 shadow-md transition hover:bg-cardBackground">
        <h2 className="mb-2 text-lg font-semibold text-foregroundText">
          {title}
        </h2>
        <p className="text-sm font-light text-lightText">
          {description.substring(0, 250)}...
        </p>

        <div className="flex justify-between">
          <span className="absolute -bottom-3 -left-3 h-9 w-9 -rotate-45 rounded-r-full bg-[var(--blogCardDarkBg)]"></span>
          <span></span>

          <button className="flex text-xs text-lightText">
            <span>Read More</span>
            <ReadMoreIcon className="ml-2 h-4 w-4" stroke="currentColor" />
          </button>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
