import Link from 'next/link'
import './styles.scss'

export type ButtonProps = {
  text: string
  href: string
}

export const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link className="button--primary" href={href}>
      {text}
    </Link>
  )
}
