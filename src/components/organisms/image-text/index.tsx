import { ImageComponent, type ImageItemProps } from '@/components/atoms/image'
import IntroText, { type IntroTextProps } from '@/components/molecules/intro-text'
import { classNames } from '@/utils/classNames'

export type ImageItems = Array<ImageItemProps>

export type ImageTextModuleProps = {
  images?: ImageItems
  textAlign?: 'right' | 'left'
  id?: number | string
} & IntroTextProps

export const ImageTextModule = ({ images, title, description, buttonText, textAlign }: ImageTextModuleProps) => {
  const maxFourImages = images && images.length <= 4

  return (
    <section className={classNames('grid gap-6 lg:gap-10', maxFourImages && 'grid-rows-1 lg:grid-cols-2')}>
      <IntroText title={title} description={description} buttonText={buttonText} />
      {images && (
        <div
          className={classNames(
            'grid gap-3 grid-cols-3 lg:grid-cols-4',
            maxFourImages ? 'lg:row-start-1' : 'lg:grid-cols-6 grid-rows-2 lg:gap-5 lg:max-w-max',
            textAlign === 'left' && maxFourImages ? 'lg:col-start-2' : 'lg:col-start-1',
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
