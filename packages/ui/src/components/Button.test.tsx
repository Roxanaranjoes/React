import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renderiza con rol y nombre', () => {
    render(<Button>Enviar</Button>);
    const btn = screen.getByRole('button', { name: /enviar/i });
    expect(btn).toBeInTheDocument();
  });

  it('muestra estado loading y disabled', () => {
    render(<Button loading>Acción</Button>);
    const btn = screen.getByRole('button', { name: /cargando/i });
    expect(btn).toBeDisabled();
  });
});

