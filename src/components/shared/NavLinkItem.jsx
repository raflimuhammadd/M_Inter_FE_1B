import { NavLink } from 'react-router-dom'
import Icon from '../base/Icon'

export default function NavLinkItem({ to, icon, label, active }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full
         transition-colors whitespace-nowrap
         ${isActive || active
           ? 'text-white font-bold'
           : 'text-white/70 hover:text-white hover:bg-white/10'
         }`
      }
    >
      <Icon name={icon} size={14} />
      {label}
    </NavLink>
  )
}