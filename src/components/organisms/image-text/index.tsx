import { ImageComponent, ImageItemProps } from '@/components/atoms/image'
import IntroText, { IntroTextProps } from '@/components/molecules/intro-text'
import { classNames } from '@/utils/classNames'

export type ImageItems = Array<ImageItemProps>

export type ImageTextModuleProps = {
  images?: ImageItems
  textAlign?: 'right'
  id?: number | string
} & IntroTextProps

export const ImageTextModule = ({ images, title, description, buttonText, textAlign }: ImageTextModuleProps) => {
  const maxFourImages = images && images.length <= 4

  return (
    <section className={classNames('grid gap-6 lg:gap-10', maxFourImages && 'grid-rows-1 lg:grid-cols-2')}>
      <div className={classNames(textAlign === 'right' && maxFourImages && 'lg:col-start-2')}>
        <IntroText title={title} description={description} buttonText={buttonText} />
      </div>
      {images && (
        <div
          className={classNames(
            'grid gap-3',
            maxFourImages ? 'grid-cols-4 lg:row-start-1' : 'grid-cols-6 grid-rows-2 lg:gap-5',
            textAlign === 'right' && 'lg:col-start-1',
          )}
        >
          {images.map((image) => (
            <ImageComponent key={`image-${image.id}`} src={image.src} alt={image.alt} />
          ))}
        </div>
      )}
    </section>
  )
}
