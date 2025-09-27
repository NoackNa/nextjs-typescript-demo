import { DefaultTemplate } from '@/components/templates/default'
import { Button } from '@/components/atoms/button'
import { Headline } from '@/components/atoms/headline'
import { ImageTextModule, ImageTextModuleProps } from '@/components/organisms/image-text'

// TODO: replace with GQL_ENDPOINT later
async function getDemoImageText(): Promise<{ imageTextItems: Array<ImageTextModuleProps> }> {
  const data = await fetch('http://localhost:3001/demo/image-text/data')
  return await data.json()
}

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
