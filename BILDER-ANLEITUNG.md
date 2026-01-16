# Bilder-Anleitung fuer die Website

Diese Anleitung erklaert, welche Bilder benoetigt werden und wie sie benannt sein muessen.

## Ordner

Alle Bilder muessen in den Ordner `images/` kopiert werden.

```
httpwww.blumhardtmaler.de/
  images/
    logo.jpg
    projekt-1.jpg
    projekt-2.jpg
    projekt-3.jpg
    ... usw.
```

## Benoetigte Bilder

### 1. Logo (optional)

| Dateiname | Beschreibung |
|-----------|--------------|
| `logo.jpg` | Firmenlogo (wird fuer Google-Suche verwendet) |

**Empfehlung:** 400 x 400 Pixel, quadratisch

---

### 2. Galerie-Bilder (8 Stueck)

Diese Bilder erscheinen in der Galerie auf der Startseite.

| Dateiname | Platz in Galerie | Vorschlag |
|-----------|------------------|-----------|
| `projekt-1.jpg` | Bild 1 (oben links) | Schoenstes Projekt / Eyecatcher |
| `projekt-2.jpg` | Bild 2 | Innenraum-Arbeit |
| `projekt-3.jpg` | Bild 3 | Fassade / Aussenbereich |
| `projekt-4.jpg` | Bild 4 | Detailaufnahme |
| `projekt-5.jpg` | Bild 5 | Vorher-Nachher oder Arbeit in Aktion |
| `projekt-6.jpg` | Bild 6 | Weiteres Projekt |
| `projekt-7.jpg` | Bild 7 | Weiteres Projekt |
| `projekt-8.jpg` | Bild 8 (unten rechts) | Weiteres Projekt |

---

## Bild-Anforderungen

### Format

- **Dateiformat:** JPG (`.jpg`)
- **Andere Formate:** PNG geht auch, dann Dateiendung auf `.png` aendern und in `index.html` anpassen

### Groesse

| Typ | Empfohlene Groesse | Maximal |
|-----|-------------------|---------|
| Galerie-Bilder | 800 x 600 Pixel | 1200 x 900 Pixel |
| Logo | 400 x 400 Pixel | 800 x 800 Pixel |

### Dateigrssse

- **Optimal:** Unter 200 KB pro Bild
- **Maximum:** 500 KB pro Bild
- Groessere Dateien machen die Website langsam!

---

## Bilder verkleinern (kostenlos)

Falls die Bilder zu gross sind:

1. **Online:** https://tinypng.com - Bilder hochladen, komprimierte Version herunterladen
2. **Online:** https://squoosh.app - Im Browser Bilder verkleinern
3. **Windows:** Mit "Fotos" App oeffnen -> "..." -> "Groesse aendern"

---

## Schritt-fuer-Schritt

1. Waehle 8 gute Projektfotos aus
2. Benenne sie um in `projekt-1.jpg`, `projekt-2.jpg`, usw.
3. Verkleinere sie auf ca. 800x600 Pixel
4. Komprimiere sie mit tinypng.com
5. Kopiere sie in den `images/` Ordner
6. Optional: Fuege `logo.jpg` hinzu

---

## Testen

Nach dem Hinzufuegen der Bilder:

1. Oeffne `index.html` im Browser (Doppelklick)
2. Scrolle zur Galerie
3. Klicke auf ein Bild - es sollte gross angezeigt werden

---

## Weniger als 8 Bilder?

Falls du weniger Bilder hast, kannst du in der `index.html` die entsprechenden Galerie-Eintraege loeschen. Suche nach:

```html
<div class="gallery__item">
```

Und loesche den kompletten Block fuer jedes Bild, das du nicht brauchst.

---

## Fragen?

Bei Problemen einfach melden!
