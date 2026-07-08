# Richtlijnen voor AI-Assistenten (AGENTS.md)

Dit bestand bevat instructies en gedragsregels voor AI-codegeneratie- en beheer-assistenten die in deze repository werken.

## Git & Deployment Regels

- **Niet Automatisch Committen of Pushen:** De AI-assistent mag **nooit** zelfstandig `git commit` of `git push` uitvoeren.
- **Werkwijze:** 
  - De assistent brengt wijzigingen lokaal aan in de bestanden en legt deze uit in het chatvenster.
  - De assistent geeft de exacte Git-commando's (`git add`, `git commit`, `git push`) aan de gebruiker.
  - De gebruiker voert alle Git-commando's handmatig uit om de volledige controle te behouden over de geschiedenis en deployment.

## Design & Huisstijl Regels

De website maakt gebruik van een vastgesteld kleurenpalet. Wijk hier niet van af bij het stylen van elementen:
- **Hoofdkleuren (Main Colors):**
  - Goud/Brons: `#BEA36B` (gebruiken voor primaire accenten, knoppen, geselecteerde staten en actieve elementen)
  - Grijs: `#808080` (gebruiken voor secundaire teksten, borders en gedempte details)
- **Secundaire kleur:**
  - Diep marineblauw: `#11213D` (gebruiken voor de achtergrond van kaarten, panelen en containers)
- **Gradiënt (indien nodig):**
  - Van Koningsblauw naar Diep marineblauw: van `#1863F6` naar `#11213D` (voor hover-effecten of achtergrondverlopen)

## Meertaligheid (i18n) Regels

De website ondersteunt drie talen (Nederlands, Engels, Duits) via een client-side i18n manager (`translations.js` en `index.js`).
- **Geen hardcoded teksten**: Voeg **nooit** hardcoded, statische teksten toe aan de HTML-bestanden of Javascript-bestanden.
- **Vertaalsleutels**: Alle nieuwe teksten moeten worden geregistreerd in `translations.js` onder alle drie de talen (`nl`, `en`, `de`).
- **HTML Attributen**: Gebruik in de HTML het attribuut `data-i18n="sleutelnaam"` om elementen te markeren voor vertaling, met de Nederlandse vertaling als standaard fallback-tekst tussen de tags.

## Scan- en Vertaalprocedure voor AI-Assistenten

Wanneer een gebruiker vraagt om de website te scannen op missende vertalingen of nieuwe teksten toe te voegen, moet de AI-assistent de volgende stappen uitvoeren:

1. **HTML scannen op missende vertalingen:**
   - Scan `index.html` en `portfolio.html` op tekstblokken die direct in tags staan (zoals `<h1>`, `<p>`, `<span>`, `<button>`, `<li>`) en die **geen** `data-i18n` attribuut hebben.
   
2. **Attributen toevoegen:**
   - Bedenk een logische, semantische sleutelnaam in snake_case (bijv. `project_arcade_subheading`).
   - Voeg het attribuut `data-i18n="sleutelnaam"` toe aan de tag. Laat de originele Nederlandse tekst staan als fallback tussen de tags.

3. **Vertaalsleutels registreren in translations.js:**
   - Open `translations.js`.
   - Voeg de sleutel toe onder de sectie `ui` in elk van de drie talen:
     - `nl` (Nederlands - origineel)
     - `en` (Engels - vertaald)
     - `de` (Duits - vertaald)
   - **Belangrijk:** Zorg ervoor dat alle dubbele aanhalingstekens (`"`) binnen vertaalde teksten correct worden ontsnapt als `\"` (bijvoorbeeld `9.7\" scherm` of `3\" subwoofer`) om JavaScript-syntaxfouten te voorkomen.

4. **Syntactische controle uitvoeren:**
   - Na het bewerken van `translations.js` of `index.js`, voer **altijd** een syntax-controle uit in de terminal:
     ```powershell
     node -c translations.js
     node -c index.js
     ```
     Als deze commando's zonder fouten slagen, is de syntax correct en kan de website veilig worden geladen.
