/**
 * DIRLab Main JavaScript
 * ======================
 * Shared components and utilities for the website
 */

// ============================================
// NAVIGATION
// ============================================
const NAV_ITEMS = [
  { label: 'Home', href: 'index.html' },
  { label: 'Publications', href: 'publications.html' },
  { label: 'People', href: 'people.html' },
  { label: 'CFP', href: 'cfp.html' },
  { label: 'Gallery', href: 'gallery.html' },
  { label: 'Datasets', href: 'datasets.html' },
  { label: 'About', href: 'about.html' }
];

function renderNavbar(currentPage = '') {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Determine base path
  const basePath = getBasePath();

  navbar.innerHTML = `
    <div class="navbar__inner">
      <a href="${basePath}index.html" class="navbar__logo">
        <img src="${basePath}assets/img/dirlab-logo.png" alt="DIRLab" style="height: 56px;">
      </a>
      <nav class="navbar__nav" id="nav-menu">
        ${NAV_ITEMS.map(item => `
          <a href="${basePath}${item.href}" 
             class="navbar__link ${currentPage === item.label.toLowerCase() ? 'active' : ''}">
            ${item.label}
          </a>
        `).join('')}
      </nav>
      <button class="navbar__mobile-toggle" id="nav-toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;

  // Mobile toggle functionality
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      menu?.classList.remove('open');
    }
  });
}

// Handle navbar scroll effect
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// ============================================
// FOOTER
// ============================================
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const basePath = getBasePath();
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="container">
      <div class="footer__inner">
        <div class="footer__logos">
          <img src="${basePath}assets/img/dirlab-logo-white.jpg" alt="DIRLab" class="footer__logo-img" style="height: 60px; border-radius: 8px;">
          <img src="${basePath}assets/img/ud-logo.png" alt="University of Delaware" class="footer__logo-img" style="height: 50px; border-radius: 8px;">
        </div>
        <p style="color: rgba(255,255,255,0.7); font-size: var(--text-sm); max-width: 500px;">
          Data Intelligence Research Lab<br>
          Department of Computer & Information Sciences<br>
          University of Delaware
        </p>
        <div class="footer__links">
          ${NAV_ITEMS.map(item => `
            <a href="${basePath}${item.href}" class="footer__link">${item.label}</a>
          `).join('')}
        </div>
        <p class="footer__copyright">
          &copy; ${year} DIRLab @ University of Delaware. All rights reserved.
        </p>
      </div>
    </div>
  `;
}

// ============================================
// UTILITIES
// ============================================

// Get base path for GitHub Pages (handles both local and deployed)
function getBasePath() {
  const pathname = window.location.pathname;
  // Check if we're in a subdirectory (like GitHub Pages repo name)
  const match = pathname.match(/^\/[^\/]+\.github\.io\//);
  if (match) {
    return match[0];
  }
  // Check if we're viewing a file directly (file:// protocol)
  if (window.location.protocol === 'file:') {
    // Get the directory of the current file
    const pathParts = pathname.split('/');
    pathParts.pop(); // Remove the filename
    return pathParts.join('/') + '/';
  }
  return '';
}

// Create element from HTML string
function createElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

// Format authors with student highlighting
function formatAuthors(authorString) {
  return authorString.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

// Get initials from name
function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Debounce function
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

// ============================================
// HERO SCROLL EFFECT (Home page only)
// ============================================
function initHeroScroll() {
  const hero = document.querySelector('.hero');
  const heroLogo = document.querySelector('.hero__logo');
  const heroTagline = document.querySelector('.hero__tagline');
  
  if (!hero || !heroLogo) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const progress = Math.min(scrollY / (heroHeight * 0.6), 1);
    
    // Scale logo down as user scrolls
    const scale = 1 - (progress * 0.5);
    const opacity = 1 - progress;
    
    heroLogo.style.transform = `scale(${scale})`;
    heroLogo.style.opacity = opacity;
    
    if (heroTagline) {
      heroTagline.style.opacity = opacity;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ============================================
// NEWS TICKER
// ============================================
function initNewsTicker(newsData) {
  const ticker = document.getElementById('news-ticker');
  if (!ticker || !newsData || newsData.length === 0) return;

  // Create track with duplicated items for seamless loop
  const itemsHtml = newsData.map(item => `
    <div class="news-ticker__item">
      <span class="news-ticker__date">${item.date}</span>
      <span class="news-ticker__content">${item.content}</span>
    </div>
  `).join('');

  ticker.innerHTML = `
    <div class="news-ticker__track">
      ${itemsHtml}
      ${itemsHtml}
    </div>
  `;
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initSearch(inputId, items, renderCallback) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const handleSearch = debounce((query) => {
    const filtered = items.filter(item => {
      const searchStr = JSON.stringify(item).toLowerCase();
      return searchStr.includes(query.toLowerCase());
    });
    renderCallback(filtered);
  }, 250);

  input.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });
}

// ============================================
// TABLE SORTING
// ============================================
function initTableSort(tableId, data, renderCallback) {
  const table = document.getElementById(tableId);
  if (!table) return;

  let sortColumn = null;
  let sortDirection = 'default';

  table.querySelectorAll('th.sortable').forEach((th, index) => {
    th.addEventListener('click', () => {
      const column = th.dataset.column;
      
      // Cycle through: default -> asc -> desc -> default
      if (sortColumn !== column) {
        sortColumn = column;
        sortDirection = 'asc';
      } else {
        if (sortDirection === 'asc') {
          sortDirection = 'desc';
        } else if (sortDirection === 'desc') {
          sortDirection = 'default';
          sortColumn = null;
        } else {
          sortDirection = 'asc';
        }
      }

      // Update visual indicators
      table.querySelectorAll('th.sortable').forEach(h => {
        h.classList.remove('asc', 'desc');
      });
      if (sortDirection !== 'default') {
        th.classList.add(sortDirection);
      }

      // Sort and re-render
      const sortedData = sortData(data, sortColumn, sortDirection);
      renderCallback(sortedData);
    });
  });
}

function sortData(data, column, direction) {
  if (direction === 'default' || !column) {
    // Default sort: Tier > Venue > Deadline > Conference
    return [...data].sort((a, b) => {
      // Tier priority: A* > A > B > C > empty
      const tierOrder = { 'A*': 0, 'A': 1, 'B': 2, 'C': 3, '': 4 };
      const tierA = tierOrder[a.tier] ?? 4;
      const tierB = tierOrder[b.tier] ?? 4;
      if (tierA !== tierB) return tierA - tierB;
      
      // Then by venue name
      const venueCompare = a.venue.localeCompare(b.venue);
      if (venueCompare !== 0) return venueCompare;
      
      // Then by deadline
      return a.deadlines.localeCompare(b.deadlines);
    });
  }

  return [...data].sort((a, b) => {
    let valA = a[column] ?? '';
    let valB = b[column] ?? '';

    // Special handling for tier
    if (column === 'tier') {
      const tierOrder = { 'A*': 0, 'A': 1, 'B': 2, 'C': 3, '': 4 };
      valA = tierOrder[valA] ?? 4;
      valB = tierOrder[valB] ?? 4;
    }

    if (typeof valA === 'string') {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if (valA < valB) return direction === 'asc' ? -1 : 1;
    if (valA > valB) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

// ============================================
// INITIALIZATION
// ============================================
function initCommon(currentPage = '') {
  renderNavbar(currentPage);
  initNavbarScroll();
  renderFooter();
}

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    NAV_ITEMS,
    renderNavbar,
    initNavbarScroll,
    renderFooter,
    getBasePath,
    createElement,
    formatAuthors,
    getInitials,
    debounce,
    initHeroScroll,
    initNewsTicker,
    initSearch,
    initTableSort,
    sortData,
    initCommon
  };
}
