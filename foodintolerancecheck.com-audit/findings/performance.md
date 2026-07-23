# Performance & Images Findings

## Performance (Score: 8/10)

### Core Web Vitals Indicators (Lab Estimates)

**Note**: No live PageSpeed Insights data available. Estimates based on code analysis.

| Metric | Estimate | Status |
|--------|----------|--------|
| LCP | ~2.0-2.5s | Needs Improvement |
| INP | <100ms | Good |
| CLS | <0.05 | Good |

### What Works ✅
1. **Static HTML output**: Astro generates pre-rendered HTML — no client-side rendering delay
2. **Minimal JavaScript**: Only inline scripts for interactive tools (checker.js, food-diary.js, etc.)
3. **No heavy frameworks**: No React, Vue, or Angular overhead
4. **Tailwind CSS purging**: Only used utility classes are included in output
5. **Image dimensions specified**: All `<img>` tags have `width` and `height` attributes (CLS prevention)
6. **Hero image uses `loading="eager"`**: Correct for above-the-fold image
7. **All other images use `loading="lazy"`**: Correct for below-the-fold images
8. **Preconnect hints**: For Google Fonts (`fonts.googleapis.com` + `fonts.gstatic.com`)

### Issues

#### [Medium] Google Fonts Render-Blocking
External font stylesheet loaded in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
This adds a network round-trip before first render.

**Fix options**:
- Self-host the font file (eliminates external DNS lookup + connection)
- Use `font-display: optional` to avoid FOIT/FOUT
- Limit to only needed weights (currently loading 5 weights: 300, 400, 500, 600, 700)

#### [Low] No resource preloading hints
No `<link rel="preload">` for critical CSS or hero image. Adding:
```html
<link rel="preload" as="image" href="/images/hero-healthy.jpg" />
```
could improve LCP by ~200ms.

## Images (Score: 7/10)

### What Works ✅
- All 16 images have descriptive `alt` text
- All images have explicit `width="800" height="450"` (CLS prevention)
- Hero image correctly uses `loading="eager"`
- All other images use `loading="lazy"`

### Issues

#### [Medium] No Modern Image Formats
All 16 images are JPG format. No WebP or AVIF alternatives served.
- Astro's built-in image optimization (`astro:assets`) is not used
- No `<picture>` element with format fallbacks

**Impact**: JPG files are typically 25-35% larger than equivalent WebP.

**Fix**: Use Astro's `<Image>` component or configure image optimization:
```astro
import { Image } from 'astro:assets';
<Image src={heroImage} format="webp" alt="..." />
```

#### [Medium] Uniform 800×450 Dimensions
All images specify `width="800" height="450"` regardless of actual display size:
- Tool page images display at max-width ~672px (`max-w-2xl`)
- Blog/guide images display at max-width ~768px (`max-w-3xl`)
- Some listing page thumbnails could be much smaller

**Fix**: Use responsive `srcset` or Astro's responsive image features.

#### [Low] No OG Image Variants
All pages fall back to `/og-default.png` for social sharing. Blog posts and key pages could have custom OG images for better social engagement.

## AI Search Readiness (Score: 6/10)

### What Works ✅
- Clear, well-structured content with defined headings
- Author attribution with credentials
- Medical disclaimers and source citations
- FAQPage schema (frequently cited by AI)
- Content is factual and evidence-based

### Issues
- ⚠️ No `llms.txt` file (live robots.txt references it, but it likely doesn't exist)
- ⚠️ No explicit "cite this page" formatting
- ⚠️ Key claims lack inline citation links (references are listed but not linked inline)
- ⚠️ No structured summaries/abstracts for quick AI extraction
