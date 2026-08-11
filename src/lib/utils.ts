import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind CSS class names, resolving conflicts.
 *
 * Combines clsx (conditional classes) with twMerge
 * (intelligent Tailwind conflict resolution).
 *
 * @param inputs - Class values (strings, objects, arrays).
 * @returns A merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
