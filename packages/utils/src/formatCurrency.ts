export function formatCurrency(value: number, locale = 'es-ES', currency = 'EUR') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}

