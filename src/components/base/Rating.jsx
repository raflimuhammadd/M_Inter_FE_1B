import Icon from './Icon'

export default function Rating({ score }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-[#fbbf24] font-semibold text-xs">
      <Icon name="star" size={11} />
      {score}
    </span>
  )
}