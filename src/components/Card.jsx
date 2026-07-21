export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-dark-700 border border-dark-600 rounded-xl p-6 ${
        hover
          ? 'transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
