export default function Input({ label, id, name, type = 'text', placeholder, value, onChange, autoComplete }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-[#9b99ab]">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        // Fixed height [50px] prevents layout shifts when focused
        className="bg-[#1e1e2c] border border-[#333350] rounded-2xl text-[#f1f0f5]
                   px-4 py-3 w-full h-[50px] outline-none
                   focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]
                   placeholder:text-[#5c5a70] transition-all duration-200"
      />
    </div>
  )
}