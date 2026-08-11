const errors: Array<{ message: string; timestamp: number }> = []

export function captureError(error: Error | string): void {
  errors.push({
    message: typeof error === "string" ? error : error.message,
    timestamp: Date.now(),
  })
  if (errors.length > 100) errors.shift()
}

export function getErrors() { return [...errors] }
export function clearErrors() { errors.length = 0 }
