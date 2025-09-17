
(function () {
  const KEY = 'site-theme';          // localStorage key
  const V1  = 'v1';                  // floral
  const V2  = 'v2';                  // sunset
  const CSS = { v1: 'css/version1.css', v2: 'css/version2.css' };

  function getLinkEl() {
    return document.getElementById('theme-css') ||
           document.querySelector('link[data-theme]');
  }

  function currentTheme() {
    return localStorage.getItem(KEY) === V2 ? V2 : V1; // default v1
  }

  function applyTheme(theme) {
    const link = getLinkEl();
    if (!link) return;
    link.setAttribute('href', CSS[theme] || CSS[V1]);
    // optional: handy for CSS hooks if you want
    document.documentElement.dataset.theme = theme;
  }

  function setTheme(theme) {
    localStorage.setItem(KEY, theme);
    applyTheme(theme);
  }

  function toggleTheme() {
    setTheme(currentTheme() === V1 ? V2 : V1);
  }

  document.addEventListener('DOMContentLoaded', () => {

    applyTheme(currentTheme());


    const btn = document.getElementById('toggle-style') ||
                document.querySelector('[data-action="toggle-style"]');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    }
  });
})();
