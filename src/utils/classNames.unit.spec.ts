import { classNames } from './classNames'
import { describe, expect, it } from 'vitest'

describe(classNames.name, () => {
  it('joins multiple class names into one string', () => {
    expect(classNames('a', 'b', 'c')).toBe('a b c')
  })

  it('works with a single class', () => {
    expect(classNames('only')).toBe('only')
  })

  it('filters out falsy values', () => {
    expect(classNames('a', false, null, undefined, 'b')).toBe('a b')
  })
})
