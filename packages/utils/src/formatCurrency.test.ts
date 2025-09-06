import { describe, expect, it } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formatea en EUR por defecto', () => {
    const s = formatCurrency(1234.5);
    expect(s).toMatch(/€|EUR/);
  });
});

