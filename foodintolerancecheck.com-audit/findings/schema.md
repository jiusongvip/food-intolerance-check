# Schema / Structured Data Findings

## Current Implementation (Score: 7/10)

### What Works ✅
1. **Organization schema** (homepage): Defines "FoodCheck" with name, URL, logo, and description
2. **WebApplication schema** (homepage): Correctly categorised as "HealthApplication" with free pricing
3. **Article schema** (blog posts): Automatically generated via BaseLayout when `author` + `datePublished` props are present. Includes headline, description, author Person, publisher Organization, dates
4. **BreadcrumbList schema**: Generated on all pages that pass `breadcrumbs` prop. Correctly structured with Home as position 1
5. **FAQPage schema** (FAQ page): 6 Question/Answer pairs correctly structured for rich results

### Validation Issues ⚠️

1. **Article schema missing on guides**: Guide pages pass `author` and `datePublished` props, so Article schema IS generated — but guides are reference content, not articles. Consider using `MedicalWebPage` or `HowTo` instead.

2. **Article publisher logo**: Uses `url: "https://foodintolerancecheck.com"` but no `logo` object with image URL. Google recommends:
   ```json
   "publisher": {
     "@type": "Organization",
     "name": "FoodCheck",
     "logo": {
       "@type": "ImageObject",
       "url": "https://foodintolerancecheck.com/logo.png"
     }
   }
   ```

3. **Organization logo**: Uses `/favicon.svg` which may not meet Google's minimum 112x112px requirement for logo rich results.

4. **No image property in Article schema**: Blog posts have images but the Article schema doesn't include an `image` field.

## Missing Schema Opportunities ❌

| Schema Type | Where | Priority | Impact |
|-------------|-------|----------|--------|
| **MedicalWebPage** | All health content pages | High | Signals health content expertise to Google |
| **HowTo** | `/blog/elimination-diet-guide`, `/guides/low-fodmap` | Medium | Enables HowTo rich results with step-by-step display |
| **ItemList** | `/tools`, `/guides`, `/blog` listing pages | Medium | Enables carousel rich results |
| **MedicalCondition** | `/symptoms`, `/guides/ibs-food-intolerance` | Medium | Links symptoms to conditions in Google Health |
| **SoftwareApplication** | Individual tool pages | Low | Alternative to WebApplication for specific tools |
| **MedicalGuideline** | Guide pages | Low | Signals clinical guideline content |

## Recommended Additions

### 1. MedicalWebPage for health content
```json
{
  "@type": "MedicalWebPage",
  "about": {
    "@type": "MedicalCondition",
    "name": "Food Intolerance"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr. Emily Carter"
  },
  "specialty": "Gastroenterology"
}
```

### 2. HowTo for step-by-step guides
The elimination diet guide has clear steps (Preparation → Elimination → Reintroduction → Personalisation) that would qualify for HowTo rich results.

### 3. ItemList for listing pages
The tools index, guides index, and blog index pages list items that could use ItemList schema for potential carousel display.
