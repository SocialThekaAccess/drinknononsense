import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LegalPages.css'

function ReturnPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-button">← Back to Home</Link>
        
        <h1 className="legal-title">Return & Refund Policy</h1>
        <p className="legal-updated">Last Updated: January 2025</p>

        <section className="legal-section">
          <h2>1. Overview</h2>
          <p>
            At No Nonsense, we want you to be completely satisfied with your purchase. If you're not happy with your order, 
            we offer a straightforward return and refund process. Please read this policy carefully to understand your rights 
            and our procedures.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Return Eligibility</h2>
          
          <div className="highlight-box">
            <h3>📦 Return Window: 5-7 Days</h3>
            <p>
              You have <strong>5 to 7 business days</strong> from the date of delivery to initiate a return for eligible products. 
              Returns requested after this period will not be accepted.
            </p>
          </div>

          <h3>2.1 Eligible Returns</h3>
          <p>Products may be returned if:</p>
          <ul>
            <li>The product is unopened, unused, and in its original packaging</li>
            <li>The product is damaged or defective upon arrival</li>
            <li>You received the wrong product or flavor</li>
            <li>The product is past or near its expiration date (within 30 days of expiry at time of delivery)</li>
            <li>The seal or packaging is compromised, making the product unsafe</li>
          </ul>

          <h3>2.2 Non-Returnable Items</h3>
          <p>For health and safety reasons, we <strong>cannot accept returns</strong> for:</p>
          <ul>
            <li>Opened or partially consumed products</li>
            <li>Products with broken seals or tampered packaging (unless damaged in transit)</li>
            <li>Products returned after the 5-7 day return window</li>
            <li>Products purchased from unauthorized third-party sellers</li>
            <li>Sale or promotional items marked as "final sale"</li>
            <li>Products returned without original packaging or labels</li>
            <li>Products damaged due to misuse or improper storage by the customer</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. How to Initiate a Return</h2>
          <p>To start a return, please follow these steps:</p>
          
          <h3>Step 1: Contact Us</h3>
          <p>
            Within 5-7 business days of receiving your order, contact our customer service team:
          </p>
          <div className="contact-info">
            <p>Email: returns@nononsensedrink.com</p>
            <p>Email: support@nononsensedrink.com</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Hours: Monday-Friday, 9 AM - 6 PM</p>
          </div>

          <h3>Step 2: Provide Information</h3>
          <p>Please have the following information ready:</p>
          <ul>
            <li>Order number (found in your confirmation email)</li>
            <li>Product name and quantity</li>
            <li>Reason for return (damaged, wrong product, defective, etc.)</li>
            <li>Photos of the product and packaging (especially for damaged or defective items)</li>
          </ul>

          <h3>Step 3: Receive Return Authorization</h3>
          <p>
            Our team will review your request and, if approved, provide you with a Return Authorization (RA) number and 
            return shipping instructions. <strong>Do not ship products back without an RA number</strong>, as unauthorized 
            returns may not be processed.
          </p>

          <h3>Step 4: Pack and Ship</h3>
          <p>
            Carefully pack the product in its original packaging (if possible) and ship it to the address provided. 
            Include the RA number clearly marked on the outside of the package.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Return Shipping Costs</h2>
          
          <h3>4.1 Defective or Damaged Products</h3>
          <p>
            If your product arrived damaged, defective, or if we sent you the wrong item, we will cover all return shipping costs. 
            We will provide you with a prepaid shipping label.
          </p>

          <h3>4.2 Customer Preference Returns</h3>
          <p>
            If you're returning a product due to personal preference (e.g., didn't like the flavor, ordered too many), 
            you are responsible for return shipping costs. We recommend using a trackable shipping method.
          </p>

          <h3>4.3 International Returns</h3>
          <p>
            International customers are responsible for return shipping costs and any customs fees. We recommend contacting 
            us before returning international orders, as shipping costs may exceed the product value.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Refund Processing</h2>
          
          <h3>5.1 Inspection Period</h3>
          <p>
            Once we receive your returned product, we will inspect it within 2-3 business days to ensure it meets our 
            return eligibility criteria.
          </p>

          <h3>5.2 Refund Approval</h3>
          <p>
            If your return is approved, we will process your refund to your original payment method within:
          </p>
          <ul>
            <li><strong>Credit/Debit Card:</strong> 5-10 business days (depending on your bank)</li>
            <li><strong>Digital Wallets:</strong> 3-7 business days</li>
            <li><strong>Bank Transfer:</strong> 7-14 business days</li>
          </ul>
          <p>
            You will receive an email notification once your refund has been processed.
          </p>

          <h3>5.3 Partial Refunds</h3>
          <p>
            In some cases, we may issue a partial refund if:
          </p>
          <ul>
            <li>The product shows signs of use beyond normal inspection</li>
            <li>The product is returned without original packaging</li>
            <li>The product is returned more than 7 days after delivery (within reason)</li>
          </ul>

          <h3>5.4 Refund Deductions</h3>
          <p>
            For customer preference returns, we may deduct return shipping costs and a restocking fee (if applicable) 
            from your refund amount. These fees will be communicated to you before you ship the product back.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Exchanges</h2>
          <p>
            We offer exchanges for defective or damaged products, or if you received the wrong item. If you'd like to 
            exchange your product for a different flavor or quantity, please follow our return process and place a new order.
          </p>
          <p>
            <strong>Note:</strong> We will ship the replacement product once we receive and inspect your returned item.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Damaged or Defective Products</h2>
          
          <div className="warning-box">
            <h3>🚨 Report Damage Within 48 Hours</h3>
            <p>
              If your product arrives damaged or defective, please contact us within 48 hours of delivery. 
              This helps us address the issue quickly and file claims with shipping carriers if necessary.
            </p>
          </div>

          <h3>Required Information:</h3>
          <ul>
            <li>Clear photos of the damaged product</li>
            <li>Photos of the shipping box/packaging</li>
            <li>Order number and delivery confirmation</li>
            <li>Description of the damage or defect</li>
          </ul>

          <p>
            We will offer a full refund or replacement at no additional cost. In most cases, we will not require you 
            to return damaged products.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Wrong or Missing Items</h2>
          <p>
            If you receive the wrong product or if items are missing from your order, please contact us immediately. 
            We will:
          </p>
          <ul>
            <li>Send the correct product at no additional cost</li>
            <li>Provide a full refund if the correct product is unavailable</li>
            <li>Arrange pickup of the wrong product (if applicable)</li>
          </ul>
          <p>
            We appreciate your patience as we work to resolve these issues quickly.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Cancelled Orders</h2>
          
          <h3>9.1 Before Shipment</h3>
          <p>
            You may cancel your order before it ships by contacting us immediately. If your order hasn't been processed, 
            we will cancel it and issue a full refund.
          </p>

          <h3>9.2 After Shipment</h3>
          <p>
            Once your order has shipped, you cannot cancel it. However, you may refuse delivery or follow our return 
            process once you receive the product.
          </p>

          <h3>9.3 Refund Timeline</h3>
          <p>
            Cancelled orders will be refunded within 5-7 business days to your original payment method.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Non-Delivery or Lost Packages</h2>
          
          <h3>10.1 Tracking and Delivery Confirmation</h3>
          <p>
            All orders include tracking information. If your package shows as "delivered" but you haven't received it:
          </p>
          <ul>
            <li>Check with neighbors or household members</li>
            <li>Look around your property (porches, side doors, mailboxes)</li>
            <li>Contact your local post office or carrier</li>
            <li>Wait 24-48 hours, as carriers sometimes mark items delivered prematurely</li>
          </ul>

          <h3>10.2 Filing a Claim</h3>
          <p>
            If your package is confirmed lost, contact us within 7 days of the delivery date. We will:
          </p>
          <ul>
            <li>Investigate with the shipping carrier</li>
            <li>File an insurance claim if applicable</li>
            <li>Offer a replacement or refund once the claim is resolved</li>
          </ul>

          <h3>10.3 Customer Responsibility</h3>
          <p>
            We are not responsible for packages delivered to incorrect addresses provided by the customer. 
            Please ensure your shipping address is accurate before placing an order.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Bulk or Wholesale Orders</h2>
          <p>
            Bulk and wholesale orders (typically 20+ units) may have different return policies. Please contact our 
            wholesale team at wholesale@nononsensedrink.com for specific terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Gift Returns</h2>
          <p>
            If you received a No Nonsense product as a gift and would like to return it:
          </p>
          <ul>
            <li>Contact us with the order details (if available)</li>
            <li>We will verify the purchase and provide a store credit or exchange</li>
            <li>Refunds for gift purchases will be issued to the original purchaser</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>13. Subscription Orders</h2>
          <p>
            If you have a No Nonsense subscription, you can:
          </p>
          <ul>
            <li>Skip a delivery before it ships</li>
            <li>Modify your subscription (frequency, flavors, quantity)</li>
            <li>Cancel your subscription at any time</li>
          </ul>
          <p>
            Returns for subscription orders follow the same 5-7 day policy. To manage your subscription, log into 
            your account or contact support@nononsensedrink.com.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Expired Products</h2>
          <p>
            We carefully monitor expiration dates to ensure you receive fresh products. If you receive a product that 
            is expired or expires within 30 days of delivery, we will:
          </p>
          <ul>
            <li>Provide a full refund or replacement</li>
            <li>Cover all return shipping costs</li>
            <li>Investigate our inventory management to prevent future issues</li>
          </ul>
          <p>
            Please check expiration dates upon delivery and contact us immediately if there's an issue.
          </p>
        </section>

        <section className="legal-section">
          <h2>15. Refund Exceptions</h2>
          <p>
            We reserve the right to refuse refunds or returns if:
          </p>
          <ul>
            <li>The return request is made after the 7-day window without valid reason</li>
            <li>The product shows signs of use or consumption</li>
            <li>The product was purchased from an unauthorized retailer</li>
            <li>We suspect fraudulent activity or abuse of our return policy</li>
            <li>The return is incomplete or missing components</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>16. Contact Our Returns Team</h2>
          <p>
            Have questions or need assistance with a return? Our team is here to help!
          </p>
          <div className="contact-info">
            <p><strong>No Nonsense Returns Department</strong></p>
            <p>Email: returns@nononsensedrink.com</p>
            <p>Email: support@nononsensedrink.com</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Hours: Monday-Friday, 9 AM - 6 PM</p>
            <p>Address: [Your Business Address]</p>
          </div>
          <p>
            We aim to respond to all return inquiries within 24 hours during business days.
          </p>
        </section>

        <section className="legal-section">
          <h2>17. Policy Updates</h2>
          <p>
            We may update this Return & Refund Policy from time to time. Changes will be posted on this page with an 
            updated "Last Updated" date. Continued use of our Website after changes constitutes acceptance of the 
            updated policy.
          </p>
        </section>

        <div className="legal-footer">
          <p className="satisfaction-note">
            <strong>Your satisfaction is our priority.</strong> We stand behind our products and want to make your 
            experience with No Nonsense as smooth as possible. If you have any concerns, please don't hesitate to reach out.
          </p>
          <p className="no-nonsense-tagline">🧟 NO WINGS. NO LIES. NO NONSENSE.</p>
        </div>
      </div>
    </div>
  )
}

export default ReturnPolicy
