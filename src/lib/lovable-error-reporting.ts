/**
 * Error reporting integration.
 *
 * Hook and utility for reporting client-side errors to
 * external monitoring services.
 */

/**
 * Report an error to the configured error-reporting backend.
 *
 * Currently logs to console; extend to send to Sentry,
 * LogRocket, or similar services.
 *
 * @param error - The error to report.
 * @param context - Optional context like the current route.
 */
export function reportError(error: Error, context?: string): void {
  console.error(`[SYBAUUPI] ${context ?? "app"}:`, error.message)
  // Future: POST to error-reporting API
}
