import BrandMark from './BrandMark.tsx'
import Card, { type CardItem } from './Card.tsx'
import FooterLinks from './FooterLinks.tsx'
import Pills, { type PillItem } from './Pills.tsx'

export type LeftDockProps = {
  activity: CardItem[]
  navigation: PillItem[]
  activeId?: string
  onSelectPage?: (item: PillItem) => void
}

export default function LeftDock({
  activity,
  navigation,
  activeId = 'trade',
  onSelectPage,
}: LeftDockProps) {
  return (
    <section className="cc-leftDock">
      <BrandMark />
      <Card items={activity} />
      <Pills items={navigation} activeId={activeId} onSelect={onSelectPage} />
      <FooterLinks />
    </section>
  )
}
