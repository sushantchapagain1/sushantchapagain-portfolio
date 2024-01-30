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
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#312e8124] to-[#1b242ee7] p-4 shadow-md">
        <h2 className="mb-2 text-lg font-semibold text-foregroundText">
          {title}
        </h2>
        <p className="text-sm font-light text-lightText">
          {description.substring(0, 250)}...
        </p>

        <div className="flex justify-between">
          <span className="absolute -bottom-3 -left-3 h-9 w-9 -rotate-45 rounded-r-full bg-[#807dd711]"></span>
          <span></span>

          <button className="flex text-xs text-lightText">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="ml-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
