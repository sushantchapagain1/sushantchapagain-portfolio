import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

function page() {
  return (
    <ul className="my-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </ul>
  );
}

export default page;
