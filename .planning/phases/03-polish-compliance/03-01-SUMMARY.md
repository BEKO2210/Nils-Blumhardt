---
phase: 03-polish-compliance
plan: 01
subsystem: seo-legal
tags: [seo, dsgvo, impressum, datenschutz, schema-org, local-business, sitemap]

dependency-graph:
  requires:
    - 01-foundation (base HTML structure)
    - 02-features (contact form, WhatsApp)
  provides:
    - DSGVO-compliant legal pages (Impressum, Datenschutz)
    - Schema.org LocalBusiness structured data
    - SEO meta tags (Open Graph, canonical, geo)
    - robots.txt and sitemap.xml for search engines
  affects:
    - Search engine visibility for local queries
    - Legal compliance for German websites

tech-stack:
  added: []
  patterns:
    - Schema.org LocalBusiness JSON-LD
    - Open Graph meta tags
    - XML sitemap standard

key-files:
  created:
    - impressum.html (DSGVO-compliant legal notice)
    - datenschutz.html (DSGVO-compliant privacy policy)
    - robots.txt (crawler instructions)
    - sitemap.xml (page index for search engines)
  modified:
    - index.html (SEO meta tags, schema.org, footer links)
    - css/styles.css (legal page styling, footer legal links)

decisions:
  - id: 03-01-D1
    decision: Use HTML entity encoding for umlauts in legal pages
    reason: Ensure cross-platform compatibility without UTF-8 issues

metrics:
  duration: 4 min
  completed: 2026-01-16
---

# Phase 03 Plan 01: SEO & Compliance Summary

**One-liner:** DSGVO-compliant Impressum/Datenschutz pages with schema.org LocalBusiness markup and sitemap for local SEO targeting Freiberg/Ludwigsburg/Stuttgart.

## What Was Built

### Legal Pages (DSGVO Compliance)

**impressum.html:**
- Complete TMG-compliant legal notice
- Business contact information (address, phone, email)
- Berufsbezeichnung: Malermeister
- Placeholder for HWK registration (user must fill in)
- Placeholder for Umsatzsteuer-ID (user must fill in if applicable)
- EU-Streitschlichtungsplattform link
- Standard disclaimers (Haftung fuer Inhalte/Links, Urheberrecht)

**datenschutz.html:**
- Verantwortlicher section with full contact details
- Datenerhebung und Server-Log-Files disclosure
- Kontaktformular section with Formspree data handling notice
- Cookie policy (technisch notwendige only - no tracking)
- SSL encryption notice
- WhatsApp contact privacy notice
- Full Betroffenenrechte (DSGVO Art. 15-21)
- Complaint rights with Baden-Wuerttemberg authority

### SEO Enhancements

**Meta Tags Added to index.html:**
- `<meta name="robots" content="index, follow">`
- `<link rel="canonical" href="https://www.blumhardtmaler.de/">`
- Open Graph tags (og:title, og:description, og:type, og:url, og:locale, og:site_name)
- Geo meta tags (geo.region: DE-BW, geo.placename: Freiberg am Neckar)

**Schema.org LocalBusiness JSON-LD:**
- Complete business identity (name, description, URL, telephone, email)
- PostalAddress with German formatting
- GeoCoordinates for map integration
- OpeningHoursSpecification (Mo-Do 07:00-17:00, Fr 07:00-13:00)
- AggregateRating (5.0 from 4 reviews)
- AreaServed (Freiberg am Neckar, Ludwigsburg, Stuttgart)
- OfferCatalog with all 6 services

### Search Engine Files

**robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://www.blumhardtmaler.de/sitemap.xml
```

**sitemap.xml:**
- 3 URLs (/, /impressum.html, /datenschutz.html)
- Appropriate priority and changefreq values
- lastmod dates

### Footer Links

- Added `footer__legal` nav to index.html footer
- Links to Impressum and Datenschutz
- Styled with subtle appearance below copyright
- Proper aria-label for accessibility

## Technical Details

### File Structure

```
/
  index.html (enhanced with SEO + footer links)
  impressum.html (new)
  datenschutz.html (new)
  robots.txt (new)
  sitemap.xml (new)
  css/
    styles.css (added legal page + footer legal styles)
```

### CSS Additions

```css
/* Legal page container and typography */
.legal { ... }
.legal__title { ... }
.legal__content { ... }
.legal__address { ... }

/* Simple nav for legal pages */
.header__nav--simple { ... }

/* Footer legal links */
.footer__legal { ... }
```

## Commits

| Hash | Type | Description |
|------|------|-------------|
| de54cf2 | feat | Create DSGVO-compliant Impressum page |
| 61145e4 | feat | Create DSGVO-compliant Datenschutz page |
| 87f942c | feat | Add comprehensive SEO meta tags and schema.org LocalBusiness |
| 4c1da05 | feat | Create robots.txt and sitemap.xml |
| 64fe48d | feat | Add footer links to legal pages |

## Deviations from Plan

None - plan executed exactly as written.

## Decisions Made

| ID | Decision | Reason |
|----|----------|--------|
| 03-01-D1 | Use HTML entity encoding for umlauts (ae, oe, ue, ss) | Cross-platform compatibility, no dependency on UTF-8 handling |

## Success Criteria

- [x] impressum.html exists and renders correctly
- [x] datenschutz.html exists and renders correctly
- [x] index.html has Open Graph tags
- [x] index.html has schema.org JSON-LD
- [x] robots.txt exists in project root
- [x] sitemap.xml exists in project root
- [x] Footer links to Impressum and Datenschutz work
- [x] All pages maintain consistent styling

## User Action Required

1. **Impressum:** Fill in Handwerkskammer registration number if applicable
2. **Impressum:** Fill in Umsatzsteuer-ID if applicable
3. **Domain:** Verify URLs use correct domain (currently https://www.blumhardtmaler.de/)

## Next Phase Readiness

Phase 03-polish-compliance complete.

**Project Status:** All 3 phases complete. Website ready for deployment.

Remaining user tasks before go-live:
- Replace Formspree endpoint placeholder (xyzforms) with actual ID
- Update _next redirect URL to match actual domain
- Add project images to images/ directory for gallery
- Complete Impressum placeholders (HWK, USt-IdNr if applicable)
