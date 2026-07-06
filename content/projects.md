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

## Project 3: 3D-Geprinte Mini Arcade Machine
Een zelfgebouwde bartop arcade machine, ontworpen en geprint met een 3D-printer en aangedreven door een Raspberry Pi 3B met Batocera.

- **Technologieën:** 3D-printing (PLA), CAD/Slicing, Linux (Batocera OS), Emulatie, GPIO/USB interface, 2.1-kanaals audioversterking.
- **Type:** Hardware Design, System Integration & Making.

### Het Probleem
Het vinden van een compacte arcadekast met hoogwaardige controls en een authentiek 4:3 beeldscherm is lastig in de consumentenmarkt. Veel kant-en-klare kasten zijn groot, duur of maken gebruik van goedkope onderdelen en breedbeeldschermen die klassieke games vervormen.

### De Oplossing
Ik heb een complete bartop arcadekast ontworpen en gebouwd:
- **Behuizing:** Alle onderdelen (Panel A t/m L) zijn geprint in PLA met een 3D-printer en mechanisch gemonteerd met M3- en M4-bouten. De kast is voorzien van een sfeervolle, oplichtende marquee en led-strips aan de onderzijde.
- **Hardware & Besturing:** Een Raspberry Pi 3B fungeert als het rekencentrum met Batocera OS. De joystick en knoppen zijn van het premium Japanse merk Sanwa, aangesloten via een Zero Delay USB encoder.
- **Audio & Scherm:** Een 9.7 inch LG display met originele 4:3 verhouding (LP097X02) zorgt voor authentieke graphics. Het geluid wordt verzorgd door een ingebouwde AIYIMA 2.1 versterker met twee speakers en een actieve subwoofer voor krachtige bas.

### Wat ik heb geleerd
- **Mechanische Assemblage:** Slicen en printen van grote functionele 3D-onderdelen, rekening houdend met toleranties en passingen voor schroefverbindingen.
- **Systeembedrading & Power Management:** Het berekenen en splitsen van de stroomvoorziening via een dual-voeding (12V 12.5A voor algemeen stroomverbruik en 12V 3A voor de audio) met een step-down converter voor de Pi.
- **Audio-integratie:** Het configureren van een lokaal 2.1 versterkersysteem, inclusief impedantiematch en fysieke montage van een subwoofer.

