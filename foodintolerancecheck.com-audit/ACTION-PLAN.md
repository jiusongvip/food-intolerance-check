# FoodCheck SEO Action Plan

**Domain:** foodintolerancecheck.com  
**Audit Date:** July 24, 2026  
**Health Score:** 72/100

---

## Phase 1: Critical Fixes (Week 1)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🔴 Critical | Deploy site to hosting provider (Cloudflare Pages/Netlify/Vercel) | Blocks all SEO | 1-2 hours |
| 🔴 High | Add FAQPage schema to homepage FAQ section | Rich result eligibility | 30 min |
| 🟡 Medium | Add contact email to About page and Footer | E-E-A-T trust signal | 15 min |
| 🟡 Medium | Remove duplicate images from `public/images/` | Repo cleanliness | 15 min |
| 🟡 Medium | Set `og:type="article"` for blog/guide pages via BaseLayout prop | Social sharing | 20 min |

## Phase 2: High-Impact Improvements (Weeks 2-3)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🔴 High | Expand `/guides/low-fodmap` with food lists and detailed phases | Content depth + rankings | 2-3 hours |
| 🔴 High | Expand `/tools/elimination-diet-planner` with interactive content | Tool engagement + SEO | 2-3 hours |
| 🟡 Medium | Add WebApplication schema to 6 individual tool pages | Rich result eligibility | 1 hour |
| 🟡 Medium | Create `llms-full.txt` with expanded per-page summaries | AI citation readiness | 1 hour |
| 🟢 Low | Fix Article schema publisher logo (use brand logo, not OG image) | Schema accuracy | 15 min |

## Phase 3: Content & Authority (Month 2)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🟡 Medium | Expand `/guides/ibs-food-intolerance` with subtypes + management | Content depth | 2 hours |
| 🟡 Medium | Add AboutPage schema with Person entity for Dr. Emily Carter | E-E-A-T signals | 30 min |
| 🟢 Low | Standardize title tag format across all pages | Brand consistency | 30 min |
| 🟢 Low | Replace reused images with unique context-specific images | Visual diversity | 1-2 hours |
| 🟢 Low | Add PNG favicon variants (32x32, 16x16) | Cross-platform support | 15 min |

## Phase 4: Monitoring & Iteration (Ongoing)

| Action | Frequency |
|---|---|
| Measure Core Web Vitals via PageSpeed Insights | After deployment + monthly |
| Set up Google Search Console and submit sitemap | Once deployed |
| Monitor indexing status and fix crawl errors | Weekly for first month |
| Track keyword rankings for target queries | Monthly |
| Add new blog content targeting long-tail keywords | Bi-weekly |
| Add security headers via hosting provider | Once |
| Consider adding a search feature + SearchAction schema | When content grows |

---

## Estimated Impact After Implementation

| Metric | Current | Expected (3 months) |
|---|---|---|
| Indexed pages | 0 (not deployed) | 20-23 |
| Schema coverage | ~70% | ~95% |
| Thin content pages | 3 | 0 |
| AI citation readiness | Basic (llms.txt only) | Enhanced (llms.txt + llms-full.txt) |
| Health Score | 72 | 85-90 |
