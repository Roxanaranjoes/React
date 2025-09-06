export type FetcherOptions = RequestInit & { baseUrl?: string };

export async function fetcher<T>(path: string, options: FetcherOptions = {}): Promise<T> {
  const base = options.baseUrl ?? import.meta?.env?.VITE_BASE_URL ?? '';
  const url = path.startsWith('http') ? path : `${base}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return (await res.json()) as T;
  // @ts-expect-error: permitir texto para respuestas no-JSON
  return (await res.text()) as T;
}

