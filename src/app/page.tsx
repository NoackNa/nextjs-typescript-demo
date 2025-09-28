import { Button } from '@/components/atoms/button'
import { Headline } from '@/components/atoms/headline'
import { DefaultTemplate } from '@/components/templates/default'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <DefaultTemplate>
        <Headline alignment="center" text="Demo Page" />
        <section className="flex flex-col items-center gap-4">
          <Button text="ImageText Module" href="/demo/image-text" />
          <Button text="StarRating" href="/demo/star-rating" />
        </section>
      </DefaultTemplate>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Image src="/window.svg" alt="Window icon" width={16} height={16} />
        <p>Welcome to my Next.js / TypeScript Basic Demo App</p>
      </footer>
    </div>
  )
}
