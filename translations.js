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
            hero_subtitle: "Helpdeskmedewerker en IT-engineer in wording met een passie voor Linux, Docker, netwerken en smart home automatisering. Bouwt en beheert een homelab om enterprise-technologieën in de praktijk te testen.",
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
            project_homelab_prob_title: "Het Probleem",
            project_homelab_prob_desc: "Om theorieën uit mijn ICT-opleiding en systeembeheer in de praktijk te testen, en services (zoals DNS, smart home en media) centraal en veilig binnen het huishouden te hosten, is een flexibele, betrouwbare en efficiënte infrastructuur vereist.",
            project_homelab_sol_title: "De Oplossing",
            project_homelab_sol_desc: "Een dual-node lab bestaande uit een Raspberry Pi 5 (Docker-host & SambaNAS-opslag) en een HP Thin Client T620 (Proxmox VE hypervisor). De opzet is redundant uitgevoerd met een dubbele Pi-hole (DNS failover), cross-monitoring via Uptime Kuma, en automatische, versleutelde off-site backups naar Oracle Cloud en Tuxis PBS.",
            project_homelab_lessons_title: "Geleerde Lessen",
            project_homelab_lessons_desc: "Ervaring met virtualisatie (LXC/VM's), Linux-systeembeheer (Ubuntu Server CLI), opslagprotocollen (SMB/NFS), netwerkbeheer (Tailscale VPN gateway) en het implementeren van een solide 3-2-1 back-up- en disaster recovery-strategie.",
            project_voice_title: "Lokale Privacy-Vriendelijke Spraakassistent",
            project_voice_desc: "Een volledig lokaal draaiende spraakassistent die is geïntegreerd met Home Assistant, zonder cloud-afhankelijkheid.",
            project_voice_prob_title: "Het Probleem",
            project_voice_prob_desc: "Commerciële spraakassistenten sturen audiogegevens naar cloudservers, wat privacyrisico's oplevert en cloud-afhankelijkheid creëert.",
            project_voice_sol_title: "De Oplossing",
            project_voice_sol_desc: "Een op maat gebouwde assistant met een ReSpeaker Lite (ESP32-S3) in een zelf-geprinte akoestische behuizing. Communiceert lokaal via Wyoming (Whisper & Piper).",
            project_voice_lessons_title: "Geleerde Lessen",
            project_voice_lessons_desc: "Signaalverwerking en akoestische demping, microcontrollers configureren met ESPHome, en lokale AI-modellen optimaliseren op latency.",
            project_arcade_title: "3D-Geprinte Mini Arcade Machine",
            project_arcade_desc: "Een zelfgebouwde bartop arcade machine aangedreven door een Raspberry Pi met Batocera en premium Sanwa arcade-besturing.",
            project_arcade_concept_title: "Het Concept",
            project_arcade_concept_desc: "Een compact tafelmodel arcadekast, geprint in PLA, uitgerust met een authentiek 4:3 LCD-scherm, geïntegreerd 2.1-geluid en sfeervolle LED-verlichting.",
            project_arcade_elec_title: "De Elektronica",
            project_arcade_elec_desc: "Raspberry Pi 4B, Zero Delay USB encoder, audioversterker met actieve subwoofer en een dual-voedingssysteem voor stabiele stroomvoorziening.",
            project_arcade_process_title: "Het Bouwproces",
            project_arcade_process_desc: "Klik op deze kaart om de volledige handleiding en stap-voor-stap foto's van de fysieke montage en bedrading te bekijken.",
            skills_career_title: "Vaardigheden & Loopbaan",
            skills_career_subtitle: "Een overzicht van mijn technische vaardigheden, professionele achtergrond en studie.",
            skills_core_title: "Kernvaardigheden",
            skills_os: "Besturingssystemen",
            skills_net_sec: "Netwerken & Security",
            skills_virt_cont: "Virtualisatie & Containers",
            skills_auto_tools: "Automatisering & Tools",
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
            modal_project_desc_1: "Dit project is een volledig functionele mini-bartop arcade machine, geprint met de Bambu Lab A1 3D Printer en aangedreven door een Raspberry Pi 4B. De machine is uitgerust met Sanwa controls, een 4:3 LCD-scherm dat perfect is voor klassieke retro games, en een geïntegreerd 2.1-audiosysteem met een actieve subwoofer voor diepe, volle retro geluidseffecten.",
            modal_project_desc_2: "De software draait op het Batocera retro-gaming besturingssysteem, geladen op een 128 GB micro-SD-kaart. Hiermee worden consoles zoals NES, SNES, Sega Genesis, MAME (arcade) en meer vlekkeloos geëmuleerd.",
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
            modal_tetris_minimize: "&minus; Minimaliseer"
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
                description: "De centrale router van KPN beheert de internetverbinding (WAN), deelt lokale IP-adressen uit via DHCP en is handmatig geconfigureerd met twee DNS-servers: de primaire Pi-hole op de Raspberry Pi 5 en de back-up Pi-hole op Proxmox. Hierdoor is advertentievrij browsen gegarandeerd en blijft internet werken, zelfs als één van de servers offline gaat."
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
                description: "De Sonoff Zigbee USB Dongle dient als de centrale coördinator van het Zigbee mesh-netwerk. Via Home Assistant communiceren alle draadloze temperatuursensoren, slimme schakelaars en lampen in de woning direct en lokaal met het systeem."
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
                description: "Ik begon met het leggen van Panel A (rechterzijpaneel) op een vlakke ondergrond. Vervolgens monteerde ik de grote 12V 12.5A voeding en de 3D-geprinte support voor de USB-encoder op het paneel met M3x6 schroeven. Daarna bevestigde ik de Zero Delay USB-encoder op de support met de vier plastic schroeven. Hierbij lette ik goed op de oriëntatie van de voeding: de 12V-uitgang moest naar de bovenkant wijzen.",
                photo: "assets/logos/arcade/Stap_1_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_1.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_2.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_3.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_4.png"
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
                photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_5.png"
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
                photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_6.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_7.png"
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
                photo: "assets/logos/arcade/Stap_8_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_8.png"
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
                photo: "assets/logos/arcade/Stap_9_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_9.png"
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
                photo: "assets/logos/arcade/Stap_10_Mijn_Foto.jpg",
                inActionPhoto: "assets/logos/arcade/In_actie_tetris.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_10.png"
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
            project_homelab_prob_title: "The Problem",
            project_homelab_prob_desc: "To test theories from my ICT studies and systems administration in practice, and to host services (like DNS, smart home, and media) centrally and securely within the household, a flexible, reliable, and efficient infrastructure is required.",
            project_homelab_sol_title: "The Solution",
            project_homelab_sol_desc: "A dual-node lab consisting of a Raspberry Pi 5 (Docker host & SambaNAS storage) and an HP Thin Client T620 (Proxmox VE hypervisor). The setup is redundant with double Pi-holes (DNS failover), cross-monitoring via Uptime Kuma, and automatic, encrypted off-site backups to Oracle Cloud and Tuxis PBS.",
            project_homelab_lessons_title: "Lessons Learned",
            project_homelab_lessons_desc: "Experience with virtualization (LXC/VMs), Linux systems administration (Ubuntu Server CLI), storage protocols (SMB/NFS), network management (Tailscale VPN gateway), and implementing a solid 3-2-1 backup and disaster recovery strategy.",
            project_voice_title: "Local Privacy-Friendly Voice Assistant",
            project_voice_desc: "A fully locally running voice assistant integrated with Home Assistant, without cloud dependency.",
            project_voice_prob_title: "The Problem",
            project_voice_prob_desc: "Commercial voice assistants send audio data to cloud servers, posing privacy risks and creating cloud dependencies.",
            project_voice_sol_title: "The Solution",
            project_voice_sol_desc: "A custom-built assistant using a ReSpeaker Lite (ESP32-S3) in a self-printed acoustic enclosure. Communicates locally via Wyoming (Whisper & Piper).",
            project_voice_lessons_title: "Lessons Learned",
            project_voice_lessons_desc: "Signal processing and acoustic damping, configuring microcontrollers with ESPHome, and optimizing local AI models for latency.",
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
            skills_os: "Operating Systems",
            skills_net_sec: "Networking & Security",
            skills_virt_cont: "Virtualization & Containers",
            skills_auto_tools: "Automation & Tools",
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
            modal_tetris_minimize: "&minus; Minimize"
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
                photo: "assets/logos/arcade/Stap_1_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_1.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_2.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_3.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_4.png"
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
                photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_5.png"
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
                photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_6.png"
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
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_7.png"
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
                photo: "assets/logos/arcade/Stap_8_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_8.png"
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
                photo: "assets/logos/arcade/Stap_9_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_9.png"
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
                photo: "assets/logos/arcade/Stap_10_Mijn_Foto.jpg",
                inActionPhoto: "assets/logos/arcade/In_actie_tetris.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_10.png"
            }
        ]
    },
    de: {
        ui: {
            maintenance_title: "Damian van Loon | In Wartung",
            maintenance_desc: "Die Website von Damian van Loon wird derzeit gewartet.",
            maintenance_mode: "Wartungsmodus",
            maintenance_subtitle: "Diese Website ist vorübergehend nicht verfügbar. Bei dringenden Fragen können Sie mich direkt über die Schaltflächen unten kontaktieren.",
            linkedin_btn: "Siehe LinkedIn",
            email_btn: "E-Mail senden",
            portfolio_title: "Damian van Loon | IT-Systemingenieur & Homelab-Portfolio",
            portfolio_meta_desc: "Portfolio und Homelab-Infrastruktur von Damian van Loon. Systemadministration, Netzwerke, Docker und Smart-Home-Automatisierung.",
            nav_infrastructure: "Infrastruktur",
            nav_projects: "Projekte",
            nav_experience: "Lebenslauf & Erfahrung",
            nav_contact: "Kontakt",
            hero_badge: "IT-Systemingenieur in Ausbildung (Mbo 4)",
            hero_subtitle: "Helpdesk-Mitarbeiter und angehender IT-Ingenieur mit einer Leidenschaft für Linux, Docker, Netzwerke und Smart-Home-Automatisierung. Baut und verwaltet ein Homelab, um Enterprise-Technologien in der Praxis zu testen.",
            hero_location: "Ridderkerk, NL",
            hero_job: "Helpdesk-Mitarbeiter @ Nedsoft B.V.",
            hero_school: "ROC Midden Nederland",
            download_cv: "Lebenslauf herunterladen (PDF)",
            net_diagram_title: "Netzwerkarchitektur",
            net_diagram_subtitle: "Klicken Sie auf ein Element im Diagramm, um dessen Spezifikationen und aktive Dienste anzuzeigen.",
            details_title: "Infrastrukturdetails",
            details_empty_title: "Kein Element ausgewählt",
            details_empty_desc: "Klicken Sie auf einen der Server oder Netzwerkkomponenten im Diagramm, um Spezifikationen, IP-Adressen und aktive Dienste anzuzeigen.",
            details_active_services: "Aktive Dienste",
            details_description_title: "Beschreibung & Funktion",
            projects_title: "Projekte",
            projects_subtitle: "Ein Überblick über Systeme und Infrastrukturen, die ich selbstständig aufgebaut und gepflegt habe.",
            project_view_net: "Netzwerkdiagramm anzeigen",
            project_view_steps: "Bauschritte anzeigen",
            project_homelab_desc: "Eine fortschrittliche und redundante Test- und Produktionsumgebung in meinem Zählerschrank, eingerichtet mit Proxmox VE, Docker und maßgeschneiderter 3D-gedruckter Hardware.",
            project_homelab_prob_title: "Das Problem",
            project_homelab_prob_desc: "Um Theorien aus meiner IT-Ausbildung und Systemadministration in der Praxis zu testen und Dienste (wie DNS, Smart Home und Medien) zentral und sicher im Haushalt bereitzustellen, ist eine flexible, zuverlässige und effiziente Infrastruktur erforderlich.",
            project_homelab_sol_title: "Die Lösung",
            project_homelab_sol_desc: "Ein Dual-Node-Labor bestehend aus einem Raspberry Pi 5 (Docker-Host & SambaNAS-Speicher) und einem HP Thin Client T620 (Proxmox VE Hypervisor). Das Setup ist redundant ausgelegt mit doppelten Pi-holes (DNS-Failover), Cross-Monitoring über Uptime Kuma und automatischen, verschlüsselten Off-Site-Backups auf Oracle Cloud und Tuxis PBS.",
            project_homelab_lessons_title: "Erkenntnisse",
            project_homelab_lessons_desc: "Erfahrung mit Virtualisierung (LXC/VMs), Linux-Systemadministration (Ubuntu Server CLI), Speicherprotokollen (SMB/NFS), Netzwerkverwaltung (Tailscale VPN Gateway) und der Implementierung einer soliden Backup- und Disaster-Recovery-Strategie.",
            project_voice_title: "Lokaler datenschutzfreundlicher Sprachassistent",
            project_voice_desc: "Ein vollständig lokal laufender Sprachassistent, der in Home Assistant integriert ist, ohne Cloud-Abhängigkeit.",
            project_voice_prob_title: "Das Problem",
            project_voice_prob_desc: "Kommerzielle Sprachassistenten senden Audiodaten an Cloud-Server, was Datenschutzrisiken birgt und Cloud-Abhängigkeiten schafft.",
            project_voice_sol_title: "Die Lösung",
            project_voice_sol_desc: "Ein maßgeschneiderter Assistent mit einem ReSpeaker Lite (ESP32-S3) in einem selbstgedruckten Akustikgehäuse. Kommuniziert lokal über Wyoming (Whisper & Piper).",
            project_voice_lessons_title: "Erkenntnisse",
            project_voice_lessons_desc: "Signalverarbeitung und akustische Dämpfung, Konfiguration von Mikrocontrollern mit ESPHome und Optimierung lokaler KI-Modelle für Latenz.",
            project_arcade_title: "3D-gedruckter Mini-Arcade-Automat",
            project_arcade_desc: "Ein selbstgebauter Bartop-Arcade-Automat, angetrieben von einem Raspberry Pi mit Batocera und Premium-Sanwa-Arcade-Steuerung.",
            project_arcade_concept_title: "Das Konzept",
            project_arcade_concept_desc: "Ein kompakter Tisch-Arcade-Automat, gedruckt in PLA, ausgestattet mit einem authentischen 4:3-LCD-Bildschirm, integriertem 2.1-Sound und stimmungsvoller LED-Beleuchtung.",
            project_arcade_elec_title: "Die Elektronik",
            project_arcade_elec_desc: "Raspberry Pi 4B, Zero Delay USB-Encoder, Audioverstärker mit aktivem Subwoofer und ein duales Netzteilsystem für eine stabile Stromversorgung.",
            project_arcade_process_title: "Der Bauprozess",
            project_arcade_process_desc: "Klicken Sie auf diese Karte, um die vollständige Anleitung und Schritt-für-Schritt-Fotos der physischen Montage und Verkabelung anzuzeigen.",
            skills_career_title: "Fähigkeiten & Werdegang",
            skills_career_subtitle: "Ein Überblick über meine technischen Fähigkeiten, meinen beruflichen Werdegang und meine Ausbildung.",
            skills_core_title: "Kernkompetenzen",
            skills_os: "Betriebssysteme",
            skills_net_sec: "Netzwerke & Sicherheit",
            skills_virt_cont: "Virtualisierung & Container",
            skills_auto_tools: "Automatisierung & Tools",
            experience_education_title: "Berufserfahrung & Ausbildung",
            exp_roc_date: "2025 - 2027 (Voraussichtlich)",
            exp_roc_title: "Fachinformatiker für Systemintegration (BBL)",
            exp_roc_inst: "ROC Midden Nederland",
            exp_roc_desc: "<strong>Verkürzte Ausbildung:</strong> Aufgrund meines Engagements und guter Ergebnisse wurde ich nach einem halben Jahr im ersten Jahr direkt ins zweite Lehrjahr versetzt. Dadurch überspringe ich ein ganzes Studienjahr und mache meinen Abschluss in zwei statt in drei Jahren.",
            exp_nedsoft_date: "2019 - Heute",
            exp_nedsoft_title: "Helpdesk-Mitarbeiter (Vollzeit)",
            exp_nedsoft_inst: "Nedsoft B.V. / Loca / Nedtrack",
            exp_nedsoft_desc: "Verantwortlich für Kundenbetreuung und Fehlerbehebung (1. und 2. Level Support) für GPS-Ortungshardware und Fahrtenbuchsoftware. Analyse von Daten, Behebung von Konnektivitätsproblemen und Beitrag zur Produktverbesserung basierend auf Benutzerfeedback.",
            exp_davinci_date: "2017 - 2019",
            exp_davinci_title: "Mbo IT-Support-Spezialist (Niveau 3)",
            exp_davinci_inst: "ROC Da Vinci College",
            exp_gemini_date: "2014 - 2017",
            exp_gemini_title: "VMBO IT-Zweig",
            exp_gemini_inst: "Gemini Lekkerkerk",
            footer_copyright: "&copy; 2026 Damian van Loon. Handgemachtes Portfolio.",
            footer_status: "STATUS: ONLINE",
            footer_servers: "[SERVER: 17/17 UP]",
            footer_vpn: "[VPN: SICHER]",
            modal_arcade_title: "3D-gedruckter Mini-Arcade-Automat",
            modal_arcade_subtitle: "Bartop Retro-Konsole & Homelab-Projekt",
            modal_tab_overview: "Spezifikationen & Materialien",
            modal_tab_steps: "Schritt-für-Schritt-Montage",
            modal_project_title: "Das Projekt",
            modal_project_desc_1: "Dieses Projekt ist ein voll funktionsfähiger Mini-Bartop-Arcade-Automat, gedruckt mit dem Bambu Lab A1 3D-Drucker und angetrieben von einem Raspberry Pi 4B. Das Gerät ist mit Sanwa-Steuerungen, einem 4:3-LCD-Bildschirm, der sich perfekt für klassische Retro-Spiele eignet, und einem integrierten 2.1-Audiosystem mit einem aktiven Subwoofer für satten Retro-Sound ausgestattet.",
            modal_project_desc_2: "Die Software läuft auf dem Batocera-Retro-Gaming-Betriebssystem, das auf eine 128-GB-Micro-SD-Karte geladen ist. Dies emuliert Konsolen wie NES, SNES, Sega Genesis, MAME (Arcade) und mehr fehlerfrei.",
            modal_specs_title: "Spezifikationen",
            modal_spec_size: "<strong>Format:</strong> Bartop (Tischmodell)",
            modal_spec_screen: "<strong>Bildschirm:</strong> 9.7 Zoll LG LCD 4:3 (1024x768)",
            modal_spec_cpu: "<strong>Prozessor:</strong> Raspberry Pi 4B (Quad-Core)",
            modal_spec_controls: "<strong>Steuerung:</strong> Sanwa Joystick (JLF) & OBSF-24 Tasten",
            modal_spec_audio: "<strong>Sound:</strong> 2.1 Kanal + Aktiver Subwoofer",
            modal_spec_led: "<strong>Beleuchtung:</strong> Einstellbare LED-Streifen (unten & Marquee)",
            modal_spec_os: "<strong>Betriebssystem:</strong> Batocera OS (128GB MicroSD)",
            modal_spec_materials: "<strong>Materialien:</strong> PLA (3D-Druck)",
            modal_bom_title: "Stückliste (BOM)",
            modal_bom_subtitle: "Für dieses Projekt waren verschiedene mechanische und elektronische Teile erforderlich. Hier sind die wichtigsten Komponenten:",
            modal_bom_rpi: "<strong>Raspberry Pi 4B</strong><span>Das Herzstück der Arcade-Maschine, auf dem die Emulation läuft.</span>",
            modal_bom_screen: "<strong>LG LCD LP097X02 Bildschirm + Treibersatz</strong><span>9.7\" LCD-Bildschirm mit originalem 4:3-Verhältnis für authentische Retro-Wiedergabe.</span>",
            modal_bom_controls: "<strong>Sanwa Joystick JLF & OBSF-24 Tasten</strong><span>Professionelle japanische Arcade-Steuerung, bekannt für ihre Präzision und Langlebigkeit.</span>",
            modal_bom_audio: "<strong>AIYIMA 2.1 Verstärker & 3\" Subwoofer</strong><span>Soundsystem für kraftvollen Bass und klare Retro-Soundeffekte.</span>",
            modal_bom_encoder: "<strong>Zero Delay USB-Encoder</strong><span>Sorgt für extrem niedrige Eingabelatenz von den Joysticks und Tasten zum Pi.</span>",
            modal_bom_power: "<strong>Duales Netzteil-Setup (150W + 36W)</strong><span>Separates 12V 12.5A Netzteil für die Hauptstromversorgung und 12V 3A Netzteil für das Audio.</span>",
            modal_bom_case: "<strong>3D-gedrucktes Gehäuse (Platten A bis L)</strong><span>Gedruckte Platten, die zusammen das komplette Bartop-Gehäuse bilden.</span>",
            modal_choose_step: "Wählen Sie einen Bauschritt",
            modal_parts_needed: "Teile für diesen Schritt:",
            modal_instruction_title: "Anleitung:",
            modal_btn_prev: "Zurück",
            modal_btn_next: "Weiter",
            modal_progress_prefix: "Schritt",
            modal_progress_of: "von",
            modal_tab_manual: "Bauzeichnung",
            modal_tab_photo: "Mein Foto",
            modal_tab_action: "In Aktion",
            modal_photo_placeholder_text: "Für diesen Zwischenschritt ist kein Foto verfügbar. Die Zeichnung links zeigt die Anleitung.",
            modal_tetris_title: "Klassisches Tetris spielen",
            modal_tetris_desc: "Klicken Sie, um den integrierten Retro-Emulator zu starten und zu spielen!",
            modal_tetris_start: "Spiel starten",
            modal_tetris_minimize: "&minus; Minimieren"
        },
        nodeData: {
            remote: {
                name: "Remote Client (Tailscale)",
                role: "Sicherer Fernzugriff",
                specs: {
                    "Protokoll": "WireGuard / Tailscale",
                    "Zugriff": "Verschlüsselt (Zero-Trust)",
                    "Ports": "Keine Ports geöffnet",
                    "Routing": "Über Docker-Container auf Pi 5"
                },
                description: "Wenn ich nicht zu Hause bin, verbinde ich mich über den Tailscale-VPN-Client. Da Tailscale als Docker-Container auf dem Raspberry Pi 5 läuft, kann ich sicher auf mein gesamtes Netzwerk (einschließlich meiner Proxmox-Umgebung) zugreifen, ohne dass ich eine Portweiterleitung an meinem KPN-Router konfigurieren muss."
            },
            router: {
                name: "KPN Router (Gateway)",
                role: "Zentrale Netzwerkverwaltung",
                specs: {
                    "Modell": "Standard KPN Router",
                    "Subnetz": "192.168.2.0/24",
                    "Gateway IP": "192.168.2.254",
                    "DNS-Einstellung": "Duales DNS (Pi-hole 1 & 2)"
                },
                description: "Der zentrale KPN-Router verwaltet die Internetverbindung (WAN), verteilt lokale IP-Adressen über DHCP und is manuell mit zwei DNS-Servern konfiguriert: dem primären Pi-hole auf dem Raspberry Pi 5 und dem Backup-Pi-hole auf Proxmox. Dies garantiert werbefreies Surfen und hält das Internet am Laufen, selbst wenn einer der Server offline geht."
            },
            pi: {
                name: "Raspberry Pi 5",
                role: "Hauptanwendungen & Speicher (SambaNAS)",
                specs: {
                    "Prozessor": "Broadcom BCM2712 (Quad-Core)",
                    "Speicher": "16 GB LPDDR5 RAM",
                    "Speichermedium": "32GB MicroSD + 2TB USB SSD",
                    "Montage": "Zählerschrank (3D-Halterung)"
                },
                description: "Der Raspberry Pi 5 läuft rund um die Uhr und hostet die wichtigsten Dienste für den Haushalt. Über Samba teilt er die 2 TB SSD als SambaNAS-Freigabe für allgemeine Backups und Medien im Netzwerk.",
                services: [
                    { name: "Home Assistant", desc: "Zentrale Smart-Home-Zentrale mit Zigbee-Integration" },
                    { name: "Plex & Jellyfin", desc: "Duale Medien-Streaming-Server" },
                    { name: "SambaNAS", desc: "SMB-Netzwerkfreigaben für Speicher und Backups" },
                    { name: "Immich", desc: "Datenschutzfreundliche Foto- und Videosicherung" },
                    { name: "BookStack Wiki", desc: "System- und Netzwerkdokumentation" },
                    { name: "Pi-hole (Primair)", desc: "Netwerkweiter Werbeblocker & primärer DNS" },
                    { name: "EZbookkeeping", desc: "Persönliches Finanzverwaltungssystem" },
                    { name: "qBittorrent & SabNZB", desc: "Download-Clients (qBittorrent hinter VPN)" },
                    { name: "Tailscale", desc: "VPN-Gateway für den Remote-Netzwerkzugriff" },
                    { name: "Uptime Kuma (Pi)", desc: "Überwacht Proxmox (Cross-Checking)" },
                    { name: "Portainer", desc: "Grafische Benutzeroberfläche für Docker-Container" }
                ]
            },
            proxmox: {
                name: "HP Thin Client T620 (Proxmox VE)",
                role: "Virtualisierungs- & Verwaltungsnode",
                specs: {
                    "Prozessor": "AMD GX-420GI Quad-Core",
                    "Speicher": "16 GB DDR3 RAM",
                    "Speichermedium": "1 TB externe Festplatte",
                    "Montage": "Zählerschrank (3D-Halterung)"
                },
                description: "Der HP Thin Client führt Proxmox VE aus und ist für die Ausführung leichterer Linux-Container (LXC) und virtueller Maschinen konfiguriert. Dies trennt die Automatisierung von der tatsächlichen Datenspeicherung auf dem Pi.",
                services: [
                    { name: "Nginx Proxy Manager", desc: "Reverse Proxy mit automatischem SSL/HTTPS" },
                    { name: "Pi-hole (Sekundär)", desc: "Backup-DNS-Server bei Pi-Wartung/Ausfällen" },
                    { name: "Sonarr & Radarr", desc: "Automatische Indizierung von Serien und Filmen" },
                    { name: "Prowlarr & Overseerr", desc: "Indexer-Verwaltung und Medienschnittstelle" },
                    { name: "Speedtest Tracker", desc: "Regelmäßige Protokollierung der Internetgeschwindigkeit" },
                    { name: "Uptime Kuma (Px)", desc: "Überwacht Pi 5 Docker-Container (Cross-Checking)" }
                ]
            },
            voice: {
                name: "ESP32-S3 Sprachassistent",
                role: "Lokale, datenschutzfreundliche Sprach-KI",
                specs: {
                    "Chipsatz": "ESP32-S3 Dual-Core Xtensa",
                    "Audio/Mikro": "ReSpeaker Lite 2-Mic Array & 3W Lautsprecher",
                    "Gehäuse": "3D-gedruckt mit akustischer Dämpfung",
                    "Verbindung": "WLAN (Lokales Netzwerk)"
                },
                description: "Ein maßgeschneiderter Sprachassistent, der vollständig lokal arbeitet (keine Google/Alexa Cloud-Verbindung). Er sendet Audiodaten über ESPHome und das Wyoming-Protokoll an Home Assistant auf dem Pi 5, wo Whisper (STT) und Piper (TTS) die Verarbeitung übernehmen."
            },
            zigbee: {
                name: "Zigbee Mesh-Netzwerk",
                role: "Drahtlose Smart-Home-Steuerung",
                specs: {
                    "Koordinator": "Sonoff Zigbee 3.0 USB Dongle Plus",
                    "Anschluss": "USB (am Raspberry Pi 5)",
                    "Protokoll": "Zigbee 3.0 (IEEE 802.15.4)",
                    "Geräte": "Smarte Glühbirnen, Sensoren und Schalter"
                },
                description: "Der Sonoff Zigbee USB Dongle dient als zentraler Koordinator des Zigbee Mesh-Netzwerks. Über Home Assistant kommunizieren alle drahtlosen Temperatursensoren, smarten Schalter und Lampen im Haus direkt und lokal mit dem System."
            },
            oracle: {
                name: "Oracle Cloud Backup",
                role: "Offsite-Archivierung & Docker-Sicherung",
                specs: {
                    "Software": "Duplicati (auf Raspberry Pi 5)",
                    "Ziel": "Oracle Cloud Object Storage (Amsterdam)",
                    "Intervall": "Tägliche verschlüsselte Sicherung",
                    "Verschlüsselung": "AES-256 (Clientseitig)"
                },
                description: "Der Raspberry Pi 5 verwendet Duplicati, um wichtige Docker-Konfigurationen, Datenbanken (wie EZbookkeeping und Bookstack) und Anwendungsdaten lokal zu verschlüsseln und sicher in den Oracle Cloud Object Storage hochzuladen."
            },
            tuxis: {
                name: "Tuxis Proxmox Backup Server (PBS)",
                role: "Offsite Disaster Recovery & VM-Schnappschüsse",
                specs: {
                    "Software": "Proxmox Backup Server (PBS) Client",
                    "Ziel": "Tuxis Cloud (niederländisches Rechenzentrum)",
                    "Intervall": "Tägliche Schnappschüsse & Backups",
                    "Aufbewahrung": "7 Tage / 4 Wochen / 12 Monaten"
                },
                description: "Der HP Thin Client T620 (Proxmox VE) verbindet sich direkt mit der externen PBS-Umgebung von Tuxis. Täglich werden inkrementelle Backups aller LXC-Container und VMs auf Blockebene mit automatischer Deduplizierung und Verschlüsselung geschrieben."
            }
        },
        arcadeSteps: [
            {
                number: 1,
                title: "Montage der rechten Seitenwand (Platte A)",
                phase: "Phase 1: Platten vorbereiten",
                parts: [
                    "Panel A (Rechte Seitenwand) (1x)",
                    "Netzteil 12V 12.5A 150W S-150-12 (1x)",
                    "USB-Encoder-Halterung (1x)",
                    "Zero-Delay-USB-Encoder (1x)",
                    "Schraube M3x6 DIN-912 & Unterlegscheibe M3 (2x)",
                    "Schraube für Kunststoff D2x12 (4x)"
                ],
                description: "Ich begann damit, Platte A (rechte Seitenwand) auf eine ebene Fläche zu legen. Als Nächstes montierte ich das große 12V 12.5A Netzteil und die 3D-gedruckte Halterung für den USB-Encoder mit M3x6 Schrauben auf der Platte. Danach befestigte ich den Zero-Delay-USB-Encoder mit den vier Kunststoffschrauben an der Halterung. Dabei achtete ich genau auf die Ausrichtung des Netzteils: Der 12V-Ausgang musste nach oben zeigen.",
                photo: "assets/logos/arcade/Stap_1_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_1.png"
            },
            {
                number: 2,
                title: "Münzeinwurf-Platte (Platte B)",
                phase: "Phase 1: Platten vorbereiten",
                parts: [
                    "Panel B (Münzeinwurf-Platte) (1x)",
                    "Sanwa-Drucktaste OBSF-24 (Rot) (1x)",
                    "M3 Vierkantmutter DIN-557 (2x)"
                ],
                description: "Ich schob zwei Vierkantmuttern M3 in die Montageschlitze an den Enden von Platte B. Dann drückte ich die rote Sanwa 24mm Drucktaste in das runde Loch auf der Vorderseite der Platte. Diese Taste fungiert als 'Insert Coin'-Taste für die Arcade-Emulation.",
                photo: "",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_2.png"
            },
            {
                number: 3,
                title: "Das Bedienfeld (Platte C)",
                phase: "Phase 1: Platten vorbereiten",
                parts: [
                    "Panel C (Bedienfeld) (1x)",
                    "Sanwa Joystick JLF-TP-8Y & Joystick-Adapter (1x)",
                    "Sanwa Drucktaste OBSF-24 (Farbig) (6x)",
                    "Mini-Schalter 12mm PBS-33b (4x farbig, 1x weiß)",
                    "Schraube M5x12 ISO-7380 & Sicherungsmutter M5 (4x)",
                    "Schraube M3x14 DIN-912 & Vierkantmutter M3 (4x)"
                ],
                description: "Ich montierte zuerst den Sanwa-Joystick auf der grünen 3D-gedruckten Joystick-Adapterplatte mit den M5-Schrauben, Unterlegscheiben und Sicherungsmuttern. Diesen Adapter befestigte ich mit vier M3x14 Schrauben und Vierkantmuttern an der Unterseite von Platte C. Dann drückte ich die 6 farbigen Sanwa-Tasten und die 5 Mini-Schalter in die Löcher auf der Oberseite des Bedienfelds.",
                photo: "",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_3.png"
            },
            {
                number: 4,
                title: "Bildschirm & Audio (Platte D & E)",
                phase: "Phase 1: Platten vorbereiten",
                parts: [
                    "Panel D (Bildschirmplatte) & Panel E (Lautsprecherplatte) (1x)",
                    "LG LCD 4:3 Display (LP097X02) + Controller-Rahmen (1x)",
                    "AIYIMA Audio-Verstärker 2.1 (1x)",
                    "Visaton Lautsprecher FR 7 - 4 Ohm (2x)",
                    "Visaton Lautsprechergitter FR 7 (2x)",
                    "Subwoofer-Halterung (1x)",
                    "Subwoofer-Einheit 3 Zoll (1x)",
                    "Schraube M3x14 DIN-912 & Vierkantmutter M3 (8x)",
                    "Schraube für Kunststoff D2x12 (4x)",
                    "Schraube für Kunststoff D3x12 (8x)"
                ],
                description: "Auf Platte D installierte ich den Bildschirm-Controller und schraubte den LG LCD-Bildschirm in den Ausschnitt. Dann montierte ich die Lautsprecher und Gitter auf Platte E. Der Audio-Verstärker wurde an seiner 3D-gedruckten Halterung befestigt und der 3-Zoll-Subwoofer wurde in seinem Gehäuse an der Unterseite von Platte E montiert.",
                photo: "",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_4.png"
            },
            {
                number: 5,
                title: "Marquee & Raspberry Pi (Platte F, G & H)",
                phase: "Phase 1: Platten vorbereiten",
                parts: [
                    "Panel F (Marquee oben) & Panel G (Marquee unten) (1x)",
                    "Panel H (Rückwand) (1x)",
                    "Raspberry Pi 4B (1x)",
                    "LED-Streifen 12V (weiß, ~20cm) (1x)",
                    "Mini-DC-Klinkenadapter (1x)",
                    "Schraube für Kunststoff D2x12 (4x)",
                    "Schraube für Kunststoff D3x12 (2x)"
                ],
                description: "Ich klebte den LED-Streifen auf die Innenseite von Platte F, um das Marquee (den Leuchtkasten oben) zu beleuchten, und schloss ihn an einen DC-Klinkenadapter an. Auf Platte H (der Rückwand) montierte ich den Raspberry Pi 4B mit vier kleinen Schrauben direkt auf den 3D-gedruckten Abstandshaltern.",
                photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_5.png"
            },
            {
                number: 6,
                title: "Verbinden der Seitenwände (Platte A, I, J & K)",
                phase: "Phase 2: Gehäuse zusammenbauen",
                parts: [
                    "Montierte Platte A (Rechte Seitenwand) (1x)",
                    "Panel I (Boden) (1x)",
                    "Panel J (Front unten) (1x)",
                    "Panel K (Deckel) (1x)",
                    "Schraube M3x14 DIN-912 & Vierkantmutter M3 (6x)"
                ],
                description: "Ich legte Platte A flach hin und schob Vierkantmuttern M3 in die Schlitze der Platten I, J und K. Als Nächstes schraubte ich diese drei Platten mit M3x14 Schrauben aufrecht auf Platte A. Dadurch entstanden die Grundform und die rechte Hälfte des Arcade-Gehäuses.",
                photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_6.png"
            },
            {
                number: 7,
                title: "Interne Platten installieren (Platte B, C, D & E)",
                phase: "Phase 2: Gehäuse zusammenbauen",
                parts: [
                    "Montierter Rahmen (Schritt 6) (1x)",
                    "Montierte Platten B, C, D & E (1x)",
                    "Schraube M3x14 DIN-912 & Vierkantmutter M3 (8x)"
                ],
                description: "Ich schob nacheinander Platte B (Münzeinwurf), Platte C (Bedienfeld), Platte D (Bildschirm) und Platte E (Lautsprecher) in die vorgesehenen Führungen der rechten Seitenwand (Platte A). Jede Platte wurde mit M3x14 Schrauben und Vierkantmuttern fest am Rahmen verankert.",
                photo: "",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_7.png"
            },
            {
                number: 8,
                title: "Verkabelung & Stromverteilung",
                phase: "Phase 3: Elektronik & Verkabelung",
                parts: [
                    "Montierter Rahmen mit allen Platten (1x)",
                    "Audio-Verstärker-Netzteil 12V 3A 36W S-36-12 (1x)",
                    "C14-Netzbuchse mit Schalter & Sicherung (1x)",
                    "USB-Kabel & Audiokabel Klinke 3.5mm auf Cinch (1x)",
                    "Verschiedene Überbrückungsdrähte & Stromkabel"
                ],
                description: "Dies war der komplexeste Schritt. Ich installierte das zweite Netzteil (12V 3A) speziell für den Verstärker, um Brummen zu minimieren. Dann verkabelte ich den C14-Netzeingang mit dem Hauptschalter und der Sicherung zu beiden Netzteilen. Ich schloss die Tasten und den Joystick an den USB-Encoder an und verband den Bildschirm-Controller, den Verstärker und die Netzteile mit dem Raspberry Pi.",
                photo: "assets/logos/arcade/Stap_8_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_8.png"
            },
            {
                number: 9,
                title: "Schließen mit linker Seitenwand (Platte L)",
                phase: "Phase 4: Fertigstellung",
                parts: [
                    "Montierter Rahmen mit Verkabelung (1x)",
                    "Panel L (Linke Seitenwand) (1x)",
                    "M3 Vierkantmutter DIN-557 (14x)",
                    "Schraube M3x14 DIN-912 (14x)"
                ],
                description: "Nachdem ich alle Verkabelungen und Stromkreise überprüft hatte, legte ich Platte L (linke Seitenwand) auf das Gehäuse. Ich schob 14 Vierkantmuttern M3 in die entsprechenden Montageschlitze der verbindenden Platten (I, J, K, B, C, D, E). Dann sicherte ich Platte L mit 14 M3x14 Schrauben, um das Gehäuse vollständig zu schließen.",
                photo: "assets/logos/arcade/Stap_9_Mijn_Foto.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_9.png"
            },
            {
                number: 10,
                title: "Rückwand & Testen (Platte H)",
                phase: "Phase 4: Fertigstellung",
                parts: [
                    "Geschlossenes Arcade-Gehäuse (1x)",
                    "Montierte Platte H (Rückwand mit Pi) (1x)",
                    "Schraube M3x14 DIN-912 (4x)",
                    "Marquee-Plexiglas & Marquee-Poster (1x)"
                ],
                description: "Schließlich schob ich Platte H (Rückwand) an ihren Platz und befestigte sie mit vier M3x14 Schrauben. Ich platzierte das gedruckte Marquee-Poster hinter dem Plexiglas an der Vorderseite. Dann war es Zeit für den ersten Boot-Test: Der Raspberry Pi startete perfekt in Batocera, die Steuerung reagierte sofort und der 2.1-Sound klang fantastisch!",
                photo: "assets/logos/arcade/Stap_10_Mijn_Foto.jpg",
                inActionPhoto: "assets/logos/arcade/In_actie_tetris.jpg",
                manualImage: "assets/logos/arcade/bouwtekeningen/Stap_10.png"
            }
        ]
    }
};
