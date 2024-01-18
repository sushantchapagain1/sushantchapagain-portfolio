import Image from 'next/image';
import React from 'react';
import { GitHubIcon } from './icons';
import Link from 'next/link';

export type PropsType = {
  title: string;
  thumbnail: string;
  description: string;
  techStacks: string[];
  isPrivateRepo: boolean;
  repo: string;
  demo: string;
};

function ProjectCard({
  title,
  thumbnail,
  description,
  techStacks,
  isPrivateRepo,
  repo,
  demo,
}: PropsType) {
  return (
    <li className="max-h-[420px] overflow-hidden rounded-xl bg-cardBackground transition-all hover:shadow-md">
      <Image
        src={thumbnail}
        alt={`${title} 's thumnail`}
        height={1000}
        width={1000}
        className="h-44 w-full"
      />
      <div className="p-3">
        <div className="flex justify-between">
          <h2 className="font-medium text-foregroundText">{title}</h2>

          {!isPrivateRepo && repo !== null && (
            <Link href={repo} target="_blank">
              <GitHubIcon
                height={22}
                width={22}
                className="fill-foregroundText"
                color="text-foregroundText"
              />
            </Link>
          )}
        </div>
        <p className="my-3 max-h-28 overflow-hidden text-sm font-light text-lightText">
          {description}
        </p>
        <div className="flex flex-wrap gap-1">
          {techStacks.map((techStack) => (
            <span
              key={techStack}
              className="rounded-full bg-cardBackground px-3 py-1 text-xs text-lightText"
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
