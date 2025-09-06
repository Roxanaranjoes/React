import React from 'react';

type CardProps = {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function Card({ title, children, footer }: CardProps) {
  return (
    <section className="rounded border border-gray-200 bg-white p-4 shadow-sm">
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      <div className="text-gray-700">{children}</div>
      {footer && <div className="mt-3 border-t pt-3 text-sm text-gray-500">{footer}</div>}
    </section>
  );
}

