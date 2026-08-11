/**
 * Error capture utility.
 *
 * Provides a client-side error boundary helper that captures
 * unhandled exceptions and reports them for debugging.
 */

/**
 * Capture an error and log it to the console.
 * Optionally send to an error-reporting service.
 *
 * @param error - The caught error.
 */
export function captureError(error: Error): void {
  console.error("[SYBAUUPI Error]", error.message)
}
