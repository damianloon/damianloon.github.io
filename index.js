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
        description: "Begin met het leggen van Panel A (rechterzijpaneel) op een vlakke ondergrond. Monteer de grote 12V 12.5A voeding en de 3D-geprinte support voor de USB-encoder op het paneel met M3x6 schroeven. Bevestig vervolgens de Zero Delay USB-encoder op de support met de vier plastic schroeven. Let op de oriëntatie van de voeding: de 12V-uitgang moet naar de bovenkant wijzen.",
        photo: ""
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
        description: "Schuif twee vierkante M3-moeren in de montage-slots aan de uiteinden van Panel B. Druk vervolgens de rode Sanwa 24mm drukknop in het ronde gat aan de voorzijde van het paneel. Deze knop fungeert als de 'Insert Coin' knop voor arcade-emulatie.",
        photo: ""
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
        description: "Assembleer eerst de Sanwa joystick op de groene 3D-geprinte joystick adapterplaat met de M5-bouten, sluitringen en borgmoeren. Bevestig deze adapter aan de onderzijde van Panel C met vier M3x14 schroeven en vierkante moeren. Druk daarna de 6 gekleurde Sanwa-knoppen en de 5 mini-schakelaars in de gaten aan de bovenzijde van het bedieningspaneel.",
        photo: ""
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
        description: "Scherm: Schuif 9 vierkante M3-moeren in Panel D. Plaats het LCD-scherm, sluit de LVDS-kabel aan, leg het controller-frame eroverheen en schroef het vast met 8 M3x10 schroeven. Schroef het driver board en de inverter aan de achterzijde vast. Speakers: Monteer de luidsprekers en roosters op Panel E met 8 M3x16 schroeven, ringen en zelfborgende moeren.",
        photo: ""
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
        description: "Bovenpaneel: Schroef de marquee LED-houder en de 12V 3A voeding op Panel F. Plak de witte LED-strip in de houder. Elektronicapaneel: Monteer het elektronicahouder-frame op Panel G met M3x14 schroeven. Bevestig de Raspberry Pi 3B en de 12V-naar-5V step-down converter (voor stroomvoorziening van de Pi) met M3x6 schroeven op het frame.",
        photo: ""
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
        description: "Ventilatie & Frame: Schuif vierkante moeren in de slots van Panel H en I. Servicepaneel: Schroef de serviceplaat op Panel J. Bevestig de stroomaansluiting met schakelaar en zekering met M3-moeren en schroeven. Monteer de AIYIMA versterker en de dubbele USB-verlengkabel op de serviceplaat, zodat de knoppen en poorten aan de buitenkant bereikbaar zijn.",
        photo: ""
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
        description: "Schuif 11 vierkante moeren in de sleuven van Panel K. Bevestig de AIYIMA subwoofer aan de bovenzijde met vier M4x16 bouten en zelfborgende moeren. Draai het paneel om, monteer de twee LED-houders met de gekleurde RGB led-strips, plak de vier siliconen voetjes op de hoeken en sluit de beschermplaat aan de onderkant met 8 M3x8 schroeven.",
        photo: "assets/logos/arcade/photo-assembly-2.jpg"
    },
    {
        number: 8,
        title: "Samenvoegen Behuizing",
        phase: "Fase 2: Assemblage",
        parts: [
            "Voorbereide panelen A, B, C, D, E, F en G (1x)",
            "Schroef M3x14 DIN-912 (11x)"
        ],
        description: "Leg het rechterzijpaneel (Panel A) plat. Schuif de nokken van Panel B (muntinworp) en Panel C (controls) in de sleuven en schroef ze vast met M3x14 schroeven. Lijn vervolgens Panel D (scherm) en Panel E (speakers) uit en schroef ze eveneens vast. Schuif Panel F (top) erin en zet deze vast. Schuif till slot Panel G (elektronica) in de geleiders (dit paneel wordt niet geschroefd voor gemakkelijke toegang).",
        photo: "assets/logos/arcade/photo-assembly-1.jpg"
    },
    {
        number: 9,
        title: "Bekabeling & Sluiten Kast",
        phase: "Fase 3: Bekabeling & Afwerking",
        parts: [
            "Voorbereide panelen H, I, J, K en L (1x)",
            "Back service cover (Achterklep) (1x)",
            "HDMI-kabel 30cm & Audiokabel 3.5mm jack (1x)",
            "Schroef M3x14 (33x) & Schroef M3x8 ISO-7380 (12x)"
        ],
        description: "Sluit alle kabels intern aan: de knoppen op de encoder, HDMI tussen Pi en scherm, audio jack naar de versterker, en stroomkabels van de voedingen naar de stepdown, versterker en LED's. Schuif Panel J (service), K (bodem) en H (ventilatie) op hun plek. Leg de kast op zijn kant en schroef het linkerzijpaneel (Panel L) vast met 19 M3x14 schroeven. Monteer het achterframe (Panel I) en sluit de kast met de Space Invader achterklep met 12 M3x8 schroeven.",
        photo: "assets/logos/arcade/photo-back-cover.jpg"
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
        description: "Plaats de micro-SD-kaart met Batocera in de Raspberry Pi 3B. Sluit het netsnoer aan op het servicepaneel aan de achterkant, zet de schakelaar om en start de machine op. De marquee en bodemverlichting lichten op, Batocera start op en u kunt direct genieten van duizenden klassieke retro games met de authentieke en uiterst precieze Sanwa-besturing!",
        photo: "assets/logos/arcade/Final-Look-Kast.jpg"
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

    // Keep active visual selection
    showImageView(currentImgType);
}

// Show drawing vs actual photo
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
    } else {
        if (manualView) manualView.classList.remove('active');
        if (photoView) photoView.classList.add('active');
    }
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
    
    let svgContent = '';
    const baseProfile = "M 30,30 L 130,30 L 200,60 L 200,110 L 160,180 L 230,220 L 230,270 L 30,270 Z";
    
    svgContent = `
        <svg viewBox="0 0 260 300" class="manual-svg">
            <!-- Background Cabinet Outline -->
            <path d="${baseProfile}" class="svg-wireframe" stroke-dasharray="2 2" />
    `;

    if (stepNum === 1) {
        // Step 1: Right Panel A + Power Supply + USB Encoder
        svgContent += `
            <path d="${baseProfile}" class="svg-highlight" fill="rgba(190, 163, 107, 0.05)" />
            <!-- Power Supply -->
            <rect x="50" y="90" width="35" height="90" rx="3" class="svg-highlight" />
            <line x1="50" y1="105" x2="85" y2="105" class="svg-highlight" />
            <line x1="50" y1="120" x2="85" y2="120" class="svg-highlight" />
            <line x1="50" y1="135" x2="85" y2="135" class="svg-highlight" />
            <!-- USB Encoder -->
            <rect x="100" y="200" width="30" height="20" rx="2" class="svg-highlight" fill="rgba(16, 185, 129, 0.1)" />
            <circle cx="106" cy="206" r="2" class="svg-highlight" />
            <circle cx="124" cy="206" r="2" class="svg-highlight" />
        `;
    } else if (stepNum === 2) {
        // Step 2: Panel B (Coin Panel) + Coin Button
        svgContent += `
            <!-- Placed Panel A -->
            <path d="${baseProfile}" class="svg-placed" />
            <!-- Panel B -->
            <line x1="230" y1="220" x2="230" y2="270" class="svg-highlight" stroke-width="4" />
            <!-- Coin Button -->
            <circle cx="238" cy="245" r="5" class="svg-highlight" fill="#ef4444" />
        `;
    } else if (stepNum === 3) {
        // Step 3: Panel C (Control Panel) + Joystick + Buttons
        svgContent += `
            <!-- Placed Parts -->
            <path d="${baseProfile}" class="svg-placed" />
            <line x1="230" y1="220" x2="230" y2="270" class="svg-placed" stroke-width="3" />
            <!-- Panel C -->
            <line x1="160" y1="180" x2="230" y2="220" class="svg-highlight" stroke-width="4" />
            <!-- Joystick -->
            <line x1="195" y1="200" x2="205" y2="175" class="svg-highlight" />
            <circle cx="205" cy="175" r="7" class="svg-highlight" fill="#ef4444" />
            <!-- Buttons -->
            <circle cx="178" cy="192" r="3" class="svg-highlight" />
            <circle cx="188" cy="198" r="3" class="svg-highlight" />
            <circle cx="215" cy="212" r="3" class="svg-highlight" />
        `;
    } else if (stepNum === 4) {
        // Step 4: Panel D & E (Screen & Speaker Panels)
        svgContent += `
            <!-- Placed Parts -->
            <path d="${baseProfile}" class="svg-placed" />
            <line x1="230" y1="220" x2="230" y2="270" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="230" y2="220" class="svg-placed" stroke-width="3" />
            
            <!-- Panel D (Screen Panel) -->
            <line x1="160" y1="180" x2="200" y2="110" class="svg-highlight" stroke-width="4" />
            <!-- LCD Screen Frame -->
            <rect x="170" y="125" width="20" height="40" transform="rotate(-30 170 125)" class="svg-highlight" fill="rgba(24, 99, 246, 0.1)" />
            
            <!-- Panel E (Speaker Panel) -->
            <line x1="200" y1="110" x2="200" y2="60" class="svg-highlight" stroke-width="4" />
            <!-- Speakers -->
            <ellipse cx="200" cy="75" rx="4" ry="8" class="svg-highlight" />
            <ellipse cx="200" cy="95" rx="4" ry="8" class="svg-highlight" />
        `;
    } else if (stepNum === 5) {
        // Step 5: Panel F (Top Panel) & Panel G (Pi / Electronics)
        svgContent += `
            <!-- Placed Parts -->
            <path d="${baseProfile}" class="svg-placed" />
            <line x1="230" y1="220" x2="230" y2="270" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="230" y2="220" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="200" y2="110" class="svg-placed" stroke-width="3" />
            <line x1="200" y1="110" x2="200" y2="60" class="svg-placed" stroke-width="3" />
            
            <!-- Panel F (Top Panel) -->
            <line x1="130" y1="30" x2="200" y2="60" class="svg-highlight" stroke-width="4" />
            
            <!-- Panel G (Electronics Panel Inside) -->
            <line x1="65" y1="90" x2="65" y2="220" class="svg-highlight" stroke-width="4" />
            <!-- Raspberry Pi -->
            <rect x="58" y="130" width="14" height="28" rx="2" class="svg-highlight" fill="rgba(16, 185, 129, 0.1)" />
            <rect x="58" y="170" width="14" height="20" rx="1" class="svg-highlight" />
        `;
    } else if (stepNum === 6) {
        // Step 6: Panel H, I & J (Service, Vent, Back Frame)
        svgContent += `
            <!-- Placed Parts -->
            <path d="${baseProfile}" class="svg-placed" />
            <line x1="230" y1="220" x2="230" y2="270" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="230" y2="220" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="200" y2="110" class="svg-placed" stroke-width="3" />
            <line x1="200" y1="110" x2="200" y2="60" class="svg-placed" stroke-width="3" />
            <line x1="130" y1="30" x2="200" y2="60" class="svg-placed" stroke-width="3" />
            <line x1="65" y1="90" x2="65" y2="220" class="svg-placed" stroke-width="2" />
            
            <!-- Panel H (Ventilation Panel) -->
            <line x1="30" y1="30" x2="30" y2="80" class="svg-highlight" stroke-width="4" />
            <!-- Vent Lines -->
            <line x1="26" y1="45" x2="34" y2="45" class="svg-highlight" stroke-width="1" />
            <line x1="26" y1="55" x2="34" y2="55" class="svg-highlight" stroke-width="1" />
            <line x1="26" y1="65" x2="34" y2="65" class="svg-highlight" stroke-width="1" />
            
            <!-- Panel I (Back Frame) -->
            <line x1="30" y1="80" x2="30" y2="220" class="svg-highlight" stroke-width="3" />
            
            <!-- Panel J (Service Panel) -->
            <line x1="30" y1="220" x2="30" y2="270" class="svg-highlight" stroke-width="4" />
            <!-- Power Socket Knob -->
            <rect x="25" y="240" width="10" height="15" class="svg-highlight" />
        `;
    } else if (stepNum === 7) {
        // Step 7: Panel K (Bottom Panel) + Subwoofer
        svgContent += `
            <!-- Placed Parts -->
            <path d="${baseProfile}" class="svg-placed" />
            <line x1="230" y1="220" x2="230" y2="270" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="230" y2="220" class="svg-placed" stroke-width="3" />
            <line x1="160" y1="180" x2="200" y2="110" class="svg-placed" stroke-width="3" />
            <line x1="200" y1="110" x2="200" y2="60" class="svg-placed" stroke-width="3" />
            <line x1="130" y1="30" x2="200" y2="60" class="svg-placed" stroke-width="3" />
            <line x1="65" y1="90" x2="65" y2="220" class="svg-placed" stroke-width="2" />
            <line x1="30" y1="30" x2="30" y2="80" class="svg-placed" stroke-width="3" />
            <line x1="30" y1="80" x2="30" y2="220" class="svg-placed" stroke-width="2" />
            <line x1="30" y1="220" x2="30" y2="270" class="svg-placed" stroke-width="3" />
            
            <!-- Panel K (Bottom Panel) -->
            <line x1="30" y1="270" x2="230" y2="270" class="svg-highlight" stroke-width="4" />
            <!-- Subwoofer speaker drawing under bottom -->
            <path d="M 100,270 A 25,25 0 0,0 150,270" class="svg-highlight" fill="rgba(190, 163, 107, 0.1)" />
            <rect x="115" y="270" width="20" height="20" class="svg-highlight" />
            <!-- Silicone Feet -->
            <circle cx="45" cy="273" r="3" class="svg-highlight" />
            <circle cx="215" cy="273" r="3" class="svg-highlight" />
        `;
    } else if (stepNum === 8) {
        // Step 8: Samenvoegen Behuizing (Showing joined panels)
        svgContent += `
            <!-- Drawing all panels joining together -->
            <path d="${baseProfile}" class="svg-placed" fill="rgba(24, 99, 246, 0.05)" stroke-width="2" />
            <line x1="230" y1="220" x2="230" y2="270" class="svg-highlight" stroke-width="3" />
            <line x1="160" y1="180" x2="230" y2="220" class="svg-highlight" stroke-width="3" />
            <line x1="160" y1="180" x2="200" y2="110" class="svg-highlight" stroke-width="3" />
            <line x1="200" y1="110" x2="200" y2="60" class="svg-highlight" stroke-width="3" />
            <line x1="130" y1="30" x2="200" y2="60" class="svg-highlight" stroke-width="3" />
            <line x1="30" y1="30" x2="30" y2="80" class="svg-highlight" stroke-width="3" />
            <line x1="30" y1="80" x2="30" y2="220" class="svg-highlight" stroke-width="2" />
            <line x1="30" y1="220" x2="30" y2="270" class="svg-highlight" stroke-width="3" />
            <line x1="30" y1="270" x2="230" y2="270" class="svg-highlight" stroke-width="3" />
            
            <!-- Highlights on joints -->
            <circle cx="230" cy="220" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="160" cy="180" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="200" cy="110" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="200" cy="60" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="130" cy="30" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="30" cy="30" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="30" cy="270" r="4" class="svg-highlight" fill="var(--accent-blue)" />
            <circle cx="230" cy="270" r="4" class="svg-highlight" fill="var(--accent-blue)" />
        `;
    } else if (stepNum === 9) {
        // Step 9: Wiring Connections and Left Panel L
        svgContent += `
            <path d="${baseProfile}" class="svg-placed" />
            
            <!-- Wiring Lines (glowing paths) -->
            <!-- Power: Voeding to Stepdown to Pi -->
            <path d="M 68,100 Q 95,95 65,130" class="svg-accent" stroke="#ef4444" stroke-width="1.5" />
            <!-- HDMI: Pi to LCD Board -->
            <path d="M 65,145 Q 120,130 175,135" class="svg-accent" stroke="#3b82f6" stroke-width="1.5" />
            <!-- Control: Buttons to USB encoder -->
            <path d="M 195,195 Q 150,210 115,210" class="svg-accent" stroke="#BEA36B" stroke-width="1.5" />
            
            <!-- Left Panel L (Dashed outline on top) -->
            <path d="${baseProfile}" class="svg-highlight" stroke-dasharray="4 4" fill="none" stroke-width="2" />
        `;
    } else if (stepNum === 10) {
        // Step 10: Enjoy (Speelklare Kast)
        svgContent += `
            <path d="${baseProfile}" class="svg-placed" fill="rgba(17, 33, 61, 0.4)" stroke-width="2" />
            <!-- Screen glow content -->
            <polygon points="172,130 196,115 186,165 163,165" class="svg-highlight" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" />
            <!-- Text on screen -->
            <text x="175" y="145" font-family="sans-serif" font-size="8" fill="#10b981" transform="rotate(-30 175 145)">TETRIS</text>
            
            <!-- Marquee text glow -->
            <polygon points="135,35 195,60 195,50 135,30" class="svg-highlight" fill="rgba(24, 99, 246, 0.2)" stroke="#1863F6" />
            <text x="160" y="48" font-family="sans-serif" font-size="6" fill="#fafafa" transform="rotate(20 160 48)">ARCADE</text>
            
            <!-- Controls detail -->
            <line x1="195" y1="200" x2="205" y2="175" class="svg-placed" stroke-width="2" />
            <circle cx="205" cy="175" r="7" class="svg-highlight" fill="#ef4444" />
        `;
    }

    svgContent += `
        </svg>
    `;
    
    container.innerHTML = svgContent;
}

// Initialize step menu on page load
window.addEventListener('DOMContentLoaded', () => {
    initStepsMenu();
});
