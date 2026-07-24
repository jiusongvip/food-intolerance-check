# Performance Findings

## Estimated Core Web Vitals (Code Analysis)

> Note: Site is not deployed. These are estimates based on source code analysis.

| Metric | Estimate | Rating |
|---|---|---|
| LCP | ~1.5s | Good |
| INP | ~50ms | Good |
| CLS | ~0.05 | Good |
| FCP | ~1.0s | Good |
| TBT | ~50ms | Good |

## Positive Performance Signals

1. **Astro SSG** — Static HTML output, zero framework JavaScript overhead
2. **Minimal client JS** — Only checker/diary scripts (126 lines max) loaded on specific pages
3. **Image optimization** — Astro Image auto-converts to WebP with width/height attributes
4. **Hero image** — `loading="eager"` + `fetchpriority="high"` on homepage hero
5. **Lazy loading** — All other images use `loading="lazy"`
6. **No third-party scripts** — No analytics, no ads, no tracking
7. **Purged CSS** — Tailwind CSS purges unused styles via @astrojs/tailwind

## Performance Concerns

### Font Loading (Low impact)
- 5 Outfit font weight files loaded (300, 400, 500, 600, 700)
- Weight 300 appears unused
- Consider: Outfit variable font or removing weight 300
- Font files from @fontsource are self-hosted (good — no external request)

### Image Containers (Low impact)
- Some containers use `w-full` without `aspect-ratio` constraint
- Could cause minor CLS during image loading
- Fix: Add `aspect-[16/9]` or similar to image wrapper divs

### CSS Strategy (Low impact)
- Tailwind generates purged CSS — efficient
- Global CSS imports 5 font weight files — could be reduced
- No render-blocking concerns with Astro's CSS handling

## Deployment Performance Recommendations

After deployment, measure with:
1. PageSpeed Insights (lab data + field data via CrUX)
2. WebPageTest for detailed waterfall analysis
3. Lighthouse CI for ongoing monitoring

Expected score: 90+ on all Lighthouse categories given the minimal JS and static HTML output.
