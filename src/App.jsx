import AccountPanel from './AccountPanel.tsx'
import BrandMark from './BrandMark.tsx'
import Card from './Card.tsx'
import FeatureChips from './FeatureChips.tsx'
import FooterLinks from './FooterLinks.tsx'
import Pills from './Pills.tsx'
import UtilityRail from './UtilityRail.tsx'
import './design-tokens.css'
import { pillItems, recentActivity, utilityItems } from './mockData.ts'

function App() {
  return (
    // Build the homepage museum as a full scene so every visible object can be tuned.
    // The left rail remains modular while the decorative layer sits behind it.
    <main className="home-scene">
      <BrandMark />
      <FeatureChips />
      <section className="left-rail">
        <Card items={recentActivity} />
        <Pills items={pillItems} />
        <FooterLinks />
      </section>
      <AccountPanel />
      <UtilityRail items={utilityItems} />
    </main>
  )
}

export default App
