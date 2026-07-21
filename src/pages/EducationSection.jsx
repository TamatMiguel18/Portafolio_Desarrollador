import { education } from '../data/portfolioData';
import TimelineItem from '../components/TimelineItem';

export default function EducationSection() {
  return (
    <section id="educacion" className="section-padding bg-dark-800/50">
      <p className="section-subtitle">// Educación</p>
      <h2 className="section-title">Formación Académica</h2>
      <p className="text-gray-400 mb-12 max-w-xl">
        Mi trayectoria educativa con énfasis en el Centro Educativo Kinal, referente en formación
        tecnológica en Guatemala.
      </p>

      <div className="max-w-2xl">
        {education.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
