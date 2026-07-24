# Schema / Structured Data Findings

## Current Implementation

### Organization (Homepage)
```json
{
  "@type": "Organization",
  "name": "FoodCheck",
  "url": "https://foodintolerancecheck.com",
  "logo": "https://foodintolerancecheck.com/favicon.svg"
}
```
✅ Valid. Consider adding `sameAs` array with social profiles if they exist.

### WebApplication (Homepage only)
✅ Valid for main checker tool.
⚠️ Should also be added to individual tool pages (lactose, gluten, histamine, fructose, food diary, planner).

### Article (Blog posts, Guide pages)
✅ Valid with author, datePublished, dateModified, publisher.
⚠️ Publisher logo uses `og-default.png` (large OG image). Should use a proper brand logo (~600x60px).

### MedicalWebPage (Medical content pages)
✅ Applied to: symptoms, intolerance-vs-allergy, test-guide, low-fodmap, reading-test-results, ibs-food-intolerance, low-fodmap-foods, are-food-intolerance-tests-accurate, elimination-diet-guide.
✅ Includes `specialty: "Gastroenterology"`, `about: MedicalCondition`, `reviewedBy`.

### FAQPage (/faq page)
✅ 6 questions with acceptedAnswer. Valid.
⚠️ Homepage also has FAQ content (5 items via JS) but NO FAQPage schema.

### ItemList (Listing pages)
✅ Applied to /tools, /guides, /blog listing pages. Valid.

### HowTo (Elimination Diet Guide)
✅ 4 steps with name, text, and URL. Includes totalTime "P8W". Valid.

### BreadcrumbList (All inner pages)
✅ Correctly structured with Home as position 1. Valid.

## Missing Schema Opportunities

| Page/Section | Recommended Schema | Priority |
|---|---|---|
| Homepage FAQ section | FAQPage | High |
| Tool pages (6) | WebApplication/SoftwareApplication | Medium |
| /about | AboutPage + Person | Low |
| /symptoms | MedicalWebPage (already has it) | ✅ Done |
