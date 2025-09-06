import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('muestra label y error accesible', () => {
    render(<Input label="Email" error="Requerido" />);
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Requerido');
  });
});
