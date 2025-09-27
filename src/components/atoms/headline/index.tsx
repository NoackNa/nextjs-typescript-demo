import { classNames } from '@/utils/classNames'

export type HeadlineProps = {
  text: string
  alignment?: 'center' | 'right'
}

export const Headline = ({ text, alignment }: HeadlineProps) => {
  return (
    <h1
      className={classNames(
        'text-3xl mt-2 mb-8',
        alignment === 'center' && 'text-center',
        alignment === 'right' && 'text-right',
      )}
    >
      {text}
    </h1>
  )
}
