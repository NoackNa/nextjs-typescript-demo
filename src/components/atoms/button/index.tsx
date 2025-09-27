import Link from 'next/link'

export type ButtonProps = {
  text: string
  href: string
}

export const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      className="w-max focus:outline-none text-white bg-green-700 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      href={href}
    >
      {text}
    </Link>
  )
}
