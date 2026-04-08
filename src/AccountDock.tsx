import './design-tokens.css'
import './primitives.css'
import { chromeIconMap } from './chromeIcons.tsx'

export type AccountDockProps = {
  balance: string
  status: string
  banner: string
}

export default function AccountDock({ balance, status, banner }: AccountDockProps) {
  const MenuIcon = chromeIconMap.menu
  const StatusIcon = chromeIconMap.status

  return (
    <div className="cc-accountCluster">
      <section className="cc-accountPill" aria-label="Profile summary">
        <div className="cc-accountPill__avatar" aria-hidden="true" />
        <div className="cc-accountPill__copy">
          <span className="cc-accountPill__balance">
            <span aria-hidden="true">◉</span>
            {balance}
          </span>
          <span className="cc-accountPill__status">
            <span className="cc-accountPill__statusDot" aria-hidden="true" />
            {status}
          </span>
        </div>
        <button className="cc-accountPill__menu" aria-label="More options" type="button">
          <MenuIcon size={18} strokeWidth={2.3} />
        </button>
      </section>
      <div className="cc-statusBanner">
        <StatusIcon size={14} strokeWidth={2.6} />
        {banner}
      </div>
    </div>
  )
}
