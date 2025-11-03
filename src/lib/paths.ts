const FALLBACK_BASE = '/';

// This function is used to add the base path to the given path
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? FALLBACK_BASE;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!base || base === FALLBACK_BASE) {
    return normalizedPath;
  }

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${normalizedPath}`;
}

