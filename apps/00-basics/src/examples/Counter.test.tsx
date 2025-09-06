import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  it('renderiza y snapshot mínimo', () => {
    const { asFragment } = render(<Counter />);
    expect(screen.getByText('Counter')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it('incrementa y decrementa', () => {
    render(<Counter />);
    const minus = screen.getByRole('button', { name: '-' });
    const plus = screen.getByRole('button', { name: '+' });
    const value = () => screen.getByText(/\d+/);
    expect(value().textContent).toBe('0');
    fireEvent.click(plus);
    expect(value().textContent).toBe('1');
    fireEvent.click(minus);
    expect(value().textContent).toBe('0');
  });
});
