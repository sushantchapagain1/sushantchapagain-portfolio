import React from 'react';

type Props = {
  title: string;
  description: string;
  publishedDate: string;
};

function BlogCard({ title, description, publishedDate }: Props) {
  return (
    <div className="border-cardBorder mt-3 h-fit rounded-xl border p-6">
      <div className="flex items-center justify-between ">
        <h2 className="mb-6 text-3xl text-foregroundText">{title}</h2>
        <span className="text-lightText">{publishedDate}</span>
      </div>
      <p className="font-light text-foregroundText">
        {description.substring(0, 250)}...
      </p>
    </div>
  );
}

export default BlogCard;
