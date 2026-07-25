# Single-Page Deep Check: FoodCheck

**Date:** 2026-07-25  
**Pages checked:** Homepage (/), Primary Pillar (/guides/low-fodmap), Representative Article (/blog/elimination-diet-guide)

---

## 1. Homepage (/)

**File:** `src/pages/index.astro` (222 lines)

### On-Page Elements

| Element | Value | Status |
|---------|-------|--------|
| Title | Food Intolerance Checker - Free Self-Test - FoodCheck (53) | ✅ |
| Description | Use our free food intolerance checker... (159) | ✅ |
| H1 | "Food Intolerance Checker" | ✅ |
| H2 count | 6 | ✅ |
| H3 count | 11 | ✅ |
| Canonical | https://foodintolerancecheck.com/ | ✅ |
| og:type | website | ✅ |
| Internal links | 18 | ✅ |

### Schema (4 types)

| Schema | Fields | Status |
|--------|--------|--------|
| WebSite | name, url, SearchAction | ✅ |
| Organization | name, url, logo, description | ✅ |
| WebApplication | name, url, category, offers | ✅ |
| FAQPage | 5 Q&As with acceptedAnswer | ✅ |

### Content Structure

- **Hero section:** H1 + subtitle + hero image (eager loaded, fetchpriority=high)
- **Interactive tool:** 3-step checker (Symptoms → Timing → Foods)
- **Why section:** 3 benefit cards (Fast, Private, Actionable)
- **Intolerance types:** 4 checker cards (Lactose, Gluten, Histamine, Fructose)
- **More tools:** 4 tool cards (Food Diary, Elimination Planner, Symptoms, Testing Guide)
- **FAQ section:** 5 questions with accordion (dual FAQPage schema)
- **Evidence section:** 3 authoritative blockquotes (NHS, BDA, Monash)
- **Disclaimer section:** Medical disclaimer with link to /about

### E-E-A-T Signals

- ⚠️ No visible author byline (homepage typically doesn't need one)
- ✅ 3 authoritative citations with named sources
- ✅ Medical disclaimer visible
- ✅ "Educational only" messaging prominent

### Issues

- Minor: No visible author byline (acceptable for homepage)
- Minor: Heading hierarchy warning is false positive (H2→H3 is valid)

**Page Score: 96/100**

---

## 2. Primary Pillar: Low FODMAP Diet Guide (/guides/low-fodmap)

**File:** `src/pages/guides/low-fodmap/index.astro` (88 lines)

### On-Page Elements

| Element | Value | Status |
|---------|-------|--------|
| Title | Low FODMAP Diet Guide - Manage IBS Symptoms - FoodCheck (55) | ✅ |
| Description | A step-by-step guide to the low FODMAP diet... (158) | ✅ |
| H1 | "Low FODMAP Diet Guide" | ✅ |
| H2 count | 9 | ✅ |
| H3 count | 15 | ✅ |
| Author | Dr. Emily Carter, Registered Dietitian | ✅ |
| Dates | Published 2026-02-05, Modified 2026-07-20 | ✅ |
| Breadcrumbs | Home > Guides > Low FODMAP Diet | ✅ |
| Internal links | 21 | ✅ |

### Schema (3 types)

| Schema | Fields | Status |
|--------|--------|--------|
| Article | headline, author, publisher, dates | ✅ Complete |
| BreadcrumbList | 3 items (Home > Guides > Low FODMAP Diet) | ✅ |
| MedicalWebPage | reviewedBy, specialty, lastReviewed | ✅ |

### Content Structure

1. **What Are FODMAPs?** — Definition + Monash citation + blockquote
2. **Five FODMAP Categories** — 4 category cards (Oligo, Di, Mono, Polyols)
3. **Three Phases** — 3 detailed phase cards (Elimination, Reintroduction, Personalisation)
4. **Foods to Avoid** — 4 category cards (red theme)
5. **Safe Alternatives** — 4 category cards (green theme)
6. **Common Mistakes** — 5 bullet points
7. **Hidden FODMAPs** — 5 bullet points with examples
8. **Related Resources** — 4 cross-link cards
9. **References** — 4 citations (Monash, NICE, BDA, Gibson 2010)

### E-E-A-T Signals

- ✅ Author byline visible: "By Dr. Emily Carter, Registered Dietitian · Updated 20 Jul 2026"
- ✅ Authoritative blockquote from Monash University
- ✅ 4 references in References section
- ✅ Medical disclaimer in content body
- ✅ "undertaken with guidance from a registered dietitian" mentioned

### Content Quality

- ✅ Keyword "low FODMAP" appears in H1, first paragraph, and multiple H2s
- ✅ Question-based H2s optimized for featured snippets
- ✅ Clear 3-phase protocol with actionable steps
- ✅ Both "avoid" and "safe" food lists for practical use
- ✅ Links to complementary tools (Food Diary, IBS guide, Elimination Diet)

### Issues

- None identified

**Page Score: 99/100**

---

## 3. Representative Article: Elimination Diet Guide (/blog/elimination-diet-guide)

**File:** `src/pages/blog/elimination-diet-guide/index.astro` (125 lines)

### On-Page Elements

| Element | Value | Status |
|---------|-------|--------|
| Title | Elimination Diet: A Step-by-Step Guide - FoodCheck (50) | ✅ |
| Description | Learn how to do an elimination diet step by step... (163) | ⚠️ >160 |
| H1 | "Elimination Diet: A Step-by-Step Guide" | ✅ |
| H2 count | 9 | ✅ |
| H3 count | 4 | ✅ |
| Author | Dr. Emily Carter, Registered Dietitian | ✅ |
| Dates | Published 2026-01-15, Modified 2026-07-20 | ✅ |
| Breadcrumbs | Home > Blog > Elimination Diet Guide | ✅ |
| Internal links | 19 | ✅ |

### Schema (4 types)

| Schema | Fields | Status |
|--------|--------|--------|
| Article | headline, author, publisher, dates | ✅ Complete |
| BreadcrumbList | 3 items | ✅ |
| MedicalWebPage | reviewedBy, specialty, lastReviewed | ✅ |
| HowTo | 4 steps with name, text, url | ✅ |

### Content Structure

1. **What Is an Elimination Diet?** — Definition + BDA citation + "gold standard" emphasis
2. **Who Should Consider?** — Indications + contraindications (eating disorders, pregnancy, children)
3. **Step 1: Preparation** — Baseline diary, planning elimination targets
4. **Step 2: Elimination (2-4 weeks)** — Complete removal, label reading, monitoring
5. **Step 3: Reintroduction** — 3-day protocol per food
6. **Step 4: Personalisation** — Long-term diet building
7. **Common Mistakes** — 5 bullet points
8. **Safety Precautions** — 5 safety rules + healthcare team guidance
9. **References** — 4 citations (BDA, NHS, Guts UK, Monash)

### E-E-A-T Signals

- ✅ Author byline with publish + update dates
- ✅ BDA referenced as "gold standard" authority
- ✅ Safety contraindications clearly stated
- ✅ 4 references section
- ✅ HowTo schema with structured steps

### Content Quality

- ✅ Clear step-by-step structure (Step 1-4)
- ✅ Safety section with medical contraindications
- ✅ "Hidden Sources" subsection adds practical value
- ✅ "How to Stay Motivated" subsection addresses user psychology
- ✅ Links to Food Diary tool at relevant points

### Issues

- ⚠️ Meta description 163 chars (3 over limit)
- HowTo schema `step[].url` uses fragment identifiers (#step-1) but anchors don't exist in HTML

**Page Score: 96/100**

---

## Summary

| Page | Score | Key Strength | Key Issue |
|------|-------|-------------|-----------|
| Homepage (/) | 96/100 | 4 schemas, interactive tool, evidence section | No visible author byline |
| Low FODMAP Guide (/guides/low-fodmap) | 99/100 | Complete content, 3-phase protocol, strong E-E-A-T | None |
| Elimination Diet (/blog/elimination-diet-guide) | 96/100 | HowTo schema, safety section, 4-step protocol | Description 3 chars over; HowTo URL fragments |

**Average Page Score: 97/100**
