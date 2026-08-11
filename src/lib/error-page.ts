/**
 * Error page utility.
 *
 * Generates error-page data consumed by the router's error boundary
 * to display user-friendly error messages.
 */

/** Props passed to the default error component. */
export interface ErrorPageData {
  title: string
  message: string
}

/**
 * Build error page data from an error.
 *
 * @param error - The caught error or error-like object.
 * @returns Structured data for the error page.
 */
export function getErrorPageData(error: unknown): ErrorPageData {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred."
  return {
    title: "Something went wrong",
    message,
  }
}
