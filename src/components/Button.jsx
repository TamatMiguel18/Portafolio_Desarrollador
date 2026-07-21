const variants = {
  primary:
    'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25 hover:shadow-accent/40',
  secondary:
    'bg-dark-600 hover:bg-dark-500 text-gray-100 border border-dark-500 hover:border-accent/50',
  outline:
    'bg-transparent border border-accent/60 text-accent-light hover:bg-accent/10 hover:border-accent',
  ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-dark-600',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  external = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
