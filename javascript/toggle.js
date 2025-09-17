document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-style");
    const themeLink = document.getElementById("theme-css");
  

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      themeLink.href = savedTheme;
    }
  
    toggleButton.addEventListener("click", function () {
      const currentTheme = themeLink.getAttribute("href");
      const newTheme = currentTheme.includes("version1.css")
        ? "css/version2.css"
        : "css/version1.css";
  
      themeLink.href = newTheme;
      localStorage.setItem("theme", newTheme);
    });
  });
  