import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LegalPages.css'

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link to="/" className="back-button">← Back to Home</Link>
        
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last Updated: January 2025</p>

        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            At No Nonsense ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            or purchase our products.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using our Website, you consent to the practices described in this policy. 
            If you do not agree with this policy, please do not use our Website.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide when you:</p>
          <ul>
            <li>Create an account or register on our Website</li>
            <li>Place an order or make a purchase</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Contact us with questions or feedback</li>
            <li>Participate in surveys, contests, or promotions</li>
            <li>Leave reviews or comments on our Website</li>
          </ul>
          
          <p>The personal information we collect may include:</p>
          <ul>
            <li>Name (first and last)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
            <li>Shipping address</li>
            <li>Payment information (processed securely by third-party payment processors)</li>
            <li>Date of birth (to verify age requirements)</li>
            <li>Order history and purchase preferences</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our Website, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Device type (mobile, tablet, desktop)</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website or source</li>
            <li>Click patterns and navigation paths</li>
            <li>Cookies and tracking technologies data</li>
          </ul>

          <h3>2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, and similar technologies to enhance your experience, analyze site usage, and assist in our 
            marketing efforts. You can control cookies through your browser settings, but disabling cookies may affect Website functionality.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          
          <h3>3.1 Order Processing and Fulfillment</h3>
          <ul>
            <li>Process and complete your orders</li>
            <li>Arrange shipping and delivery</li>
            <li>Send order confirmations and updates</li>
            <li>Handle returns, refunds, and exchanges</li>
            <li>Verify age requirements for product purchases</li>
          </ul>

          <h3>3.2 Customer Service</h3>
          <ul>
            <li>Respond to your inquiries and support requests</li>
            <li>Provide customer assistance</li>
            <li>Resolve disputes and troubleshoot problems</li>
            <li>Gather feedback about our products and services</li>
          </ul>

          <h3>3.3 Marketing and Communications</h3>
          <ul>
            <li>Send promotional emails about new products, special offers, and events</li>
            <li>Provide personalized product recommendations</li>
            <li>Conduct surveys and market research</li>
            <li>Administer contests, sweepstakes, and promotions</li>
          </ul>

          <h3>3.4 Website Improvement</h3>
          <ul>
            <li>Analyze how you use our Website</li>
            <li>Improve Website functionality and user experience</li>
            <li>Monitor and analyze trends and usage patterns</li>
            <li>Conduct data analysis and testing</li>
          </ul>

          <h3>3.5 Legal and Security</h3>
          <ul>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and unauthorized transactions</li>
            <li>Protect our rights, property, and safety</li>
            <li>Enforce our Terms & Conditions</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell your personal information to third parties. However, we may share your information in the following circumstances:
          </p>

          <h3>4.1 Service Providers</h3>
          <p>
            We share information with trusted third-party service providers who assist us in operating our business, including:
          </p>
          <ul>
            <li>Payment processors (for secure payment transactions)</li>
            <li>Shipping and fulfillment companies</li>
            <li>Email marketing platforms</li>
            <li>Web hosting and cloud storage providers</li>
            <li>Analytics and data analysis services</li>
            <li>Customer support tools</li>
          </ul>
          <p>
            These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
          </p>

          <h3>4.2 Legal Requirements</h3>
          <p>We may disclose your information if required by law or if we believe such action is necessary to:</p>
          <ul>
            <li>Comply with legal processes, court orders, or government requests</li>
            <li>Enforce our Terms & Conditions or other agreements</li>
            <li>Protect our rights, property, or safety, or that of others</li>
            <li>Investigate fraud or security issues</li>
          </ul>

          <h3>4.3 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the acquiring entity.
          </p>

          <h3>4.4 With Your Consent</h3>
          <p>
            We may share your information for other purposes with your explicit consent.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, 
            alteration, or destruction. These measures include:
          </p>
          <ul>
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure servers and firewalls</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication</li>
            <li>PCI DSS compliance for payment processing</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your 
            information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
            unless a longer retention period is required by law. When your information is no longer needed, we will securely delete 
            or anonymize it.
          </p>
          <p>Typical retention periods include:</p>
          <ul>
            <li>Account information: While your account is active and for a reasonable period after closure</li>
            <li>Order and transaction records: As required for accounting, tax, and legal purposes (typically 7 years)</li>
            <li>Marketing data: Until you unsubscribe or opt out</li>
            <li>Website analytics: Aggregated and anonymized indefinitely</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Your Rights and Choices</h2>
          <p>You have certain rights regarding your personal information:</p>

          <h3>7.1 Access and Update</h3>
          <p>
            You can access and update your account information by logging into your account or contacting us directly.
          </p>

          <h3>7.2 Marketing Communications</h3>
          <p>
            You can opt out of receiving marketing emails by clicking the "unsubscribe" link in any promotional email or by 
            contacting us. Note that you will still receive transactional emails related to your orders.
          </p>

          <h3>7.3 Cookies</h3>
          <p>
            You can control or delete cookies through your browser settings. Visit www.allaboutcookies.org for instructions.
          </p>

          <h3>7.4 Data Deletion</h3>
          <p>
            You may request deletion of your personal information, subject to legal and contractual obligations. Note that 
            deleting your account may prevent you from accessing certain services.
          </p>

          <h3>7.5 Data Portability</h3>
          <p>
            You have the right to request a copy of your personal information in a structured, commonly used format.
          </p>

          <h3>7.6 Do Not Track</h3>
          <p>
            Some browsers have "Do Not Track" features. Currently, we do not respond to Do Not Track signals.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Our Website and products are intended for adults aged 18 and older. We do not knowingly collect personal information from 
            children under 18. If you are under 18, please do not use our Website or provide any personal information. If we discover 
            that we have collected information from a child under 18, we will promptly delete it.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external 
            sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries outside your country of residence. These countries may 
            have different data protection laws. By using our Website, you consent to such transfers.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. California Privacy Rights (CCPA)</h2>
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul>
            <li>Right to know what personal information we collect and how it's used</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
            <li>Right to non-discrimination for exercising your rights</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@nononsensedrink.com</p>
        </section>

        <section className="legal-section">
          <h2>12. GDPR Compliance (For EU Users)</h2>
          <p>
            If you are in the European Union, you have rights under the General Data Protection Regulation (GDPR), including:
          </p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@nononsensedrink.com</p>
        </section>

        <section className="legal-section">
          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
            We will notify you of significant changes by posting the updated policy on our Website with a new "Last Updated" date. 
            Your continued use of the Website after changes are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="legal-section">
          <h2>14. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="contact-info">
            <p><strong>No Nonsense Energy Drink</strong></p>
            <p><strong>Privacy Team</strong></p>
            <p>Email: privacy@nononsensedrink.com</p>
            <p>Email: support@nononsensedrink.com</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Address: [Your Business Address]</p>
          </div>
          <p>
            We will respond to your request within 30 days.
          </p>
        </section>

        <div className="legal-footer">
          <p className="no-nonsense-tagline">🧟 NO WINGS. NO LIES. NO NONSENSE.</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
