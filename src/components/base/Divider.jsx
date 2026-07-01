export default function Divider({ text = 'atau' }) {
  return (
    // Used fixed height/width to ensure alignment across different auth cards
    <div className="flex items-center gap-3 text-sm text-[#5c5a70]">
      <span className="flex-1 h-px bg-[#2a2a3d]" />
      {text}
      <span className="flex-1 h-px bg-[#2a2a3d]" />
    </div>
  );
}
