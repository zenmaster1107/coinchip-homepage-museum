import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ChromeIcon, resolveChromeIcon, type ChromeIconName } from './chromeIcons.tsx'
import './design-tokens.css'
import './primitives.css'

export type PillIconName = Extract<
  ChromeIconName,
  'trade' | 'portfolio' | 'explore' | 'settings'
>

export type PillItem = {
  id: PillIconName
  label: string
  icon: PillIconName
}

export type PillsProps = {
  items: PillItem[]
  activeId?: PillIconName
  className?: string
  onSelect?: (item: PillItem) => void
  ariaLabel?: string
}

export type PillProps = {
  label: string
  icon: PillIconName | LucideIcon
  active?: boolean
  className?: string
  chevron?: ReactNode
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'aria-label'>

export function PillStack({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <ul className={['cc-pillStack', className].filter(Boolean).join(' ')}>{children}</ul>
}

export function Pill({
  label,
  icon,
  active = false,
  className = '',
  chevron = <ChromeIcon icon="chevron" size={16} strokeWidth={2.2} />,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
}: PillProps) {
  const Icon = resolveChromeIcon(icon)

  return (
    <button
      type={type}
      className={['cc-pill', active ? 'cc-pill--active' : '', className].filter(Boolean).join(' ')}
      aria-pressed={active}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
    >
      <span className="cc-pill__iconWell" aria-hidden="true">
        <Icon size={16} strokeWidth={2.1} />
      </span>
      <span className="cc-pill__label">{label}</span>
      <span className="cc-pill__chevron" aria-hidden="true">
        {chevron}
      </span>
    </button>
  )
}

export default function Pills({
  items,
  activeId,
  className = '',
  onSelect,
  ariaLabel = 'Primary navigation',
}: PillsProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <PillStack>
        {items.map((item) => {
          const isActive = item.id === activeId

          return (
            <li key={item.id}>
              <Pill
                label={item.label}
                icon={item.icon}
                active={isActive}
                onClick={() => onSelect?.(item)}
              />
            </li>
          )
        })}
      </PillStack>
    </nav>
  )
}
