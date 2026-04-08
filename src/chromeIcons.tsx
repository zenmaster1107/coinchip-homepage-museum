import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Compass,
  Globe,
  Layers,
  MoreVertical,
  Settings,
  Trophy,
  User,
  Wallet,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react'

export const chromeIconMap = {
  chart: BarChart3,
  chevron: ChevronDown,
  explore: Compass,
  globe: Globe,
  menu: MoreVertical,
  portfolio: BarChart3,
  recent: Trophy,
  settings: Settings,
  status: CheckCircle2,
  timer: Clock3,
  trade: Layers,
  user: User,
  wallet: Wallet,
} as const

export type ChromeIconName = keyof typeof chromeIconMap

export function resolveChromeIcon(icon: ChromeIconName | LucideIcon) {
  return typeof icon === 'string' ? chromeIconMap[icon] : icon
}

export function ChromeIcon({
  icon,
  ...props
}: {
  icon: ChromeIconName | LucideIcon
} & LucideProps) {
  const Icon = resolveChromeIcon(icon)
  return <Icon {...props} />
}

export { type LucideIcon }
