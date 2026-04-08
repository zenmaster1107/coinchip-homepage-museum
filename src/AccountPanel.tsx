import { CheckCircle2, MoreVertical } from 'lucide-react'
import './design-tokens.css'
import './primitives.css'

export default function AccountPanel() {
  return (
    <div className="cc-accountCluster">
      <section className="cc-accountPill" aria-label="Profile summary">
        <div className="cc-accountPill__avatar" aria-hidden="true" />
        <div className="cc-accountPill__copy">
          <span className="cc-accountPill__balance">
            <span aria-hidden="true">◉</span>
            4,544
          </span>
          <span className="cc-accountPill__status">
            <span className="cc-accountPill__statusDot" aria-hidden="true" />
            Online
          </span>
        </div>
        <button className="cc-accountPill__menu" aria-label="More options" type="button">
          <MoreVertical size={18} strokeWidth={2.3} />
        </button>
      </section>
      <div className="cc-statusBanner">
        <CheckCircle2 size={14} strokeWidth={2.6} />
        Deposit Complete
      </div>
    </div>
  )
}
