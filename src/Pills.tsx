import type { ButtonHTMLAttributes, ReactNode } from 'react'
import {
  ChevronDown,
  Globe,
  Hexagon,
  Layers,
  Target,
  type LucideIcon,
} from 'lucide-react'
import './design-tokens.css'
import './primitives.css'

const iconMap = {
  cards: Layers,
  trade: Layers,
  target: Hexagon,
  pro: Hexagon,
  globe: Globe,
  'real-estate': Globe,
  ring: Target,
  predictions: Target,
}

export type PillIconName = keyof typeof iconMap

export type PillItem = {
  id: string
  label: string
  icon: PillIconName
}

export type PillsProps = {
  items: PillItem[]
  activeId?: string
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
  chevron = <ChevronDown size={16} strokeWidth={2.2} />,
  type = 'button',
  onClick,
  'aria-label': ariaLabel,
}: PillProps) {
  const Icon = typeof icon === 'string' ? iconMap[icon] : icon

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
