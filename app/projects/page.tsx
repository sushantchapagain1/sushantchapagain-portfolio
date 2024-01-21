import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my projects by looking at the source code and demo url.',
};

function page() {
  return (
    <ul className="m-12 grid gap-3 sm:mx-0 sm:my-3 sm:grid-cols-2 md:m-12 md:gap-6 lg:mx-0 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </ul>
  );
}

export default page;
