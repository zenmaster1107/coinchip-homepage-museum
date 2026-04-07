type PillItem = {
  id: string
  label: string
  icon: 'cards' | 'target' | 'globe' | 'ring'
}

type PillsProps = {
  items: PillItem[]
}

function PillIcon({ icon, className }: { icon: PillItem['icon']; className: string }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8' }
  if (icon === 'cards') return <svg {...common}><path d="M7 6h10v12H7z" /><path d="M4 9V4h10" /></svg>
  if (icon === 'target') return <svg {...common}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>
  if (icon === 'globe') return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" /></svg>
  return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M12 8v8M8 12h8" /></svg>
}

export default function Pills({ items }: PillsProps) {
  return (
    // Render the lower navigation objects as one repeated museum pattern.
    // Icons and chevrons stay inline so the component still reads as a single family.
    <>
      {items.map((item) => (
        <article className="pill-card" key={item.id}>
          <PillIcon className="pill-card__icon" icon={item.icon} />
          <strong className="pill-card__label">{item.label}</strong>
          <svg className="pill-card__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m7 10 5 5 5-5" />
          </svg>
        </article>
      ))}
    </>
  )
}
