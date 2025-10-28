const FALLBACK_BASE = '/';

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? FALLBACK_BASE;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!base || base === FALLBACK_BASE) {
    return normalizedPath;
  }

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${normalizedPath}`;
}

