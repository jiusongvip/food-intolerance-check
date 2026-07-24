# AI Search Readiness Findings

## llms.txt — Present and Well-Structured ✅

The site has a comprehensive `llms.txt` file at `/llms.txt` covering:
- Site description and value proposition
- Key pages (8 tool pages with descriptions)
- Guides (5 guides with summaries)
- Blog (3 articles with summaries)
- Content policy (evidence-based, named author, educational only)

## Missing: llms-full.txt ⚠️

AI crawlers (ChatGPT Browse, Perplexity, Google AI Overviews) increasingly look for `llms-full.txt` which provides expanded per-page summaries with:
- Key facts and statistics per page
- Quotable passages
- Detailed descriptions beyond the brief

**Recommendation:** Create `llms-full.txt` with 2-3 paragraph summaries per page including key statistics (e.g., "65-70% of the world's population has some degree of lactose malabsorption").

## Citability Score: 7/10

### Strong Signals
- Question-based H2 headings match AI extraction patterns
- Blockquote citations from authoritative sources
- Named author with credentials enables attribution
- Medical disclaimers help AI cite responsibly
- Statistics cited with sources (e.g., "NHS, 2024", "BDA", "Monash University")

### Weak Signals
- No contact email for verification
- No inline hyperlinks to source organizations (references listed as text)
- No structured data summaries for quick extraction
- No llms-full.txt

## Brand Mention Signals

### Current
- "FoodCheck" brand name used consistently
- Domain matches brand (foodintolerancecheck.com)
- Organization schema defines brand entity

### Missing
- No social media profiles
- No external directory listings
- No Wikipedia or Wikidata presence
- No "sameAs" in Organization schema

## Recommendations

1. Create `llms-full.txt` with expanded per-page content
2. Add contact email (improves trust signals for AI engines)
3. Add inline hyperlinks to references (NHS, BDA URLs) for verification
4. Consider adding `sameAs` to Organization schema if social profiles are created
5. Add structured summaries/abstracts to content pages for AI extraction
