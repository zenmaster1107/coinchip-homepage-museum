export default function AccountPanel() {
  return (
    // Group the profile summary and success state in one floating account cluster.
    // This keeps the top-right overlay easy to position without page-wide coupling.
    <>
      <section className="account-panel" aria-label="Profile summary">
        <div className="account-panel__avatar" aria-hidden="true">👽</div>
        <div className="account-panel__details">
          <span className="account-panel__stat">4,544</span>
          <span className="account-panel__status">Online</span>
        </div>
        <button className="account-panel__menu" aria-label="More options">⋮</button>
      </section>
      <div className="status-toast">Deposit Complete</div>
    </>
  )
}
