export function first<T>(items: T | T[]): T {
  return Array.isArray(items) ? items[0] : items
}
