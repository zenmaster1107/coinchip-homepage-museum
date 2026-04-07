function BlueCards() {
  return (
    <svg className="feature-chip__symbol" viewBox="0 0 120 120" fill="none">
      <rect x="52" y="22" width="40" height="54" rx="8" fill="#ffba2d" opacity="0.92" transform="rotate(22 52 22)" />
      <rect x="30" y="28" width="46" height="62" rx="9" fill="#f7f7f7" />
      <path d="M53 46 60 55 53 64 46 55Z" fill="#ff6b1c" />
      <path d="M43 70 47 75 43 80 39 75Z" fill="#ff8b2d" />
      <path d="M66 35 70 40 66 45 62 40Z" fill="#ff8b2d" />
    </svg>
  )
}

function WarmGlyph() {
  return (
    <svg className="feature-chip__symbol" viewBox="0 0 96 96" fill="none">
      <rect x="30" y="28" width="36" height="36" rx="6" fill="currentColor" />
      <rect x="22" y="38" width="8" height="8" fill="currentColor" />
      <rect x="66" y="38" width="8" height="8" fill="currentColor" />
      <rect x="40" y="40" width="6" height="6" fill="#ef7b31" />
      <rect x="50" y="40" width="6" height="6" fill="#ef7b31" />
      <rect x="40" y="50" width="16" height="4" fill="#ef7b31" />
      <rect x="34" y="66" width="6" height="6" fill="currentColor" />
      <rect x="56" y="66" width="6" height="6" fill="currentColor" />
    </svg>
  )
}

export default function FeatureChips() {
  return (
    // Compose the large decorative chips as one scene layer behind the museum cards.
    // Inline SVG lets the chip art get much closer to the reference without new asset files.
    <div className="chip-canvas" aria-hidden="true">
      <div className="feature-chip feature-chip--neutral"><span className="feature-chip__symbol">━</span></div>
      <div className="feature-chip feature-chip--green"><span className="feature-chip__symbol">♠</span></div>
      <div className="feature-chip feature-chip--blue"><BlueCards /></div>
      <div className="feature-chip feature-chip--warm"><span className="feature-chip__core"><WarmGlyph /></span></div>
      <div className="feature-chip feature-chip--black"><span className="feature-chip__symbol">◉</span></div>
    </div>
  )
}
