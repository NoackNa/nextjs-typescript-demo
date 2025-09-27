import { ImageComponent, ImageItemProps } from '@/components/atoms/image'
import IntroText, { IntroTextProps } from '@/components/molecules/intro-text'
import { classNames } from '@/utils/classNames'

export type ImageItems = Array<ImageItemProps>

export type ImageTextModuleProps = {
  images?: ImageItems
  textAlign?: 'left' | 'right'
  id?: number
} & IntroTextProps

export const ImageTextModule = ({ images, title, description, buttonText, textAlign }: ImageTextModuleProps) => {
  return (
    <section className={classNames('flex', textAlign === 'right' ? '' : '')}>
      <IntroText title={title} description={description} buttonText={buttonText} />
      {images && (
        <div>
          {images.map((image) => (
            <ImageComponent key={`image-${image.id}`} src={image.src} alt={image.alt} />
          ))}
        </div>
      )}
    </section>
  )
}
