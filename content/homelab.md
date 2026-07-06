# Mijn Homelab

Dit HomeLab is een uitgebreide test- en productieomgeving waarin verschillende IT-disciplines samenkomen, waaronder Linux-systeembeheer, containerisatie, netwerken, home automation en self-hosting. Het dient als de ideale omgeving om nieuwe technologieën te leren, configuraties te testen en praktijkervaring op te doen voor mijn opleiding en loopbaan.

De volledige fysieke infrastructuur is compact en netjes geïnstalleerd in de **meterkast**, waarbij gebruik is gemaakt van op maat gemaakte, zelfontworpen en **3D-geprinte brackets** om alle apparatuur georganiseerd te monteren.

---

## Hardware & Infrastructuur

### Netwerk & Routing
- **Centrale Router:** Standaard KPN Router die de internetverbinding (WAN) en DHCP/routing voor het lokale netwerk verzorgt.
- **Subnet:** Een enkel, vlak netwerk (`192.168.2.0/24`). Alle vaste servers zijn voorzien van statische IP-adressen binnen deze range.
- **Bekabeling:** Vaste Gigabit Ethernet-verbindingen vanuit de KPN Router naar zowel de Raspberry Pi 5 als de Proxmox-server in de meterkast.

### Centrale Server (Raspberry Pi 5)
De Raspberry Pi 5 draait 24/7 en host de primaire productieve services en data-opslag.
- **Compute:** Raspberry Pi 5 (16 GB RAM) - gemonteerd met een 3D-geprinte bracket.
- **Opslag:**
  - **Systeem:** 32 GB microSD-kaart (OS).
  - **Data & Media:** 2 TB SSD aangesloten via USB voor media, configuraties en Docker-volumes.
- **Smart Home Interface:** Een dedicated **Sonoff Zigbee USB-antenne** is aangesloten op de Pi om direct te communiceren met slimme sensoren en apparaten in huis.

### Virtualisatie Node (Proxmox VE)
Voor testdoeleinden en het draaien van management- en automatiseringsservices gebruik ik een fysieke x86-server naast de Pi.
- **Compute:** HP Thin Client T620 (16 GB RAM) - gemonteerd in de meterkast met een op maat gemaakte, 3D-geprinte bracket.
- **Opslag:** 1 TB Externe Harde Schijf voor VM/LXC-opslag, ISO's en backups.
- **Hypervisor:** Proxmox VE voor het beheren en draaien van Virtuele Machines (VM's) en Linux Containers (LXC).

---

## Besturingssystemen & Beheer

- **OS (Pi 5):** Ubuntu Server (headless, 64-bit).
- **OS (HP Thin Client):** Proxmox VE (Debian-based hypervisor).
- **Beheer:** Volledig CLI-gebaseerd beheer via beveiligde SSH-verbindingen vanaf werkstations binnen het netwerk.
- **Bestandssystemen & Shares:** Een SambaNAS-configuratie op de Raspberry Pi 5 deelt mappen (media & opslag) via het SMB-protocol binnen het `192.168.2.0/24` netwerk.

---

## Serviceverdeling & Resilience

Om hoge beschikbaarheid (high availability) te garanderen en netwerkblindheid te voorkomen, is het lab ingericht met redundante en cross-monitoring componenten:
- **Redundant DNS (Dual Pi-hole):** De KPN router is geconfigureerd met twee DNS-servers. De Pi-hole op de Raspberry Pi 5 dient als primaire DNS, en een tweede onafhankelijke Pi-hole instantie op Proxmox dient als automatische back-up DNS. Dit voorkomt internetuitval bij onderhoud aan één van de nodes.
- **Cross-Monitoring (Dual Uptime Kuma):** Beide servers bewaken elkaar. De Uptime Kuma instantie op de Pi test de connectiviteit naar Proxmox, en de Uptime Kuma instantie op Proxmox test de connectiviteit terug naar de Pi.

### Services op de Raspberry Pi 5 (Docker Stack)
Gemanaged via **Portainer** en Docker Compose, direct gekoppeld aan de 2 TB SSD:
* **Home Assistant:** Huisautomatisering gekoppeld aan de Sonoff Zigbee USB-antenne.
* **Plex & Jellyfin:** Dubbele media streaming servers voor optimale compatibiliteit met diverse afspeelapparaten.
* **Samba:** SMB netwerkshares (SambaNAS) voor centrale opslag.
* **Immich:** Zelfgehoste, privacy-vriendelijke foto- en videobeheeroplossing (alternatief voor Google Photos).
* **BookStack:** Centrale documentatie-wiki voor het homelab.
* **Pi-hole (Primair):** Netwerkbrede ad-blocker en primaire DNS-resolutie.
* **EZbookkeeping:** Webapplicatie voor het bijhouden van persoonlijke financiën.
* **qBittorrent & SabNZB:** Download clients voor respectievelijk torrents en usenet.
* **Tailscale:** Veilige VPN-container voor remote access.
* **Uptime Kuma (Pi-node):** Voor het monitoren van de Proxmox node en netwerkverbindingen.

### Services op Proxmox VE (HP Thin Client LXC/VM's)
* **Nginx Proxy Manager:** Centrale reverse proxy met SSL-certificaten voor veilige interne en externe routering naar alle services.
* **Pi-hole (Secundair):** Backup DNS-server die bijspringt als de Pi 5 offline is.
* **Sonarr & Radarr:** Automatische indexering en beheer van series en films.
* **Prowlarr:** Indexer-manager voor het synchroniseren van torrent- en usenet-trackers naar Sonarr en Radarr.
* **Overseerr:** Gebruiksvriendelijke interface voor het aanvragen van nieuwe media door gebruikers in het netwerk.
* **Speedtest Tracker:** Periodieke internet-snelheidstesten om de netwerkkwaliteit van de KPN-lijn te loggen.
* **Uptime Kuma (Proxmox-node):** Voor het monitoren van de Pi 5 node en de bijbehorende Docker containers.

---

## Smart Home & Lokale Spraakbesturing

Ik maak intensief gebruik van **Home Assistant** voor de automatisering van mijn woning. Het systeem communiceert met slimme apparaten via de Zigbee-antenne en is voorzien van een mobiel-geoptimaliseerd dashboard dat handmatig is ontworpen via YAML-configuraties.

### Lokale Spraakassistent (Custom Hardware & Software)
Een volledig lokale, privacy-vriendelijke spraakassistent die via Wi-Fi verbinding maakt met het netwerk.

#### Hardware (Zelfbouw)
- **Microfoon:** ReSpeaker Lite 2-Mic Array (ESP32-S3) voor goede spraakherkenning op afstand.
- **Audio:** 2 inch 3W speaker aangesloten op de mic-array.
- **Voeding:** USB-C PD trigger board.
- **Behuizing:** Een op maat ontworpen en met een 3D-printer gemaakte behuizing, voorzien van akoestische demping voor optimale geluidskwaliteit.

#### Software & Integratie
De spraakassistent praat met Home Assistant via de volgende protocollen:
- **ESPHome:** Voor het flashen en beheren van de firmware op de ESP32-S3.
- **Wyoming Protocol:** Voor de communicatie tussen ESPHome en de spraak-engines op de Pi.
- **Whisper (lokaal):** Spraak-naar-tekst (Speech-to-Text) verwerking direct op eigen infrastructuur.
- **Piper (lokaal):** Tekst-naar-spraak (Text-to-Speech) verwerking.

---

## Documentatie & Back-upstrategie

### Back-ups & Disaster Recovery
- **Docker & Configs Back-up:** **Duplicati** maakt automatisch gecodeerde back-ups van configuraties en belangrijke volumes naar een **Oracle Cloud Server**.
- **Proxmox Back-up:** Virtuele machines en LXC-containers op de HP Thin Client T620 worden geback-upt met snapshots naar de cloud via de **Tuxis Cloud Proxmox Backup Server (PBS)**.

---

## Opgedane Netwerkkennis & Vaardigheden

Door het ontwerpen, bouwen en onderhouden van dit lab heb ik diepgaande praktijkervaring opgedaan met:
- **Linux Serverbeheer & Security:** SSH key-authenticatie, firewalls, machtigingen en pakketbeheer.
- **Docker & Networking:** Container-to-container networking, poort-mapping en volumes.
- **Netwerkprotocollen:** SMB/CIFS, DNS, DHCP, static routing en VPN's (Tailscale).
- **Automatisering & Firmware:** ESPHome, YAML en hardware-integratie.
- **Back-up & Opslagbeheer:** Duplicati, PBS, opslag-redundantie en cloud-synchronisatie.
