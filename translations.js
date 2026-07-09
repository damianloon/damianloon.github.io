// translations.js - Language dictionary for NL, EN, and DE
const translations = {
    nl: {
        ui: {
            maintenance_title: "Damian van Loon | In Onderhoud",
            maintenance_desc: "Website van Damian van Loon is momenteel in onderhoud.",
            maintenance_mode: "Onderhoudsmodus",
            maintenance_subtitle: "Deze website is tijdelijk onbeschikbaar. Voor dringende vragen kun je direct contact opnemen via onderstaande knoppen.",
            linkedin_btn: "Zie LinkedIn",
            email_btn: "Stuur een E-mail",
            portfolio_title: "Damian van Loon | ICT System Engineer & Homelab Portfolio",
            portfolio_meta_desc: "Portfolio en Homelab-infrastructuur van Damian van Loon. Systeembeheer, netwerken, Docker en smart home automatisering.",
            nav_infrastructure: "Infrastructuur",
            nav_projects: "Projecten",
            nav_experience: "CV & Ervaring",
            nav_contact: "Contact",
            hero_badge: "ICT System Engineer in Opleiding (Mbo 4)",
            hero_subtitle: "Helpdeskmedewerker en IT-engineer in wording met een passie voor Linux, Docker, netwerken en smart home automatisering. Bouwt en beheert een homelab om enterprise-technologieÃ«n in de praktijk te testen.",
            hero_location: "Ridderkerk, NL",
            hero_job: "Helpdeskmedewerker @ Nedsoft B.V.",
            hero_school: "ROC Midden Nederland",
            download_cv: "Download CV (PDF)",
            net_diagram_title: "Netwerk Architectuur",
            net_diagram_subtitle: "Klik op een element in het schema om de details en actieve services op dat apparaat te bekijken.",
            details_title: "Infrastructuur Details",
            details_empty_title: "Geen element geselecteerd",
            details_empty_desc: "Klik op een van de servers of netwerkcomponenten in de tekening om specificaties, IP-adressen en draaiende services te zien.",
            details_active_services: "Actieve Services",
            details_description_title: "Beschrijving & Werking",
            projects_title: "Projecten",
            projects_subtitle: "Een overzicht van concrete systemen en infrastructuren die ik zelfstandig heb gebouwd en onderhouden.",
            project_view_net: "Bekijk Netwerktekening",
            project_view_steps: "Bekijk Bouwstappen",
            project_homelab_desc: "Een geavanceerde en redundante test- en productieomgeving in mijn meterkast, ingericht met Proxmox VE, Docker en op maat gemaakte 3D-geprinte hardware.",
            project_homelab_arch_title: "De Setup & Architectuur",
            project_homelab_arch_desc: "Een dual-node lab bestaande uit een Raspberry Pi 5 (Ubuntu Server) en een HP Thin Client T620 (Proxmox VE hypervisor) fysiek gemonteerd in de meterkast met 3D-geprinte brackets. De services draaien in Proxmox VM's/LXC-containers en Docker.",
            project_homelab_integ_title: "Integratie & Automatisering",
            project_homelab_integ_desc: "Centraal netwerkbeheer via een Nginx Reverse Proxy met automatische SSL-certificaten. Services praten onderling via API's en Docker-netwerken, met een SambaNAS-configuratie op de Pi 5 die shares levert aan Proxmox-nodes.",
            project_homelab_res_title: "Redundantie & Back-ups",
            project_homelab_res_desc: "Uitgevoerd met een dubbele Pi-hole (DNS failover) zodat het internet niet uitvalt bij onderhoud. Voorzien van cross-monitoring via Uptime Kuma en automatische, versleutelde off-site backups naar Oracle Cloud en Tuxis PBS (3-2-1 back-upstrategie).",
            project_nas_title: "Geautomatiseerde Media Pipeline & SambaNAS",
            project_nas_desc: "Een gecentraliseerde netwerkopslag (NAS) en geautomatiseerde download- en mediapipeline draaiend op een energiezuinige Raspberry Pi 5.",
            project_nas_arch_title: "De Architectuur",
            project_nas_arch_desc: "Gedistribueerd over twee fysieke machines. De Raspberry Pi 5 fungeert als Docker-host voor de opslag (SambaNAS) en streaming (Plex/Jellyfin), terwijl de HP Thin Client (Proxmox VE) de management- en automatiseringsstack host.",
            project_nas_integ_title: "Integratie & Automatisering",
            project_nas_integ_desc: "De automatiseringstools (Sonarr/Radarr) communiceren direct via API's met indexers (Prowlarr), verzoeken (Overseerr) en downloaders (qBittorrent/SabNZB) op de Pi 5 om downloads volautomatisch te starten, te hernoemen en te sorteren.",
            project_nas_res_title: "Netwerk & Beveiliging",
            project_nas_res_desc: "Veilige netwerkroutering waarbij alle download-containers via Docker-netwerken door een VPN-container(Gluetun) met actieve kill-switch worden geleid om datalekken te voorkomen.",
            project_arcade_title: "3D-Geprinte Mini Arcade Machine",
            project_arcade_desc: "Een zelfgebouwde bartop arcade machine aangedreven door een Raspberry Pi met Batocera en premium Sanwa arcade-besturing.",
            project_arcade_concept_title: "Het Concept",
            project_arcade_concept_desc: "Een compact tafelmodel arcadekast, geprint in PLA, uitgerust met een authentiek 4:3 LCD-scherm, geÃ¯ntegreerd 2.1-geluid en sfeervolle LED-verlichting.",
            project_arcade_elec_title: "De Elektronica",
            project_arcade_elec_desc: "Raspberry Pi 4B, Zero Delay USB encoder, audioversterker met actieve subwoofer en een dual-voedingssysteem voor stabiele stroomvoorziening.",
            project_arcade_process_title: "Het Bouwproces",
            project_arcade_process_desc: "Klik op deze kaart om de volledige handleiding en stap-voor-stap foto's van de fysieke montage en bedrading te bekijken.",
            skills_career_title: "Vaardigheden & Loopbaan",
            skills_career_subtitle: "Een overzicht van mijn technische vaardigheden, professionele achtergrond en studie.",
            skills_core_title: "Kernvaardigheden",
            skills_systems_cloud: "Systemen & Cloud",
            skills_net_sec: "Netwerken & Security",
            skills_iot_auto: "IoT & Automatisering",
            skills_support: "Support & Communicatie",
            experience_education_title: "Werkervaring & Opleiding",
            exp_roc_date: "2025 - 2027 (Verwacht)",
            exp_roc_title: "Mbo ICT System Engineer (Niveau 4)",
            exp_roc_inst: "ROC Midden Nederland (BBL)",
            exp_roc_desc: "<strong>Versnelde Leerweg:</strong> Vanwege inzet en goede resultaten ben ik na een half jaar in het eerste jaar direct overgezet naar het tweede leerjaar. Hiermee sla ik een heel studiejaar over en behaal ik mijn diploma in twee jaar in plaats van drie.",
            exp_nedsoft_date: "2019 - Heden",
            exp_nedsoft_title: "Helpdeskmedewerker (Fulltime)",
            exp_nedsoft_inst: "Nedsoft B.V. / Loca / Nedtrack",
            exp_nedsoft_desc: "Verantwoordelijk voor klantenondersteuning en troubleshooting (1e en 2e lijns support) voor GPS-tracking hardware en rittenregistratiesoftware. Analyseren van data, oplossen van connectiviteitsproblemen en bijdragen aan productverbetering op basis van feedback van gebruikers.",
            exp_davinci_date: "2017 - 2019",
            exp_davinci_title: "Mbo Medewerker Beheer ICT (Niveau 3)",
            exp_davinci_inst: "ROC Da Vinci College",
            exp_gemini_date: "2014 - 2017",
            exp_gemini_title: "VMBO Kader Leerweg ICT Route",
            exp_gemini_inst: "Gemini Lekkerkerk",
            footer_copyright: "&copy; 2026 Damian van Loon. Handgemaakt portfolio.",
            footer_status: "STATUS: ONLINE",
            footer_servers: "[SERVERS: 17/17 UP]",
            footer_vpn: "[VPN: SECURE]",
            modal_arcade_title: "3D-Geprinte Mini Arcade Machine",
            modal_arcade_subtitle: "Bartop retro console & homelab project",
            modal_tab_overview: "Specificaties & Materialen",
            modal_tab_steps: "Stap-voor-stap Montage",
            modal_project_title: "Het Project",
            modal_project_desc_1: "Dit project is een volledig functionele mini-bartop arcade machine, geprint met de Bambu Lab A1 3D Printer en aangedreven door een Raspberry Pi 4B. De machine is uitgerust met Sanwa controls, een 4:3 LCD-scherm dat perfect is voor klassieke retro games, en een geÃ¯ntegreerd 2.1-audiosysteem met een actieve subwoofer voor diepe, volle retro geluidseffecten.",
            modal_project_desc_2: "De software draait op het Batocera retro-gaming besturingssysteem, geladen op een 128 GB micro-SD-kaart. Hiermee worden consoles zoals NES, SNES, Sega Genesis, MAME (arcade) en meer vlekkeloos geÃ«muleerd.",
            modal_specs_title: "Specificaties",
            modal_spec_size: "<strong>Formaat:</strong> Bartop (tafelmodel)",
            modal_spec_screen: "<strong>Beeldscherm:</strong> 9.7 inch LG LCD 4:3 (1024x768)",
            modal_spec_cpu: "<strong>Processor:</strong> Raspberry Pi 4B (Quad-core)",
            modal_spec_controls: "<strong>Controls:</strong> Sanwa Joystick (JLF) & OBSF-24 knoppen",
            modal_spec_audio: "<strong>Geluid:</strong> 2.1 Kanaal + Actieve Subwoofer",
            modal_spec_led: "<strong>Verlichting:</strong> Instelbare LED-strips (onder & marquee)",
            modal_spec_os: "<strong>Besturingssysteem:</strong> Batocera OS (128GB MicroSD)",
            modal_spec_materials: "<strong>Materialen:</strong> PLA (3D-print)",
            modal_bom_title: "Belangrijkste Materialen (BOM)",
            modal_bom_subtitle: "Voor dit project waren diverse mechanische en elektronische onderdelen nodig. Hier zijn de belangrijkste componenten:",
            modal_bom_rpi: "<strong>Raspberry Pi 4B</strong><span>Het hart van de arcade dat de emulatie draait.</span>",
            modal_bom_screen: "<strong>LG LCD LP097X02 Scherm + Driver kit</strong><span>9.7\" LCD-scherm met originele 4:3 verhouding voor authentieke retro-weergave.</span>",
            modal_bom_controls: "<strong>Sanwa Joystick JLF & OBSF-24 Knoppen</strong><span>Professionele Japanse arcade-besturing, bekend om zijn precisie en duurzaamheid.</span>",
            modal_bom_audio: "<strong>AIYIMA 2.1 Versterker & 3\" Subwoofer</strong><span>Geluidssysteem voor krachtige bas en heldere retro-geluidseffecten.</span>",
            modal_bom_encoder: "<strong>Zero Delay USB Encoder</strong><span>Zorgt voor ultralage input lag van de joysticks en knoppen naar de Pi.</span>",
            modal_bom_power: "<strong>Dual Voeding Setup (150W + 36W)</strong><span>Aparte 12V 12.5A voeding voor algemeen vermogen en 12V 3A voeding voor de audio.</span>",
            modal_bom_case: "<strong>3D-Geprinte Behuizing (Panelen A t/m L)</strong><span>Geprinte panelen die samen de volledige bartop-behuizing vormen.</span>",
            modal_choose_step: "Kies een Bouwstap",
            modal_parts_needed: "Onderdelen voor deze stap:",
            modal_instruction_title: "Instructie:",
            modal_btn_prev: "Vorige",
            modal_btn_next: "Volgende",
            modal_progress_prefix: "Stap",
            modal_progress_of: "van",
            modal_tab_manual: "Bouwtekening",
            modal_tab_photo: "Mijn Foto",
            modal_tab_action: "In Actie",
            modal_photo_placeholder_text: "Er is geen foto beschikbaar voor deze tussenstap. De tekening hiernaast toont de instructie.",
            modal_tetris_title: "Speel Classic Tetris",
            modal_tetris_desc: "Klik om de ingebouwde retro-emulator te starten en te spelen!",
            modal_tetris_start: "Start Game",
            modal_tetris_minimize: "&minus; Minimaliseer",
            project_view_pipeline: "Bekijk Gegevensstroom",
            modal_pipeline_title: "Media Pipeline Gegevensstroom",
            pipeline_details_title: "Component Details",
            pipeline_desc_title: "Beschrijving & Werking",
            pipeline_bind_mount_label: "LXC Bind-mount: Bestandsimport (Downloads &rarr; Media)"
        },
        nodeData: {
            remote: {
                name: "Remote Client (Tailscale)",
                role: "Veilige toegang op afstand",
                specs: {
                    "Protocol": "WireGuard / Tailscale",
                    "Toegang": "Versleuteld (Zero-Trust)",
                    "Poorten": "Geen poorten geopend",
                    "Routing": "Via docker-container op Pi 5"
                },
                description: "Wanneer ik buitenshuis ben, maak ik verbinding via de Tailscale VPN-client. Omdat Tailscale draait als een Docker-container op de Raspberry Pi 5, kan ik mijn volledige netwerk (inclusief Proxmox-omgeving) veilig bereiken zonder poortdoorsturing (port forwarding) in mijn KPN router in te hoeven stellen."
            },
            router: {
                name: "KPN Router (Gateway)",
                role: "Centraal Netwerkbeheer",
                specs: {
                    "Model": "Standaard KPN Router",
                    "Subnet": "192.168.2.0/24",
                    "Gateway IP": "192.168.2.254",
                    "DNS Instelling": "Dual DNS (Pi-hole 1 & 2)"
                },
                description: "De centrale router van KPN beheert de internetverbinding (WAN), deelt lokale IP-adressen uit via DHCP en is handmatig geconfigureerd met twee DNS-servers: de primaire Pi-hole op de Raspberry Pi 5 en de back-up Pi-hole op Proxmox. Hierdoor is advertentievrij browsen gegarandeerd en blijft internet werken, zelfs als Ã©Ã©n van de servers offline gaat."
            },
            pi: {
                name: "Raspberry Pi 5",
                role: "Hoofd Applicaties & Opslag (SambaNAS)",
                specs: {
                    "Processor": "Broadcom BCM2712 (Quad-core)",
                    "Geheugen": "16 GB LPDDR5 RAM",
                    "Opslag": "32GB MicroSD + 2TB USB SSD",
                    "Montage": "Meterkast (3D-Bracket)"
                },
                description: "De Raspberry Pi 5 draait 24/7 en host de primaire productieve services voor het huishouden. Via Samba deelt hij de 2 TB SSD met het netwerk als SambaNAS share voor algemene back-ups en media.",
                services: [
                    { name: "Home Assistant", desc: "Centrale domotica hub met Zigbee integratie" },
                    { name: "Plex & Jellyfin", desc: "Dual media streaming servers" },
                    { name: "SambaNAS", desc: "SMB netwerkshares voor opslag en back-ups" },
                    { name: "Immich", desc: "Privacy-vriendelijke foto en video backup" },
                    { name: "BookStack Wiki", desc: "Systeemen- en netwerkdocumentatie" },
                    { name: "Pi-hole (Primair)", desc: "Netwerkbrede adblocking & primary DNS" },
                    { name: "EZbookkeeping", desc: "Persoonlijk financieel administratiesysteem" },
                    { name: "qBittorrent & SabNZB", desc: "Download-clients (qBittorrent achter VPN)" },
                    { name: "Tailscale", desc: "VPN gateway voor remote netwerktoegang" },
                    { name: "Uptime Kuma (Pi)", desc: "Monitort Proxmox (cross-checking)" },
                    { name: "Portainer", desc: "Grafisch beheerpaneel voor Docker containers" }
                ]
            },
            proxmox: {
                name: "HP Thin Client T620 (Proxmox VE)",
                role: "Virtualisatie & Management Node",
                specs: {
                    "Processor": "AMD GX-420GI Quad-Core",
                    "Geheugen": "16 GB DDR3 RAM",
                    "Opslag": "1 TB Externe Harde Schijf",
                    "Montage": "Meterkast (3D-Bracket)"
                },
                description: "De HP Thin Client draait Proxmox VE en is ingericht voor het draaien van lichtere Linux containers (LXC) en virtuele machines. Dit scheidt de automatisering van de daadwerkelijke data-opslag op de Pi.",
                services: [
                    { name: "Nginx Proxy Manager", desc: "Reverse proxy met automatische SSL/HTTPS" },
                    { name: "Pi-hole (Secundair)", desc: "Backup DNS server bij onderhoud/uitval Pi" },
                    { name: "Sonarr & Radarr", desc: "Automatische indexering van series en films" },
                    { name: "Prowlarr & Overseerr", desc: "Indexer management en media request interface" },
                    { name: "Speedtest Tracker", desc: "Periodiek loggen en plotten van internetsnelheid" },
                    { name: "Uptime Kuma (Px)", desc: "Monitort Pi 5 Docker containers (cross-checking)" }
                ]
            },
            voice: {
                name: "ESP32-S3 Spraakassistent",
                role: "Lokale, Privacy-Vriendelijke Voice AI",
                specs: {
                    "Chipset": "ESP32-S3 Dual-Core Xtensa",
                    "Audio/Mic": "ReSpeaker Lite 2-Mic Array & 3W Speaker",
                    "Behuizing": "3D-Geprint met akoestische demping",
                    "Connectie": "Wi-Fi (Lokale netwerk)"
                },
                description: "Een custom-built spraakassistent die volledig lokaal werkt (geen Google/Alexa cloud verbinding). Hij stuurt audiogegevens via ESPHome en het Wyoming-protocol naar Home Assistant op de Pi 5, waar Whisper (STT) en Piper (TTS) de verwerking afhandelen."
            },
            zigbee: {
                name: "Zigbee Mesh Netwerk",
                role: "Draadloze Domotica Aansturing",
                specs: {
                    "Coordinator": "Sonoff Zigbee 3.0 USB Dongle Plus",
                    "Aansluiting": "USB (op de Raspberry Pi 5)",
                    "Protocol": "Zigbee 3.0 (IEEE 802.15.4)",
                    "Apparaten": "Slimme lampen, sensoren en schakelaars"
                },
                description: "De Sonoff Zigbee USB Dongle dient als de centrale coÃ¶rdinator van het Zigbee mesh-netwerk. Via Home Assistant communiceren alle draadloze temperatuursensoren, slimme schakelaars en lampen in de woning direct en lokaal met het systeem."
            },
            oracle: {
                name: "Oracle Cloud Back-up",
                role: "Offsite Archivering & Docker Back-up",
                specs: {
                    "Software": "Duplicati (op Raspberry Pi 5)",
                    "Bestemming": "Oracle Cloud Object Storage (Amsterdam)",
                    "Interval": "Dagelijkse gecodeerde back-up",
                    "Encryptie": "AES-256 (Client-side)"
                },
                description: "De Raspberry Pi 5 gebruikt Duplicati om belangrijke Docker configuraties, databases (zoals EZbookkeeping en Bookstack) en applicatiegegevens lokaal te versleutelen en veilig te uploaden naar de Oracle Cloud Object Storage."
            },
            tuxis: {
                name: "Tuxis Proxmox Backup Server (PBS)",
                role: "Offsite Disaster Recovery & VM Snapshots",
                specs: {
                    "Software": "Proxmox Backup Server (PBS) Client",
                    "Bestemming": "Tuxis Cloud (Nederlands datacenter)",
                    "Interval": "Dagelijkse snapshots & backups",
                    "Retentie": "7 dagen / 4 weken / 12 maanden"
                },
                description: "De HP Thin Client T620 (Proxmox VE) maakt direct verbinding met de externe PBS-omgeving van Tuxis. Hier worden dagelijks incrementele, blok-level backups van alle actieve LXC-containers en VM's naartoe geschreven met automatische deduplicatie en encryptie."
            }
        },
        pipelineData: {
            client: {
                name: "Client / Gebruiker",
                role: "LAN / Tailscale Client",
                specs: {
                    "Type": "Smartphone / TV / PC",
                    "VPN": "Tailscale Actief",
                    "Protocollen": "HTTP / Plex-app"
                },
                description: "De eindgebruiker die media aanvraagt en streamt. Dit kan lokaal binnen het thuisnetwerk (LAN) of buitenshuis via een beveiligde Tailscale VPN-tunnel, waardoor er geen poorten opengezet hoeven te worden op de router."
            },
            overseerr: {
                name: "Overseerr",
                role: "Verzoekenbeheerder (LXC)",
                specs: {
                    "Type": "LXC Container",
                    "OS": "Debian 12",
                    "Poort": "5055 (HTTP)",
                    "Netwerk": "LAN & Tailscale"
                },
                description: "De front-end interface van de pipeline. Hier kunnen gebruikers eenvoudig films en series zoeken en aanvragen. Overseerr controleert automatisch of media al aanwezig is in Plex en stuurt nieuwe verzoeken door naar Sonarr/Radarr via API-koppelingen."
            },
            prowlarr: {
                name: "Prowlarr",
                role: "Indexer Manager (LXC)",
                specs: {
                    "Type": "LXC Container",
                    "OS": "Debian 12",
                    "Poort": "9696 (HTTP)",
                    "Netwerk": "Intern Netwerk"
                },
                description: "Beheert en synchroniseert alle Usenet- en torrent-indexers (zoekmachines). Zodra een nieuwe indexer wordt toegevoegd aan Prowlarr, synchroniseert hij deze direct via API's met Sonarr en Radarr, zodat de downloaders altijd over de nieuwste zoekbronnen beschikken."
            },
            sonarr_radarr: {
                name: "Sonarr & Radarr",
                role: "Media Beheerders (LXC)",
                specs: {
                    "Type": "LXC Containers",
                    "OS": "Debian 12 (x2)",
                    "Poort": "8989 / 7878",
                    "Netwerk": "Intern Netwerk"
                },
                description: "Monitoren de gewenste media. Radarr beheert films, Sonarr beheert series. Ze zoeken automatisch via Prowlarr naar releases, sturen opdrachten naar SabNZBD/qBittorrent via API's, en verplaatsen/hernoemen de voltooide bestanden naar de SambaNAS-shares."
            },
            vpn: {
                name: "Gluetun VPN",
                role: "VPN Gateway Container (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Protocol": "WireGuard",
                    "Beveiliging": "Actieve Kill-Switch"
                },
                description: "Zorgt voor een veilige netwerkroutering. De qBittorrent-container is gekoppeld aan de Gluetun-netwerkstack. Als de VPN-verbinding wegvalt, blokkeert de kill-switch direct al het inkomende en uitgaande verkeer om datalekken te voorkomen."
            },
            qbittorrent: {
                name: "qBittorrent",
                role: "Veilige Torrent Downloader (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Poort": "8080 (Web UI)",
                    "Netwerk": "Gerouteerd via VPN"
                },
                description: "Verwerkt torrent-downloads. De qBittorrent-container deelt de netwerkstack van de Gluetun VPN-container. Hierdoor wordt al het torrent-verkeer versleuteld en anoniem afgehandeld over de VPN-tunnel."
            },
            sabnzbd: {
                name: "SabNZB",
                role: "Usenet Downloader (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Poort": "8089 (Web UI)",
                    "Netwerk": "SSL Direct"
                },
                description: "Downloadt media met maximale snelheid via nieuwsgroepen (Usenet). Maakt gebruik van directe SSL-verbindingen met nieuwsservers, waardoor er geen extra VPN nodig is voor privacy en veiligheid tijdens het downloaden."
            },
            nas: {
                name: "SambaNAS Opslag",
                role: "Centrale Netwerkopslag",
                specs: {
                    "Type": "Fysieke Pi 5 NVMe",
                    "Protocol": "Samba (SMB)",
                    "Rechten": "PUID/PGID Beheer",
                    "Mappen": "/Plex/Downloads, /Movies, /Series"
                },
                description: "De centrale opslaglocatie voor alle media. De LXC-containers op de HP Thin Client hebben direct toegang via bind-mounts in hun .conf bestanden. Hierdoor kunnen Sonarr en Radarr bestanden direct op de NAS hernoemen en verplaatsen zonder netwerkoverhead."
            },
            plex: {
                name: "Plex Media Server",
                role: "Streaming & Transcoding (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Poort": "32400 (Web)",
                    "Database": "SambaNAS Gekoppeld"
                },
                description: "Scant de `/Plex/Movies` en `/Plex/Series` mappen op de SambaNAS. Organiseert media met metadata, posters en ondertitels, en streamt films en series in hoge kwaliteit naar tv's, telefoons en mobiele apparaten (lokaal en extern)."
            }
        },
        arcadeSteps: [
            {
                number: 1,
                title: "Montage Rechterzijpaneel (Panel A)",
                phase: "Fase 1: Panelen Voorbereiden",
                parts: [
                    "Panel A (Rechterzijpaneel) (1x)",
                    "Power supply 12V 12.5A 150W S-150-12 (1x)",
                    "USB encoder support (1x)",
                    "Zero delay USB encoder (1x)",
                    "Schroef M3x6 DIN-912 & sluitring M3 (2x)",
                    "Schroef voor plastic D2x12 (4x)"
                ],
                description: "Ik begon met het leggen van Panel A (rechterzijpaneel) op een vlakke ondergrond. Vervolgens monteerde ik de grote 12V 12.5A voeding en de 3D-geprinte support voor de USB-encoder op het paneel met M3x6 schroeven. Daarna bevestigde ik de Zero Delay USB-encoder op de support met de vier plastic schroeven. Hierbij lette ik goed op de oriÃ«ntatie van de voeding: de 12V-uitgang moest naar de bovenkant wijzen.",
                photo: "assets/projects/arcade/Stap_1_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_1.png"
            },
            {
                number: 2,
                title: "Muntinworp Paneel (Panel B)",
                phase: "Fase 1: Panelen Voorbereiden",
                parts: [
                    "Panel B (Muntinworp paneel) (1x)",
                    "Sanwa push button OBSF-24 (Rood) (1x)",
                    "M3 vierkante moer DIN-557 (2x)"
                ],
                description: "Ik schoof twee vierkante M3-moeren in de montage-slots aan de uiteinden van Panel B. Vervolgens drukte ik de rode Sanwa 24mm drukknop in het ronde gat aan de voorzijde van het paneel. Deze knop fungeert als de 'Insert Coin' knop voor de arcade-emulatie.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_2.png"
            },
            {
                number: 3,
                title: "Het Bedieningspaneel (Panel C)",
                phase: "Fase 1: Panelen Voorbereiden",
                parts: [
                    "Panel C (Bedieningspaneel) (1x)",
                    "Sanwa joystick JLF-TP-8Y & Joystick adapter (1x)",
                    "Sanwa push button OBSF-24 (Gekleurd) (6x)",
                    "Mini Switch 12mm PBS-33b (4x gekleurd, 1x wit)",
                    "Schroef M5x12 ISO-7380 & borgmoer M5 (4x)",
                    "Schroef M3x14 DIN-912 & vierkante moer M3 (4x)"
                ],
                description: "Ik assembleerde eerst de Sanwa joystick op de groene 3D-geprinte joystick adapterplaat met de M5-bouten, sluitringen en borgmoeren. Deze adapter bevestigde ik aan de onderzijde van Panel C met vier M3x14 schroeven en vierkante moeren. Daarna drukte ik de 6 gekleurde Sanwa-knoppen en de 5 mini-schakelaars in de gaten aan de bovenzijde van het bedieningspaneel.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_3.png"
            },
            {
                number: 4,
                title: "Scherm & Audio (Panel D & E)",
                phase: "Fase 1: Panelen Voorbereiden",
                parts: [
                    "Panel D (Schermpaneel) & Panel E (Speakerpaneel) (1x)",
                    "LG LCD 4:3 display (LP097X02) + Controller frame (1x)",
                    "AIYIMA audio amplifier 2.1 (1x)",
                    "Visaton speaker FR 7 - 4 Ohm (2x)",
                    "Visaton speaker grille FR 7 (2x)",
                    "Subwoofer support (1x)",
                    "Subwoofer unit 3 inch (1x)",
                    "Schroef M3x14 DIN-912 & vierkante moer M3 (8x)",
                    "Schroef voor plastic D2x12 (4x)",
                    "Schroef voor plastic D3x12 (8x)"
                ],
                description: "Op Panel D installeerde ik de schermcontroller en schroefde het LG LCD-scherm vast in de uitsparing. Vervolgens monteerde ik de luidsprekers en de grilles op Panel E. De audioversterker werd vastgezet op de 3D-geprinte versterkerhouder en de 3-inch subwoofer werd gemonteerd in de subwoofer-behuizing aan de onderzijde van Panel E.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_4.png"
            },
            {
                number: 5,
                title: "Marquee & Raspberry Pi (Panel F, G & H)",
                phase: "Fase 1: Panelen Voorbereiden",
                parts: [
                    "Panel F (Marquee boven) & Panel G (Marquee onder) (1x)",
                    "Panel H (Achterpaneel) (1x)",
                    "Raspberry Pi 4B (1x)",
                    "LED-strip 12V (wit, ~20cm) (1x)",
                    "Mini DC Jack adapter (1x)",
                    "Schroef voor plastic D2x12 (4x)",
                    "Schroef voor plastic D3x12 (2x)"
                ],
                description: "Ik plakte de LED-strip aan de binnenkant van Panel F voor de verlichting van de marquee (de lichtbak aan de bovenkant) en sloot deze aan op een DC Jack adapter. Op Panel H (het achterpaneel) monteerde ik de Raspberry Pi 4B met vier kleine schroeven rechtstreeks op de 3D-geprinte standoffs.",
                photo: "assets/projects/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_5.png"
            },
            {
                number: 6,
                title: "Zijpanelen Verbinden (Panel A, I, J & K)",
                phase: "Fase 2: Frame Assembleren",
                parts: [
                    "Gemonteerd Panel A (Rechterzijpaneel) (1x)",
                    "Panel I (Bodem) (1x)",
                    "Panel J (Frontonder) (1x)",
                    "Panel K (Top) (1x)",
                    "Schroef M3x14 DIN-912 & vierkante moer M3 (6x)"
                ],
                description: "Ik legde Panel A plat neer en schoof vierkante M3-moeren in de slots van Panel I, J en K. Vervolgens schroefde ik deze drie panelen rechtop vast aan Panel A met M3x14 bouten. Hierdoor ontstond de basisvorm en de rechterhelft van het arcade-kabinet.",
                photo: "assets/projects/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_6.png"
            },
            {
                number: 7,
                title: "Interne Panelen Installeren (Panel B, C, D & E)",
                phase: "Fase 2: Frame Assembleren",
                parts: [
                    "Gemonteerd frame (Stap 6) (1x)",
                    "Gemonteerd Panel B, C, D & E (1x)",
                    "Schroef M3x14 DIN-912 & vierkante moer M3 (8x)"
                ],
                description: "Ik schoof achtereenvolgens Panel B (muntinworp), Panel C (bedieningspaneel), Panel D (scherm) en Panel E (speakers) in de daarvoor bestemde gleuven en geleiders van het rechterzijpaneel (Panel A). Elk paneel werd met M3x14 schroeven en vierkante moeren stevig aan het frame verankerd.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_7.png"
            },
            {
                number: 8,
                title: "Bekabeling & Stroomdistributie",
                phase: "Fase 3: Elektronica & Bedrading",
                parts: [
                    "Gemonteerd frame met bekabeling (1x)",
                    "Audio amplifier power supply 12V 3A 36W S-36-12 (1x)",
                    "Stroomkabel C14 met schakelaar & zekering (1x)",
                    "USB-kabel & audio-kabel jack 3.5mm naar RCA (1x)",
                    "Diverse jumperdraden & stroomkabels"
                ],
                description: "Dit was de meest complexe stap. Ik installeerde de tweede voeding (12V 3A) speciaal voor de versterker om audio-ruis te minimaliseren. Vervolgens bedraadde ik de C14-stroomaansluiting met de hoofdschakelaar en zekering naar beide voedingen. Ik sloot de knoppen en joystick aan op de USB-encoder en verbond de schermcontroller, versterker en voedingen met de Raspberry Pi.",
                photo: "assets/projects/arcade/Stap_8_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_8.png"
            },
            {
                number: 9,
                title: "Sluiten met Linkerzijpaneel (Panel L)",
                phase: "Fase 4: Afwerking",
                parts: [
                    "Gemonteerd frame met bekabeling (1x)",
                    "Panel L (Linkerzijpaneel) (1x)",
                    "M3 vierkante moer DIN-557 (14x)",
                    "Schroef M3x14 DIN-912 (14x)"
                ],
                description: "Na het dubbelchecken van alle bedrading en stroomcircuits, legde ik Panel L (linkerzijpaneel) op het kabinet. Ik schoof 14 vierkante M3-moeren in de corresponderende montage-slots van de verbindende panelen (I, J, K, B, C, D, E). Vervolgens schroefde ik Panel L met 14 stuks M3x14 bouten vast om de behuizing volledig te sluiten.",
                photo: "assets/projects/arcade/photo-assembly-1.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_9.png"
            },
            {
                number: 10,
                title: "Achterpaneel & Testen (Panel H)",
                phase: "Fase 4: Afwerking",
                parts: [
                    "Gesloten arcade-behuizing (1x)",
                    "Gemonteerd Panel H (Achterpaneel met Pi) (1x)",
                    "Schroef M3x14 DIN-912 (4x)",
                    "Marquee plexiglas & Marquee poster (1x)"
                ],
                description: "Als laatste schoof ik Panel H (achterpaneel) op zijn plek en zette dit vast met vier M3x14 schroeven. Ik plaatste de geprinte marquee-poster achter het plexiglas aan de voorzijde. Daarna was het tijd voor de eerste boot-test: de Raspberry Pi startte perfect op in Batocera, de controls reageerden direct en het 2.1-geluid klonk fantastisch!",
                photo: "assets/projects/arcade/Final-Look-Kast.jpg",
                inActionPhoto: "assets/projects/arcade/In_actie_tetris.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_10.png"
            }
        ]
    },
    en: {
        ui: {
            maintenance_title: "Damian van Loon | Under Maintenance",
            maintenance_desc: "The website of Damian van Loon is currently undergoing maintenance.",
            maintenance_mode: "Maintenance Mode",
            maintenance_subtitle: "This website is temporarily unavailable. For urgent questions, you can contact me directly using the buttons below.",
            linkedin_btn: "See LinkedIn",
            email_btn: "Send an E-mail",
            portfolio_title: "Damian van Loon | ICT System Engineer & Homelab Portfolio",
            portfolio_meta_desc: "Portfolio and Homelab infrastructure of Damian van Loon. Systems administration, networking, Docker, and smart home automation.",
            nav_infrastructure: "Infrastructure",
            nav_projects: "Projects",
            nav_experience: "CV & Experience",
            nav_contact: "Contact",
            hero_badge: "ICT System Engineer in Training (Mbo 4)",
            hero_subtitle: "Helpdesk technician and aspiring IT engineer with a passion for Linux, Docker, networking, and smart home automation. Builds and manages a homelab to test enterprise technologies in practice.",
            hero_location: "Ridderkerk, NL",
            hero_job: "Helpdesk Technician @ Nedsoft B.V.",
            hero_school: "ROC Midden Nederland",
            download_cv: "Download CV (PDF)",
            net_diagram_title: "Network Architecture",
            net_diagram_subtitle: "Click on an element in the diagram to view its specifications and active services.",
            diagram_card_title: "Interactive Network Diagram",
            diagram_card_subtitle: "Select a node for details",
            details_title: "Infrastructure Details",
            details_empty_title: "No element selected",
            details_empty_desc: "Click on one of the servers or network components in the diagram to see specifications, IP addresses, and running services.",
            details_active_services: "Active Services",
            details_description_title: "Description & Operation",
            projects_title: "Projects",
            projects_subtitle: "An overview of systems and infrastructures I have independently built and maintained.",
            project_view_net: "View Network Diagram",
            project_view_steps: "View Assembly Steps",
            project_homelab_desc: "An advanced and redundant test and production environment in my meter cupboard, set up with Proxmox VE, Docker, and custom 3D-printed hardware.",
            project_homelab_arch_title: "Setup & Architecture",
            project_homelab_arch_desc: "A dual-node lab consisting of a Raspberry Pi 5 (Ubuntu Server) and an HP Thin Client T620 (Proxmox VE hypervisor) physically mounted in the meter cupboard using 3D-printed brackets. Services run in Proxmox VMs/LXC containers and Docker.",
            project_homelab_integ_title: "Integration & Automation",
            project_homelab_integ_desc: "Centralized network management using Nginx Reverse Proxy with automated SSL certificates. Services communicate internally via APIs and Docker networks, with a SambaNAS setup on the Pi 5 delivering shares to Proxmox nodes.",
            project_homelab_res_title: "Redundancy & Backups",
            project_homelab_res_desc: "Implemented with dual Pi-holes (DNS failover) to prevent internet downtime during maintenance. Equipped with cross-monitoring via Uptime Kuma and automatic, encrypted off-site backups to Oracle Cloud and Tuxis PBS (3-2-1 strategy).",
            project_nas_title: "Automated Media Pipeline & SambaNAS",
            project_nas_desc: "A centralized network storage (NAS) and automated download and media pipeline running on an energy-efficient Raspberry Pi 5.",
            project_nas_arch_title: "The Architecture",
            project_nas_arch_desc: "Distributed across two physical machines. The Raspberry Pi 5 acts as a Docker host for storage (SambaNAS) and streaming (Plex/Jellyfin), while the HP Thin Client (Proxmox VE) hosts the management and automation stack.",
            project_nas_integ_title: "Integration & Automation",
            project_nas_integ_desc: "Automation tools (Sonarr/Radarr) communicate directly via APIs with indexers (Prowlarr), requests (Overseerr), and downloaders (qBittorrent/SabNZB) on the Pi 5 to automatically start, rename, and sort downloads.",
            project_nas_res_title: "Network & Security",
            project_nas_res_desc: "Secure network routing where all download containers are routed through a VPN container(Gluetun) with an active kill switch via Docker networks to prevent data leaks.",
            project_arcade_title: "3D-Printed Mini Arcade Machine",
            project_arcade_desc: "A self-built bartop arcade machine powered by a Raspberry Pi running Batocera and premium Sanwa arcade controls.",
            project_arcade_concept_title: "The Concept",
            project_arcade_concept_desc: "A compact bartop arcade cabinet, printed in PLA, equipped with an authentic 4:3 LCD screen, integrated 2.1 audio, and atmospheric LED lighting.",
            project_arcade_elec_title: "The Electronics",
            project_arcade_elec_desc: "Raspberry Pi 4B, Zero Delay USB encoder, audio amplifier with active subwoofer, and a dual power supply system for stable power distribution.",
            project_arcade_process_title: "The Build Process",
            project_arcade_process_desc: "Click on this card to view the complete manual and step-by-step photos of the physical assembly and wiring.",
            skills_career_title: "Skills & Career",
            skills_career_subtitle: "An overview of my technical skills, professional background, and education.",
            skills_core_title: "Core Skills",
            skills_systems_cloud: "Systems & Cloud",
            skills_net_sec: "Networking & Security",
            skills_iot_auto: "IoT & Automation",
            skills_support: "Support & Communication",
            experience_education_title: "Work Experience & Education",
            exp_roc_date: "2025 - 2027 (Expected)",
            exp_roc_title: "Mbo ICT System Engineer (Level 4)",
            exp_roc_inst: "ROC Midden Nederland (Work-Study)",
            exp_roc_desc: "<strong>Accelerated Path:</strong> Due to dedication and good results, I was transferred directly to the second year after six months. This skips an entire academic year, allowing me to obtain my degree in two years instead of three.",
            exp_nedsoft_date: "2019 - Present",
            exp_nedsoft_title: "Helpdesk Technician (Fulltime)",
            exp_nedsoft_inst: "Nedsoft B.V. / Loca / Nedtrack",
            exp_nedsoft_desc: "Responsible for customer support and troubleshooting (1st and 2nd line support) for GPS tracking hardware and trip registration software. Analyzing data, resolving connectivity issues, and contributing to product improvement based on user feedback.",
            exp_davinci_date: "2017 - 2019",
            exp_davinci_title: "Mbo ICT Support Specialist (Level 3)",
            exp_davinci_inst: "ROC Da Vinci College",
            exp_gemini_date: "2014 - 2017",
            exp_gemini_title: "VMBO Vocational ICT Track",
            exp_gemini_inst: "Gemini Lekkerkerk",
            footer_copyright: "&copy; 2026 Damian van Loon. Handmade portfolio.",
            footer_status: "STATUS: ONLINE",
            footer_servers: "[SERVERS: 17/17 UP]",
            footer_vpn: "[VPN: SECURE]",
            modal_arcade_title: "3D-Printed Mini Arcade Machine",
            modal_arcade_subtitle: "Bartop retro console & homelab project",
            modal_tab_overview: "Specifications & Materials",
            modal_tab_steps: "Step-by-step Assembly",
            modal_project_title: "The Project",
            modal_project_desc_1: "This project is a fully functional mini-bartop arcade machine, printed with the Bambu Lab A1 3D Printer and powered by a Raspberry Pi 4B. The machine is equipped with Sanwa controls, a 4:3 LCD screen that is perfect for classic retro games, and an integrated 2.1 audio system with an active subwoofer for deep, full retro sound effects.",
            modal_project_desc_2: "The software runs on the Batocera retro-gaming operating system, loaded on a 128 GB micro-SD card. This flawlessly emulates consoles such as NES, SNES, Sega Genesis, MAME (arcade), and more.",
            modal_specs_title: "Specifications",
            modal_spec_size: "<strong>Size:</strong> Bartop (tabletop model)",
            modal_spec_screen: "<strong>Screen:</strong> 9.7 inch LG LCD 4:3 (1024x768)",
            modal_spec_cpu: "<strong>Processor:</strong> Raspberry Pi 4B (Quad-core)",
            modal_spec_controls: "<strong>Controls:</strong> Sanwa Joystick (JLF) & OBSF-24 buttons",
            modal_spec_audio: "<strong>Audio:</strong> 2.1 Channel + Active Subwoofer",
            modal_spec_led: "<strong>Lighting:</strong> Adjustable LED strips (under cabinet & marquee)",
            modal_spec_os: "<strong>OS:</strong> Batocera OS (128GB MicroSD)",
            modal_spec_materials: "<strong>Materials:</strong> PLA (3D-print)",
            modal_bom_title: "Bill of Materials (BOM)",
            modal_bom_subtitle: "This project required various mechanical and electronic components. Here are the main items:",
            modal_bom_rpi: "<strong>Raspberry Pi 4B</strong><span>The heart of the arcade running the emulation.</span>",
            modal_bom_screen: "<strong>LG LCD LP097X02 Screen + Driver kit</strong><span>9.7\" LCD screen with original 4:3 ratio for authentic retro gaming.</span>",
            modal_bom_controls: "<strong>Sanwa Joystick JLF & OBSF-24 Buttons</strong><span>Professional Japanese arcade controls, known for their precision and durability.</span>",
            modal_bom_audio: "<strong>AIYIMA 2.1 Amplifier & 3\" Subwoofer</strong><span>Sound system for deep bass and clear retro audio effects.</span>",
            modal_bom_encoder: "<strong>Zero Delay USB Encoder</strong><span>Ensures ultra-low input lag from the joysticks and buttons to the Pi.</span>",
            modal_bom_power: "<strong>Dual Power Setup (150W + 36W)</strong><span>Separate 12V 12.5A power supply for main power and 12V 3A power supply for audio.</span>",
            modal_bom_case: "<strong>3D-Printed Enclosure (Panels A to L)</strong><span>Printed panels that form the complete bartop cabinet.</span>",
            modal_choose_step: "Choose an Assembly Step",
            modal_parts_needed: "Parts for this step:",
            modal_instruction_title: "Instruction:",
            modal_btn_prev: "Previous",
            modal_btn_next: "Next",
            modal_progress_prefix: "Step",
            modal_progress_of: "of",
            modal_tab_manual: "Schematic",
            modal_tab_photo: "My Photo",
            modal_tab_action: "In Action",
            modal_photo_placeholder_text: "There is no photo available for this intermediate step. The schematic on the left shows the instruction.",
            modal_tetris_title: "Play Classic Tetris",
            modal_tetris_desc: "Click to start the built-in retro emulator and play!",
            modal_tetris_start: "Start Game",
            modal_tetris_minimize: "&minus; Minimize",
            project_view_pipeline: "View Data Flow",
            modal_pipeline_title: "Media Pipeline Data Flow",
            pipeline_details_title: "Component Details",
            pipeline_desc_title: "Description & Operation",
            pipeline_bind_mount_label: "LXC Bind-mount: File Import (Downloads &rarr; Media)"
        },
        nodeData: {
            remote: {
                name: "Remote Client (Tailscale)",
                role: "Secure remote access",
                specs: {
                    "Protocol": "WireGuard / Tailscale",
                    "Access": "Encrypted (Zero-Trust)",
                    "Ports": "No ports opened",
                    "Routing": "Via docker container on Pi 5"
                },
                description: "When I am away from home, I connect using the Tailscale VPN client. Because Tailscale runs as a Docker container on the Raspberry Pi 5, I can safely access my entire network (including my Proxmox environment) without having to configure port forwarding on my KPN router."
            },
            router: {
                name: "KPN Router (Gateway)",
                role: "Central Network Management",
                specs: {
                    "Model": "Standard KPN Router",
                    "Subnet": "192.168.2.0/24",
                    "Gateway IP": "192.168.2.254",
                    "DNS Setting": "Dual DNS (Pi-hole 1 & 2)"
                },
                description: "The central KPN router manages the internet connection (WAN), distributes local IP addresses via DHCP, and is manually configured with two DNS servers: the primary Pi-hole on the Raspberry Pi 5 and the backup Pi-hole on Proxmox. This guarantees ad-free browsing and keeps internet working even if one of the servers goes offline."
            },
            pi: {
                name: "Raspberry Pi 5",
                role: "Main Applications & Storage (SambaNAS)",
                specs: {
                    "Processor": "Broadcom BCM2712 (Quad-core)",
                    "Memory": "16 GB LPDDR5 RAM",
                    "Storage": "32GB MicroSD + 2TB USB SSD",
                    "Mounting": "Meter Cupboard (3D-Bracket)"
                },
                description: "The Raspberry Pi 5 runs 24/7 and hosts the primary productive services for the household. Via Samba, it shares the 2 TB SSD with the network as a SambaNAS share for general backups and media.",
                services: [
                    { name: "Home Assistant", desc: "Central domotics hub with Zigbee integration" },
                    { name: "Plex & Jellyfin", desc: "Dual media streaming servers" },
                    { name: "SambaNAS", desc: "SMB network shares for storage and backups" },
                    { name: "Immich", desc: "Privacy-friendly photo and video backup" },
                    { name: "BookStack Wiki", desc: "Systems and network documentation" },
                    { name: "Pi-hole (Primary)", desc: "Network-wide adblocking & primary DNS" },
                    { name: "EZbookkeeping", desc: "Personal financial administration system" },
                    { name: "qBittorrent & SabNZB", desc: "Download clients (qBittorrent behind VPN)" },
                    { name: "Tailscale", desc: "VPN gateway for remote network access" },
                    { name: "Uptime Kuma (Pi)", desc: "Monitors Proxmox (cross-checking)" },
                    { name: "Portainer", desc: "Graphical management panel for Docker containers" }
                ]
            },
            proxmox: {
                name: "HP Thin Client T620 (Proxmox VE)",
                role: "Virtualization & Management Node",
                specs: {
                    "Processor": "AMD GX-420GI Quad-Core",
                    "Memory": "16 GB DDR3 RAM",
                    "Storage": "1 TB External Hard Drive",
                    "Mounting": "Meter Cupboard (3D-Bracket)"
                },
                description: "The HP Thin Client runs Proxmox VE and is configured to run lighter Linux containers (LXC) and virtual machines. This separates automation from the actual data storage on the Pi.",
                services: [
                    { name: "Nginx Proxy Manager", desc: "Reverse proxy with automatic SSL/HTTPS" },
                    { name: "Pi-hole (Secondary)", desc: "Backup DNS server during Pi maintenance/outages" },
                    { name: "Sonarr & Radarr", desc: "Automatic indexing of series and movies" },
                    { name: "Prowlarr & Overseerr", desc: "Indexer management and media request interface" },
                    { name: "Speedtest Tracker", desc: "Periodic logging and plotting of internet speed" },
                    { name: "Uptime Kuma (Px)", desc: "Monitors Pi 5 Docker containers (cross-checking)" }
                ]
            },
            voice: {
                name: "ESP32-S3 Voice Assistant",
                role: "Local, Privacy-Friendly Voice AI",
                specs: {
                    "Chipset": "ESP32-S3 Dual-Core Xtensa",
                    "Audio/Mic": "ReSpeaker Lite 2-Mic Array & 3W Speaker",
                    "Enclosure": "3D-Printed with acoustic damping",
                    "Connection": "Wi-Fi (Local network)"
                },
                description: "A custom-built voice assistant that works fully locally (no Google/Alexa cloud connection). It sends audio data via ESPHome and the Wyoming protocol to Home Assistant on the Pi 5, where Whisper (STT) and Piper (TTS) handle the processing."
            },
            zigbee: {
                name: "Zigbee Mesh Network",
                role: "Wireless Domotics Control",
                specs: {
                    "Coordinator": "Sonoff Zigbee 3.0 USB Dongle Plus",
                    "Connection": "USB (connected to Raspberry Pi 5)",
                    "Protocol": "Zigbee 3.0 (IEEE 802.15.4)",
                    "Devices": "Smart bulbs, sensors, and switches"
                },
                description: "The Sonoff Zigbee USB Dongle serves as the central coordinator of the Zigbee mesh network. Through Home Assistant, all wireless temperature sensors, smart switches, and lights in the home communicate directly and locally with the system."
            },
            oracle: {
                name: "Oracle Cloud Backup",
                role: "Offsite Archiving & Docker Backup",
                specs: {
                    "Software": "Duplicati (on Raspberry Pi 5)",
                    "Destination": "Oracle Cloud Object Storage (Amsterdam)",
                    "Interval": "Daily encrypted backup",
                    "Encryption": "AES-256 (Client-side)"
                },
                description: "The Raspberry Pi 5 uses Duplicati to locally encrypt and securely upload important Docker configurations, databases (such as EZbookkeeping and Bookstack), and application data to Oracle Cloud Object Storage."
            },
            tuxis: {
                name: "Tuxis Proxmox Backup Server (PBS)",
                role: "Offsite Disaster Recovery & VM Snapshots",
                specs: {
                    "Software": "Proxmox Backup Server (PBS) Client",
                    "Destination": "Tuxis Cloud (Dutch data center)",
                    "Interval": "Daily snapshots & backups",
                    "Retention": "7 days / 4 weeks / 12 months"
                },
                description: "The HP Thin Client T620 (Proxmox VE) connects directly to Tuxis's external PBS environment. Daily incremental, block-level backups of all active LXC containers and VMs are written here with automatic deduplication and encryption."
            }
        },
        pipelineData: {
            client: {
                name: "Client / User",
                role: "LAN / Tailscale Client",
                specs: {
                    "Type": "Smartphone / TV / PC",
                    "VPN": "Tailscale Active",
                    "Protocols": "HTTP / Plex app"
                },
                description: "The end user requesting and streaming media. This can be done locally within the home network (LAN) or remotely via a secure Tailscale VPN tunnel, eliminating the need to expose ports on the router."
            },
            overseerr: {
                name: "Overseerr",
                role: "Request Manager (LXC)",
                specs: {
                    "Type": "LXC Container",
                    "OS": "Debian 12",
                    "Port": "5055 (HTTP)",
                    "Network": "LAN & Tailscale"
                },
                description: "The front-end user interface of the pipeline. Here, users can easily search and request movies and series. Overseerr automatically checks if the media is already present in Plex and forwards new requests to Sonarr/Radarr via APIs."
            },
            prowlarr: {
                name: "Prowlarr",
                role: "Indexer Manager (LXC)",
                specs: {
                    "Type": "LXC Container",
                    "OS": "Debian 12",
                    "Port": "9696 (HTTP)",
                    "Network": "Internal Network"
                },
                description: "Manages and synchronizes all Usenet and torrent indexers (search engines). When a new indexer is added to Prowlarr, it immediately syncs it via APIs with Sonarr and Radarr, ensuring downloaders always have the latest search sources."
            },
            sonarr_radarr: {
                name: "Sonarr & Radarr",
                role: "Media Managers (LXC)",
                specs: {
                    "Type": "LXC Containers",
                    "OS": "Debian 12 (x2)",
                    "Port": "8989 / 7878",
                    "Network": "Internal Network"
                },
                description: "Monitor desired media. Radarr manages movies, Sonarr manages series. They automatically search for releases via Prowlarr, send download commands to SabNZBD/qBittorrent via APIs, and move/rename completed files to the SambaNAS shares."
            },
            vpn: {
                name: "Gluetun VPN",
                role: "VPN Gateway Container (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Protocol": "WireGuard",
                    "Security": "Active Kill-Switch"
                },
                description: "Ensures secure network routing. The qBittorrent container is bound to the Gluetun network stack. If the VPN connection drops, the kill switch instantly blocks all traffic to prevent IP leaks."
            },
            qbittorrent: {
                name: "qBittorrent",
                role: "Secure Torrent Downloader (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Port": "8080 (Web UI)",
                    "Network": "Routed via VPN"
                },
                description: "Processes torrent downloads. The qBittorrent container shares the network stack of the Gluetun VPN container, meaning all torrent traffic is encrypted and handled anonymously over the VPN tunnel."
            },
            sabnzbd: {
                name: "SabNZBD",
                role: "Usenet Downloader (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Port": "8089 (Web UI)",
                    "Network": "SSL Direct"
                },
                description: "Downloads media at maximum speed via newsgroups (Usenet). Uses direct SSL connections with news servers, eliminating the need for an additional VPN for privacy and security while downloading."
            },
            nas: {
                name: "SambaNAS Storage",
                role: "Central Network Storage",
                specs: {
                    "Type": "Physical Pi 5 NVMe",
                    "Protocol": "Samba (SMB)",
                    "Permissions": "PUID/PGID Managed",
                    "Folders": "/Plex/Downloads, /Movies, /Series"
                },
                description: "The central storage location for all media. The LXC containers on the HP Thin Client have direct access via bind-mounts in their .conf files. This allows Sonarr and Radarr to rename and move files directly on the NAS without network overhead."
            },
            plex: {
                name: "Plex Media Server",
                role: "Streaming & Transcoding (Docker)",
                specs: {
                    "Type": "Docker Container",
                    "OS": "Raspberry Pi OS",
                    "Port": "32400 (Web)",
                    "Database": "SambaNAS Linked"
                },
                description: "Scans the `/Plex/Movies` and `/Plex/Series` folders on the SambaNAS. Organizes media with metadata, posters and subtitles, and streams movies and series in high quality to TVs, phones, and mobile devices (locally and remotely)."
            }
        },
        arcadeSteps: [
            {
                number: 1,
                title: "Right Side Panel Assembly (Panel A)",
                phase: "Phase 1: Preparing Panels",
                parts: [
                    "Panel A (Right Side Panel) (1x)",
                    "Power supply 12V 12.5A 150W S-150-12 (1x)",
                    "USB encoder support (1x)",
                    "Zero delay USB encoder (1x)",
                    "Screw M3x6 DIN-912 & washer M3 (2x)",
                    "Screw for plastic D2x12 (4x)"
                ],
                description: "I started by placing Panel A (right side panel) on a flat surface. Next, I mounted the large 12V 12.5A power supply and the 3D-printed support for the USB encoder onto the panel using M3x6 screws. Then, I attached the Zero Delay USB encoder to the support with the four plastic screws. I paid close attention to the orientation of the power supply: the 12V output had to face upwards.",
                photo: "assets/projects/arcade/Stap_1_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_1.png"
            },
            {
                number: 2,
                title: "Coin Entry Panel (Panel B)",
                phase: "Phase 1: Preparing Panels",
                parts: [
                    "Panel B (Coin entry panel) (1x)",
                    "Sanwa push button OBSF-24 (Red) (1x)",
                    "M3 square nut DIN-557 (2x)"
                ],
                description: "I slid two square M3 nuts into the mounting slots at the ends of Panel B. Then, I pressed the red Sanwa 24mm push button into the round hole on the front of the panel. This button acts as the 'Insert Coin' button for the arcade emulation.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_2.png"
            },
            {
                number: 3,
                title: "The Control Panel (Panel C)",
                phase: "Phase 1: Preparing Panels",
                parts: [
                    "Panel C (Control panel) (1x)",
                    "Sanwa joystick JLF-TP-8Y & Joystick adapter (1x)",
                    "Sanwa push button OBSF-24 (Colored) (6x)",
                    "Mini Switch 12mm PBS-33b (4x colored, 1x white)",
                    "Screw M5x12 ISO-7380 & locknut M5 (4x)",
                    "Screw M3x14 DIN-912 & square nut M3 (4x)"
                ],
                description: "I first assembled the Sanwa joystick onto the green 3D-printed joystick adapter plate using the M5 bolts, washers, and locknuts. I attached this adapter to the underside of Panel C with four M3x14 screws and square nuts. Then, I pressed the 6 colored Sanwa buttons and the 5 mini-switches into the holes on the top of the control panel.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_3.png"
            },
            {
                number: 4,
                title: "Screen & Audio (Panel D & E)",
                phase: "Phase 1: Preparing Panels",
                parts: [
                    "Panel D (Screen panel) & Panel E (Speaker panel) (1x)",
                    "LG LCD 4:3 display (LP097X02) + Controller frame (1x)",
                    "AIYIMA audio amplifier 2.1 (1x)",
                    "Visaton speaker FR 7 - 4 Ohm (2x)",
                    "Visaton speaker grille FR 7 (2x)",
                    "Subwoofer support (1x)",
                    "Subwoofer unit 3 inch (1x)",
                    "Screw M3x14 DIN-912 & square nut M3 (8x)",
                    "Screw for plastic D2x12 (4x)",
                    "Screw for plastic D3x12 (8x)"
                ],
                description: "On Panel D, I installed the screen controller and screwed the LG LCD screen into the cutout. Then, I mounted the speakers and grilles on Panel E. The audio amplifier was secured to its 3D-printed mount, and the 3-inch subwoofer was mounted in its enclosure at the bottom of Panel E.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_4.png"
            },
            {
                number: 5,
                title: "Marquee & Raspberry Pi (Panel F, G & H)",
                phase: "Phase 1: Preparing Panels",
                parts: [
                    "Panel F (Marquee top) & Panel G (Marquee bottom) (1x)",
                    "Panel H (Back panel) (1x)",
                    "Raspberry Pi 4B (1x)",
                    "LED strip 12V (white, ~20cm) (1x)",
                    "Mini DC Jack adapter (1x)",
                    "Screw for plastic D2x12 (4x)",
                    "Screw for plastic D3x12 (2x)"
                ],
                description: "I taped the LED strip to the inside of Panel F to light up the marquee (the lightbox at the top) and connected it to a DC Jack adapter. On Panel H (the back panel), I mounted the Raspberry Pi 4B with four small screws directly onto the 3D-printed standoffs.",
                photo: "assets/projects/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_5.png"
            },
            {
                number: 6,
                title: "Connecting Side Panels (Panel A, I, J & K)",
                phase: "Phase 2: Assembling Frame",
                parts: [
                    "Assembled Panel A (Right Side Panel) (1x)",
                    "Panel I (Bottom) (1x)",
                    "Panel J (Front bottom) (1x)",
                    "Panel K (Top) (1x)",
                    "Screw M3x14 DIN-912 & square nut M3 (6x)"
                ],
                description: "I laid Panel A flat and slid square M3 nuts into the slots of Panels I, J, and K. Next, I screwed these three panels upright onto Panel A using M3x14 bolts. This established the base shape and the right half of the arcade cabinet.",
                photo: "assets/projects/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_6.png"
            },
            {
                number: 7,
                title: "Installing Internal Panels (Panel B, C, D & E)",
                phase: "Phase 2: Assembling Frame",
                parts: [
                    "Assembled frame (Step 6) (1x)",
                    "Assembled Panels B, C, D & E (1x)",
                    "Screw M3x14 DIN-912 & square nut M3 (8x)"
                ],
                description: "I slid Panel B (coin entry), Panel C (control panel), Panel D (screen), and Panel E (speakers) successively into the designated tracks and guides of the right side panel (Panel A). Each panel was securely anchored to the frame using M3x14 screws and square nuts.",
                photo: "",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_7.png"
            },
            {
                number: 8,
                title: "Wiring & Power Distribution",
                phase: "Phase 3: Electronics & Wiring",
                parts: [
                    "Assembled frame with all panels (1x)",
                    "Audio amplifier power supply 12V 3A 36W S-36-12 (1x)",
                    "C14 power socket with switch & fuse (1x)",
                    "USB cable & audio cable jack 3.5mm to RCA (1x)",
                    "Various jumper wires & power cables"
                ],
                description: "This was the most complex step. I installed the second power supply (12V 3A) specifically for the amplifier to minimize audio hum. Then, I wired the C14 power inlet with the main switch and fuse to both power supplies. I connected the buttons and joystick to the USB encoder, and hooked up the screen controller, amplifier, and power supplies to the Raspberry Pi.",
                photo: "assets/projects/arcade/Stap_8_Mijn_Foto.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_8.png"
            },
            {
                number: 9,
                title: "Closing with Left Side Panel (Panel L)",
                phase: "Phase 4: Finishing Up",
                parts: [
                    "Assembled frame with wiring (1x)",
                    "Panel L (Left Side Panel) (1x)",
                    "M3 square nut DIN-557 (14x)",
                    "Screw M3x14 DIN-912 (14x)"
                ],
                description: "After double-checking all wiring and power circuits, I placed Panel L (left side panel) onto the cabinet. I slid 14 square M3 nuts into the corresponding mounting slots of the connecting panels (I, J, K, B, C, D, E). Then, I secured Panel L using 14 M3x14 bolts to fully close the enclosure.",
                photo: "assets/projects/arcade/photo-assembly-1.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_9.png"
            },
            {
                number: 10,
                title: "Back Panel & Testing (Panel H)",
                phase: "Phase 4: Finishing Up",
                parts: [
                    "Closed arcade enclosure (1x)",
                    "Assembled Panel H (Back panel with Pi) (1x)",
                    "Screw M3x14 DIN-912 (4x)",
                    "Marquee plexiglass & Marquee poster (1x)"
                ],
                description: "Finally, I slid Panel H (back panel) into place and secured it with four M3x14 screws. I placed the printed marquee poster behind the plexiglass at the front. Then, it was time for the first boot test: the Raspberry Pi booted perfectly into Batocera, the controls responded immediately, and the 2.1 audio sounded fantastic!",
                photo: "assets/projects/arcade/Final-Look-Kast.jpg",
                inActionPhoto: "assets/projects/arcade/In_actie_tetris.jpg",
                manualImage: "assets/projects/arcade/bouwtekeningen/Stap_10.png"
            }
        ]
    }
};

// --- Skills Data for the Interactive Topology Diagram ---
const skillsData = {
    nl: {
        default_title: "Kernvaardigheden",
        default_desc: "Beweeg je muis over een onderdeel in het diagram om details, beheersingsniveau en homelab-integratie te bekijken.",
        categories: {
            cat_systems_cloud: {
                name: "Systemen & Cloud",
                desc: "Beheer van on-premise operating systems, active directory infrastructuren en bare-metal hypervisors."
            },
            cat_net_sec: {
                name: "Netwerken & Security",
                desc: "Inrichting en segmentatie van lokale LAN/VLAN structuren, veilige tunnels en monitoring."
            },
            cat_iot_auto: {
                name: "IoT & Automatisering",
                desc: "Orkestratie van smarthome platforms, containerisatie van microservices en geautomatiseerde back-ups."
            },
            cat_support: {
                name: "Support & Communicatie",
                desc: "Professionele helpdesk support, incidentafhandeling en het vertalen van techniek naar bruikbare klantdocumentatie."
            }
        },
        skills: {
            linux: {
                name: "Linux Server",
                proficiency: "Expert",
                integration: "Basis-OS voor alle containers en virtualisatieomgevingen in het homelab.",
                desc: "Diepgaande kennis van Linux CLI, rechtenstructuren, servicebeheer (systemd) en optimalisatie van Debian/Ubuntu servers."
            },
            windows_ad: {
                name: "Windows Server & AD",
                proficiency: "Gevorderd",
                integration: "Hosting van Active Directory Domain Services (AD DS) voor lokale authenticatie-tests.",
                desc: "Ervaring met Active Directory-gebruikersbeheer, groepsbeleidsobjecten (GPOs) en DNS/DHCP server-rollen."
            },
            virt_cloud: {
                name: "Virtualisatie & Cloud",
                proficiency: "Expert",
                integration: "Proxmox VE hypervisor draaiend op thin-clients voor LXC containers en VM's.",
                desc: "Beheer van hypervisors, hardware passthrough, resource allocation, storage pools (ZFS) en provisioning van virtuele machines."
            },
            net_mgmt: {
                name: "Netwerkbeheer",
                proficiency: "Expert",
                integration: "Segmentatie, DHCP-scopes en DNS routing in het interne LAN.",
                desc: "Kennis van TCP/IP routing, DNS-sinkholing (dual Pi-hole voor adblocking) en het analyseren van netwerkverkeer."
            },
            vpn_security: {
                name: "VPN & Proxying",
                proficiency: "Expert",
                integration: "Nginx Proxy Manager reverse proxy en beveiligde WireGuard/Tailscale tunnels.",
                desc: "Opzetten van encryptie voor inkomend verkeer (SSL/TLS Let's Encrypt) en veilige site-to-site en client-to-site VPN verbindingen."
            },
            monitoring: {
                name: "Uptime Monitoring",
                proficiency: "Gevorderd",
                integration: "Uptime Kuma dashboard voor live status-checks van alle homelab services.",
                desc: "Inrichten van actieve poort-, ping- en HTTP-monitors inclusief push-notificaties (Discord/Telegram) bij downtime."
            },
            iot_integration: {
                name: "IoT & Smart Home",
                proficiency: "Expert",
                integration: "Home Assistant server gekoppeld aan ESP32 sensoren en slimme meter lezers.",
                desc: "Koppelen van diverse netwerkprotocollen (Zigbee, ESPHome) en het ontwerpen van complexe automatiseringen en live dashboards."
            },
            docker_backup: {
                name: "Docker & Databeheer",
                proficiency: "Expert",
                integration: "Orkestratie van download-pipelines en automatische ZFS/tar backups.",
                desc: "Schrijven van Docker Compose stacks, volume mapping en het opzetten van redundante back-up schema's naar netwerkschijven."
            },
            sys_automation: {
                name: "Systeemautomatisering",
                proficiency: "Gevorderd",
                integration: "Cronjobs en Bash scripts voor geautomatiseerd serveronderhoud en dumps.",
                desc: "Schrijven van scripts om repeterende netwerktaken te automatiseren en automatische database-backups te verzorgen."
            },
            customer_support: {
                name: "Klantenservice / Helpdesk",
                proficiency: "Expert",
                integration: "Dagelijkse fulltime werkzaamheden als helpdeskmedewerker bij Nedsoft B.V.",
                desc: "Klantvriendelijke communicatie via telefoon en e-mail, oplossen van storingen onder tijdsdruk en het ontzorgen van eindgebruikers."
            },
            troubleshooting: {
                name: "1e & 2e Lijns Support",
                proficiency: "Expert",
                integration: "Troubleshooting van GPS hardware-connectiviteit en rittenregistratiesoftware.",
                desc: "Analyseren van data-logs, diagnosticeren van hardwarestoringen en het escaleren van complexe bugs naar software developers."
            },
            documentation: {
                name: "Documentatie & Kennisbeheer",
                proficiency: "Gevorderd",
                integration: "Schrijven van handleidingen en interne handleidingen voor collega's en klanten.",
                desc: "Bijhouden van documentatie (zoals interne wiki's) en het vertalen van complexe technische procedures naar heldere stappenplannen."
            }
        }
    },
    en: {
        default_title: "Core Skills",
        default_desc: "Hover your mouse over any element in the diagram to view details, proficiency level, and homelab integration.",
        categories: {
            cat_systems_cloud: {
                name: "Systems & Cloud",
                desc: "Administration of on-premise operating systems, active directory infrastructures, and bare-metal hypervisors."
            },
            cat_net_sec: {
                name: "Networking & Security",
                desc: "Design and segmentation of local LAN/VLAN structures, secure tunnels, and monitoring."
            },
            cat_iot_auto: {
                name: "IoT & Automation",
                desc: "Orchestration of smart home platforms, containerization of microservices, and automated backups."
            },
            cat_support: {
                name: "Support & Communication",
                desc: "Professional helpdesk support, incident handling, and translating tech into user-friendly documentation."
            }
        },
        skills: {
            linux: {
                name: "Linux Server",
                proficiency: "Expert",
                integration: "Base OS for all server containers and virtualization layers in the homelab.",
                desc: "In-depth knowledge of Linux CLI, permissions mapping, systemd service management, and Debian/Ubuntu server tuning."
            },
            windows_ad: {
                name: "Windows Server & AD",
                proficiency: "Advanced",
                integration: "Active Directory Domain Services (AD DS) setup for local authentication tests.",
                desc: "Experience with Active Directory user administration, Group Policy Objects (GPOs), and DNS/DHCP server roles."
            },
            virt_cloud: {
                name: "Virtualization & Cloud",
                proficiency: "Expert",
                integration: "Proxmox VE hypervisor running on thin-clients for LXC containers and VMs.",
                desc: "Hypervisor administration, hardware passthrough, resource allocation, storage pools (ZFS), and provisioning virtual machines."
            },
            net_mgmt: {
                name: "Network Management",
                proficiency: "Expert",
                integration: "Segmentation, DHCP scopes, and DNS routing in the internal LAN.",
                desc: "Knowledge of TCP/IP routing, DNS sinkholing (dual Pi-hole for adblocking), and network traffic analysis."
            },
            vpn_security: {
                name: "VPN & Proxying",
                proficiency: "Expert",
                integration: "Nginx Proxy Manager reverse proxy and secure WireGuard/Tailscale tunnels.",
                desc: "Configuring transport encryption (SSL/TLS Let's Encrypt) and building secure site-to-site or client-to-site VPN paths."
            },
            monitoring: {
                name: "Uptime Monitoring",
                proficiency: "Advanced",
                integration: "Uptime Kuma dashboard for live status-checks of all homelab services.",
                desc: "Setting up active port, ping, and HTTP monitors with instant push notifications (Discord/Telegram) on downtime."
            },
            iot_integration: {
                name: "IoT & Smart Home",
                proficiency: "Expert",
                integration: "Home Assistant server bound to ESP32 sensors and smart-meter readers.",
                desc: "Binding diverse network protocols (Zigbee, ESPHome) and designing complex automations and live dashboards."
            },
            docker_backup: {
                name: "Docker & Data Management",
                proficiency: "Expert",
                integration: "Orchestration of download pipelines and automated ZFS/tar backups.",
                desc: "Writing Docker Compose stacks, volume mapping, and creating redundant backup schedules to network storage."
            },
            sys_automation: {
                name: "System Automation",
                proficiency: "Advanced",
                integration: "Cronjobs and Bash scripts for automated server maintenance and dumps.",
                desc: "Writing automation scripts to handle repetitive network tasks and automated database dumps."
            },
            customer_support: {
                name: "Customer Service / Helpdesk",
                proficiency: "Expert",
                integration: "Daily full-time helpdesk support duties at Nedsoft B.V.",
                desc: "Client-focused phone and email communication, solving software issues under pressure, and assisting end-users."
            },
            troubleshooting: {
                name: "1st & 2nd Line Support",
                proficiency: "Expert",
                integration: "Troubleshooting GPS tracker hardware connectivity and mileage software.",
                desc: "Analyzing data logs, diagnosing hardware faults, and escalating complex bugs to software developers."
            },
            documentation: {
                name: "Documentation & Knowledge Base",
                proficiency: "Advanced",
                integration: "Writing manuals and internal guides for colleagues and customers.",
                desc: "Maintaining documentation (such as internal wikis) and translating complex technical procedures into clean guides."
            }
        }
    }
};
