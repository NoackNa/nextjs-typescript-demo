import { DefaultTemplate } from '@/components/templates/default'
import { Button } from '@/components/atoms/button'
import { Headline } from '@/components/atoms/headline'
import { ImageTextModule, ImageTextModuleProps } from '@/components/organisms/image-text'
import { getDemoImageText } from './node/getDemoImageText'

export default async function Page() {
  const { imageTextItems } = await getDemoImageText()

  return (
    <DefaultTemplate>
      <section>
        <Headline text="ImageText Demo Page" />
        <Button text="Get back to start page" href="/" />
      </section>
      {imageTextItems?.map((imageTextItem: ImageTextModuleProps) => {
        return <ImageTextModule key={imageTextItem.id} {...imageTextItem} />
      })}
    </DefaultTemplate>
  )
}
