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
