import { useState } from 'react'
import Icon from '../base/Icon'

export default function PasswordInput({ label, id, name, placeholder, value, onChange, autoComplete }) {
  // Local state to toggle visibility without exposing to form parent
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-[#9b99ab]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="bg-[#1e1e2c] border border-[#333350] rounded-2xl text-[#f1f0f5]
                     px-4 py-3 pr-12 w-full h-[50px] outline-none
                     focus:border-[#7c3aed] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]
                     placeholder:text-[#5c5a70] transition-all duration-200"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5c5a70] hover:text-[#9b99ab] transition-colors"
          aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
        >
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={18} />
        </button>
      </div>
    </div>
  )
}