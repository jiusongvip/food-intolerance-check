# FoodIntoleranceCheck.com — Full SEO Audit Report

**Domain**: foodintolerancecheck.com  
**Date**: July 23, 2026  
**Business Type**: Health/Education (YMYL) — Free online self-assessment tools and educational content  
**Platform**: Astro 7.1 (SSG) + Tailwind CSS  
**Total Pages**: 23  

---

## Executive Summary

**SEO Health Score: 68/100**

FoodIntoleranceCheck.com is a well-built health education site with solid technical foundations — clean static HTML, proper meta tags, good heading hierarchy, and structured data on key pages. However, a **critical sitemap deployment issue** means search engines may not be able to discover most pages. Several guide pages are too thin for YMYL health content, and image optimization opportunities remain.

### Top 5 Critical Issues
1. **Sitemap not serving site pages** — live sitemap.xml only contains `/lander`, not the 23 actual URLs
2. **robots.txt mismatch** — live version differs from source code (different deployment?)
3. **Thin content on guide pages** — 3 guides under 300 words (YMYL penalty risk)
4. **No WebP/AVIF image optimization** — all 16 images are JPG only
5. **Missing schema opportunities** — no MedicalWebPage, HowTo, or ItemList schemas

### Top 5 Quick Wins
1. Redeploy site to sync source → live (fixes sitemap + robots.txt)
2. Add "Tools" link to main navigation header
3. Expand `/guides/reading-test-results` from ~200 to 800+ words
4. Add MedicalWebPage schema to health content pages
5. Convert images to WebP using Astro's `<Image>` component

---

## Category Scores

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 72/100 | 22% | 15.8 |
| Content Quality | 65/100 | 23% | 15.0 |
| On-Page SEO | 82/100 | 20% | 16.4 |
| Schema / Structured Data | 70/100 | 10% | 7.0 |
| Performance (CWV) | 78/100 | 10% | 7.8 |
| AI Search Readiness | 60/100 | 10% | 6.0 |
| Images | 70/100 | 5% | 3.5 |
| **Total** | | **100%** | **71.5 → 68** |

---

## Technical SEO (72/100)

### Strengths
- ✅ Canonical URLs auto-generated on all pages
- ✅ All 23 pages have unique titles and meta descriptions
- ✅ Open Graph + Twitter Card meta on every page
- ✅ Clean URL structure (`/tools/lactose-intolerance-test`, `/guides/test-guide`)
- ✅ `trailingSlash: "never"` for URL consistency
- ✅ HTTPS enabled
- ✅ Static HTML output — fully crawlable without JS rendering
- ✅ Mobile responsive via Tailwind

### Issues

| # | Severity | Issue | Impact |
|---|----------|-------|--------|
| 1 | **Critical** | Live sitemap.xml only has `/lander` URL | Search engines can't discover pages |
| 2 | **High** | robots.txt live ≠ source code | Deployment out of sync |
| 3 | **Medium** | Google Fonts render-blocking | FCP delay ~300ms |
| 4 | **Low** | No hreflang tags | Acceptable for English-only site |
| 5 | **Info** | No Google Search Console | No search performance data |

**Full details**: [findings/technical.md](findings/technical.md)

---

## Content Quality (65/100)

### Strengths
- ✅ Author attribution (Dr. Emily Carter, Registered Dietitian) on all content
- ✅ Publication and modification dates on blog and guide content
- ✅ References from reputable sources (NHS, BDA, NICE, AAAAI, Monash)
- ✅ Medical disclaimers on all tool pages
- ✅ Good readability — plain English, short paragraphs, tables
- ✅ FAQ page with comprehensive Q&A pairs
- ✅ Detailed About page with editorial standards

### Issues

| # | Severity | Issue | Impact |
|---|----------|-------|--------|
| 1 | **High** | 6 pages with thin content (<400 words) | YMYL ranking penalty |
| 2 | **High** | "Dr. Emily Carter" has no verifiable online presence | E-E-A-T trust gap |
| 3 | **Medium** | No "Tools" link in main navigation | Users and crawlers can't find core feature |
| 4 | **Medium** | Limited internal linking between tools and guides | Missed link equity |
| 5 | **Low** | No blog content since March 2026 | Freshness signal decay |

### Thin Content Pages
| Page | Est. Words | Recommended |
|------|-----------|-------------|
| `/guides/reading-test-results` | ~200 | Expand to 800+ |
| `/guides/low-fodmap` | ~250 | Expand to 1200+ |
| `/guides/ibs-food-intolerance` | ~300 | Expand to 800+ |
| `/symptoms` | ~350 | Expand to 600+ |
| `/tools/elimination-diet-planner` | ~250 | Add interactive elements |

**Full details**: [findings/content.md](findings/content.md)

---

## On-Page SEO (82/100)

### Title Tags
All 23 pages have unique, descriptive titles (40-65 chars). ✅  
Brand suffix "- FoodCheck" used on blog posts. ✅

### Meta Descriptions
All 23 pages have unique descriptions (120-160 chars). ✅  
No duplicates found. ✅

### Heading Structure
- H1: Present on every page ✅
- H2: Used for major sections ✅
- H3: Used for sub-items (cards, steps) ✅
- No skipped heading levels ✅

### Internal Linking
- Footer: 4-column link structure covering all major pages ✅
- Content: Cross-links between related blog/guide articles ✅
- Breadcrumbs: Present on subpages via schema ✅
- **Missing**: "Tools" not in header nav, limited tool ↔ guide cross-links ⚠️

---

## Schema / Structured Data (70/100)

### Current Implementation
| Schema Type | Pages | Status |
|-------------|-------|--------|
| Organization | Homepage | ✅ Valid |
| WebApplication | Homepage | ✅ Valid |
| Article | Blog + Guide posts (auto via BaseLayout) | ✅ Valid (minor issues) |
| BreadcrumbList | Subpages with breadcrumbs prop | ✅ Valid |
| FAQPage | `/faq` | ✅ Valid |

### Missing Opportunities
- **MedicalWebPage** — high value for YMYL health content
- **HowTo** — elimination diet guide has clear step-by-step structure
- **ItemList** — listing pages (tools, guides, blog) could get carousel rich results

### Validation Issues
- Article schema publisher missing `logo` ImageObject
- Organization logo uses SVG (may not meet Google's 112×112px minimum)
- Article schema missing `image` field

**Full details**: [findings/schema.md](findings/schema.md)

---

## Performance (78/100)

### Estimated Core Web Vitals
| Metric | Estimate | Rating |
|--------|----------|--------|
| LCP | ~2.0-2.5s | Needs Improvement |
| INP | <100ms | Good |
| CLS | <0.05 | Good |
| FCP | ~1.5-2.0s | Good |
| TTFB | <100ms | Excellent (static) |

### Strengths
- Static HTML (Astro SSG) — near-instant TTFB
- Minimal JavaScript — only tool-specific scripts
- Tailwind CSS purged — small stylesheet
- No analytics or tracking scripts

### Issues
- Google Fonts render-blocking (Outfit, 5 weights)
- No `<link rel="preload">` for hero image
- No critical CSS inlining

**Full details**: [findings/performance.md](findings/performance.md)

---

## Images (70/100)

### Inventory: 16 JPG images
- ✅ All have descriptive alt text
- ✅ All have `width` and `height` attributes (CLS prevention)
- ✅ Hero uses `loading="eager"`, others use `loading="lazy"`
- ⚠️ No WebP/AVIF format alternatives
- ⚠️ All use uniform 800×450 dimensions (not responsive)
- ⚠️ Astro `<Image>` component not used

---

## AI Search Readiness (60/100)

### Strengths
- Well-structured, factual content with clear headings
- Author credentials visible
- FAQPage schema (high AI citation potential)
- Medical disclaimers and evidence-based claims

### Issues
- No `llms.txt` file (referenced in live robots.txt but likely missing)
- No inline citation links (references listed but not hyperlinked)
- No structured summaries/abstracts for AI extraction
- No explicit "key takeaway" passages optimized for AI citation

---

## Page Inventory

### Tools (7 pages)
| URL | Title | H1 |
|-----|-------|----|
| `/` | Food Intolerance Checker - Free Online Self-Assessment | Food Intolerance Checker |
| `/tools` | Free Food Intolerance Tools - Checkers, Diary & Planner | Tools |
| `/tools/lactose-intolerance-test` | Lactose Intolerance Checker - Free Online Self-Assessment | Lactose Intolerance Checker |
| `/tools/gluten-intolerance-test` | Gluten Intolerance Checker - Free Online Self-Assessment | Gluten Intolerance Checker |
| `/tools/histamine-intolerance-test` | Histamine Intolerance Checker - Free Self-Assessment Tool | Histamine Intolerance Checker |
| `/tools/fructose-intolerance-test` | Fructose Intolerance Checker - Free Self-Assessment Tool | Fructose Intolerance Checker |
| `/tools/food-diary` | Food Diary for Intolerance - Track Meals & Symptoms | Food Diary |
| `/tools/elimination-diet-planner` | Elimination Diet Planner - Identify Trigger Foods | Elimination Diet Planner |

### Guides (6 pages)
| URL | Title |
|-----|-------|
| `/guides` | Food Intolerance Guides - Testing, Diets & Symptom Management |
| `/guides/intolerance-vs-allergy` | Food Intolerance vs Food Allergy - Key Differences Explained |
| `/guides/test-guide` | Food Intolerance Test Guide - Breath Tests, IgG & Elimination Diets |
| `/guides/low-fodmap` | Low FODMAP Diet Guide - Manage IBS & Food Intolerance |
| `/guides/reading-test-results` | How to Read Food Intolerance Test Results - FoodCheck |
| `/guides/ibs-food-intolerance` | IBS & Food Intolerance - Symptoms, Overlap & Management |

### Blog (4 pages)
| URL | Title |
|-----|-------|
| `/blog` | Food Intolerance Blog - Guides, Tips & Evidence-Based Nutrition |
| `/blog/elimination-diet-guide` | Elimination Diet: A Step-by-Step Guide - FoodCheck |
| `/blog/low-fodmap-foods` | Low FODMAP Food List - Complete Guide for IBS Management |
| `/blog/are-food-intolerance-tests-accurate` | Are Food Intolerance Tests Accurate? - FoodCheck |

### Other (6 pages)
| URL | Title |
|-----|-------|
| `/symptoms` | Food Intolerance Symptoms - Common Signs & What to Watch For |
| `/faq` | Food Intolerance FAQ - Common Questions About Testing & Symptoms |
| `/about` | About FoodCheck - Our Approach to Food Intolerance Education |
| `/privacy` | Privacy Policy - How FoodCheck Protects Your Data |
| `/terms` | Terms of Service - Educational Food Intolerance Resources |
