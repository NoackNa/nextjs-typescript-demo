import { Button } from '@/components/atoms/button'
import { Headline } from '@/components/atoms/headline'
import StarRating from '@/components/molecules/star-rating'
import { DefaultTemplate } from '@/components/templates/default'

export default async function Page() {
  return (
    <DefaultTemplate>
      <section>
        <Headline text="StarRating Demo Page" />
        <Button text="Get back to start page" href="/" />
      </section>
      <StarRating preSelectedStars={2} totalStars={6} />
    </DefaultTemplate>
  )
}
