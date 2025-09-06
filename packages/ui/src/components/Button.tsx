import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({ children, disabled, loading, variant = 'primary', ...rest }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400',
    ghost: 'bg-transparent text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-400',
  };
  return (
    <button
      type={rest.type ?? 'button'}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} disabled:opacity-60 disabled:cursor-not-allowed`}
      {...rest}
    >
      {loading ? 'Cargando…' : children}
    </button>
  );
}

