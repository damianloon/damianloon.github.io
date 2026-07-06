# Richtlijnen voor AI-Assistenten (AGENTS.md)

Dit bestand bevat instructies en gedragsregels voor AI-codegeneratie- en beheer-assistenten die in deze repository werken.

## Git & Deployment Regels

- **Niet Automatisch Pushen:** De AI-assistent mag **nooit** zelfstandig `git push` uitvoeren naar GitHub. 
- **Werkwijze:** 
  - Wijzigingen mogen lokaal worden bewerkt en eventueel lokaal worden ge-commit (in overleg).
  - De assistent legt de wijzigingen uit en geeft de benodigde Git-commando's aan de gebruiker.
  - De gebruiker voert de `git push` handmatig uit om de controle te behouden over wat er live gaat op GitHub Pages.
