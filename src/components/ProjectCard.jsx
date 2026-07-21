import Card from './Card';
import Button from './Button';

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden p-0">
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}08)` }}
      >
        <div
          className="absolute inset-4 rounded-lg border border-dashed flex items-center justify-center"
          style={{ borderColor: `${project.accentColor}44` }}
        >
          <div className="text-center">
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${project.accentColor}22` }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke={project.accentColor}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xs font-mono" style={{ color: project.accentColor }}>
              {project.imagePlaceholder}
            </p>
            <p className="text-xs text-gray-500 mt-1">Captura de pantalla</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-dark-600 text-gray-300 border border-dark-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button href={project.githubUrl} variant="outline" size="sm" external className="w-full">
          <GitHubIcon />
          Ver Código en GitHub
        </Button>
      </div>
    </Card>
  );
}
