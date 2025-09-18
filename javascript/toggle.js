// javascript/toggle.js
(function () {
  const KEY = 'site-theme';
  const THEMES = {
    v1: 'css/version1.css',
    v2: 'css/version2.css'
  };

  function getLinkEl() {
    return document.getElementById('theme-css');
  }

  function currentTheme() {
    return localStorage.getItem(KEY) === 'v2' ? 'v2' : 'v1'; // default v1
  }

  function applyTheme(theme) {
    const link = getLinkEl();
    if (link) {
      link.setAttribute('href', THEMES[theme]);
    }
  }

  function setTheme(theme) {
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
  }

  function toggleTheme() {
    setTheme(currentTheme() === 'v1' ? 'v2' : 'v1');
  }

  document.addEventListener('DOMContentLoaded', () => {

    applyTheme(currentTheme());


    const btn = document.getElementById('toggle-style');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    }
  });
})();

