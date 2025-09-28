import { getDemoImageText } from '@/app/demo/image-text/node/getDemoImageText'
import { ImageTextList } from '@/components/organisms/image-text-list'

/**
 * This component was created to demonstrate React Suspense
 * @returns ImageTextListWithSuspense
 */

export const ImageTextListWithSuspense = async () => {
  const { imageTextItems } = await getDemoImageText()
  return <ImageTextList imageTextItems={imageTextItems} />
}
