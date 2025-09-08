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