import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ProductPage.css'
import coffeeImage from '../assets/CoffeeCola (2).png'
import coffeeBack from '/CoffeeBack.png'

function ProductCoffee() {
  const [quantity, setQuantity] = useState(1)
  const price = 200

  return (
    <>
      <Helmet>
        <title>Coffee Cola - No Nonsense Energy Drink</title>
        <meta name="description" content="Coffee meets cola chaos. Zero sugar, 6g protein, 75mg caffeine." />
      </Helmet>

      <div className="product-page">
        <Link to="/" className="product-back-btn">← Back to Home</Link>

        <div className="product-container">
          {/* Left Side - Product Images */}
          <div className="product-images">
            <div className="product-main-image">
              <img src={coffeeImage} alt="Coffee Cola Front" className="product-img-front" />
              <div className="product-badge">Zero Sugar</div>
            </div>
            <div className="product-secondary-image">
              <img src={coffeeBack} alt="Coffee Cola Back" className="product-img-back" />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="product-info">
            <div className="product-category">ENERGY DRINK</div>
            <h1 className="product-title">COFFEE COLA</h1>
            <p className="product-subtitle">Coffee meets cola, Chaos Follows</p>
            
            <div className="product-price">
              <span className="price-currency">₹</span>
              <span className="price-amount">{price}</span>
              <span className="price-label">per can (250ml)</span>
            </div>

            <p className="product-description">
              The bold character of coffee with a fizzy cola-inspired twist. This isn't your 
              average energy drink - it's a collision of flavors designed for those who refuse 
              to play it safe. Zero sugar, all attitude.
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
                Natural Coffee Extract, Natural Cola Flavour, Caffeine, Vitamins (B2, B3, B6, B12), 
                Prebiotic Fiber (Chicory Root), Natural Sweeteners (Erythritol, Sucralose), 
                Caramel Color, Citric Acid, Preservatives.
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

export default ProductCoffee
