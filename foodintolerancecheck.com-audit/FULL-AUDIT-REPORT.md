# Food Intolerance Check — Full SEO Audit Report

**Domain:** foodintolerancecheck.com  
**Audit Date:** July 24, 2026  
**Pages Analyzed:** 23  
**Framework:** Astro 7.1.3 + Tailwind CSS 3.4  
**Business Type:** Health/Education SaaS Tool (Free)  
**Deployment Status:** NOT DEPLOYED (domain shows parked page)

---

## Executive Summary

**SEO Health Score: 72/100**

FoodCheck is a well-structured, evidence-based health education site with strong foundational SEO. The codebase demonstrates excellent on-page SEO practices, comprehensive schema markup, and high-quality content with proper E-E-A-T signals. However, the site is not currently deployed, several pages have thin content, and there are schema gaps that need attention before launch.

### Top 5 Critical Issues
1. **Site not deployed** — domain returns a parked JavaScript redirect page
2. **Homepage FAQ section missing FAQPage schema** — FAQ content rendered via JS but no structured data
3. **Thin content pages** — Low FODMAP guide and Elimination Diet Planner need significant expansion
4. **No contact email** — weakens E-E-A-T trust signals across the site
5. **OG type hardcoded** — all pages use `og:type="website"` including blog articles

### Top 5 Quick Wins
1. Add FAQPage schema to homepage (matches existing JS-rendered FAQ content)
2. Set `og:type="article"` for blog posts and guide pages
3. Add contact email to About page and Footer
4. Expand Low FODMAP guide with food lists from existing blog content
5. Add WebApplication schema to individual tool pages

---

## Scoring Breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 70 | 15.4 |
| Content Quality | 23% | 78 | 17.9 |
| On-Page SEO | 20% | 82 | 16.4 |
| Schema / Structured Data | 10% | 75 | 7.5 |
| Performance (CWV) | 10% | 70 | 7.0 |
| AI Search Readiness | 10% | 76 | 7.6 |
| Images | 5% | 80 | 4.0 |
| **Total** | **100%** | | **75.8** |

---

## 1. Technical SEO (70/100)

### What Works
- `robots.txt` properly configured: `Allow: /` with sitemap reference
- `@astrojs/sitemap` integration generates sitemap automatically
- Canonical URLs correctly generated via `Astro.url.pathname`
- `trailingSlash: "never"` ensures clean, consistent URLs
- `_redirects` handles `/sitemap.xml → /sitemap-index.xml` (301)
- Astro SSG produces fast static HTML with minimal JavaScript

### Issues Found

| # | Finding | Severity |
|---|---|---|
| 1 | Site not deployed — domain returns parked page (114 bytes, JS redirect to /lander) | Critical |
| 2 | No security headers (CSP, X-Frame-Options, HSTS) | Medium |
| 3 | OG type hardcoded as "website" for all pages | Medium |
| 4 | Loading 5 font weights (300-700) when only 4 appear used | Low |

### Deployment
The domain `foodintolerancecheck.com` is currently serving a parked page:
```html
<!DOCTYPE html><html><head><script>window.onload=function(){window.location.href="/lander"}</script></head></html>
```
This must be resolved before any SEO efforts can take effect.

### Recommendations
- Deploy to Cloudflare Pages, Netlify, or Vercel
- Add `_headers` file with security headers for hosting provider
- Pass `ogType` prop from pages to BaseLayout for correct OG type

---

## 2. Content Quality (78/100)

### E-E-A-T Assessment: Strong
- **Experience:** Author has 12+ years clinical experience (stated on About page)
- **Expertise:** Dr. Emily Carter, Registered Dietitian — named on all guide/blog posts
- **Authoritativeness:** References NHS, BDA, NICE, AAAAI, Monash, EAACI, peer-reviewed journals
- **Trust:** Clear medical disclaimers on every page, editorial standards documented, no commercial bias

### Thin Content Pages

| Page | Lines | Issue |
|---|---|---|
| `/guides/low-fodmap` | 33 | Missing food lists, only 3 phase descriptions |
| `/tools/elimination-diet-planner` | 34 | No interactive content, just bullet-point protocols |
| `/guides/ibs-food-intolerance` | 47 | Missing IBS subtypes, detailed management strategies |

### Content Duplication
- `vegetables-fodmap.jpg` used on both `/guides/low-fodmap` and `/guides/ibs-food-intolerance`
- `lab-testing.jpg` used on both `/guides/test-guide` and `/blog/are-food-intolerance-tests-accurate`
- Content between `/guides/test-guide` and `/blog/are-food-intolerance-tests-accurate` overlaps significantly

### Strengths
- Elimination Diet Guide (113 lines) is comprehensive with HowTo schema
- Intolerance vs Allergy guide has excellent comparison table
- Low FODMAP Food List blog post has detailed food reference tables
- All checker pages include NHS/BDA statistics and blockquote citations

---

## 3. On-Page SEO (82/100)

### Title Tags — All Unique and Well-Crafted
Every page has a unique, keyword-rich title. Examples:
- `Food Intolerance Checker - Free Online Self-Assessment`
- `Lactose Intolerance Checker - Free Online Self-Assessment`
- `Low FODMAP Food List - Complete Guide for IBS Management`

### Meta Descriptions — All Present and Compelling
All descriptions are under 160 characters and include relevant keywords with clear value propositions.

### Heading Structure — Excellent
- Single `<h1>` per page with clear hierarchy
- Question-based H2 headings that match search intent patterns:
  - "How Does This Lactose Checker Work?"
  - "Why Do Doctors Not Recommend IgG Blood Tests?"
  - "What Should You Remember About the Low FODMAP Diet?"

### Internal Linking — Strong
- Cross-linking between related tools, guides, and blog posts
- Resource cards at bottom of each checker page (4 links each)
- Footer links organized by category (Tools, Guides, Intolerances, Company)
- Contextual inline links within content body

### Issues Found

| # | Finding | Severity |
|---|---|---|
| 1 | Homepage FAQ rendered via JS with no FAQPage schema | High |
| 2 | Tool pages missing WebApplication schema | Medium |
| 3 | Title tag brand name inconsistent across pages | Low |

---

## 4. Schema / Structured Data (75/100)

### Current Implementation

| Schema Type | Pages | Status |
|---|---|---|
| Organization | Homepage | ✅ |
| WebApplication | Homepage only | ⚠️ Should be on all tool pages |
| Article | Blog posts, Guide pages | ✅ |
| MedicalWebPage | Medical content pages | ✅ |
| FAQPage | /faq page | ✅ |
| ItemList | Listing pages (tools, guides, blog) | ✅ |
| HowTo | Elimination Diet Guide | ✅ |
| BreadcrumbList | All inner pages | ✅ |

### Gaps
- **No FAQPage schema on homepage** — homepage has 5 FAQ items rendered via JS but no structured data
- **No WebApplication schema on tool pages** — individual checkers should have their own schema
- **No AboutPage schema** on /about page
- **Article publisher logo** uses og-default.png (a large image) instead of a proper brand logo

### Validation Notes
- All JSON-LD is valid syntax
- URLs are correctly absolute (https://foodintolerancecheck.com/...)
- Date fields use ISO 8601 format

---

## 5. Performance / Core Web Vitals (70/100)

### Estimated Performance (Code Analysis — Site Not Deployed)

| Metric | Estimate | Basis |
|---|---|---|
| LCP | Good (~1.5s) | Hero image eager+fetpriority, minimal JS, static HTML |
| INP | Good (~50ms) | Minimal interactive elements, no heavy frameworks |
| CLS | Good (~0.05) | Image width/height set, font may cause minor shift |
| TBT | Good (~50ms) | Only checker scripts are client-side JS |

### Concerns
- Cannot verify without live deployment
- 5 font weight files may increase FCP
- No `aspect-ratio` on image containers could cause minor CLS
- Checker.js is 126 lines loaded on homepage — minimal impact

### Optimizations Already in Place
- Astro SSG (zero JS framework overhead)
- `@astrojs/tailwind` for purged CSS
- `loading="lazy"` on all non-hero images
- `fetchpriority="high"` on hero image
- No analytics or tracking scripts

---

## 6. AI Search Readiness (76/100)

### What Works
- **llms.txt** present with comprehensive site overview, key pages, guides, blog, and content policy
- Content uses question-based headings (H2) that match AI extraction patterns
- Blockquote citations provide quotable passages
- Named author with credentials enables attribution
- Medical disclaimers help AI systems cite responsibly

### Gaps
- **No llms-full.txt** — expanded version with detailed per-page summaries
- **No contact email** — AI engines use contact info as trust signal
- **No structured data for tools** — AI crawlers benefit from WebApplication schema

### Citability Score: 7/10
Content is well-structured for AI extraction but missing the expanded llms-full.txt that increasingly powers AI Overview citations.

---

## 7. Images (80/100)

### What Works
- All images have descriptive `alt` text
- Astro `<Image>` component auto-converts to WebP format
- Width (800) and height (450) set for consistent aspect ratio
- Proper loading strategy: eager for hero, lazy for rest

### Issues
- **Duplicate storage:** All images exist in both `src/assets/images/` and `public/images/`
  - `public/images/` copies are redundant (Astro Image processes from `src/assets/`)
  - Doubles the repository size unnecessarily
- **No PNG favicon** — only SVG, some platforms prefer PNG/ICO
- **Image reuse** across unrelated pages reduces visual diversity

---

## Site Architecture Summary

```
/ (Homepage — Main Checker)
├── /tools (Listing)
│   ├── /tools/lactose-intolerance-test
│   ├── /tools/gluten-intolerance-test
│   ├── /tools/histamine-intolerance-test
│   ├── /tools/fructose-intolerance-test
│   ├── /tools/food-diary
│   └── /tools/elimination-diet-planner
├── /guides (Listing)
│   ├── /guides/intolerance-vs-allergy
│   ├── /guides/test-guide
│   ├── /guides/low-fodmap
│   ├── /guides/reading-test-results
│   └── /guides/ibs-food-intolerance
├── /symptoms
├── /blog (Listing)
│   ├── /blog/elimination-diet-guide
│   ├── /blog/low-fodmap-foods
│   └── /blog/are-food-intolerance-tests-accurate
├── /faq
├── /about
├── /privacy
└── /terms
```

**Total Pages:** 23  
**Average Internal Links Per Page:** ~6  
**Orphan Pages:** 0 (all pages linked from nav, footer, or related pages)

---

## Conclusion

FoodCheck has a strong SEO foundation with excellent on-page optimization, comprehensive schema markup, and high-quality evidence-based content. The primary blockers are: (1) the site is not deployed, (2) a few thin content pages need expansion, and (3) some schema gaps on tool pages and the homepage FAQ section. Once deployed and with the Phase 1-2 fixes applied, the site should perform well in search results for food intolerance related queries.
