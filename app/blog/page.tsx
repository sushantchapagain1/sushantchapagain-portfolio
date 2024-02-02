import { Metadata } from 'next';

import { allBlogs } from 'contentlayer/generated';

import BlogCard from './_components/BlogCard';

export const metadata: Metadata = {
  title: 'My Blogs',
  description:
    'Explore some very useful blogs created by me which i think most of the developer face during development.',
};

function page() {
  const blogs = allBlogs;

  return (
    <div className="my-12 grid h-fit gap-3 md:grid-cols-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} {...blog} />
      ))}
    </div>
  );
}

export default page;
