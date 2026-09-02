const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function updateButton() {
  const isDark = html.dataset.theme === 'dark';
  toggle.setAttribute('aria-pressed', isDark);
  toggle.textContent = isDark ? 'Light mode' : 'Dark mode';
}

toggle.addEventListener('click', () => {
  const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
  updateButton();
});

updateButton();
