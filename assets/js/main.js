/**
 * DIRLab Main JavaScript
 * ======================
 * Shared components and utilities for the website
 */

// ============================================
// NAVIGATION
// ============================================
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'People', href: '/people/' },
  { label: 'CFP', href: '/cfp/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Datasets', href: '/datasets/' },
  { label: 'About', href: '/about/' }
];

function renderNavbar(currentPage = '') {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Determine base path for GitHub Pages compatibility
  const basePath = getBasePath();

  navbar.innerHTML = `
    <div class="navbar__inner">
      <a href="${basePath}/" class="navbar__logo">
        <span>DIRLab</span>
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
        <div class="footer__logo">DIRLab</div>
        <p style="color: rgba(255,255,255,0.7); font-size: var(--text-sm); max-width: 500px;">
          Data Intelligence Research Lab<br>
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
  // Check if we're on GitHub Pages
  const pathname = window.location.pathname;
  // If path starts with a repo name (e.g., /GiriYomi.github.io/), return it
  const match = pathname.match(/^\/[^\/]+\.github\.io/);
  if (match) {
    return match[0];
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
    initSearch,
    initCommon
  };
}

