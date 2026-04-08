import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe,
  Hexagon,
  Layers,
  MoreVertical,
  Settings,
  Target,
  Trophy,
  User,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

export const chromeIconMap = {
  chart: BarChart3,
  chevron: ChevronDown,
  globe: Globe,
  menu: MoreVertical,
  predictions: Target,
  pro: Hexagon,
  realEstate: Globe,
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

export { type LucideIcon }
