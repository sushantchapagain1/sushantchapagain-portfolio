import Image from 'next/image';
import React from 'react';

export type PropsType = {
  title: string;
  thumbnail: string;
  description: string;
  techStacks: string[];
};

function ProjectCard({ title, thumbnail, description, techStacks }: PropsType) {
  return (
    <li className="bg-cardBackground h-fit overflow-hidden rounded-xl">
      <Image
        src={thumbnail}
        alt={`${title} 's thumnail`}
        height={1000}
        width={1000}
        className="w-full"
      />
      <div className="p-3">
        <h2>{title}</h2>
        <p className="my-3 text-sm">{description}</p>
        <div className="flex flex-wrap gap-1">
          {techStacks.map((techStack) => (
            <span
              key={techStack}
              className="bg-cardBackground rounded-full px-3 py-1 text-xs"
            >
              {techStack}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
