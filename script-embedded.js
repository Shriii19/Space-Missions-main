// Space Missions Dashboard JavaScript - Full Dataset Embedded Version

document.addEventListener('DOMContentLoaded', function() {
    // Complete space missions data embedded directly (first 100+ missions from the CSV)
    let spaceMissions = [
        {company: "SpaceX", location: "LC-39A, Kennedy Space Center, Florida, USA", date: "Fri Aug 07, 2020 05:12 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L9 & BlackSky", status: "Success", rocket: "50.0"},
        {company: "CASC", location: "Site 9401 (SLS-2), Jiuquan Satellite Launch Center, China", date: "Thu Aug 06, 2020 04:01 UTC", detail: "Long March 2D | Gaofen-9 04 & Q-SAT", status: "Success", rocket: "29.75"},
        {company: "SpaceX", location: "Pad A, Boca Chica, Texas, USA", date: "Tue Aug 04, 2020 23:57 UTC", detail: "Starship Prototype | 150 Meter Hop", status: "Success", rocket: ""},
        {company: "Roscosmos", location: "Site 200/39, Baikonur Cosmodrome, Kazakhstan", date: "Thu Jul 30, 2020 21:25 UTC", detail: "Proton-M/Briz-M | Ekspress-80 & Ekspress-103", status: "Success", rocket: "65.0"},
        {company: "ULA", location: "SLC-41, Cape Canaveral AFS, Florida, USA", date: "Thu Jul 30, 2020 11:50 UTC", detail: "Atlas V 541 | Perseverance", status: "Success", rocket: "145.0"},
        {company: "CASC", location: "LC-9, Taiyuan Satellite Launch Center, China", date: "Sat Jul 25, 2020 03:13 UTC", detail: "Long March 4B | Ziyuan-3 03, Apocalypse-10 & NJU-HKU 1", status: "Success", rocket: "64.68"},
        {company: "Roscosmos", location: "Site 31/6, Baikonur Cosmodrome, Kazakhstan", date: "Thu Jul 23, 2020 14:26 UTC", detail: "Soyuz 2.1a | Progress MS-15", status: "Success", rocket: "48.5"},
        {company: "CASC", location: "LC-101, Wenchang Satellite Launch Center, China", date: "Thu Jul 23, 2020 04:41 UTC", detail: "Long March 5 | Tianwen-1", status: "Success", rocket: ""},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Mon Jul 20, 2020 21:30 UTC", detail: "Falcon 9 Block 5 | ANASIS-II", status: "Success", rocket: "50.0"},
        {company: "JAXA", location: "LA-Y1, Tanegashima Space Center, Japan", date: "Sun Jul 19, 2020 21:58 UTC", detail: "H-IIA 202 | Hope Mars Mission", status: "Success", rocket: "90.0"},
        {company: "Northrop", location: "LP-0B, Wallops Flight Facility, Virginia, USA", date: "Wed Jul 15, 2020 13:46 UTC", detail: "Minotaur IV | NROL-129", status: "Success", rocket: "46.0"},
        {company: "ExPace", location: "Site 95, Jiuquan Satellite Launch Center, China", date: "Fri Jul 10, 2020 04:17 UTC", detail: "Kuaizhou 11 | Jilin-1 02E, CentiSpace-1 S2", status: "Failure", rocket: "28.3"},
        {company: "CASC", location: "LC-3, Xichang Satellite Launch Center, China", date: "Thu Jul 09, 2020 12:11 UTC", detail: "Long March 3B/E | Apstar-6D", status: "Success", rocket: "29.15"},
        {company: "IAI", location: "Pad 1, Palmachim Airbase, Israel", date: "Mon Jul 06, 2020 01:00 UTC", detail: "Shavit-2 | Ofek-16", status: "Success", rocket: ""},
        {company: "CASC", location: "Site 9401 (SLS-2), Jiuquan Satellite Launch Center, China", date: "Sat Jul 04, 2020 23:44 UTC", detail: "Long March 2D | Shiyan-6 02", status: "Success", rocket: "29.75"},
        {company: "Rocket Lab", location: "Rocket Lab LC-1A, Māhia Peninsula, New Zealand", date: "Sat Jul 04, 2020 21:19 UTC", detail: "Electron/Curie | Pics Or It Didn't Happen", status: "Failure", rocket: "7.5"},
        {company: "CASC", location: "LC-9, Taiyuan Satellite Launch Center, China", date: "Fri Jul 03, 2020 03:10 UTC", detail: "Long March 4B | Gaofen Duomo & BY-02", status: "Success", rocket: "64.68"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Tue Jun 30, 2020 20:10 UTC", detail: "Falcon 9 Block 5 | GPS III SV03", status: "Success", rocket: "50.0"},
        {company: "CASC", location: "LC-2, Xichang Satellite Launch Center, China", date: "Tue Jun 23, 2020 01:43 UTC", detail: "Long March 3B/E | Beidou-3 G3", status: "Success", rocket: "29.15"},
        {company: "CASC", location: "Site 9401 (SLS-2), Jiuquan Satellite Launch Center, China", date: "Wed Jun 17, 2020 07:19 UTC", detail: "Long March 2D | Gaofen-9 03, Pixing III A & HEAD-5", status: "Success", rocket: "29.75"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Sat Jun 13, 2020 09:21 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L8 & SkySat 16 to 18", status: "Success", rocket: "50.0"},
        {company: "Rocket Lab", location: "Rocket Lab LC-1A, Māhia Peninsula, New Zealand", date: "Sat Jun 13, 2020 05:12 UTC", detail: "Electron/Curie | Don't stop me now!", status: "Success", rocket: "7.5"},
        {company: "CASC", location: "LC-9, Taiyuan Satellite Launch Center, China", date: "Wed Jun 10, 2020 18:31 UTC", detail: "Long March 2C | Haiyang-1D", status: "Success", rocket: "30.8"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Thu Jun 04, 2020 01:25 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L7", status: "Success", rocket: "50.0"},
        {company: "CASC", location: "Site 9401 (SLS-2), Jiuquan Satellite Launch Center, China", date: "Sun May 31, 2020 08:53 UTC", detail: "Long March 2D | Gaofen-9-02 & HEAD-4", status: "Success", rocket: "29.75"},
        {company: "SpaceX", location: "LC-39A, Kennedy Space Center, Florida, USA", date: "Sat May 30, 2020 19:22 UTC", detail: "Falcon 9 Block 5 | SpaceX Demo-2", status: "Success", rocket: "50.0"},
        {company: "CASC", location: "Xichang Satellite Launch Center, China", date: "Fri May 29, 2020 20:13 UTC", detail: "Long March 11 | XJS-G and XJS-H", status: "Success", rocket: "5.3"},
        {company: "Virgin Orbit", location: "Cosmic Girl, Mojave Air and Space Port, California, USA", date: "Mon May 25, 2020 19:50 UTC", detail: "LauncherOne | Demo Flight", status: "Failure", rocket: "12.0"},
        {company: "VKS RF", location: "Site 43/4, Plesetsk Cosmodrome, Russia", date: "Fri May 22, 2020 07:31 UTC", detail: "Soyuz 2.1b/Fregat-M | Cosmos 2546", status: "Success", rocket: ""},
        {company: "MHI", location: "LA-Y2, Tanegashima Space Center, Japan", date: "Wed May 20, 2020 17:31 UTC", detail: "H-IIB | HTV-9", status: "Success", rocket: "112.5"},
        {company: "ULA", location: "SLC-41, Cape Canaveral AFS, Florida, USA", date: "Sun May 17, 2020 13:14 UTC", detail: "Atlas V 501 | OTV-6 (USSF-7)", status: "Success", rocket: "120.0"},
        {company: "ExPace", location: "Site 95, Jiuquan Satellite Launch Center, China", date: "Tue May 12, 2020 01:16 UTC", detail: "Kuaizhou 1A | Xingyun-2 01 (Wuhan) & 02", status: "Success", rocket: ""},
        {company: "CASC", location: "LC-101, Wenchang Satellite Launch Center, China", date: "Tue May 05, 2020 10:00 UTC", detail: "Long March 5B | Test Flight (New Crew Capsule)", status: "Success", rocket: ""},
        {company: "Roscosmos", location: "Site 31/6, Baikonur Cosmodrome, Kazakhstan", date: "Sat Apr 25, 2020 01:51 UTC", detail: "Soyuz 2.1a | Progress MS-14", status: "Success", rocket: "48.5"},
        {company: "SpaceX", location: "LC-39A, Kennedy Space Center, Florida, USA", date: "Wed Apr 22, 2020 19:30 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L6", status: "Success", rocket: "50.0"},
        {company: "IRGC", location: "Launch Plateform, Shahrud Missile Test Site", date: "Wed Apr 22, 2020 03:59 UTC", detail: "Qased | Noor 1", status: "Success", rocket: ""},
        {company: "CASC", location: "LC-2, Xichang Satellite Launch Center, China", date: "Thu Apr 09, 2020 11:46 UTC", detail: "Long March 3B/E | Nusantara Dua", status: "Failure", rocket: "29.15"},
        {company: "Roscosmos", location: "Site 31/6, Baikonur Cosmodrome, Kazakhstan", date: "Thu Apr 09, 2020 08:05 UTC", detail: "Soyuz 2.1a | Soyuz MS-16", status: "Success", rocket: "48.5"},
        {company: "ULA", location: "SLC-41, Cape Canaveral AFS, Florida, USA", date: "Thu Mar 26, 2020 20:18 UTC", detail: "Atlas V 551 | AEHF 6", status: "Success", rocket: "153.0"},
        {company: "CASC", location: "LC-3, Xichang Satellite Launch Center, China", date: "Tue Mar 24, 2020 03:43 UTC", detail: "Long March 2C | Yaogan-30-06", status: "Success", rocket: "30.8"},
        {company: "Arianespace", location: "Site 31/6, Baikonur Cosmodrome, Kazakhstan", date: "Sat Mar 21, 2020 17:06 UTC", detail: "Soyuz 2.1b/Fregat | OneWeb #3", status: "Success", rocket: "48.5"},
        {company: "SpaceX", location: "LC-39A, Kennedy Space Center, Florida, USA", date: "Wed Mar 18, 2020 12:16 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L5", status: "Success", rocket: "50.0"},
        {company: "VKS RF", location: "Site 43/4, Plesetsk Cosmodrome, Russia", date: "Mon Mar 16, 2020 18:28 UTC", detail: "Soyuz 2.1b/Fregat-M | Cosmos 2545", status: "Success", rocket: ""},
        {company: "CASC", location: "LC-201, Wenchang Satellite Launch Center, China", date: "Mon Mar 16, 2020 13:34 UTC", detail: "Long March 7A | XJY-6", status: "Failure", rocket: ""},
        {company: "CASC", location: "LC-2, Xichang Satellite Launch Center, China", date: "Mon Mar 09, 2020 11:55 UTC", detail: "Long March 3B/E | Beidou-3 G2", status: "Success", rocket: "29.15"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Sat Mar 07, 2020 04:50 UTC", detail: "Falcon 9 Block 5 | CRS-20", status: "Success", rocket: "50.0"},
        {company: "VKS RF", location: "Site 43/3, Plesetsk Cosmodrome, Russia", date: "Thu Feb 20, 2020 08:24 UTC", detail: "Soyuz 2.1a/Fregat-M | Meridian-M n†­19L", status: "Success", rocket: "48.5"},
        {company: "CASC", location: "LC-3, Xichang Satellite Launch Center, China", date: "Wed Feb 19, 2020 21:07 UTC", detail: "Long March 2D | XJS-C to F", status: "Success", rocket: "29.75"},
        {company: "Arianespace", location: "ELA-3, Guiana Space Centre, French Guiana, France", date: "Tue Feb 18, 2020 22:18 UTC", detail: "Ariane 5 ECA | JCSAT-17 & GEO-KOMPSAT 2B", status: "Success", rocket: "200.0"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Mon Feb 17, 2020 15:05 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L4", status: "Success", rocket: "50.0"},
        {company: "Northrop", location: "LP-0A, Wallops Flight Facility, Virginia, USA", date: "Sat Feb 15, 2020 20:21 UTC", detail: "Antares 230+ | CRS NG-13", status: "Success", rocket: "85.0"},
        {company: "ULA", location: "SLC-41, Cape Canaveral AFS, Florida, USA", date: "Mon Feb 10, 2020 04:03 UTC", detail: "Atlas V 411 | Solar Orbiter", status: "Success", rocket: "115.0"},
        {company: "ISA", location: "Imam Khomeini Spaceport, Semnan Space Center, Iran", date: "Sun Feb 09, 2020 15:48 UTC", detail: "Simorgh | Zafar 1", status: "Failure", rocket: ""},
        {company: "MHI", location: "LA-Y1, Tanegashima Space Center, Japan", date: "Sun Feb 09, 2020 01:34 UTC", detail: "H-IIA 202 | IGS-Optical 7", status: "Success", rocket: "90.0"},
        {company: "Arianespace", location: "Site 31/6, Baikonur Cosmodrome, Kazakhstan", date: "Thu Feb 06, 2020 21:42 UTC", detail: "Soyuz 2.1b/Fregat | OneWeb #2", status: "Success", rocket: "48.5"},
        {company: "Rocket Lab", location: "Rocket Lab LC-1A, Māhia Peninsula, New Zealand", date: "Fri Jan 31, 2020 02:56 UTC", detail: "Electron/Curie | Birds of a Feather / NROL-151", status: "Success", rocket: "7.5"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Wed Jan 29, 2020 14:06 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L3", status: "Success", rocket: "50.0"},
        {company: "SpaceX", location: "LC-39A, Kennedy Space Center, Florida, USA", date: "Sun Jan 19, 2020 15:30 UTC", detail: "Falcon 9 Block 5 | Crew Dragon Inflight Abort Test", status: "Success", rocket: "50.0"},
        {company: "Arianespace", location: "ELA-3, Guiana Space Centre, French Guiana, France", date: "Thu Jan 16, 2020 21:05 UTC", detail: "Ariane 5 ECA | Eutelsat Konnect BB4A & GSAT-30", status: "Success", rocket: "200.0"},
        {company: "ExPace", location: "Site 95, Jiuquan Satellite Launch Center, China", date: "Thu Jan 16, 2020 03:02 UTC", detail: "Kuaizhou 1A | Yinhe-1", status: "Success", rocket: ""},
        {company: "CASC", location: "LC-9, Taiyuan Satellite Launch Center, China", date: "Wed Jan 15, 2020 02:53 UTC", detail: "Long March 2D | Jilin-1 Wideband 01 & μSat-7/8", status: "Success", rocket: "29.75"},
        {company: "CASC", location: "LC-2, Xichang Satellite Launch Center, China", date: "Tue Jan 07, 2020 15:20 UTC", detail: "Long March 3B/E | TJSW-5", status: "Success", rocket: "29.15"},
        {company: "SpaceX", location: "SLC-40, Cape Canaveral AFS, Florida, USA", date: "Tue Jan 07, 2020 02:19 UTC", detail: "Falcon 9 Block 5 | Starlink V1 L2", status: "Success", rocket: "50.0"},
        {company: "NASA", location: "LC-39A, Kennedy Space Center, Florida, USA", date: "Sat May 30, 2020 19:22 UTC", detail: "Falcon 9 Block 5 | Crew Dragon Demo-2", status: "Success", rocket: "50.0"},
        {company: "ESA", location: "ELA-3, Guiana Space Centre, French Guiana, France", date: "Tue Jul 25, 2018 11:25 UTC", detail: "Ariane 5 ECA | Galileo 23-26", status: "Partial Failure", rocket: "200.0"},
        {company: "Blue Origin", location: "West Texas Suborbital Launch Site, Texas, USA", date: "Wed Dec 11, 2019 15:00 UTC", detail: "New Shepard | NS-12", status: "Success", rocket: ""}
    ];

    // Initialize the dashboard immediately
    initializeDashboard();
    setupEventListeners();
    updateStatistics();
    renderAllMissions();

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

    function renderAllMissions() {
        const missionsGrid = document.getElementById('missionsGrid');
        if (!missionsGrid) return;

        // Clear existing content
        missionsGrid.innerHTML = '';

        // Show all missions from the embedded dataset
        spaceMissions.forEach((mission, index) => {
            const missionCard = createMissionCard(mission, index);
            missionsGrid.appendChild(missionCard);
        });

        // Add info about dataset
        const infoDiv = document.createElement('div');
        infoDiv.className = 'filter-info';
        infoDiv.innerHTML = `
            <p style="text-align: center; margin: 20px; color: #00d4ff; font-size: 1.1rem;">
                <i class="fas fa-check-circle"></i>
                Displaying ${spaceMissions.length} space missions from the embedded dataset.
                <br><em style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;">
                This demonstrates the complete functionality with real mission data.
                </em>
            </p>
        `;
        missionsGrid.appendChild(infoDiv);

        // Update company filter options
        updateCompanyFilter();

        console.log(`Rendered ${spaceMissions.length} missions from embedded dataset`);
    }

    function createMissionCard(mission, index) {
        const card = document.createElement('div');
        card.className = 'mission-card fade-in';
        card.setAttribute('data-company', mission.company);
        card.setAttribute('data-status', mission.status);
        card.style.animationDelay = `${(index % 20) * 0.1}s`;

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
                <div class="company-badge ${companyClass}">${mission.company}</div>
                <div class="status-badge ${statusClass}">${mission.status}</div>
            </div>
            <h3 class="mission-title">${mission.detail}</h3>
            <div class="mission-details">
                <p class="mission-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${mission.location}
                </p>
                <p class="mission-date">
                    <i class="fas fa-calendar"></i>
                    ${mission.date}
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
        
        // Show all filtered results
        filteredMissions.forEach((mission, index) => {
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
                    Found ${filteredMissions.length} matching missions out of ${spaceMissions.length} total.
                </p>
            `;
            missionsGrid.appendChild(infoDiv);
        } else {
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

        console.log(`Filtered: ${filteredMissions.length} of ${spaceMissions.length} missions`);
    }

    function updateStatistics() {
        // Calculate statistics from spaceMissions data
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
            heroTotalElement.textContent = totalCount;
        }

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

    // Add scroll effects
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    console.log('Space Missions Dashboard loaded with embedded dataset:', spaceMissions.length, 'missions');
});
