# Google Analytics Configuration Guide

## Problem
Unwanted files showing in Google Analytics:
- `/3DCanClassicWildBerry.html`
- `/3DCanCoffeecola.html`
- `/Can3DMango.html`
- `/countries`, `/services`, `/testimonials` (incorrect tracking)
- Media files (`.mp4`, `.png`, etc.)

## Solution Implemented

### 1. ✅ robots.txt Created
Location: `/public/robots.txt`
- Blocks 3D model files
- Blocks media files from indexing
- Allows only actual pages

### 2. ✅ Meta Robots Tags Added
All 3D model HTML files now have:
```html
<meta name="robots" content="noindex, nofollow">
```

### 3. ✅ HTTP Headers (vercel.json)
X-Robots-Tag headers added for:
- 3D model files
- Media files
- Service worker
- Manifest

### 4. ✅ sitemap.xml Created
Only includes actual 8 pages:
- Home (`/`)
- 3 Product pages
- Scanner page
- 3 Legal pages

---

## Google Analytics Filter Setup

### Step 1: Create View Filter
1. Go to **Google Analytics** → **Admin** → **View** → **Filters**
2. Click **"+ Add Filter"**

### Step 2: Exclude 3D Model Files
**Filter Name:** Exclude 3D Model Files
- Filter Type: **Custom** → **Exclude**
- Filter Field: **Request URI**
- Filter Pattern: `3DCan.*\.html|Can3D.*\.html`

### Step 3: Exclude Media Files
**Filter Name:** Exclude Media Files
- Filter Type: **Custom** → **Exclude**
- Filter Field: **Request URI**
- Filter Pattern: `\.(mp4|png|svg|jpg|jpeg|gif|webp)$`

### Step 4: Exclude Other Unwanted Paths
**Filter Name:** Exclude Non-Page URLs
- Filter Type: **Custom** → **Exclude**
- Filter Field: **Request URI**
- Filter Pattern: `^/(countries|services|testimonials|exams|courses)`

### Step 5: Include Only Valid Pages (Optional)
**Filter Name:** Include Valid Pages Only
- Filter Type: **Custom** → **Include**
- Filter Field: **Request URI**
- Filter Pattern: `^/$|^/product/(mango|coffee|classic)$|^/scan$|^/(terms-conditions|privacy-policy|return-policy)$`

---

## Google Search Console Setup

### 1. Submit New Sitemap
1. Go to **Google Search Console**
2. Navigate to **Sitemaps**
3. Add new sitemap: `https://drinknononsense.com/sitemap.xml`
4. Click **Submit**

### 2. Remove Unwanted URLs
1. Go to **Removals** tab
2. Click **New Request**
3. Enter URLs to remove:
   - `https://drinknononsense.com/3DCanClassicWildBerry.html`
   - `https://drinknononsense.com/3DCanCoffeecola.html`
   - `https://drinknononsense.com/Can3DMango.html`
   - Any other incorrect URLs from screenshot

### 3. Request Re-indexing
1. Use **URL Inspection** tool
2. Inspect main pages:
   - `https://drinknononsense.com/`
   - `https://drinknononsense.com/product/mango`
   - `https://drinknononsense.com/product/coffee`
   - `https://drinknononsense.com/product/classic`
3. Click **Request Indexing** for each

---

## Timeline for Changes

| Action | Time to Effect |
|--------|---------------|
| robots.txt recognized | 1-2 days |
| Removal requests processed | 1-2 days |
| Old URLs dropped from index | 1-2 weeks |
| Analytics filters apply | Immediate (new data only) |
| Full cleanup complete | 2-4 weeks |

---

## Verification Checklist

After deployment, verify:

- [ ] `https://drinknononsense.com/robots.txt` is accessible
- [ ] `https://drinknononsense.com/sitemap.xml` is accessible
- [ ] 3D model files have `noindex` meta tag (view source)
- [ ] Google Analytics filters are active
- [ ] Sitemap submitted in Search Console
- [ ] Removal requests submitted for unwanted URLs
- [ ] Wait 1 week and check Analytics for clean data

---

## Expected Result

**Google Analytics will show ONLY these pages:**

1. `/` - Home
2. `/product/mango` - Mango Product
3. `/product/coffee` - Coffee Product
4. `/product/classic` - Classic Product
5. `/scan` - Scanner
6. `/terms-conditions` - Terms
7. `/privacy-policy` - Privacy
8. `/return-policy` - Return Policy

**Total: 8 pages only** ✅

---

## Troubleshooting

### If unwanted pages still appear after 2 weeks:

1. **Check robots.txt syntax:**
   ```bash
   curl https://drinknononsense.com/robots.txt
   ```

2. **Verify meta tags:**
   - Open 3D model file in browser
   - View page source
   - Confirm `<meta name="robots" content="noindex, nofollow">` exists

3. **Check HTTP headers:**
   ```bash
   curl -I https://drinknononsense.com/Can3DMango.html
   ```
   Should see: `X-Robots-Tag: noindex, nofollow`

4. **Re-submit removal requests** in Search Console

5. **Check Analytics filters** are applied to correct View

---

## Notes

- **Historical data won't change** - Filters only affect new data
- **Removal requests** expire after 6 months but pages stay de-indexed if properly configured
- **Dreamway Education analytics** - If this is showing unrelated traffic, it might be:
  - Cross-domain tracking issue
  - Shared GA property
  - Check GA property settings for domain restrictions
