export type SectionTitleProps = {
  text: string
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h2 className="text-xl mt-2 mb-8">{text}</h2>
}
