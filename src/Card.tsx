type ActivityItem = {
  id: string
  label: string
  time: string
  amount: string
}

type CardProps = {
  items: ActivityItem[]
}

export default function Card({ items }: CardProps) {
  return (
    // Keep the museum card focused on one repeated row pattern.
    // The rows stay data-driven so the component remains small and reusable.
    <section className="museum-card" aria-label="Recent activity">
      <h2 className="museum-card__header">🏆 Recent</h2>
      <div className="museum-card__list">
        {items.map((item) => (
          <article className="recent-activity-row" key={item.id}>
            <div className="recent-activity-row__avatar" aria-hidden="true" />
            <div className="recent-activity-row__content">
              <strong className="recent-activity-row__label">{item.label}</strong>
              <span className="recent-activity-row__time">{item.time}</span>
            </div>
            <span className="recent-activity-row__amount-pill">{item.amount}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
