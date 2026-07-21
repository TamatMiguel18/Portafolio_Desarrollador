import { connections, personalInfo } from '../data/portfolioData';
import Button from '../components/Button';
import Card from '../components/Card';

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding">
      <p className="section-subtitle">// Contacto</p>
      <h2 className="section-title">Conexiones</h2>
      <p className="text-gray-400 mb-12 max-w-xl">
        ¿Interesado en colaborar? Encuéntrame en estas plataformas o escríbeme directamente.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {connections.map((connection) => (
          <Card
            key={connection.id}
            className={
              connection.variant === 'primary'
                ? 'bg-gradient-to-br from-[#0A66C2]/10 to-dark-700 border-[#0A66C2]/20'
                : 'bg-gradient-to-br from-accent/10 to-dark-700 border-accent/20'
            }
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  connection.platform === 'LinkedIn' ? 'bg-[#0A66C2]' : 'bg-accent'
                }`}
              >
                {connection.platform === 'LinkedIn' ? (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">{connection.platform}</h3>
                <p className="text-gray-400 text-sm mb-4">{connection.description}</p>
                <Button
                  href={connection.url}
                  variant={connection.variant === 'primary' ? 'primary' : 'secondary'}
                  size="sm"
                  external
                >
                  Visitar {connection.platform}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="text-center max-w-lg mx-auto">
        <p className="text-gray-400 text-sm mb-2">También puedes escribirme directamente</p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-accent-light font-mono text-lg hover:text-white transition-colors"
        >
          {personalInfo.email}
        </a>
        <p className="text-gray-600 text-xs mt-4 font-mono">
          {personalInfo.location} · Disponible para proyectos
        </p>
      </Card>

      <footer className="mt-20 pt-8 border-t border-dark-700 text-center">
        <p className="text-gray-600 text-sm font-mono">
          Diseñado y desarrollado por {personalInfo.fullName} · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
