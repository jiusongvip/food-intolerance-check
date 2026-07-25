# Schema Markup Audit: FoodCheck

**Date:** 2026-07-25

---

## Schema Coverage by Page

| Page | Schema Types | Count |
|------|-------------|-------|
| / | WebSite, Organization, WebApplication, FAQPage | 4 |
| /about | BreadcrumbList, AboutPage | 2 |
| /blog | BreadcrumbList, ItemList | 2 |
| /blog/are-food-intolerance-tests-accurate | Article, BreadcrumbList, MedicalWebPage | 3 |
| /blog/elimination-diet-guide | Article, BreadcrumbList, MedicalWebPage, HowTo | 4 |
| /blog/low-fodmap-foods | Article, BreadcrumbList, MedicalWebPage | 3 |
| /faq | BreadcrumbList, FAQPage | 2 |
| /guides | BreadcrumbList, ItemList | 2 |
| /guides/ibs-food-intolerance | Article, BreadcrumbList, MedicalWebPage | 3 |
| /guides/intolerance-vs-allergy | Article, BreadcrumbList, MedicalWebPage | 3 |
| /guides/low-fodmap | Article, BreadcrumbList, MedicalWebPage | 3 |
| /guides/reading-test-results | Article, BreadcrumbList, MedicalWebPage | 3 |
| /guides/test-guide | Article, BreadcrumbList, MedicalWebPage | 3 |
| /privacy | **(none)** | 0 |
| /symptoms | BreadcrumbList, MedicalWebPage | 2 |
| /terms | **(none)** | 0 |
| /tools | BreadcrumbList, ItemList | 2 |
| /tools/elimination-diet-planner | BreadcrumbList, WebApplication | 2 |
| /tools/food-diary | BreadcrumbList, WebApplication | 2 |
| /tools/fructose-intolerance-test | BreadcrumbList, WebApplication | 2 |
| /tools/gluten-intolerance-test | BreadcrumbList, WebApplication | 2 |
| /tools/histamine-intolerance-test | BreadcrumbList, WebApplication | 2 |
| /tools/lactose-intolerance-test | BreadcrumbList, WebApplication | 2 |

## Required Schema Checks

| Schema Type | Expected | Found | Status |
|-------------|----------|-------|--------|
| Organization | Homepage | ✅ / | PASS |
| WebSite + SearchAction | Homepage | ✅ / | PASS |
| WebApplication | Tool pages | ✅ 6/6 tools | PASS |
| Article | Content pages | ✅ 8/8 articles | PASS |
| MedicalWebPage | Medical content | ✅ 9/9 pages | PASS |
| FAQPage | FAQ page | ✅ /faq + / | PASS |
| BreadcrumbList | All sub-pages | ⚠️ 20/23 | WARN |
| HowTo | Step-by-step guides | ✅ 1 (elimination diet) | PASS |
| ItemList | Listing pages | ✅ 3 (blog, guides, tools) | PASS |

## Article Schema Validation

All 8 Article schemas have complete fields:

| Page | author | datePublished | dateModified | publisher |
|------|--------|---------------|--------------|-----------|
| /blog/are-food-intolerance-tests-accurate | ✅ | ✅ | ✅ | ✅ |
| /blog/elimination-diet-guide | ✅ | ✅ | ✅ | ✅ |
| /blog/low-fodmap-foods | ✅ | ✅ | ✅ | ✅ |
| /guides/ibs-food-intolerance | ✅ | ✅ | ✅ | ✅ |
| /guides/intolerance-vs-allergy | ✅ | ✅ | ✅ | ✅ |
| /guides/low-fodmap | ✅ | ✅ | ✅ | ✅ |
| /guides/reading-test-results | ✅ | ✅ | ✅ | ✅ |
| /guides/test-guide | ✅ | ✅ | ✅ | ✅ |

## WebSite Schema Validation

```json
{
  "@type": "WebSite",
  "name": "FoodCheck",
  "url": "https://foodintolerancecheck.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://foodintolerancecheck.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```
✅ Valid with SearchAction

## Issues Found

### Must Fix (0)
None

### Should Fix (3)
1. **/privacy** — no schema markup at all → add WebPage schema
2. **/terms** — no schema markup at all → add WebPage schema
3. **BreadcrumbList missing** on /privacy and /terms → add breadcrumbs prop + schema

### Nice to Have (1)
4. **MedicalWebPage reviewedBy** — uses `reviewedBy` (correct) but not `author`/`datePublished`/`dateModified` as standalone fields. These exist in the companion Article schema. Acceptable dual-schema approach.

---

## Summary

**Critical issues: 0**  
**Warnings: 3** (missing schema on /privacy, /terms; missing BreadcrumbList on 2 pages)  
**Schema diversity: Excellent** — 10 different schema types used appropriately
