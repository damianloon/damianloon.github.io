# Projecten & Project Portfolio

Dit overzicht toont specifieke projecten binnen mijn HomeLab waarin ik theorie en praktijk heb gecombineerd. Elk project is gestructureerd om de probleemstelling, de gekozen oplossing en de belangrijkste leermomenten helder in kaart te brengen.

---

## Project 1: Lokale Privacy-Vriendelijke Spraakassistent (Zelfbouw)
Een volledig lokaal draaiende spraakassistent die geïntegreerd is met Home Assistant, zonder afhankelijkheid van externe clouddiensten zoals Google Assistant of Amazon Alexa.

- **Technologieën:** ESPHome, Home Assistant, Wyoming Protocol, Whisper (STT), Piper (TTS), ESP32-S3.
- **Type:** IoT, Smart Home, Embedded Hardware & Voice AI.

### Het Probleem
Bestaande spraakassistenten (zoals Google Home of Alexa) sturen audiogegevens naar externe servers in de cloud. Dit brengt privacyrisico's met zich mee, is afhankelijk van een actieve internetverbinding, en biedt beperkte mogelijkheden voor diepe, lokale integratie met aangepaste hardware en sensoren binnen de woning.

### De Oplossing
Ik heb een fysieke spraakassistent ontworpen en gebouwd op basis van een **ReSpeaker Lite 2-Mic Array (ESP32-S3)** en een **2 inch 3W speaker**. 
- **Hardware:** De componenten zijn ingebouwd in een zelfontworpen en met een 3D-printer gemaakte behuizing, uitgerust met interne akoestische demping om echo's en trillingen van de speaker op de microfoons te minimaliseren.
- **Software:** De firmware is geschreven en geflashed met **ESPHome**. De communicatie met Home Assistant verloopt lokaal via het **Wyoming-protocol**. Op de achtergrond draaien **Whisper** (voor lokale Speech-to-Text) en **Piper** (voor lokale Text-to-Speech) als microservices.

### Wat ik heb geleerd
- **Signaalverwerking:** Het belang van akoestische demping en fysieke scheiding tussen microfoon en speaker om feedback-loops te voorkomen.
- **Microcontrollers & Firmware:** Configureren en troubleshooten van ESP32-S3 modules via ESPHome en YAML.
- **Lokale AI Pipelines:** Het deployen en optimaliseren van spraakmodellen (Whisper/Piper) op eigen infrastructuur, inclusief latency-beheer.

---

## Project 2: Geautomatiseerde Media Pipeline & SambaNAS
Een gecentraliseerde netwerkopslag (NAS) en geautomatiseerde download- en mediapipeline draaiend op een energiezuinige Raspberry Pi 5.

- **Technologieën:** Docker, Docker Compose, Linux CLI, Samba (SMB), Plex, Sonarr, Radarr, VPN-routing.
- **Type:** Systeembeheer, Storage & Container Networking.

### Het Probleem
Het handmatig downloaden, hernoemen, sorteren en streamen van media (films/series) naar verschillende apparaten in huis is tijdrovend. Daarnaast is het downloaden via openbare verbindingen onveilig en vereist het opslaan van deze data een centrale, altijd beschikbare opslaglocatie (NAS) die via het lokale netwerk toegankelijk is.

### De Oplossing
Ik heb een gecentraliseerde en gedistribueerde media-infrastructuur opgezet, verdeeld over twee fysieke nodes:
- **Raspberry Pi 5 (Storage & Clients):** Hierop draait de data-opslag. De 2 TB SSD is via Samba (SMB) gedeeld met het netwerk. Hierop draaien tevens de streaming clients (**Plex** en **Jellyfin**) en de zware downloaders (**qBittorrent** achter een VPN-container en **SabNZB**).
- **Proxmox VE / HP Thin Client (Automatisering):** Hierop draait de management- en automatiseringsstack: **Sonarr**, **Radarr**, **Prowlarr** en **Overseerr**. 
- **Integratie:** De automatiseringsservices op Proxmox communiceren via API-koppelingen direct met de downloaders en mediaservers op de Raspberry Pi 5. Zodra Sonarr/Radarr een download opstarten op de Pi, bewaken ze de voortgang en instrueren ze de Pi om het bestand na voltooiing te verplaatsen naar de juiste SambaNAS-map.

### Wat ik heb geleerd
- **Multi-Node Automation:** Het configureren van API-communicatie en netwerkpaden tussen verschillende fysieke servers en virtualisatie-omgevingen.
- **Container Networking:** Het routeren van containerverkeer door een VPN-container met een actieve kill-switch.
- **Opslag & Rechtenbeheer:** Het mounten en beheren van SMB/NFS-shares over verschillende Linux VM's/containers met correcte PUID/PGID-rechten.

---

## Project 3: Gecentraliseerde Back-up & Cloud Disaster Recovery
Een enterprise-achtige back-uparchitectuur die ervoor zorgt dat bij totale hardware-uitval of data-corruptie alle systemen binnen korte tijd volledig hersteld kunnen worden.

- **Technologieën:** Proxmox Backup Server (PBS), Duplicati, Linux Administration, Cloud Storage (Oracle Cloud, Tuxis PBS).
- **Type:** Backup, Security & Infrastructure Integrity.

### Het Probleem
Een homelab is onderhevig aan experimenten, stroomstoringen en mogelijke hardwaredefecten (zoals een falende SSD of microSD-kaart). Zonder een gestructureerde en geautomatiseerde back-upstrategie riskeren configuraties, databases van Home Assistant en BookStack-documentatie permanent verloren te gaan, wat leidt tot uren aan herstelwerk.

### De Oplossing
Ik heb een back-upstrategie opgezet die de 3-2-1 regel volgt (3 kopieën, 2 verschillende media, 1 offsite locatie):
- **Duplicati op Raspberry Pi:** Maakt dagelijks een gecomprimeerde, gecodeerde back-up van kritieke Docker-volumes en configuratiebestanden en uploadt deze direct naar een **Oracle Cloud Server**.
- **Proxmox Backup Server (PBS):** Voor mijn Proxmox virtualisatie-node gebruik ik de **Tuxis Cloud PBS**. Hiermee worden incrementele snapshots van complete VM's en LXC-containers direct naar de cloud geschreven. Door de deduplicatie van PBS neemt dit minimale bandbreedte en opslag in beslag.

### Wat ik heb geleerd
- **Disaster Recovery:** Het belang van encryptiesleutels extern bewaren; een gecodeerde back-up is waardeloos als de sleutel lokaal op de gecrashte server stond.
- **PBS-architectuur:** De voordelen van incrementele back-ups op blokniveau en deduplicatietechnieken.
- **Cloud-integratie:** Veilig communiceren met cloud-endpoints via API's en SSH-tunnels.
