export default function TimelineItem({ item, isLast = false }) {
  return (
    <div className="relative flex gap-6 pb-10">
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 to-dark-600" />
      )}

      <div className="relative flex-shrink-0 mt-1">
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
            item.highlight
              ? 'border-accent bg-accent/20 shadow-lg shadow-accent/30'
              : 'border-dark-500 bg-dark-700'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${item.highlight ? 'bg-accent' : 'bg-gray-500'}`}
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white">{item.institution || item.company}</h3>
          <span className="text-xs font-mono text-accent-light bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
            {item.period}
          </span>
        </div>

        {item.degree && <p className="text-accent-light text-sm font-medium mb-1">{item.degree}</p>}
        {item.role && <p className="text-accent-light text-sm font-medium mb-1">{item.role}</p>}

        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

        {item.technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono rounded bg-dark-600 text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
