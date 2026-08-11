import { captureError } from "./error-capture"

export function reportError(error: Error | string): void {
  captureError(error)
  if (typeof window !== "undefined") {
    console.error("[ErrorPage]", error)
  }
}

export function createErrorDisplay(error: Error): string {
  return `
    <div style="padding:2rem;text-align:center;">
      <h2>Something went wrong</h2>
      <p>${error.message}</p>
    </div>
  `
}
