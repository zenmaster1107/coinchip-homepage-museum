import Chrome from './Chrome.tsx'
import './design-tokens.css'
import './primitives.css'
import { pillItems, recentActivity, utilityItems } from './mockData.ts'

export default function App() {
  return (
    <Chrome
      activePage="trade"
      recentItems={recentActivity}
      navItems={pillItems}
      utilityItems={utilityItems}
    >
      <section className="cc-pagePanel">
        <span className="cc-pagePanel__eyebrow">Shared chrome</span>
        <h1 className="cc-pagePanel__title">Trade</h1>
        <p className="cc-pagePanel__body">
          The left dock, account dock, and right dock are now packaged as reusable chrome so the
          trade, settings, portfolio, and explore pages can all render the same persistent shell.
        </p>
      </section>
    </Chrome>
  )
}
