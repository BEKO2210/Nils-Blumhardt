# Konfigurations-Anleitung fuer Nils Blumhardt

Diese Anleitung erklaert alle Schritte, die noch erledigt werden muessen, damit die Website vollstaendig funktioniert.

---

## Uebersicht: Was muss noch gemacht werden?

| Nr. | Aufgabe | Wichtigkeit | Dauer |
|-----|---------|-------------|-------|
| 1 | Formspree einrichten (E-Mail-Empfang) | **PFLICHT** | 5 Min |
| 2 | Bilder hinzufuegen | **PFLICHT** | 10 Min |
| 3 | Impressum vervollstaendigen | EMPFOHLEN | 2 Min |
| 4 | GitHub Pages aktivieren | **PFLICHT** | 2 Min |

---

## 1. Formspree einrichten (Kontaktformular)

**Problem:** Das Kontaktformular sendet aktuell KEINE E-Mails!

**Loesung:** Kostenloses Formspree-Konto erstellen.

### Schritt fuer Schritt:

1. **Gehe zu:** https://formspree.io

2. **Registrieren:** Klicke "Get Started" und erstelle ein Konto
   - E-Mail: `N.Blumhardt@t-online.de` (oder andere E-Mail)
   - Passwort waehlen

3. **Neues Formular erstellen:**
   - Klicke "New Form"
   - Name: "Blumhardt Website Kontakt"
   - E-Mail: Die E-Mail-Adresse, an die Anfragen gesendet werden sollen

4. **Form-ID kopieren:**
   - Nach dem Erstellen siehst du eine URL wie:
   - `https://formspree.io/f/xabcdefg`
   - Die ID ist der Teil nach `/f/` → `xabcdefg`

5. **In der Website eintragen:**
   - Oeffne die Datei `index.html` mit einem Texteditor (z.B. Notepad)
   - Suche nach: `xyzforms`
   - Ersetze es durch deine Form-ID (z.B. `xabcdefg`)

   **Vorher:**
   ```html
   action="https://formspree.io/f/xyzforms"
   ```

   **Nachher:**
   ```html
   action="https://formspree.io/f/xabcdefg"
   ```

6. **Speichern und hochladen:**
   - Datei speichern
   - Aenderung auf GitHub hochladen (siehe Abschnitt 5)

### Testen:

1. Oeffne die Website
2. Fuell das Kontaktformular aus
3. Klicke "Nachricht senden"
4. Du solltest eine E-Mail erhalten

**Hinweis:** Beim ersten Mal musst du die E-Mail-Adresse bei Formspree bestaetigen.

---

## 2. Bilder hinzufuegen

Siehe separate Datei: **BILDER-ANLEITUNG.md**

**Kurzfassung:**
- 8 Projektbilder benoetigt: `projekt-1.jpg` bis `projekt-8.jpg`
- In den Ordner `images/` kopieren
- Format: JPG, ca. 800x600 Pixel, unter 200 KB

---

## 3. Impressum vervollstaendigen (optional)

In der Datei `impressum.html` sind zwei Stellen markiert, die du ergaenzen kannst:

### 3.1 Handwerkskammer-Nummer

Oeffne `impressum.html` und suche nach:
```
(Bitte ergaenzen Sie hier Ihre Handwerkskammer-Registrierungsnummer, falls vorhanden.)
```

**Wenn du eine HWK-Nummer hast:**
Ersetze den Text durch deine Nummer, z.B.:
```
Betriebsnummer: 12345
```

**Wenn du keine hast:**
Loesche die ganze Zeile oder lasse den Text so.

### 3.2 Umsatzsteuer-ID

Suche nach:
```
(Bitte ergaenzen Sie hier Ihre USt-IdNr., falls vorhanden.)
```

**Wenn du eine USt-IdNr. hast:**
Ersetze den Text durch deine Nummer, z.B.:
```
DE123456789
```

**Wenn du keine hast (Kleinunternehmer):**
Ersetze den Text durch:
```
Kleinunternehmer gemaess § 19 UStG - keine Umsatzsteuer-ID vorhanden.
```

---

## 4. GitHub Pages aktivieren

1. **Gehe zu:** https://github.com/BEKO2210/Nils-Blumhardt/settings/pages

2. **Einstellungen:**
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`

3. **Klicke "Save"**

4. **Warte 1-2 Minuten**

5. **Website ist online unter:**
   ```
   https://beko2210.github.io/Nils-Blumhardt/
   ```

---

## 5. Aenderungen auf GitHub hochladen

Wenn du Dateien geaendert hast (z.B. Formspree-ID, Bilder hinzugefuegt), muessen die Aenderungen hochgeladen werden.

### Option A: Ueber GitHub.com (einfach)

1. Gehe zu: https://github.com/BEKO2210/Nils-Blumhardt
2. Klicke auf die Datei, die du aendern willst
3. Klicke den Stift (Edit) oben rechts
4. Mache deine Aenderung
5. Klicke "Commit changes"
6. Fertig - Website wird automatisch aktualisiert

### Option B: Dateien hochladen (fuer Bilder)

1. Gehe zu: https://github.com/BEKO2210/Nils-Blumhardt
2. Klicke auf den `images` Ordner
3. Klicke "Add file" → "Upload files"
4. Ziehe deine Bilder in das Fenster
5. Klicke "Commit changes"
6. Fertig!

---

## 6. Eigene Domain verbinden (optional, spaeter)

Falls du spaeter die Domain `blumhardtmaler.de` kaufst:

### Bei deinem Domain-Anbieter:

Erstelle diese DNS-Eintraege:

| Typ | Name | Wert |
|-----|------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | beko2210.github.io |

### Bei GitHub:

1. Gehe zu: https://github.com/BEKO2210/Nils-Blumhardt/settings/pages
2. Unter "Custom domain": `www.blumhardtmaler.de` eintragen
3. "Enforce HTTPS" aktivieren

### Dateien anpassen:

Nach Domain-Verbindung diese Dateien aktualisieren:
- `sitemap.xml` - URLs anpassen
- `robots.txt` - Sitemap-URL anpassen
- `index.html` - canonical und og:url anpassen

---

## Checkliste zum Abhaken

- [ ] Formspree-Konto erstellt
- [ ] Form-ID in index.html eingetragen
- [ ] Kontaktformular getestet (Test-E-Mail erhalten)
- [ ] 8 Projektbilder hinzugefuegt
- [ ] Impressum geprueft (HWK-Nr, USt-ID)
- [ ] GitHub Pages aktiviert
- [ ] Website aufgerufen und getestet

---

## Hilfe benoetigt?

Bei Fragen oder Problemen melde dich!
