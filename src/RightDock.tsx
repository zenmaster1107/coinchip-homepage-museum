import AccountDock, { type AccountDockProps } from './AccountDock.tsx'
import UtilityRail, { type UtilityItem } from './UtilityRail.tsx'

export type RightDockProps = {
  account: AccountDockProps
  utilities: UtilityItem[]
}

export default function RightDock({ account, utilities }: RightDockProps) {
  return (
    <section className="cc-rightDock">
      <AccountDock {...account} />
      <UtilityRail items={utilities} />
    </section>
  )
}
