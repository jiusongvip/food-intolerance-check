# Technical SEO Findings

## robots.txt
- **Status:** ✅ Correct
- Content: `User-agent: *` / `Allow: /` / `Sitemap: https://foodintolerancecheck.com/sitemap-index.xml`
- No blocked paths, clean configuration

## Sitemap
- **Status:** ✅ Configured via `@astrojs/sitemap`
- Auto-generates `sitemap-index.xml` with all 23 pages on build
- `_redirects` handles `/sitemap.xml → /sitemap-index.xml` (301)

## Canonical URLs
- **Status:** ✅ Correct
- Generated via `new URL(Astro.url.pathname, Astro.site)` — absolute URLs
- Consistent with `trailingSlash: "never"` config

## URL Structure
- **Status:** ✅ Clean
- Semantic URL patterns: `/tools/{tool-name}`, `/guides/{guide-name}`, `/blog/{post-slug}`
- No query parameters or hash fragments
- Lowercase, hyphenated slugs

## Security
- **Status:** ⚠️ Low priority
- HTTPS configured
- Missing: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security
- Add via `_headers` file or hosting provider config post-deployment

## Deployment
- **Status:** ❌ Not deployed
- Domain returns 114-byte parked page with JS redirect to `/lander`
- No actual site content served

## Meta Descriptions
- **Status:** ⚠️ Needs trimming
- 10 of 24 pages exceed 160 chars (range: 161-178)
- /terms (113 chars) below 120 minimum
- Fix: trim to ≤160, expand /terms to ≥120

## Breadcrumbs
- **Status:** ⚠️ Partial
- Present on 22/24 pages
- Missing on: /privacy, /terms
- Effect: missing BreadcrumbList schema on those 2 pages
