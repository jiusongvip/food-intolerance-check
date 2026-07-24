# Images Findings

## Current State

### Total Images: 16 unique source images
All images are JPG format in `src/assets/images/` with duplicates in `public/images/`.

### Image List

| Image File | Used On | Alt Text |
|---|---|---|
| hero-healthy.jpg | Homepage, /tools | "Fresh healthy food ingredients arranged on a table" ✅ |
| dairy-milk.jpg | /tools/lactose-intolerance-test | "Dairy products including milk, cheese, and yogurt" ✅ |
| wheat-gluten.jpg | /tools/gluten-intolerance-test | "Wheat bread and gluten-containing grains" ✅ |
| wine-histamine.jpg | /tools/histamine-intolerance-test | "Wine, aged cheese, and fermented foods high in histamine" ✅ |
| fruits-fructose.jpg | /tools/fructose-intolerance-test | "Fresh fruits and honey containing natural fructose" ✅ |
| food-diary.jpg | /tools/food-diary | "A food journal notebook with meal and symptom tracking notes" ✅ |
| planning-calendar.jpg | /tools/elimination-diet-planner | "Meal planning calendar and notebook for an elimination diet" ✅ |
| allergy-compare.jpg | /guides/intolerance-vs-allergy | "Comparison of food allergy and food intolerance symptoms" ✅ |
| lab-testing.jpg | /guides/test-guide, /blog/are-food-intolerance-tests-accurate | Context-dependent alt ✅ |
| vegetables-fodmap.jpg | /guides/low-fodmap, /guides/ibs-food-intolerance | Context-dependent alt ✅ |
| books-guides.jpg | /guides, /terms | Context-dependent alt ✅ |
| blog-articles.jpg | /blog | "Workspace with nutrition articles and healthy food references" ✅ |
| elimination-diet.jpg | /blog/elimination-diet-guide | "Colourful fresh vegetables and healthy ingredients for an elimination diet" ✅ |
| symptoms-body.jpg | /symptoms | "Human body illustration showing common digestive and physical symptoms" ✅ |
| doctor-health.jpg | /about | "Healthcare professional providing evidence-based nutritional guidance" ✅ |
| faq-questions.jpg | /faq, /privacy | Context-dependent alt ✅ |

## What Works ✅

1. **Alt text:** All images have descriptive, context-appropriate alt text
2. **Astro Image component:** Auto-converts to WebP format on build
3. **Dimensions:** width={800} height={450} set on all images (CLS prevention)
4. **Loading strategy:** Hero image uses `loading="eager"` + `fetchpriority="high"`
5. **Lazy loading:** All other images correctly use `loading="lazy"`

## Issues Found

### 1. Duplicate Image Storage (Medium)
- Images exist in both `src/assets/images/` (16 files) and `public/images/` (16 files)
- `public/images/` copies are redundant — Astro Image processes from `src/assets/`
- This doubles repository size unnecessarily
- **Fix:** Remove `public/images/` duplicates, keep only static assets in `public/`

### 2. Image Reuse (Low)
- `vegetables-fodmap.jpg` used on both `/guides/low-fodmap` and `/guides/ibs-food-intolerance`
- `lab-testing.jpg` used on both `/guides/test-guide` and `/blog/are-food-intolerance-tests-accurate`
- `books-guides.jpg` used on both `/guides` and `/terms`
- `faq-questions.jpg` used on both `/faq` and `/privacy`
- **Fix:** Use unique images for distinct topics

### 3. No PNG Favicon Variants (Low)
- Only `favicon.svg` provided
- Some platforms (mobile browsers, bookmarking services) prefer PNG/ICO
- **Fix:** Add 32x32 and 16x16 PNG favicons

### 4. Uniform Dimensions (Low)
- All images specify 800x450 regardless of display context
- Tool page images display at max ~672px wide
- Guide/blog images display at max ~768px wide
- This is handled by Astro Image but explicit dimensions could be more precise
- **Fix:** Consider responsive srcset or different dimension presets

## Static Assets in public/

| File | Purpose | Status |
|---|---|---|
| favicon.svg | Site icon | ✅ |
| og-default.png | Default OG image | ✅ |
| robots.txt | Crawler instructions | ✅ |
| llms.txt | AI crawler summary | ✅ |
| _redirects | URL redirects | ✅ |
| js/*.js | Client-side scripts (6 files) | ✅ |
| images/*.jpg | Duplicate images | ❌ Should be removed |
