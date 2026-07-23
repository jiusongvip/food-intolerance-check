# FoodIntoleranceCheck.com — Action Plan

**SEO Health Score: 68/100**  
**Date**: July 23, 2026  

---

## Phase 1: Critical Fixes (Week 1)

| # | Action | Effort | Impact | Category |
|---|--------|--------|--------|----------|
| 1 | **Fix sitemap deployment** — Redeploy the site from current source code. Verify `sitemap-index.xml` contains all 23 URLs. Confirm live `robots.txt` matches source with absolute sitemap URL. | Low | Critical | Technical |
| 2 | **Add Google Search Console** — Verify domain ownership and submit sitemap. No tracking code needed — respects privacy policy. | Low | High | Technical |
| 3 | **Add "Tools" to header nav** — The main navigation omits the Tools section, which is the site's core feature. Add `/tools` link. | Low | Medium | On-Page |

## Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Action | Effort | Impact | Category |
|---|--------|--------|--------|----------|
| 4 | **Expand thin guide pages** — Target: `/guides/reading-test-results` (200→800 words), `/guides/low-fodmap` (250→1200 words), `/guides/ibs-food-intolerance` (300→800 words). Add practical examples, internal links, and referenced claims. | Medium | High | Content |
| 5 | **Expand symptoms page** — Add more detail per symptom card, link to relevant tools and guides, add FAQ section. Target: 600+ words. | Medium | Medium | Content |
| 6 | **Add MedicalWebPage schema** — Add to all health content pages (guides, blog, symptoms). Signals YMYL expertise to Google. | Medium | High | Schema |
| 7 | **Convert images to WebP** — Use Astro's `<Image>` component or `astro:assets` for automatic format optimization. Potential 25-35% size reduction. | Medium | Medium | Performance |
| 8 | **Add HowTo schema** — Apply to `/blog/elimination-diet-guide` (4 clear steps). Enables HowTo rich results. | Low | Medium | Schema |
| 9 | **Fix Article schema publisher** — Add `logo` ImageObject to publisher in BaseLayout. | Low | Low | Schema |

## Phase 3: Content & Authority (Month 2)

| # | Action | Effort | Impact | Category |
|---|--------|--------|--------|----------|
| 10 | **Strengthen E-E-A-T signals** — Create a verifiable author profile for Dr. Emily Carter (LinkedIn, professional directory listing). Add author page with photo and credentials. | Medium | High | Content |
| 11 | **Add ItemList schema** — Apply to `/tools`, `/guides`, and `/blog` listing pages for potential carousel rich results. | Low | Medium | Schema |
| 12 | **Self-host Google Fonts** — Download Outfit font files, serve locally. Eliminates render-blocking external request and Google Fonts privacy concern. | Medium | Medium | Performance |
| 13 | **Internal linking improvements** — Add contextual links from tool pages to relevant guides and vice versa. Add "Related Content" section to each page. | Medium | Medium | On-Page |
| 14 | **Create `llms.txt`** — Add an AI-friendly summary file at `/llms.txt` for AI crawler access (referenced in live robots.txt). | Low | Medium | AI Readiness |
| 15 | **Add inline citations** — Link reference claims in blog/guide content directly to NHS, BDA, NICE pages instead of listing references at the end. | Low | Medium | AI Readiness |

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Action | Effort | Impact | Category |
|---|--------|--------|--------|----------|
| 16 | **Publish new blog content monthly** — Target health queries with search volume: coeliac disease vs gluten sensitivity, FODMAP reintroduction tips, food diary best practices. | High | High | Content |
| 17 | **Monitor Search Console** — Track impressions, clicks, CTR, position. Identify queries to optimize for. | Low | Medium | Technical |
| 18 | **Add responsive images** — Use `srcset` or Astro responsive image features for different viewport sizes. | Medium | Low | Performance |
| 19 | **Preload hero image** — Add `<link rel="preload" as="image">` for homepage hero to improve LCP. | Low | Low | Performance |
| 20 | **Add OG images for key pages** — Create custom social sharing images for homepage, top blog posts, and tool pages. | Medium | Low | Images |

---

## Effort & Impact Matrix

```
High Impact ┃  4. Expand guides    6. MedicalWebPage   10. E-E-A-T
            ┃  1. Fix sitemap      2. GSC setup
            ┃  3. Tools nav link
            ┃─────────────────────────────────────────────────────
Low Impact  ┃  9. Publisher logo   18. Responsive img  19. Preload
            ┃  7. WebP images      12. Self-host fonts
            ┃  8. HowTo schema     11. ItemList schema
            ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              Low Effort                              High Effort
```

## Quick Wins (Do Today)
1. ✅ Redeploy to sync source → live (fixes sitemap + robots.txt)
2. ✅ Add `/tools` link to Header.astro navigation
3. ✅ Submit sitemap to Google Search Console
4. ✅ Add `image` field to Article schema in BaseLayout
5. ✅ Create `/llms.txt` file
