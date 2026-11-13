import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ProductMango.css'
import mangoFront from '../assets/MangoDrink (2).png'

function ProductMango() {
  const [quantity, setQuantity] = useState(1)
  const price = 200

  return (
    <>
      <Helmet>
        <title>Mango Mayhem - No Nonsense Energy Drink</title>
        <meta name="description" content="Bold mango-flavoured caffeinated protein drink. Zero sugar, 6g protein, 75mg caffeine." />
      </Helmet>

      <div className="product-page">
        <Link to="/" className="product-back-btn">← Back to Home</Link>

        <div className="product-container">
          {/* Left Side - 3D Model */}
          <div className="product-images">
            <div className="product-main-image">
              <iframe
                src="/Can3DMango.html"
                title="Mango Mayhem 3D Model"
                className="product-3d-model"
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="product-badge">Zero Sugar</div>
            </div>
            <div className="product-secondary-image">
              <img src="/MangoBack.png" alt="Nutrition Facts" className="product-img-back" />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="product-info">
            <div className="product-category">ENERGY DRINK</div>
            <h1 className="product-title">MANGO MAYHEM</h1>
            <p className="product-subtitle">A Little Tropical, A lot of Trouble</p>
            
            <div className="product-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">{price}</span>
              <span className="price-label">per can (250ml)</span>
            </div>

            <p className="product-description">
              A bold mango-flavoured caffeinated protein drink with a tropical twist. 
              Fuel your muscles, energize your day, and embrace the chaos with zero sugar 
              and maximum flavour.
            </p>

            {/* Key Features */}
            <div className="product-features">
              <div className="feature-item">
                <span className="feature-icon">💪</span>
                <span className="feature-text">6g Protein</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span className="feature-text">75mg Caffeine</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚫</span>
                <span className="feature-text">Zero Sugar</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌿</span>
                <span className="feature-text">Dietary Fiber</span>
              </div>
            </div>

            {/* Ingredients */}
            <div className="product-ingredients">
              <h3>Ingredients</h3>
              <p>
                Carbonated Water, Protein Blend (Whey Protein Isolate, Milk Protein Concentrate), 
                Natural Mango Flavour, Caffeine, Vitamins (B2, B3, B6, B12), Prebiotic Fiber 
                (Chicory Root), Natural Sweeteners (Erythritol, Sucralose), Citric Acid, 
                Natural Colors, Preservatives.
              </p>
            </div>

            {/* Nutrition Facts */}
            <div className="product-nutrition">
              <h3>Nutrition Facts (per 250ml)</h3>
              <div className="nutrition-grid">
                <div className="nutrition-item">
                  <span className="nutrition-label">Protein</span>
                  <span className="nutrition-value">6g</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Caffeine</span>
                  <span className="nutrition-value">75mg</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Calories</span>
                  <span className="nutrition-value">25 kcal</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Sugar</span>
                  <span className="nutrition-value">0g</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Fiber</span>
                  <span className="nutrition-value">3g</span>
                </div>
                <div className="nutrition-item">
                  <span className="nutrition-label">Carbs</span>
                  <span className="nutrition-value">4g</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Checkout */}
            <div className="product-actions">
              <div className="quantity-selector">
                <button 
                  className="qty-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  className="qty-btn" 
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button className="checkout-btn">
                <span className="checkout-icon">🛒</span>
                <span className="checkout-text">PROCEED TO CHECKOUT</span>
                <span className="checkout-price">₹{price * quantity}</span>
              </button>
            </div>

            {/* Warning */}
            <div className="product-warning">
              ⚠️ Not recommended for children, pregnant or nursing women. Contains caffeine.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductMango
