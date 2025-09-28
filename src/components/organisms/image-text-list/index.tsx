import { ImageTextModule, type ImageTextModuleProps } from '@/components/organisms/image-text'

type ImageTextListProps = {
  imageTextItems: Array<ImageTextModuleProps>
}

/**
 * This component was created to demonstrate React Suspense
 * @props imageTextItems
 * @returns ImageTextList
 */

export const ImageTextList = ({ imageTextItems }: ImageTextListProps) => {
  return (
    <>
      {imageTextItems?.map((imageTextItem: ImageTextModuleProps) => {
        return <ImageTextModule key={imageTextItem.id} {...imageTextItem} />
      })}
    </>
  )
}
