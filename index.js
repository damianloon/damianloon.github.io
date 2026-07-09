// --- Splash Screen Handler & Replay (Option B) ---
(function() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;
    
    // Create a deep copy of the original splash screen to use for replays
    const splashTemplate = splash.cloneNode(true);
    
    // Function to run the splash hide sequence
    function hideSplash(element) {
        element.classList.add('splash-fade-out');
        document.documentElement.classList.remove('splash-active');
        setTimeout(() => {
            element.style.display = 'none';
        }, 800);
    }
    
    // Initial load handler
    if (sessionStorage.getItem('splashPlayed') === 'true') {
        splash.style.display = 'none';
    } else {
        setTimeout(() => {
            hideSplash(splash);
        }, 3000);
        sessionStorage.setItem('splashPlayed', 'true');
    }
    
    // Logo / Name click trigger for replay
    document.addEventListener('DOMContentLoaded', () => {
        const logoArea = document.querySelector('.logo-area');
        if (logoArea) {
            logoArea.style.cursor = 'pointer';
            logoArea.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Scroll to the top instantly
                window.scrollTo({ top: 0 });
                
                // Find current splash element in DOM
                const currentSplash = document.getElementById('splash-screen');
                if (currentSplash) {
                    // Create a fresh clone from template
                    const newSplash = splashTemplate.cloneNode(true);
                    newSplash.style.display = 'flex';
                    newSplash.classList.remove('splash-fade-out');
                    
                    // Replace in DOM to restart CSS animations
                    currentSplash.parentNode.replaceChild(newSplash, currentSplash);
                    
                    // Lock scrolling
                    document.documentElement.classList.add('splash-active');
                    
                    // Run the 3-second show then fade-out sequence
                    setTimeout(() => {
                        hideSplash(newSplash);
                    }, 3000);
                }
            });
        }
    });
})();

// --- Network Diagram Node Data ---
// --- Language Dictionary Logic (i18n) ---
function getLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'nl' || saved === 'en')) {
        return saved;
    }
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    if (browserLang === 'nl' || browserLang === 'en') {
        return browserLang;
    }
    return 'nl';
}

let nodeData = {};
let arcadeSteps = [];

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update active state in custom dropdown
    const activeItem = document.querySelector(`.dropdown-item[data-lang="${lang}"]`);
    const triggerContainer = document.querySelector('.current-flag-container');
    if (activeItem && triggerContainer) {
        triggerContainer.innerHTML = activeItem.innerHTML;
        
        document.querySelectorAll('.dropdown-item').forEach(item => {
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Update all static i18n text fields
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui[key]) {
            el.innerHTML = translations[lang].ui[key];
        }
    });
    
    // Dynamically update the nodes and steps arrays
    if (typeof translations !== 'undefined' && translations[lang]) {
        nodeData = translations[lang].nodeData;
        arcadeSteps = translations[lang].arcadeSteps;
    }
    
    // Refresh the details panel if a node is currently selected
    const activeNode = document.querySelector('.interactive-node.selected');
    if (activeNode) {
        const nodeKey = activeNode.getAttribute('data-node');
        renderNodeDetails(nodeKey);
    }
    
    // Refresh pipeline details panel if a pipeline node is currently selected
    const activePipelineNode = document.querySelector('.pipeline-node.selected');
    if (activePipelineNode) {
        const nodeKey = activePipelineNode.getAttribute('data-node');
        renderPipelineDetails(nodeKey);
    }
    
    // Refresh steps UI
    if (typeof initStepsMenu === 'function') {
        initStepsMenu();
    }
    if (typeof updateStepView === 'function') {
        updateStepView();
    }

    // Refresh skills details and labels
    if (typeof updateSkillLabels === 'function') {
        updateSkillLabels(lang);
    }
    if (typeof renderSkillDetails === 'function') {
        renderSkillDetails(activeSkillKey);
    }
}

// --- DOM elements ---
const interactiveNodes = document.querySelectorAll('.interactive-node');
const detailsContent = document.getElementById('details-content');

// --- Render Selected Node Details ---
function renderNodeDetails(nodeKey) {
    const data = nodeData[nodeKey];
    if (!data) return;

    const lang = getLanguage();
    const activeServicesText = (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui.details_active_services) || 'Actieve Services';
    const descriptionText = (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui.details_description_title) || 'Beschrijving & Werking';

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
            <h4 class="detail-section-title">${activeServicesText}</h4>
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
                    <h4 class="detail-section-title">${descriptionText}</h4>
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

// --- Pre-select the Raspberry Pi 5 on Page Load & Initialize Language ---
window.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.lang-dropdown');
    const trigger = document.querySelector('.dropdown-trigger');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // 1. Setup switcher event listeners
    if (trigger && dropdown) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('open');
            dropdown.classList.toggle('open', !isOpen);
            trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        });
    }

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // 2. Load the initial language
    setLanguage(getLanguage());

    // 3. Pre-select the Raspberry Pi 5
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
        
        const lang = getLanguage();
        const stepLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui.modal_progress_prefix) || 'Stap';
        btn.innerHTML = `<strong>${stepLabel} ${step.number}</strong><br>${step.title}`;
        
        btn.addEventListener('click', () => {
            if (typeof tetrisIsActive !== 'undefined' && tetrisIsActive) {
                minimizeTetrisGame();
            }
            currentStep = step.number;
            updateStepView();
        });
        stepsMenu.appendChild(btn);
    });
}

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

    const lang = getLanguage();
    const stepLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui.modal_progress_prefix) || 'Stap';
    const ofLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui.modal_progress_of) || 'van';
    const photoLabel = (typeof translations !== 'undefined' && translations[lang] && translations[lang].ui && translations[lang].ui.modal_tab_photo) || 'Mijn Foto';

    // Update Step Text Fields
    if (stepTitleDisplay) stepTitleDisplay.textContent = `${stepLabel} ${step.number}: ${step.title}`;
    if (stepPhaseName) stepPhaseName.textContent = step.phase;
    if (stepDescription) stepDescription.textContent = step.description;
    if (stepCounter) stepCounter.textContent = `${stepLabel} ${step.number} ${ofLabel} ${arcadeSteps.length}`;

    // Update Parts List
    if (stepParts) {
        stepParts.innerHTML = '';
        step.parts.forEach(part => {
            const li = document.createElement('li');
            li.textContent = part;
            stepParts.appendChild(li);
        });
    }

    // Prev/Next buttons state (disabled or hidden)
    if (prevStepBtn) prevStepBtn.disabled = currentStep === 1;
    if (nextStepBtn) {
        if (currentStep === arcadeSteps.length) {
            nextStepBtn.style.display = 'none';
        } else {
            nextStepBtn.style.display = '';
            nextStepBtn.disabled = false;
        }
    }

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
            photoTabBtn.innerHTML = photoLabel;
        }
    } else {
        if (stepPhoto) {
            stepPhoto.src = '';
            stepPhoto.style.display = 'none';
        }
        if (photoPlaceholder) photoPlaceholder.style.display = 'flex';
        if (photoTabBtn) {
            photoTabBtn.classList.remove('has-photo');
            photoTabBtn.innerHTML = photoLabel;
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
    
    // Bind highscore submit & cancel event listeners
    const submitBtn = document.getElementById('submit-highscore-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', handleHighscoreSubmission);
    }

    const cancelBtn = document.getElementById('cancel-highscore-btn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeHighscoreOverlay);
    }
    
    // Support submitting by pressing Enter in the input field
    const nameInput = document.getElementById('highscore-name-input');
    if (nameInput) {
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleHighscoreSubmission();
            }
        });
    }

    // Initialize skills topology map and details
    if (typeof initSkillsTopologyMap === 'function') {
        initSkillsTopologyMap();
    }
    if (typeof updateSkillLabels === 'function') {
        updateSkillLabels(getLanguage());
    }
    if (typeof renderSkillDetails === 'function') {
        renderSkillDetails(null);
    }
});

// --- Supabase Connection for Tetris Leaderboard ---
const supabaseUrl = 'https://mmeucjfhxdejlbwvcbxt.supabase.co';
const supabaseKey = 'sb_publishable_6XslWYpajXk_8Ynoc7wfew_RWOrgnpP';
let supabaseClient = null;

if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
}

let isHighscoreOverlayOpen = false;
let globalTopScores = [];

// Fetch global highscores from Supabase
async function fetchGlobalHighscores() {
    if (!supabaseClient) return [];
    try {
        const { data, error } = await supabaseClient
            .from('highscores')
            .select('name, score')
            .order('score', { ascending: false })
            .limit(5);

        if (error) throw error;
        return data || [];
    } catch (err) {
        console.error('Fout bij ophalen highscores:', err);
        return [];
    }
}

// Render the highscore list to the DOM
async function updateLeaderboardUI() {
    const listElement = document.getElementById('tetris-leaderboard-list');
    if (!listElement) return;

    listElement.innerHTML = '<li>Laden van scores...</li>';
    globalTopScores = await fetchGlobalHighscores();

    if (globalTopScores.length === 0) {
        listElement.innerHTML = '<li>Geen scores gevonden of offline</li>';
        return;
    }

    listElement.innerHTML = '';
    globalTopScores.forEach((entry) => {
        const li = document.createElement('li');
        const cleanName = entry.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        li.innerHTML = `${cleanName} <span class="score">${entry.score.toLocaleString()}</span>`;
        listElement.appendChild(li);
    });
}

// Checks if score is in the top 5 and opens the submission overlay if it qualifies
function checkAndSubmitHighScore(score) {
    if (!supabaseClient || score <= 0) return;

    // A score qualifies if:
    // - There are fewer than 5 scores on the leaderboard
    // - OR the current score is higher than the 5th place score
    const qualifies = globalTopScores.length < 5 || score > globalTopScores[globalTopScores.length - 1].score;

    if (qualifies) {
        const overlay = document.getElementById('tetris-highscore-overlay');
        const scoreDisplay = document.getElementById('highscore-value-display');
        const nameInput = document.getElementById('highscore-name-input');
        
        if (overlay && scoreDisplay && nameInput) {
            scoreDisplay.textContent = score.toLocaleString();
            nameInput.value = '';
            isHighscoreOverlayOpen = true;
            overlay.style.display = 'flex';
            
            // Focus input box immediately
            setTimeout(() => nameInput.focus(), 100);
        }
    }
}

// Submit score function
async function handleHighscoreSubmission() {
    const nameInput = document.getElementById('highscore-name-input');
    if (!nameInput) return;

    const rawName = nameInput.value.trim();
    if (!rawName) {
        alert('Voer een geldige naam in.');
        return;
    }

    const cleanName = rawName.replace(/[^a-zA-Z0-9\s-_]/g, '').substring(0, 15);
    if (!cleanName) {
        alert('Je naam mag alleen letters, cijfers, spaties of -/_ bevatten.');
        return;
    }

    const submitBtn = document.getElementById('submit-highscore-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Bezig...';
    }

    try {
        const { error } = await supabaseClient
            .from('highscores')
            .insert([{ name: cleanName, score: tetrisScoreVal }]);

        if (error) throw error;
        
        closeHighscoreOverlay();
        await updateLeaderboardUI();
    } catch (err) {
        console.error('Fout bij opslaan:', err);
        alert('Er ging iets fout bij het opslaan van je score. Probeer het opnieuw.');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Opslaan';
        }
    }
}

function closeHighscoreOverlay() {
    const overlay = document.getElementById('tetris-highscore-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
    isHighscoreOverlayOpen = false;
    
    // Focus back on the game canvas
    if (tetrisCanvas) tetrisCanvas.focus();
}

// --- Skills Topology Map Interaction Logic ---
let activeSkillKey = null;

function updateSkillLabels(lang) {
    if (typeof skillsData === 'undefined' || !skillsData[lang]) return;
    
    document.querySelectorAll('.topo-node[data-skill]').forEach(el => {
        const skillKey = el.getAttribute('data-skill');
        const textEl = el.querySelector('text');
        if (!textEl) return;
        
        if (skillsData[lang].skills[skillKey]) {
            textEl.textContent = skillsData[lang].skills[skillKey].name;
        } else if (skillsData[lang].categories[skillKey]) {
            textEl.textContent = skillsData[lang].categories[skillKey].name;
        }
    });
}

function renderSkillDetails(skillKey) {
    const titleEl = document.getElementById('skill-details-title');
    const descEl = document.getElementById('skill-details-desc');
    const metaBlock = document.getElementById('skill-details-meta');
    const proficiencyEl = document.getElementById('skill-meta-proficiency');
    const integrationEl = document.getElementById('skill-meta-integration');
    
    if (!titleEl || !descEl) return;
    
    const lang = getLanguage();
    if (typeof skillsData === 'undefined' || !skillsData[lang]) return;
    
    if (!skillKey) {
        titleEl.textContent = skillsData[lang].default_title;
        descEl.textContent = skillsData[lang].default_desc;
        if (metaBlock) metaBlock.style.display = 'none';
        return;
    }
    
    // Check if it's a category
    if (skillsData[lang].categories[skillKey]) {
        const cat = skillsData[lang].categories[skillKey];
        titleEl.textContent = cat.name;
        descEl.textContent = cat.desc;
        if (metaBlock) metaBlock.style.display = 'none';
    } 
    // Check if it's a sub-skill
    else if (skillsData[lang].skills[skillKey]) {
        const skill = skillsData[lang].skills[skillKey];
        titleEl.textContent = skill.name;
        descEl.textContent = skill.desc;
        
        if (proficiencyEl) proficiencyEl.textContent = skill.proficiency;
        if (integrationEl) integrationEl.textContent = skill.integration;
        if (metaBlock) metaBlock.style.display = 'block';
    }
}

function initSkillsTopologyMap() {
    const topoNodes = document.querySelectorAll('.topo-node');
    const topoLinks = document.querySelectorAll('.topo-link');
    
    topoNodes.forEach(node => {
        const skillKey = node.getAttribute('data-skill');
        if (!skillKey) return; // Skip center node or nodes without keys
        
        const category = node.getAttribute('data-category');
        
        // Mouse Enter / Touch Start
        const handleEnter = (e) => {
            activeSkillKey = skillKey;
            renderSkillDetails(skillKey);
            
            // Highlight node path
            topoNodes.forEach(n => {
                if (n === node) {
                    n.classList.add('active');
                    n.classList.remove('dimmed');
                } else {
                    n.classList.remove('active');
                    n.classList.add('dimmed');
                }
            });
            
            // Highlight links
            topoLinks.forEach(link => {
                const linkId = link.getAttribute('id');
                const isDirectLink = linkId === `link-${skillKey}`;
                const isCategoryLink = linkId === `link-${category}`;
                
                if (isDirectLink || isCategoryLink) {
                    link.classList.add('active');
                    link.classList.remove('dimmed');
                } else {
                    link.classList.remove('active');
                    link.classList.add('dimmed');
                }
            });
        };
        
        // Mouse Leave / Touch End
        const handleLeave = (e) => {
            activeSkillKey = null;
            renderSkillDetails(null);
            
            // Reset all nodes
            topoNodes.forEach(n => {
                n.classList.remove('active', 'dimmed');
            });
            
            // Reset all links
            topoLinks.forEach(link => {
                link.classList.remove('active', 'dimmed');
            });
        };
        
        node.addEventListener('mouseenter', handleEnter);
        node.addEventListener('mouseleave', handleLeave);
        node.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleEnter(e);
        });
        node.addEventListener('touchend', handleLeave);
    });
}

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
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]], // I
    [[1, 0, 0], [1, 1, 1], [0, 0, 0]],                 // J
    [[0, 0, 1], [1, 1, 1], [0, 0, 0]],                 // L
    [[1, 1], [1, 1]],                             // O
    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],                 // S
    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],                 // Z
    [[0, 1, 0], [1, 1, 1], [0, 0, 0]]                  // T
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
        checkAndSubmitHighScore(tetrisScoreVal);
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
    updateLeaderboardUI(); // Load/Refresh Top 5 scoreboard on start
    playerReset();
    startLoop();
}

function handleKeyDown(e) {
    if (isHighscoreOverlayOpen) return; // Ignore keys if highscore submission dialog is open
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

function minimizeTetrisGame() {
    tetrisIsActive = false;
    isSoftDropping = false;
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);

    // Hide highscore overlay if it was open
    const hsOverlay = document.getElementById('tetris-highscore-overlay');
    if (hsOverlay) hsOverlay.style.display = 'none';
    isHighscoreOverlayOpen = false;

    if (stepGrid) stepGrid.classList.remove('tetris-active');
    if (tetrisView) tetrisView.classList.remove('active');

    imgTabBtns.forEach(btn => btn.style.pointerEvents = 'auto');
    showImageView('action');

    if (tetrisStartOverlay) tetrisStartOverlay.style.display = 'flex';
}

if (tetrisMinimizeBtn) {
    tetrisMinimizeBtn.addEventListener('click', minimizeTetrisGame);
}

// --- DOM Elements for Pipeline Modal ---
const pipelineModal = document.getElementById('pipeline-modal');
const openPipelineBtn = document.getElementById('btn-view-pipeline');
const closePipelineBtn = document.getElementById('close-pipeline-modal');
const pipelineNodes = document.querySelectorAll('.pipeline-node');
const pipelineDetailsContent = document.getElementById('pipeline-details-content');

function openPipelineModal() {
    if (pipelineModal) {
        pipelineModal.classList.add('active');
        pipelineModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Select Overseerr by default on open
        selectPipelineNode('overseerr');
        
        // Reset toggle button UI to running
        isPipelineFlowRunning = true;
        const btn = document.getElementById('btn-toggle-flow');
        if (btn) {
            const pauseIcon = btn.querySelector('.icon-pause');
            const playIcon = btn.querySelector('.icon-play');
            if (pauseIcon) pauseIcon.style.display = 'block';
            if (playIcon) playIcon.style.display = 'none';
            btn.setAttribute('title', 'Schakel Gegevensstroom uit');
        }

        // Start simulated data flow
        startPipelineFlowAnimation();
    }
}

function closePipelineModal() {
    if (pipelineModal) {
        pipelineModal.classList.remove('active');
        pipelineModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Stop simulated data flow
        stopPipelineFlowAnimation();
    }
}

if (openPipelineBtn) {
    openPipelineBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openPipelineModal();
    });
}

if (closePipelineBtn) {
    closePipelineBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closePipelineModal();
    });
}

if (pipelineModal) {
    pipelineModal.addEventListener('click', (e) => {
        if (e.target === pipelineModal) {
            closePipelineModal();
        }
    });
}

function selectPipelineNode(nodeKey) {
    // Highlight node in SVG
    pipelineNodes.forEach(node => {
        if (node.getAttribute('data-node') === nodeKey) {
            node.classList.add('selected');
        } else {
            node.classList.remove('selected');
        }
    });

    // Render details
    renderPipelineDetails(nodeKey);
}

// Add click listeners to pipeline nodes
pipelineNodes.forEach(node => {
    node.addEventListener('click', (e) => {
        e.stopPropagation();
        const nodeGroup = e.target.closest('.pipeline-node');
        if (nodeGroup) {
            const nodeKey = nodeGroup.getAttribute('data-node');
            selectPipelineNode(nodeKey);
        }
    });
});

function renderPipelineDetails(nodeKey) {
    const lang = getLanguage();
    const translationObject = translations[lang];
    if (!translationObject || !translationObject.pipelineData) return;
    
    const data = translationObject.pipelineData[nodeKey];
    if (!data) return;

    const descriptionTitle = translationObject.ui.pipeline_desc_title || 'Beschrijving & Werking';

    // Generate specs list
    let specsHtml = '';
    for (const [key, value] of Object.entries(data.specs)) {
        specsHtml += `
            <div class="pipeline-spec-item">
                <span class="pipeline-spec-label">${key}</span>
                <span class="pipeline-spec-value">${value}</span>
            </div>
        `;
    }

    if (pipelineDetailsContent) {
        pipelineDetailsContent.innerHTML = `
            <div class="pipeline-details-header">
                <h3 style="color: #BEA36B; margin: 0 0 0.25rem 0; font-size: 1.25rem; font-weight: bold;">${data.name}</h3>
                <p style="color: var(--text-secondary); margin: 0 0 1rem 0; font-size: 0.9rem; font-style: italic;">${data.role}</p>
            </div>
            <div class="pipeline-specs-list" style="margin-bottom: 1.25rem;">
                ${specsHtml}
            </div>
            <div class="pipeline-desc-block">
                <h4 class="pipeline-desc-title">${descriptionTitle}</h4>
                <p class="pipeline-desc-text" style="margin: 0; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary);">${data.description}</p>
            </div>
        `;
    }
}

// --- Gegevensstroom (Flow) Simulation Animation Switcher ---
let pipelineFlowInterval = null;
let currentFlowType = 'usenet'; // 'usenet' or 'torrent'
let isPipelineFlowRunning = true;

function startPipelineFlowAnimation() {
    stopPipelineFlowAnimation();
    
    const usenetPath = document.getElementById('flow-path-usenet');
    const torrentPath = document.getElementById('flow-path-torrent');
    
    if (usenetPath && torrentPath) {
        usenetPath.classList.add('active');
        torrentPath.classList.remove('active');
        currentFlowType = 'usenet';
    }

    pipelineFlowInterval = setInterval(() => {
        const uPath = document.getElementById('flow-path-usenet');
        const tPath = document.getElementById('flow-path-torrent');
        if (!uPath || !tPath) return;

        if (currentFlowType === 'usenet') {
            uPath.classList.remove('active');
            tPath.classList.add('active');
            currentFlowType = 'torrent';
        } else {
            tPath.classList.remove('active');
            uPath.classList.add('active');
            currentFlowType = 'usenet';
        }
    }, 3000); // Switches path flow every 3 seconds
}

function stopPipelineFlowAnimation() {
    if (pipelineFlowInterval) {
        clearInterval(pipelineFlowInterval);
        pipelineFlowInterval = null;
    }
    const usenetPath = document.getElementById('flow-path-usenet');
    const torrentPath = document.getElementById('flow-path-torrent');
    if (usenetPath) usenetPath.classList.remove('active');
    if (torrentPath) torrentPath.classList.remove('active');
}

function togglePipelineFlowAnimation() {
    const btn = document.getElementById('btn-toggle-flow');
    if (!btn) return;
    
    const pauseIcon = btn.querySelector('.icon-pause');
    const playIcon = btn.querySelector('.icon-play');
    
    if (isPipelineFlowRunning) {
        stopPipelineFlowAnimation();
        isPipelineFlowRunning = false;
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIcon) playIcon.style.display = 'block';
        btn.setAttribute('title', 'Schakel Gegevensstroom in');
    } else {
        startPipelineFlowAnimation();
        isPipelineFlowRunning = true;
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIcon) playIcon.style.display = 'none';
        btn.setAttribute('title', 'Schakel Gegevensstroom uit');
    }
}

// Bind controls panel toggle button
const btnToggleFlow = document.getElementById('btn-toggle-flow');
if (btnToggleFlow) {
    btnToggleFlow.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePipelineFlowAnimation();
    });
}
