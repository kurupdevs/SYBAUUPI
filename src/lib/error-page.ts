export interface ErrorPageData {
  title: string
  message: string
}

export function getErrorPageData(error: unknown): ErrorPageData {
  const message = error instanceof Error ? error.message : "An unexpected error occurred."
  return { title: "Something went wrong", message }
}
