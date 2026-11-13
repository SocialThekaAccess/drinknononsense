import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ProductClassic.css'

const p = {
  lines: ['Classic', 'Wild Berry'],
  ghost: 'Classic',
  tagline: 'Berry bold, never basic.',
  description:
    'A vibrant wild berry flavour that brings a refreshing twist to your everyday routine. Packed with protein, powered by caffeine and loaded with a taste you did not know you needed. Zero sugar, maximum impact.',
  ingredients:
    'Carbonated water, protein blend (whey protein isolate, milk protein concentrate), natural wild berry flavour (blueberry, raspberry, blackberry), caffeine, vitamins (B2, B3, B6, B12), prebiotic fibre (chicory root), natural sweeteners (erythritol, sucralose), natural colours, citric acid, preservatives.',
  model: '/3DCanClassicWildBerry.html',
  price: 200,
  nutrition: [['Energy','25 kcal'],['Protein','6 g'],['Carbohydrates','4 g'],['Total sugar','0 g'],['Dietary fibre','3 g'],['Caffeine','75 mg']],
}

const others = [
  { path: '/product/mango', name: 'Mango Mayhem', tagline: 'A little tropical, a lot of trouble.', accent: '#ffb02e' },
  { path: '/product/coffee', name: 'Coffee Cola', tagline: 'Coffee meets cola. Chaos follows.', accent: '#e0bb8a' },
]

function ProductClassic() {
  const [quantity, setQuantity] = useState(1)
  const [showBar, setShowBar] = useState(false)
  const actionsRef = useRef(null)
  const total = p.price * quantity

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sticky buy bar appears once the main buy button scrolls out of view
  useEffect(() => {
    const el = actionsRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => setShowBar(!e.isIntersecting && e.boundingClientRect.top < 0),
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const dec = () => setQuantity((q) => Math.max(1, q - 1))
  const inc = () => setQuantity((q) => q + 1)
  const handleCheckout = () => {
    // TODO: hook up your real checkout / cart here
  }

  const Qty = () => (
    <div className="cw-qty" role="group" aria-label="Quantity">
      <button onClick={dec} aria-label="Decrease quantity">−</button>
      <output aria-live="polite">{quantity}</output>
      <button onClick={inc} aria-label="Increase quantity">+</button>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>{`${p.lines.join(' ')} | No Nonsense`}</title>
        <meta name="description" content={`${p.tagline} Zero sugar, 6g protein, 75mg caffeine.`} />
      </Helmet>

      <div className="cw">
        {/* ───────── Hero ───────── */}
        <header className="cw-hero">
          <Link to="/" className="cw-back">‹ Home</Link>

          <div className="cw-stage">
            <span className="cw-ghost" aria-hidden="true">{p.ghost}</span>
            <div className="cw-spot" aria-hidden="true" />
            <iframe
              src={p.model}
              title={`${p.lines.join(' ')} 3D can`}
              className="cw-can"
              sandbox="allow-scripts allow-same-origin"
            />
            <div className="cw-floor" aria-hidden="true" />
            <span className="cw-seal">Zero sugar</span>
            <span className="cw-hint">Drag to turn the can</span>
          </div>

          <div className="cw-info">
            <p className="cw-kind">Protein energy drink · 250 ml</p>
            <h1 className="cw-title">
              {p.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h1>
            <p className="cw-tagline">{p.tagline}</p>
            <p className="cw-desc">{p.description}</p>

            <div className="cw-price">
              <span className="cw-cur">₹</span>
              <span className="cw-amt">{p.price}</span>
              <span className="cw-per">per can</span>
            </div>

            <div className="cw-actions" ref={actionsRef}>
              <Qty />
              <button className="cw-cta" onClick={handleCheckout}>
                <span>Checkout</span>
                <span className="cw-cta-total">₹{total}</span>
              </button>
            </div>

            <p className="cw-warn">
              Contains caffeine. Not recommended for children, pregnant or nursing women.
            </p>
          </div>
        </header>

        {/* ───────── Spec strip ───────── */}
        <section className="cw-specs" aria-label="Highlights">
          <div><strong>6g</strong><span>Protein</span></div>
          <div><strong>75mg</strong><span>Caffeine</span></div>
          <div><strong>0g</strong><span>Sugar</span></div>
          <div><strong>3g</strong><span>Dietary fibre</span></div>
        </section>

        {/* ───────── Details ───────── */}
        <section className="cw-details">
          <div>
            <h2>What’s inside</h2>
            <p className="cw-ingredients">{p.ingredients}</p>

            </div>
          <div>
            <h2>Per 250 ml can</h2>
            <dl className="cw-ledger">
              {p.nutrition.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────── Other flavours ───────── */}
        <nav className="cw-more" aria-label="Other flavours">
          <h2>Try another flavour</h2>
          {others.map((o) => (
            <Link
              key={o.path}
              to={o.path}
              className="cw-more-row"
              style={{ '--row-accent': o.accent }}
            >
              <span className="cw-more-name">{o.name}</span>
              <span className="cw-more-tag">{o.tagline}</span>
            </Link>
          ))}
        </nav>

        {/* ───────── Sticky buy bar ───────── */}
        <div className={`cw-bar ${showBar ? 'is-on' : ''}`} aria-hidden={!showBar}>
          <div className="cw-bar-name">{p.lines.join(' ')}</div>
          <Qty />
          <button className="cw-cta cw-cta-sm" onClick={handleCheckout} tabIndex={showBar ? 0 : -1}>
            <span>Checkout</span>
            <span className="cw-cta-total">₹{total}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductClassic