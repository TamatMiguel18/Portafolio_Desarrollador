import { personalInfo, socialLinks } from '../data/portfolioData';
import Card from '../components/Card';

function InfoRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-sm text-gray-200 font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="section-padding bg-dark-800/50">
      <p className="section-subtitle">// Sobre mí</p>
      <h2 className="section-title">{personalInfo.title}</h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div>
          <p className="text-gray-400 leading-relaxed text-base mb-6">{personalInfo.aboutDescription}</p>

          <div className="space-y-4">
            <InfoRow
              label="Nombre completo"
              value={personalInfo.fullName}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
            <InfoRow
              label="Ubicación"
              value={personalInfo.location}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <InfoRow
              label="Correo electrónico"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card>
            <h3 className="text-sm font-semibold text-white mb-4">Redes profesionales</h3>
            <div className="space-y-3">
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-dark-600 hover:bg-dark-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-accent-light transition-colors">
                    {socialLinks.linkedin.label}
                  </p>
                  <p className="text-xs text-gray-500">Perfil profesional</p>
                </div>
              </a>

              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-dark-600 hover:bg-dark-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-dark-900 flex items-center justify-center border border-dark-500">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-accent-light transition-colors">
                    {socialLinks.github.label}
                  </p>
                  <p className="text-xs text-gray-500">Repositorios y código</p>
                </div>
              </a>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-purple-500/5 border-accent/20">
            <p className="text-sm text-gray-300 italic leading-relaxed">
              "El código es mi herramienta para resolver problemas reales y construir el futuro digital
              de Guatemala."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
