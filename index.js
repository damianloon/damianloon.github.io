// --- Network Diagram Node Data ---
const nodeData = {
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
};

// --- DOM elements ---
const interactiveNodes = document.querySelectorAll('.interactive-node');
const detailsContent = document.getElementById('details-content');

// --- Render Selected Node Details ---
function renderNodeDetails(nodeKey) {
    const data = nodeData[nodeKey];
    if (!data) return;

    // Generate specifications HTML
    let specsHtml = '';
    for (const [key, value] of Object.entries(data.specs)) {
        specsHtml += `
            <div class="spec-item">
                <span class="spec-label">${key}</span>
                <span class="spec-value">${value}</span>
            </div>
        `;
    }

    // Generate services HTML (if any exist)
    let servicesHtml = '';
    if (data.services && data.services.length > 0) {
        let items = '';
        data.services.forEach(service => {
            items += `
                <li>
                    <span class="service-dot"></span>
                    <strong>${service.name}</strong>
                    <span class="service-desc">${service.desc}</span>
                </li>
            `;
        });
        servicesHtml = `
            <h4 class="detail-section-title">Actieve Services</h4>
            <ul class="services-list">
                ${items}
            </ul>
        `;
    }

    // Combine into main details card layout
    const hasServices = data.services && data.services.length > 0;
    detailsContent.innerHTML = `
        <div class="details-content-inner ${hasServices ? 'has-services' : ''}">
            <div class="details-main-column">
                <div class="detail-header-block">
                    <h3 class="detail-node-name">${data.name}</h3>
                    <p class="detail-node-role">${data.role}</p>
                    <div class="detail-specs-grid">
                        ${specsHtml}
                    </div>
                </div>
                <div class="detail-description-block">
                    <h4 class="detail-section-title">Beschrijving & Werking</h4>
                    <p class="detail-desc">${data.description}</p>
                </div>
            </div>
            ${hasServices ? `
            <div class="details-services-column">
                ${servicesHtml}
            </div>
            ` : ''}
        </div>
    `;
}

// --- Setup Node Selection ---
interactiveNodes.forEach(node => {
    node.addEventListener('click', (e) => {
        // Remove 'selected' class from all interactive nodes
        interactiveNodes.forEach(n => n.classList.remove('selected'));

        // Find the node element (in case clicked on text/inner rect)
        const nodeGroup = e.target.closest('.interactive-node');
        if (nodeGroup) {
            nodeGroup.classList.add('selected');
            const nodeKey = nodeGroup.getAttribute('data-node');
            renderNodeDetails(nodeKey);

            // Scroll smoothly to details card
            const detailsCard = document.getElementById('details-card');
            if (detailsCard) {
                detailsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    });
});

// --- Pre-select the Raspberry Pi 5 on Page Load ---
window.addEventListener('DOMContentLoaded', () => {
    const piNode = document.querySelector('[data-node="pi"]');
    if (piNode) {
        piNode.classList.add('selected');
        renderNodeDetails('pi');
    }
});

// --- View Infrastructure and Pulse Pi/Proxmox Nodes ---
const btnViewInfrastructure = document.getElementById('btn-view-infrastructure');
if (btnViewInfrastructure) {
    btnViewInfrastructure.addEventListener('click', () => {
        const infraSection = document.getElementById('infrastructuur');
        if (infraSection) {
            infraSection.scrollIntoView({ behavior: 'smooth' });
        }

        const piNode = document.getElementById('node-pi');
        const proxmoxNode = document.getElementById('node-proxmox');

        if (piNode) piNode.classList.add('pulse-highlight');
        if (proxmoxNode) proxmoxNode.classList.add('pulse-highlight');

        setTimeout(() => {
            if (piNode) piNode.classList.remove('pulse-highlight');
            if (proxmoxNode) proxmoxNode.classList.remove('pulse-highlight');
        }, 2400);

        // Select the Pi 5 node and show its details
        interactiveNodes.forEach(n => n.classList.remove('selected'));
        if (piNode) {
            piNode.classList.add('selected');
            renderNodeDetails('pi');
        }
    });
}

// --- CV PDF Download / Print Trigger ---
const downloadCvBtn = document.getElementById('download-cv');
if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
    });
}

// --- Theme Manager (Dark/Light mode pill switch) ---
const themeToggle = document.getElementById('theme-toggle');

// Load stored theme on load
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('theme', theme);
    });
}

// --- Header Scroll Effect (fade/dim when scrolling down) ---
const header = document.querySelector('.site-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// --- 3D-Geprinte Arcade Machine Project Logic ---
const arcadeSteps = [
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
            "Display driver board & inverter (1x)",
            "Luidspreker 5W 8Ω 30x70mm & Speaker grids (2x)",
            "Schroef M3x10 (8x), M3x16 (8x) & vierkante moer M3 (11x)",
            "Schroef voor plastic D2.5x10 (6x)"
        ],
        description: "Voor het scherm schoof ik 9 vierkante M3-moeren in Panel D. Ik plaatste het LCD-scherm, sloot de LVDS-kabel aan, legde het controller-frame eroverheen en schroefde het vast met 8 M3x10 schroeven. Ook schroefde ik het driver board en de inverter aan de achterzijde vast. Voor de speakers monteerde ik de luidsprekers en roosters op Panel E met 8 M3x16 schroeven, ringen en zelfborgende moeren.",
        photo: "",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_4.png"
    },
    {
        number: 5,
        title: "Bovenpaneel & Raspberry Pi (Panel F & G)",
        phase: "Fase 1: Panelen Voorbereiden",
        parts: [
            "Panel F (Bovenpaneel) & Panel G (Elektronicapaneel) (1x)",
            "Power supply 12V 3A (1x) & LED strip support (1x)",
            "Raspberry Pi 3B & 12V naar 5V step-down converter (1x)",
            "Electronic frame (1x)",
            "Schroef M3x14 (11x), M3x10 (2x), M3x6 (8x)",
            "200mm LED-strip wit (1x)"
        ],
        description: "Voor het bovenpaneel schroefde ik de marquee LED-houder en de 12V 3A voeding op Panel F. Daarna plakte ik de witte LED-strip in de houder. Voor het elektronicapaneel monteerde ik het elektronicahouder-frame op Panel G met M3x14 schroeven. Vervolgens bevestigde ik de Raspberry Pi 3B en de 12V-naar-5V step-down converter (voor de stroomvoorziening van de Pi) met M3x6 schroeven op het frame.",
        photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_5.png"
    },
    {
        number: 6,
        title: "Service- & Ventilatiepanelen (Panel H, I & J)",
        phase: "Fase 2: Assemblage",
        parts: [
            "Panel H (Ventilatie), Panel I (Achterframe) & Panel J (Service) (1x)",
            "AIYIMA 2.1 versterker board (1x) & Service plate (1x)",
            "Stroomaansluiting met schakelaar & Fused plug (1x)",
            "Dubbele USB-verlengkabel 30cm (1x)",
            "Schroef M3x8 (12x) & moer M3 (2x), M3 vierkante moer (12x)"
        ],
        description: "Voor de ventilatie en het frame schoof ik vierkante moeren in de slots van Panel H en I. Voor het servicepaneel schroefde ik de serviceplaat op Panel J. Vervolgens bevestigde ik de stroomaansluiting met schakelaar en zekering met M3-moeren en schroeven. Tot slot monteerde ik de AIYIMA versterker en de dubbele USB-verlengkabel op de serviceplaat, zodat de knoppen en poorten vanaf de buitenkant bereikbaar zijn.",
        photo: "assets/logos/arcade/Stap_5-6_Mijn_Foto.jpg",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_6.png"
    },
    {
        number: 7,
        title: "Bodempaneel & Subwoofer (Panel K)",
        phase: "Fase 2: Assemblage",
        parts: [
            "Panel K (Bodempaneel) (1x)",
            "AIYIMA 3\" subwoofer 25W 4Ω (1x)",
            "LED-strip houders (2x) & 100mm LED-strips kleur (2x)",
            "Silicone voetjes 8mm (4x)",
            "Schroef M4x16 (4x) & borgmoer M4 (4x), Schroef M3x8 (8x)"
        ],
        description: "Ik schoof 11 vierkante moeren in de sleuven van Panel K. Vervolgens bevestigde ik de AIYIMA subwoofer aan de bovenzijde met vier M4x16 bouten en zelfborgende moeren. Daarna draaide ik het paneel om, monteerde de twee LED-houders met de gekleurde RGB led-strips, plakte de vier siliconen voetjes op de hoeken en sloot de beschermplaat aan de onderkant met 8 M3x8 schroeven.",
        photo: "assets/logos/arcade/photo-assembly-2.jpg",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_7.png"
    },
    {
        number: 8,
        title: "Bekabeling & Sluiten Kast",
        phase: "Fase 3: Bekabeling & Afwerking",
        parts: [
            "Voorbereide panelen H, I, J, K en L (1x)",
            "Back service cover (Achterklep) (1x)",
            "HDMI-kabel 30cm & Audiokabel 3.5mm jack (1x)",
            "Schroef M3x14 (33x) & Schroef M3x8 ISO-7380 (12x)"
        ],
        description: "Ik sloot alle kabels intern aan: de knoppen op de encoder, HDMI tussen de Pi en het scherm, de audiojack naar de versterker, en de stroomkabels van de voedingen naar de step-down converter, versterker en LED's. Daarna schoof ik Panel J (service), K (bodem) en H (ventilatie) op hun plek. Ik legde de kast op zijn kant en schroefde het linkerzijpaneel (Panel L) vast met 19 M3x14 schroeven. Tot slot monteerde ik het achterframe (Panel I) en sloot ik de kast met de Space Invader achterklep met 12 M3x8 schroeven.",
        photo: "assets/logos/arcade/Stap_8_Mijn_Foto.jpg",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_9.png"
    },
    {
        number: 9,
        title: "Samenvoegen Behuizing",
        phase: "Fase 3: Bekabeling & Afwerking",
        parts: [
            "Voorbereide panelen A, B, C, D, E, F en G (1x)",
            "Schroef M3x14 DIN-912 (11x)"
        ],
        description: "Ik legde het rechterzijpaneel (Panel A) plat. Danach schoof ik de nokken van Panel B (muntinworp) en Panel C (controls) in de sleuven en schroefde ze vast met M3x14 schroeven. Vervolgens lijnde ik Panel D (scherm) en Panel E (speakers) uit en schroefde ze eveneens vast. Ik schoof Panel F (top) erin en zette deze vast. Tot slot schoof ik Panel G (elektronica) in de geleiders (dit paneel heb ik niet vastgeschroefd voor gemakkelijke toegang).",
        photo: "assets/logos/arcade/photo-assembly-1.jpg",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_8.png"
    },
    {
        number: 10,
        title: "Het Eindresultaat!",
        phase: "Fase 3: Bekabeling & Afwerking",
        parts: [
            "Geassembleerde Mini Arcade Machine (1x)",
            "Netsnoer (1x)",
            "128 GB Micro-SD kaart met Batocera OS (1x)"
        ],
        description: "Ik plaatste de micro-SD-kaart met Batocera in de Raspberry Pi 3B. Vervolgens sloot ik het netsnoer aan op het servicepaneel aan de achterkant, zette de schakelaar om en startte de machine op. De marquee en bodemverlichting lichtten op, Batocera startte netjes op en ik kon direct genieten van duizenden klassieke retro games met de authentieke en uiterst precieze Sanwa-besturing!",
        photo: "assets/logos/arcade/Final-Look-Kast.jpg",
        manualImage: "assets/logos/arcade/bouwtekeningen/Stap_10.png",
        inActionPhoto: "assets/logos/arcade/In_actie_tetris.jpg"
    }
];

let currentStep = 1;
let currentImgType = 'manual'; // 'manual' or 'photo'

// DOM Elements for Arcade Modal
const arcadeModal = document.getElementById('arcade-modal');
const openArcadeBtn = document.getElementById('open-arcade-btn');
const projectArcadeCard = document.getElementById('project-arcade');
const closeArcadeBtn = document.getElementById('modal-close-btn');

const stepsMenu = document.getElementById('steps-menu');
const stepTitleDisplay = document.getElementById('step-title-display');
const stepPhaseName = document.getElementById('step-phase-name');
const stepParts = document.getElementById('step-parts');
const stepDescription = document.getElementById('step-description');
const stepCounter = document.getElementById('step-counter');
const prevStepBtn = document.getElementById('prev-step-btn');
const nextStepBtn = document.getElementById('next-step-btn');

const imgTabBtns = document.querySelectorAll('.img-tab-btn');
const manualView = document.getElementById('manual-view');
const photoView = document.getElementById('photo-view');
const stepPhoto = document.getElementById('step-photo');
const photoPlaceholder = document.getElementById('photo-placeholder');
const actionTabBtn = document.getElementById('action-tab-btn');
const actionView = document.getElementById('action-view');
const actionPhoto = document.getElementById('action-photo');

// Open and Close Modal Functions
function openModal() {
    if (arcadeModal) {
        arcadeModal.classList.add('active');
        arcadeModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
        currentStep = 1;
        currentImgType = 'manual';
        updateStepView();
    }
}

function closeModal() {
    if (arcadeModal) {
        arcadeModal.classList.remove('active');
        arcadeModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Stop Tetris game if active
        if (typeof tetrisIsActive !== 'undefined' && tetrisIsActive) {
            tetrisIsActive = false;
            if (typeof isSoftDropping !== 'undefined') isSoftDropping = false;
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (stepGrid) stepGrid.classList.remove('tetris-active');
            if (tetrisView) tetrisView.classList.remove('active');
            imgTabBtns.forEach(btn => btn.style.pointerEvents = 'auto');
        }
    }
}

// Modal open/close listeners
if (openArcadeBtn) {
    openArcadeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal();
    });
}

if (projectArcadeCard) {
    projectArcadeCard.addEventListener('click', () => {
        openModal();
    });
}

if (closeArcadeBtn) {
    closeArcadeBtn.addEventListener('click', closeModal);
}

if (arcadeModal) {
    arcadeModal.addEventListener('click', (e) => {
        if (e.target === arcadeModal) {
            closeModal();
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && arcadeModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Modal Tab Switching (Overview vs Steps)
const modalTabs = document.querySelectorAll('.modal-tab');
const tabContents = document.querySelectorAll('.tab-content');

modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        modalTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetId = `tab-${tab.getAttribute('data-tab')}`;
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Sidebar navigation generation
function initStepsMenu() {
    if (!stepsMenu) return;
    stepsMenu.innerHTML = '';
    arcadeSteps.forEach(step => {
        const btn = document.createElement('button');
        btn.className = `step-nav-item ${step.number === currentStep ? 'active' : ''}`;
        btn.setAttribute('data-step', step.number);
        btn.innerHTML = `<strong>Stap ${step.number}</strong><br>${step.title}`;
        btn.addEventListener('click', () => {
            currentStep = step.number;
            updateStepView();
        });
        stepsMenu.appendChild(btn);
    });
}

// Helper to update Tetris overlay visibility based on step and image type
function updateTetrisOverlayState(stepNum, imgType) {
    if (typeof tetrisStartOverlay === 'undefined' || !tetrisStartOverlay) return;
    
    if (stepNum === 10 && imgType === 'action') {
        tetrisStartOverlay.style.display = 'flex';
        if (actionView) {
            actionView.style.cursor = 'pointer';
            actionView.onclick = openTetrisFromFrame;
        }
    } else {
        tetrisStartOverlay.style.display = 'none';
        if (actionView) {
            actionView.style.cursor = 'default';
            actionView.onclick = null;
        }
        if (typeof tetrisIsActive !== 'undefined' && tetrisIsActive) {
            tetrisIsActive = false;
            if (typeof isSoftDropping !== 'undefined') isSoftDropping = false;
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (stepGrid) stepGrid.classList.remove('tetris-active');
            if (tetrisView) tetrisView.classList.remove('active');
            imgTabBtns.forEach(btn => btn.style.pointerEvents = 'auto');
        }
    }
}

// Update Active Step Display
function updateStepView() {
    const step = arcadeSteps.find(s => s.number === currentStep);
    if (!step) return;

    // Update active class on sidebar buttons
    const menuButtons = document.querySelectorAll('.step-nav-item');
    menuButtons.forEach(btn => {
        const stepNum = parseInt(btn.getAttribute('data-step'), 10);
        if (stepNum === currentStep) {
            btn.classList.add('active');
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Step Text Fields
    if (stepTitleDisplay) stepTitleDisplay.textContent = `Stap ${step.number}: ${step.title}`;
    if (stepPhaseName) stepPhaseName.textContent = step.phase;
    if (stepDescription) stepDescription.textContent = step.description;
    if (stepCounter) stepCounter.textContent = `Stap ${step.number} van ${arcadeSteps.length}`;

    // Update Parts List
    if (stepParts) {
        stepParts.innerHTML = '';
        step.parts.forEach(part => {
            const li = document.createElement('li');
            li.textContent = part;
            stepParts.appendChild(li);
        });
    }

    // Prev/Next buttons disabled state
    if (prevStepBtn) prevStepBtn.disabled = currentStep === 1;
    if (nextStepBtn) nextStepBtn.disabled = currentStep === arcadeSteps.length;

    // Render the SVG manual drawing
    renderStepSvg(step.number);

    // Update Photo or Placeholder
    const photoTabBtn = document.getElementById('photo-tab-btn');
    if (step.photo) {
        if (stepPhoto) {
            stepPhoto.src = step.photo;
            stepPhoto.style.display = 'block';
        }
        if (photoPlaceholder) photoPlaceholder.style.display = 'none';
        if (photoTabBtn) {
            photoTabBtn.classList.add('has-photo');
            photoTabBtn.innerHTML = 'Mijn Foto';
        }
    } else {
        if (stepPhoto) {
            stepPhoto.src = '';
            stepPhoto.style.display = 'none';
        }
        if (photoPlaceholder) photoPlaceholder.style.display = 'flex';
        if (photoTabBtn) {
            photoTabBtn.classList.remove('has-photo');
            photoTabBtn.innerHTML = 'Mijn Foto';
        }
    }

    // Update Action Photo or Hide Button
    if (step.inActionPhoto) {
        if (actionPhoto) {
            actionPhoto.src = step.inActionPhoto;
        }
        if (actionTabBtn) {
            actionTabBtn.style.display = 'inline-block';
        }
    } else {
        if (actionPhoto) {
            actionPhoto.src = '';
        }
        if (actionTabBtn) {
            actionTabBtn.style.display = 'none';
        }
        if (currentImgType === 'action') {
            currentImgType = 'manual';
        }
    }

    // Handle Tetris start overlay on Step 10
    updateTetrisOverlayState(step.number, currentImgType);
    
    // Remove click-to-play handlers from manual and photo views
    if (manualView) {
        manualView.style.cursor = 'default';
        manualView.onclick = null;
    }
    if (photoView) {
        photoView.style.cursor = 'default';
        photoView.onclick = null;
    }

    // Keep active visual selection
    showImageView(currentImgType);
}

// Show drawing vs actual photo vs action photo
function showImageView(type) {
    currentImgType = type;
    imgTabBtns.forEach(btn => {
        if (btn.getAttribute('data-img-type') === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (type === 'manual') {
        if (manualView) manualView.classList.add('active');
        if (photoView) photoView.classList.remove('active');
        if (actionView) actionView.classList.remove('active');
    } else if (type === 'photo') {
        if (manualView) manualView.classList.remove('active');
        if (photoView) photoView.classList.add('active');
        if (actionView) actionView.classList.remove('active');
    } else if (type === 'action') {
        if (manualView) manualView.classList.remove('active');
        if (photoView) photoView.classList.remove('active');
        if (actionView) actionView.classList.add('active');
    }

    // Toggle Tetris start overlay display based on current step and type
    updateTetrisOverlayState(currentStep, type);
}

imgTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showImageView(btn.getAttribute('data-img-type'));
    });
});

if (prevStepBtn) {
    prevStepBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateStepView();
        }
    });
}

if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => {
        if (currentStep < arcadeSteps.length) {
            currentStep++;
            updateStepView();
        }
    });
}

// Generate the vector schematic for the active step
function renderStepSvg(stepNum) {
    const container = document.getElementById('manual-illustration-container');
    if (!container) return;

    const step = arcadeSteps.find(s => s.number === stepNum);
    if (!step || !step.manualImage) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = `<img src="${step.manualImage}" alt="Bouwtekening Stap ${stepNum}" />`;
}

// Initialize step menu on page load
window.addEventListener('DOMContentLoaded', () => {
    initStepsMenu();
});

// --- Tetris Game Engine & Easter Egg Logic ---
const tetrisStartOverlay = document.getElementById('tetris-start-overlay');
const startTetrisBtn = document.getElementById('start-tetris-btn');
const tetrisView = document.getElementById('tetris-view');
const tetrisMinimizeBtn = document.getElementById('tetris-minimize-btn');
const tetrisCanvas = document.getElementById('tetris-canvas');
const tetrisNextCanvas = document.getElementById('tetris-next-canvas');
const tetrisScore = document.getElementById('tetris-score');
const tetrisLines = document.getElementById('tetris-lines');
const tetrisLevel = document.getElementById('tetris-level');
const stepGrid = document.querySelector('.step-grid');

let tetrisCtx = null;
let tetrisNextCtx = null;
let tetrisBoard = [];
let tetrisActivePiece = null;
let tetrisNextPiece = null;
let tetrisScoreVal = 0;
let tetrisLinesVal = 0;
let tetrisLevelVal = 0;
let tetrisGameOver = false;
let tetrisIsPaused = false;
let tetrisIsActive = false;
let lastTime = 0;
let dropCounter = 0;
let isSoftDropping = false;

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 20;

const COLORS = [
    null,
    '#BEA36B', // Golden accent (NES style highlight)
    '#1863F6', // Royal blue
    '#ef4444', // Red
    '#10b981', // Green
    '#a000f0', // Purple
    '#f0a000', // Orange
    '#f0f000'  // Yellow
];

const SHAPES = [
    null,
    [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], // I
    [[1,0,0],[1,1,1],[0,0,0]],                 // J
    [[0,0,1],[1,1,1],[0,0,0]],                 // L
    [[1,1],[1,1]],                             // O
    [[0,1,1],[1,1,0],[0,0,0]],                 // S
    [[1,1,0],[0,1,1],[0,0,0]],                 // Z
    [[0,1,0],[1,1,1],[0,0,0]]                  // T
];

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function drawBlock(ctx, x, y, colorId, size = BLOCK_SIZE) {
    const color = COLORS[colorId];
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);
    
    // Light reflection border (retro look)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillRect(x * size, y * size, size, 2);
    ctx.fillRect(x * size, y * size, 2, size);
    
    // Shadow bevel (retro look)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(x * size, (y + 1) * size - 2, size, 2);
    ctx.fillRect((x + 1) * size - 2, y * size, 2, size);
}

function collide(board, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (board[y + o.y] === undefined ||
                board[y + o.y][x + o.x] === undefined ||
                board[y + o.y][x + o.x] !== 0)) {
                return true;
            }
        }
    }
    return false;
}

function rotateMatrix(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }
    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

function randomPiece() {
    const pieces = 'ILJSZTO';
    const rand = pieces[Math.floor(Math.random() * pieces.length)];
    let matrix;
    let colorId;
    if (rand === 'I') { matrix = SHAPES[1]; colorId = 1; }
    else if (rand === 'J') { matrix = SHAPES[2]; colorId = 2; }
    else if (rand === 'L') { matrix = SHAPES[3]; colorId = 3; }
    else if (rand === 'O') { matrix = SHAPES[4]; colorId = 4; }
    else if (rand === 'S') { matrix = SHAPES[5]; colorId = 5; }
    else if (rand === 'Z') { matrix = SHAPES[6]; colorId = 6; }
    else if (rand === 'T') { matrix = SHAPES[7]; colorId = 7; }
    
    return {
        matrix: JSON.parse(JSON.stringify(matrix)),
        colorId: colorId
    };
}

function playerReset() {
    if (!tetrisNextPiece) {
        tetrisNextPiece = randomPiece();
    }
    tetrisActivePiece = tetrisNextPiece;
    tetrisActivePiece.pos = { x: Math.floor(COLS / 2) - Math.floor(tetrisActivePiece.matrix[0].length / 2), y: 0 };
    tetrisNextPiece = randomPiece();
    
    drawNext();
    
    if (collide(tetrisBoard, tetrisActivePiece)) {
        tetrisGameOver = true;
        tetrisIsActive = false;
        draw();
    }
}

function playerMove(dir) {
    tetrisActivePiece.pos.x += dir;
    if (collide(tetrisBoard, tetrisActivePiece)) {
        tetrisActivePiece.pos.x -= dir;
    }
}

function playerRotate(dir) {
    const pos = tetrisActivePiece.pos.x;
    let offset = 1;
    rotateMatrix(tetrisActivePiece.matrix, dir);
    while (collide(tetrisBoard, tetrisActivePiece)) {
        tetrisActivePiece.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > tetrisActivePiece.matrix[0].length) {
            rotateMatrix(tetrisActivePiece.matrix, -dir);
            tetrisActivePiece.pos.x = pos;
            return;
        }
    }
}

function getDropInterval() {
    if (isSoftDropping) {
        return 40;
    }
    const intervals = [800, 720, 630, 550, 470, 380, 300, 220, 130, 100];
    return intervals[Math.min(tetrisLevelVal, 9)];
}

function playerDrop() {
    tetrisActivePiece.pos.y++;
    if (collide(tetrisBoard, tetrisActivePiece)) {
        tetrisActivePiece.pos.y--;
        merge(tetrisBoard, tetrisActivePiece);
        arenaSweep();
        playerReset();
    }
    dropCounter = 0;
}

function playerHardDrop() {
    while (!collide(tetrisBoard, tetrisActivePiece)) {
        tetrisActivePiece.pos.y++;
        tetrisScoreVal += 2;
    }
    tetrisActivePiece.pos.y--;
    merge(tetrisBoard, tetrisActivePiece);
    arenaSweep();
    playerReset();
    dropCounter = 0;
}

function merge(board, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                board[y + player.pos.y][x + player.pos.x] = player.colorId;
            }
        });
    });
}

function arenaSweep() {
    let rowCount = 0;
    outer: for (let y = tetrisBoard.length - 1; y >= 0; --y) {
        for (let x = 0; x < tetrisBoard[y].length; ++x) {
            if (tetrisBoard[y][x] === 0) {
                continue outer;
            }
        }
        
        const row = tetrisBoard.splice(y, 1)[0].fill(0);
        tetrisBoard.unshift(row);
        ++y;
        rowCount++;
    }
    
    if (rowCount > 0) {
        tetrisLinesVal += rowCount;
        const scoreTable = [0, 40, 100, 300, 1200];
        tetrisScoreVal += scoreTable[Math.min(rowCount, 4)] * (tetrisLevelVal + 1);
        tetrisLevelVal = Math.floor(tetrisLinesVal / 10);
        updateDisplays();
    }
}

function updateDisplays() {
    if (tetrisScore) tetrisScore.textContent = String(tetrisScoreVal).padStart(6, '0');
    if (tetrisLines) tetrisLines.textContent = String(tetrisLinesVal).padStart(3, '0');
    if (tetrisLevel) tetrisLevel.textContent = String(tetrisLevelVal).padStart(2, '0');
}

function drawNext() {
    if (!tetrisNextCtx) return;
    tetrisNextCtx.clearRect(0, 0, tetrisNextCanvas.width, tetrisNextCanvas.height);
    
    if (tetrisNextPiece) {
        const matrix = tetrisNextPiece.matrix;
        const size = 10;
        const offsetX = (tetrisNextCanvas.width - matrix[0].length * size) / 2;
        const offsetY = (tetrisNextCanvas.height - matrix.length * size) / 2;
        
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    drawBlock(tetrisNextCtx, (offsetX / size) + x, (offsetY / size) + y, tetrisNextPiece.colorId, size);
                }
            });
        });
    }
}

function draw() {
    if (!tetrisCtx) return;
    tetrisCtx.fillStyle = '#000';
    tetrisCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
    
    // Draw background grid lines
    tetrisCtx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    tetrisCtx.lineWidth = 1;
    for (let c = 0; c <= COLS; c++) {
        tetrisCtx.beginPath();
        tetrisCtx.moveTo(c * BLOCK_SIZE, 0);
        tetrisCtx.lineTo(c * BLOCK_SIZE, tetrisCanvas.height);
        tetrisCtx.stroke();
    }
    for (let r = 0; r <= ROWS; r++) {
        tetrisCtx.beginPath();
        tetrisCtx.moveTo(0, r * BLOCK_SIZE);
        tetrisCtx.lineTo(tetrisCanvas.width, r * BLOCK_SIZE);
        tetrisCtx.stroke();
    }
    
    // Draw grid blocks
    tetrisBoard.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                drawBlock(tetrisCtx, x, y, value);
            }
        });
    });
    
    // Draw falling piece
    if (tetrisActivePiece) {
        tetrisActivePiece.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    drawBlock(tetrisCtx, x + tetrisActivePiece.pos.x, y + tetrisActivePiece.pos.y, tetrisActivePiece.colorId);
                }
            });
        });
    }
    
    // Overlays
    if (tetrisIsPaused && !tetrisGameOver) {
        tetrisCtx.fillStyle = 'rgba(0, 0, 0, 0.65)';
        tetrisCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
        tetrisCtx.fillStyle = '#BEA36B';
        tetrisCtx.font = 'bold 15px monospace';
        tetrisCtx.textAlign = 'center';
        tetrisCtx.fillText('GEPAUZEERD', tetrisCanvas.width / 2, tetrisCanvas.height / 2);
    }
    
    if (tetrisGameOver) {
        tetrisCtx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        tetrisCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
        
        tetrisCtx.fillStyle = '#ef4444';
        tetrisCtx.font = 'bold 18px monospace';
        tetrisCtx.textAlign = 'center';
        tetrisCtx.fillText('GAME OVER', tetrisCanvas.width / 2, tetrisCanvas.height / 2 - 10);
        
        tetrisCtx.fillStyle = '#ffffff';
        tetrisCtx.font = '10px monospace';
        tetrisCtx.fillText('Druk op SPATIE', tetrisCanvas.width / 2, tetrisCanvas.height / 2 + 15);
        tetrisCtx.fillText('om te herstarten', tetrisCanvas.width / 2, tetrisCanvas.height / 2 + 28);
    }
}

function togglePause() {
    tetrisIsPaused = !tetrisIsPaused;
    if (!tetrisIsPaused) {
        lastTime = performance.now();
        requestAnimationFrame(update);
    } else {
        draw();
    }
}

function update(time = 0) {
    if (!tetrisIsActive || tetrisIsPaused || tetrisGameOver) return;
    
    const deltaTime = time - lastTime;
    lastTime = time;
    
    dropCounter += deltaTime;
    if (dropCounter > getDropInterval()) {
        playerDrop();
    }
    
    draw();
    requestAnimationFrame(update);
}

function startLoop() {
    lastTime = performance.now();
    tetrisIsActive = true;
    tetrisIsPaused = false;
    tetrisGameOver = false;
    requestAnimationFrame(update);
}

function initGame() {
    tetrisBoard = createMatrix(COLS, ROWS);
    tetrisScoreVal = 0;
    tetrisLinesVal = 0;
    tetrisLevelVal = 0;
    tetrisGameOver = false;
    tetrisIsPaused = false;
    tetrisNextPiece = null;
    updateDisplays();
    playerReset();
    startLoop();
}

function handleKeyDown(e) {
    if (!tetrisIsActive && !tetrisGameOver) return;
    
    const activeKeys = ['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'KeyA', 'KeyD', 'KeyS', 'KeyW', 'Space', 'KeyP', 'Escape'];
    if (activeKeys.includes(e.code) || activeKeys.includes(e.key)) {
        e.preventDefault();
    }
    
    if (tetrisGameOver) {
        if (e.code === 'Space' || e.key === ' ') {
            initGame();
        }
        return;
    }
    
    if (e.code === 'KeyP' || e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
        togglePause();
        return;
    }
    
    if (tetrisIsPaused) return;
    
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft' || e.code === 'KeyA' || e.key === 'a' || e.key === 'A') {
        playerMove(-1);
    } else if (e.code === 'ArrowRight' || e.key === 'ArrowRight' || e.code === 'KeyD' || e.key === 'd' || e.key === 'D') {
        playerMove(1);
    } else if (e.code === 'ArrowDown' || e.key === 'ArrowDown' || e.code === 'KeyS' || e.key === 's' || e.key === 'S') {
        if (!isSoftDropping) {
            isSoftDropping = true;
            playerDrop();
        }
    } else if (e.code === 'ArrowUp' || e.key === 'ArrowUp' || e.code === 'KeyW' || e.key === 'w' || e.key === 'W' || e.code === 'Space' || e.key === ' ') {
        playerRotate(1);
    }
}

function handleKeyUp(e) {
    if (e.code === 'ArrowDown' || e.key === 'ArrowDown' || e.code === 'KeyS' || e.key === 's' || e.key === 'S') {
        isSoftDropping = false;
    }
}

function openTetrisFromFrame() {
    if (currentStep === 10 && currentImgType === 'action' && startTetrisBtn) {
        startTetrisBtn.click();
    }
}

if (startTetrisBtn) {
    startTetrisBtn.addEventListener('click', () => {
        if (tetrisStartOverlay) tetrisStartOverlay.style.display = 'none';
        if (stepGrid) stepGrid.classList.add('tetris-active');
        
        if (manualView) manualView.classList.remove('active');
        if (photoView) photoView.classList.remove('active');
        if (actionView) actionView.classList.remove('active');
        if (tetrisView) tetrisView.classList.add('active');
        
        imgTabBtns.forEach(btn => btn.style.pointerEvents = 'none');
        
        if (!tetrisCtx && tetrisCanvas) {
            tetrisCanvas.width = COLS * BLOCK_SIZE;
            tetrisCanvas.height = ROWS * BLOCK_SIZE;
            tetrisCtx = tetrisCanvas.getContext('2d');
        }
        if (!tetrisNextCtx && tetrisNextCanvas) {
            tetrisNextCtx = tetrisNextCanvas.getContext('2d');
        }
        
        initGame();
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    });
}

if (tetrisMinimizeBtn) {
    tetrisMinimizeBtn.addEventListener('click', () => {
        tetrisIsActive = false;
        isSoftDropping = false;
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
        
        if (stepGrid) stepGrid.classList.remove('tetris-active');
        if (tetrisView) tetrisView.classList.remove('active');
        
        imgTabBtns.forEach(btn => btn.style.pointerEvents = 'auto');
        showImageView('action');
        
        if (tetrisStartOverlay) tetrisStartOverlay.style.display = 'flex';
    });
}
