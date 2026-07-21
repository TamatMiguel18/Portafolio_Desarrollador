import { projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="section-padding bg-dark-800/50">
      <p className="section-subtitle">// Portafolio</p>
      <h2 className="section-title">Proyectos Destacados</h2>
      <p className="text-gray-400 mb-12 max-w-xl">
        Una selección de proyectos que demuestran mis capacidades en desarrollo web, gestión de datos e
        IoT.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
