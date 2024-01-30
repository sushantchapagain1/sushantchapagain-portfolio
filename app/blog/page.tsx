import { Metadata } from 'next';

import BlogCard from './_components/BlogCard';

export const metadata: Metadata = {
  title: 'My Blogs',
  description:
    'Explore some very useful blogs created by me which i think most of the developer face during development.',
};

const blogs = [
  {
    id: '68c05868-778f-4282-b394-d6018b880a2c',
    slug: 'behind-the-scenes-of-react',
    title: 'Behind the scenes of react',
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sapiente
    itaque reiciendis voluptatem neque officiis nesciunt eaque, soluta
    delectus maiores.`,
  },
  {
    id: '68c05868-778f-4282-b394-d6018b82c',
    slug: 'write-clean-redux-code',
    title: 'Write Clean Redux Code',
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sapiente
    itaque reiciendis voluptatem neque officiis nesciunt eaque, soluta
    delectus maiores.`,
  },
  {
    id: '68c05868-778f-4282-b394-d18b880a2c',
    slug: 'react-query-in-brief',
    title: 'React query in brief',
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sapiente
    itaque reiciendis voluptatem neque officiis nesciunt eaque, soluta
    delectus maiores.`,
  },
];

function page() {
  return (
    <div className="my-12 grid h-fit gap-3 md:grid-cols-2">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}

export default page;
