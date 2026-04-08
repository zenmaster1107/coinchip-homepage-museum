import CircleButton from './CircleButton.tsx'
import type { ChromeIconName } from './chromeIcons.tsx'
import './design-tokens.css'
import './primitives.css'

export type UtilityItem = {
  id: string
  label: string
  icon: Extract<ChromeIconName, 'chart' | 'timer' | 'wallet' | 'user' | 'settings'>
}

type UtilityRailProps = {
  items: UtilityItem[]
}

export default function UtilityRail({ items }: UtilityRailProps) {
  return (
    <aside className="cc-utilityRail" aria-label="Utility actions">
      {items.map((item) => (
        <CircleButton
          className="cc-utilityButton"
          key={item.id}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </aside>
  )
}
