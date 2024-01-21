import { Metadata } from 'next';

import BlogCard from './_components/BlogCard';

export const metadata: Metadata = {
  title: 'My Blogs',
  description:
    'Explore some very useful bolgs created by me which i think most of the developer face during development.',
};

// console.log(crypto.randomUUID());

const blogs = [
  {
    id: '68c05868-778f-4282-b394-d6018b880a2c',
    title: 'Lorem Ipsum',
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam sapiente
    itaque reiciendis voluptatem neque officiis nesciunt eaque, soluta
    delectus maiores. Molestias repellat illo tenetur veniam voluptate
  voluptates et ratione quaerat pariatur similique?`,
    publishedDate: 'Nov 24 2023',
  },
];

function page() {
  return (
    <div className="my-9">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}

export default page;
