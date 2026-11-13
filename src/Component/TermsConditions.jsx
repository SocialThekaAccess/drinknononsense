import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LegalPages.css'

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-button">← Back to Home</Link>
        
        <h1 className="legal-title">Terms & Conditions</h1>
        <p className="legal-updated">Last Updated: January 2025</p>

        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the No Nonsense website ("Website"), you accept and agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our Website or purchase our products.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Product Information</h2>
          <p>
            No Nonsense is a caffeinated protein drink designed for adults. Our products contain caffeine and are intended for healthy adults 
            18 years of age or older. Please consult with a healthcare professional before use if you have any medical conditions or concerns.
          </p>
          <h3>Product Claims:</h3>
          <ul>
            <li>High protein content for muscle support</li>
            <li>Caffeinated for energy boost</li>
            <li>Zero sugar options available</li>
            <li>Gut-friendly formulation</li>
            <li>No artificial nonsense</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Age Restriction</h2>
          <p>
            You must be at least 18 years old to purchase No Nonsense products. By placing an order, you confirm that you meet this age requirement. 
            We reserve the right to refuse service or cancel orders if we suspect age misrepresentation.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Orders and Payment</h2>
          <h3>4.1 Order Acceptance</h3>
          <p>
            All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order for any reason, 
            including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.
          </p>
          <h3>4.2 Payment</h3>
          <p>
            Payment must be received before products are shipped. We accept major credit cards, debit cards, and other payment methods as 
            displayed on our checkout page. All prices are in INR/USD (as applicable) and include applicable taxes unless otherwise stated.
          </p>
          <h3>4.3 Pricing</h3>
          <p>
            We strive to ensure accurate pricing on our Website. However, errors may occur. If a product's correct price is higher than 
            stated, we will contact you before processing your order. You may choose to cancel the order or proceed at the correct price.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Shipping and Delivery</h2>
          <p>
            We ship to addresses within [Your Service Area]. Shipping times and costs vary based on location and shipping method selected. 
            Delivery estimates are approximate and not guaranteed. No Nonsense is not responsible for delays caused by shipping carriers 
            or circumstances beyond our control.
          </p>
          <p>
            <strong>Important:</strong> You are responsible for providing a correct and complete shipping address. We are not liable for 
            packages delivered to incorrect addresses provided by the customer.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Returns and Refunds</h2>
          <p>
            Please refer to our <Link to="/return-policy" className="legal-link">Return & Refund Policy</Link> for detailed information 
            about returns, refunds, and exchanges.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Health and Safety Warnings</h2>
          <div className="warning-box">
            <h3>⚠️ Important Safety Information:</h3>
            <ul>
              <li>Contains caffeine - not recommended for pregnant or nursing women</li>
              <li>Not suitable for children under 18 years of age</li>
              <li>Do not exceed recommended daily intake</li>
              <li>Consult your doctor if you have heart conditions, high blood pressure, or caffeine sensitivity</li>
              <li>Do not mix with alcohol or other stimulants</li>
              <li>Store in a cool, dry place away from direct sunlight</li>
            </ul>
          </div>
        </section>

        <section className="legal-section">
          <h2>8. Intellectual Property</h2>
          <p>
            All content on this Website, including but not limited to text, graphics, logos, images, videos, and software, is the property 
            of No Nonsense and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, 
            or create derivative works without our express written permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Website for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit viruses or malicious code</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Impersonate any person or entity</li>
            <li>Collect or harvest personal data of other users</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, No Nonsense shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages, including but not limited to loss of profits, data, or use, arising out of or related to your use of our 
            products or Website, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            Our total liability for any claim arising from your use of our products or Website shall not exceed the amount you paid for 
            the specific product giving rise to the claim.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless No Nonsense, its officers, directors, employees, and agents from any claims, 
            liabilities, damages, losses, and expenses arising from your violation of these Terms or your use of our products.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Product Reviews and User Content</h2>
          <p>
            By submitting reviews, comments, or other content to our Website, you grant No Nonsense a non-exclusive, royalty-free, perpetual, 
            and worldwide license to use, reproduce, modify, and display such content. You represent that you own or have rights to the 
            content you submit.
          </p>
        </section>

        <section className="legal-section">
          <h2>13. Privacy</h2>
          <p>
            Your use of the Website is also governed by our <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>, 
            which explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. 
            Your continued use of the Website after changes are posted constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its 
            conflict of law provisions. Any disputes shall be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section className="legal-section">
          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the 
            minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <section className="legal-section">
          <h2>17. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <div className="contact-info">
            <p><strong>No Nonsense Energy Drink</strong></p>
            <p>Email: support@nononsensedrink.com</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>

        <div className="legal-footer">
          <p className="no-nonsense-tagline">🧟 NO WINGS. NO LIES. NO NONSENSE.</p>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions
