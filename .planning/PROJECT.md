# Blumhardt Maler Website

## What This Is

Komplette Neuentwicklung der Website für "Nils Blumhardt Maler- und Lackierarbeiten" — ein Malerbetrieb in Freiberg am Neckar. Mobile-First One-Pager für Privat- und Geschäftskunden im Raum Ludwigsburg/Stuttgart mit Fokus auf lokale Sichtbarkeit und einfache Kontaktaufnahme.

## Core Value

**Kunden sollen in unter 30 Sekunden verstehen, was der Betrieb macht, und sofort Kontakt aufnehmen können.**

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] One-Pager mit Scroll-Sektionen (Hero, Leistungen, Galerie, Bewertungen, Kontakt)
- [ ] Mobile-First responsive Design mit blauer Akzentfarbe
- [ ] Anfrage-Formular via Formspree mit E-Mail-Weiterleitung an N.Blumhardt@t-online.de
- [ ] WhatsApp-Button für Direktkontakt (0160 5972245)
- [ ] Statisches Google-Bewertungen Widget (5.0 Sterne, 4 Bewertungen)
- [ ] Projekt-Galerie für 10-25 Referenzfotos mit Lightbox
- [ ] SEO-Optimierung für lokale Suche (Freiberg, Ludwigsburg, Stuttgart)
- [ ] Schnelle Ladezeiten (<3s auf Mobile)
- [ ] Integration des bestehenden Firmenlogos
- [ ] Impressum und Datenschutz (DSGVO-konform)

### Out of Scope

- Kalender-Buchungssystem — Anfrage-Formular reicht, Termine werden telefonisch vereinbart
- Live Google Reviews API — zu komplex für statisches Hosting, manuelles Update genügt
- Mehrsprachigkeit — Zielgruppe ist ausschließlich deutschsprachig
- CMS/Backend — statische Seite, Änderungen direkt im Code
- Blog/News-Bereich — kein Content-Marketing geplant
- Online-Shop — keine Produkte zu verkaufen

## Context

**Geschäftsdaten:**
- Inhaber: Nils Blumhardt
- Adresse: Westenfeldstraße 59, 71691 Freiberg am Neckar
- Telefon: 07141 72496
- Mobil: 0160 5972245
- E-Mail: N.Blumhardt@t-online.de
- Öffnungszeiten: Mo-Do 07:00-17:00, Fr 07:00-13:00

**Dienstleistungen:**
- Malerarbeiten Innen & Außen
- Fassadenanstrich
- Tapezieren aller Wandbeläge
- Bodenbelagsarbeiten
- Dekorative Innenputze (Struktur-, Glimmer-, Modellierputze)
- Kreative Oberflächengestaltung (Wischtechnik, Spachteltechnik)

**Bestehende Assets:**
- Domain und Hosting vorhanden (blumhardtmaler.de)
- Firmenlogo vorhanden
- Alte Website mit Texten und Bildern zur Übernahme

**Zielgruppe:**
- Privatkunden (Renovierung, Umzug, Neubau)
- Geschäftskunden (Büros, Gewerbeflächen)
- Region: Freiberg am Neckar, Ludwigsburg, Stuttgart und Umgebung

## Constraints

- **Tech Stack**: Statisches HTML/CSS/JavaScript — muss auf einfachem Webhosting laufen (kein Node.js)
- **Formular**: Formspree oder Netlify Forms für E-Mail-Versand ohne eigenen Server
- **Performance**: Lighthouse Score >90 auf Mobile
- **Browser**: Moderne Browser (Chrome, Firefox, Safari, Edge) — kein IE11
- **Hosting**: Bestehendes Hosting nutzen (vermutlich klassischer Webspace)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| One-Pager statt Multi-Page | Einfacher für Nutzer, alles auf einen Blick, besser für Mobile | — Pending |
| Statisches HTML statt Next.js | Einfaches Hosting, keine Build-Pipeline, schnellere Ladezeiten | — Pending |
| Formspree für Formulare | Kostenlos/günstig, kein Backend nötig, zuverlässig | — Pending |
| Statische Google Reviews | Kein API-Key nötig, keine laufenden Kosten, einfache Wartung | — Pending |
| Blaue Akzentfarbe | Modern-frischer Look, Professionalität und Vertrauen | — Pending |

---
*Last updated: 2026-01-16 after initialization*
