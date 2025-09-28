import { DefaultTemplate } from '@/components/templates/default'
import { Button } from '@/components/atoms/button'
import { Headline } from '@/components/atoms/headline'
import { Suspense } from 'react'
import { Loading } from '@/components/atoms/loading'
import { ImageTextListWithSuspense } from '@/components/organisms/image-text-list-with-suspense'

export default async function Page() {
  return (
    <DefaultTemplate>
      <section>
        <Headline text="ImageText Demo Page" />
        <Button text="Get back to start page" href="/" />
      </section>
      <Suspense fallback={<Loading />}>
        <ImageTextListWithSuspense />
      </Suspense>
    </DefaultTemplate>
  )
}
