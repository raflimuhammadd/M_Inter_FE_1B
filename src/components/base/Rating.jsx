import Icon from './Icon';

export default function Rating({ score }) {
  return (
    // Hardcoded color and gap to enforce design spec for all movie items
    <span className="inline-flex items-center gap-0.5 text-[#fbbf24] font-semibold text-xs">
      <Icon name="star" size={11} />
      {score}
    </span>
  );
}
