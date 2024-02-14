import React from 'react';
import type { Metadata } from 'next';
import { allBlogs } from '@/.contentlayer/generated';
import NotFound from '@/app/not-found';

import { formatDate } from '@/lib/utils';

import Mdx from '../_components/Mdx';
import Share from '../_components/Share';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return;
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

async function page({ params }: Params) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) return <NotFound />;

  return (
    <article className="prose my-12 max-w-none">
      <div className="rounded-md bg-cardBackground p-3">
        <h1 className="text-balance text-lg font-medium text-foregroundText sm:text-xl md:text-2xl">
          {blog.title}
        </h1>
        <span className="text-sm">{formatDate(blog.publishedAt)}</span>
      </div>
      <Mdx code={blog.body.code} />
      <Share pathName={blog.slugAsParams} />
    </article>
  );
}

export default page;
