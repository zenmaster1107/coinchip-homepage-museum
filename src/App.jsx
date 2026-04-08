import AccountPanel from './AccountPanel.tsx'
import BrandMark from './BrandMark.tsx'
import Card from './Card.tsx'
import Pills from './Pills.tsx'
import UtilityRail from './UtilityRail.tsx'
import './design-tokens.css'
import './primitives.css'
import { pillItems, recentActivity, utilityItems } from './mockData.ts'

export default function App() {
  return (
    <main className="cc-scene">
      <div className="cc-scene__frame">
        <section className="cc-leftDock">
          <BrandMark />
          <Card items={recentActivity.map(({ avatarColor, ...item }) => item)} />
          <Pills items={pillItems} activeId="trade" />
          <div className="cc-dockFooter">
            <span>Support</span>
            <span>AML Policy</span>
            <span>Terms</span>
          </div>
        </section>

        <section className="cc-centerStage" aria-hidden="true" />

        <section className="cc-rightDock">
          <AccountPanel />
          <UtilityRail items={utilityItems} />
        </section>
      </div>
    </main>
  )
}
