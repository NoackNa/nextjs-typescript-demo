import { Button } from '@/components/atoms/button'
import { ImageComponent, ImageItemProps } from '@/components/atoms/image'
import { SectionTitle } from '@/components/atoms/section-title'
import { classNames } from '@/utils/classNames'

export type ImageItems = Array<ImageItemProps>

export type ImageTextModuleProps = {
  images?: ImageItems
  title: string
  description: string
  buttonText?: string
  textAlign?: 'left' | 'right'
  id?: number
}

export const ImageTextModule = ({ images, title, description, buttonText, textAlign }: ImageTextModuleProps) => {
  return (
    <section className={classNames('flex', textAlign === 'right' ? '' : '')}>
      <article>
        <SectionTitle text={title} />
        <p>{description}</p>
        {buttonText && <Button text={buttonText} href={'/'} />}
      </article>
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
