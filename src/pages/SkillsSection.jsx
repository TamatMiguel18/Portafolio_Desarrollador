import { skills } from '../data/portfolioData';
import CircularProgress, { ProgressBar } from '../components/SkillChart';

export default function SkillsSection() {
  return (
    <section id="habilidades" className="section-padding">
      <p className="section-subtitle">// Habilidades</p>
      <h2 className="section-title">Stack Tecnológico</h2>
      <p className="text-gray-400 mb-12 max-w-xl">
        Dominio técnico en herramientas modernas de desarrollo web, bases de datos e integración IoT.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {skills.map((skill) => (
          <CircularProgress
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
            subtitle={skill.subtitle}
          />
        ))}
      </div>

      <div className="max-w-2xl space-y-5">
        <h3 className="text-lg font-semibold text-white mb-6">Detalle por tecnología</h3>
        {skills.map((skill) => (
          <ProgressBar
            key={`bar-${skill.name}`}
            name={skill.name}
            percentage={skill.percentage}
            color={skill.color}
            subtitle={skill.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
