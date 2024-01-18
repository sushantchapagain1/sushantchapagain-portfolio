import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

function page() {
  return (
    <ul className="mt-6 grid md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </ul>
  );
}

export default page;
