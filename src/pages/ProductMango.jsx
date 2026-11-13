import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ProductMango.css'

const p = {
  lines: ['Mango', 'Mayhem'],
  ghost: 'Mango',
  tagline: 'A little tropical, a lot of trouble.',
  description:
    'A bold mango-flavoured caffeinated protein drink with a tropical twist. Fuel your muscles, energise your day and embrace the chaos, with zero sugar and maximum flavour.',
  ingredients:
    'Carbonated water, protein blend (whey protein isolate, milk protein concentrate), natural mango flavour, caffeine, vitamins (B2, B3, B6, B12), prebiotic fibre (chicory root), natural sweeteners (erythritol, sucralose), citric acid, natural colours, preservatives.',
  model: '/Can3DMango.html',
  price: 200,
  nutrition: [['Energy','25 kcal'],['Protein','6 g'],['Carbohydrates','4 g'],['Total sugar','0 g'],['Dietary fibre','3 g'],['Caffeine','75 mg']],
}

const others = [
  { path: '/product/coffee', name: 'Coffee Cola', tagline: 'Coffee meets cola. Chaos follows.', accent: '#e0bb8a' },
  { path: '/product/classic', name: 'Classic Wild Berry', tagline: 'Berry bold, never basic.', accent: '#9b8cff' },
]

function ProductMango() {
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
    <div className="mm-qty" role="group" aria-label="Quantity">
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

      <div className="mm">
        {/* ───────── Hero ───────── */}
        <header className="mm-hero">
          <Link to="/" className="mm-back">‹ Home</Link>

          <div className="mm-stage">
            <span className="mm-ghost" aria-hidden="true">{p.ghost}</span>
            <div className="mm-spot" aria-hidden="true" />
            <iframe
              src={p.model}
              title={`${p.lines.join(' ')} 3D can`}
              className="mm-can"
              sandbox="allow-scripts allow-same-origin"
            />
            <div className="mm-floor" aria-hidden="true" />
            <span className="mm-seal">Zero sugar</span>
            <span className="mm-hint">Drag to turn the can</span>
          </div>

          <div className="mm-info">
            <p className="mm-kind">Protein energy drink · 250 ml</p>
            <h1 className="mm-title">
              {p.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h1>
            <p className="mm-tagline">{p.tagline}</p>
            <p className="mm-desc">{p.description}</p>

            <div className="mm-price">
              <span className="mm-cur">₹</span>
              <span className="mm-amt">{p.price}</span>
              <span className="mm-per">per can</span>
            </div>

            <div className="mm-actions" ref={actionsRef}>
              <Qty />
              <button className="mm-cta" onClick={handleCheckout}>
                <span>Checkout</span>
                <span className="mm-cta-total">₹{total}</span>
              </button>
            </div>

            <p className="mm-warn">
              Contains caffeine. Not recommended for children, pregnant or nursing women.
            </p>
          </div>
        </header>

        {/* ───────── Spec strip ───────── */}
        <section className="mm-specs" aria-label="Highlights">
          <div><strong>6g</strong><span>Protein</span></div>
          <div><strong>75mg</strong><span>Caffeine</span></div>
          <div><strong>0g</strong><span>Sugar</span></div>
          <div><strong>3g</strong><span>Dietary fibre</span></div>
        </section>

        {/* ───────── Details ───────── */}
        <section className="mm-details">
          <div>
            <h2>What’s inside</h2>
            <p className="mm-ingredients">{p.ingredients}</p>

            </div>
          <div>
            <h2>Per 250 ml can</h2>
            <dl className="mm-ledger">
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
        <nav className="mm-more" aria-label="Other flavours">
          <h2>Try another flavour</h2>
          {others.map((o) => (
            <Link
              key={o.path}
              to={o.path}
              className="mm-more-row"
              style={{ '--row-accent': o.accent }}
            >
              <span className="mm-more-name">{o.name}</span>
              <span className="mm-more-tag">{o.tagline}</span>
            </Link>
          ))}
        </nav>

        {/* ───────── Sticky buy bar ───────── */}
        <div className={`mm-bar ${showBar ? 'is-on' : ''}`} aria-hidden={!showBar}>
          <div className="mm-bar-name">{p.lines.join(' ')}</div>
          <Qty />
          <button className="mm-cta mm-cta-sm" onClick={handleCheckout} tabIndex={showBar ? 0 : -1}>
            <span>Checkout</span>
            <span className="mm-cta-total">₹{total}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductMango