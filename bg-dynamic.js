(function() {
    let resizeTimeout;

    // 1. Determine time of day and trigger rendering
    function updateTimeOfDay() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        
        let timeClass = 'time-night';
        let labelName = 'NODE_MOON';
        let statusText = 'LOW_POWER';
        
        if (hour >= 6 && hour < 12) {
            timeClass = 'time-morning';
            labelName = 'NODE_SUN';
            statusText = 'WARM_UP';
        } else if (hour >= 12 && hour < 18) {
            timeClass = 'time-afternoon';
            labelName = 'NODE_SUN';
            statusText = 'PEAK_ACTIVE';
        } else if (hour >= 18 && hour < 24) {
            timeClass = 'time-evening';
            labelName = 'NODE_MOON';
            statusText = 'COOL_DOWN';
        }
        
        // Update root class
        const root = document.documentElement;
        root.classList.remove('time-morning', 'time-afternoon', 'time-evening', 'time-night');
        root.classList.add(timeClass);
        
        // Update label text
        const label = document.getElementById('ambient-node-label');
        if (label) {
            label.textContent = `[${labelName}: ${statusText}]`;
        }
        
        // Position Master Node
        positionMasterNode(hour, minute, labelName === 'NODE_SUN');
    }
    
    // 2. Position Master Node along the path in the SVG's local coordinate system
    function positionMasterNode(hour, minute, isSun) {
        const path = document.getElementById('ambient-orbit-path');
        const node = document.getElementById('ambient-master-node');
        if (!path || !node) return;
        
        // Use SVG's internal coordinate system length
        const totalLength = path.getTotalLength();
        
        // Compute t parameter (0 to 1) representing the progress through the 12-hour cycle
        let t = 0;
        if (isSun) {
            // Sun cycle: 06:00 to 18:00 (12 hours)
            const minutesSinceMorning = (hour - 6) * 60 + minute;
            t = minutesSinceMorning / 720;
        } else {
            // Moon cycle: 18:00 to 06:00 (12 hours)
            let hoursSinceEvening = hour >= 18 ? hour - 18 : hour + 6;
            const minutesSinceEvening = hoursSinceEvening * 60 + minute;
            t = minutesSinceEvening / 720;
        }
        
        // Clamp t between 0 and 1
        t = Math.max(0, Math.min(1, t));
        
        // Get coordinates inside the SVG (mapped 1:1 to screen pixels)
        const point = path.getPointAtLength(t * totalLength);
        
        // Apply transformation to place the Master Node group exactly on the path
        node.setAttribute('transform', `translate(${point.x}, ${point.y})`);
    }

    // 3. Update SVG dimensions and path dynamically to match viewport without stretching
    function updatePath() {
        const svg = document.getElementById('ambient-bg-svg');
        const path = document.getElementById('ambient-orbit-path');
        if (!svg || !path) return;
        
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        svg.setAttribute('width', w);
        svg.setAttribute('height', h);
        
        // Compute responsive path coordinates (mirroring 1400x900 base viewport aspect ratios in pixels)
        const newPath = `M -50,${h * 0.72} C ${w * 0.25},${h * 0.94} ${w * 0.21},${h * 0.16} ${w * 0.5},${h * 0.44} C ${w * 0.785},${h * 0.72} ${w * 0.75},${h * 0.11} ${w + 50},${h * 0.33}`;
        
        path.setAttribute('d', newPath);
        
        // Also update all packet motion paths
        const motions = svg.querySelectorAll('animateMotion');
        motions.forEach(motion => {
            motion.setAttribute('path', newPath);
        });
        
        // Recalculate Master Node position since path layout changed
        updateTimeOfDay();
    }
    
    // 4. Inject the SVG on initialization
    function init() {
        if (document.getElementById('ambient-bg-svg')) return;
        
        const svgContainer = document.createElement('div');
        // SVG without fixed viewBox and preserveAspectRatio="none" to prevent text/node stretching
        svgContainer.innerHTML = `
            <svg id="ambient-bg-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="ambient-sun-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="var(--bg-glow-color)" stop-opacity="1" />
                        <stop offset="100%" stop-color="var(--bg-glow-color)" stop-opacity="0" />
                    </radialGradient>
                </defs>
                
                <!-- The Orbit / Network Path -->
                <path id="ambient-orbit-path" fill="none" stroke="var(--bg-path-color)" stroke-dasharray="6,8" stroke-width="1.5" />
                
                <!-- Animated data packets traveling along the path -->
                <circle class="ambient-packet" r="3.5" fill="var(--bg-packet-color)">
                    <animateMotion dur="14s" repeatCount="indefinite" keyTimes="0;1" />
                </circle>
                <circle class="ambient-packet" r="3.5" fill="var(--bg-packet-color)" opacity="0.65">
                    <animateMotion dur="20s" begin="-5s" repeatCount="indefinite" keyTimes="0;1" />
                </circle>
                <circle class="ambient-packet" r="3.5" fill="var(--bg-packet-color)" opacity="0.35">
                    <animateMotion dur="28s" begin="-10s" repeatCount="indefinite" keyTimes="0;1" />
                </circle>
                
                <!-- Master Node (Sun/Moon Orb) -->
                <g id="ambient-master-node">
                    <circle r="75" fill="url(#ambient-sun-glow)" />
                    <circle r="8" fill="none" stroke="var(--bg-packet-color)" stroke-width="2" />
                    <circle r="3" fill="var(--bg-packet-color)" />
                    <text x="16" y="4" font-family="JetBrains Mono, monospace" font-size="10" fill="var(--bg-packet-color)" font-weight="bold" id="ambient-node-label">[NODE_MOON: ACTIVE]</text>
                </g>
            </svg>
        `;
        
        const svgElement = svgContainer.firstElementChild;
        document.body.insertBefore(svgElement, document.body.firstChild);
        
        // Draw the responsive path initially
        updatePath();
        
        // Re-draw path on window resize with a slight debounce for performance
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updatePath, 100);
        });
        
        // Update position/state every 60 seconds
        setInterval(updateTimeOfDay, 60000);
    }
    
    // Run early if possible, or wait for DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
