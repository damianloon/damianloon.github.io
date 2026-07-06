# Richtlijnen voor AI-Assistenten (AGENTS.md)

Dit bestand bevat instructies en gedragsregels voor AI-codegeneratie- en beheer-assistenten die in deze repository werken.

## Git & Deployment Regels

- **Niet Automatisch Pushen:** De AI-assistent mag **nooit** zelfstandig `git push` uitvoeren naar GitHub. 
- **Werkwijze:** 
  - Wijzigingen mogen lokaal worden bewerkt en eventueel lokaal worden ge-commit (in overleg).
  - De assistent legt de wijzigingen uit en geeft de benodigde Git-commando's aan de gebruiker.
  - De gebruiker voert de `git push` handmatig uit om de controle te behouden over wat er live gaat op GitHub Pages.

## Design & Huisstijl Regels

De website maakt gebruik van een vastgesteld kleurenpalet. Wijk hier niet van af bij het stylen van elementen:
- **Hoofdkleuren (Main Colors):**
  - Goud/Brons: `#BEA36B` (gebruiken voor primaire accenten, knoppen, geselecteerde staten en actieve elementen)
  - Grijs: `#808080` (gebruiken voor secundaire teksten, borders en gedempte details)
- **Secundaire kleur:**
  - Diep marineblauw: `#11213D` (gebruiken voor de achtergrond van kaarten, panelen en containers)
- **Gradiënt (indien nodig):**
  - Van Koningsblauw naar Diep marineblauw: van `#1863F6` naar `#11213D` (voor hover-effecten of achtergrondverlopen)

