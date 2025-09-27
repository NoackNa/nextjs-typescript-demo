export type SectionTitleProps = {
  text: string
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h2 className="text-xl">{text}</h2>
}
