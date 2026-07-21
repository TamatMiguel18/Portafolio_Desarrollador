import { experience } from '../data/portfolioData';
import TimelineItem from '../components/TimelineItem';

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="section-padding">
      <p className="section-subtitle">// Experiencia</p>
      <h2 className="section-title">Trayectoria Profesional</h2>
      <p className="text-gray-400 mb-12 max-w-xl">
        Experiencia práctica en desarrollo full stack, metodologías ágiles e integración de hardware IoT.
      </p>

      <div className="max-w-2xl">
        {experience.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
