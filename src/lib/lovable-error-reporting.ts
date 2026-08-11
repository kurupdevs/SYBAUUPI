export function reportError(error: Error, context?: string): void {
  console.error(`[SYBAUUPI] ${context ?? "app"}:`, error.message)
}
