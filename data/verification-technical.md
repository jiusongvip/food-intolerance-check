# Technical SEO Audit: FoodCheck (foodintolerancecheck.com)

**Date:** 2026-07-25  
**Framework:** Astro 7.1.3 (static)  
**Pages audited:** 23 + 404 page  

---

## 1. Crawlability & Indexing

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | ✅ PASS | `User-agent: * / Allow: /` + Sitemap directive |
| Sitemap | ✅ PASS | `sitemap-index.xml` → `sitemap-0.xml` with 23 URLs |
| noindex | ✅ PASS | No pages have noindex |
| 404 page | ✅ PASS | Custom 404 with navigation links |

## 2. Meta Tags

### Title Tags (50-60 chars target)

| Page | Title | Length | Status |
|------|-------|--------|--------|
| / | Food Intolerance Checker - Free Self-Test - FoodCheck | 53 | ✅ |
| /about | About FoodCheck - Our Approach to Food Intolerance Education | 60 | ✅ |
| /blog | Food Intolerance Blog - Tips & Evidence - FoodCheck | 55 | ✅ |
| /blog/are-food-intolerance-tests-accurate | Are Food Intolerance Tests Accurate? - FoodCheck | 48 | ✅ |
| /blog/elimination-diet-guide | Elimination Diet: A Step-by-Step Guide - FoodCheck | 50 | ✅ |
| /blog/low-fodmap-foods | Low FODMAP Food List - IBS Management - FoodCheck | 49 | ✅ |
| /faq | Food Intolerance FAQ - Testing & Symptoms - FoodCheck | 57 | ✅ |
| /guides | Food Intolerance Guides - Testing & Diets - FoodCheck | 57 | ✅ |
| **/guides/ibs-food-intolerance** | **IBS & Food Intolerance - Overlap & Management - FoodCheck** | **65** | **⚠️ WARN** |
| /guides/intolerance-vs-allergy | Intolerance vs Allergy - Key Differences - FoodCheck | 52 | ✅ |
| /guides/low-fodmap | Low FODMAP Diet Guide - Manage IBS Symptoms - FoodCheck | 55 | ✅ |
| /guides/reading-test-results | How to Read Food Intolerance Test Results - FoodCheck | 53 | ✅ |
| /guides/test-guide | Food Intolerance Tests - Breath, IgG & Diets - FoodCheck | 60 | ✅ |
| /privacy | Privacy Policy - How FoodCheck Protects Your Data | 49 | ✅ |
| /symptoms | Food Intolerance Symptoms - 8 Common Signs - FoodCheck | 54 | ✅ |
| /terms | Terms of Service - Food Intolerance Tools - FoodCheck | 53 | ✅ |
| /tools | Food Intolerance Tools - Checkers & Diary - FoodCheck | 57 | ✅ |
| /tools/elimination-diet-planner | Elimination Diet Planner - Identify Triggers - FoodCheck | 56 | ✅ |
| /tools/food-diary | Food Diary - Track Meals & Symptoms - FoodCheck | 51 | ✅ |
| /tools/fructose-intolerance-test | Fructose Intolerance Checker - Self-Test - FoodCheck | 52 | ✅ |
| /tools/gluten-intolerance-test | Gluten Intolerance Checker - Self-Test - FoodCheck | 50 | ✅ |
| /tools/histamine-intolerance-test | Histamine Intolerance Checker - Self-Test - FoodCheck | 53 | ✅ |
| /tools/lactose-intolerance-test | Lactose Intolerance Checker - Self-Test - FoodCheck | 52 | ✅ |

**Result:** 22/23 PASS, 1 WARN (>60 chars)

### Meta Descriptions (120-160 chars target)

| Page | Length | Status |
|------|--------|--------|
| / | 159 | ✅ |
| /about | 162 | ⚠️ |
| /blog | 154 | ✅ |
| /blog/are-food-intolerance-tests-accurate | 137 | ✅ |
| /blog/elimination-diet-guide | 163 | ⚠️ |
| /blog/low-fodmap-foods | 143 | ✅ |
| /faq | 157 | ✅ |
| /guides | 155 | ✅ |
| /guides/ibs-food-intolerance | 161 | ⚠️ |
| /guides/intolerance-vs-allergy | 162 | ⚠️ |
| /guides/low-fodmap | 158 | ✅ |
| /guides/reading-test-results | 155 | ✅ |
| /guides/test-guide | 163 | ⚠️ |
| /privacy | 128 | ✅ |
| /symptoms | 164 | ⚠️ |
| /terms | 113 | ⚠️ |
| /tools | 178 | ⚠️ |
| /tools/elimination-diet-planner | 158 | ✅ |
| /tools/food-diary | 164 | ⚠️ |
| /tools/fructose-intolerance-test | 153 | ✅ |
| /tools/gluten-intolerance-test | 155 | ✅ |
| /tools/histamine-intolerance-test | 155 | ✅ |
| /tools/lactose-intolerance-test | 154 | ✅ |

**Result:** 13/23 PASS, 10 WARN (8 >160, 1 <120)

## 3. Heading Structure

| Check | Status | Notes |
|-------|--------|-------|
| H1 uniqueness | ✅ PASS | All 23 pages have exactly 1 H1 |
| H1 contains keyword | ✅ PASS | 20/21 checked pages (except /faq) |
| Heading hierarchy | ⚠️ WARN | 12 pages have minor hierarchy skips (H3→H4 in footer) |

## 4. Canonical URLs

| Check | Status | Notes |
|-------|--------|-------|
| Self-referencing canonical | ✅ PASS | All 23 pages have correct canonical URLs |
| Site domain | ✅ PASS | All point to `https://foodintolerancecheck.com` |

## 5. Open Graph & Social

| Check | Status | Notes |
|-------|--------|-------|
| og:title | ✅ PASS | Present on all pages |
| og:description | ✅ PASS | Present on all pages |
| og:image | ✅ PASS | Present on all pages |
| og:type | ✅ PASS | `website` for index/hub, `article` for content |
| twitter:card | ✅ PASS | `summary_large_image` on all pages |

## 6. Images

| Check | Status | Notes |
|-------|--------|-------|
| Alt text | ✅ PASS | All images have descriptive alt attributes |
| Format | ✅ PASS | Astro Image with `format="webp"` auto-conversion |
| Lazy loading | ✅ PASS | Hero images eager, all others lazy |
| Unique images | ✅ PASS | 23 unique images across 23 pages (no reuse) |

## 7. Internal Linking

| Check | Status | Notes |
|-------|--------|-------|
| Min 3 links per page | ✅ PASS | 18-21 unique internal links per page |
| Generic anchors | ✅ PASS | No "click here" / "read more" / "learn more" |

---

## Summary

| Category | Pass | Warn | Fail |
|----------|------|------|------|
| Crawlability | 4 | 0 | 0 |
| Title Tags | 22 | 1 | 0 |
| Meta Descriptions | 13 | 10 | 0 |
| Headings | 22 | 1 | 0 |
| Canonical | 23 | 0 | 0 |
| OG/Social | 23 | 0 | 0 |
| Images | 23 | 0 | 0 |
| Internal Links | 23 | 0 | 0 |

**Critical issues: 0**  
**Warnings: 12** (mostly meta description length)
