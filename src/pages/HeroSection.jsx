import { personalInfo, socialLinks } from '../data/portfolioData';
import Button from '../components/Button';

export default function HeroSection() {
  return (
    <section id="inicio" className="section-padding min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-3xl animate-fade-in">
        <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">
          Bienvenido a mi portafolio
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Hola, soy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-purple-400">
            {personalInfo.shortName}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4 font-light">
          {personalInfo.heroTagline}
        </p>

        <p className="text-gray-500 mb-10 max-w-xl">{personalInfo.heroDescription}</p>

        <div className="flex flex-wrap gap-4">
          <Button
            href={socialLinks.github.url}
            external={true}
          >
            Ver Proyectos en GitHub
          </Button>
          <Button
            href="#contacto"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contactar
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent max-w-xs" />
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">
            Scroll para explorar
          </p>
        </div>
      </div>
    </section>
  );
}
