import type { ButtonHTMLAttributes } from 'react'
import './design-tokens.css'
import './primitives.css'
import { type ChromeIconName, resolveChromeIcon, type LucideIcon } from './chromeIcons.tsx'

export type CircleButtonProps = {
  icon: ChromeIconName | LucideIcon
  label: string
  className?: string
  size?: number
  strokeWidth?: number
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'aria-label'>

export default function CircleButton({
  icon,
  label,
  className = '',
  size = 15,
  strokeWidth = 2.15,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
}: CircleButtonProps) {
  const Icon = resolveChromeIcon(icon)

  return (
    <button
      className={['cc-circleButton', className].filter(Boolean).join(' ')}
      type={type}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
    >
      <Icon size={size} strokeWidth={strokeWidth} />
    </button>
  )
}
