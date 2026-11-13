# Legal Pages Documentation

## Overview
Teen legal pages successfully add kiye gaye hain No Nonsense Energy Drink website mein:

### 1. Terms & Conditions (`/terms-conditions`)
- Complete terms of service
- Product information aur health warnings
- Age restriction (18+ only)
- Order processing aur payment terms
- Shipping and delivery policies
- Intellectual property protection
- User conduct rules
- Liability limitations
- Governing law details

### 2. Privacy Policy (`/privacy-policy`)
- Data collection practices (personal + automated)
- Cookie policy details
- Information usage explanation
- Third-party sharing disclosure
- Data security measures
- User rights (GDPR & CCPA compliant)
- International data transfer info
- Children's privacy protection (18+)
- Contact information for privacy concerns

### 3. Return & Refund Policy (`/return-policy`)
- **Return Window: 5-7 business days** (as requested)
- Eligible aur non-returnable items ki clear list
- Step-by-step return process
- Return shipping costs breakdown
- Refund processing timeline (5-10 business days)
- Exchange policy
- Damaged/defective product handling
- Wrong or missing items policy
- Lost package procedure
- Subscription order handling

## Key Features

### Design
- Dark brownish theme consistent with main website
- Red (#c41e1e) accent colors
- Zombie/horror aesthetic maintained
- Fully responsive (desktop, tablet, mobile)
- Clean, professional layout
- Easy-to-read typography

### Navigation
- "Back to Home" button on each page
- Footer links on main website
- All pages connected via React Router

### Important Notes
1. **Placeholder Information**: Kuch jagah `[Your Phone Number]`, `[Your Business Address]`, `[Your Jurisdiction]` placeholders hain - aapko yeh actual information se replace karni hogi.

2. **Email Addresses**: Following email addresses use kiye gaye hain (aapko yeh setup karni hongi):
   - support@nononsensedrink.com (general support)
   - returns@nononsensedrink.com (returns team)
   - privacy@nononsensedrink.com (privacy team)
   - wholesale@nononsensedrink.com (bulk orders)

3. **Legal Compliance**: 
   - GDPR compliant (European Union)
   - CCPA compliant (California)
   - Age-restricted product policies (18+)
   - Health & safety warnings included

4. **Return Policy Highlights**:
   - 5-7 day return window ✅
   - Clear eligibility criteria
   - Detailed refund timeline
   - Damaged product handling
   - Customer vs company responsibility clearly defined

## Routes Added
```javascript
/terms-conditions    → Terms & Conditions page
/privacy-policy      → Privacy Policy page
/return-policy       → Return & Refund Policy page
```

## Files Created
1. `src/Component/TermsConditions.jsx` - Terms page component
2. `src/Component/PrivacyPolicy.jsx` - Privacy page component
3. `src/Component/ReturnPolicy.jsx` - Return policy component
4. `src/Component/LegalPages.css` - Shared styling for all legal pages

## Files Modified
1. `src/App.jsx` - Added routes for legal pages
2. `src/Component/Footer.jsx` - Added links to legal pages
3. `src/Component/Footer.css` - Added styling for footer links

## Testing
Server running at: **http://localhost:5174/**

Test the following:
- ✅ Homepage footer links
- ✅ Terms & Conditions page
- ✅ Privacy Policy page
- ✅ Return & Refund Policy page
- ✅ Back to Home navigation
- ✅ Mobile responsiveness
- ✅ Cross-linking between pages

## Next Steps (To-Do)
1. Replace placeholder information:
   - [ ] Phone number
   - [ ] Business address
   - [ ] Legal jurisdiction
   - [ ] Company registration details

2. Setup email addresses:
   - [ ] support@nononsensedrink.com
   - [ ] returns@nononsensedrink.com
   - [ ] privacy@nononsensedrink.com
   - [ ] wholesale@nononsensedrink.com

3. Legal review:
   - [ ] Get legal professional to review all policies
   - [ ] Update based on your specific business requirements
   - [ ] Ensure compliance with local laws

4. Optional additions:
   - [ ] Add "Last Updated" date tracking
   - [ ] Add print stylesheet for legal pages
   - [ ] Add FAQ section
   - [ ] Add live chat support integration

## Brand Consistency
- "NO WINGS. NO LIES. NO NONSENSE." tagline har page pe
- 🧟 Zombie emoji for branding
- Dark brownish theme with red accents
- Professional yet edgy tone
- Clear, direct language (no legal jargon overload)

---

**Note**: Yeh policies comprehensive hain lekin aapko apne business ke according customize karni chahiye. Legal professional se review zaroor karwayen!
