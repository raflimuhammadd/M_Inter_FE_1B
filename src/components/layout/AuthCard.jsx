export default function AuthCard({ title, subtitle, children }) {
  return (
    // Fixed min-height ensures content doesn't jump during form state changes
    <div className="bg-[#181a1c]/30 border border-[#0d0d0f] rounded-3xl p-10
                    w-full max-w-[529px] min-h-[663px] mx-auto
                    shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_60px_rgba(24,26,28,0.3)]">
      <div className="flex w-full justify-center mb-9">
        <img src="/assets/images/chill-logo.png" alt="CHILL" className="w-[163px] h-11" />
      </div>
      <h1 className="text-[1.875rem] font-extrabold tracking-[-0.7px] text-[#f1f0f5] text-center">
        {title}
      </h1>
      <p className="text-sm text-[#9b99ab] text-center mb-9">{subtitle}</p>
      <div className="flex flex-col gap-9 max-w-[449px] w-full mx-auto">
        {children}
      </div>
    </div>
  )
}