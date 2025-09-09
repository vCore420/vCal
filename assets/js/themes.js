// vCoreUI Theme Toggle

const themeToggle = document.getElementById('themeToggle');

function setTheme(isLight) {
  document.body.classList.toggle('theme-light', isLight);
}

themeToggle.addEventListener('change', function() {
  setTheme(this.checked); 
  localStorage.setItem('theme', this.checked ? 'light' : 'dark');
});

// On page load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  themeToggle.checked = true;
  setTheme(true);
} else {
  themeToggle.checked = false;
  setTheme(false);
}

// Page Banner re sizing Functionality 
(function() {
  const banner = document.querySelector('.banner');
  const description = banner.querySelector('#main-synopsis');
  const bannerFullHeight = 120; // px
  const bannerMinHeight = 80;   // px
  const shrinkDistance = bannerFullHeight - bannerMinHeight;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const progress = clamp(scrollY / shrinkDistance, 0, 1);
    const newHeight = bannerFullHeight - (bannerFullHeight - bannerMinHeight) * progress;
    banner.style.height = newHeight + 'px';
    banner.style.minHeight = newHeight + 'px';
    description.style.opacity = 1 - progress;

    // Add/remove class for CSS
    if (progress >= 1) {
      banner.classList.add('shrunk');
    } else {
      banner.classList.remove('shrunk');
    }
  }

  function onResize() {
    banner.style.height = '';
    banner.style.minHeight = '';
    description.style.opacity = '';
    banner.classList.remove('shrunk');
    onScroll();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  document.addEventListener('DOMContentLoaded', onScroll);
})();