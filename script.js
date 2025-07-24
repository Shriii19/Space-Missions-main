// Space Missions Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Load all space missions data from the CSV file
    let spaceMissions = [];
    
    // Load CSV data
    loadCSVData();

    // Function to load and parse CSV data
    async function loadCSVData() {
        console.log('Starting CSV data load...');
        try {
            const response = await fetch('Space_Corrected.csv');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const csvText = await response.text();
            console.log('CSV file loaded successfully, parsing...');
            spaceMissions = parseCSV(csvText);
            console.log(`Parsed ${spaceMissions.length} missions from CSV`);
            
            if (spaceMissions.length === 0) {
                throw new Error('No valid missions found in CSV');
            }
            
            // Initialize the dashboard after data is loaded
            initializeDashboard();
            setupEventListeners();
            updateStatistics();
            renderAllMissions();
        } catch (error) {
            console.error('Error loading CSV data:', error);
            console.log('Falling back to sample data...');
            // Fallback to sample data if CSV loading fails
            spaceMissions = getSampleData();
            
            // Show error message but continue with sample data
            showErrorMessage(`
                <div style="background: rgba(255, 107, 53, 0.1); border: 1px solid #ff6b35; border-radius: 10px; padding: 20px; margin: 20px 0; text-align: center;">
                    <i class="fas fa-exclamation-triangle" style="color: #ff6b35; font-size: 2rem; margin-bottom: 10px;"></i>
                    <h3 style="color: #ff6b35; margin-bottom: 10px;">CSV Loading Failed</h3>
                    <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 15px;">
                        Could not load Space_Corrected.csv file. This might be due to browser security restrictions when opening files locally.
                    </p>
                    <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;">
                        <strong>Solution:</strong> Serve this directory using a local web server (e.g., python -m http.server) or deploy to a web hosting service.
                    </p>
                    <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-top: 10px;">
                        <em>Currently showing sample data for demonstration.</em>
                    </p>
                </div>
            `);
            
            initializeDashboard();
            setupEventListeners();
            updateStatistics();
            renderAllMissions();
        }
    }

    // Function to show error message
    function showErrorMessage(htmlContent) {
        const heroSection = document.querySelector('.hero .container');
        if (heroSection) {
            const errorDiv = document.createElement('div');
            errorDiv.innerHTML = htmlContent;
            heroSection.appendChild(errorDiv);
        }
    }

    // Function to parse CSV data
    function parseCSV(csvText) {
        const lines = csvText.split('\n').filter(line => line.trim() !== '');
        if (lines.length < 2) return [];
        
        const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
        const missions = [];
        
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const values = parseCSVLine(line);
            
            if (values.length >= 6) { // Ensure we have minimum required fields
                const mission = {};
                headers.forEach((header, index) => {
                    let value = values[index] ? values[index].trim().replace(/^"|"$/g, '') : '';
                    mission[header] = value;
                });
                
                // Map to our expected format
                const formattedMission = {
                    company: mission['Company Name'] || '',
                    location: mission['Location'] || '',
                    date: mission['Datum'] || '',
                    detail: mission['Detail'] || '',
                    status: mission['Status Mission'] || '',
                    rocket: mission[' Rocket'] || mission['Rocket'] || ''
                };
                
                // Only add missions with valid data
                if (formattedMission.company && formattedMission.detail) {
                    missions.push(formattedMission);
                }
            }
        }
        
        return missions;
    }

    // Helper function to parse CSV line handling quoted values
    function parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current); // Add the last field
        return result;
    }

    // Fallback sample data function
    function getSampleData() {
        return [
            {
                company: "SpaceX",
                location: "LC-39A, Kennedy Space Center, Florida, USA",
                date: "Fri Aug 07, 2020 05:12 UTC",
                detail: "Falcon 9 Block 5 | Starlink V1 L9 & BlackSky",
                status: "Success",
                rocket: "50.0"
            },
            {
                company: "CASC",
                location: "Site 9401 (SLS-2), Jiuquan Satellite Launch Center, China",
                date: "Thu Aug 06, 2020 04:01 UTC",
                detail: "Long March 2D | Gaofen-9 04 & Q-SAT",
                status: "Success",
                rocket: "29.75"
            },
            {
                company: "ULA",
                location: "SLC-41, Cape Canaveral AFS, Florida, USA",
                date: "Thu Jul 30, 2020 11:50 UTC",
                detail: "Atlas V 541 | Perseverance",
                status: "Success",
                rocket: "145.0"
            },
            {
                company: "JAXA",
                location: "LA-Y1, Tanegashima Space Center, Japan",
                date: "Sun Jul 19, 2020 21:58 UTC",
                detail: "H-IIA 202 | Hope Mars Mission",
                status: "Success",
                rocket: "90.0"
            },
            {
                company: "Rocket Lab",
                location: "Rocket Lab LC-1A, Māhia Peninsula, New Zealand",
                date: "Sat Jul 04, 2020 21:19 UTC",
                detail: "Electron/Curie | Pics Or It Didn't Happen",
                status: "Failure",
                rocket: "7.5"
            },
            {
                company: "Roscosmos",
                location: "Site 200/39, Baikonur Cosmodrome, Kazakhstan",
                date: "Thu Jul 30, 2020 21:25 UTC",
                detail: "Proton-M/Briz-M | Ekspress-80 & Ekspress-103",
                status: "Success",
                rocket: "65.0"
            },
            {
                company: "NASA",
                location: "LC-39A, Kennedy Space Center, Florida, USA",
                date: "Sat May 30, 2020 19:22 UTC",
                detail: "Falcon 9 Block 5 | Crew Dragon Demo-2",
                status: "Success",
                rocket: "50.0"
            },
            {
                company: "Arianespace",
                location: "ELA-3, Guiana Space Centre, French Guiana, France",
                date: "Thu Jan 16, 2020 21:05 UTC",
                detail: "Ariane 5 ECA | Eutelsat Konnect & GSAT-30",
                status: "Success",
                rocket: "200.0"
            },
            {
                company: "Blue Origin",
                location: "West Texas Suborbital Launch Site, Texas, USA",
                date: "Wed Dec 11, 2019 15:00 UTC",
                detail: "New Shepard | NS-12",
                status: "Success",
                rocket: ""
            },
            {
                company: "ESA",
                location: "ELA-3, Guiana Space Centre, French Guiana, France",
                date: "Tue Jul 25, 2018 11:25 UTC",
                detail: "Ariane 5 ECA | Galileo 23-26",
                status: "Partial Failure",
                rocket: "200.0"
            }
        ];
    }

    // Function to render all missions from CSV data
    function renderAllMissions() {
        const missionsGrid = document.getElementById('missionsGrid');
        if (!missionsGrid) return;

        // Clear existing missions
        missionsGrid.innerHTML = '';

        if (spaceMissions.length === 0) {
            // Show error message if no data loaded
            missionsGrid.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load space missions data.</p>
                    <p>Please check if the CSV file is accessible.</p>
                </div>
            `;
            return;
        }

        // Show ALL missions from the dataset for complete data utilization
        const missionsToShow = spaceMissions; // Show ALL missions from CSV
        
        missionsToShow.forEach((mission, index) => {
            const missionCard = createMissionCard(mission, index);
            missionsGrid.appendChild(missionCard);
        });

        // Add info about total missions loaded
        const infoDiv = document.createElement('div');
        infoDiv.className = 'filter-info';
        infoDiv.innerHTML = `
            <p style="text-align: center; margin: 20px; color: #00d4ff; font-size: 1.1rem;">
                <i class="fas fa-check-circle"></i>
                Successfully loaded and displaying all ${spaceMissions.length} space missions from the dataset.
            </p>
        `;
        missionsGrid.appendChild(infoDiv);

        // Update company filter options
        updateCompanyFilter();
    }

    // Function to create a mission card
    function createMissionCard(mission, index) {
        const card = document.createElement('div');
        card.className = 'mission-card fade-in';
        card.setAttribute('data-company', mission.company);
        card.setAttribute('data-status', mission.status);
        card.style.animationDelay = `${(index % 20) * 0.1}s`; // Stagger animations

        // Better status classification
        let statusClass = 'unknown';
        const status = mission.status.toLowerCase();
        if (status === 'success') {
            statusClass = 'success';
        } else if (status === 'failure') {
            statusClass = 'failure';
        } else if (status.includes('partial')) {
            statusClass = 'partial';
        }

        // Clean company name for CSS class
        const companyClass = mission.company.toLowerCase()
            .replace(/\s+/g, '')
            .replace(/[^a-zA-Z0-9]/g, '');

        // Format date if available
        const formattedDate = mission.date || 'Date not available';
        
        // Format cost if available
        let costText = 'Cost: N/A';
        if (mission.rocket && mission.rocket.trim()) {
            const cost = mission.rocket.trim();
            if (!isNaN(cost)) {
                costText = `Cost: $${cost}M`;
            } else {
                costText = `Cost: ${cost}`;
            }
        }

        card.innerHTML = `
            <div class="mission-header">
                <div class="company-badge ${companyClass}">${mission.company || 'Unknown'}</div>
                <div class="status-badge ${statusClass}">${mission.status || 'Unknown'}</div>
            </div>
            <h3 class="mission-title">${mission.detail || 'Mission details not available'}</h3>
            <div class="mission-details">
                <p class="mission-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${mission.location || 'Location not specified'}
                </p>
                <p class="mission-date">
                    <i class="fas fa-calendar"></i>
                    ${formattedDate}
                </p>
                <p class="mission-rocket">
                    <i class="fas fa-rocket"></i>
                    ${costText}
                </p>
            </div>
        `;

        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        return card;
    }

    // Function to update company filter with all companies from data
    function updateCompanyFilter() {
        const companyFilter = document.getElementById('companyFilter');
        if (!companyFilter) return;

        // Get unique companies
        const companies = [...new Set(spaceMissions.map(mission => mission.company))].sort();
        
        // Clear existing options (except "All Companies")
        companyFilter.innerHTML = '<option value="">All Companies</option>';
        
        // Add company options
        companies.forEach(company => {
            if (company) {
                const option = document.createElement('option');
                option.value = company;
                option.textContent = company;
                companyFilter.appendChild(option);
            }
        });
    }

    function initializeDashboard() {
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add loading animation to mission cards
        const missionCards = document.querySelectorAll('.mission-card');
        missionCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }

    function setupEventListeners() {
        const companyFilter = document.getElementById('companyFilter');
        const statusFilter = document.getElementById('statusFilter');
        const searchInput = document.getElementById('searchInput');

        // Filter events
        if (companyFilter) companyFilter.addEventListener('change', filterMissions);
        if (statusFilter) statusFilter.addEventListener('change', filterMissions);
        if (searchInput) searchInput.addEventListener('input', debounce(filterMissions, 300));
    }

    function filterMissions() {
        const companyFilter = document.getElementById('companyFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        
        // Filter the spaceMissions array
        let filteredMissions = spaceMissions.filter(mission => {
            const matchesCompany = !companyFilter || mission.company === companyFilter;
            const matchesStatus = !statusFilter || mission.status === statusFilter;
            const matchesSearch = !searchTerm || 
                mission.company.toLowerCase().includes(searchTerm) ||
                mission.detail.toLowerCase().includes(searchTerm) ||
                mission.location.toLowerCase().includes(searchTerm);
            
            return matchesCompany && matchesStatus && matchesSearch;
        });

        // Re-render the filtered missions
        const missionsGrid = document.getElementById('missionsGrid');
        if (!missionsGrid) return;
        
        missionsGrid.innerHTML = '';
        
        // Show ALL filtered results (no artificial limit)
        const missionsToShow = filteredMissions;
        
        missionsToShow.forEach((mission, index) => {
            const missionCard = createMissionCard(mission, index);
            missionsGrid.appendChild(missionCard);
        });

        // Add filter results info
        if (filteredMissions.length > 0) {
            const infoDiv = document.createElement('div');
            infoDiv.className = 'filter-info';
            infoDiv.innerHTML = `
                <p style="text-align: center; margin: 20px; color: #00d4ff; font-style: italic;">
                    <i class="fas fa-filter"></i>
                    Found and displaying ${filteredMissions.length} matching missions out of ${spaceMissions.length} total.
                </p>
            `;
            missionsGrid.appendChild(infoDiv);
        } else {
            // Show no results message
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'error-message';
            noResultsDiv.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem; color: #ff6b35;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p style="font-size: 1.2rem; margin-bottom: 1rem;">No missions found</p>
                    <p style="color: rgba(255, 255, 255, 0.6);">Try adjusting your search filters</p>
                </div>
            `;
            missionsGrid.appendChild(noResultsDiv);
        }

        console.log(`Showing ${missionsToShow.length} of ${filteredMissions.length} missions`);
    }

    function updateStatistics() {
        // Calculate statistics from spaceMissions data instead of DOM elements
        const successCount = spaceMissions.filter(mission => mission.status.toLowerCase() === 'success').length;
        const failureCount = spaceMissions.filter(mission => mission.status.toLowerCase() === 'failure').length;
        const totalCount = spaceMissions.length;
        const successRate = totalCount > 0 ? Math.round((successCount / totalCount) * 100) : 0;
        
        // Update the statistics in the DOM
        const successElement = document.getElementById('success-count');
        const failureElement = document.getElementById('failure-count');
        
        if (successElement) {
            animateCounter(successElement, successCount);
        }
        
        if (failureElement) {
            animateCounter(failureElement, failureCount);
        }

        // Update hero statistics
        const heroTotalElement = document.getElementById('hero-total-missions');
        if (heroTotalElement) {
            animateCounter(heroTotalElement, totalCount);
        }

        // Update success rate in hero
        const heroSuccessRateElement = document.getElementById('hero-success-rate');
        if (heroSuccessRateElement) {
            heroSuccessRateElement.textContent = `${successRate}%`;
        }

        // Update total companies
        const companyCounts = spaceMissions.reduce((acc, mission) => {
            if (mission.company) {
                acc[mission.company] = (acc[mission.company] || 0) + 1;
            }
            return acc;
        }, {});
        
        const totalCompanies = Object.keys(companyCounts).length;
        const heroCompaniesElement = document.getElementById('hero-total-companies');
        if (heroCompaniesElement) {
            heroCompaniesElement.textContent = totalCompanies;
        }

        // Find top company
        const topCompany = Object.keys(companyCounts).reduce((a, b) => 
            companyCounts[a] > companyCounts[b] ? a : b, '');
        
        const topCompanyElement = document.getElementById('top-company');
        if (topCompanyElement && topCompany) {
            topCompanyElement.textContent = topCompany;
        }
    }

    function animateCounter(element, targetValue) {
        let current = 0;
        const increment = targetValue / 50;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            if (current >= targetValue) {
                element.textContent = targetValue;
                clearInterval(timer);
            }
        }, 30);
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('.stats-section, .missions-section, .about-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click effect to buttons and interactive elements
    document.addEventListener('click', function(e) {
        if (e.target.matches('.filter-select, .search-input, .nav-link')) {
            createRippleEffect(e);
        }
    });

    function createRippleEffect(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }

    // Add loading states
    function showLoading() {
        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'loading-spinner';
        loadingSpinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading missions...';
        document.body.appendChild(loadingSpinner);
    }

    function hideLoading() {
        const loadingSpinner = document.querySelector('.loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.remove();
        }
    }

    // Simulate data loading
    setTimeout(() => {
        console.log('Space Missions Dashboard loaded successfully!');
        // In a real application, you would load CSV data here
        loadCSVData();
    }, 1000);

    function loadCSVData() {
        // Placeholder function for loading CSV data
        // In a real application, you would use fetch() or FileReader to load the CSV
        console.log('CSV data would be loaded here');
        
        // Example of how you might process CSV data:
        /*
        fetch('Space_Corrected.csv')
            .then(response => response.text())
            .then(csvText => {
                const missions = parseCSV(csvText);
                renderMissions(missions);
                updateStatistics(missions);
            })
            .catch(error => {
                console.error('Error loading CSV:', error);
            });
        */
    }

    function parseCSV(csvText) {
        // Simple CSV parser (you might want to use a library like Papa Parse for production)
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        const missions = [];
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length === headers.length) {
                const mission = {};
                headers.forEach((header, index) => {
                    mission[header.trim()] = values[index].trim();
                });
                missions.push(mission);
            }
        }
        
        return missions;
    }

    function renderMissions(missions) {
        const missionsGrid = document.getElementById('missionsGrid');
        missionsGrid.innerHTML = '';
        
        missions.forEach(mission => {
            const missionCard = createMissionCard(mission);
            missionsGrid.appendChild(missionCard);
        });
    }

    function createMissionCard(mission) {
        const card = document.createElement('div');
        card.className = 'mission-card';
        card.setAttribute('data-company', mission['Company Name']);
        card.setAttribute('data-status', mission['Status Mission']);
        
        card.innerHTML = `
            <div class="mission-header">
                <div class="company-badge ${getCompanyClass(mission['Company Name'])}">${mission['Company Name']}</div>
                <div class="status-badge ${mission['Status Mission'].toLowerCase()}">${mission['Status Mission']}</div>
            </div>
            <h3 class="mission-title">${mission['Detail']}</h3>
            <div class="mission-details">
                <p class="mission-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${mission['Location']}
                </p>
                <p class="mission-date">
                    <i class="fas fa-calendar"></i>
                    ${mission['Datum']}
                </p>
                <p class="mission-rocket">
                    <i class="fas fa-rocket"></i>
                    Cost: $${mission[' Rocket']}M
                </p>
            </div>
        `;
        
        return card;
    }

    function getCompanyClass(companyName) {
        const classMap = {
            'SpaceX': 'spacex',
            'CASC': 'casc',
            'ULA': 'ula',
            'Roscosmos': 'roscosmos',
            'JAXA': 'jaxa',
            'Rocket Lab': 'rocketlab'
        };
        return classMap[companyName] || 'default';
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Clear all filters
            document.getElementById('companyFilter').value = '';
            document.getElementById('statusFilter').value = '';
            document.getElementById('searchInput').value = '';
            filterMissions();
        }
    });

    // Add theme toggle (bonus feature)
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    console.log('🚀 Space Missions Dashboard initialized successfully!');
});

// CSS for additional animations
const additionalStyles = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }

    .animate-in {
        animation: fadeIn 0.8s ease-out forwards;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }

    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    .loading-spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: #00d4ff;
        padding: 2rem;
        border-radius: 10px;
        z-index: 9999;
        font-size: 1.2rem;
    }

    .loading-spinner i {
        margin-right: 0.5rem;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
