import { Button } from '@/components/atoms/button'
import { SectionTitle } from '@/components/atoms/section-title'

export type IntroTextProps = {
  title: string
  description: string
  buttonText?: string
}

const IntroText = ({ title, description, buttonText }: IntroTextProps) => {
  return (
    <article className="grid gap-4">
      <SectionTitle text={title} />
      <p>{description}</p>
      {buttonText && <Button text={buttonText} href={'/'} />}
    </article>
  )
}

export default IntroText
