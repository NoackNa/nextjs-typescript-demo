export type StarIconProps = {
  selected: boolean
  dataStarId?: number
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void
  onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void
}

export const StarIcon = ({ selected, dataStarId, ...props }: StarIconProps) => {
  return (
    <span {...props} data-star-id={dataStarId} className={'text-4xl cursor-pointer'} role="button">
      {selected ? '\u2605' : '\u2606'}
    </span>
  )
}
