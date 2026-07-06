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

