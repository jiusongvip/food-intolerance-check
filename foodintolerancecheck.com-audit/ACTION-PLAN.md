# FoodCheck SEO Action Plan

**Domain:** foodintolerancecheck.com  
**Audit Date:** July 28, 2026  
**Health Score:** 93/100  
**Status:** Ready for Launch

---

## Phase 1: Critical Fixes (Week 1)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🔴 Critical | Deploy site to hosting provider (Cloudflare Pages/Netlify/Vercel) | Blocks all SEO | 1-2 hours |
| 🟡 Medium | Add breadcrumbs + WebPage schema to `/privacy` and `/terms` | Schema coverage + UX | 20 min |
| 🟡 Medium | Fix HowTo schema step URLs — add `id` attributes to H2s in elimination-diet-guide | Schema validity | 10 min |

## Phase 2: High-Impact Improvements (Weeks 2-3)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🟡 Medium | Trim 10 meta descriptions to ≤160 characters | SERP snippet quality | 30 min |
| 🟢 Low | Change FAQ H1 from "Frequently Asked Questions" to "Food Intolerance FAQ" | Keyword alignment | 5 min |
| 🟢 Low | Shorten `/guides/ibs-food-intolerance` title to ≤60 chars | SERP display | 5 min |
| 🟢 Low | Add contact email (hello@foodintolerancecheck.com) to About + Footer | E-E-A-T trust signal | 10 min |

## Phase 3: Content & Authority (Month 2)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🟢 Low | Fix Article schema publisher logo (use brand logo, not OG image) | Schema accuracy | 15 min |
| 🟢 Low | Add PNG favicon variants (32x32, 16x16) | Cross-platform support | 10 min |
| 🟢 Low | Differentiate overlapping content between test-guide and blog article | Content uniqueness | 1 hour |
| 🟢 Low | Add HowTo schema to /guides/low-fodmap and /tools/elimination-diet-planner | Rich result eligibility | 30 min |

## Phase 4: Monitoring & Iteration (Ongoing)

| Action | Frequency |
|---|---|
| Measure Core Web Vitals via PageSpeed Insights | After deployment + monthly |
| Set up Google Search Console and submit sitemap | Once deployed |
| Monitor indexing status and fix crawl errors | Weekly for first month |
| Track keyword rankings for target queries | Monthly |
| Add new blog content targeting long-tail keywords | Bi-weekly |
| Add security headers via hosting provider | Once |

---

## Estimated Impact After Implementation

| Metric | Current | Expected (3 months) |
|---|---|---|
| Indexed pages | 0 (not deployed) | 23-24 |
| Schema coverage | ~92% | ~100% |
| Meta description quality | 10/24 need trimming | 24/24 optimal |
| AI citation readiness | Basic (llms.txt + llms-full.txt) | Enhanced with contact info |
| Health Score | 93 | 95-97 |

---

## Previous Audit Progress

Issues resolved since the July 24 audit:

| Previous Issue | Status |
|---|---|
| FAQPage schema missing on homepage | ✅ Added and aligned with JS content |
| WebApplication schema on tool pages | ✅ All 6 tool pages have it |
| Thin content: low-fodmap (33→87 lines) | ✅ Expanded with food lists, phases, hidden FODMAPs |
| Thin content: elimination-diet-planner (34→93 lines) | ✅ Expanded with protocols, table, common mistakes |
| Thin content: ibs-food-intolerance (47→85 lines) | ✅ Expanded with subtypes, triggers, stress management |
| Duplicate images in public/images/ | ✅ Removed |
| 5 font weights (300 unused) | ✅ Reduced to 4 (300 removed) |
| AboutPage + Person schema | ✅ Present on /about |
| 404 page | ✅ Present with navigation links |
| Breadcrumbs on inner pages | ✅ 22/24 pages have them |
