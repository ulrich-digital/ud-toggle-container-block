# UD Block: Toggle Container

Block zum Umschalten zwischen zwei Ansichten innerhalb desselben Inhaltsbereichs.
Jede Ansicht kann mit beliebigen Blöcken gefüllt werden. Der sichtbare Bereich wechselt per Klick auf die zugehörigen Schaltflächen.

---

## Funktionen

- **Zwei umschaltbare Ansichten**
  - Jede Ansicht enthält eigene Inhalte (z. B. Text, Bilder, Listen oder weitere Blöcke)
  - Standardmäßig ist die erste Ansicht aktiv (`activeView: "one"`)
  - Umschalten erfolgt über die Beschriftungen `labelOne` und `labelTwo`

- **Flexible Inhaltsstruktur**
  - Unterstützt beliebige Gutenberg-Blöcke innerhalb beider Ansichten
  - Ideal für Vorher/Nachher-Vergleiche, Preisoptionen, FAQ-Layouts oder alternative Darstellungen

- **Interaktive Frontend-Steuerung**
  - Umschaltlogik über `frontend.js`
  - Sanfte Übergänge ohne Neuladen
  - Anpassbar per CSS

- **Editor-Integration**
  - Im Editor mit Placeholder *„Toggle Container“* gekennzeichnet
  - Beschriftungen und aktive Ansicht direkt einstellbar
  - Vorschau zeigt beide Ansichten in-line im Editor

---

## Technische Details

- **Blockname:** `ud/toggle-container`
- **Render-Datei:** `includes/render.php`
- **Frontend-Script:** `src/js/frontend.js`
- **Attribute:**
  - `labelOne` *(string)* – Beschriftung der ersten Ansicht
  - `labelTwo` *(string)* – Beschriftung der zweiten Ansicht
  - `activeView` *(string)* – aktuell aktive Ansicht (`one` oder `two`)

### 🔗 Abhängigkeiten
- Keine externen UD-Plugins erforderlich
- Vollständig eigenständig nutzbar

### 🧩 Unterstützt
- Alle Standard-WordPress-Blöcke als Inhalt in beiden Ansichten
- Themes mit Full Site Editing (FSE)

---

## Installation

1. Plugin-Ordner `ud-toggle-container-block` in `wp-content/plugins/` kopieren
2. Im WordPress-Backend unter **Plugins → Installierte Plugins** aktivieren
3. Im Editor den Block **„Toggle Container“** einfügen

---

## Anforderungen

- WordPress ≥ 6.7
- PHP ≥ 7.4
- Aktiver Block-Editor (Gutenberg oder FSE-kompatibles Theme)

---

## Autor

**ulrich.digital gmbh**
[https://ulrich.digital](https://ulrich.digital)

---

## Lizenz

GPL v2 or later
[https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html)