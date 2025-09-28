'use client'

import { StarIcon } from '@/components/atoms/star-icon'
import { useMemo, useState } from 'react'

type StarRatingProps = {
  preSelectedStars: number
  totalStars: number
}

const StarRating = ({ preSelectedStars, totalStars }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(preSelectedStars - 1 || 0)
  const [selection, setSelection] = useState<number>(0)
  const starArray = useMemo(() => Array.from({ length: totalStars }), [totalStars])

  const onHover = (event: React.MouseEvent<HTMLElement>) => {
    const starId = Number(event.currentTarget.dataset.starId)
    setSelection(starId ?? 0)
  }

  const onLeave = () => {
    setSelection(0)
  }

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    const starId = Number(event.currentTarget.dataset.starId)
    setRating(starId ?? rating)
  }

  return (
    <div>
      {starArray.map((_, index: number) => (
        <StarIcon
          onClick={onClick}
          onMouseLeave={onLeave}
          onMouseOver={onHover}
          selected={(selection || rating) >= index}
          dataStarId={index}
          key={`star-${index}`}
        />
      ))}
    </div>
  )
}

export default StarRating
