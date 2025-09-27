/**
 * Combines multiple class names into a single string.
 * It filters out the falsy values and joins the
 * remaining strings with a space, making it useful for conditionally applying
 * CSS classes in React components.
 *
 * @example
 * ```ts
 * const buttonClass = classNames(
 *   'btn',
 *   isPrimary && 'btn-primary',
 *   isDisabled && 'btn-disabled'
 * )
 *
 * @param classes An array of strings representing CSS class names
 * @returns A single string with all truthy class names separated by a space
 */

export function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ')
}
