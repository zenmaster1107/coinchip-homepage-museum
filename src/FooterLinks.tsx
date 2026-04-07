export default function FooterLinks() {
  return (
    // Keep the legal and support links as a single micro-footer group.
    // They stay visually quiet so the left rail remains the primary focus.
    <footer className="left-rail__footer">
      <span>SUPPORT</span>
      <span>PRIVACY POLICY</span>
      <span>TERMS</span>
    </footer>
  )
}
