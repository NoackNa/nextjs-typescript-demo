import Image, { type ImageProps } from 'next/image'

export type ImageItemProps = {
  id?: string
} & ImageProps

export const ImageComponent = (props: ImageItemProps) => {
  // TODO: Static attributes like height and width need to be made dynamic to ensure reusability in other modules
  return <Image {...props} alt={props.alt ? props.alt : 'missing alt text'} width={200} height={101} />
}
