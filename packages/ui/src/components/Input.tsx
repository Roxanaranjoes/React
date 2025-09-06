import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, id, ...rest }: InputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const describedBy = error ? `${inputId}-error` : undefined;
  return (
    <label className="block">
      {label && (
        <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
      )}
      <input
        id={inputId}
        aria-invalid={!!error || undefined}
        aria-describedby={describedBy}
        className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        {...rest}
      />
      {error && (
        <span id={describedBy} role="alert" className="mt-1 block text-sm text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
