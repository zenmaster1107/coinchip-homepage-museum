import type { ReactNode } from 'react'
import { ChromeIcon } from './chromeIcons.tsx'
import './design-tokens.css'
import './primitives.css'

export type CardItem = {
  id: string
  label: string
  time: string
  amount: string
  leading?: ReactNode
  trailing?: ReactNode
}

export type CardProps = {
  title?: ReactNode
  icon?: ReactNode
  ariaLabel?: string
  items?: CardItem[]
  className?: string
  children?: ReactNode
}

export function CardRow({ item }: { item: CardItem }) {
  return (
    <li className="cc-card__row">
      {item.leading ?? <span className="cc-card__avatar" aria-hidden="true" />}
      <span className="cc-card__copy">
        <span className="cc-card__label">{item.label}</span>
        <span className="cc-card__meta">{item.time}</span>
      </span>
      {item.trailing ?? <span className="cc-card__amount" data-numeric="true">{item.amount}</span>}
    </li>
  )
}

export default function Card({
  title = 'Recent',
  icon = <ChromeIcon icon="recent" size={14} strokeWidth={2.25} />,
  ariaLabel = 'Recent activity',
  items,
  className = '',
  children,
}: CardProps) {
  return (
    <section className={['cc-card', className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
      <header className="cc-card__header">
        <span className="cc-card__headerIcon" aria-hidden="true">{icon}</span>
        <span className="cc-card__title">{title}</span>
      </header>

      {children ?? (
        <ul className="cc-card__list" role="list">
          {(items ?? []).map((item) => (
            <CardRow key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  )
}
