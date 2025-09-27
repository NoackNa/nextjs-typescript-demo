import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Headline } from '@/components/atoms/headline'

describe(Headline.name, () => {
  it('renders with default styles', async () => {
    await render(<Headline text="Hello World" />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline.className).toContain('text-3xl')
    expect(headline.className).toContain('mt-2')
    expect(headline.className).toContain('mb-8')
    expect(headline.className).not.toContain('text-center')
    expect(headline.className).not.toContain('text-right')
  })

  it('applies center alignment class when alignment="center"', async () => {
    await render(<Headline text="Centered" alignment="center" />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline.className).toContain('text-center')
  })

  it('applies right alignment class when alignment="right"', async () => {
    await render(<Headline text="Right aligned" alignment="right" />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline.className).toContain('text-right')
  })
})
