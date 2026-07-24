# Technical SEO Findings

## robots.txt
- **Status:** ✅ Correct
- Content: `User-agent: *` / `Allow: /` / `Sitemap: https://foodintolerancecheck.com/sitemap-index.xml`
- No blocked paths, clean configuration

## Sitemap
- **Status:** ✅ Configured via `@astrojs/sitemap`
- Will auto-generate `sitemap-index.xml` with all 23 pages on build
- `_redirects` handles `/sitemap.xml → /sitemap-index.xml` (301)

## Canonical URLs
- **Status:** ✅ Correct
- Generated via `new URL(Astro.url.pathname, Astro.site)` — absolute URLs
- Consistent with `trailingSlash: "never"` config

## URL Structure
- **Status:** ✅ Clean
- Semantic URL patterns: `/tools/{tool-name}`, `/guides/{guide-name}`, `/blog/{post-slug}`
- No query parameters, no hash fragments
- Lowercase, hyphenated slugs

## Security
- **Status:** ⚠️ Needs improvement
- HTTPS configured (domain serves over HTTPS)
- Missing: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security
- Recommendation: Add via `_headers` file or hosting provider config

## Deployment
- **Status:** ❌ Not deployed
- Domain returns 114-byte parked page with JS redirect to `/lander`
- No actual site content is being served

## OG Tags
- **Status:** ⚠️ Partially correct
- `og:type` hardcoded as `"website"` — should be `"article"` for blog/guide pages
- All other OG tags (title, description, url, image, site_name) are correct
- Twitter Card tags present with `summary_large_image`

## Font Loading
- **Status:** ⚠️ Minor optimization needed
- 5 Outfit weights loaded (300, 400, 500, 600, 700)
- Weight 300 appears unused in design
- Consider variable font or removing unused weight
