type UtilityItem = {
  id: string
  label: string
  glyph: string
}

type UtilityRailProps = {
  items: UtilityItem[]
}

export default function UtilityRail({ items }: UtilityRailProps) {
  return (
    // Keep the right rail as a repeated floating-control stack.
    // Labels stay hidden from the visual layout but remain available to assistive tech.
    <aside className="utility-rail" aria-label="Utility actions">
      {items.map((item) => (
        <button className="utility-rail__button" key={item.id} aria-label={item.label}>
          {item.glyph}
        </button>
      ))}
    </aside>
  )
}
