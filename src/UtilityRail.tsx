import { BarChart3, Clock3, Settings, User, Wallet } from 'lucide-react'
import './design-tokens.css'
import './primitives.css'

type UtilityItem = {
  id: string
  label: string
  glyph: string
}

type UtilityRailProps = {
  items: UtilityItem[]
}

const iconMap = {
  chart: BarChart3,
  timer: Clock3,
  wallet: Wallet,
  user: User,
  settings: Settings,
}

export default function UtilityRail({ items }: UtilityRailProps) {
  return (
    <aside className="cc-utilityRail" aria-label="Utility actions">
      {items.map((item) => (
        <button className="cc-utilityButton" key={item.id} aria-label={item.label} type="button">
          {(() => {
            const Icon = iconMap[item.id as keyof typeof iconMap] ?? Settings
            return <Icon size={15} strokeWidth={2.15} />
          })()}
        </button>
      ))}
    </aside>
  )
}
