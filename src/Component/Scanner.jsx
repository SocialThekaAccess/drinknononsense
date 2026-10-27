import './Scanner.css';

function Scanner() {
  return (
    <div className="scanner-page">
      <div className="scan-bg-decoration scan-decoration-1" />
      <div className="scan-bg-decoration scan-decoration-2" />
      <div className="scan-bg-decoration scan-decoration-3" />

      {/* Header */}
      <header className="scan-header">
        <div className="scan-brand">NO NONSENSE</div>
        <div className="scan-tagline-wrap">
          <span className="scan-line" />
          <span className="scan-tagline">SCANNER</span>
          <span className="scan-line" />
        </div>
      </header>

      {/* Company Details */}
      <section className="scan-details-container">
        {/* Manufacturer */}
        <article className="scan-detail-card">
          <div className="scan-card-tag">01</div>
          <div className="scan-detail-header">
            <div className="scan-icon-badge">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21V9l6 4V9l6 4V5h3v16z" />
                <path d="M3 21h18" />
              </svg>
            </div>
            <div className="scan-detail-title">MANUFACTURED BY</div>
          </div>

          <div className="scan-company-name">PATEL BEVERAGES</div>
          <div className="scan-company-subtitle">PRIVATE LIMITED</div>

          <div className="scan-detail-divider" />

          <div className="scan-address">
            <svg className="scan-address-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            <div className="scan-address-text">
              <div>No.: 505/2,3-4,</div>
              <div>GIDC Estate Makarpura,</div>
              <div>Vadodara, Gujarat – 390010</div>
            </div>
          </div>

          <div className="scan-license">
            <div className="scan-license-label">FSSAI LIC NO.</div>
            <div className="scan-license-number">10013021000941</div>
          </div>
        </article>

        {/* Marketer */}
        <article className="scan-detail-card scan-marketer-card">
          <div className="scan-card-tag">02</div>
          <div className="scan-detail-header">
            <div className="scan-icon-badge">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11v2a1 1 0 0 0 1 1h3l8 4V6L7 10H4a1 1 0 0 0-1 1z" />
                <path d="M18.5 9a4 4 0 0 1 0 6" />
              </svg>
            </div>
            <div className="scan-detail-title">MARKETED BY</div>
          </div>

          <div className="scan-company-name">
            FLAVOR<span className="scan-red">ON</span>
          </div>
          <div className="scan-company-subtitle">FOOD AND BEVERAGES</div>

          <div className="scan-detail-divider" />

          <div className="scan-address">
            <svg className="scan-address-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            <div className="scan-address-text">
              <div>A6 602, Purab Apartments,</div>
              <div>Sector 88, Sahibzada Ajit Singh</div>
              <div>Nagar, Punjab – 140308</div>
            </div>
          </div>

          <div className="scan-chip-row">
            <div className="scan-chip">
              <span className="scan-chip-label">STATE</span>
              <span className="scan-chip-value">PUNJAB</span>
            </div>
            <div className="scan-chip scan-chip-accent">
              <span className="scan-chip-label">PIN CODE</span>
              <span className="scan-chip-value">140308</span>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="scan-footer">
        <div className="scan-footer-text">© 2026 NO NONSENSE</div>
        <div className="scan-footer-tagline">Big Energy • Zero Nonsense</div>
      </footer>
    </div>
  );
}

export default Scanner;