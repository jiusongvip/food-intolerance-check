# Schema / Structured Data Findings

## Current Implementation — Comprehensive

| Schema Type | Pages | Status |
|---|---|---|
| Organization | Homepage | ✅ With SearchAction potentialAction |
| WebApplication | 6 tool pages (lactose, gluten, histamine, fructose, food-diary, elimination-diet-planner) | ✅ All set to HealthApplication category |
| Article | 5 pages (intolerance-vs-allergy, test-guide, low-fodmap, reading-test-results, ibs-food-intolerance, elimination-diet-guide, are-food-intolerance-tests-accurate, low-fodmap-foods) | ✅ With author, datePublished, dateModified, publisher |
| MedicalWebPage | 8 medical content pages | ✅ With specialty: Gastroenterology, reviewedBy, lastReviewed |
| FAQPage | Homepage (5 questions), /faq (6 questions) | ✅ Both present and valid |
| ItemList | /tools, /guides, /blog listing pages | ✅ With correct itemListElement |
| HowTo | /blog/elimination-diet-guide | ✅ 4 steps with name, text, and URL. ⚠️ Step URLs don't match HTML ids |
| BreadcrumbList | 22 of 24 pages | ✅ Missing on /privacy and /terms |
| AboutPage + Person | /about | ✅ Person entity with name, jobTitle, description |
| WebSite | Homepage | ✅ With SearchAction |

**Total: 10 schema types · 55 JSON-LD blocks · 23 pages covered**

## Missing Schema Opportunities

| Page/Section | Recommended Schema | Priority |
|---|---|---|
| /privacy, /terms | WebPage + BreadcrumbList | Medium |
| /guides/low-fodmap | HowTo (3 phases = 3 steps) | Low |
| /tools/elimination-diet-planner | HowTo | Low |

## Validation Notes
- All JSON-LD valid syntax
- URLs correctly absolute (https://foodintolerancecheck.com/...)
- Date fields use ISO 8601 format
- `@type` values correctly capitalised

## Improvement Needed
- Article schema publisher logo points to /og-default.png (1200x630px) instead of a proper brand logo (recommended: 600x60px or square)
- HowTo schema step[].url fragments (#step-1...4) don't match any HTML id attributes
