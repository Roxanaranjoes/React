import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renderiza título y contenido', () => {
    render(<Card title="Título">Contenido</Card>);
    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });
});

