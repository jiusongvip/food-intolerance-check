# Performance Findings

## Estimated Core Web Vitals (Code Analysis)

> Site not deployed. Estimates based on source code analysis.

| Metric | Estimate | Rating |
|---|---|---|
| LCP | ~1.5s | Good |
| INP | ~50ms | Good |
| CLS | ~0.05 | Good |
| FCP | ~1.0s | Good |
| TBT | ~50ms | Good |

## Positive Performance Signals

1. **Astro SSG** — Static HTML output, zero framework JavaScript overhead
2. **Minimal client JS** — Only checker/diary scripts (max 126 lines) on specific pages
3. **Image optimization** — Astro Image auto-converts to WebP with width/height attributes
4. **Hero image** — `loading="eager"` + `fetchpriority="high"`
5. **Lazy loading** — All other images use `loading="lazy"`
6. **No third-party scripts** — No analytics, ads, or tracking
7. **Purged CSS** — Tailwind via @astrojs/tailwind
8. **4 font weights** (400, 500, 600, 700) — self-hosted via @fontsource, unused weight 300 removed

## Performance Concerns

### Font Loading (Minimal)
- 4 Outfit weight files loaded (400, 500, 600, 700)
- Self-hosted via @fontsource — no external request
- Could consider variable font for single file

### Image Containers (Minimal)
- Astro Image handles width/height automatically
- Some `w-full` containers without `aspect-ratio` — negligible risk

## Expected Lighthouse Scores
90+ on all categories post-deployment.

## Post-Deployment Measurement
1. PageSpeed Insights (lab + field data via CrUX)
2. WebPageTest for waterfall analysis
3. Lighthouse CI for ongoing monitoring
